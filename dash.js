/* Dashboard、Calendar、測驗／考試。載入喺 v2.js 之後。目標：2027 年 1 月遞交 Cadet 申請，倒數 → 學習計劃 → 強制測驗。 */
(function(){
const PAD=n=>String(n).padStart(2,"0"),ymd=d=>d.getFullYear()+"-"+PAD(d.getMonth()+1)+"-"+PAD(d.getDate());
const P_=s=>{const[a,b,c]=s.split("-").map(Number);return new Date(a,b-1,c)};
const addD=(s,n)=>{const d=P_(s);d.setDate(d.getDate()+n);return ymd(d)};
const diff=(a,b)=>Math.round((P_(b)-P_(a))/864e5);
const todayS=()=>ymd(new Date());
const ls=(k,d)=>{try{return localStorage.getItem(k)||d}catch(e){return d}};
const lset=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const target=()=>ls("cadetTarget","2027-01-15");
const start=()=>{let s=ls("cadetPlanStart","");if(!s){s=todayS();lset("cadetPlanStart",s)}return s};
let dashLv=0;V2.tests=V2.tests||{};try{const x=JSON.parse(localStorage.getItem("cadetV2")||"null");if(x&&x.tests)V2.tests=x.tests}catch(e){}
/* ---------- 計劃：Level 截止日、每週測驗、模擬考 ---------- */
function plan(){
  const S=start(),T=target(),D=Math.max(14,diff(S,T)),tests=[],
    L={1:addD(S,Math.round(D*.40)),2:addD(S,Math.round(D*.70)),3:addD(S,Math.round(D*.88))};
  const mock1=addD(T,-14),mock2=addD(T,-7),fin=addD(T,-2);
  [1,2,3].forEach(n=>tests.push({id:"lv"+n,date:L[n],type:"level",lv:n,title:`Level ${n} 考試`,n:25}));
  tests.push({id:"mock1",date:mock1,type:"mock",title:"模擬考 1",n:40},{id:"mock2",date:mock2,type:"mock",title:"模擬考 2",n:40},{id:"final",date:fin,type:"mock",title:"最終模擬考",n:50});
  const taken=new Set(tests.map(t=>t.date));
  for(let d=S;d<=addD(T,-15);d=addD(d,1)){if(P_(d).getDay()===6&&!taken.has(d)&&d>S)tests.push({id:"wk-"+d,date:d,type:"weekly",title:"每週測驗",n:15})}
  tests.sort((a,b)=>a.date.localeCompare(b.date));
  return{S,T,L,tests}}
function nodes(){const N=buildPath().filter(n=>!n.h),isDone=n=>n.note?!!V2.noted["n:"+n.note.id]:!!LV.st.done[n.x.l.id];return N.map(n=>({n,lv:Cadet.levelOf(n.k,n.g),done:isDone(n)}))}
function dailyTarget(pl){const t=todayS(),N=nodes();let lv=[1,2,3].find(l=>N.some(x=>x.lv===l&&!x.done));if(!lv)return{lv:null,n:0,left:0};
  const left=N.filter(x=>x.lv===lv&&!x.done).length,days=Math.max(1,diff(t,pl.L[lv])+1);return{lv,n:Math.ceil(left/days),left,due:pl.L[lv]}}
/* ---------- 測驗 ---------- */
function scopeOK(lv){const L=learnedTopics();return t=>L.has(t.id)&&(!lv||Cadet.levelOf(Cadet.topic(t.id).s.key,gname(t))===lv)}
const itemKey=it=>it.t==="mcq"?"m:"+it.m.q:"c:"+it.c._k;
const itemTopics=it=>it.t==="mcq"?it.topics:(it.c.topic?[it.c.topic]:[]);
function buildPool(test,opt){opt=opt||{};const lv=test.type==="level"?test.lv:0,L=learnedTopics(),
    ok=id=>{if(!L.has(id))return false;const f=Cadet.topic(id);return f&&!f.s.optional&&impOf(id)<=2&&(!lv||Cadet.levelOf(f.s.key,gname(f.t))===lv)&&(!opt.topics||opt.topics.has(id))};
  const q=[];(Cadet.lnotes||[]).forEach(n=>{if(!V2.noted["n:"+n.id])return;if(lv&&Cadet.levelOf(n.k,n.g)!==lv)return;const tp=chapterTopics(n.k,n.g);if(opt.topics&&!tp.some(t=>opt.topics.has(t)))return;(n.mcq||[]).forEach(m=>q.push({t:"mcq",m,src:n.t,nid:n.id,topics:tp}))});
  model().cards.forEach(c=>{if(c.st!=="todo"&&c.topic&&ok(c.topic)&&!(Cadet.subjects[c._s]||{}).optional)q.push({t:"card",c})});
  const ex=opt.exclude||new Set(),keyOf=x=>x.t==="mcq"?"m:"+x.m.q:"c:"+x.c._k,fr=list=>{const l=shuf(list.slice());return l.filter(x=>!ex.has(keyOf(x))).concat(l.filter(x=>ex.has(keyOf(x))))}; // 新題優先，唔夠先補返舊題
  const mcA=fr(q.filter(x=>x.t==="mcq")),cdA=fr(q.filter(x=>x.t==="card")),mc=mcA.slice(0,Math.ceil(test.n/2)),cd=cdA.map(x=>mkCardItem(x.c)).filter(Boolean);
  return shuf(mc.concat(cd).slice(0,test.n))}
/* 測驗唔係 flash card：card 轉做選擇題（干擾項取自同 topic／同科其他 card 嘅答案）或短答題（自動核對關鍵字） */
const STOP=new Set("the a an and or of to in on at is are was be by for with as it its this that these those from into than then so if not no can may must should will which who what when where how why do does did has have had their there about also only more most less any each per".split(" "));
const nrm=t=>String(t||"").toLowerCase().replace(/[^a-z0-9.°%/+\-\s]/g," ").replace(/\s+/g," ").trim();
function keyToks(a){const seen=new Set(),out=[];nrm(a).split(" ").forEach(w=>{w=w.replace(/^[.\-/+]+|[.\-/+]+$/g,"");if(!w||STOP.has(w)||seen.has(w))return;if(w.length<3&&!/\d/.test(w))return;seen.add(w);out.push(w)});
  return out.sort((x,y)=>(/\d/.test(y)?1:0)-(/\d/.test(x)?1:0)||y.length-x.length).slice(0,6)}
function mkCardItem(c){const ans=String(c.a||"").trim();if(!ans)return null;const toks=keyToks(ans),short=ans.length<=70&&toks.length>=1;
  const M=model(),f=c.topic&&Cadet.topic(c.topic),g=f?gname(f.t):null,nc=nrm(ans).slice(0,40);
  const sameT=(M.byTopic.get(c.topic)||[]),sameG=g?M.cards.filter(x=>x.topic&&x.topic!==c.topic&&Cadet.topic(x.topic)&&Cadet.topic(x.topic).s.key===f.s.key&&gname(Cadet.topic(x.topic).t)===g):[];
  const qw=new Set(keyToks(c.q+" "+ans)),sim=x=>{const t=keyToks(x.q+" "+x.a);return t.filter(w=>qw.has(w)).length};
  const ok=x=>x!==c&&x.a&&nrm(x.a).slice(0,40)!==nc&&x.a.length<=Math.max(70,ans.length*2.5)&&x.a.length>=ans.length*.3&&Math.abs(Math.log((x.a.length+10)/(ans.length+10)))<1.1;
  const seen=new Set([nc]),d=[],take=pool=>pool.forEach(x=>{if(d.length>=3||!ok(x))return;const k=nrm(x.a).slice(0,40);if(seen.has(k))return;seen.add(k);d.push(x.a)});
  take(shuf(sameT.slice()));take(shuf(sameG.slice()).sort((x,y)=>sim(y)-sim(x)));
  if(d.length<3)take(shuf(M.cards.filter(x=>x._s===c._s&&x.topic!==c.topic)).sort((x,y)=>sim(y)-sim(x)));
  if(d.length>=3&&!(short&&Math.random()<.5)){const opts=shuf([ans,...d]);return{t:"cmc",c,opts,a:opts.indexOf(ans)}}
  if(toks.length)return{t:"sa",c,toks};return null}
const saCheck=(user,toks)=>{const u=" "+nrm(user)+" ";if(u.trim().length<2)return false;const hit=toks.filter(t=>u.indexOf(t)>=0).length;return hit>=Math.max(1,Math.ceil(toks.length*.6))};
function startTest(id,opt){const pl=plan(),test=pl.tests.find(t=>t.id===id);if(!test)return;const pool=buildPool(test,opt);
  if(pool.length<8){modal(`<h3>未夠內容</h3><div class="small">呢個測驗要最少 8 題；你而家只解鎖咗 ${pool.length} 題。去「📚 學習」睇多啲 Note、做多啲課堂，內容解鎖咗先考到。</div><div class="acts"><button class="b" id="tgo">去學習</button><button class="b g" id="tcl">關閉</button></div>`);$("#tgo").onclick=()=>{closeModal();show("learn")};$("#tcl").onclick=closeModal;return}
  const ans=pool.map(()=>null),topics=new Set();pool.forEach(it=>itemTopics(it).forEach(t=>topics.add(t)));
  let i=0;const ov=document.createElement("div");ov.id="tst";document.body.appendChild(ov);document.body.style.overflow="hidden";
  const end=()=>{ov.remove();document.body.style.overflow="";show(view)};
  const lab=k=>"ABCD"[k];
  /* ---- 作答階段：唔即時顯示對錯，最後先一次過核對 ---- */
  function step(){if(i>=pool.length)return finish();
    const it=pool[i],hd=`<div class="thead"><button class="x" id="tx" aria-label="離開">✕</button><div class="tbar"><i style="width:${i/pool.length*100}%"></i></div><span class="small">${i+1} / ${pool.length}</span></div>`;
    const nav=`<div class="acts tnav">${i>0?'<button class="b g" id="tprev">← 上一題</button>':""}<button class="b" id="tnext">${i===pool.length-1?"完成":"下一題"}</button></div>`;
    let body="";
    if(it.t==="mcq"){const m=it.m;body=`<div class="tq">${inl(m.q)}</div>`+Object.entries(m.o).map(([k,v])=>`<button class="opt ${ans[i]===k?"sel":""}" data-k="${k}">${k}. ${inl(v)}</button>`).join("")}
    else if(it.t==="cmc"){body=`<div class="tq">${esc(it.c.q)}</div>`+it.opts.map((o,k)=>`<button class="opt ${ans[i]===k?"sel":""}" data-i="${k}">${lab(k)}. ${esc(o)}</button>`).join("")}
    else{body=`<div class="tq">${esc(it.c.q)}</div><div class="small" style="margin-bottom:6px">短答題：用英文寫出重點（最後會按關鍵字核對）</div><textarea id="tin" class="tin" rows="3" placeholder="Type your answer…">${esc(ans[i]||"")}</textarea>`}
    ov.innerHTML=`<div class="tbox">${hd}${body}${nav}</div>`;
    ov.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{ans[i]=it.t==="mcq"?b.dataset.k:+b.dataset.i;ov.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));b.classList.add("sel")});
    const tin=$("#tin");if(tin){tin.oninput=()=>{ans[i]=tin.value};tin.focus()}
    $("#tnext").onclick=()=>{i++;step()};const pv=$("#tprev");if(pv)pv.onclick=()=>{i--;step()};
    $("#tx").onclick=()=>{if(confirm("離開測驗？今次唔會計分。"))end()}}
  /* ---- 核對 ---- */
  function judge(it,a){if(a===null||a===""||a===undefined)return false;if(it.t==="mcq")return a===it.m.a;if(it.t==="cmc")return a===it.a;return saCheck(a,it.toks)}
  function finish(){const un=ans.filter(a=>a===null||a==="").length;if(un&&!confirm(`仲有 ${un} 題冇答（會當錯）。確定交卷？`)){i=ans.findIndex(a=>a===null||a==="");step();return}
    const res=pool.map((it,k)=>judge(it,ans[k]));pool.forEach((it,k)=>{if(it.t!=="mcq")grade(it.c,res[k]?1:0)});report(res,false)}
  function save(res,first){const ok=res.filter(Boolean).length,pct=Math.round(ok/pool.length*100),pass=pct>=70,old=V2.tests[id]||{},seen=new Set(old.seen||[]);if(first)pool.forEach(it=>seen.add(itemKey(it)));
    V2.tests[id]={s:ok,n:pool.length,pct,pass:pass||!!old.pass,last:pct,t:Date.now(),seen:[...seen].slice(-400)};v2save();return{ok,pct,pass}}
  function report(res,again){const r=save(res,!again),wrong=pool.map((it,k)=>k).filter(k=>!res[k]);
    const ansText=(it,a)=>a===null||a===""||a===undefined?"（冇答）":it.t==="mcq"?a+". "+inl(it.m.o[a]):it.t==="cmc"?lab(a)+". "+esc(it.opts[a]):esc(a);
    const corr=it=>it.t==="mcq"?it.m.a+". "+inl(it.m.o[it.m.a]):it.t==="cmc"?lab(it.a)+". "+esc(it.opts[it.a]):esc(it.c.a);
    const qtxt=it=>it.t==="mcq"?inl(it.m.q):esc(it.c.q),why=it=>it.t==="mcq"?(it.m.why?inl(it.m.why):"")+(it.m.zh?" 💡 "+inl(it.m.zh):""):(it.c.zh?"💡 "+esc(it.c.zh):"");
    const revs=[...wrong,...pool.map((x,k)=>k).filter(k=>res[k])].map(k=>{const it=pool[k];return `<div class="rv ${res[k]?"ok":"no"}"><div><b>${res[k]?"✅":"❌"} ${k+1}. ${qtxt(it)}</b></div><div class="small">你答：${ansText(it,ans[k])}</div>${res[k]?"":`<div class="small">正確：${corr(it)}</div>`}${why(it)?`<div class="small">${why(it)}</div>`:""}${!res[k]&&it.t==="sa"&&ans[k]?`<button class="b g" data-ov="${k}">我其實答啱（覆核）</button>`:""}</div>`}).join("");
    /* 唔合格：按錯咗嘅題目整理 study note */
    let note="";if(!r.pass){const by=new Map();wrong.forEach(k=>{const it=pool[k];itemTopics(it).forEach(t=>{(by.get(t)||by.set(t,[]).get(t)).push(it)})});
      note=`<div class="panel snote"><h3>📖 Study note（只列你答錯嘅 topics）</h3>`+[...by].slice(0,12).map(([t,its])=>{const f=Cadet.topic(t);if(!f)return "";const ln=(Cadet.lnotes||[]).find(n=>n.k===f.s.key&&n.g===gname(f.t));
        return `<div class="sn"><b>${esc(f.t.t)}</b> <span class="impb i${impOf(t)}">${IMPN[impOf(t)][1]} ${IMPN[impOf(t)][0]}</span><div>${esc(f.t.d||"")}</div>${(f.t.pts||[]).length?`<ul>${f.t.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}${its.filter(x=>x.t!=="mcq").slice(0,3).map(x=>`<div class="small">Q: ${esc(x.c.q)}<br>A: ${esc(x.c.a)}</div>`).join("")}${ln?`<button class="lk" data-gonote="${ln.id}">📖 睇 chapter note →</button>`:""}</div>`}).join("")+`<div class="small" style="margin-top:8px">溫習完先重考：會出同一批 topics、但盡量唔同嘅題目。</div></div>`}
    ov.innerHTML=`<div class="tbox"><h2>${esc(test.title)}</h2><div class="tbig ${r.pass?"p":"f"}">${r.pct}%</div><div class="small">${r.ok} / ${pool.length} 啱 · ${r.pass?"合格 ✅（≥70%）":"未合格 ❌（要 ≥70%）"}${again?" · 覆核後":""}</div>
      <div class="acts" style="margin:14px 0"><button class="b" id="tdone">返 Dashboard</button><button class="b ${r.pass?"g":""}" id="tretry">${r.pass?"再考一次（新題）":"溫習完重考（同 topics、新題）"}</button></div>${note}<div class="panel"><h3>逐題核對</h3>${revs}</div></div>`;
    $("#tdone").onclick=()=>{end();show("dash")};
    $("#tretry").onclick=()=>{ov.remove();document.body.style.overflow="";startTest(id,{topics,exclude:new Set((V2.tests[id]||{}).seen||[])})};
    ov.querySelectorAll("[data-gonote]").forEach(b=>b.onclick=()=>{end();nLesson=b.dataset.gonote;fromPath=false;show("notes")});
    ov.querySelectorAll("[data-ov]").forEach(b=>b.onclick=()=>{const k=+b.dataset.ov;res[k]=true;grade(pool[k].c,1);report(res,true)})}
  step()}
const stateOf=(t,today)=>{const r=V2.tests[t.id];if(r&&r.pass)return{k:"pass",l:`✅ ${r.pct}%`};if(t.date<today)return{k:"over",l:r?`❌ ${r.pct}% · 逾期`:"逾期未考"};if(t.date===today)return{k:"today",l:r?`❌ ${r.pct}% · 再考`:"今日要考"};return{k:"soon",l:`${diff(today,t.date)} 日後`}};
/* ---------- Dashboard ---------- */
window.renderDash=function(){
  const pl=plan(),today=todayS(),P=progress(),N=nodes(),dt=dailyTarget(pl),box=$("#v-dash"),left=diff(today,pl.T),total=Math.max(1,diff(pl.S,pl.T)),elapsed=Math.min(100,Math.max(0,Math.round(diff(pl.S,today)/total*100)));
  const sug=suggest(4),due=model().cards.filter(c=>c.st!=="todo"&&c.topic&&learnedTopics().has(c.topic)&&!isNew(c)&&isDue(c)).length;
  const lessonsDone=Object.keys(LV.st.done).length,lessonsAll=allLessons().length,notesAll=(Cadet.lnotes||[]).length,notesRead=(Cadet.lnotes||[]).filter(n=>V2.noted["n:"+n.id]).length;
  const U=[...learnedTopics()].filter(id=>Cadet.topic(id)&&!Cadet.topic(id).s.optional),st=U.map(topicStatus),practising=st.filter(x=>x===2).length,mastered=st.filter(x=>x===3).length;
  const mustIds=allTopics().filter(x=>!x.s.optional&&impOf(x.t.id)===1).map(x=>x.t.id),mustAll=mustIds.length,mustM=mustIds.filter(id=>topicStatus(id)===3).length;
  const tests=pl.tests,passed=tests.filter(t=>V2.tests[t.id]&&V2.tests[t.id].pass).length,overdue=tests.filter(t=>stateOf(t,today).k==="over"),todayT=tests.filter(t=>t.date===today&&!(V2.tests[t.id]&&V2.tests[t.id].pass));
  const nxt=tests.filter(t=>!(V2.tests[t.id]&&V2.tests[t.id].pass)&&t.date>=today).slice(0,5).concat(overdue).slice(0,6);
  const empty=Cadet.order.filter(k=>!SUBJ(k).optional&&!(Cadet.lnotes||[]).some(n=>n.k===k)).map(k=>SUBJ(k).name);
  const hr=new Date().getHours(),greet=hr<12?"早晨":hr<18?"午安":"晚安";
  const tile=(l,v,s,cls)=>`<div class="kpi ${cls||""}"><div class="kl">${l}</div><div class="kv">${v}</div><div class="ks">${s||""}</div></div>`;
  const lvRow=[1,2,3].map(l=>{const a=N.filter(x=>x.lv===l),d=a.filter(x=>x.done).length,late=pl.L[l]<today&&d<a.length;return `<div class="lvr"><b>Level ${l}</b><span class="small">截止 ${pl.L[l].slice(5)}</span><div class="lbar2"><i style="width:${a.length?d/a.length*100:0}%"></i></div><span class="small">${d}/${a.length} 關${late?' · <span class="late">落後</span>':""}</span></div>`}).join("");
  box.innerHTML=`<div class="dh"><div><h1>${greet}，yno</h1><div class="small">Cadet Programme 申請倒數 · 學習計劃由 ${pl.S} 開始</div></div><label class="small tgt">申請日期 <input type="date" id="tgtd" value="${pl.T}"></label></div>
  ${overdue.length||todayT.length?`<div class="alert">⚠️ ${overdue.length?`有 ${overdue.length} 個測驗逾期未考：${overdue.map(t=>esc(t.title)+" ("+t.date.slice(5)+")").join("、")}。`:""}${todayT.length?` 今日要考：${todayT.map(t=>esc(t.title)).join("、")}。`:""} <button class="b" data-tstart="${(overdue[0]||todayT[0]).id}">而家考</button></div>`:""}
  <div class="ph2"><h2>My courses</h2><div class="pills">${[0,1,2,3].map(l=>`<button class="tab ${dashLv===l?"on":""}" data-dlv="${l}">${l?"Level "+l:"All courses"}</button>`).join("")}</div></div>
  <div class="cgrid3">${Cadet.order.filter(k=>!SUBJ(k).optional&&(!dashLv||Cadet.groupsOf(k).some(g=>Cadet.levelOf(k,g)===dashLv))).map(k=>{const S=SUBJ(k),a=N.filter(x=>x.n.k===k&&(!dashLv||x.lv===dashLv)),d=a.filter(x=>x.done).length,lvs=[...new Set(Cadet.groupsOf(k).map(g=>Cadet.levelOf(k,g)))].sort(),next=a.find(x=>!x.done);
    return `<div class="ccard" style="--cc:${S.color}"><div class="ctop"><span class="ctag">${S.emoji} ${lvs.length>1?"Level "+lvs[0]+"–"+lvs[lvs.length-1]:"Level "+lvs[0]}</span></div><h3>${esc(S.name)}</h3><div class="cprog"><span>Progress</span><span>${a.length?d+"/"+a.length+" steps":"coming soon"}</span></div><div class="cbar"><i style="width:${a.length?d/a.length*100:0}%"></i></div><div class="cfoot"><span class="small">${(S.topics||[]).filter(t=>impOf(t.id)===1).length} must-know topics</span>${a.length?`<button class="b" data-v2go="learn">${d?"Continue":"Start"}</button>`:`<button class="b g" disabled>未有內容</button>`}</div></div>`}).join("")}</div>
  <div class="row2"><div class="panel nl"><div class="ph"><h3>My next lessons</h3><button class="lk" data-v2go="learn">View all lessons</button></div>
    <div class="nlh"><span>Lesson</span><span>Chapter</span><span>Level</span></div>
    ${N.filter(x=>!x.done).slice(0,6).map(x=>`<div class="nlr" ${x.n.note?`data-note="${x.n.note.id}"`:`data-lesson="${x.n.x.l.id}"`}><div><b>${x.n.note?"📖 Note · "+esc(x.n.note.t):esc(x.n.x.l.title)}</b><div class="small">${esc(SUBJ(x.n.k).name)}</div></div><span>${esc(x.n.g)}</span><span>Level ${x.lv}</span></div>`).join("")||'<div class="small" style="padding:10px 0">全部完成 🎉</div>'}</div>
   <div class="darkc"><div class="small">下一個測驗</div>${nxt[0]?`<span class="ytag">${nxt[0].type==="weekly"?"每週測驗":nxt[0].type==="level"?"Level 考試":"模擬考"}</span><h3>${esc(nxt[0].title)}</h3><div class="small">${nxt[0].date} · ${stateOf(nxt[0],today).l} · ${nxt[0].n} 題</div><button class="b" data-tstart="${nxt[0].id}">開始測驗</button>`:`<h3>冇測驗</h3>`}<div class="small" style="margin-top:14px">距離申請 <b style="color:#fff">${left>0?left+" 日":"已到期"}</b> · Must know ${mustM}/${mustAll}</div></div></div>
  <div class="kpis">${tile("距離申請",left>0?left+" 日":"已到期","時間用咗 "+elapsed+"%","y")}${tile("今日目標",dt.lv?dt.n+" 關":"全部完成",dt.lv?`Level ${dt.lv} 尚餘 ${dt.left} 關`:"")}${tile("今日要溫習",due+" 張","到期 card")}${tile("連續學習",LV.st.streak.n+" 日","⭐ "+LV.st.xp+" XP")}${tile("測驗合格",passed+" / "+tests.length,"≥70% 合格")}${tile("Must know 掌握",mustM+" / "+mustAll,"全部 🔴 topics")}</div>
  <div class="panel"><div class="ph"><h3>學習 pipeline</h3><span class="small">只計已解鎖內容</span></div><div class="pipe">
    ${[["📖 Note 已睇",notesRead,notesAll,"chapters"],["🎯 課堂完成",lessonsDone,lessonsAll,"課"],["🔁 練習中",practising,U.length,"topics"],["🏁 已掌握",mastered,U.length,"topics"]].map(([l,a,b,u])=>`<div class="pst"><div class="pl">${l}</div><div class="hatch"><i style="height:${b?Math.max(6,a/b*100):6}%"></i></div><div class="pn2">${a}<small> / ${b} ${u}</small></div></div>`).join("")}</div><div class="lvs">${lvRow}</div></div>
  <div class="cols3">
   <div class="panel"><div class="ph"><h3>今日</h3></div>
     ${dt.lv?`<button class="cta" data-v2go="learn"><span>繼續學習</span><small>Level ${dt.lv} · 下一關：${esc(((N.find(x=>!x.done)||{}).n&&(N.find(x=>!x.done).n.note?"Note · "+N.find(x=>!x.done).n.note.t:N.find(x=>!x.done).n.x.l.title))||"")}</small></button>`:`<div class="small">學習路徑已全部完成 🎉</div>`}
     <div class="li2"><div><b>📚 今日目標</b><small>${dt.lv?`完成 ${dt.n} 關（${dt.due.slice(5)} 前共 ${dt.left} 關）`:"—"}</small></div></div>
     <div class="li2"><div><b>🃏 溫習 card</b><small>${due} 張到期</small></div>${due?'<button class="b g sm" data-v2go="cards">練習</button>':""}</div>
     ${todayT.map(t=>`<div class="li2"><div><b>📝 ${esc(t.title)}</b><small>今日要考 · ${t.n} 題</small></div><button class="b sm" data-tstart="${t.id}">開始</button></div>`).join("")}</div>
   <div class="panel"><div class="ph"><h3>測驗 / 考試</h3><button class="lk" data-v2go="cal">全部 →</button></div>
     ${nxt.slice(0,3).map(t=>{const s=stateOf(t,today);return `<div class="li2"><div><b>${t.type==="weekly"?"📝":t.type==="level"?"🎓":"🏁"} ${esc(t.title)}</b><small>${t.date.slice(5)} · ${t.n} 題</small></div><div class="r2"><span class="chip ${s.k}">${s.l}</span>${s.k==="pass"||s.k==="soon"?"":`<button class="b sm" data-tstart="${t.id}">考</button>`}</div></div>`}).join("")||'<div class="small">冇測驗</div>'}
     ${nxt.length>3?`<div class="small" style="padding-top:8px">之後仲有 ${nxt.length-3} 個，睇日曆。</div>`:""}</div>
   <div class="panel"><div class="ph"><h3>要加強</h3></div>
     ${sug.length?sug.slice(0,4).map(x=>`<div class="li2"><div><b>${esc(x.t.t)}</b><small>${esc(x.why)}</small></div><button class="b g sm" data-topic-go="${esc(x.id)}">睇</button></div>`).join(""):'<div class="small">未有數據：先做課堂同練 card。</div>'}
     ${empty.length?`<div class="small nocontent" title="${empty.map(esc).join("、")}">⚠️ 另外 ${empty.length} 科仲未有內容，計劃會跟內容增加而更新。</div>`:""}</div>
  </div>`;
  $("#tgtd").onchange=e=>{if(e.target.value){lset("cadetTarget",e.target.value);renderDash()}}}
/* ---------- Calendar ---------- */
let cm=null,cd=null;
function renderCal(){const box=$("#v-cal"),pl=plan(),today=todayS();if(!cm){cm=today.slice(0,7)}if(!cd)cd=today;
  const[y,m]=cm.split("-").map(Number),first=new Date(y,m-1,1),dim=new Date(y,m,0).getDate(),off=(first.getDay()+6)%7;
  const ev=new Map();const put=(d,e)=>(ev.get(d)||ev.set(d,[]).get(d)).push(e);
  pl.tests.forEach(t=>put(t.date,{k:"test",t}));put(pl.T,{k:"target"});put(pl.S,{k:"start"});
  const dt=dailyTarget(pl);
  let cells="";for(let i=0;i<off;i++)cells+='<div class="cc void"></div>';
  for(let d=1;d<=dim;d++){const ds=`${y}-${PAD(m)}-${PAD(d)}`,es=ev.get(ds)||[],inRange=ds>=pl.S&&ds<=pl.T;
    cells+=`<button class="cc ${ds===today?"today":""} ${ds===cd?"sel":""} ${inRange?"in":""}" data-cd="${ds}"><span class="dn">${d}</span>${es.map(e=>e.k==="target"?'<i class="ev tg">🎯 申請</i>':e.k==="start"?'<i class="ev st">開始</i>':`<i class="ev ${e.t.type} ${stateOf(e.t,today).k}">${e.t.type==="weekly"?"測驗":e.t.title.replace("考試","")}</i>`).join("")}</button>`}
  const sel=ev.get(cd)||[],ss=cd>=pl.S&&cd<=pl.T;
  box.innerHTML=`<div class="calh"><button class="b g" data-cm="-1">←</button><h2>${y} 年 ${m} 月</h2><button class="b g" data-cm="1">→</button><button class="b g" data-cm="0">今日</button><button class="b" id="ics">📅 匯出 .ics（手機提醒）</button></div>
  <div class="wk"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div><div class="cgrid">${cells}</div>
  <div class="panel" style="margin-top:14px"><div class="ph"><h3>${cd}</h3><span class="small">${cd===today?"今日":diff(today,cd)>0?diff(today,cd)+" 日後":-diff(today,cd)+" 日前"}</span></div>
   ${ss&&cd>=today&&dt.lv?`<div class="row"><b>📚 學習</b><span>每日目標：完成路徑 ${dt.n} 關</span></div>`:""}
   ${sel.map(e=>e.k==="target"?'<div class="row"><b>🎯 遞交 Cadet 申請</b></div>':e.k==="start"?'<div class="row"><b>🚩 學習計劃開始</b></div>':(()=>{const s=stateOf(e.t,today);return `<div class="row"><b>${esc(e.t.title)}</b><span class="small">${e.t.n} 題 · ≥70% 合格</span><span class="chip ${s.k}">${s.l}</span>${s.k==="pass"?"":`<button class="lk" data-tstart="${e.t.id}">考</button>`}</div>`})()).join("")||(ss?"":'<div class="small">喺學習計劃範圍外</div>')}
  </div><div class="small" style="margin-top:10px">計劃規則：Level 1／2／3 截止日喺計劃期 40%／70%／88%；每個星期六週測；申請前 14／7／2 日模擬考。合格線 70%。日期可喺 Dashboard 改。</div>`;
  $("#ics").onclick=()=>{const L=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//cadet-study//EN"],f=d=>d.replace(/-/g,"");
    const add=(d,t,id)=>L.push("BEGIN:VEVENT","UID:"+id+"@cadet-study","DTSTAMP:"+f(todayS())+"T000000Z","DTSTART;VALUE=DATE:"+f(d),"DTEND;VALUE=DATE:"+f(addD(d,1)),"SUMMARY:"+t,"BEGIN:VALARM","TRIGGER:-P1D","ACTION:DISPLAY","DESCRIPTION:"+t,"END:VALARM","END:VEVENT");
    pl.tests.forEach(t=>add(t.date,"Cadet: "+t.title,t.id));add(pl.T,"Cadet 申請","target");L.push("END:VCALENDAR");
    const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([L.join("\r\n")],{type:"text/calendar"}));a.download="cadet-schedule.ics";a.click()}}
document.addEventListener("click",e=>{
  const dl=e.target.closest("[data-dlv]");if(dl){dashLv=+dl.dataset.dlv;renderDash();return}
  const c=e.target.closest("[data-cm]");if(c){const v=+c.dataset.cm;if(!v){cm=null;cd=null}else{const[y,m]=cm.split("-").map(Number),d=new Date(y,m-1+v,1);cm=d.getFullYear()+"-"+PAD(d.getMonth()+1)}renderCal();return}
  const d=e.target.closest("[data-cd]");if(d){cd=d.dataset.cd;renderCal();return}
  const t=e.target.closest("[data-tstart]");if(t){startTest(t.dataset.tstart);return}
  const g=e.target.closest("[data-v2go]");if(g){show(g.dataset.v2go)}});
function renderSkipped(){const box=$("#v-skipped"),sk=V2.skip||{},M=[];
  Cadet.order.forEach(k=>(Cadet.subjects[k].cards||[]).forEach(c=>{if(c._k&&sk[c._k])M.push({c,k})}));M.sort((a,b)=>sk[b.c._k]-sk[a.c._k]);
  const by=new Map();M.forEach(x=>(by.get(x.k)||by.set(x.k,[]).get(x.k)).push(x));
  box.innerHTML=`<div class="calh"><button class="b g" data-v2go="cards">← 返 Flash card</button><h2>已跳過嘅 card（${M.length}）</h2>${M.length?'<button class="b g" id="skAll">還原全部</button>':""}</div>
  <div class="small" style="margin-bottom:10px">呢度係你撳過「Skip（唔需要）」嘅 card。撳「還原」就會返去 flash card 同進度；唔會出現喺測驗。</div>`+
  (M.length?[...by].map(([k,a])=>`<div class="panel"><div class="ph"><h3>${SUBJ(k).emoji} ${esc(SUBJ(k).name)}</h3><span class="small">${a.length}</span></div>`+a.map(({c})=>{const t=c.topic&&Cadet.topic(c.topic),imp=c.topic?impOf(c.topic):2;return `<div class="row skrow"><div style="flex:1;min-width:200px"><b>${esc(c.q)}</b><div class="small">${esc(c.a)}</div><div class="small">${t?esc(t.t.t)+" · ":""}${IMPN[imp][1]} ${IMPN[imp][0]} · 跳過於 ${new Date(sk[c._k]).toLocaleDateString()}</div></div><button class="b g" data-unskip="${esc(c._k)}">↩ 還原</button></div>`}).join("")+`</div>`).join(""):'<div class="empty">仲未跳過任何 card。</div>');
  const all=$("#skAll");if(all)all.onclick=()=>{if(confirm("還原所有已跳過嘅 card？")){V2.skip={};v2save();Cadet._v++;_M=null;renderSide();renderSkipped()}}}
document.addEventListener("click",e=>{const u=e.target.closest("[data-unskip]");if(u){delete V2.skip[u.dataset.unskip];v2save();Cadet._v++;_M=null;renderSide();renderSkipped()}});
const _show=show;show=function(v){_show(v);if(v==="cal")renderCal();if(v==="skipped")renderSkipped()};
TITLES.skipped=["已跳過嘅 card","隨時可以還原"];
TITLES.cal=["日曆","測驗同考試日程：到期未考會喺 Dashboard 紅色提示"];TITLES.dash=["Dashboard","申請倒數、今日目標、測驗、pipeline"];
window.startTest=startTest;
})();
