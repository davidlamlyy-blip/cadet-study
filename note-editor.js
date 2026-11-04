/* 筆記直接編輯（Notion／Word 式）：筆記頁就地打字、自動儲存；工具列、「/」選單、Markdown 快捷鍵、表格、相片。
   相片：壓縮後存 IndexedDB，有 token 就上載去私人 repo（cadet-progress/img/），筆記只記 asset:<id>。唔放入 progress.json，因為 base64 會迫爆 localStorage 同 GitHub 1MB 讀取限制。 */
/* ---------- 相片儲存 ---------- */
const AS={db:null,url:{}};
function asDb(){return AS.db||(AS.db=new Promise((ok,no)=>{const r=indexedDB.open("cadetAssets",1);r.onupgradeneeded=()=>r.result.createObjectStore("img");r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)}))}
async function asTx(mode,fn){const d=await asDb();return new Promise((ok,no)=>{const t=d.transaction("img",mode),r=fn(t.objectStore("img"));t.oncomplete=()=>ok(r&&r.result);t.onerror=()=>no(t.error)})}
const asGet=id=>asTx("readonly",s=>s.get(id)),asPut=(id,v)=>asTx("readwrite",s=>s.put(v,id));
function asAll(){return asTx("readonly",s=>s.getAllKeys())}
const asRepoUrl=(c,id)=>`https://api.github.com/repos/${c.repo}/contents/img/${id}`;
async function asUpload(id,blob){const c=typeof ghCfg==="function"?ghCfg():null;if(!c)return "notoken";
  const content=await new Promise((ok,no)=>{const f=new FileReader();f.onload=()=>ok(String(f.result).split(",")[1]);f.onerror=()=>no(f.error);f.readAsDataURL(blob)});
  try{const r=await fetch(asRepoUrl(c,id),{method:"PUT",headers:{Authorization:"Bearer "+c.t,Accept:"application/vnd.github+json"},body:JSON.stringify({message:"note image "+id,content})});return r.ok||r.status===422?"ok":"err"}catch(e){return "err"}}
async function asUrl(id){if(AS.url[id])return AS.url[id];
  let v=null;try{v=await asGet(id)}catch(e){}
  if(!v){const c=ghCfg();if(!c)return null;try{const r=await fetch(asRepoUrl(c,id),{headers:{Authorization:"Bearer "+c.t,Accept:"application/vnd.github.raw+json"}});if(!r.ok)return null;const blob=await r.blob();v={blob,pending:false};try{await asPut(id,v)}catch(e){}}catch(e){return null}}
  return AS.url[id]=URL.createObjectURL(v.blob)}
async function asPending(id){try{const v=await asGet(id);return !!(v&&v.pending)}catch(e){return false}}
const FIGST={notoken:"📍 只喺呢部機（設定 token 後自動上載）",err:"⚠️ 未上載，同步時會再試"};
function figStatus(fig,st){let b=fig.querySelector(".figst");if(!FIGST[st]){if(b)b.remove();return}if(!b){b=document.createElement("div");b.className="figst";fig.appendChild(b)}b.textContent=FIGST[st]}
async function hydrate(root){for(const img of root.querySelectorAll("img[data-asset]")){const id=img.dataset.asset,fig=img.closest("figure"),u=await asUrl(id);
    if(u){img.src=u;fig.classList.remove("missing");if(await asPending(id))figStatus(fig,ghCfg()?"err":"notoken")}else fig.classList.add("missing")}}
async function asFlush(){if(!ghCfg())return;let keys=[];try{keys=await asAll()}catch(e){return}
  for(const id of keys){const v=await asGet(id);if(!v||!v.pending)continue;if(await asUpload(id,v.blob)==="ok"){v.pending=false;await asPut(id,v);document.querySelectorAll(`img[data-asset="${id}"]`).forEach(i=>figStatus(i.closest("figure"),"ok"))}}}
async function shrink(file){const url=URL.createObjectURL(file);try{const img=await new Promise((ok,no)=>{const i=new Image();i.onload=()=>ok(i);i.onerror=no;i.src=url});
    const k=Math.min(1,1600/Math.max(img.naturalWidth,img.naturalHeight)),c=document.createElement("canvas");c.width=Math.round(img.naturalWidth*k);c.height=Math.round(img.naturalHeight*k);
    const x=c.getContext("2d");x.fillStyle="#fff";x.fillRect(0,0,c.width,c.height);x.drawImage(img,0,0,c.width,c.height);
    return await new Promise(ok=>c.toBlob(ok,"image/jpeg",.85))}finally{URL.revokeObjectURL(url)}}
/* ---------- Selection 工具 ---------- */
const NSEL=()=>getSelection();
function edOf(n){const e=n&&(n.nodeType===1?n:n.parentElement);return e&&e.closest&&e.closest(".ned")}
function curEd(){const s=NSEL();return s.rangeCount?edOf(s.anchorNode):null}
function blockOf(){const s=NSEL();if(!s.rangeCount)return null;let n=s.anchorNode;const ed=edOf(n);if(!ed||n===ed)return null;while(n&&n.parentNode!==ed)n=n.parentNode;return n}
function lineOf(){const s=NSEL();if(!s.rangeCount)return null;const e=s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement,ed=edOf(e);if(!ed)return null;const l=e.closest("li,td,th,p,h2,h3,h4,blockquote,div");return l&&ed.contains(l)&&l!==ed?l:null}
function caretIn(el,end){const r=document.createRange();r.selectNodeContents(el);r.collapse(!end);const s=NSEL();s.removeAllRanges();s.addRange(r)}
const blankP=()=>{const p=document.createElement("p");p.innerHTML="<br>";return p};
function caretEdge(block,atEnd){const s=NSEL();if(!s.rangeCount||!s.isCollapsed)return false;const r=s.getRangeAt(0).cloneRange();r.selectNodeContents(block);atEnd?r.setStart(s.anchorNode,s.anchorOffset):r.setEnd(s.anchorNode,s.anchorOffset);return !r.toString().replace(/​/g,"")&&!r.cloneContents().querySelector("img,.mth")}
function tailP(ed){const l=ed.lastElementChild;if(!l||!/^(P|DIV)$/.test(l.tagName)||l.classList.contains("tblw"))ed.appendChild(blankP())}
function insertBlock(el,ed,at){ed=ed||curEd()||NE.ed||NE.art.querySelector(".ned");at=at!==undefined?at:blockOf();
  if(at&&at.parentNode===ed){if(/^(P|DIV)$/.test(at.tagName)&&!at.textContent.trim()&&!at.querySelector("img,.mth,table"))at.replaceWith(el);else at.after(el)}else ed.appendChild(el);
  tailP(ed);return el}
/* ---------- 指令 ---------- */
function fmt(tag){const b=blockOf(),cur=b&&b.tagName.toLowerCase();document.execCommand("formatBlock",false,"<"+(cur===tag?"p":tag)+">");neDirty()}
function neLink(){const s=NSEL(),a=s.anchorNode&&(s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement).closest("a");const u=prompt("連結 URL",a?a.href:"https://");if(u===null)return;if(a&&!u){a.replaceWith(...a.childNodes)}else if(/^https?:/.test(u)){if(s.isCollapsed&&!a)document.execCommand("insertHTML",false,`<a href="${esc(u)}">${esc(u)}</a>`);else document.execCommand("createLink",false,u)}neDirty()}
function neMath(chip){const old=chip?chip.dataset.tex:"";const s=NSEL(),rng=s.rangeCount?s.getRangeAt(0).cloneRange():null;
  const v=prompt("公式（LaTeX，例如 \\frac{1}{2} \\rho V^2 S C_L）",old);if(v===null)return;const h=v.trim()?inl("$"+v.trim().replace(/\$/g,"")+"$"):"";
  if(chip){if(h)chip.outerHTML=h;else chip.remove()}else if(h){if(rng){s.removeAllRanges();s.addRange(rng)}document.execCommand("insertHTML",false,h+"&nbsp;")}neDirty()}
function neTable(){const c=(t,n)=>`<${t}><br></${t}>`.repeat(n),w=document.createElement("div");w.className="tblw";w.innerHTML=`<table><tr>${c("th",2)}</tr><tr>${c("td",2)}</tr><tr>${c("td",2)}</tr></table>`;insertBlock(w);caretIn(w.querySelector("th"));neDirty()}
function neHr(){const hr=document.createElement("hr"),at=blockOf();const ed=curEd();insertBlock(hr,ed,at);const n=hr.nextElementSibling;if(n)caretIn(n);neDirty()}
function nePick(){NE.blk=blockOf();NE.ed=curEd()||NE.ed||NE.art.querySelector(".ned");const i=document.createElement("input");i.type="file";i.accept="image/*";i.multiple=true;i.hidden=true;document.body.appendChild(i);i.onchange=()=>{neFiles([...i.files],NE.ed,NE.blk);i.remove()};i.click()}
const NCMD={h1:()=>fmt("h2"),h2:()=>fmt("h3"),h3:()=>fmt("h4"),p:()=>{document.execCommand("formatBlock",false,"<p>");neDirty()},
  ul:()=>{document.execCommand("insertUnorderedList");neDirty()},ol:()=>{document.execCommand("insertOrderedList");neDirty()},q:()=>fmt("blockquote"),
  b:()=>{document.execCommand("bold");neDirty()},i:()=>{document.execCommand("italic");neDirty()},link:neLink,math:()=>neMath(),tbl:neTable,hr:neHr,img:nePick};
const NMENU=[["h1","大標題","h1 heading title 標題"],["h2","中標題","h2 heading 標題"],["h3","小標題","h3 heading 標題"],["p","文字","text p 內文"],["ul","• 清單","list bullet ul"],["ol","1. 編號清單","list number ol"],["q","❝ 引用","quote"],["tbl","▦ 表格","table"],["img","🖼 相片","image photo picture img 圖"],["hr","— 分隔線","divider hr line"],["math","∑ 公式","math formula equation latex"]];
async function neFiles(files,ed,at){files=files.filter(f=>/^image\//.test(f.type));for(const f of files){let blob=null;neMsg("處理相片…");
    try{blob=await shrink(f)}catch(e){}
    if(!blob){neMsg("⚠️ 呢個格式開唔到："+f.name);continue}
    const id=uid()+".jpg";AS.url[id]=URL.createObjectURL(blob);try{await asPut(id,{blob,pending:true})}catch(e){}
    const w=document.createElement("div");w.innerHTML=figHTML("","asset:"+id);const fig=w.firstChild;insertBlock(fig,ed,at);at=fig;neDecorate(ed);fig.querySelector("img").src=AS.url[id];neDirty();
    const st=await asUpload(id,blob);figStatus(fig,st);if(st==="ok"){try{await asPut(id,{blob,pending:false})}catch(e){}}}}
/* ---------- 儲存 ---------- */
function neMsg(t){const e=document.querySelector("#nesave");if(e)e.textContent=t}
function neRead(){const a=NE.art,rec=[],rl=[];a.querySelectorAll(".recl li").forEach(li=>{const x=inlMd(li.querySelector(".rt")).replace(/\s*\n\s*/g," ").trim();if(x){rec.push(x);rl.push(li.dataset.rl||null)}});
  return {t:a.querySelector("[data-f=t]").textContent.trim(),rec,rl,notes:blocksMd(a.querySelector("[data-f=notes]")),sum:blocksMd(a.querySelector("[data-f=sum]"))}}
function neLocal(){try{localStorage.setItem("cadetV2",JSON.stringify(V2));return true}catch(e){return false}}
function neSave(){clearTimeout(NE.t1);NE.t1=0;if(!NE.id||!NE.art||!NE.art.isConnected)return;const s=neRead(),j=JSON.stringify(s);if(j===NE.base){neMsg(NE.msg||"");return}
  const r=ND().find(x=>x.id===NE.id);if(!r)return;if(!s.rl.some(Boolean)&&!r._o.rl)delete s.rl;
  NE.base=j;V2.edits.notes[NE.id]=Object.assign({},s,{t:s.t||r._o.t,tm:Date.now()});
  Object.assign(r,{t:s.t||r._o.t,rec:s.rec,rl:s.rl||r._o.rl,notes:s.notes,sum:s.sum,_ed:1});
  const ok=neLocal();NE.msg=ok?"✓ 已自動儲存":"⚠️ 瀏覽器儲存空間滿咗，存唔到";neMsg(NE.msg);
  NE.art.querySelectorAll(".edtag,[data-nereset]").forEach(x=>x.hidden=false);
  clearTimeout(NE.t2);NE.t2=setTimeout(()=>{if(typeof scheduleSync==="function")scheduleSync()},10000)}
function neDirty(){neMsg("儲存緊…");clearTimeout(NE.t1);NE.t1=setTimeout(neSave,700);const e=curEd();if(e)neEmpty(e)}
const neEmpty=ed=>ed.classList.toggle("isnull",!ed.textContent.trim()&&!ed.querySelector("figure,hr,table,li"));
function neDecorate(ed){ed.querySelectorAll("figure").forEach(f=>{const c=f.querySelector("figcaption");if(c){c.contentEditable="true";c.dataset.ph="加圖說…"}
    if(!f.querySelector(".figt")){const t=document.createElement("div");t.className="figt";t.contentEditable="false";t.innerHTML=`<button data-a="33">細</button><button data-a="60">中</button><button data-a="0">大</button><button data-a="up">↑</button><button data-a="dn">↓</button><button data-a="del">🗑</button>`;f.appendChild(t)}})}
function neUndel(fig,next,ed){neMsg("");const e=document.querySelector("#nesave");if(!e)return;e.innerHTML=`已刪相片 <button class="rlink" id="neundo">復原</button>`;e.querySelector("#neundo").onclick=()=>{next&&next.isConnected?next.before(fig):ed.appendChild(fig);neDirty()}}
/* ---------- 「/」選單 ---------- */
const NSL={el:null,items:[],i:0};
function slashClose(){if(NSL.el)NSL.el.remove();NSL.el=null}
function slashDraw(){NSL.el.innerHTML=NSL.items.map((x,j)=>`<button class="${j===NSL.i?"on":""}" data-j="${j}">${x[1]}</button>`).join("")}
function slashRun(j){const it=NSL.items[j],l=lineOf();slashClose();if(!it)return;if(l&&!l.matches("td,th")){l.innerHTML="<br>";caretIn(l)}else if(l){const r=NSEL().getRangeAt(0);r.selectNodeContents(l);r.deleteContents()}NCMD[it[0]]()}
function slashCheck(){const l=lineOf(),m=l&&l.textContent.replace(/ /g," ").match(/^\/(\S*)$/);if(!m){slashClose();return}
  const q=m[1].toLowerCase();NSL.items=NMENU.filter(x=>!q||(x[0]+" "+x[1]+" "+x[2]).toLowerCase().includes(q));if(!NSL.items.length){slashClose();return}NSL.i=0;
  if(!NSL.el){NSL.el=document.createElement("div");NSL.el.className="neslash";NSL.el.onmousedown=e=>{e.preventDefault();const b=e.target.closest("[data-j]");if(b)slashRun(+b.dataset.j)};document.body.appendChild(NSL.el)}
  slashDraw();const r=NSEL().getRangeAt(0).getClientRects()[0]||l.getBoundingClientRect();NSL.el.style.left=Math.min(r.left,innerWidth-230)+"px";const h=NSL.el.offsetHeight;NSL.el.style.top=(r.bottom+h+8>innerHeight?Math.max(8,r.top-h-6):r.bottom+6)+"px"}
/* ---------- 編輯器事件 ---------- */
function tblMove(cell,dir){const t=cell.closest("table"),C=[...t.querySelectorAll("th,td")],n=C[C.indexOf(cell)+dir];if(n)caretIn(n,true);else if(dir>0){tblRow(cell);caretIn(t.rows[t.rows.length-1].cells[0])}}
function tblRow(cell,del){const tr=cell.parentNode,t=tr.closest("table");if(del){if(t.rows.length>1)tr.remove();else t.closest(".tblw").remove()}else{const n=document.createElement("tr");[...tr.cells].forEach(()=>{const d=document.createElement("td");d.innerHTML="<br>";n.appendChild(d)});tr.after(n)}neDirty()}
function tblCol(cell,del){const t=cell.closest("table"),i=cell.cellIndex;[...t.rows].forEach((r,j)=>{if(del){r.cells[i]&&r.cells[i].remove()}else{const d=document.createElement(j?"td":"th");d.innerHTML="<br>";r.cells[i].after(d)}});if(del&&!t.rows[0].cells.length)t.closest(".tblw").remove();neDirty()}
function neKey(e,ed){if(e.isComposing)return;const tg=e.target;if(tg.closest&&tg.closest("figcaption")){if(e.key==="Enter")e.preventDefault();return}
  if(NSL.el){if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();NSL.i=(NSL.i+(e.key==="ArrowDown"?1:-1)+NSL.items.length)%NSL.items.length;slashDraw();return}
    if(e.key==="Enter"||e.key==="Tab"){e.preventDefault();slashRun(NSL.i);return}if(e.key==="Escape"){e.preventDefault();slashClose();return}}
  const s=NSEL();if(!s.rangeCount)return;const an=s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement,cell=an.closest("td,th"),li=an.closest("li"),b=blockOf();
  if(e.key==="Tab"){e.preventDefault();if(cell)tblMove(cell,e.shiftKey?-1:1);else if(li){document.execCommand(e.shiftKey?"outdent":"indent");neDirty()}return}
  if(e.key==="Enter"&&!e.shiftKey){
    if(cell){e.preventDefault();const r=cell.parentNode,t=r.closest("table"),n=t.rows[r.rowIndex+1];if(n)caretIn(n.cells[cell.cellIndex],true);else{tblRow(cell);caretIn(t.rows[t.rows.length-1].cells[cell.cellIndex])}return}
    if(b&&/^-{3,}$/.test(b.textContent.trim())&&/^(P|DIV)$/.test(b.tagName)){e.preventDefault();b.innerHTML="<br>";caretIn(b);neHr();return}
    if(b&&b.tagName==="BLOCKQUOTE"&&caretEdge(b,true)){e.preventDefault();const p=blankP();b.after(p);caretIn(p);neDirty();return}}
  if(e.key==="Backspace"&&b&&/^(H[2-4]|BLOCKQUOTE)$/.test(b.tagName)&&caretEdge(b,false)){e.preventDefault();document.execCommand("formatBlock",false,"<p>");neDirty()}}
function neShortcut(e){if(e.inputType!=="insertText"||e.data!==" ")return;const b=blockOf();if(!b||!/^(P|DIV)$/.test(b.tagName)||b.classList.contains("tblw"))return;const m=b.textContent.replace(/ /g," ").match(/^(#{1,3}|-|\*|1\.|>) $/);if(!m)return;
  b.innerHTML="<br>";caretIn(b);({"#":"h1","##":"h2","###":"h3","-":"ul","*":"ul","1.":"ol",">":"q"})[m[1]]&&NCMD[({"#":"h1","##":"h2","###":"h3","-":"ul","*":"ul","1.":"ol",">":"q"})[m[1]]]()}
function nePaste(e,ed){const cd=e.clipboardData;if(!cd)return;const files=[...(cd.files||[])],t=cd.getData("text/plain"),h=cd.getData("text/html");e.preventDefault();
  if(files.length&&!t.trim()){neFiles(files,ed,blockOf());return}
  const plain=e.target.closest&&(e.target.closest("figcaption")||NSEL().anchorNode&&(NSEL().anchorNode.nodeType===1?NSEL().anchorNode:NSEL().anchorNode.parentElement).closest("td,th"));
  if(plain){document.execCommand("insertText",false,t.replace(/\s*\n\s*/g," "));return}
  let md=t;if(h){const d=new DOMParser().parseFromString(h,"text/html");d.querySelectorAll("script,style,meta,link,title").forEach(x=>x.remove());md=blocksMd(d.body)||t}
  const L=md.trim().split(/\n+/);
  if(L.length===1&&!/^(#{1,3} |- |\d+\. |> |\||```|!\[)/.test(L[0]))document.execCommand("insertHTML",false,inl(L[0]));else document.execCommand("insertHTML",false,md2html(md));
  neDecorate(ed);neDirty()}
function neBindEd(ed){ed.contentEditable="true";ed.classList.add("on");neDecorate(ed);tailP(ed);neEmpty(ed);
  ed.addEventListener("focusin",()=>{NE.ed=ed});
  ed.addEventListener("input",e=>{neShortcut(e);slashCheck();neDirty()});
  ed.addEventListener("keydown",e=>neKey(e,ed));ed.addEventListener("paste",e=>nePaste(e,ed));
  ed.addEventListener("blur",()=>setTimeout(slashClose,100));
  ed.addEventListener("dragover",e=>{if([...e.dataTransfer.types].includes("Files")){e.preventDefault();ed.classList.add("drop")}});
  ed.addEventListener("dragleave",()=>ed.classList.remove("drop"));
  ed.addEventListener("drop",e=>{ed.classList.remove("drop");const f=[...e.dataTransfer.files];if(!f.length)return;e.preventDefault();let r=document.caretRangeFromPoint?document.caretRangeFromPoint(e.clientX,e.clientY):null;if(r){const s=NSEL();s.removeAllRanges();s.addRange(r)}neFiles(f,ed,blockOf())});
  ed.addEventListener("click",e=>{const b=e.target.closest(".figt button");if(b){e.preventDefault();const fig=b.closest("figure"),a=b.dataset.a;
      if(a==="del"){const n=fig.nextElementSibling;fig.remove();tailP(ed);neSave();neUndel(fig,n,ed)}
      else if(a==="up"){const p=fig.previousElementSibling;if(p){p.before(fig);neDirty()}}else if(a==="dn"){const n=fig.nextElementSibling;if(n){n.after(fig);tailP(ed);neDirty()}}
      else{const base=fig.dataset.src.split("#")[0];fig.dataset.src=base+(a==="0"?"":"#"+a);if(a==="0")delete fig.dataset.w;else fig.dataset.w=a;neDirty()}return}
    const m=e.target.closest(".mth");if(m){neMath(m);return}
    const l=e.target.closest("a");if(l&&(e.metaKey||e.ctrlKey))window.open(l.href,"_blank","noopener")})}
function neBindRecall(li){const rt=li.querySelector(".rt");rt.contentEditable="true";rt.addEventListener("input",neDirty);
  rt.addEventListener("paste",e=>{e.preventDefault();document.execCommand("insertText",false,(e.clipboardData.getData("text/plain")||"").replace(/\s*\n\s*/g," "))});
  rt.addEventListener("keydown",e=>{if(e.isComposing)return;
    if(e.key==="Enter"){e.preventDefault();const n=document.createElement("li"),s=NSEL();n.innerHTML='<span class="rt"></span>';if(s.rangeCount){const r=s.getRangeAt(0).cloneRange();r.setEnd(rt,rt.childNodes.length);n.firstChild.appendChild(r.extractContents())}li.after(n);neBindRecall(n);caretIn(n.firstChild);neDirty()}
    else if(e.key==="Backspace"&&!rt.textContent&&li.parentNode.children.length>1){e.preventDefault();const p=li.previousElementSibling||li.nextElementSibling;li.remove();caretIn(p.querySelector(".rt"),true);neDirty()}})}
function neToolbar(art){const b=document.createElement("div");b.className="netb";const B=(c,t,h)=>`<button data-c="${c}" title="${h||""}">${t}</button>`;
  b.innerHTML=B("p","文字")+B("h1","H1","大標題")+B("h2","H2","中標題")+B("h3","H3","小標題")+`<i></i>`+B("b","<b>B</b>","粗體 ⌘B")+B("i","<i>I</i>","斜體 ⌘I")+B("link","🔗","連結")+B("math","∑","公式")+`<i></i>`+B("ul","•","清單")+B("ol","1.","編號清單")+B("q","❝","引用")+B("tbl","▦","表格")+B("hr","—","分隔線")+B("img","🖼 相片","插入相片（亦可以貼上或者拖入）")+`<span class="tbt" hidden><i></i>${B("r+","＋列")}${B("c+","＋欄")}${B("r-","－列")}${B("c-","－欄")}</span><span class="nehint small">打 / 開選單 · 貼上／拖入相片</span>`;
  b.onmousedown=e=>{if(e.target.closest("button"))e.preventDefault()};
  b.onclick=e=>{const x=e.target.closest("[data-c]");if(!x)return;const c=x.dataset.c;
    if(c==="img"){nePick();return}
    if(/^[rc][+-]$/.test(c)){const s=NSEL(),n=s.anchorNode&&(s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement).closest("td,th");if(n)(c[0]==="r"?tblRow:tblCol)(n,c[1]==="-");return}
    if(!curEd()&&!/^(b|i)$/.test(c)){const ed=NE.ed||art.querySelector(".ned");caretIn(ed,true)}NCMD[c]()};
  art.querySelector(".acts").after(b)}
document.addEventListener("selectionchange",()=>{const t=document.querySelector(".netb .tbt");if(!t)return;const s=NSEL(),n=s.anchorNode&&(s.anchorNode.nodeType===1?s.anchorNode:s.anchorNode.parentElement);t.hidden=!(n&&n.closest("td,th")&&edOf(n))});
function neAttach(){NE.id=null;NE.art=null;NE.msg="";const a=document.querySelector("#v-notes article[data-nid]");if(!a)return;hydrate(a);if(!NE.on)return;
  a.classList.add("editing");NE.art=a;NE.id=a.dataset.nid;NE.ed=a.querySelector("[data-f=notes]");neToolbar(a);
  try{document.execCommand("defaultParagraphSeparator",false,"p")}catch(e){}
  const t=a.querySelector("[data-f=t]");try{t.contentEditable="plaintext-only"}catch(e){t.contentEditable="true"}
  t.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();t.blur()}});t.addEventListener("input",neDirty);
  const ol=a.querySelector(".recl");if(!ol.children.length)ol.innerHTML='<li><span class="rt"></span></li>';ol.querySelectorAll("li").forEach(neBindRecall);
  a.querySelectorAll(".ned").forEach(neBindEd);NE.base=JSON.stringify(neRead())}
const _rnEd=renderNotes;
renderNotes=function(){neSave();slashClose();_rnEd();neAttach()};
document.addEventListener("click",e=>{
  if(e.target.closest("[data-netoggle]")){neSave();NE.on=!NE.on;renderNotes();return}
  if(e.target.closest("[data-nereset]")){const id=document.querySelector("#v-notes article[data-nid]").dataset.nid;if(!confirm("還原返原稿？你喺呢篇筆記嘅修改（包括相片位置）會冇晒。"))return;NE.id=null;V2.edits.notes[id]={x:1,tm:Date.now()};v2save();applyEdits();renderNotes()}});
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")neSave()});
window.addEventListener("pagehide",neSave);window.addEventListener("online",asFlush);
const _syncNow=syncNow;syncNow=async function(...a){const r=await _syncNow(...a);asFlush();return r};
