/* 筆記編輯狀態（notion-ui 渲染時要知開咗編輯未）＋ HTML → Markdown。儲存格式維持 Markdown，同舊筆記／同步兼容。 */
const NE={on:matchMedia("(hover:hover) and (pointer:fine)").matches,id:null,art:null,base:"",t1:0,t2:0,blk:null,ed:null};
const NBLK=/^(P|DIV|H[1-6]|UL|OL|LI|BLOCKQUOTE|PRE|HR|TABLE|FIGURE|SECTION|ARTICLE|HEADER|FOOTER|MAIN|ASIDE)$/;
const mdWrap=(s,m)=>{const t=s.trim();if(!t)return s;const i=s.indexOf(t);return s.slice(0,i)+m+t+m+s.slice(i+t.length)};
function inlMd(root,keepNL){const walk=n=>{let o="";n.childNodes.forEach(c=>{
    if(c.nodeType===3){o+=c.nodeValue.replace(/[ ]/g," ").replace(/​/g,"");if(!keepNL)o=o.replace(/\n/g," ");return}
    if(c.nodeType!==1)return;const T=c.tagName;
    if(c.classList.contains("mth")){o+="$"+(c.dataset.tex||c.textContent)+"$";return}
    if(c.classList.contains("imgph")){o+=c.dataset.md||"";return}
    if(T==="BR"){o+="\n";return}
    if(T==="CODE"){o+=mdWrap(c.textContent,"`");return}
    if(T==="BUTTON"||T==="IMG"||T==="SCRIPT"||T==="STYLE"||c.classList.contains("figt"))return;
    const w=c.style||{},fw=w.fontWeight,boldTag=T==="B"||T==="STRONG",bold=boldTag?fw!=="normal"&&fw!=="400":(fw==="bold"||+fw>=600),it=T==="I"||T==="EM"||w.fontStyle==="italic";
    let x=walk(c);
    if(T==="A"&&/^https?:/.test(c.getAttribute("href")||""))x=x.trim()?`[${x.trim()}](${c.getAttribute("href")})`:"";
    if(it)x=mdWrap(x,"*");if(bold)x=mdWrap(x,"**");
    o+=NBLK.test(T)&&o&&!/\s$/.test(o)?" "+x:x});return o};
  return walk(root).replace(/\*{4}/g,"")}
function listMd(el,d,out){let n=+(el.getAttribute("start")||1);const ol=el.tagName==="OL";
  [...el.children].forEach(c=>{if(/^(UL|OL)$/.test(c.tagName)){listMd(c,d+1,out);return}if(c.tagName!=="LI")return;
    const tmp=document.createElement("div"),kids=[];c.childNodes.forEach(x=>{if(x.nodeType===1&&/^(UL|OL)$/.test(x.tagName))kids.push(x);else tmp.appendChild(x.cloneNode(true))});
    const t=inlMd(tmp).replace(/\s*\n\s*/g," ").trim();if(t)out.push("  ".repeat(d)+(ol?(n++)+". ":"- ")+t);
    kids.forEach(k=>listMd(k,d+1,out))})}
function blocksMd(root){const out=[];let run=[];
  const flush=()=>{if(!run.length)return;const d=document.createElement("div");run.forEach(x=>d.appendChild(x.cloneNode(true)));run=[];inlMd(d).split("\n").map(x=>x.trim()).filter(Boolean).forEach(x=>out.push(x))};
  const hasBlk=e=>[...e.querySelectorAll("*")].some(x=>NBLK.test(x.tagName));
  root.childNodes.forEach(c=>{
    if(c.nodeType!==1||!NBLK.test(c.tagName)){if(c.nodeType===3||c.nodeType===1)run.push(c);return}
    flush();const T=c.tagName;
    if(/^H[1-6]$/.test(T)){const x=inlMd(c).replace(/\n/g," ").trim();if(x)out.push("#".repeat(Math.min(3,Math.max(1,+T[1]-1)))+" "+x)}
    else if(T==="HR")out.push("---");
    else if(T==="UL"||T==="OL"){const l=[];listMd(c,0,l);if(l.length)out.push(l.join("\n"))}
    else if(T==="PRE")out.push("```\n"+inlMd(c,true).replace(/\n+$/,"")+"\n```");
    else if(T==="FIGURE"){const s=c.dataset.src;if(s)out.push(`![${inlMd(c.querySelector("figcaption")||document.createElement("i")).replace(/\n/g," ").trim()}](${s})`)}
    else if(T==="TABLE"){const R=[...c.rows].map(r=>"| "+[...r.cells].map(x=>inlMd(x).replace(/\s*\n\s*/g," ").replace(/\|/g,"｜").trim()).join(" | ")+" |");if(R.length)out.push(R.join("\n"))}
    else if(T==="BLOCKQUOTE"){blocksMd(c).split(/\n+/).filter(Boolean).forEach(x=>out.push("> "+x.replace(/^> ?/,"")))}
    else if(hasBlk(c)){const x=blocksMd(c);if(x)out.push(x)}
    else inlMd(c).split("\n").map(x=>x.trim()).filter(Boolean).forEach(x=>out.push(x))});
  flush();return out.join("\n\n")}
