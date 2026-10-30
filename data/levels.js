/* Level 結構：由基礎開始，逐層展開。POF 已手動分；其他科暫時按 chapter 次序平均分三份（placeholder，待 yno 調整）。 */
Cadet.LEVELS=[{n:1,name:"Level 1",zh:"基礎 Foundations"},{n:2,name:"Level 2",zh:"進階 Core"},{n:3,name:"Level 3",zh:"高階 Advanced"}];
Cadet.LEVEL_MAP={pof:{
  "Air & Atmosphere":1,"Lift Generation":1,"Airfoil & Wing":1,"Drag":1,"Stall & Spin":1,"Flight Controls":1,
  "High-Lift & Trim":2,"Stability":2,"Turning & Load Factor":2,"Climb & Performance":2,"Left-Turning Tendencies":2,"Ground Effect & Wake":2,
  "High-Speed Flight":3}};
Cadet.groupsOf=function(k){const S=Cadet.subjects[k];return [...new Set(((S&&S.topics)||[]).map(t=>t.g||"Topics"))]};
Cadet.levelOf=function(k,g){
  if(Cadet.subjects[k]&&Cadet.subjects[k].optional)return 0;
  const m=(Cadet.LEVEL_MAP[k]||{})[g];if(m)return m;
  if(/^Advanced/.test(g))return 3;
  const G=Cadet.groupsOf(k),i=G.indexOf(g);return Math.min(3,1+Math.floor(Math.max(0,i)*3/Math.max(1,G.length)))};
