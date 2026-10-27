/* Notion 筆記係 yno 私人內容：公開網站唔放，改由私人 repo（cadet-progress/notion.json）用 token 載入並快取喺本機。
   localhost／本機有 data/notion.js 就直接用。 */
(function(){
  const KEY="cadetNotionCache";
  function apply(arr){if(Array.isArray(arr)&&arr.length){Cadet.notion=arr;try{if(view==="notes")renderNotes()}catch(e){}}}
  if(!(Cadet.notion&&Cadet.notion.length)){try{apply(JSON.parse(localStorage.getItem(KEY)||"null"))}catch(e){}}
  async function pull(){const c=typeof ghCfg==="function"?ghCfg():null;if(!c)return;
    try{const r=await fetch(`https://api.github.com/repos/${c.repo}/contents/notion.json`,{headers:{Authorization:"Bearer "+c.t,Accept:"application/vnd.github.raw+json"}});
      if(!r.ok)return;const txt=await r.text();const arr=JSON.parse(txt);try{localStorage.setItem(KEY,txt)}catch(e){}apply(arr)}catch(e){}}
  window.addEventListener("load",()=>setTimeout(pull,2500));
  window.pullNotion=pull;
})();
