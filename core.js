/* Cadet 學習站 core — data 喺 data/*.js，用 Cadet.add({...}) 註冊科目；UI 喺 ui.js */
const Cadet={subjects:{},order:[],cross:[],_v:0,_iv:-1,
 allLinks(){return this.order.flatMap(k=>this.subjects[k].links||[]).concat(this.cross)},
 add(s){this.subjects[s.key]=s;this.order.push(s.key);this._v++},
 extend(k,o){const s=this.subjects[k];if(!s){console.error('extend: 冇科目',k);return}['topics','cards','links','anims'].forEach(f=>{s[f]=(s[f]||[]).concat(o[f]||[])});if(o.src)s.src=(s.src||'')+' · '+o.src;this._v++},
 _idx(){if(this._iv===this._v)return;const m=new Map();this.order.forEach(k=>{const s=this.subjects[k];(s.topics||[]).forEach(t=>{if(!m.has(t.id))m.set(t.id,{t,s})})});this._tm=m;this._iv=this._v},
 topic(id){this._idx();return this._tm.get(id)||null}};
const $=s=>document.querySelector(s);
const NS="http://www.w3.org/2000/svg";
function el(n,a={},p){const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}

/* ---------- 動畫 helper（build(box,H) 相容） ---------- */
const loops=[];   // {fn,box}
const H={el,
 svg(box,w,h){const s=el("svg",{viewBox:`0 0 ${w} ${h}`,class:"sim"});box.appendChild(s);return s},
 slider(box,label,min,max,val,cb,step=1){const l=document.createElement("label");l.innerHTML=`${label} <input type="range" min="${min}" max="${max}" value="${val}" step="${step}"> <b>${val}</b>`;const i=l.querySelector("input"),b=l.querySelector("b");i.oninput=()=>{b.textContent=i.value;cb(+i.value)};box.appendChild(l);cb(+val);return i},
 button(box,label,cb){const b=document.createElement("button");b.className="b g";b.textContent=label;b.onclick=cb;box.appendChild(b);return b},
 note(box){const d=document.createElement("div");d.className="small";box.appendChild(d);return t=>d.textContent=t},
 loop(fn){loops.push({fn,box:null})},
 marker(svg,id,color){let d=svg.querySelector("defs")||el("defs",{},svg);const m=el("marker",{id,markerWidth:8,markerHeight:8,refX:4,refY:4,orient:"auto"},d);el("path",{d:"M0,0L8,4L0,8z",fill:color},m)}};
/* 每個動畫自己一份 H：loop 綁定 box，唔可見（overlay 閂咗）就暫停 */
function hFor(box){const h=Object.create(H);h.loop=fn=>loops.push({fn,box});return h}
(function tick(){if(!document.hidden)for(const L of loops){const f=L.fn;if(L.box&&!L.box.getClientRects().length)continue;try{f()}catch(e){if(!f._e){f._e=1;console.error('anim loop error:',e.message)}}}requestAnimationFrame(tick)})();

/* ---------- 進度 store ---------- */
let store={},daily={d:"",n:0,ok:0};
try{store=JSON.parse(localStorage.getItem("cadetCards")||"{}")}catch(e){}
try{daily=JSON.parse(localStorage.getItem("cadetDaily")||"null")||daily}catch(e){}
const today=()=>new Date().toISOString().slice(0,10);
if(daily.d!==today())daily={d:today(),n:0,ok:0};
/* 間隔重複（Leitner box）：b＝熟悉度 0–6，due＝下次出現時間 */
let srs={};try{srs=JSON.parse(localStorage.getItem("cadetSRS")||"{}")}catch(e){}
const SRS_DAYS=[0,1,3,7,14,30,60];
function grade(c,g){ // g: 0 Again／1 Good／2 Easy
  const o=srs[c._k]||{b:-1,n:0,l:0};
  if(g===0){o.b=0;o.l++;o.due=Date.now()}
  else{o.b=o.b<0?(g===2?3:1):Math.min(6,o.b+g);o.due=Date.now()+SRS_DAYS[o.b]*864e5}
  o.n++;srs[c._k]=o;store[c._k]=o.b>=3?"k":"a";save()}
const isDue=c=>{const o=srs[c._k];return !o||o.due<=Date.now()};
const isNew=c=>!srs[c._k];
function save(){try{localStorage.setItem("cadetSRS",JSON.stringify(srs))}catch(e){}try{localStorage.setItem("cadetCards",JSON.stringify(store));localStorage.setItem("cadetDaily",JSON.stringify(daily))}catch(e){}}

/* ---------- 索引（data 變咗先重建） ---------- */
let _M=null;
function model(){
  const key=Cadet._v+":"+Cadet.cross.length;if(_M&&_M.key===key)return _M;
  const M={key,cards:[],byKey:new Map,byTopic:new Map,links:[],nb:new Map,gOf:new Map,checks:[]};
  Cadet.order.forEach(k=>{const S=Cadet.subjects[k];
    (S.topics||[]).forEach(t=>{M.gOf.set(t.id,t.g||"Topics");if(t.check)M.checks.push(t.id)});
    (S.cards||[]).forEach((c,i)=>{c._s=k;c._k=k+"|"+(c.id||i);M.cards.push(c);M.byKey.set(c._k,c);if(c.topic){let a=M.byTopic.get(c.topic);if(!a)M.byTopic.set(c.topic,a=[]);a.push(c)}})});
  const seen=new Set();
  Cadet.allLinks().forEach(l=>{const[a,b]=l;if(!Cadet.topic(a)||!Cadet.topic(b)||a===b)return;const kk=a<b?a+"\u0001"+b:b+"\u0001"+a;if(seen.has(kk))return;seen.add(kk);M.links.push(l);
    (M.nb.get(a)||M.nb.set(a,[]).get(a)).push({o:b,why:l[2]});(M.nb.get(b)||M.nb.set(b,[]).get(b)).push({o:a,why:l[2]})});
  return _M=M}
/* 進度統計：topic／chapter／subject → {n,k} */
function progress(){
  const M=model(),P={t:new Map,g:new Map,s:new Map,all:{n:0,k:0}};
  const add=(m,key,k)=>{let o=m.get(key);if(!o)m.set(key,o={n:0,k:0});o.n++;if(k)o.k++};
  M.cards.forEach(c=>{if(c.st==="todo")return;const k=store[c._k]==="k";add(P.s,c._s,k);P.all.n++;if(k)P.all.k++;
    if(c.topic){add(P.t,c.topic,k);const f=Cadet.topic(c.topic);if(f)add(P.g,f.s.key+"|"+(f.t.g||"Topics"),k)}});
  return P}
