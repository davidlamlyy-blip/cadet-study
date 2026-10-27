/* GitHub 同步：將進度存入私人 repo（預設 davidlamlyy-blip/cadet-progress）嘅 progress.json。
   Token 只存喺本機 localStorage（cadetGhToken），唔會寫入程式或 repo。合併規則：card 以最後作答時間為準；課堂取最高星數；XP 取最大。 */
const SYNC={busy:false,timer:null,last:"",msg:""};
const _save=save,_lsave=typeof lsave==="function"?lsave:null;
const ghCfg=()=>{try{const t=localStorage.getItem("cadetGhToken");return t?{t,repo:localStorage.getItem("cadetGhRepo")||"davidlamlyy-blip/cadet-progress"}:null}catch(e){return null}};
function stable(o){return JSON.stringify(o,(k,v)=>v&&typeof v==="object"&&!Array.isArray(v)?Object.keys(v).sort().reduce((a,x)=>(a[x]=v[x],a),{}):v)}
function syncState(){return {v:1,srs,learn:{xp:LV.st.xp,done:LV.st.done,streak:LV.st.streak}}}
function mergeRemote(rm){
  rm=rm||{};const rs=rm.srs||{};
  for(const k in rs){const r=rs[k],l=srs[k];if(!l||(r.t||0)>(l.t||0)||((r.t||0)===(l.t||0)&&(r.n||0)>(l.n||0)))srs[k]=r}
  for(const k in srs)store[k]=srs[k].b>=3?"k":"a";
  const rl=rm.learn||{};LV.st.xp=Math.max(LV.st.xp||0,rl.xp||0);
  for(const id in (rl.done||{}))LV.st.done[id]=Math.max(LV.st.done[id]||0,rl.done[id]);
  if(rl.streak&&rl.streak.d>(LV.st.streak.d||""))LV.st.streak=rl.streak}
function persistLocal(){_save();if(_lsave)_lsave()}
const b64e=s=>btoa(unescape(encodeURIComponent(s))),b64d=s=>decodeURIComponent(escape(atob(s.replace(/\n/g,""))));
async function gh(method,body){const c=ghCfg();return fetch(`https://api.github.com/repos/${c.repo}/contents/progress.json`,{method,headers:{Authorization:"Bearer "+c.t,Accept:"application/vnd.github+json"},body:body?JSON.stringify(body):undefined})}
async function syncNow(manual,retry){
  if(!ghCfg()){setSync("未設定 token");return}
  if(SYNC.busy)return;SYNC.busy=true;setSync("同步緊…");
  try{
    const r=await gh("GET");let remote={},sha=null;
    if(r.status===200){const j=await r.json();sha=j.sha;remote=JSON.parse(b64d(j.content))}
    else if(r.status===401||r.status===403)throw new Error("Token 無效或冇權限（401/403）");
    else if(r.status!==404)throw new Error("GitHub 回應 "+r.status);
    mergeRemote(remote);persistLocal();refreshUI();
    const out=syncState();
    if(stable(out)!==stable(remote)){
      const p=await gh("PUT",{message:"sync "+new Date().toISOString(),content:b64e(JSON.stringify(out)),...(sha?{sha}:{})});
      if(p.status===409||p.status===422){SYNC.busy=false;if(!retry)return syncNow(manual,true);throw new Error("衝突，請再試")}
      if(!p.ok)throw new Error("寫入失敗 "+p.status)}
    SYNC.last=new Date().toLocaleTimeString();setSync("✅ 已同步 "+SYNC.last)
  }catch(e){setSync("❌ 同步失敗："+e.message)}finally{SYNC.busy=false}}
function scheduleSync(){if(!ghCfg())return;clearTimeout(SYNC.timer);SYNC.timer=setTimeout(()=>syncNow(false),4000)}
function setSync(m){SYNC.msg=m;const el=document.querySelector("#syncMsg");if(el)el.textContent=m}
function refreshUI(){try{renderSide();if(view==="learn")renderLearn();else if(view==="dash")renderDash();else if(view==="cards")next(true)}catch(e){}}
save=function(){_save();scheduleSync()};
if(_lsave)lsave=function(){_lsave();scheduleSync()};
/* 設定頁 UI */
const _renderSet=renderSet;
renderSet=function(){_renderSet();const box=document.querySelector("#v-set"),c=ghCfg();
  const d=document.createElement("div");d.className="card-box";
  d.innerHTML=`<b>☁️ GitHub 同步進度</b><div class="small" style="margin:6px 0">將進度存入私人 repo，手機／iPad／電腦用同一個 token 就會同步。Token 只存喺呢部裝置。</div>
  <label class="small">Repo（owner/name）</label><input id="ghRepo" style="width:100%;padding:8px;margin:4px 0 10px;border:1px solid var(--line);border-radius:8px" value="${c?c.repo:(localStorage.getItem("cadetGhRepo")||"davidlamlyy-blip/cadet-progress")}">
  <label class="small">Token（github_pat_…）</label><input id="ghTok" type="password" autocomplete="off" placeholder="${c?"已設定（留空＝唔改）":"貼上 token"}" style="width:100%;padding:8px;margin:4px 0 10px;border:1px solid var(--line);border-radius:8px">
  <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="b" id="ghSave">儲存並同步</button><button class="b g" id="ghNow">立即同步</button><button class="b g" id="ghOff">移除 token</button></div><div class="small" id="syncMsg" style="margin-top:8px">${esc(SYNC.msg||(c?"已設定 token":"未設定"))}</div>`;
  box.insertBefore(d,box.firstChild);
  d.querySelector("#ghSave").onclick=()=>{const t=d.querySelector("#ghTok").value.trim(),r=d.querySelector("#ghRepo").value.trim();try{if(r)localStorage.setItem("cadetGhRepo",r);if(t)localStorage.setItem("cadetGhToken",t)}catch(e){}d.querySelector("#ghTok").value="";syncNow(true)};
  d.querySelector("#ghNow").onclick=()=>syncNow(true);
  d.querySelector("#ghOff").onclick=()=>{try{localStorage.removeItem("cadetGhToken")}catch(e){}setSync("已移除 token");renderSet()}};
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible")syncNow(false)});
window.addEventListener("online",()=>syncNow(false));
window.addEventListener("load",()=>setTimeout(()=>syncNow(false),1500));
