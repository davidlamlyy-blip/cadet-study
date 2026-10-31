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
function buildPool(test){const lv=test.type==="level"?test.lv:0,L=learnedTopics(),ok=id=>{if(!L.has(id))return false;const f=Cadet.topic(id);return f&&!f.s.optional&&impOf(id)<=2&&(!lv||Cadet.levelOf(f.s.key,gname(f.t))===lv)};
  const q=[];(Cadet.lnotes||[]).forEach(n=>{if(!V2.noted["n:"+n.id])return;if(lv&&Cadet.levelOf(n.k,n.g)!==lv)return;(n.mcq||[]).forEach(m=>q.push({t:"mcq",m,src:n.t}))});
  model().cards.forEach(c=>{if(c.st!=="todo"&&c.topic&&ok(c.topic)&&!(Cadet.subjects[c._s]||{}).optional)q.push({t:"card",c})});
  const mc=shuf(q.filter(x=>x.t==="mcq")),cd=shuf(q.filter(x=>x.t==="card")),out=mc.slice(0,Math.ceil(test.n/2)).concat(cd).slice(0,test.n);return shuf(out)}
function startTest(id){const pl=plan(),test=pl.tests.find(t=>t.id===id);if(!test)return;const pool=buildPool(test);
  if(pool.length<8){modal(`<h3>未夠內容</h3><div class="small">呢個測驗要最少 8 題；你而家只解鎖咗 ${pool.length} 題。去「📚 學習」睇多啲 Note、做多啲課堂，內容解鎖咗先考到。</div><div class="acts"><button class="b" id="tgo">去學習</button><button class="b g" id="tcl">關閉</button></div>`);$("#tgo").onclick=()=>{closeModal();show("learn")};$("#tcl").onclick=closeModal;return}
  let i=0,ok=0;const ov=document.createElement("div");ov.id="tst";document.body.appendChild(ov);document.body.style.overflow="hidden";
  const end=()=>{ov.remove();document.body.style.overflow="";show(view)};
  function step(){if(i>=pool.length){const pct=Math.round(ok/pool.length*100),pass=pct>=70;V2.tests[id]={s:ok,n:pool.length,pct,pass,t:Date.now()};v2save();
      ov.innerHTML=`<div class="tbox"><h2>${esc(test.title)}</h2><div class="tbig ${pass?"p":"f"}">${pct}%</div><div class="small">${ok} / ${pool.length} 啱 · ${pass?"合格 ✅（≥70%）":"未合格 ❌，溫習後再考（≥70%）"}</div><div class="acts"><button class="b" id="tdone">返 Dashboard</button>${pass?"":'<button class="b g" id="tretry">再考一次</button>'}</div></div>`;
      $("#tdone").onclick=()=>{end();show("dash")};const r=$("#tretry");if(r)r.onclick=()=>{ov.remove();document.body.style.overflow="";startTest(id)};return}
    const it=pool[i],hd=`<div class="thead"><button class="x" id="tx" aria-label="離開">✕</button><div class="tbar"><i style="width:${i/pool.length*100}%"></i></div><span class="small">${i+1} / ${pool.length}</span></div>`;
    if(it.t==="mcq"){const m=it.m;ov.innerHTML=`<div class="tbox">${hd}<div class="tq">${inl(m.q)}</div>${Object.entries(m.o).map(([k,v])=>`<button class="opt" data-k="${k}">${k}. ${inl(v)}</button>`).join("")}<div id="tfb"></div></div>`;
      ov.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{const good=b.dataset.k===m.a;ov.querySelectorAll(".opt").forEach(x=>{x.disabled=true;if(x.dataset.k===m.a)x.classList.add("right")});if(good)ok++;else b.classList.add("wrong");
        $("#tfb").innerHTML=`<div class="${good?"fbok":"fbno"}">${good?"✅ Correct":"❌ Answer: "+m.a}${m.why?`<div class="small">${inl(m.why)}</div>`:""}</div><button class="b" id="tn">Next</button>`;$("#tn").onclick=()=>{i++;step()}})}
    else{const c=it.c;ov.innerHTML=`<div class="tbox">${hd}<div class="tq">${esc(c.q)}</div><div id="tfb"><button class="b" id="tshow">顯示答案</button></div></div>`;
      $("#tshow").onclick=()=>{$("#tfb").innerHTML=`<div class="tans">${esc(c.a)}${c.zh?`<div class="small">${esc(c.zh)}</div>`:""}</div><div class="acts"><button class="b g" id="tno">✗ 唔識</button><button class="b" id="tyes">✓ 識</button></div>`;
        $("#tyes").onclick=()=>{ok++;grade(c,1);i++;step()};$("#tno").onclick=()=>{grade(c,0);i++;step()}}}
    $("#tx").onclick=()=>{if(confirm("離開測驗？今次唔會計分。"))end()}}
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
   <div class="panel"><div class="ph"><h3>今日</h3><button class="lk" data-v2go="learn">去學習 →</button></div>
     <div class="row"><b>📚 學習</b><span>${dt.lv?`完成路徑下 ${dt.n} 關（Level ${dt.lv}，${dt.due.slice(5)} 前要完成 ${dt.left} 關）`:"路徑已全部完成 🎉"}</span></div>
     <div class="row"><b>🃏 溫習</b><span>${due} 張 card 到期</span><button class="lk" data-v2go="cards">練 →</button></div>
     ${todayT.map(t=>`<div class="row"><b>📝 ${esc(t.title)}</b><span>今日要考（${t.n} 題）</span><button class="lk" data-tstart="${t.id}">考 →</button></div>`).join("")}</div>
   <div class="panel"><div class="ph"><h3>測驗／考試</h3><button class="lk" data-v2go="cal">日曆 →</button></div>
     ${nxt.map(t=>{const s=stateOf(t,today);return `<div class="row"><b>${t.type==="weekly"?"📝":t.type==="level"?"🎓":"🏁"} ${esc(t.title)}</b><span class="small">${t.date.slice(5)}</span><span class="chip ${s.k}">${s.l}</span>${s.k==="pass"?"":`<button class="lk" data-tstart="${t.id}">考</button>`}</div>`}).join("")||'<div class="small">冇測驗</div>'}</div>
   <div class="panel"><div class="ph"><h3>要加強</h3></div>
     ${sug.length?sug.map(x=>`<div class="row"><b>${esc(x.t.t)}</b><span class="small">${esc(x.why)}</span><button class="lk" data-topic-go="${esc(x.id)}">睇</button></div>`).join(""):'<div class="small">未有數據：先做課堂同練 card。</div>'}
     ${empty.length?`<div class="warnbox">⚠️ ${empty.length} 科仲未有學習筆記／課堂（${empty.map(esc).join("、")}）。計劃會跟內容增加而更新；呢幾科要先寫內容先考到。</div>`:""}</div>
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
