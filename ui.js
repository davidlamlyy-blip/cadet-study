/* Cadet 學習站 UI — 依賴 core.js（Cadet／H／store／model／progress） */
const SUBJ=k=>Cadet.subjects[k];
const WHY_LBL={conflict:["🔴","有衝突","教材之間或教材同實際講法唔一致"],missing:["🟡","教材冇詳細","靠一般知識或記憶補，教材冇寫清楚"],unclear:["🔵","讀唔清","手寫／OCR／圖表目測，數字可能有錯"],system:["🟣","體系／機型唔同","CASA／FAA／ICAO／HK 或唔同機型嘅規則唔同"]};
function whyHTML(id,generic){const w=Cadet.why&&Cadet.why[id];if(!w)return generic?`<div class="whybox"><span class="small">⚠️ 呢個內容未確認，請對返教材或機型手冊。</span></div>`:"";
  return `<div class="whybox">${w.tags.map(t=>WHY_LBL[t]?`<span class="wtag ${t}" title="${esc(WHY_LBL[t][2])}">${WHY_LBL[t][0]} ${WHY_LBL[t][1]}</span>`:"").join("")}<div class="wnote">${esc(w.note)}</div></div>`}
let view="map",curSubject=null,curGroup=null,sel=null,animSubj=null;
let mapMode="map";try{mapMode=localStorage.getItem("cadetMapMode")||(innerWidth<700?"list":"map")}catch(e){mapMode=innerWidth<700?"list":"map"}
const openS=new Set(),openG=new Set();
const gname=t=>t.g||"Topics";
const pct=o=>o&&o.n?Math.round(o.k/o.n*100):0;
function wrapN(label,max,lines){const out=[];String(label).split(/\s+/).forEach(x=>{const L=out.length-1;if(L>=0&&(out[L]+" "+x).length<=max)out[L]+=" "+x;else out.push(x)});if(out.length>lines){out.length=lines;out[lines-1]=out[lines-1].slice(0,Math.max(1,max-1))+"…"}return out.map(s=>s.length>max+2?s.slice(0,max+1)+"…":s)}
/* ---------- 切換視圖 ---------- */
const TITLES={learn:["學習路徑","一課一個概念，由淺入深，做完先解鎖下一課"],dash:["學習進度","睇下今日同總體進度"],map:["地圖","撳圓圈睇重點，再撳一次入去"],anim:["動畫","用滑桿同掣郁，睇到先明"],cards:["Flash card","英文 Q／A，面試講法"],set:["設定",""]};
function show(v){
  if(v==="find"){$("#q").focus();$("#q").select();return}
  view=v;document.querySelectorAll(".view").forEach(x=>x.classList.toggle("on",x.id==="v-"+v));
  document.querySelectorAll("#rail button[data-v],.gear button").forEach(b=>b.classList.toggle("on",b.dataset.v===v));
  closeSide();
  if(v==="learn")renderLearn();if(v==="dash")renderDash();if(v==="anim")renderAnimList();if(v==="set")renderSet();
  if(v==="cards")next(true);
  if(v==="map")drawMap();
  head();renderTabs();renderSide();
  try{history.replaceState(null,"","#"+v)}catch(e){}window.scrollTo(0,0)}
function head(){let [t,s]=TITLES[view];
  if(view==="map"&&curSubject){const S=SUBJ(curSubject);t=S.emoji+" "+S.name;s=curGroup?curGroup:"撳 chapter 入去睇 topics"}
  if(view==="cards"){const P=progress();s=`Mastered ${P.all.k} · ${learnedOnly()?"learned topics only":"all cards"}`}
  if(view==="anim"){const n=Cadet.order.reduce((a,k)=>a+(SUBJ(k).anims||[]).length,0);s=`${n} 個動畫 · ${Cadet.order.length} 科`}
  $("#vt").textContent=t;$("#vs").textContent=s}
function ctxSubject(){return view==="map"?curSubject:view==="cards"?(deck!=="all"?deck:null):view==="anim"?animSubj:null}
function renderTabs(){const k=ctxSubject(),b=$("#ctxTabs");
  if(!k||!["map","cards","anim"].includes(view)){b.style.display="none";return}
  const S=SUBJ(k);b.style.display="flex";
  b.innerHTML=[["map","🗺️ Map"],["cards",`🃏 Cards (${(S.cards||[]).length})`],["anim",`🎬 動畫 (${(S.anims||[]).length})`]].map(([v,l])=>`<button class="${v===view?"on":""}" data-tab="${v}">${l}</button>`).join("")+`<span class="small" style="margin-left:auto;align-self:center">${S.emoji} ${esc(S.name)}</span>`}
document.addEventListener("click",e=>{const t=e.target.closest("[data-tab]");if(!t)return;const k=ctxSubject(),v=t.dataset.tab;
  if(v==="map")openSubject(k);else if(v==="cards")goDeck(k);else{animSubj=k;view==="anim"?(renderAnimList(),renderTabs()):show("anim")}});
/* ---------- 側欄 ---------- */
function closeSide(){$("#side").classList.remove("open");$("#bdrop").classList.remove("on")}
$("#menuBtn").onclick=()=>{$("#side").classList.add("open");$("#bdrop").classList.add("on")};$("#bdrop").onclick=closeSide;
function renderSide(){
  const sd=$("#side"),sc=sd.scrollTop,P=progress(),M=model(),unk=P.all.n-P.all.k;
  if(curSubject){openS.add(curSubject);if(curGroup)openG.add(curSubject+"|"+curGroup)}
  let h=`<div class="sidecard"><div class="small">Cadet 進度</div><div class="big">${P.all.k}<span class="small"> / ${P.all.n} 已識</span></div><div class="mini"><i style="width:${pct(P.all)}%"></i></div></div>
  <div class="sec">Status</div>
  <button class="srow" data-act="today"><span class="ic">🔥</span><span class="nm">今日練習</span><span class="badge">${daily.n}</span></button>
  <button class="srow" data-act="unk"><span class="ic">😵</span><span class="nm">未識 card</span><span class="badge">${unk}</span></button>
  <button class="srow" data-act="check"><span class="ic">🟠</span><span class="nm">待驗證內容</span><span class="badge ${M.checks.length?"warn":""}">${M.checks.length}</span></button>
  <div class="sec">科目</div><div class="tree">`;
  Cadet.order.forEach(k=>{const S=SUBJ(k),T=S.topics||[],o=openS.has(k);
    h+=`<button class="srow ${o?"open":""} ${curSubject===k&&!curGroup&&view==="map"?"on":""}" data-s="${k}"><span class="car">▶</span><span class="dot" style="background:${S.color}"></span><span class="nm">${S.emoji} ${esc(S.name)}</span><span class="badge">${T.length}</span></button>`;
    if(o){h+=`<div class="lv1">`;if(!T.length)h+=`<div class="small" style="padding:6px 10px">未有內容（整緊）</div>`;
      [...new Set(T.map(gname))].forEach(g=>{const kids=T.filter(t=>gname(t)===g),go=openG.has(k+"|"+g);
        h+=`<button class="srow ${go?"open":""} ${curSubject===k&&curGroup===g?"on":""}" data-g="${k}|${esc(g)}"><span class="car">▶</span><span class="nm">${esc(g)}</span><span class="badge">${kids.length}</span></button>`;
        if(go){h+=`<div class="lv2">`+kids.map(t=>{const p=P.t.get(t.id);return `<button class="srow ${sel===t.id?"on":""}" data-t="${esc(t.id)}"><span class="nm">${esc(t.t)}</span>${t.check?'<span class="badge warn">!</span>':""}<span class="badge">${p?p.n-p.k:0}</span></button>`}).join("")+`</div>`}});
      h+=`</div>`}});
  sd.innerHTML=h+`</div><div class="small" style="margin:14px 6px">topic 右邊數字 = 未識 card 數</div>`;sd.scrollTop=sc}
$("#side").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
  if(b.dataset.s){const k=b.dataset.s;if(openS.has(k)&&curSubject===k&&!curGroup)openS.delete(k);else openS.add(k);openSubject(k)}
  else if(b.dataset.g){const[k,g]=b.dataset.g.split("|");const key=k+"|"+g;if(openG.has(key)&&curGroup===g&&curSubject===k)openG.delete(key);else openG.add(key);curSubject=k;curGroup=g;sel=null;show("map")}
  else if(b.dataset.t)goTopic(b.dataset.t);
  else if(b.dataset.act==="today")show("cards");
  else if(b.dataset.act==="unk"){$("#onlyUnk").checked=true;goDeck("all")}
  else if(b.dataset.act==="check"){const M=model();showRes("待驗證內容（橙色）",[{h:"Topics",items:M.checks.slice(0,80).map(id=>topicItem(id))}]);$("#sres").dataset.keep=1}});
/* ---------- 地圖 ---------- */
const PZ={vb:[0,0,700,700],S:700,moved:false};
let curLevel=null,nodeEls=new Map(),edgeEls=[];
const topicsOf=()=>SUBJ(curSubject).topics||[];
function buildLevel(){
  const P=progress(),M=model();
  if(!curSubject){
    const items=Cadet.order.map(k=>{const S=SUBJ(k),n=(S.topics||[]).length;return{key:k,label:[S.emoji,...wrapN(S.name,13,3)],color:S.color,ratio:P.s.get(k),sub:`${n} topics · ${(S.cards||[]).length} cards · ${(S.anims||[]).length} 動畫`,title:S.name,dim:n===0}});
    const cnt=new Map();M.links.forEach(([a,b])=>{const A=Cadet.topic(a).s.key,B=Cadet.topic(b).s.key;if(A===B)return;const kk=A<B?A+"|"+B:B+"|"+A;cnt.set(kk,(cnt.get(kk)||0)+1)});
    return{items,r:62,edges:[...cnt].map(([k,w])=>{const[a,b]=k.split("|");return{a,b,w}}),center:{label:["Cadet"],color:"#fff"},lvl:0}}
  const S=SUBJ(curSubject),T=topicsOf();
  if(!curGroup){
    const groups=[...new Set(T.map(gname))];
    const items=groups.map(g=>{const n=T.filter(t=>gname(t)===g).length;return{key:g,label:[...wrapN(g,12,2),n+" topics"],color:"#fff",ring:S.color,ratio:P.g.get(curSubject+"|"+g),sub:n+" topics",title:g}});
    const cnt=new Map();M.links.forEach(([a,b])=>{const A=Cadet.topic(a),B=Cadet.topic(b);if(A.s.key!==curSubject||B.s.key!==curSubject)return;const x=gname(A.t),y=gname(B.t);if(x===y)return;const kk=x<y?x+"\u0001"+y:y+"\u0001"+x;cnt.set(kk,(cnt.get(kk)||0)+1)});
    return{items,r:items.length>14?48:56,edges:[...cnt].map(([k,w])=>{const[a,b]=k.split("\u0001");return{a,b,w}}),center:{label:[S.emoji,...wrapN(S.name,11,2)],color:S.color},lvl:1}}
  const kids=T.filter(t=>gname(t)===curGroup),ids=new Set(kids.map(t=>t.id));
  const n=kids.length,r=n<=10?54:n<=20?46:n<=40?38:32;
  const items=kids.map(t=>({key:t.id,label:null,text:t.t,color:t.check?"#fb923c":S.color,ratio:P.t.get(t.id),sub:(P.t.get(t.id)?P.t.get(t.id).n:0)+" cards",title:t.t,dim:!!t.todo}));
  const edges=[];M.links.forEach(([a,b,why])=>{if(ids.has(a)&&ids.has(b))edges.push({a,b,w:1,why})});
  return{items,r,edges,center:{label:wrapN(curGroup,12,3),color:"#fff"},lvl:2}}
function ringLayout(n,r){
  const gap=2*r+18,pos=[];let R=Math.max(150,r*2.5),rem=n,ring=0;
  if(n<=16)R=Math.max(R,n*gap/(2*Math.PI));
  while(rem>0){const cap=Math.max(1,Math.floor(2*Math.PI*R/gap)),take=Math.min(cap,rem),off=(ring%2)*Math.PI/take;
    for(let j=0;j<take;j++){const a=-Math.PI/2+off+j*2*Math.PI/take;pos.push([Math.cos(a)*R,Math.sin(a)*R])}
    rem-=take;ring++;R+=gap*.92}
  const Rl=R-gap*.92,S=Math.max(600,2*(Rl+r+26));return{pos:pos.map(p=>[p[0]+S/2,p[1]+S/2]),S}}
/* ---------- 新版概念地圖（HTML，唔再用放射圓圈）：科目 → chapter 卡 → 概念頁 ---------- */
function ringSvg(p,size){const C=2*Math.PI*15,k=p&&p.n?p.k/p.n:0;return `<svg class="ring" style="width:${size||34}px;height:${size||34}px" viewBox="0 0 38 38"><circle cx="19" cy="19" r="15" fill="none" stroke="var(--line)" stroke-width="4"/>${k?`<circle cx="19" cy="19" r="15" fill="none" stroke="var(--ok)" stroke-width="4" stroke-linecap="round" stroke-dasharray="${C*k} ${C}" transform="rotate(-90 19 19)"/>`:""}<text x="19" y="23" font-size="10" text-anchor="middle" fill="var(--mute)">${p&&p.n?Math.round(k*100):"–"}</text></svg>`}
function drawMap(){
  mapMode="list";crumb();$("#mapmode").innerHTML="";$("#map").style.display="none";$("#zoomctl").style.display="none";$("#legend").textContent="";nodeEls=new Map();edgeEls=[];
  const L=$("#lst"),P=progress();
  if(!curSubject){ // 科目
    L.innerHTML=`<div class="tiles">`+Cadet.order.map(k=>{const S=SUBJ(k),T=S.topics||[],p=P.s.get(k),chs=new Set(T.map(gname)).size;
      return `<button class="tile9" style="--c:${S.color}" data-sub="${k}"><span class="tn">${S.emoji}</span><b>${esc(S.name)}</b><span class="small">${chs} chapters · ${T.length} topics · ${(S.cards||[]).length} cards</span><span class="seg" style="--p:${pct(p)}%"></span></button>`}).join("")+`</div>`;return}
  const S=SUBJ(curSubject),T=S.topics||[];
  if(!T.length){L.innerHTML=`<div class="empty">呢科暫時未有內容 🛠️</div>`;return}
  if(sel&&Cadet.topic(sel))return renderConcept(sel);
  const gs=[...new Set(T.map(gname))];
  L.innerHTML=`<div class="chap-hint small">撳一個 topic 睇佢同其他概念嘅關係。數字＝建議學習次序。</div><div class="chaps">`+gs.map(g=>{const kids=T.filter(t=>gname(t)===g),p=P.g.get(curSubject+"|"+g);
    return `<section class="chap ${curGroup===g?"on":""}" style="--c:${S.color}"><header><b>${esc(g)}</b><span class="small">${kids.length}</span></header><span class="seg" style="--p:${pct(p)}%"></span><ol>`+kids.map((t,i)=>{const tp=P.t.get(t.id);return `<li><button class="trow ${t.check?"chk":""}" data-topic-go="${esc(t.id)}"><span class="no">${String(i+1).padStart(2,"0")}</span><span class="tt">${esc(t.t)}</span>${t.check?'<span class="warn">!</span>':""}${tp&&tp.n?`<span class="mm ${tp.k===tp.n?"full":""}">${tp.k}/${tp.n}</span>`:""}</button></li>`}).join("")+`</ol></section>`}).join("")+`</div>`;
  if(curGroup){const el=[...L.querySelectorAll(".chap")].find(x=>x.classList.contains("on"));if(el)el.scrollIntoView({block:"start"})}}
function nbOf(id){const from=[],to=[],rel=[],seen=new Set([id]);
  Cadet.allLinks().forEach(([a,b,w])=>{if(a===id&&Cadet.topic(b)&&!seen.has(b)){to.push({o:b,why:w});seen.add(b)}else if(b===id&&Cadet.topic(a)&&!seen.has(a)){from.push({o:a,why:w});seen.add(a)}});
  ((Cadet.topic(id).t.rel)||[]).forEach(r=>{if(Cadet.topic(r)&&!seen.has(r)){rel.push({o:r,why:""});seen.add(r)}});
  return from.concat(to,rel)}
function renderConcept(id){
  const f=Cadet.topic(id),t=f.t,S=f.s,T=S.topics||[],g=gname(t),kids=T.filter(x=>gname(x)===g),i=kids.findIndex(x=>x.id===id),P=progress(),tp=P.t.get(id);
  const nb=nbOf(id),same=nb.filter(n=>gname(Cadet.topic(n.o).t)===g&&Cadet.topic(n.o).s.key===S.key),
    sameS=nb.filter(n=>Cadet.topic(n.o).s.key===S.key&&gname(Cadet.topic(n.o).t)!==g),cross=nb.filter(n=>Cadet.topic(n.o).s.key!==S.key);
  const card=n=>{const x=Cadet.topic(n.o),p=P.t.get(n.o);return `<button class="ncard" style="--c:${x.s.color}" data-topic-go="${esc(n.o)}"><span class="nt">${x.s.key!==S.key?x.s.emoji+" ":""}${esc(x.t.t)}</span>${n.why&&n.why!=="—"?`<span class="nw">${esc(n.why)}</span>`:""}<span class="nm2">${x.s.key!==S.key?esc(x.s.name)+" · ":""}${esc(gname(x.t))}${p&&p.n?` · ${p.k}/${p.n}`:""}</span></button>`};
  const col=(h,list)=>list.length?`<div class="rcol"><h4>${h} <small>${list.length}</small></h4>${list.slice(0,12).map(card).join("")}${list.length>12?`<div class="small">仲有 ${list.length-12} 個，用搜尋或 chapter 頁睇</div>`:""}</div>`:"";
  $("#lst").innerHTML=`<div class="flow" style="--c:${S.color}">`+kids.map((x,j)=>`<button class="fstep ${j===i?"now":""}" data-topic-go="${esc(x.id)}"><span class="no">${String(j+1).padStart(2,"0")}</span>${esc(x.t)}</button>${j<kids.length-1?'<span class="farr">→</span>':""}`).join("")+`</div>
  <div class="center" style="--c:${S.color}">${ringSvg(tp,54)}<div><div class="small">${S.emoji} ${esc(S.name)} · ${esc(g)} · ${i+1}/${kids.length}</div><h2>${esc(t.t)}</h2><div>${esc(t.d||"")}</div></div></div>
  <div class="rel">${col("同 chapter 關連",same)}${col("同科其他 chapter",sameS)}${col("其他科目",cross)}${nb.length?"":'<div class="empty">呢個概念暫時冇記錄關連</div>'}</div>
  <div class="pn"><button class="b g" ${i>0?`data-topic-go="${esc(kids[i-1].id)}"`:"disabled"}>← ${i>0?esc(kids[i-1].t):"（第一個）"}</button><button class="b" ${i<kids.length-1?`data-topic-go="${esc(kids[i+1].id)}"`:"disabled"}>${i<kids.length-1?esc(kids[i+1].t):"（最後一個）"} →</button></div>`;
  window.scrollTo({top:0})}
document.addEventListener("click",e=>{const s=e.target.closest("[data-sub]");if(s){openSubject(s.dataset.sub);return}const g=e.target.closest("[data-topic-go]");if(g&&!g.disabled){goTopic(g.dataset.topicGo)}});
function drawList(lv){
  const ctr=it=>{const p=it.ratio,C=2*Math.PI*15;return `<svg class="ring" viewBox="0 0 38 38"><circle cx="19" cy="19" r="15" fill="none" stroke="#d3d7de" stroke-width="5"/>${p&&p.k?`<circle cx="19" cy="19" r="15" fill="none" stroke="#16a34a" stroke-width="5" stroke-linecap="round" stroke-dasharray="${C*p.k/p.n} ${C}" transform="rotate(-90 19 19)"/>`:""}<text x="19" y="23" font-size="10" text-anchor="middle" fill="#778093">${p&&p.n?pct(p)+"%":""}</text></svg>`};
  $("#lst").innerHTML=`<div class="lgrid">`+lv.items.map(it=>`<button class="lrow ${it.dim?"dim":""}" style="--c:${it.ring||(it.color==="#fff"?"#94a3b8":it.color)}" data-k="${esc(it.key)}">${ctr(it)}<div class="lt"><b>${esc(it.title||it.text)}</b><span class="small">${esc(it.sub)}</span></div></button>`).join("")+`</div>`}
function crumb(){const c=$("#crumb");
  if(!curSubject)c.innerHTML=`<b>全部科目</b> <span class="small">撳科目睇重點</span>`;
  else{const S=SUBJ(curSubject);c.innerHTML=`<button class="tab" data-up="0">← 全部科目</button> `+(curGroup?`<button class="tab" data-up="1">← ${esc(S.name)}</button> <b>${esc(curGroup)}</b>`:`<b>${S.emoji} ${esc(S.name)}</b>`)}}
document.addEventListener("click",e=>{const u=e.target.closest("[data-up]");if(u){if(u.dataset.up==="0"){curSubject=null;curGroup=null}else curGroup=null;sel=null;show("map");info();return}
  const m=e.target.closest("[data-mm]");if(m){mapMode=m.dataset.mm;try{localStorage.setItem("cadetMapMode",mapMode)}catch(x){}drawMap();return}
  const z=e.target.closest("[data-z]");if(z){zoom(+z.dataset.z);return}
  const n=e.target.closest(".node,.lrow");if(n&&n.dataset.k!==undefined){if(PZ.moved&&n.classList.contains("node"))return;pick(n.dataset.k)}});
function pick(k){
  const lv=curLevel;
  if(sel===k&&lv.lvl<2){if(lv.lvl===0)openSubject(k);else{curGroup=k;sel=null;show("map");info()}return}
  sel=k;mark(k);
  if(lv.lvl===0)subjectInfo(k);else if(lv.lvl===1)groupInfo(k);else topicInfo(k);
  renderSide()}
function mark(k){
  document.querySelectorAll("#map .node.sel,.lrow.sel").forEach(x=>x.classList.remove("sel"));
  const n=nodeEls.get(k);if(n)n.classList.add("sel");document.querySelectorAll(".lrow").forEach(r=>{if(r.dataset.k===k)r.classList.add("sel")});focus(k)}
function focus(k){const svg=$("#map");if(!nodeEls.size)return;const nb=new Set([k]);curLevel.edges.forEach(e=>{if(e.a===k)nb.add(e.b);else if(e.b===k)nb.add(e.a)});
  nodeEls.forEach((g,key)=>g.classList.toggle("hl",nb.has(key)));edgeEls.forEach(e=>e.el.classList.toggle("hl",e.a===k||e.b===k));svg.classList.add("focus")}
function unfocus(){const svg=$("#map");if(sel&&nodeEls.has(sel))focus(sel);else svg.classList.remove("focus")}
$("#map").addEventListener("mouseover",e=>{const n=e.target.closest(".node");if(n)focus(n.dataset.k)});
$("#map").addEventListener("mouseout",e=>{if(e.target.closest(".node"))unfocus()});
function openSubject(k){curSubject=k;curGroup=null;sel=null;openS.add(k);show("map");info()}
function goTopic(id){const f=Cadet.topic(id);if(!f)return;curSubject=f.s.key;curGroup=gname(f.t);sel=id;openS.add(curSubject);openG.add(curSubject+"|"+curGroup);show("map");topicInfo(id);mark(id);
  const n=nodeEls.get(id);if(n&&mapMode==="map"&&nodeEls.size>20){const tr=n.getAttribute("transform").match(/([\d.-]+),([\d.-]+)/);if(tr){const w=PZ.S/2.2;PZ.vb=[+tr[1]-w/2,+tr[2]-w/2,w,w];applyVB()}}}
function ctm(){return $("#map").getScreenCTM()}
function applyVB(){$("#map").setAttribute("viewBox",PZ.vb.map(x=>+x.toFixed(1)).join(" "))}
function zoom(f,px,py){const v=PZ.vb;if(f===0){PZ.vb=[0,0,PZ.S,PZ.S];applyVB();return}
  const nw=Math.min(PZ.S*1.2,Math.max(PZ.S/10,v[2]/f)),k=nw/v[2];const cx=px!==undefined?px:v[0]+v[2]/2,cy=py!==undefined?py:v[1]+v[2]/2;PZ.vb=[cx-(cx-v[0])*k,cy-(cy-v[1])*k,nw,nw];applyVB()}
function toUser(x,y){const m=ctm();if(!m)return[0,0];const p=new DOMPoint(x,y).matrixTransform(m.inverse());return[p.x,p.y]}
(function(){const svg=$("#map"),ptr=new Map();let last=0,start=null;
  const dist=()=>{const a=[...ptr.values()];return Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1])};
  svg.addEventListener("wheel",e=>{e.preventDefault();const[x,y]=toUser(e.clientX,e.clientY);zoom(e.deltaY<0?1.2:1/1.2,x,y)},{passive:false});
  svg.addEventListener("pointerdown",e=>{ptr.set(e.pointerId,[e.clientX,e.clientY]);if(ptr.size===1){PZ.moved=false;start=[e.clientX,e.clientY]}last=ptr.size===2?dist():0});
  window.addEventListener("pointermove",e=>{if(!ptr.has(e.pointerId))return;const o=ptr.get(e.pointerId);ptr.set(e.pointerId,[e.clientX,e.clientY]);
    if(start&&Math.hypot(e.clientX-start[0],e.clientY-start[1])>6){PZ.moved=true;svg.classList.add("pan")}
    if(!PZ.moved&&ptr.size<2)return;const m=ctm();if(!m)return;
    if(ptr.size===1){const k=1/m.a;PZ.vb[0]-=(e.clientX-o[0])*k;PZ.vb[1]-=(e.clientY-o[1])*k;applyVB()}
    else if(ptr.size===2){PZ.moved=true;const d=dist();if(last){const a=[...ptr.values()],[x,y]=toUser((a[0][0]+a[1][0])/2,(a[0][1]+a[1][1])/2);zoom(d/last,x,y)}last=d}});
  const up=e=>{ptr.delete(e.pointerId);last=0;if(!ptr.size){svg.classList.remove("pan");setTimeout(()=>PZ.moved=false,0)}};
  window.addEventListener("pointerup",up);window.addEventListener("pointercancel",up)})();
/* ---------- info 面板 ---------- */
function info(h){$("#infoc").innerHTML=h||'<span class="small">👆 撳任何一個圓圈或項目，睇重點同關連</span>';$("#info").classList.toggle("open",!!h)}
$("#xinfo").onclick=()=>$("#info").classList.remove("open");
function chipsHtml(ids,cross,color){return ids.map(i=>{const f=Cadet.topic(i);return f?`<button class="chip ${cross?"x":""}" style="--c:${cross?"":color}" data-go="${esc(i)}">${cross?f.s.emoji+" ":""}${esc(f.t.t)}</button>`:""}).join("")}
function subjectInfo(k){const S=SUBJ(k),T=S.topics||[],P=progress().s.get(k);
  info(`<h3>${S.emoji} ${esc(S.name)}</h3><div class="small">${T.length} topics · ${(S.cards||[]).length} cards · ${(S.anims||[]).length} 動畫</div>
  ${P?`<div class="mini"><i style="width:${pct(P)}%"></i></div><div class="small">已識 ${P.k} / ${P.n}</div>`:""}
  ${T.length?"":'<div class="empty" style="margin-top:10px">未有內容，整緊</div>'}
  <div class="btnrow"><button class="b" data-open="${k}">打開 mindmap</button><button class="b g" data-deck="${k}">練 card</button><button class="b g" data-anims="${k}">動畫</button></div><div class="small" style="margin-top:8px">再撳一次個圓圈都可以入去</div>`)}
function groupInfo(g){const kids=topicsOf().filter(t=>gname(t)===g),P=progress().g.get(curSubject+"|"+g);
  info(`<h3>${esc(g)}</h3><div class="small">${kids.length} topics${P?` · 已識 ${P.k}/${P.n}`:""}</div>${P?`<div class="mini"><i style="width:${pct(P)}%"></i></div>`:""}
  <div class="sec">Topics</div>${chipsHtml(kids.map(t=>t.id).slice(0,40),false,SUBJ(curSubject).color)}
  <div class="btnrow"><button class="b" data-opengrp="${esc(g)}">打開 chapter</button><button class="b g" data-deck="${curSubject}">練本科</button></div>`)}
function topicInfo(id){
  const f=Cadet.topic(id);if(!f)return;const{t,s}=f,M=model(),p=progress().t.get(id),n=(M.byTopic.get(id)||[]).length;
  const why=new Map();(M.nb.get(id)||[]).forEach(x=>why.set(x.o,x.why));
  const all=[...new Set([...(t.rel||[]),...why.keys()])].filter(x=>Cadet.topic(x)&&x!==id);
  const same=all.filter(x=>Cadet.topic(x).s.key===s.key),cross=all.filter(x=>Cadet.topic(x).s.key!==s.key);
  const row=(ids,x)=>ids.map(i=>`<div>${chipsHtml([i],x,s.color)}${why.get(i)&&why.get(i)!=="—"?`<span class="why">↳ ${esc(why.get(i))}</span>`:""}</div>`).join("");
  info(`<h3>${s.emoji} ${esc(t.t)} ${t.check?'<span class="pill" style="background:#fed7aa">待驗證</span>':""}</h3>${t.check?whyHTML(t.id,true):""}
  ${p?`<div class="small">已識 ${p.k} / ${p.n} card</div><div class="mini"><i style="width:${pct(p)}%"></i></div>`:""}
  ${t.d?`<div class="d">${esc(t.d)}</div>`:""}
  ${(t.pts||[]).length?`<ul class="pts" style="--c:${s.color}">${t.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
  ${same.length?`<div class="sec">同科關連</div>${row(same,false)}`:""}${cross.length?`<div class="sec">跨科關連</div>${row(cross,true)}`:""}
  <div class="btnrow"><button class="b" data-deck="${s.key}" data-topic="${esc(id)}" ${n?"":"disabled"}>練呢個${n?` (${n})`:""}</button></div>
  ${t.src?`<div class="small" style="margin-top:10px">📂 ${esc(t.src)}</div>`:""}`)}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go],[data-open],[data-deck],[data-opengrp],[data-anims],[data-card]");if(!b||b.closest("#side"))return;
  if(b.dataset.go){hideRes();goTopic(b.dataset.go)}
  else if(b.dataset.card){hideRes();goCard(b.dataset.card)}
  else if(b.dataset.opengrp){curGroup=b.dataset.opengrp;sel=null;show("map");info()}
  else if(b.dataset.open)openSubject(b.dataset.open);
  else if(b.dataset.anims){animSubj=b.dataset.anims;show("anim")}
  else if(b.dataset.deck)goDeck(b.dataset.deck,b.dataset.topic)});
/* ---------- 搜尋 ---------- */
let SI=null;
function sindex(){const M=model();if(SI&&SI.key===M.key)return SI;const tp=[];Cadet.order.forEach(k=>(SUBJ(k).topics||[]).forEach(t=>tp.push({id:t.id,low:(t.t+" "+(t.g||"")).toLowerCase()})));
  return SI={key:M.key,tp,cards:M.cards.map(c=>({c,low:(c.q||"").toLowerCase()}))}}
function topicItem(id){const f=Cadet.topic(id);return{go:id,a:f.s.emoji+" "+f.t.t,b:f.s.name+" · "+gname(f.t)}}
function showRes(head,secs){const r=$("#sres");r.innerHTML=(head?`<div class="sh">${esc(head)}</div>`:"")+secs.map(s=>`<div class="sh">${esc(s.h)}</div>`+(s.items.length?s.items.map(i=>`<button class="it" ${i.go?`data-go="${esc(i.go)}"`:`data-card="${esc(i.card)}"`}>${esc(i.a)}<small>${esc(i.b)}</small></button>`).join(""):'<div class="small" style="padding:8px 12px">冇結果</div>')).join("");r.classList.add("on")}
function hideRes(){$("#sres").classList.remove("on")}
function doSearch(){const q=$("#q").value.trim().toLowerCase();if(!q){hideRes();return}
  const tk=q.split(/\s+/),I=sindex(),T=[],C=[];
  for(const x of I.tp){if(tk.every(w=>x.low.includes(w)))T.push(x)}
  T.sort((a,b)=>(b.low.startsWith(q)?1:0)-(a.low.startsWith(q)?1:0));
  for(const x of I.cards){if(tk.every(w=>x.low.includes(w))){C.push(x);if(C.length>=60)break}}
  showRes("",[{h:`Topics (${T.length})`,items:T.slice(0,10).map(x=>topicItem(x.id))},{h:`Cards (${C.length>=60?"60+":C.length})`,items:C.slice(0,15).map(x=>({card:x.c._k,a:x.c.q,b:SUBJ(x.c._s).emoji+" "+SUBJ(x.c._s).name}))}])}
$("#q").addEventListener("input",doSearch);
$("#q").addEventListener("keydown",e=>{if(e.key==="Escape"){$("#q").value="";hideRes();$("#q").blur()}if(e.key==="Enter"){const f=$("#sres .it");if(f)f.click()}});
document.addEventListener("click",e=>{if(!e.target.closest(".sbox")&&!e.target.closest("[data-act=check]"))hideRes()});
/* ---------- 進度 dashboard ---------- */
function renderDash(){const P=progress();let ch=0,chT=0;P.g.forEach(o=>{chT++;if(o.n&&o.k===o.n)ch++});
  $("#v-dash").innerHTML=`<div class="stats3">
   <div class="stat"><div class="l">已識 card</div><div class="n">${P.all.k}<small> / ${P.all.n}</small>${P.all.n?`<span class="up">${pct(P.all)}%</span>`:""}</div></div>
   <div class="stat"><div class="l">今日練習</div><div class="n">${daily.n}<small> 張</small>${daily.n?`<span class="up">識 ${daily.ok}</span>`:""}</div></div>
   <div class="stat"><div class="l">完成 chapter</div><div class="n">${ch}<small> / ${chT}</small></div></div></div>
  <div class="btnrow" style="margin:0 0 16px"><button class="b" data-act2="unk">練未識 card →</button><button class="b g" data-act2="map">去地圖 →</button></div>
  <div class="sec" style="margin-left:0">各科進度</div>`+Cadet.order.map(k=>{const S=SUBJ(k),p=P.s.get(k)||{n:0,k:0};return `<button class="pbar" data-open="${k}"><span>${S.emoji} ${esc(S.name)}</span><span class="mini"><i style="width:${pct(p)}%;background:${S.color}"></i></span><span class="small">${p.k}/${p.n}</span></button>`}).join("")}
document.addEventListener("click",e=>{const b=e.target.closest("[data-act2]");if(!b)return;if(b.dataset.act2==="unk"){$("#onlyUnk").checked=true;goDeck("all")}else show("map")});
/* ---------- 設定 ---------- */
function renderSet(){$("#v-set").innerHTML=`<div class="card-box"><b>地圖預設顯示</b><div class="row" style="justify-content:flex-start"><button class="tab ${mapMode==="map"?"on":""}" data-mm2="map">🗺️ 地圖</button><button class="tab ${mapMode==="list"?"on":""}" data-mm2="list">📋 清單</button></div></div>
  <div class="card-box"><b>Flash card 鍵盤</b><div class="small">空白鍵／Enter 翻面 · ← 未識 · → 識 · / 搜尋 · Esc 關閉</div></div>
  <div class="card-box"><b>重置進度</b><div class="small">清走所有「識／未識」紀錄（只喺呢部機）。</div><div class="btnrow"><button class="b g" id="reset">重置進度</button></div></div>`;
  $("#reset").onclick=()=>{if(confirm("確定重置所有 card 進度？")){store={};srs={};daily={d:today(),n:0,ok:0};save();renderSide();renderSet()}}}
document.addEventListener("click",e=>{const b=e.target.closest("[data-mm2]");if(b){mapMode=b.dataset.mm2;try{localStorage.setItem("cadetMapMode",mapMode)}catch(x){}renderSet()}});
/* ---------- 動畫 ---------- */
const boxes={};
function renderAnimList(){
  const q=($("#aq").value||"").trim().toLowerCase(),box=$("#animList"),openNow=new Set([...box.querySelectorAll("details[open]")].map(d=>d.dataset.k));
  let h="",any=false;
  Cadet.order.forEach(k=>{if(animSubj&&animSubj!==k)return;const S=SUBJ(k),all=S.anims||[];
    const hit=all.map((a,i)=>({a,i})).filter(({a})=>!q||(a.title+" "+(a.hint||"")+" "+S.name).toLowerCase().includes(q));
    if(q&&!hit.length)return;any=true;
    const open=q||animSubj||openNow.has(k);
    h+=`<details class="sg" data-k="${k}" style="--c:${S.color}" ${open?"open":""}><summary><b>${S.emoji} ${esc(S.name)}</b><span class="pill cnt">${all.length} 個動畫</span></summary>`+
     (hit.length?`<div class="al">`+hit.map(({a,i})=>`<button class="ai" data-anim="${k}|${i}"><b>${esc(a.title)}</b><span class="small">${esc(a.hint||"")}</span></button>`).join("")+`</div>`:`<div class="small" style="padding:0 14px 12px">呢科暫時未有動畫</div>`)+`</details>`});
  box.innerHTML=(animSubj?`<div class="small" style="margin-bottom:8px">只顯示 ${esc(SUBJ(animSubj).name)} <button class="tab" data-aclr="1">顯示全部科目</button></div>`:"")+(any?h:'<div class="empty">冇符合嘅動畫</div>')}
$("#aq").addEventListener("input",renderAnimList);
$("#aall").onclick=()=>document.querySelectorAll("#animList details").forEach(d=>d.open=true);
$("#aone").onclick=()=>document.querySelectorAll("#animList details").forEach(d=>d.open=false);
document.addEventListener("click",e=>{const c=e.target.closest("[data-aclr]");if(c){animSubj=null;renderAnimList();renderTabs();return}
  const b=e.target.closest("[data-anim]");if(b){const[k,i]=b.dataset.anim.split("|");openAnim(k,+i)}});
function openAnim(k,i){const S=SUBJ(k),a=S.anims[i],key=k+"|"+i;
  $("#ot").textContent=a.title;$("#oh").textContent=S.emoji+" "+S.name+(a.hint?" · "+a.hint:"");
  let bx=boxes[key];const first=!bx;if(first){bx=boxes[key]=document.createElement("div")}
  $("#obox").replaceChildren(bx);$("#ovl").classList.add("on");document.body.style.overflow="hidden";$("#ovl").scrollTop=0;
  if(first){try{a.build(bx,hFor(bx))}catch(e){bx.innerHTML='<div class="empty">動畫載入失敗：'+esc(e.message)+'</div>'}}}
function closeAnim(){$("#ovl").classList.remove("on");document.body.style.overflow=""}
$("#oc").onclick=closeAnim;$("#ovl").addEventListener("click",e=>{if(e.target.id==="ovl")closeAnim()});
/* ---------- Flash card ---------- */
let deck="all",topicF=null,queue=[],cur=null,forced=null,flipped=false;
const only=()=>$("#onlyUnk").checked;
const learnedOnly=()=>$("#onlyLearned").checked;
const learnedSet=()=>typeof learnedTopics==="function"?learnedTopics():new Set();
function pool(){const L=learnedOnly()?learnedSet():null;return model().cards.filter(c=>(deck==="all"||c._s===deck)&&(!topicF||c.topic===topicF)&&c.st!=="todo"&&(!L||(c.topic&&L.has(c.topic))))}
function goDeck(k,t){deck=k||"all";topicF=t||null;show("cards")}
function goCard(key){const c=model().byKey.get(key);if(!c)return;deck="all";topicF=null;forced=c;show("cards")}
function next(rebuild){
  if(rebuild||!queue.length){let p=pool();
    if(only()){ // smart review：到期（熟悉度低先）→ 新 card（每次最多 10 張）
      const due=p.filter(c=>!isNew(c)&&isDue(c)).sort((a,b)=>(srs[a._k].b-srs[b._k].b)||(srs[a._k].due-srs[b._k].due));
      const nw=p.filter(isNew);for(let i=nw.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[nw[i],nw[j]]=[nw[j],nw[i]]}
      p=due.concat(nw.slice(0,10))}
    else for(let i=p.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[p[i],p[j]]=[p[j],p[i]]}
    if(forced){p=p.filter(c=>c!==forced);p.unshift(forced);forced=null}queue=p}
  cur=queue.shift()||null;flipped=false;draw(true)}
function renderCardHead(){
  const P=progress();
  $("#deckbar").innerHTML=['all',...Cadet.order].map(k=>{const S=k==="all"?null:SUBJ(k),p=k==="all"?P.all:P.s.get(k);return `<button class="tab ${k===deck?"on":""}" data-d="${k}">${S?S.emoji+" "+esc(S.name):"全部"}<small>${p?p.k+"/"+p.n:"0"}</small></button>`}).join("");
  const sl=$("#topicSel");let o="";
  if(deck==="all"){sl.disabled=!topicF;o=topicF?`<option value="">× 取消 topic 篩選</option><option value="${esc(topicF)}" selected>${esc(Cadet.topic(topicF)?Cadet.topic(topicF).t.t:topicF)}</option>`:`<option value="">揀科目先可以按 topic 篩選</option>`}
  else{sl.disabled=false;const S=SUBJ(deck),M=model(),gs=new Map();(S.topics||[]).forEach(t=>{const cs=(M.byTopic.get(t.id)||[]).filter(c=>c.st!=="todo");if(!cs.length)return;const kn=cs.filter(c=>store[c._k]==="k").length;if(!gs.has(gname(t)))gs.set(gname(t),[]);gs.get(gname(t)).push(`<option value="${esc(t.id)}" ${t.id===topicF?"selected":""}>${esc(t.t)} (${kn}/${cs.length})</option>`)});
    o=`<option value="">全部 topic（${esc(S.name)}）</option>`+[...gs].map(([g,a])=>`<optgroup label="${esc(g)}">${a.join("")}</optgroup>`).join("")}
  sl.innerHTML=o}
$("#deckbar").addEventListener("click",e=>{const b=e.target.closest("[data-d]");if(b)goDeck(b.dataset.d)});
$("#topicSel").onchange=e=>{topicF=e.target.value||null;next(true)};
$("#onlyUnk").onchange=()=>next(true);$("#onlyLearned").onchange=()=>next(true);
function draw(anim){
  renderCardHead();const P=pool(),done=P.filter(c=>store[c._k]==="k").length;
  $("#prog").style.width=(P.length?done/P.length*100:0)+"%";const dueN=P.filter(c=>!isNew(c)&&isDue(c)).length,newN=P.filter(isNew).length;$("#count").textContent=`Mastered ${done} / ${P.length} · Due ${dueN} · New ${newN}`;$("#daily").textContent=`今日練咗 ${daily.n} 張 · 識 ${daily.ok}`;head();renderTabs();
  const area=$("#cardArea"),btns=$("#cardBtns");
  if(!cur){btns.style.display="none";
    area.innerHTML=P.length?`<div class="empty" style="margin-top:12px">🎉 All caught up for now. Cards come back when they are due.<br><button class="b" id="redo" style="margin-top:10px">Practise everything anyway</button></div>`:learnedOnly()?`<div class="empty" style="margin-top:12px">📚 No cards unlocked here yet.<br><span class="small">Finish a lesson in Learn first. Cards only cover topics you have learned.</span><br><button class="b" id="tolearn" style="margin-top:10px">Go to Learn</button> <button class="b g" id="showall" style="margin-top:10px">Show all cards</button></div>`:`<div class="empty" style="margin-top:12px">呢個範圍暫時未有 card 🛠️<br><span class="small">揀返其他科目，或者等資料整好。</span></div>`;
    const r=$("#redo");if(r)r.onclick=()=>{$("#onlyUnk").checked=false;next(true)};const tl=$("#tolearn");if(tl)tl.onclick=()=>show("learn");const sa=$("#showall");if(sa)sa.onclick=()=>{$("#onlyLearned").checked=false;next(true)};return}
  btns.style.display="";const S=SUBJ(cur._s);
  area.innerHTML=`<div class="scene"><div class="swipe" id="sw"><div class="flip" id="fl">
   <div class="face" style="background:${S.color}"><span class="tag">${esc(S.name)}</span><div class="em">${cur.e||"✈️"}</div><div class="q">${esc(cur.q)}</div><span class="tip">撳一下／空白鍵翻面</span></div>
   <div class="face back"><span class="tag">Answer${cur.st==="check"?" (to verify)":""}</span><div class="a">${esc(cur.a)}</div>${cur.zh?`<div class="zh">💡 ${esc(cur.zh)}</div>`:""}${cur.st==="check"?whyHTML(cur.topic,true):""}</div></div></div></div>`;
  if(anim){$("#sw").animate([{opacity:0,transform:"translateX(40px)"},{opacity:1,transform:"none"}],{duration:200})}}
function flip(){const f=$("#fl");if(f){flipped=!flipped;f.classList.toggle("f",flipped)}}
function answer(g){if(typeof g==="boolean")g=g?1:0;if(!cur||view!=="cards")return;const c=cur;grade(c,g);daily.n++;if(g>0)daily.ok++;save();
  if(g===0){const at=Math.min(3,queue.length);queue.splice(at,0,c)} // Again：幾張之後再出
  const ok=g>0,sw=$("#sw");sw.classList.remove("drag");sw.style.transform=`translateX(${ok?130:-130}%) rotate(${ok?12:-12}deg)`;sw.style.opacity=0;cur=null;
  setTimeout(()=>{next(!queue.length);renderSide()},260)}
$("#know").onclick=()=>answer(1);$("#easy").onclick=()=>answer(2);$("#again").onclick=()=>answer(0);
(function(){const area=$("#cardArea");let sx=null,dx=0,sw=null;
  area.addEventListener("pointerdown",e=>{if(!cur||e.target.closest("button"))return;sw=$("#sw");sx=e.clientX;dx=0;sw.classList.add("drag")});
  window.addEventListener("pointermove",e=>{if(sx===null||!sw)return;dx=e.clientX-sx;sw.style.transform=`translateX(${dx}px) rotate(${dx/25}deg)`;sw.classList.toggle("ok",dx>60);sw.classList.toggle("no",dx<-60)});
  const end=()=>{if(sx===null)return;const s=sw;sx=null;if(!s)return;s.classList.remove("drag","ok","no");s.style.transform="";
    if(Math.abs(dx)>90)answer(dx>0?1:0);else if(Math.abs(dx)<8)flip();dx=0};
  window.addEventListener("pointerup",end);window.addEventListener("pointercancel",end)})();
document.addEventListener("keydown",e=>{
  if(document.querySelector("#lesson.on"))return;
  const t=e.target,typing=t&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA");
  if(e.key==="Escape"){if($("#ovl").classList.contains("on"))closeAnim();closeSide();hideRes();return}
  if(typing)return;
  if(e.key==="/"){e.preventDefault();$("#q").focus();return}
  if(view==="cards"&&!$("#ovl").classList.contains("on")){
    if(e.key===" "||e.key==="Enter"){e.preventDefault();flip()}else if(e.key==="ArrowLeft")answer(0);else if(e.key==="ArrowRight")answer(1);else if(e.key==="ArrowUp"){e.preventDefault();answer(2)}}});
/* ---------- rail / init ---------- */
document.querySelectorAll("#rail button[data-v],.gear button").forEach(b=>b.onclick=()=>show(b.dataset.v));
const RETRO=["#ff6a2b","#8fae8b","#e9b949","#d8795a","#9fb4c2","#b9b88a","#d9c7a5","#f0a47a","#6fa883"];
function init(){
  Cadet.order.forEach((k,i)=>{Cadet.subjects[k].color=RETRO[i%RETRO.length]});if(typeof LV!=="undefined")LV.courses.forEach(c=>{if(Cadet.subjects[c.key])c.color=Cadet.subjects[c.key].color});
  $("#loading").style.display="none";
  const v=(location.hash||"").slice(1);
  show(["learn","dash","map","anim","cards","set"].includes(v)?v:"map");info()}
window.addEventListener("error",e=>{const l=$("#loading");if(l&&l.style.display!=="none")l.textContent="載入出錯："+e.message});
if(document.readyState==="complete")init();else window.addEventListener("load",init);
