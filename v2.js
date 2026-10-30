/* V2：單欄概念頁、章節筆記（Notes）、掌握度＋建議、卡牌模式、編輯／新增／刪除。載入喺 ui.js、sync.js 之後。 */
const BK=["cadetSRS","cadetCards","cadetDaily","cadetV2","cadetLearn"];
function snapshot(){try{const o={t:Date.now()};BK.forEach(k=>o[k]=localStorage.getItem(k));const prev=JSON.parse(localStorage.getItem("cadetBackup")||"null");
  const hasData=BK.some(k=>o[k]&&o[k]!=="{}"&&o[k]!=="null");if(hasData&&(!prev||Date.now()-prev.t>864e5))localStorage.setItem("cadetBackup",JSON.stringify(o))}catch(e){}}
snapshot();
Cadet.order.forEach(k=>assignKeys(k,Cadet.subjects[k].cards));migrateKeys();applyEdits();
TITLES.notes=["筆記","每章整理好嘅重點，睇完先做課堂，再練 card"];
/* ---------- 掌握度（AI 式估算：熟悉度 box × 逾期折減 × 失誤折減） ---------- */
function cardScore(c){const o=srs[c._k];if(!o)return 0;let s=(o.b<0?0:o.b)/6;const od=Math.max(0,(Date.now()-o.due)/864e5);s*=Math.max(.4,1-od*.05);s*=1-Math.min(.3,(o.l||0)*.05);return Math.max(0,s)}
function topicCards(id){return (model().byTopic.get(id)||[]).filter(c=>c.st!=="todo")}
function topicMastery(id){const cs=topicCards(id);if(!cs.length)return null;return Math.round(cs.reduce((a,c)=>a+cardScore(c),0)/cs.length*100)}
const isLearned=id=>learnedTopics().has(id);
function topicStatus(id){const m=topicMastery(id);if(m!==null&&m>=80)return 3;if(m!==null&&m>0)return 2;return isLearned(id)?1:0}
const ST=[["○","未開始","#a8a395"],["◐","已睇 note／已學","#e9b949"],["◕","練習中","#ff6a2b"],["●","已掌握","#2f7d4f"]];
function allTopics(){const o=[];Cadet.order.forEach(k=>(SUBJ(k).topics||[]).forEach(t=>o.push({t,s:SUBJ(k)})));return o}
function suggest(n){ // 揀最值得而家練嘅 topic：到期多、掌握度低、有未見 card
  const L=learnedTopics(),out=[];
  allTopics().forEach(({t,s})=>{if(!L.has(t.id))return;const cs=topicCards(t.id);if(!cs.length)return;
    const due=cs.filter(c=>!isNew(c)&&isDue(c)).length,nw=cs.filter(isNew).length,m=topicMastery(t.id)||0;
    const score=due*3+(100-m)/12+(nw?2:0);if(score<=0.5)return;
    out.push({id:t.id,t,s,score,due,nw,m,why:due?`${due} 張到期`:nw?`${nw} 張未見`:`掌握度 ${m}%`})});
  return out.sort((a,b)=>b.score-a.score).slice(0,n||6)}
const srcChips=t=>(t.src||"").split(/[;；]/).map(x=>x.trim()).filter(Boolean).map(x=>`<span class="sc">📂 ${esc(x)}</span>`).join("");
/* ---------- 概念頁（單欄：導航 → 標題 → 主內容 → 動作 → 關連 → 來源） ---------- */
document.querySelector("#info")&&(document.querySelector("#info").style.display="none");
function stBadge(id){const s=topicStatus(id),m=topicMastery(id);return `<span class="stb" style="--c:${ST[s][2]}">${ST[s][0]} ${ST[s][1]}${m!==null?` · ${m}%`:""}</span>`}
function renderConcept(id){
  const f=Cadet.topic(id),t=f.t,S=f.s,g=gname(t),kids=(S.topics||[]).filter(x=>gname(x)===g),i=kids.findIndex(x=>x.id===id),P=progress();
  const nb=nbOf(id),inGrp=n=>Cadet.topic(n.o).s.key===S.key&&gname(Cadet.topic(n.o).t)===g,
    same=nb.filter(inGrp),sameS=nb.filter(n=>Cadet.topic(n.o).s.key===S.key&&!inGrp(n)),cross=nb.filter(n=>Cadet.topic(n.o).s.key!==S.key);
  const card=n=>{const x=Cadet.topic(n.o);return `<button class="ncard" style="--c:${x.s.color}" data-topic-go="${esc(n.o)}"><span class="nt">${x.s.key!==S.key?x.s.emoji+" ":""}${esc(x.t.t)}</span>${n.why&&n.why!=="—"?`<span class="nw">${esc(n.why)}</span>`:""}<span class="nm2">${x.s.key!==S.key?esc(x.s.name)+" · ":""}${esc(gname(x.t))}</span></button>`};
  const col=(h,l)=>l.length?`<div class="rcol"><h4>${h} <small>${l.length}</small></h4>${l.slice(0,10).map(card).join("")}</div>`:"";
  const n=topicCards(id).length,lesson=lessonFor(id),noted=!!V2.noted[id];
  $("#lst").innerHTML=`
  <nav class="stepper" style="--c:${S.color}">${kids.map((x,j)=>`<button class="dot s${topicStatus(x.id)} ${j===i?"now":""}" title="${esc(x.t)}" data-topic-go="${esc(x.id)}">${j+1}</button>`).join("")}<span class="small">${i+1} / ${kids.length} · ${esc(g)}</span></nav>
  <article class="concept" style="--c:${S.color}">
    <div class="small">${S.emoji} ${esc(S.name)}</div>
    <h1>${esc(t.t)} ${stBadge(id)}${t._ed?'<span class="edtag">已編輯</span>':""}</h1>
    ${t.check?whyHTML(t.id,true):""}
    <p class="lead">${esc(t.d||"")}</p>
    ${(t.pts||[]).length?`<ul class="kp">${t.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
    <div class="acts"><button class="b ${noted?"g":""}" data-act2="note" data-id="${esc(id)}">${noted?"✓ 已標記為已睇":"📖 標記為已睇（解鎖 card）"}</button>
      ${lesson?`<button class="b" data-act2="lesson" data-id="${esc(lesson)}">🎯 做課堂</button>`:""}
      <button class="b" data-deck="${S.key}" data-topic="${esc(id)}" ${n?"":"disabled"}>🃏 練 card${n?` (${n})`:""}</button>
      <button class="b g" data-act2="edit" data-id="${esc(id)}">✏️ 編輯</button></div>
    ${t.src?`<div class="srcs">${srcChips(t)}</div>`:""}
  </article>
  <section class="rel">${col("同 chapter 關連",same)}${col("同科其他 chapter",sameS)}${col("其他科目",cross)}${nb.length?"":'<div class="empty">呢個概念暫時冇記錄關連</div>'}</section>
  <div class="pn"><button class="b g" ${i>0?`data-topic-go="${esc(kids[i-1].id)}"`:"disabled"}>← ${i>0?esc(kids[i-1].t):"第一個"}</button><button class="b" ${i<kids.length-1?`data-topic-go="${esc(kids[i+1].id)}"`:"disabled"}>${i<kids.length-1?esc(kids[i+1].t):"最後一個"} →</button></div>`;
  window.scrollTo({top:0})}
function lessonFor(id){if(typeof LV==="undefined")return null;for(const c of LV.courses)for(const u of c.units)for(const l of u.lessons)if(!l.quiz&&!l.scenario&&(l.topics||[l.topic]).includes(id))return l.id;return null}
/* ---------- chapter 卡（加狀態點＋筆記入口） ---------- */
const _drawMap=drawMap;
drawMap=function(){
  if(curSubject&&!sel){const S=SUBJ(curSubject),T=S.topics||[];if(T.length){mapMode="list";crumb();$("#mapmode").innerHTML="";$("#map").style.display="none";$("#zoomctl").style.display="none";$("#legend").textContent="";
    const gs=[...new Set(T.map(gname))];
    $("#lst").innerHTML=`<div class="small chap-hint">每章流程：📝 Note → 🎯 課堂 → 🗺️ 地圖 → 🃏 Card。圓點＝進度（○未開始 ◐已睇 ◕練習中 ●已掌握）</div><div class="chaps">`+gs.map(g=>{const kids=T.filter(t=>gname(t)===g),done=kids.filter(t=>topicStatus(t.id)>=1).length;
      return `<section class="chap ${curGroup===g?"on":""}" style="--c:${S.color}"><header><b>${esc(g)}</b><span class="small">${done}/${kids.length}</span></header><span class="seg" style="--p:${Math.round(done/kids.length*100)}%"></span><button class="b g notebtn" data-note-open="${esc(S.key+"|"+g)}">📝 Chapter note</button><ol>`+kids.map((t,i)=>`<li><button class="trow" data-topic-go="${esc(t.id)}"><span class="st" style="color:${ST[topicStatus(t.id)][2]}">${ST[topicStatus(t.id)][0]}</span><span class="tt">${esc(t.t)}</span>${t.check?'<span class="warn">!</span>':""}</button></li>`).join("")+`</ol></section>`}).join("")+`</div>`;return}}
  _drawMap()};
/* ---------- Notes 頁 ---------- */
let noteSel=null;
function renderNotes(){
  const box=$("#v-notes");
  if(!noteSel){box.innerHTML=`<div class="small chap-hint">揀一個 chapter 睇整理好嘅筆記（跨來源）。睇完撳「標記已睇」會解鎖對應 flash card。</div>`+Cadet.order.map(k=>{const S=SUBJ(k),T=S.topics||[];if(!T.length)return "";const gs=[...new Set(T.map(gname))];
    return `<section class="nsub" style="--c:${S.color}"><h3>${S.emoji} ${esc(S.name)}</h3><div class="nchips">${gs.map(g=>{const kids=T.filter(t=>gname(t)===g),d=kids.filter(t=>topicStatus(t.id)>=1).length;return `<button class="nch" data-note-open="${esc(k+"|"+g)}"><b>${esc(g)}</b><span class="small">${d}/${kids.length}</span></button>`}).join("")}</div></section>`}).join("");return}
  const [k,g]=noteSel.split("|"),S=SUBJ(k),kids=(S.topics||[]).filter(t=>gname(t)===g);
  const srcMap=new Map();kids.forEach(t=>(t.src||"").split(/[;；]/).map(x=>x.trim()).filter(Boolean).forEach(x=>{(srcMap.get(x)||srcMap.set(x,[]).get(x)).push(t.t)}));
  const L=kids.map(t=>t.id).find(id=>lessonFor(id));
  box.innerHTML=`<div class="nav2"><button class="b g" id="nback">← 全部筆記</button> <span class="small">${S.emoji} ${esc(S.name)}</span></div>
  <article class="note" style="--c:${S.color}"><h1>${esc(g)}</h1><div class="small">${kids.length} 個概念 · ${srcMap.size} 個來源</div>
    <div class="acts"><button class="b" id="readall">📖 全部標記為已睇</button>${L?`<button class="b" data-act2="lesson" data-id="${esc(lessonFor(L))}">🎯 做課堂</button>`:""}<button class="b g" data-sub-open="${k}|${esc(g)}">🗺️ 睇地圖</button><button class="b g" data-deck="${k}">🃏 練 card</button></div>
    <details class="srcsum"><summary>📂 來源一覽（${srcMap.size}）</summary>${[...srcMap].map(([s,a])=>`<div class="srow2"><span class="sc">${esc(s)}</span><span class="small">${a.length} 個概念</span></div>`).join("")}</details>
    ${kids.map((t,i)=>`<section class="nt-sec" id="n-${esc(t.id)}"><h2><span class="no">${String(i+1).padStart(2,"0")}</span>${esc(t.t)} ${stBadge(t.id)}</h2>${t.check?whyHTML(t.id,true):""}<p class="lead">${esc(t.d||"")}</p>${(t.pts||[]).length?`<ul class="kp">${t.pts.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}<div class="srcs">${srcChips(t)}</div><div class="acts"><button class="b g" data-topic-go="${esc(t.id)}">🗺️ 關連</button><button class="b g" data-act2="edit" data-id="${esc(t.id)}">✏️ 編輯</button></div></section>`).join("")}
  </article>`;window.scrollTo({top:0})}
const _show=show;
show=function(v){_show(v);if(v==="notes")renderNotes()};
/* ---------- 編輯 UI ---------- */
function modal(html){let m=$("#v2m");if(!m){m=document.createElement("div");m.id="v2m";document.body.appendChild(m)}m.innerHTML=`<div class="mbox">${html}</div>`;m.className="on";m.onclick=e=>{if(e.target===m)closeModal()}}
function closeModal(){const m=$("#v2m");if(m)m.className=""}
function editTopic(id){const f=Cadet.topic(id),t=f.t;
  modal(`<h3>✏️ 編輯概念</h3><label>標題<input id="etT" value="${esc(t.t)}"></label><label>簡述<textarea id="etD" rows="3">${esc(t.d||"")}</textarea></label><label>重點（每行一點）<textarea id="etP" rows="7">${esc((t.pts||[]).join("\n"))}</textarea></label><div class="acts"><button class="b" id="etSave">儲存</button><button class="b g" id="etReset">還原原稿</button><button class="b g" id="etCancel">取消</button></div>`);
  $("#etCancel").onclick=closeModal;
  $("#etSave").onclick=()=>{V2.edits.topics[id]={t:$("#etT").value.trim()||t._o.t,d:$("#etD").value.trim(),pts:$("#etP").value.split("\n").map(x=>x.trim()).filter(Boolean),tm:Date.now()};v2save();applyEdits();closeModal();refresh2()};
  $("#etReset").onclick=()=>{V2.edits.topics[id]={x:1,tm:Date.now()};v2save();applyEdits();closeModal();refresh2()}}
function cardForm(c){const isNew=!c;const subs=Cadet.order;const cs=c?c._s:(deck!=="all"?deck:subs[0]);
  const topicOpts=k=>`<option value="">（唔揀 topic）</option>`+(SUBJ(k).topics||[]).map(t=>`<option value="${esc(t.id)}" ${c&&c.topic===t.id?"selected":(!c&&topicF===t.id?"selected":"")}>${esc(t.t)}</option>`).join("");
  modal(`<h3>${isNew?"➕ 新增 flash card":"✏️ 編輯 card"}</h3>${isNew?`<label>科目<select id="cfS">${subs.map(k=>`<option value="${k}" ${k===cs?"selected":""}>${SUBJ(k).emoji} ${esc(SUBJ(k).name)}</option>`).join("")}</select></label><label>Topic<select id="cfT">${topicOpts(cs)}</select></label>`:""}
  <label>圖示<input id="cfE" maxlength="2" value="${esc(c?c.e||"":"📝")}" style="width:70px"></label><label>問題 Question<textarea id="cfQ" rows="2">${esc(c?c.q:"")}</textarea></label><label>答案 Answer<textarea id="cfA" rows="3">${esc(c?c.a:"")}</textarea></label><label>中文解釋（可留空）<input id="cfZ" value="${esc(c?c.zh||"":"")}"></label>
  <div class="acts"><button class="b" id="cfSave">儲存</button>${c?`<button class="b g" id="cfDel" style="color:#d62d20">🗑 刪除</button>`:""}${c&&c._ed&&!c._u?`<button class="b g" id="cfReset">還原原稿</button>`:""}<button class="b g" id="cfCancel">取消</button></div>`);
  if(isNew)$("#cfS").onchange=e=>{$("#cfT").innerHTML=topicOpts(e.target.value)};
  $("#cfCancel").onclick=closeModal;
  $("#cfSave").onclick=()=>{const q=$("#cfQ").value.trim(),a=$("#cfA").value.trim();if(!q||!a){alert("問題同答案都要填");return}const e=$("#cfE").value.trim(),z=$("#cfZ").value.trim(),tm=Date.now();
    if(isNew){V2.edits.add.push({id:uid(),s:$("#cfS").value,topic:$("#cfT").value,e,q,a,zh:z,tm})}
    else if(c._u){const x=V2.edits.add.find(y=>y.s+"|"+y.id===c._k);if(x){Object.assign(x,{e,q,a,zh:z,tm})}}
    else V2.edits.cards[c._k]={q,a,zh:z,e,tm};
    v2save();applyEdits();closeModal();refresh2(true)};
  const d=$("#cfDel");if(d)d.onclick=()=>{if(!confirm("刪除呢張 card？（原有 card 可以喺設定還原）"))return;const tm=Date.now();
    if(c._u){const x=V2.edits.add.find(y=>y.s+"|"+y.id===c._k);if(x){x.x=1;x.tm=tm}}else V2.edits.del[c._k]={v:1,tm};
    v2save();applyEdits();closeModal();refresh2(true)};
  const r=$("#cfReset");if(r)r.onclick=()=>{V2.edits.cards[c._k]={x:1,tm:Date.now()};v2save();applyEdits();closeModal();refresh2(true)}}
function refresh2(cards){try{renderSide();if(view==="map")drawMap();else if(view==="notes")renderNotes();else if(view==="cards")next(true)}catch(e){}}
/* ---------- 全域點擊 ---------- */
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act2]");if(a){const id=a.dataset.id;
    if(a.dataset.act2==="note"){if(V2.noted[id])delete V2.noted[id];else V2.noted[id]=Date.now();v2save();refresh2()}
    else if(a.dataset.act2==="edit")editTopic(id);
    else if(a.dataset.act2==="lesson"){show("learn");setTimeout(()=>startLesson(id),50)}return}
  const n=e.target.closest("[data-note-open]");if(n){noteSel=n.dataset.noteOpen;show("notes");return}
  const so=e.target.closest("[data-sub-open]");if(so){const [k,g]=so.dataset.subOpen.split("|");curSubject=k;curGroup=g;sel=null;show("map");return}
  if(e.target.id==="nback"){noteSel=null;renderNotes();return}
  if(e.target.id==="readall"){const [k,g]=noteSel.split("|");(SUBJ(k).topics||[]).filter(t=>gname(t)===g).forEach(t=>{V2.noted[t.id]=V2.noted[t.id]||Date.now()});v2save();refresh2();return}
  if(e.target.id==="addCard"){cardForm(null);return}if(e.target.id==="editCard"&&cur){cardForm(cur);return}
  const md=e.target.closest("[data-mode]");if(md){cmode=md.dataset.mode;try{localStorage.setItem("cadetMode",cmode)}catch(x){}next(true);return}});
/* ---------- 卡牌模式：Pick／Suggested／General，共用同一份 SRS ---------- */
let cmode="pick";try{cmode=localStorage.getItem("cadetMode")||"pick"}catch(e){}
const _pool=pool;
pool=function(){
  if(cmode==="sug"){const ids=new Set(suggest(5).map(x=>x.id));return model().cards.filter(c=>c.st!=="todo"&&c.topic&&ids.has(c.topic))}
  if(cmode==="gen"){const L=learnedTopics();return model().cards.filter(c=>c.st!=="todo"&&c.topic&&L.has(c.topic))}
  return _pool()};
const _renderCardHead=renderCardHead;
renderCardHead=function(){_renderCardHead();
  let bar=$("#modebar");if(!bar){bar=document.createElement("div");bar.id="modebar";$("#deckbar").parentNode.insertBefore(bar,$("#deckbar"))}
  const sug=suggest(5);
  bar.innerHTML=`<div class="modes">${[["pick","🎯 自己揀","你揀科目／topic"],["sug","🤖 建議","按到期同掌握度揀"],["gen","🔁 綜合溫習","所有已學內容混合"]].map(([m,l,h])=>`<button class="mode ${cmode===m?"on":""}" data-mode="${m}" title="${h}">${l}</button>`).join("")}<span class="mspace"></span><button class="b g" id="addCard">➕ 新增 card</button>${cur?`<button class="b g" id="editCard">✏️ 編輯／刪除</button>`:""}</div>
  ${cmode==="sug"?`<div class="small sugline">建議練：${sug.length?sug.map(x=>`${esc(x.t.t)}（${x.why}）`).join("、"):"暫時冇建議（先睇 note 或做課堂，令 card 解鎖）"}</div>`:cmode==="gen"?`<div class="small sugline">綜合溫習：混合所有已學 topic，到期優先</div>`:""}`;
  const dk=$("#deckbar"),tp=document.querySelector(".dopt");if(dk)dk.style.display=cmode==="pick"?"":"none";if(tp)tp.style.display=cmode==="pick"?"":"none"};
/* ---------- 設定：還原已刪 card ---------- */
const _renderSet2=renderSet;
renderSet=function(){_renderSet2();const nd=Object.values(V2.edits.del).filter(x=>x.v).length+V2.edits.add.filter(x=>x.x).length,ne=Object.keys(V2.edits.topics).length+Object.keys(V2.edits.cards).length;
  const d=document.createElement("div");d.className="card-box";d.innerHTML=`<b>✏️ 編輯紀錄</b><div class="small" style="margin:6px 0">已改 ${ne} 項 · 已刪 card ${nd} 張（會跟 GitHub 同步）</div><button class="b g" id="restoreDel" ${nd?"":"disabled"}>還原所有已刪 card</button>`;
  $("#v-set").appendChild(d);$("#restoreDel").onclick=()=>{Object.keys(V2.edits.del).forEach(k=>V2.edits.del[k]={v:0,tm:Date.now()});V2.edits.add.forEach(a=>{if(a.x){a.x=0;a.tm=Date.now()}});v2save();applyEdits();refresh2();renderSet()}};

window.__rnSrc=renderNotes;
