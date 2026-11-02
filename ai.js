/* AI study partner：右下角 🤖，問答經本機 server（/api/chat → claude CLI）。deploy 版冇 server，會提示用本機版。 */
(function(){
  const API=/^(127\.0\.0\.1|localhost)$/.test(location.hostname)?"":"http://127.0.0.1:8766"; // Pages 版會試本機 server
  const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
  const btn=document.createElement("button");btn.id="aib";btn.innerHTML='<img src="img/jack.gif" alt="AI" width="100%" height="100%">';btn.title="AI study partner";
  const pan=document.createElement("div");pan.id="aip";
  pan.innerHTML='<div class="aih"><b><img src="img/jack.gif" width="22" height="22" style="vertical-align:-5px;border-radius:50%;image-rendering:pixelated"> AI Study Partner</b><span><button id="aiclr" title="清除對話">🗑</button><button id="aix">✕</button></span></div><div id="aictx" class="aictx"></div><div id="aim" class="aim"></div><div class="aiq"><button data-q="解釋呢題點解係呢個答案，同埋其他選項點解錯">解釋呢題</button><button data-q="呢題嘅選項同題目似乎無關／有問題嗎？">題目有問題？</button><button data-q="用最簡單方法同一個例子解釋">簡單啲</button><button data-q="Quiz 我一條 interview 問題">考我</button></div><div class="aif"><textarea id="aiin" rows="2" placeholder="問任何嘢（Enter 送出，Shift+Enter 換行）"></textarea><button id="aigo">送出</button></div>';
  document.body.append(btn,pan);
  const st=document.createElement("style");st.textContent=`#aib{position:fixed;right:18px;bottom:18px;z-index:9998;width:54px;height:54px;border-radius:50%;border:2px solid #111;background:#6b7380;padding:0;overflow:hidden;cursor:pointer;box-shadow:0 4px 14px #0003}#aib img{display:block;image-rendering:pixelated;border-radius:50%}
body:has(#tst) #aib,body:has(#lesson.on) #aib{bottom:96px;right:12px;width:46px;height:46px}
body:has(#tst) #aip,body:has(#lesson.on) #aip{bottom:150px}
#aip{position:fixed;right:18px;bottom:84px;z-index:9999;width:min(420px,calc(100vw - 24px));height:min(600px,calc(100vh - 110px));background:#fffdf8;border:2px solid #111;border-radius:16px;display:none;flex-direction:column;box-shadow:0 8px 30px #0004;font-size:14px}
#aip.on{display:flex}#aip button{font:inherit;cursor:pointer}
.aih{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-bottom:1px solid #ddd}.aih button{border:0;background:none;font-size:16px}
.aictx{padding:6px 12px;font-size:12px;color:#777;border-bottom:1px solid #eee;max-height:48px;overflow:hidden}
.aim{flex:1;overflow:auto;padding:10px 12px;display:flex;flex-direction:column;gap:8px}
.aim .m{padding:8px 10px;border-radius:10px;white-space:pre-wrap;line-height:1.5;max-width:92%}.aim .u{align-self:flex-end;background:#f7d977}.aim .a{align-self:flex-start;background:#eee8dc}.aim .e{background:#fde0dc}
.aiq{display:flex;gap:6px;padding:6px 12px;flex-wrap:wrap}.aiq button{border:1px solid #bbb;background:#fff;border-radius:14px;padding:3px 10px;font-size:12px}
.aif{display:flex;gap:8px;padding:8px 12px;border-top:1px solid #ddd}.aif textarea{flex:1;resize:none;border:1px solid #bbb;border-radius:8px;padding:6px;font:inherit}.aif button{border:0;background:#ec6a3c;color:#fff;border-radius:8px;padding:0 14px;font-weight:700}`;
  document.head.appendChild(st);
  let msgs=[];try{msgs=JSON.parse(sessionStorage.getItem("cadetAI")||"[]")}catch(e){}
  const save=()=>{try{sessionStorage.setItem("cadetAI",JSON.stringify(msgs.slice(-30)))}catch(e){}};
  function ctx(){ // 由頁面抓住而家睇緊嘅題目／課堂／topic
    const sel=String(getSelection()||"").trim(),parts=[];
    const t=$("#tst .tq");if(t){parts.push("Quiz question: "+t.textContent.trim());const o=[...document.querySelectorAll("#tst .opt")].map(x=>x.textContent.trim());if(o.length)parts.push("Options:\n"+o.join("\n"))}
    else if($("#lesson.on #lbody")){const b=$("#lbody");parts.push("Lesson screen: "+b.innerText.trim().slice(0,1500))}
    else{const a=document.querySelector(".view.on");if(a)parts.push("Page ("+a.id+"): "+a.innerText.trim().slice(0,1200))}
    if(sel)parts.unshift("Selected text: "+sel);return parts.join("\n\n").slice(0,3500)}
  function draw(){const m=$("#aim");m.innerHTML=msgs.map(x=>`<div class="m ${x.role==="user"?"u":x.err?"a e":"a"}">${esc(x.content)}</div>`).join("")||'<div class="m a">問我任何 cadet 嘢。我會睇住你而家嗰題／頁面。</div>';m.scrollTop=m.scrollHeight}
  async function send(text){text=text.trim();if(!text)return;msgs.push({role:"user",content:text});draw();$("#aiin").value="";
    const w={role:"assistant",content:"…諗緊"};msgs.push(w);draw();$("#aigo").disabled=true;
    try{const r=await fetch(API+"/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({messages:msgs.slice(0,-1).map(x=>({role:x.role,content:x.content})),context:ctx()})});
      const j=await r.json().catch(()=>({}));if(!r.ok||!j.reply)throw new Error(j.error||"HTTP "+r.status);w.content=j.reply}
    catch(e){w.err=1;w.content="AI 用唔到："+e.message+(/HTTP 40[345]|Failed to fetch|Load failed|Unexpected/.test(e.message)?"\n\n要先喺 Mac 開本機 server（Dashboard 開「Cadet 學習站」，或 node server.js），再用 Chrome 開呢頁（Safari 會擋）。":"")}
    save();draw();$("#aigo").disabled=false}
  btn.onclick=()=>{pan.classList.toggle("on");if(pan.classList.contains("on")){const c=ctx();$("#aictx").textContent=c?"📌 "+c.replace(/\s+/g," ").slice(0,140):"";draw();$("#aiin").focus()}};
  $("#aix").onclick=()=>pan.classList.remove("on");$("#aiclr").onclick=()=>{msgs=[];save();draw()};
  $("#aigo").onclick=()=>send($("#aiin").value);
  $("#aiin").onkeydown=e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(e.target.value)}e.stopPropagation()};
  pan.querySelectorAll(".aiq button").forEach(b=>b.onclick=()=>send(b.dataset.q));
  pan.addEventListener("keydown",e=>e.stopPropagation());
})();
