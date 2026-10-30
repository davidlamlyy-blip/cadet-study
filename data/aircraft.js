/* 機種分拆：主線只跟 C172。DA40／G1000 內容搬去選修 episode；Airbus／Boeing 家族各自一個 episode（暫時未有內容）。
   用 regex 自動分（啟發式）：topic 以 id／標題含 DA40／G1000 為準；card 屬已搬 topic、或題目／答案提 DA40／G1000。 */
(function(){
  const RE=/DA-?40|G1000|Diamond DA/i;
  const mk=(key,name,emoji,color,desc)=>({key,name,emoji,color,optional:true,desc,topics:[],cards:[],anims:[],links:[]});
  const da=mk("ac_da40","DA40 / G1000（選修）","✈️","#8aa0b8","Diamond DA40 XLT 同 Garmin G1000 NXi：機型專屬內容，主線冇（主線只用 C172）。");
  const moved=new Set();
  Cadet.order.slice().forEach(k=>{const S=Cadet.subjects[k];if(S.optional)return;
    const keep=[];(S.topics||[]).forEach(t=>{if(RE.test(t.id+" "+t.t)){da.topics.push(t);moved.add(t.id)}else keep.push(t)});S.topics=keep});
  Cadet.order.slice().forEach(k=>{const S=Cadet.subjects[k];if(S.optional)return;
    const keep=[];(S.cards||[]).forEach(c=>{if((c.topic&&moved.has(c.topic))||RE.test((c.q||"")+" "+(c.a||""))){c._os=k;da.cards.push(c)}else keep.push(c)});S.cards=keep;
    const kl=[];(S.links||[]).forEach(l=>{if(moved.has(l[0])||moved.has(l[1]))da.links.push(l);else kl.push(l)});S.links=kl});
  Cadet.add(da);
  Cadet.add(mk("ac_airbus","Airbus Family（選修）","🛫","#9aa88f","A320／A330／A350 等：各機型之後逐款加 episode（暫時未有內容）。"));
  Cadet.add(mk("ac_boeing","Boeing Family（選修）","🛬","#b59f8a","B737／B777／B787 等：各機型之後逐款加 episode（暫時未有內容）。"));
  Cadet.AC_STATS={moved:moved.size,cards:da.cards.length};
})();
