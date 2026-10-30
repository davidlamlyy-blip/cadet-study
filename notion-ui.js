/* yno 自己嘅 Notion 筆記（CORE SUBJECT）閱讀頁＋MCQ 練習。資料：data/notion.js（Cadet.notion）。 */
V2.mcq=V2.mcq||{};try{const x=JSON.parse(localStorage.getItem("cadetV2")||"null");if(x&&x.mcq)V2.mcq=x.mcq}catch(e){}
const NK={pof:"POF",agk:"AGK",perf:"PERF",nav:"NAV",met:"MET",fp:"FP",law:"AIR LAW"};
let noteTab="guide",nSubj=null,nLesson=null;
const nid=id=>id.replace(/-/g,"");
const nurl=id=>"https://www.notion.so/"+nid(id);
function tex(s){ // 簡化 LaTeX → 可讀文字
  let t=s;for(let i=0;i<4;i++)t=t.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g,"($1)/($2)");
  t=t.replace(/\\text\{([^{}]*)\}/g,"$1").replace(/\\(?:mathrm|mathbf|operatorname)\{([^{}]*)\}/g,"$1").replace(/\\times/g,"×").replace(/\\cdot/g,"·").replace(/\\rho/g,"ρ").replace(/\\theta/g,"θ").replace(/\\phi/g,"φ").replace(/\\alpha/g,"α").replace(/\\Delta/g,"Δ").replace(/\\pi/g,"π").replace(/\\sqrt\{([^{}]*)\}/g,"√($1)").replace(/\\approx/g,"≈").replace(/\\leq?/g,"≤").replace(/\\geq?/g,"≥").replace(/\\rightarrow|\\to/g,"→").replace(/\\left|\\right/g,"").replace(/\\,|\;|\\ /g," ").replace(/\\%/g,"%");
  t=t.replace(/_\{([^{}]*)\}/g,"<sub>$1</sub>").replace(/_([A-Za-z0-9])/g,"<sub>$1</sub>").replace(/\^\{([^{}]*)\}/g,"<sup>$1</sup>").replace(/\^([A-Za-z0-9])/g,"<sup>$1</sup>");
  return t.replace(/[{}]/g,"")}
function inl(s){let t=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  t=t.replace(/\$\$?([^$]+)\$\$?/g,(m,x)=>`<span class="mth">${tex(x.replace(/&lt;/g,"<").replace(/&gt;/g,">"))}</span>`);
  t=t.replace(/\*\*\*(.+?)\*\*\*/g,"<b><i>$1</i></b>").replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/(^|[^*])\*([^*\n]+)\*/g,"$1<i>$2</i>").replace(/`([^`]+)`/g,"<code>$1</code>")
   .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/!\[image\]\([^)]*\)/g,'<span class="imgph">🖼 圖片（見 Notion 原頁）</span>');return t}
function md2html(md){const L=md.replace(/\r/g,"").split("\n"),o=[];let i=0;
  while(i<L.length){const ln=L[i];
    if(/^\s*\|/.test(ln)){const rows=[];while(i<L.length&&/^\s*\|/.test(L[i])){rows.push(L[i].trim().replace(/^\||\|$/g,"").split("|").map(c=>c.trim()));i++}
      o.push(`<div class="tblw"><table>${rows.map((r,j)=>`<tr>${r.map(c=>j===0?`<th>${inl(c)}</th>`:`<td>${inl(c)}</td>`).join("")}</tr>`).join("")}</table></div>`);continue}
    let m;
    if(m=ln.match(/^!\[(.*)\]\((img\/[^)]+)\)\s*$/)){o.push(`<figure class="fig"><img src="${m[2]}" loading="lazy" alt=""><figcaption>${inl(m[1])}</figcaption></figure>`)}
    else if(m=ln.match(/^(#{1,3}) (.*)$/)){const lv=m[1].length+1;o.push(`<h${lv} class="nh">${inl(m[2])}</h${lv}>`)}
    else if(m=ln.match(/^(\s*)- (?:\[ \] )?(.*)$/)){const d=Math.floor(m[1].length/2);o.push(`<div class="li" style="margin-left:${d*20}px"><span class="bl">${d?"–":"•"}</span><span>${inl(m[2])}</span></div>`)}
    else if(m=ln.match(/^(\s*)(\d+)\. (.*)$/)){const d=Math.floor(m[1].length/2);o.push(`<div class="li" style="margin-left:${d*20}px"><span class="bl">${m[2]}.</span><span>${inl(m[3])}</span></div>`)}
    else if(m=ln.match(/^\s*▸ (.*)$/)){o.push(`<div class="tgl">▸ ${inl(m[1])}</div>`)}
    else if(/^> ?(.*)$/.test(ln)){o.push(`<div class="qt">${inl(ln.replace(/^> ?/,""))}</div>`)}
    else if(/^---+$/.test(ln.trim()))o.push("<hr>");
    else if(ln.trim()==="```"){let b=[];i++;while(i<L.length&&L[i].trim()!=="```"){b.push(L[i]);i++}o.push(`<pre>${inl(b.join("\n"))}</pre>`)}
    else if(ln.trim())o.push(`<p>${inl(ln)}</p>`);
    i++}
  return o.join("")}
const _renderNotesOld=window.__rnSrc;
const ND=()=>noteTab==='guide'?(Cadet.lnotes||[]):(Cadet.notion||[]);
const lessonsOf=k=>ND().filter(r=>r.k===k&&(noteTab!=="guide"||V2.noted["n:"+r.id]||r.id===nLesson));
function renderNotes(){
  const box=$("#v-notes");
  const tabs=`<div class="modes"><button class="mode ${noteTab==="guide"?"on":""}" data-ntab="guide">📘 學習筆記</button><button class="mode ${noteTab==="src"?"on":""}" data-ntab="src">📚 來源整理（AI）</button></div>`;
  if(noteTab==="src"){_renderNotesOld();box.insertAdjacentHTML("afterbegin",tabs);return}
  const N=ND();
  if(!nLesson){
    const ks=[...new Set(N.filter(r=>noteTab!=="guide"||V2.noted["n:"+r.id]).map(r=>r.k))];if(!ks.length){box.innerHTML=tabs+`<div class="empty">仲未睇過任何筆記。去 <button class="b" data-tolearn="1">學習路徑</button>，每個 chapter 第一關就係 Note，睇完會自動收埋喺呢度。</div>`;return}if(!nSubj||!ks.includes(nSubj))nSubj=ks[0];
    const L=lessonsOf(nSubj);
    box.innerHTML=tabs+`<div class="small chap-hint">呢度收集你睇過嘅筆記（Recall → Notes → Summary → MCQ）。未睇嘅 chapter 喺學習路徑每章第一關。已收集 ${N.filter(r=>V2.noted["n:"+r.id]).length} / ${N.length} 章。</div>
    <div class="subtabs">${ks.map(k=>`<button class="tab ${k===nSubj?"on":""}" data-nsubj="${k}">${SUBJ(k)?SUBJ(k).emoji:""} ${NK[k]||k} <small>${lessonsOf(k).length}</small></button>`).join("")}</div>
    <div class="llist">${L.map((r,i)=>{const rd=V2.noted["n:"+r.id],sc=V2.mcq[r.id];return `<button class="lrow2" data-nles="${r.id}"><span class="no">${String(i+1).padStart(2,"0")}</span><span class="lt2">${esc(r.t.replace(/^(POF|AGK|MET|AS|FP|PERF|GNAV|RNAV|NAV)[ /-]*(LESSON\s*)?[-\s]*/i,"")||r.t)}</span>${r.mcq.length?`<span class="mm">${sc?`${sc.s}/${sc.n}`:`MCQ ${r.mcq.length}`}</span>`:""}<span class="st" style="color:${rd?"#2f7d4f":"#a8a395"}">${rd?"●":"○"}</span></button>`}).join("")}</div>`;return}
  const r=N.find(x=>x.id===nLesson),L=lessonsOf(r.k),i=L.indexOf(r),rd=!!V2.noted["n:"+r.id];
  box.innerHTML=tabs+`<div class="nav2"><button class="b g" data-nback="1">← ${NK[r.k]||r.k} 列表</button> <span class="small">${i+1} / ${L.length}</span></div>
  <article class="note notion" style="--c:${SUBJ(r.k)?SUBJ(r.k).color:"#ff6a2b"}">
   <div class="small">${SUBJ(r.k)?SUBJ(r.k).emoji+" "+esc(SUBJ(r.k).name):""}</div><h1>${esc(r.t)}</h1>${(r.src&&r.src.length)?`<div class="srcs">${r.src.map(x=>`<span class="sc">📂 ${esc(x)}</span>`).join("")}</div>`:""}
   <div class="acts">${r.yt&&r.yt.startsWith("http")?`<a class="b g alink" href="${esc(r.yt)}" target="_blank" rel="noopener">▶ 課堂片</a>`:""}${noteTab==="mine"?`<a class="b g alink" href="${nurl(r.id)}" target="_blank" rel="noopener">🔗 Notion 原頁</a>`:""}<button class="b ${rd?"g":""}" data-nread="${r.id}">${rd?"✓ 已睇":"📖 標記已睇"}</button><button class="b g" data-nedit="${r.id}">✏️ 編輯筆記</button>${r._ed?'<span class="edtag">已編輯</span>':""}</div>
   ${r.rec.length?`<section class="ns recall"><h2>🧠 Recall ${r.lesson?`<button class="b" data-qlesson="${r.lesson}">⚡ 快速溫習（課堂）</button>`:""}</h2><ol>${r.rec.map((x,j)=>{const l=r.rl&&r.rl[j];return `<li>${inl(x)} ${l?`<button class="rlink" data-qlesson="${l}">⚡ 溫習</button>`:(r.rl?'<span class="small">（課堂未有）</span>':"")}</li>`}).join("")}</ol></section>`:""}
   <section class="ns"><h2>📝 Notes</h2>${md2html(r.notes)}</section>
   ${r.sum?`<section class="ns sumry"><h2>🔑 Summary</h2>${md2html(r.sum)}</section>`:""}
   ${r.mcq.length?`<section class="ns"><h2>✅ MCQ 練習 (${r.mcq.length})</h2><div id="mcqbox"><button class="b" data-mcqstart="${r.id}">開始練習</button>${V2.mcq[r.id]?`<span class="small"> 上次：${V2.mcq[r.id].s}/${V2.mcq[r.id].n}</span>`:""}</div></section>`:(r.act&&r.act.length>20?`<section class="ns"><h2>📌 Actions</h2>${md2html(r.act)}</section>`:"")}
   ${fromPath?`<div class="acts" style="margin-top:18px"><button class="b" data-readback="${r.id}">✓ 睇完，返學習路徑</button></div>`:""}<div class="pn">${i>0?`<button class="b g" data-nles="${L[i-1].id}">← ${esc(L[i-1].t.slice(0,28))}</button>`:"<span></span>"}${i<L.length-1?`<button class="b" data-nles="${L[i+1].id}">${esc(L[i+1].t.slice(0,28))} →</button>`:""}</div></article>`;window.scrollTo({top:0})}
function mcqRun(id){const r=ND().find(x=>x.id===id);let qi=0,score=0;const box=$("#mcqbox");
  const show1=()=>{const q=r.mcq[qi];box.innerHTML=`<div class="small">${qi+1} / ${r.mcq.length}</div><div class="mq">${inl(q.q)}</div>`+Object.entries(q.o).map(([k,v],j)=>`<button class="opt" data-n="${j+1}" data-ok="${k===q.a?1:0}" data-k="${k}">${k}. ${inl(v)}</button>`).join("")+`<div id="mfb"></div>`;
    box.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{box.querySelectorAll(".opt").forEach(x=>{x.disabled=true;if(x.dataset.ok==="1")x.classList.add("right")});const ok=b.dataset.ok==="1";if(ok)score++;else b.classList.add("wrong");
      $("#mfb").innerHTML=`<div class="${ok?"fbok":"fbno"}">${ok?"✅ Correct":"❌ Correct answer: "+q.a}${q.why?`<div class="small why1">${inl(q.why)}</div>`:""}${q.zh?`<div class="small why1">💡 ${inl(q.zh)}</div>`:""}</div><button class="b" id="mnext">${qi<r.mcq.length-1?"Next":"Finish"}</button>`;$("#mnext").onclick=()=>{qi++;qi<r.mcq.length?show1():fin()}})};
  const fin=()=>{V2.mcq[r.id]={s:score,n:r.mcq.length,t:Date.now()};v2save();box.innerHTML=`<div class="done-screen"><h2>${score} / ${r.mcq.length}</h2><div class="say">${score/r.mcq.length>=.8?"Great!":"Review the notes and try again."}</div><button class="b" data-mcqstart="${r.id}">再做一次</button></div>`};show1()}
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-ntab]");if(t){noteTab=t.dataset.ntab;noteSel=null;renderNotes();return}
  const s=e.target.closest("[data-nsubj]");if(s){nSubj=s.dataset.nsubj;renderNotes();return}
  const l=e.target.closest("[data-nles]");if(l){nLesson=l.dataset.nles;if(view!=="notes")show("notes");else renderNotes();return}
  if(e.target.closest("[data-nback]")){nLesson=null;fromPath=false;renderNotes();return}
  const rb=e.target.closest("[data-readback]");if(rb){V2.noted["n:"+rb.dataset.readback]=V2.noted["n:"+rb.dataset.readback]||Date.now();v2save();fromPath=false;nLesson=null;show("learn");return}
  const gl=e.target.closest("[data-tolearn]");if(gl){show("learn");return}
  const rd=e.target.closest("[data-nread]");if(rd){const k="n:"+rd.dataset.nread;if(V2.noted[k])delete V2.noted[k];else V2.noted[k]=Date.now();v2save();renderNotes();return}
  const ql=e.target.closest("[data-qlesson]");if(ql){show("learn");setTimeout(()=>startLesson(ql.dataset.qlesson),80);return}
  const m=e.target.closest("[data-mcqstart]");if(m){mcqRun(m.dataset.mcqstart)}});

function editNote(id){const r=ND().find(x=>x.id===id);if(!r)return;
  modal(`<h3>✏️ 編輯筆記</h3><label>標題<input id="enT" value="${esc(r.t)}"></label>
  <label>Recall（每行一條）<textarea id="enR" rows="6">${esc((r.rec||[]).join("\n"))}</textarea></label>
  <label>Notes（Markdown：## 標題、- 重點、| 表格 |、![圖說](img/…)）<textarea id="enN" rows="16" style="font-family:var(--mono);font-size:13px">${esc(r.notes||"")}</textarea></label>
  <label>Summary（Markdown）<textarea id="enS" rows="5">${esc(r.sum||"")}</textarea></label>
  <div class="small">提示：技術名詞請用英文（stall、AoA、lift…）。</div>
  <div class="acts"><button class="b" id="enSave">儲存</button><button class="b g" id="enReset">還原原稿</button><button class="b g" id="enCancel">取消</button></div>`);
  $("#enCancel").onclick=closeModal;
  $("#enSave").onclick=()=>{V2.edits.notes[id]={t:$("#enT").value.trim()||r._o.t,rec:$("#enR").value.split("\n").map(x=>x.trim()).filter(Boolean),notes:$("#enN").value,sum:$("#enS").value,tm:Date.now()};v2save();applyEdits();closeModal();renderNotes()};
  $("#enReset").onclick=()=>{V2.edits.notes[id]={x:1,tm:Date.now()};v2save();applyEdits();closeModal();renderNotes()}}
document.addEventListener("click",e=>{const b=e.target.closest("[data-nedit]");if(b)editNote(b.dataset.nedit)});
applyEdits();
