/* Cadet Learn：Duolingo 式微課。課程資料喺 courses/*.js：Cadet.course({key,name,emoji,color,units:[{id,title,desc,lessons:[{id,title,icon,topic,steps:[...]}]}]}) */
const LV={courses:[],st:{xp:0,done:{},streak:{d:"",n:0}},run:null};
Cadet.course=function(c){LV.courses.push(c)};
try{Object.assign(LV.st,JSON.parse(localStorage.getItem("cadetLearn")||"{}"))}catch(e){}
function lsave(){try{localStorage.setItem("cadetLearn",JSON.stringify(LV.st))}catch(e){}}
const lq=s=>document.querySelector(s);
function lesc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function shuf(a){return a.map(x=>[Math.random(),x]).sort((p,q)=>p[0]-q[0]).map(x=>x[1])}
function learnedTopics(){const S=new Set();LV.courses.forEach(c=>c.units.forEach(u=>u.lessons.forEach(l=>{if(LV.st.done[l.id]&&!l.quiz&&!l.scenario)(l.topics||(l.topic?[l.topic]:[])).forEach(t=>S.add(t))})));Object.keys(V2.noted||{}).forEach(t=>S.add(t));return S}
function allLessons(){const o=[];LV.courses.forEach(c=>c.units.forEach(u=>u.lessons.forEach(l=>o.push({c,u,l}))));return o}
/* ---------- 路徑頁 ---------- */
function chapOfLesson(l){const t=l.topic||(l.topics||[])[0],f=t&&Cadet.topic(t);return f?{k:f.s.key,g:f.t.g||"Topics"}:null}
function buildPath(){ // Level → 科目 → chapter：每個 chapter 第一關係 Note，之後先係課堂
  const bych=new Map(),L=allLessons();let prev=null;
  L.forEach(x=>{let c=chapOfLesson(x.l);if(!c)c=prev;else prev=c;if(!c)return;const key=c.k+"|"+c.g;(bych.get(key)||bych.set(key,[]).get(key)).push(x)});
  const nodes=[];
  (Cadet.LEVELS||[{n:1,name:"Level 1",zh:""}]).forEach(lv=>{let head=false;
    Cadet.order.forEach(k=>{let sh=false;
      Cadet.groupsOf(k).filter(g=>Cadet.levelOf(k,g)===lv.n).forEach(g=>{
        const note=(Cadet.lnotes||[]).find(n=>n.k===k&&n.g===g),ls=bych.get(k+"|"+g)||[];if(!note&&!ls.length)return;
        if(!head){nodes.push({h:"lv",lv});head=true}if(!sh){nodes.push({h:"sub",k});sh=true}
        nodes.push({h:"ch",k,g,hasNote:!!note,n:ls.length});
        if(note)nodes.push({note,k,g});
        ls.forEach(x=>nodes.push({x,k,g}))})})});
  return nodes}
function renderLearn(){
  const box=lq("#v-learn");if(!box)return;const N=buildPath(),real=N.filter(n=>!n.h);
  const isDone=n=>n.note?!!V2.noted["n:"+n.note.id]:!!LV.st.done[n.x.l.id];
  const curIdx=real.findIndex(n=>!isDone(n));
  let h=`<div class="lstat"><div class="chip2">⭐ ${LV.st.xp} XP</div><div class="chip2">🔥 ${LV.st.streak.n} 日</div><div class="chip2">✅ ${real.filter(isDone).length} / ${real.length} 關</div></div><div class="small" style="margin:6px 2px">每個 chapter 第一關係 📖 Note，睇完先解鎖溫習課堂；睇過嘅 note 會收入 Notes 頁。</div>`;
  if(!real.length)h+='<div class="empty">未有課程</div>';
  let gi=0,ci=0;
  N.forEach(n=>{
    if(n.h==="lv"){h+=`<div class="unit" style="background:#3a3a36"><h3>${lesc(n.lv.name)} · ${lesc(n.lv.zh)}</h3></div>`;return}
    if(n.h==="sub"){const S=Cadet.subjects[n.k];h+=`<div class="small" style="margin-top:12px">${S.emoji} ${lesc(S.name)}</div>`;return}
    if(n.h==="ch"){ci=0;const S=Cadet.subjects[n.k];h+=`${gi?"</div>":""}<div class="unit" style="background:${S.color}"><h3>${lesc(n.g)}</h3><div class="small">${n.hasNote?"📖 Note → ":""}${n.n} 課${n.n?"":"（課堂未有，先睇 Note）"}</div></div><div class="path">`;gi=gi||1;return}
    const idx=real.indexOf(n),done=isDone(n),cur=idx===curIdx,lock=!done&&!cur&&idx>curIdx,S=Cadet.subjects[n.k],i=ci++,off=Math.round(Math.sin(i*1.1)*58);
    const icon=n.note?"📖":(n.x.l.icon||"⭐"),title=n.note?"Note · "+n.note.t:n.x.l.title,att=n.note?`data-note="${n.note.id}"`:`data-lesson="${n.x.l.id}"`;
    const stars=!n.note&&done?`<span class="st">${"⭐".repeat(LV.st.done[n.x.l.id])}</span>`:"";
    h+=`<div style="transform:translateX(${off}px);text-align:center"><button class="lnode ${done?"done":""} ${cur?"cur":""} ${lock?"lock":""}" ${lock?"disabled":""} style="${done||cur?`background:${S.color}`:""}" ${att}>${lock?"🔒":done?(n.note?"✅":icon):icon}${stars}</button><div class="lname">${lesc(title)}</div></div>`});
  box.innerHTML=h+(gi?"</div>":"")}
document.addEventListener("click",e=>{const b=e.target.closest("[data-note]");if(b&&!b.disabled){fromPath=true;nLesson=b.dataset.note;show("notes")}});
let fromPath=false;
document.addEventListener("click",e=>{const b=e.target.closest("[data-lesson]");if(b&&!b.disabled)startLesson(b.dataset.lesson)});
/* ---------- 課堂 ---------- */
function startLesson(id){
  const f=allLessons().find(x=>x.l.id===id);if(!f)return;
  LV.run={c:f.c,u:f.u,l:f.l,queue:f.l.steps.map(s=>({s,retry:false})),total:f.l.steps.length,done:0,hearts:f.l.quiz?99:5,mistakes:0,score:0,graded:f.l.steps.filter(x=>["mcq","tf","fill","order","match","scenario"].includes(x.t)).length,step:null,state:{}};
  lq("#lesson").classList.add("on");document.body.style.overflow="hidden";nextStep()}
function closeLesson(){lq("#lesson").classList.remove("on");document.body.style.overflow="";lq("#lbody").innerHTML="";LV.run=null;renderLearn()}
function nextStep(){
  const r=LV.run;if(!r)return;
  lq("#lbar").style.width=Math.round(r.done/r.total*100)+"%";lq("#hearts").textContent=r.l.quiz?"🏆 Quiz":"❤️ "+r.hearts;
  if(r.hearts<=0)return failScreen();
  const it=r.queue.shift();if(!it)return doneScreen();
  r.step=it;r.state={};const s=it.s,b=lq("#lbody"),ft=lq("#lfoot"),go=lq("#lgo"),fb=lq("#lfb");
  ft.classList.remove("bad");fb.className="fb";fb.innerHTML="";go.disabled=false;go.textContent="Continue";go.onclick=()=>finish(true);
  const retry=it.retry?'<div class="recall">🔁 Try again — you missed this one</div>':"";
  const T={teach,mcq,tf,fill,order,match,play,scenario};(T[s.t]||teach)(s,b,go,retry);numberize()}
function numberize(){ // 俾每個選項／詞庫加數字，配合鍵盤 1–9
  const b=lq("#lbody");let n=0;b.querySelectorAll(".opt").forEach(o=>o.dataset.n=++n);
  n=0;b.querySelectorAll(".bank .tile").forEach(o=>o.dataset.n=++n);
  const L=b.querySelectorAll("[data-l]"),R=b.querySelectorAll("[data-r]");L.forEach((o,i)=>o.dataset.n=i+1);R.forEach((o,i)=>o.dataset.n=i+1)}
function finish(ok){const r=LV.run;r.done++;nextStep()}
function check(ok,s,right,extra){ // 俾互動題用
  const r=LV.run,fb=lq("#lfb"),ft=lq("#lfoot"),go=lq("#lgo"),quiz=r.l.quiz;
  if(ok){r.score++;fb.className="fb ok";fb.innerHTML="✅ Correct!"+(extra?" "+extra:"")+(s.why?" "+s.why:"")}
  else{ft.classList.add("bad");fb.className="fb no";fb.innerHTML="❌ "+(right?"Answer: <b>"+right+"</b>. ":"")+(extra?extra+" ":"")+(s.why||"");r.mistakes++;
    if(!quiz){r.hearts--;lq("#hearts").textContent="❤️ "+r.hearts;r.queue.push({s,retry:true})}}
  go.disabled=false;go.textContent="Continue";go.onclick=()=>{(ok||quiz)?finish(true):nextStep()}}
function teach(s,b,go,retry){
  b.innerHTML=`${retry}<h2>${s.title||""}</h2><div class="say">${s.say||""}</div>`+((s.terms||[]).length?'<div>'+s.terms.map(t=>`<span class="term">${lesc(t[0])}${t[1]?" · "+lesc(t[1]):""}</span>`).join("")+'</div>':"")+(s.viz?'<div class="vbox"><div class="abox" id="vz"></div></div>':"")+(s.tip?`<div class="recall">💡 ${s.tip}</div>`:"");
  if(s.viz)mountViz(s.viz,lq("#vz"));lq("#lbody").scrollTop=0}
function mountViz(v,box){
  if(typeof v==="function"){v(box,hFor(box));return}
  const S=Cadet.subjects[v.k],a=S&&(S.anims||[]).find(x=>x.title.indexOf(v.t)>=0);
  if(a)try{a.build(box,hFor(box))}catch(e){box.innerHTML='<div class="empty">動畫載入失敗</div>'}else box.innerHTML='<div class="empty">搵唔到動畫</div>'}
function play(s,b,go){teach({title:s.title||"Try it",say:s.say||s.goal,viz:s.viz,tip:s.tip},b,go,"");go.textContent="Done — continue"}
function optBtns(opts,pick){return opts.map((o,i)=>`<button class="opt" data-i="${i}">${o}</button>`).join("")}
function mcq(s,b,go,retry){
  const order=shuf(s.opts.map((o,i)=>i));
  b.innerHTML=`${retry}<h2>${s.q}</h2>`+order.map(i=>`<button class="opt" data-i="${i}">${s.opts[i]}</button>`).join("");
  go.disabled=true;go.textContent="Check";let sel=null;
  b.querySelectorAll(".opt").forEach(o=>o.onclick=()=>{b.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));o.classList.add("sel");sel=+o.dataset.i;go.disabled=false});
  go.onclick=()=>{const ok=sel===s.a;b.querySelectorAll(".opt").forEach(o=>{o.disabled=true;const i=+o.dataset.i;if(i===s.a)o.classList.add("right");else if(i===sel)o.classList.add("wrong")});check(ok,s,s.opts[s.a])}}
function scenario(s,b,go,retry){
  const order=shuf(s.opts.map((o,i)=>i));
  b.innerHTML=`${retry}<div class="scene-card"><div class="scene-tag">✈️ Real-life scenario</div><div class="say">${s.sit}</div></div><h2>${s.q}</h2>`+order.map(i=>`<button class="opt" data-i="${i}">${s.opts[i]}</button>`).join("");
  go.disabled=true;go.textContent="Check";let sel=null;
  b.querySelectorAll(".opt").forEach(o=>o.onclick=()=>{b.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));o.classList.add("sel");sel=+o.dataset.i;go.disabled=false});
  go.onclick=()=>{const ok=sel===s.a;b.querySelectorAll(".opt").forEach(o=>{o.disabled=true;const i=+o.dataset.i;if(i===s.a)o.classList.add("right");else if(i===sel)o.classList.add("wrong")});
    check(ok,{why:s.why},s.opts[s.a],s.fb&&s.fb[sel]?"<br><i>What happens: "+s.fb[sel]+"</i><br>":"")}}
function tf(s,b,go,retry){
  b.innerHTML=`${retry}<h2>True or false?</h2><div class="say">${s.q}</div><button class="opt" data-v="1">✅ True</button><button class="opt" data-v="0">❌ False</button>`;
  go.disabled=true;go.textContent="Check";let sel=null;
  b.querySelectorAll(".opt").forEach(o=>o.onclick=()=>{b.querySelectorAll(".opt").forEach(x=>x.classList.remove("sel"));o.classList.add("sel");sel=o.dataset.v==="1";go.disabled=false});
  go.onclick=()=>{const ok=sel===s.a;b.querySelectorAll(".opt").forEach(o=>{o.disabled=true;if((o.dataset.v==="1")===s.a)o.classList.add("right");else if((o.dataset.v==="1")===sel)o.classList.add("wrong")});check(ok,s,s.a?"True":"False")}}
function fill(s,b,go,retry){ // s.text 用 ___ 做空格；s.bank 詞庫；s.a 答案陣列
  const parts=s.text.split("___"),n=parts.length-1,got=Array(n).fill(null);
  const words=shuf(s.bank.slice());
  function draw(){b.innerHTML=`${retry}<h2>Fill in the blanks</h2><div class="say">`+parts.map((p,i)=>p+(i<n?`<span class="blank" data-b="${i}">${got[i]!==null?lesc(words[got[i]]):"&nbsp;&nbsp;&nbsp;&nbsp;"}</span>`:"")).join("")+`</div><div class="bank">`+words.map((w,i)=>`<button class="tile ${got.includes(i)?"used":""}" data-w="${i}">${lesc(w)}</button>`).join("")+`</div>`;
    b.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{const k=got.indexOf(null);if(k>=0){got[k]=+t.dataset.w;draw()}});
    b.querySelectorAll(".blank").forEach(x=>x.onclick=()=>{got[+x.dataset.b]=null;draw()});go.disabled=got.includes(null);numberize()}
  go.textContent="Check";draw();
  go.onclick=()=>{const ans=got.map(i=>words[i]),ok=ans.every((w,i)=>w===s.a[i]);b.querySelectorAll(".tile,.blank").forEach(x=>x.onclick=null);check(ok,s,s.a.join(" / "))}}
function order(s,b,go,retry){
  const items=shuf(s.items.slice()),seq=[];
  function draw(){b.innerHTML=`${retry}<h2>${s.q||"Put these in the correct order"}</h2><ol class="seq">`+seq.map((x,i)=>`<li data-r="${i}">${lesc(x)}</li>`).join("")+`</ol><div class="bank">`+items.map(x=>`<button class="tile ${seq.includes(x)?"used":""}" data-x="${lesc(x)}">${lesc(x)}</button>`).join("")+`</div>`;
    b.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{seq.push(items.find(x=>x===t.dataset.x||lesc(x)===t.dataset.x));draw()});
    b.querySelectorAll(".seq li").forEach(li=>li.onclick=()=>{seq.splice(+li.dataset.r,1);draw()});go.disabled=seq.length<items.length;numberize()}
  go.textContent="Check";draw();
  go.onclick=()=>{const ok=seq.every((x,i)=>x===s.items[i]);b.querySelectorAll(".tile,.seq li").forEach(x=>x.onclick=null);check(ok,s,s.items.map((x,i)=>(i+1)+". "+x).join("　"))}}
function match(s,b,go,retry){
  const L=shuf(s.pairs.map((p,i)=>[p[0],i])),R=shuf(s.pairs.map((p,i)=>[p[1],i]));let sl=null,left=s.pairs.length,bad=0;
  b.innerHTML=`${retry}<h2>${s.q||"Match the pairs"}</h2><div class="pairs"><div>`+L.map(([t,i])=>`<button class="tile" data-l="${i}" style="width:100%;margin:5px 0">${t}</button>`).join("")+`</div><div>`+R.map(([t,i])=>`<button class="tile" data-r="${i}" style="width:100%;margin:5px 0">${t}</button>`).join("")+`</div></div>`;
  go.disabled=true;go.textContent="Check";
  b.querySelectorAll("[data-l]").forEach(x=>x.onclick=()=>{b.querySelectorAll("[data-l]").forEach(y=>y.classList.remove("sel"));x.classList.add("sel");sl=x.dataset.l});
  b.querySelectorAll("[data-r]").forEach(x=>x.onclick=()=>{if(sl===null)return;const lb=b.querySelector(`[data-l="${sl}"]`);
    if(s.pairs[+x.dataset.r][1]===s.pairs[+sl][1]){lb.classList.add("gone");x.classList.add("gone");left--;if(!left){go.disabled=false;go.onclick=()=>check(bad===0,s,"")}}
    else{bad++;x.animate([{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"none"}],{duration:200})}
    lb.classList.remove("sel");sl=null});
  if(s.why)go.dataset.why=s.why}
function doneScreen(){
  const r=LV.run,quiz=r.l.quiz,first=!LV.st.done[r.l.id];
  lq("#lbar").style.width="100%";const ft=lq("#lfoot");ft.classList.remove("bad");lq("#lfb").className="fb";
  const go=lq("#lgo");go.disabled=false;
  if(quiz){const pct=Math.round(r.score/r.graded*100),pass=pct>=70,stars=pct>=90?3:2;
    if(!pass){lq("#lbody").innerHTML=`<div class="done-screen"><div class="big">📝</div><h2>Score: ${r.score} / ${r.graded} (${pct}%)</h2><div class="say">You need 70% to pass. Review the lessons and try again.</div></div>`;go.textContent="Try again";go.onclick=()=>startLesson(r.l.id);return}
    LV.st.xp+=first?r.score*3:3;LV.st.done[r.l.id]=Math.max(LV.st.done[r.l.id]||0,stars);bumpStreak();lsave();
    lq("#lbody").innerHTML=`<div class="done-screen"><div class="big">${"⭐".repeat(stars)}</div><h2>Quiz passed: ${r.score} / ${r.graded} (${pct}%)</h2><div class="say">+${first?r.score*3:3} XP</div></div>`;go.textContent="Back to path";go.onclick=closeLesson;return}
  const xp=10+(r.mistakes===0?5:0),stars=r.mistakes===0?3:r.mistakes<=2?2:1;
  LV.st.xp+=first?xp:2;LV.st.done[r.l.id]=Math.max(LV.st.done[r.l.id]||0,stars);bumpStreak();lsave();
  const unlocked=!r.l.scenario&&r.l.topic?`<div class="recall">🃏 Flash cards for this lesson are now unlocked. They will come back based on how well you know them.</div>`:"";
  lq("#lbody").innerHTML=`<div class="done-screen"><div class="big">${"⭐".repeat(stars)}</div><h2>Lesson complete: ${lesc(r.l.title)}</h2><div class="say">+${first?xp:2} XP · ${r.mistakes} mistake${r.mistakes===1?"":"s"}</div>${unlocked}</div>`;
  go.textContent="Back to path";go.onclick=closeLesson}
function bumpStreak(){const d=new Date().toISOString().slice(0,10),y=new Date(Date.now()-864e5).toISOString().slice(0,10);if(LV.st.streak.d!==d){LV.st.streak.n=LV.st.streak.d===y?LV.st.streak.n+1:1;LV.st.streak.d=d}}
function failScreen(){
  lq("#lbody").innerHTML=`<div class="done-screen"><div class="big">💔</div><h2>Out of hearts</h2><div class="say">No problem — read the concept again and retry.</div></div>`;
  const go=lq("#lgo");go.disabled=false;go.textContent="Restart lesson";go.onclick=()=>startLesson(LV.run.l.id)}
window.addEventListener("load",()=>{const sec=document.createElement("div");sec.id="lesson";sec.innerHTML=`<div class="lhead"><button class="x" id="lx" aria-label="離開">✕</button><div class="lbar"><i id="lbar"></i></div><div class="hearts" id="hearts"></div></div><div class="lbody" id="lbody"></div><div class="lfoot" id="lfoot"><div class="fb" id="lfb"></div><button class="go" id="lgo">Continue</button><div class="kbdhint">1–9 select · Enter check / continue · Esc leave</div></div>`;document.body.appendChild(sec);lq("#lx").onclick=askLeave;document.addEventListener("keydown",e=>{if(e.key==="Escape"&&lq("#lesson").classList.contains("on"))askLeave()})});

function askLeave(){
  if(!LV.run||lq("#lgo").textContent==="Back to path"){closeLesson();return}
  if(lq("#leaveq")){lq("#leaveq").remove();return}
  const d=document.createElement("div");d.id="leaveq";d.className="leaveq";
  d.innerHTML='<div class="box"><b>Leave this lesson?</b><div class="small">Your progress in this lesson will not be saved.</div><button class="b g" id="lstay">Keep learning</button><button class="b" id="lleave" style="background:#ef4444;color:#fff">Leave</button></div>';
  lq("#lesson").appendChild(d);lq("#lstay").onclick=()=>d.remove();lq("#lleave").onclick=()=>{d.remove();closeLesson()}}

/* ---------- 鍵盤：1–9 揀選項／詞，Enter 提交＋下一步，Esc 離開 ---------- */
document.addEventListener("keydown",e=>{
  const L=lq("#lesson");if(!L||!L.classList.contains("on")||lq("#leaveq"))return;
  if(e.key==="Enter"){e.preventDefault();e.stopPropagation();const go=lq("#lgo");if(!go.disabled)go.click();return}
  if(/^[1-9]$/.test(e.key)){const b=lq("#lbody"),N=e.key;let t=null;
    if(b.querySelector("[data-l]")){const sl=b.querySelector("[data-l].sel");t=b.querySelector((sl?"[data-r]":"[data-l]")+`[data-n="${N}"]:not(.gone)`)}
    else if(b.querySelector(".opt"))t=b.querySelector(`.opt[data-n="${N}"]:not(:disabled)`);
    else t=b.querySelector(`.bank .tile[data-n="${N}"]:not(.used)`);
    if(t){e.preventDefault();e.stopPropagation();t.click()}}
},true);
