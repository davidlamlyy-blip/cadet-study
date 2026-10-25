// Air Law, Ops & Airspace — 體系標明：CASA(澳洲) / ICAO / FAA / HK。HK 規例教材冇，未驗證。
(function(){
const T=(id,g,t,d,pts,rel,src,check)=>({id:"law."+id,g,t,d,pts,rel:rel.map(x=>"law."+x),src,check:!!check});
const L=(a,b,w)=>["law."+a,"law."+b,w];
const C=(e,topic,q,a,zh,st)=>({e,q,a,zh,topic:"law."+topic,st:st||"ok"});
Cadet.add({
key:"law", name:"Air Law, Ops & Airspace", emoji:"📜", color:"#fb7185",
src:"CASR Part 91/61 + Part 91 MOS · AIP ENR 1.2/1.4/1.14 · CASA SMS 1–8 · Enzo Ops Manual V5 · TOSB · Airspace OPS01 · BAK ch5",
topics:[
// ---- Framework
T("fw","Framework & Authority","CASA Legal Framework","澳洲（CASA）規例層級：Act → CASR → MOS，加 AIP／ERSA／NOTAM。",["Act → CASR（法律）","MOS＝技術細節","CAO／CAAP／AC＝指引","AIP／ERSA／NOTAM＝資訊","CAR 1988 逐步被取代"],["icao","pic","tsi"],"CASA Regulations; BAK ch5 p149"),
T("icao","Framework & Authority","ICAO & Annexes","ICAO（Chicago Convention）定國際標準，各國（CASA／CAD）轉化成自己規例。",["Annex 2 Rules of the Air","Annex 11 ATS／airspace","Annex 13 accident investigation","Annex 19 safety management","國家可有 differences"],["fw","hk","classes","sms"],"Annex 號碼：我自己嘅航空知識，教材只零星提及",true),
T("hk","Framework & Authority","HK Rules (CAD)","香港民航處（CAD）規例教材冇，未驗證；AAEP 教 CASA 體系。",["AAEP＝CASA RPL 地面課","CAD 參觀名單冇內容","HK 規例要另外查","面試要分清體系"],["fw","icao","hkair"],"AAEP Programme Outline; Visit (public) PDFs",true),
T("pic","Framework & Authority","PIC Authority","PIC 有最終權力：飛機、乘客紀律同安全，直至飛行結束。",["Final authority（CASR 91.215）","可指示乘客落機／限制行為","負責 persons & cargo 安全","緊急時可偏離規例"],["fw","paxb","row"],"CASR 91.215/91.220"),
T("docs","Framework & Authority","Documents on Board","飛行要帶齊：licence、medical、AFM、maintenance release 等。",["Flight crew licence＋rating","Medical certificate","AFM／checklists","Maintenance release","Journey log（Enzo 要求）"],["mr","lic","med"],"OPS01 slide; Ops Manual 2.1.1"),
T("eqp","Framework & Authority","Min Equipment (Day VFR)","Day VFR 最少儀表：ASI、altimeter、clock、compass。",["Airspeed Indicator","Altimeter","Timepiece","Magnetic compass","Airwork：OAT、turn coord."],["docs","mr"],"OPS01 slide"),
T("mr","Framework & Authority","Maintenance Release","Maintenance Release＝飛機適航憑證，分 Part 1／Part 2 記錄。",["飛前要檢查有效","Part 2 記缺陷同檢查","每日檢查：drains、fuel grade","唔啱就唔准飛"],["docs","eqp","fuelq"],"OPS01 slide; CAAP 43-01"),
T("atsbcasa","Framework & Authority","CASA vs ATSB","CASA＝監管（regulator）；ATSB＝獨立調查，不追究責任。",["CASA：licence／規例執法","ATSB：investigate, no blame","ATSB 由 TSI Act 設立","目的＝防止再發生"],["tsi","irm","just"],"AIP ENR 1.14 1.1"),
// ---- Airspace
T("classes","Airspace Classes","Airspace Classes A–G","ICAO 分 A–G：由 A（最管制）到 G（冇 ATC）；澳洲冇 B 同 F。",["A：IFR only，全部分隔","C：VFR 要 clearance","D：control zone，要 clearance","E：VFR 唔使 clearance","G：uncontrolled，FIS"],["ca","cc","cd","ce","cg","hier"],"AIP ENR 1.4 s4; BAK p158; ICAO 部分我記憶",true),
T("ca","Airspace Classes","Class A","IFR only，一切飛機都有 ATC 分隔同 clearance。",["VFR 唔准（要特別 approval）","Continuous two-way radio","FL180 以上（部分 FL245）","全部 separated"],["classes","vfr"],"AIP ENR 1.4 1.1.4, 2.1.1; CASR 91.285"),
T("cc","Airspace Classes","Class C","IFR 同 VFR 都要 clearance；IFR 同 VFR 之間有分隔。",["Clearance required","VFR 同 IFR 分隔","VFR/VFR 只有 traffic info","250 kt IAS <10,000 ft","大機場 CTR／CTA"],["classes","cd","speed","xpdr"],"AIP ENR 1.4 2.1.2, table s4"),
T("cd","Airspace Classes","Class D","Control zone：要 clearance；VFR 只收 traffic info。",["Clearance required","IFR 同 IFR 分隔","VFR：traffic info only","200 kt ≤2,500ft AAL 4NM","一般到 4,500 ft"],["classes","cc","vmc","svfr"],"AIP ENR 1.4 2.1.3, table"),
T("ce","Airspace Classes","Class E","Controlled，但 VFR 唔使 clearance；IFR 有 ATC 分隔。",["IFR：ATC service","VFR：冇 clearance","VFR 要 radio（表列）","SIS on request","Special VFR 唔准"],["classes","cg","svfr"],"AIP ENR 1.4 2.1.4; ENR 1.2 1.2.3"),
T("cg","Airspace Classes","Class G","Uncontrolled：冇 ATC，只有 FIS；責任喺 PIC see-and-avoid。",["冇 clearance","FIA 內有 FIS／SAR","CTAF／broadcast area","Squawk 1200 (VFR)","PIC 自己負責避撞"],["classes","fia","vmc","xpdr"],"AIP ENR 1.4 s3; BAK p159"),
T("hier","Airspace Classes","Airspace Hierarchy","相鄰空域，交界按較寬鬆（less restrictive）嗰類。",["P/R/MOA > A > C > D > E > G","垂直或橫向相鄰一樣","Inactive RA/CTR→G 服務","Active → 受管制"],["classes","prd","ctr"],"AIP ENR 1.4 1.1.7"),
T("ctr","Airspace Classes","CTA & CTR","CTA＝由某高度向上；CTR＝由地面向上，圍住受控機場。",["CTA：lower limit 起","CTR：surface 起","塔台開放時間先 active","要睇 ERSA／NOTAM"],["hier","cc","cd"],"AIP ENR 1.4 1.2/1.3"),
T("prd","Airspace Classes","Prohibited / Restricted / Danger","P：禁；R：要批准；D：危險，自己負責。",["Prohibited：唔准入","Restricted：要 clearance","Danger：冇需 clearance，要警覺","查 chart／ERSA"],["hier","fia"],"OPS01 slide; BAK p161"),
T("fia","Airspace Classes","FIA, CTAF & Broadcast Area","Class G 入面有 FIA（FIS）；機場用 CTAF 自我廣播。",["FIA：FIS＋SAR alerting","Broadcast area 預設 surface–5,000 ft AMSL","CTAF 自報位置意圖","詳細要求睇 ERSA"],["cg","xpdr","nontower"],"AIP ENR 1.4 3.2"),
T("speed","Airspace Classes","Speed Limits","Class C／D／E／G：<10,000 ft AMSL 250 kt IAS；D 近機場 200 kt。",["250 kt IAS <10,000 ft","D：≤2,500ft AAL＋4NM → 200 kt","VFR 要 subsonic","CASR 91.283"],["cc","cd","vfr"],"AIP ENR 1.4 table"),
T("xpdr","Airspace Classes","Transponder & Squawk","VFR G 類 squawk 1200；管制空域跟 ATC。緊急 7700／7600／7500。",["1200 VFR（澳洲 OPS01）","ATC 指定碼","7700 emergency","7600 radio failure","7500 hijack"],["cg","sig","rf"],"OPS01 slides; BAK p3238"),
T("hkair","Airspace Classes","HK Airspace","香港空域分類／規例教材冇，未驗證。",["HK 唔係 CASA 體系","要睇 HK AIP","面試前補查"],["hk","classes"],"教材冇",true),
// ---- VFR & VMC
T("vfr","VFR & VMC","VFR Conditions","VFR 只可喺 VMC、日間、subsonic；夜間要 rating。",["必須 VMC","≤2,000 ft AGL 要睇到地面","日間（NVFR 先夜飛）","Subsonic","Class A 要 approval"],["vmc","svfr","night","cruise"],"AIP ENR 1.2 1.1; CASR 91.273–91.285"),
T("vmc","VFR & VMC","VMC Criteria (CASA)","VMC＝飛行能見度＋離雲距離，按空域同高度而定。",["≥10,000 ft：8 km, 1500 m / 1000 ft","<10,000 ft：5 km, 1500 m / 1000 ft","D：5 km, 600 m / 1000 ft 上 500 ft 下","G 低層：5 km, clear of cloud, 見地面"],["vfr","cd","cg","svfr"],"Part 91 MOS 2.07; OPS01 slides"),
T("svfr","VFR & VMC","Special VFR","VMC 唔夠時，ATC 可批 SVFR：clear of cloud，vis ≥1,600 m。",["日間，喺 CTR／毗鄰 CTA","Clear of cloud","Aeroplane vis ≥1,600 m","Heli ≥800 m","Class E 唔准"],["vmc","ce","cd"],"AIP ENR 1.2 1.2"),
T("cruise","VFR & VMC","VFR Cruising Levels","按 magnetic track 揀：000–179 奇數千＋500；180–359 偶數千＋500。",["東行：1500, 3500, 5500…","西行：2500, 4500, 6500…","<3,000 ft AMSL 唔使","≥3,000 但 <1,500 AGL 唔使","ATC 指示優先"],["vfr","qnh"],"Part 91 MOS 2.09; CASR 91.275; OPS01 slide"),
T("minh","VFR & VMC","Minimum Heights","Populous area 1,000 ft（600 m 半徑）；其他地方 500 ft（300 m）。",["Populous／gathering：1,000 ft","其他：500 ft","起降、training circuits 等例外","Aeroplane vs rotorcraft 半徑唔同"],["vfr","night"],"CASR 91.265/91.267"),
T("night","VFR & VMC","Night VFR","夜 VFR 要 NVFR rating；有 minimum height（LSALT／1,000 ft+10NM）。",["要 night rating＋裝備","最低高度規則 91.277","final reserve 45 min","Alternate：1 小時內"],["vfr","frf","minh"],"CASR 91.277; MOS Table 19.02; MOS 8.05"),
T("qnh","VFR & VMC","QNH & Altimetry","<10,000 ft：開車前設 local／area QNH；高過用 1013 standard。",["QNH＝讀出標高 AMSL","10,000 ft 以上 standard","Altimeter 讀得準先分隔","ATIS 攞 QNH"],["cruise","vfr"],"BAK p154; AIP ENR 1.7（細節我記憶）",true),
// ---- Collision avoidance
T("row","Collision Avoidance","Right of Way Rules","原則：避免碰撞；有 right of way 嘅保持 heading 同 speed。",["Emergency landing 優先","Landing aircraft 優先","Converging：右邊優先","Head-on 各向右","Overtaking：超車者讓"],["conv","head","overt","land","cat","hold"],"CASR 91.330–91.340; BAK p152"),
T("conv","Collision Avoidance","Converging Aircraft","同高度會合：對方喺你右邊，你讓。",["Aircraft on right has priority","見到右邊有機＝你讓","唔好喺對方前面橫過","右邊嗰架都要留意"],["row","head","hold"],"CASR 91.330 item 6"),
T("head","Collision Avoidance","Head-On","面對面：雙方都向右轉。",["Both alter heading right","Risk of collision 先適用","唔好爬升／下降對沖"],["row","conv"],"CASR 91.335(3)"),
T("overt","Collision Avoidance","Overtaking","超車一方讓，向右過，保持喺右邊直至通過。",["Overtaker gives way","Pass to the right","唔好靠爬升／下降超","被超嗰架有 right of way"],["row","hold"],"CASR 91.335(2); BAK p153（70° 區）"),
T("land","Collision Avoidance","Landing & Lower Aircraft","Landing 嘅優先；approach 時低機優先，但唔准 cut in。",["Landing 最優先（次於 emergency）","Higher gives way to lower","低機唔可借機 cut in final","Power-driven 讓 glider"],["row","nontower","cat"],"CASR 91.330 items 1–3"),
T("cat","Collision Avoidance","Category Priority","同區：balloon > parachutist > glider > airship > tow > powered。",["Balloon 最優先","Glider 優於動力機","Towing aircraft 優於 powered","Powered 要讓晒"],["row","land"],"CASR 91.330 item 5"),
T("hold","Collision Avoidance","Maintain Heading & Speed","有 right of way 要保持 heading＋speed；讓路方唔可以貼近橫過。",["Priority aircraft 保持航向","Giving way：唔好 pass 前面太近","避撞必要時可違例","TCAS RA 優先"],["row","conv","seeavoid"],"CASR 91.335(1)(4)(5)"),
T("nontower","Collision Avoidance","Non-Towered Separation","冇塔：前機過咗 upwind end／開始轉彎先起飛。",["起飛：前機過咗跑道末或轉彎","MTOW <2,000 kg：前機 ≥600 m 前方","著陸：前機已離開／安全距離","用 CTAF 廣播"],["land","fia"],"BAK p154"),
T("seeavoid","Collision Avoidance","See-and-Avoid","Class G 靠眼睛：collision course＝相對位置不變、只係變大。",["Constant bearing＝危險","Scan：快掃＋慢看","Alerted see-and-avoid","Transponder 保持 ON","盲區要轉機身睇"],["hold","cg"],"BAK p155–156"),
// ---- Flight prep & fuel
T("prep","Flight Prep & Fuel","Pre-Flight Planning","PIC 要睇晒：天氣、燃油、W&B、起降要求、NOTAM、備降。",["Weather：TAF／Area forecast","Fuel planning","Weight & balance","Take-off/landing performance","NOTAM、alternate"],["taf","alt","fuelc"],"OPS01 slides; CASR 91.230"),
T("taf","Flight Prep & Fuel","TAF Terms","TAF 要喺有效期；ATIS 唔可用嚟做計劃。",["CAVOK、FM、BECMG","TEMPO：最長 60 分鐘","INTER：最長 30 分鐘","PROB30/40","唔好用 ATIS 計劃"],["prep","alt"],"OPS01 slides; MOS 8.04"),
T("alt","Flight Prep & Fuel","Alternate Aerodrome","預測天氣差（relevant weather）就要 nominate alternate，或帶足 holding fuel。",["VFR 日間 ≤50 NM 離場場：豁免","INTER：holding 30 分鐘","TEMPO：holding 60 分鐘","夜 VFR：alternate ≤1 小時","SCT 以上低雲／vis<8 km／crosswind"],["prep","fuelc","taf"],"MOS 8.04–8.05; OPS01 slide"),
T("fuelc","Flight Prep & Fuel","Fuel Components","開飛時至少：taxi＋trip＋alternate＋holding＋contingency＋final reserve。",["Taxi fuel","Trip fuel","Destination alternate（如要）","Holding fuel（如要）","Final reserve（永不計劃用）"],["frf","alt","minfuel"],"Part 91 MOS 19.04"),
T("frf","Flight Prep & Fuel","Final Reserve Fuel","小型 piston 機：VFR 30 min、Night VFR／IFR 45 min。",["≤5,700 kg piston VFR：30 min","Night VFR：45 min","IFR：45 min","Heavy piston >5,700：45＋5%","1,500 ft AAL holding speed"],["fuelc","minfuel","night"],"Part 91 MOS 19.02 Table; OPS01"),
T("minfuel","Flight Prep & Fuel","Minimum Fuel vs MAYDAY FUEL","Minimum fuel＝唔係 emergency；少過 final reserve＝MAYDAY FUEL。",["Minimum fuel：任何更改會低過 final reserve","唔會有 priority","Emergency fuel：MAYDAY×3 FUEL","Distress message"],["frf","sig","fuelc"],"Part 91 MOS 19.06/19.07"),
T("fuelq","Flight Prep & Fuel","Fuel Quality Checks","燃油要 grade 啱、冇污染；日常檢查 drain 同水。",["Drains 要工作","啱 fuel grade","查水／污染物","CASR 91.465 禁用劣質油"],["mr","fuelc"],"OPS01 slide; CASR 91.465"),
// ---- Licensing
T("lic","Licensing & Medical","Licence Structure (CASA)","RPL → PPL → CPL → ATPL（MPL 係另一條路）。",["RPL：日間 VFR，≤1,500 kg 單發","PPL：私人運作","CPL：商業運作","ATPL：airline 機長","Instrument／night 要 rating"],["rpl","ppl","cpl","atpl","endorse"],"CASR Part 61; OPS01 slide"),
T("rpl","Licensing & Medical","RPL","RPL：單發、≤1,500 kg、日間 VFR、私人或受訓。",["≤1,500 kg 單發","Day VFR only","超過 1 乘客／>10,000 ft：要 class 1/2 med","OPS01：25 小時（check）"],["lic","med","ppl"],"CASR 61.460/61.465",true),
T("ppl","Licensing & Medical","PPL","PPL 私人運作；經驗：integrated 35 小時／non-integrated 40 小時。",["Integrated：35 h","Non-integrated：40 h","10 h solo；5 h solo X-country","150 NM X-country（2 場）","≥17 歲"],["lic","cpl","rpl"],"CASR 61.515/61.525/61.545（2024 版）",true),
T("cpl","Licensing & Medical","CPL","CPL：商業運作；integrated 150 h／non-integrated 200 h。",["Integrated：150 h","Non-integrated：200 h","300 NM X-country","10 h instrument","<750 h 唔可做大型單人 air transport"],["lic","ppl","atpl"],"CASR 61.570/61.590/61.610（2024 版）；OPS01 寫 250 h 同規例矛盾",true),
T("atpl","Licensing & Medical","ATPL & MPL","ATPL 要 1,500 h aeronautical experience；MPL 240 h（含 sim）。",["ATPL：1,500 h","MPL：240 h","Multi-crew course","Single-pilot IFR 要 IR／IPC"],["lic","cpl"],"CASR 61.660/61.665/ ATPL exp",true),
T("med","Licensing & Medical","Medical Certificates","Class 1 商業；Class 2 私人／solo；RPL 可用 RAMPC。",["Class 1：commercial","Class 2：private／solo","RPL：class 1/2 或 RAMPC","要帶喺機上"],["lic","docs","rpl"],"CASR 61.405–61.415; OPS01 slide"),
T("recent","Licensing & Medical","Recent Experience","載客：90 日內 3 次起飛＋3 次降落（夜載客要夜間）。",["90 days","3 take-offs＋3 landings","夜載客：夜間 3＋3","起飛後爬 ≥500 ft AGL","Flight review／check 可代替"],["lic","review"],"CASR 61.395"),
T("review","Licensing & Medical","Flight Review","Flight review：要向有權人士示範 competency。",["Instructor／CASA／approved 做","喺啱 rating 嘅機或 sim","評 competency units"],["recent","lic"],"CASR 61.400"),
T("endorse","Licensing & Medical","Ratings & Endorsements","Type、night、instrument、instructor；FROL、aerobatic、formation 等。",["Type rating","Night／NVFR","MECIR／IR","Instructor rating","FROL、aerobatic、formation endorsement"],["lic","night"],"OPS01 slide"),
T("fdp","Licensing & Medical","Fatigue & Fitness","按 CAO 48.1；用 I'M SAFE 同 Samn-Perelli 自評。",["I'M SAFE：Illness…Eating","Samn-Perelli 6–7 要停","CAO 48.1 Appendix 6","PIC 唔准疲勞飛行"],["pic","alc","just"],"Ops Manual 1.14.2; CAO 48.1"),
T("alc","Licensing & Medical","Alcohol & Drugs","酒精／藥物影響下唔准飛；有 DAMP；乘客酒精亦有規管。",["CASR 91.520 fit for duty","Instructor 禁酒精／藥","Ops Manual：micro-business DAMP","CASR 91.780–91.790"],["fdp","pic"],"CASR 91.520/91.780; Ops Manual 1.14.4"),
// ---- Emergency & briefings
T("sig","Emergency & Briefings","MAYDAY vs PAN-PAN","MAYDAY＝distress；PAN-PAN＝urgency；121.5 MHz 係國際緊急頻率。",["MAYDAY：life 即時危險","PAN-PAN：urgency","7700 squawk","121.5 MHz","ELT／SARTIME"],["xpdr","rf","sar","forced"],"OPS01 slides; ICAO 通用"),
T("sar","Emergency & Briefings","ELT & SARTIME","SARTIME＝預報到達時間；過時間冇報＝SAR 啟動。",["ELT：撞擊自動發射","SARTIME 通知 ATS／人","Landing before last light","Enzo：ELT 要攜帶"],["sig","eqp2"],"OPS01 slide; BAK p179; Ops Manual 2.1.9"),
T("eqp2","Emergency & Briefings","Emergency Equipment","ELT、救生衣（over-water 超過 gliding 距離）、滅火筒、sick bag。",["ELT（壞咗帶 portable）","Life jackets：過水距離","Portable fire extinguisher","乘客要知位置"],["sar","paxb"],"Ops Manual 2.1.8–2.1.9; Passenger briefing"),
T("efato","Emergency & Briefings","Engine Failure Takeoff (TOSB)","Take-off safety brief：跑道上收油煞車；轉彎前唔好掉頭。",["跑道：close throttle, brake","Crosswind 前：低機頭，±30° 揀地","唔好 turn back","Crosswind 後：可掉頭落"],["forced","depb"],"TOSB V1.0"),
T("forced","Emergency & Briefings","Forced Landing","AVIATE（glide speed）→ NAVIGATE（揀場）→ COMMUNICATE。",["Aviate：glide speed、fuel check","Navigate：wind、surface、size、shape、slope","Communicate：MAYDAY、7700","Brief pax、shutdown"],["efato","sig","xpdr"],"OPS01 slide"),
T("rf","Emergency & Briefings","Radio Failure","近機場：squawk 7600，VFR，盲發，睇 light signals。",["Squawk 7600","保持 VFR","Transmit blind","判斷跑道方向、入 circuit","Watch light signals（ERSA）"],["xpdr","light","sig"],"OPS01 slide（OCR 寫 squawk 碼不清，7600 係標準）",true),
T("light","Emergency & Briefings","Light Signals","塔台 light gun：綠＝許可，紅＝停／讓／唔好著陸。",["Steady green：cleared","Flashing green：return for landing（空）","Steady red：give way","Flashing red：aerodrome unsafe","Flashing white：返起點（地面）"],["rf"],"OPS01 slide; CASR 91.670"),
T("paxb","Emergency & Briefings","Passenger Briefing","起飛前 PIC 要簡報：禁煙、安全帶、出口、控制座位、緊急設備。",["No smoking","Seatbelts 全程","Emergency exits","唔好掂／踢 controls","Hi-vis jacket、apron"],["pic","eqp2"],"Passenger briefing; CASR 91.565"),
T("depb","Emergency & Briefings","Departure Brief (CTWO)","CTWO：Chart、Terrain、Weather、Operation；之後 EFIS 設定。",["Chart：跑道、航向、高度","Terrain：最低安全高度","Weather：風、雲、能見度","Operation：離場限制","EFIS：comm、QNH、transponder"],["efato"],"Departure Brief docx"),
// ---- SMS
T("sms","Safety Management (SMS)","SMS Four Components","ICAO SMS：Policy → Risk Mgmt → Assurance → Promotion。",["Safety policy & objectives","Safety risk management","Safety assurance","Safety promotion","ICAO Annex 19；CASR Part 119"],["haz","assure","promo","icao"],"CASA SMS book 1 p7"),
T("haz","Safety Management (SMS)","Hazard vs Risk","Hazard＝可造成傷害嘅「而家」嘢；Risk＝likelihood × severity。",["Hazard：現存","Risk：未來後果","例：白鷺（hazard）→ bird strike（risk）","Hazard register 記錄"],["srm","matrix","sms"],"SMS book 1 p9"),
T("srm","Safety Management (SMS)","Safety Risk Management Steps","辨識 hazard → 評 risk → 控制 → 監察；7 步 early-warning。",["Consult → identify hazards","Rank likelihood×severity","列現有 controls、評效力","加 controls；記 register","Monitor & review"],["haz","matrix","alarp"],"SMS book 3 p3–4"),
T("matrix","Safety Management (SMS)","Risk Matrix (ICAO)","Likelihood（5–1）× Severity（A–E）→ 風險級別。",["Likelihood 5 frequent→1 extremely improbable","Severity A catastrophic→E negligible","5A 最高","色區：我按 ICAO 通用圖"],["haz","alarp","srm"],"SMS book 3 p6–7",true),
T("alarp","Safety Management (SMS)","ALARP","As Low As Reasonably Practicable：風險降到再降成本遠超效益。",["三區：unacceptable／tolerable／broadly acceptable","Intolerable 唔可繼續營運","Tolerable 要控制＋定期檢討","法規控制一定算 practicable"],["matrix","srm"],"SMS book 3 p9"),
T("swiss","Safety Management (SMS)","Swiss Cheese Model","Reason：多層防禦，洞同線先出事故。",["Absent／failed defences","Unsafe acts（active failures）","Local workplace factors","Organisational factors（latent）","補洞比責備個人有用"],["sms","shell","assure"],"SMS book 1 p12–14"),
T("shell","Safety Management (SMS)","SHELL Model","Software、Hardware、Environment、Liveware×2：介面失配出問題。",["S：procedures","H：equipment","E：環境／文化","L：人","L–L：人與人"],["swiss","sms"],"SMS book 1 p17"),
T("culture","Safety Management (SMS)","Safety Culture (5 Elements)","Reason：Informed、Learning、Flexible、Reporting、Just。",["Informed","Learning","Flexible","Reporting","Just"],["just","sms","assure"],"SMS book 1 p6; book 4"),
T("just","Safety Management (SMS)","Just Culture","誠實錯誤唔罰；故意、魯莽、疏忽先處分。",["Honest mistakes：唔 blame","Reckless／negligent：sanction","鼓勵 reporting","信任＝reporting 基礎"],["culture","atsbcasa","hzrep"],"SMS book 1 glossary; Ops Manual 1.15.2"),
T("assure","Safety Management (SMS)","Safety Assurance","證明 SMS 有效：監察 performance、audit、investigation、MOC。",["Hazard／occurrence reporting","Audits、surveys","FDA、LOSA、MOSA","SMART safety objectives","Continuous improvement"],["sms","moc","invest"],"SMS book 4"),
T("moc","Safety Management (SMS)","Management of Change","有改變先做 risk assessment，再 implement 同 review。",["識別 change＋stakeholders","Risk assessment","Project plan＋change register","Implement、review"],["assure","srm"],"SMS book 4 p4–8"),
T("invest","Safety Management (SMS)","Internal Safety Investigation","唔止睇 active failure，要搵 root cause（點解）。",["Assess notification","Data collection","Sequence of events","Defence analysis","Communicate lessons"],["assure","swiss","hzrep"],"SMS book 4 p2–3"),
T("promo","Safety Management (SMS)","Safety Promotion","訓練＋溝通：令全員明白 SMS 同安全目標。",["Safety training","Safety communication","包括 contractors","Feedback 入員"],["sms","culture"],"SMS book 5"),
// ---- Reporting
T("tsi","Accident Reporting","TSI Act & ATSB","ATSB 依 TSI Act 調查；不為追究責任。",["Immediately／routine reportable","Responsible persons 要報","唔追究 blame","安全資料庫"],["atsbcasa","irm","fw"],"AIP ENR 1.14"),
T("irm","Accident Reporting","IRM vs RRM","IRM：即時電話＋72 小時書面；RRM：72 小時書面。",["IRM：phone ASAP＋written 72h","RRM：written 72h","Accident、serious incident、loss of separation","Category A–D 要求唔同"],["tsi","repcon","hzrep"],"AIP ENR 1.14 2.4/3.2"),
T("repcon","Accident Reporting","REPCON","自願保密報告計劃（voluntary confidential）。",["Voluntary","Confidential","ATSB 營運","唔取代強制報告"],["irm","just"],"AIP ENR 1.14 1.2.3"),
T("hzrep","Accident Reporting","Internal Hazard Reporting","學校：accident 即報 CEO／HOO＋ATSB；hazard 報管理層。",["Accident → CEO/HOO＋ATSB","Hazard → CEO/HOO","Routine → 72h online","CEO/HOO 調查"],["irm","invest","just"],"Ops Manual 1.15.3"),
],
links:[
L("fw","icao","ICAO standards 轉化成國家規例"),
L("hk","icao","HK CAD 亦按 ICAO，但細節唔同"),
L("pic","fdp","PIC 有責任唔疲勞飛行"),
L("pic","paxb","PIC 負責乘客安全＝要 brief"),
L("mr","docs","Maintenance release 係必帶文件"),
L("classes","vmc","VMC 數值按空域類別而定"),
L("classes","hier","相鄰空域取較寬鬆類別"),
L("cc","speed","C/D/E/G 都有 250 kt 限制"),
L("cd","svfr","D 內 VMC 唔夠先用 SVFR"),
L("ce","svfr","E 唔准 Special VFR"),
L("cg","seeavoid","G 冇 ATC＝靠 see-and-avoid"),
L("cg","fia","G 內 FIA 提供 FIS"),
L("fia","nontower","CTAF 廣播係冇塔起降分隔基礎"),
L("xpdr","sig","Squawk 7700 係 MAYDAY 配套"),
L("xpdr","rf","7600 通知 ATC radio failure"),
L("vfr","vmc","VFR 前提：必須 VMC"),
L("vmc","svfr","低過 VMC 先需要 SVFR"),
L("cruise","qnh","巡航高度以 altimeter（QNH）為準"),
L("minh","night","夜 VFR 有另一套最低高度"),
L("row","hold","有 right of way 要保持航向"),
L("conv","head","兩者都靠「向右」原則"),
L("overt","head","超車同對頭都向右"),
L("land","cat","approach 同 category 優先"),
L("seeavoid","hold","看到對方先懂點樣保持／讓路"),
L("alt","fuelc","要 alternate＝要多帶 alternate fuel"),
L("taf","alt","TEMPO／INTER 決定 holding fuel"),
L("frf","minfuel","低過 final reserve＝MAYDAY FUEL"),
L("fuelc","frf","Final reserve 係 fuel stack 最後一層"),
L("night","frf","夜 VFR final reserve 45 min"),
L("rpl","med","RPL 超過限制要 class 1/2 medical"),
L("recent","review","Flight review 可以代替 recency"),
L("fdp","alc","Fitness：fatigue＋alcohol 都係 I'M SAFE"),
L("sig","forced","Forced landing 要發 MAYDAY"),
L("sar","sig","ELT／SARTIME 係 distress 後備"),
L("efato","forced","TOSB 係 forced landing 嘅起飛版本"),
L("eqp2","paxb","乘客要識用緊急設備"),
L("sms","icao","ICAO Annex 19 定 SMS 框架"),
L("haz","matrix","Hazard 再按 likelihood×severity 評級"),
L("matrix","alarp","Matrix 結果決定要唔要降到 ALARP"),
L("swiss","invest","Investigation 搵 latent conditions"),
L("culture","just","Just culture 係五要素之一"),
L("just","irm","Just culture 令人敢報"),
L("assure","moc","Change 要 risk assess，屬 assurance"),
L("tsi","atsbcasa","ATSB 同 CASA 分工"),
L("irm","hzrep","學校程序對應 IRM／RRM"),
L("pic","row","PIC 負責避撞"),
L("prep","taf","計劃用 TAF，唔用 ATIS"),
L("vmc","cg","G 類低層只需 clear of cloud"),
],
cards:[
C("📜","fw","How is CASA regulation structured?","The Act sits on top, then CASR for the legal rules, MOS for technical detail, with CAO, CAAP, AC, AIP, ERSA and NOTAM as orders, guidance and information.","Act → CASR → MOS。"),
C("🏛️","fw","What is the difference between CASR and CAR 1988?","CAR 1988 is the older regulation set being progressively replaced by the newer CASR, which are organised by Part (e.g. Part 91, Part 61).","CAR 逐步被 CASR 取代。"),
C("📘","fw","What does the Part 91 MOS do?","It prescribes the technical detail behind CASR Part 91, such as VMC criteria, cruising levels and fuel requirements.","MOS＝細節數值。"),
C("🌐","icao","Who sets international aviation standards?","ICAO, under the Chicago Convention, through its Annexes; each state (CASA, HK CAD) implements them with national rules.","ICAO 定標準，各國轉化。","check"),
C("🏴","hk","Are CASA rules the same as Hong Kong rules?","No. AAEP teaches CASA RPL ground subjects; Hong Kong CAD rules are not in my material, so I should say so and not guess.","教材冇 HK 規例，我唔確定。","check"),
C("👨‍✈️","pic","What authority does the PIC have?","The pilot in command has final authority over the aircraft and discipline of everyone aboard, and must ensure the safety of persons, cargo and the flight.","CASR 91.215。"),
C("🚪","pic","When can the PIC direct a passenger to do something?","When the PIC believes it is necessary for safety of the aircraft, people on board, or people or property on the ground; ignoring it is an offence.","CASR 91.220。"),
C("🗂️","docs","What documents must be carried on a flight?","Flight crew licence and medical, AFM, valid maintenance release, checklists and journey log; for navs also weather, NOTAM and W&B.","Enzo Ops Manual 2.1.1。"),
C("📊","eqp","What is the minimum equipment for day VFR?","Airspeed indicator, altimeter, timepiece and magnetic compass; for airwork also an OAT gauge and turn coordinator.","OPS01。"),
C("🔧","mr","What is a maintenance release?","The document certifying the aircraft's airworthiness and recording maintenance and defects; it must be valid before flight.","Part 1／Part 2。"),
C("🔍","mr","What is checked as part of the daily inspection regarding fuel?","That drains function, the correct fuel grade is used, and there are no contaminants such as water.","OPS01。"),
C("🧭","atsbcasa","What is the difference between CASA and ATSB?","CASA is the safety regulator; ATSB is independent and investigates to prevent recurrence, not to apportion blame or liability.","ATSB 唔追責。"),
C("🗺️","classes","Which airspace classes exist in Australia?","A, C, D, E and G. There is no Class B or Class F in Australia.","澳洲冇 B／F。"),
C("🗺️","classes","Describe ICAO airspace classes A to G in one line each.","A: IFR only, all separated. B: IFR/VFR all separated. C: IFR/VFR, VFR separated from IFR. D: IFR separated from IFR, VFR gets traffic info. E: IFR separated, VFR no clearance. F: advisory. G: flight information only.","B／F 係 ICAO 通用，我憑記憶。","check"),
C("🅰️","ca","Can you fly VFR in Class A?","No. Class A is IFR only unless the pilot holds a specific CASA approval to conduct VFR flight in Class A.","CASR 91.285。"),
C("🅲","cc","What service does ATC provide in Class C?","IFR are separated from all aircraft; VFR are separated from IFR and get traffic information on other VFR. Clearance is required.","Class C：VFR 要 clearance。"),
C("🅳","cd","What service do VFR receive in Class D?","ATC service with clearance required; VFR receive traffic information on all other flights but are not separated from them.","D：VFR 只有 traffic info。"),
C("🅴","ce","Do VFR flights need a clearance in Class E?","No. IFR flights get an ATC service; VFR flights have no clearance requirement and can request a surveillance information service.","E：VFR 唔使 clearance。"),
C("🅶","cg","Who is responsible for avoiding traffic in Class G?","The pilot in command, by see-and-avoid; there is no ATC separation, only flight information service in a FIA.","G：冇 ATC。"),
C("🧱","hier","What happens when two airspace classes adjoin?","The common boundary takes the less restrictive class: hierarchy is P/R/MOA, A, C, D, E, G (most to least restrictive).","交界按較寬鬆。"),
C("🏗️","ctr","What is the difference between a CTA and a CTR?","A CTA is controlled airspace extending upwards from a specified limit; a CTR extends upwards from the surface around a controlled aerodrome.","CTR 由地面起。"),
C("⛔","prd","How do you treat Prohibited, Restricted and Danger areas?","Do not enter Prohibited; get clearance for Restricted; Danger areas need no clearance but you must stay vigilant.","PRD。"),
C("📡","fia","What is a CTAF?","A common traffic advisory frequency used by pilots to self-announce position and intentions in Class G near aerodromes.","自我廣播頻率。"),
C("🏎️","speed","What is the speed limit below 10,000 ft AMSL in Class C, D, E and G?","250 knots IAS; in Class D within 4 NM of the primary aerodrome at or below 2,500 ft AAL it is 200 knots IAS.","D 近機場 200 kt。"),
C("📟","xpdr","What squawk codes should a VFR pilot know?","1200 for VFR in Class G; ATC-assigned code in controlled airspace; 7700 emergency, 7600 radio failure, 7500 hijack.","OPS01。"),
C("✅","vfr","When may a VFR flight be conducted?","Only in VMC, subsonic, and by day unless the pilot and aircraft are authorised for night VFR.","AIP ENR 1.2。"),
C("☁️","vmc","What are the VMC criteria at or above 10,000 ft AMSL in Class G?","Flight visibility 8,000 m and 1,500 m horizontally and 1,000 ft vertically from cloud.","CASA MOS 2.07。"),
C("☁️","vmc","What are the VMC criteria below 10,000 ft AMSL (Class A/C/E/G)?","Flight visibility 5,000 m and 1,500 m horizontally and 1,000 ft vertically from cloud.","CASA MOS 2.07。"),
C("☁️","vmc","What are the VMC criteria in Class D?","5,000 m visibility, 600 m horizontally, and 1,000 ft above or 500 ft below cloud.","D 最鬆。"),
C("☁️","vmc","What are the Class G VMC at or below 3,000 ft AMSL or 1,000 ft AGL, whichever is higher?","5,000 m visibility, clear of cloud, and the aircraft must be operated in sight of the ground or water.","最低 VFR。"),
C("🌫️","svfr","What are the conditions for Special VFR?","By day, ATC clearance in a CTR (or adjoining CTA), clear of cloud, visibility at least 1,600 m for aeroplanes (800 m helicopters); no delay to IFR; not in Class E.","SVFR 唔准 E。"),
C("🔢","cruise","What are the VFR cruising levels for eastbound and westbound tracks?","Track 000–179 magnetic: 1,500, 3,500, 5,500… Track 180–359: 2,500, 4,500, 6,500…","東奇西偶＋500。"),
C("🔢","cruise","When do VFR cruising levels not apply?","In uncontrolled airspace below 3,000 ft AMSL, or at/above 3,000 ft but below 1,500 ft AGL, or when impracticable; also ATC instructions override.","CASR 91.275。"),
C("⬇️","minh","What is the minimum height over a populous area for an aeroplane?","1,000 ft above the highest obstacle within 600 m horizontally; elsewhere 500 ft within 300 m.","CASR 91.265/267。"),
C("🌙","night","What is required for VFR at night?","Night VFR rating, appropriate aircraft equipment, minimum height rules, and 45 minutes final reserve for small piston aeroplanes.","NVFR。"),
C("🧮","qnh","What does QNH on the altimeter show on the ground?","The aerodrome elevation AMSL; below 10,000 ft you set local or area QNH.","QNH＝標高。","check"),
C("🛩️","row","State the main right-of-way rules.","Emergency landing and landing aircraft have priority; converging – aircraft on the right has priority; head-on – both turn right; overtaker gives way and passes on the right.","CASR 91.330。"),
C("➡️","conv","Two aircraft converge at the same altitude. Who gives way?","The aircraft that has the other on its right gives way.","右邊優先。"),
C("↔️","head","What do you do when approaching head-on?","Both aircraft alter heading to the right.","兩邊向右。"),
C("🔙","overt","What are the overtaking rules?","The overtaking aircraft keeps clear and passes on the right, staying right until clear; the aircraft being overtaken has right of way.","超車者讓。"),
C("🛬","land","Who has priority between aircraft on approach to land?","The lower aircraft, but it must not cut in front of a higher aircraft in the final stages of approach.","低機優先，唔准 cut in。"),
C("🎈","cat","Which aircraft types have priority over powered aircraft?","Balloons, parachutists, unpowered gliders, airships, and aircraft towing something all have priority over power-driven aircraft.","Powered 讓晒。"),
C("🧭","hold","What must the aircraft with right of way do?","Maintain heading and speed until there is no risk of collision, unless deviating is needed to avoid collision.","91.335。"),
C("🛫","nontower","At a non-towered aerodrome, when can you take off after another aircraft?","Once the preceding aircraft has crossed the upwind end, commenced a turn, or is airborne far enough ahead (≥600 m if both <2,000 kg MTOW).","BAK p154。"),
C("👀","seeavoid","How can you recognise a collision course visually?","The other aircraft stays at a constant position (bearing) in your windscreen and simply grows larger.","相對位置唔變。"),
C("📋","prep","What must the PIC study during pre-flight planning?","Weather reports and forecasts, fuel planning, weight and balance, take-off and landing requirements, time, NOTAM and alternates.","OPS01。"),
C("🌦️","taf","What do TEMPO and INTER mean in a forecast?","TEMPO: conditions last up to 60 minutes; INTER: up to 30 minutes. They set holding fuel (60/30 min) in lieu of an alternate.","MOS 8.04。"),
C("📑","taf","Can you use ATIS for flight planning?","No. Use a valid TAF/area forecast; ATIS is for current conditions only.","ATIS 唔用嚟計劃。"),
C("🔄","alt","When must you nominate an alternate aerodrome?","When relevant weather is forecast at destination for the ETA window, unless you carry holding fuel; VFR by day within 50 NM of departure is exempt.","MOS 8.04。"),
C("⛽","fuelc","What fuel must be on board at departure?","Taxi, trip, destination alternate (if required), holding (if required), contingency (if applicable), final reserve and additional fuel.","MOS 19.04。"),
C("⛽","frf","What is the final reserve fuel for a small piston aeroplane?","30 minutes for VFR day; 45 minutes for night VFR and for IFR, flown at 1,500 ft above aerodrome at holding speed.","MOS 19.02。"),
C("🧮","frf","Calculation: 172 burns 36 L/h. What is the final reserve for day VFR?","30 min × 36 L/h = 18 L; plus taxi, trip and any holding/alternate fuel on top of this.","30/60×36=18 L。","check"),
C("🆘","minfuel","What is the difference between 'minimum fuel' and 'MAYDAY FUEL'?","Minimum fuel is not an emergency; it warns ATC that any change may mean landing below final reserve. MAYDAY FUEL is declared when landing at the nearest suitable aerodrome would leave less than final reserve.","MOS 19.07。"),
C("💧","fuelq","What are the fuel quality checks?","Check drains work, correct grade, no water or contaminants; contaminated fuel must not be used.","CASR 91.465。"),
C("🎓","lic","List the CASA licence progression.","RPL, PPL, CPL, ATPL (MPL as the multi-crew route); night, instrument and instructor are ratings.","CASA Part 61。"),
C("🎓","rpl","What are the RPL limits?","Single-engine, up to 1,500 kg, day VFR, private operation or training; carrying more than one passenger or flying above 10,000 ft AMSL needs a class 1 or 2 medical.","CASR 61.460/465。"),
C("🎓","ppl","How many hours for a CASA PPL?","35 hours for integrated courses and 40 hours for non-integrated, including 10 h solo and 5 h solo cross-country (2 aerodromes, 150 NM).","61.525/61.545（2024）。","check"),
C("🎓","cpl","How many hours for a CASA CPL?","150 hours for integrated courses and 200 hours for non-integrated, with 300 NM cross-country; the OPS01 slide says 250, which conflicts.","教材矛盾，見 coverage。","check"),
C("🎓","atpl","How many hours for an ATPL?","1,500 hours aeronautical experience; the MPL needs 240 hours with simulator.","ATPL 1,500 h。","check"),
C("🩺","med","Which medical class is needed?","Class 1 for commercial operations; class 2 for private operations and solo; RPL may use a RAMPC.","OPS01／61.405。"),
C("🔁","recent","What is the passenger-carrying recency requirement?","Within the previous 90 days, 3 take-offs and 3 landings (at night for night carriage) in the same category.","CASR 61.395。"),
C("📝","review","What is a flight review?","A demonstration of competency to CASA or an authorised instructor in an aircraft that can be flown under the rating.","CASR 61.400。"),
C("😴","fdp","What is I'M SAFE?","Illness, Medication, Stress, Alcohol, Fatigue, Eating: a self-assessment checklist before flight.","自評工具。"),
C("😴","fdp","What Samn-Perelli scores must be reported?","A self-rating of 6 or 7 (extremely tired/exhausted) must be reported to the HOO for removal from duty.","Enzo Ops Manual。"),
C("🍺","alc","Can instructors fly under alcohol or drug influence?","No; flight duties are prohibited, and the school follows a DAMP (micro-business).","CASR 91.520。"),
C("🆘","sig","MAYDAY versus PAN-PAN?","MAYDAY: distress, immediate danger; PAN-PAN: urgency, no immediate danger. International distress frequency 121.5 MHz.","OPS01。"),
C("🔦","sar","What is SARTIME?","A nominated time by which you must report arrival; if not, search and rescue is alerted.","SARTIME。"),
C("🧯","eqp2","What emergency equipment is carried?","ELT (portable if fixed one u/s), life jackets for extended over-water, portable fire extinguisher and sick bags.","Enzo 2.1.8–9。"),
C("🛫","efato","What do you do for engine failure on the runway during take-off?","Close the throttle and brake as required.","TOSB。"),
C("🛫","efato","Engine failure airborne before the crosswind turn?","Lower the nose, choose a spot within 30° of the nose, flaps as required, and land; do not turn back.","唔好掉頭。"),
C("🛫","efato","Engine failure after the crosswind turn?","Lower the nose, flaps as required, and turn back for a downwind landing on the grass or runway.","轉彎後可掉頭。"),
C("🛬","forced","State the forced-landing priorities.","Aviate (glide speed, fuel check), navigate (field: wind, surface, size, shape, slope), communicate (MAYDAY, 7700), brief passengers.","ANC。"),
C("📻","rf","What do you do with radio failure near the departure aerodrome?","Squawk 7600, remain VFR, transmit blind, determine landing direction, join the circuit and watch for light signals.","OPS01（碼不清）。","check"),
C("💡","light","What does a steady red light signal to an aircraft in flight?","Give way to other aircraft and continue circling.","Light gun。"),
C("💡","light","What does a flashing red light signal?","Aerodrome unsafe; do not land.","Light gun。"),
C("👥","paxb","What does the passenger briefing cover?","No smoking, seatbelts, emergency exits, control-seat conditions, clear communication and emergency equipment.","Briefing instructions。"),
C("🗒️","depb","What does CTWO stand for in the departure brief?","Chart, Terrain, Weather, Operation.","Departure Brief。"),
C("🧰","sms","What are the four components of an SMS?","Safety policy and objectives, safety risk management, safety assurance, safety promotion.","ICAO 四大支柱。"),
C("⚠️","haz","Hazard vs risk?","A hazard is anything that may cause harm; risk is the likelihood and severity of that harm occurring.","Hazard 而家；risk 將來。"),
C("📊","matrix","How is risk rated in the ICAO matrix?","Likelihood from 5 (frequent) to 1 (extremely improbable) combined with severity A (catastrophic) to E (negligible).","Likelihood × severity。"),
C("📉","alarp","What does ALARP mean?","As low as reasonably practicable: reduce risk until the cost of further reduction is grossly disproportionate to the benefit.","ALARP。"),
C("🧀","swiss","Explain the Swiss cheese model.","Defences have holes (active failures and latent conditions); an accident occurs when holes align and a hazard passes through every layer.","Reason。"),
C("🧩","shell","What does SHELL stand for?","Software, Hardware, Environment, Liveware (and Liveware-Liveware).","SHELL。"),
C("🤝","just","What is just culture?","Honest errors are not punished, but wilful violation, recklessness or negligence is sanctioned; it builds trust for reporting.","Just culture。"),
C("🔬","assure","How does an SMS prove it works?","Safety assurance: monitoring performance, audits, reporting, investigations, management of change and continuous improvement.","Assurance。"),
C("🔄","moc","What are the steps of management of change?","Identify the change, develop the case, risk assess, plan, implement and review; record in a change register.","MOC。"),
C("🧭","invest","What should an internal investigation look for?","Root causes and latent conditions, not just the active failure.","Why 唔只 what。"),
C("📣","promo","What does safety promotion include?","Safety training and safety communication, including contractors.","Training＋communication。"),
C("📞","irm","What is the difference between an IRM and an RRM?","An IRM requires immediate phone notification to ATSB plus a written report within 72 hours; an RRM needs only a written report within 72 hours.","IRM 要電話。"),
C("📞","tsi","Who are responsible persons for reporting?","Crew members, owner/operator, ATC, ARFF, maintenance engineer, ground handlers, CASA staff, aerodrome operator and sport aviation bodies.","TSI。"),
C("🔒","repcon","What is REPCON?","The ATSB voluntary confidential reporting scheme; it does not replace mandatory reporting.","REPCON。"),
C("🏫","hzrep","What is Enzo's internal reporting procedure?","Accidents and serious incidents go to the CEO/HOO and ATSB by phone; routine matters via ATSB online within 72 hours; hazards go to the CEO/HOO.","Ops Manual 1.15.3。"),
C("⚖️","fw","What happens if you break a strict-liability CASR offence?","Many Part 91 flight rules carry strict liability with a penalty (e.g. 50 penalty units); the pilot may not need to have intended the breach.","CASR 91 多條 50 penalty units。"),
C("🤝","pic","When does PIC authority apply?","From the earlier of doors closing before take-off or the flight starting, until the later of doors opening after landing or the flight ending.","91.215。"),
C("🔧","docs","Which medical class do commercial operations need?","Class 1 medical for commercial operations; class 2 is enough for private or recreational flying and solo.","OPS01。"),
C("🧭","hier","Class D CTR becomes inactive below Class C. What class applies at the common level?","The less restrictive class; if the CTR is inactive the boundary is Class G, and when it activates it becomes Class D with clearance required.","AIP ENR 1.4 例子。"),
C("🧭","ctr","When is a CTR active?","During the hours the control tower operates, as published in ERSA or varied by NOTAM; military CTRs may activate at short notice.","Plan as if active。"),
C("📍","fia","What is the default vertical extent of a Broadcast Area?","Surface to 5,000 ft AMSL (or to the base of CTA if 8,500 ft or less, or a nominated level).","AIP ENR 1.4 3.2。"),
C("📟","cg","What do you do for communication in Class G?","Squawk 1200 (VFR), monitor the area frequency or CTAF, stay vigilant; standard circuit direction is left.","OPS01。"),
C("🛩️","ce","Does Class E allow Special VFR?","No. Special VFR is not permitted in Class E.","AIP ENR 1.2。"),
C("🌤️","vfr","How must a VFR pilot navigate at or below 2,000 ft AGL?","By visual reference to the ground or water; also notify ATC if more than 1 NM off track in controlled airspace.","BAK p152。"),
C("🌥️","vfr","What extra rules apply over broken cloud (BKN, 4/8 or more)?","Maintain VMC, fix position visually at least every 30 minutes, and ensure forecasts allow VMC during descent to destination or alternate.","BAK p152。"),
C("🧭","night","Does a day-VFR-only pilot have a last-light rule?","Plan to arrive at the later of destination or alternate at least 10 minutes before last light, allowing for holding.","AIP ENR 1.2 1.1.3。"),
C("🔀","svfr","What is the minimum visibility for Special VFR?","1,600 m for aeroplanes, 800 m for helicopters, and clear of cloud.","AIP ENR 1.2。"),
C("⛰️","minh","Why are minimum height rules relaxed near aerodromes?","Take-off, landing, missed approach and training circuits are exempt because aircraft must operate low there.","CASR 91.265/267 exceptions。"),
C("⏱️","taf","Calculation: forecast has TEMPO 1200–1500 at destination and no alternate. How much holding fuel?","60 minutes of holding fuel for TEMPO (30 for INTER). At 36 L/h that is 36 L.","MOS 8.04 (6)(b)。","check"),
C("🧭","alt","When must a night VFR flight nominate an alternate?","Always; it must be within 1 hour's flight time of the planned destination.","MOS 8.05(2)。","check"),
C("🛢️","fuelc","Which fuel items may you plan to use, and which not?","Taxi, trip, alternate, holding and contingency are planned use; final reserve must never be planned to be used.","OPS01。"),
C("🧮","fuelc","Calculation: trip 1.5 h, burn 40 L/h, taxi 5 L, day VFR, no alternate. Minimum fuel?","Trip 60 L + taxi 5 L + final reserve 30 min × 40 = 20 L = 85 L.","60+5+20=85 L。","check"),
C("📏","frf","Final reserve for heavier (>5,700 kg) piston aeroplanes?","45 minutes plus 5% of trip fuel contingency, for IFR or VFR.","MOS Table 19.02。"),
C("🚨","minfuel","What do you broadcast to declare fuel emergency?","MAYDAY, MAYDAY, MAYDAY FUEL when landing at the nearest suitable aerodrome would leave less than final reserve.","Distress message。"),
C("🔄","fuelc","What if you divert to your alternate?","You must carry destination alternate fuel from commencing diversion, plus holding fuel (if required) and final reserve.","MOS 19.04(6)。"),
C("🎫","lic","Who may use an aircraft class rating privileges without recency?","Nobody: holders must also meet recent experience, flight review and medical limits (Subpart 61.E).","Part 61.E。","check"),
C("🪪","rpl","Can an RPL holder fly above 10,000 ft?","Only with a class 1/2 medical, or accompanied by a pilot with one who occupies a control seat.","CASR 61.465。"),
C("📜","ppl","Minimum age for a CASA PPL?","17.","CASR 61.515。","check"),
C("📜","cpl","What is the 750-hour rule for a CPL?","With less than 750 h as aeroplane pilot, a CPL cannot be PIC of a single-pilot aeroplane over 5,700 kg in air transport.","61.570。","check"),
C("🌙","recent","Do passenger-carrying night flights need night recency?","Yes: 3 take-offs and 3 landings at night within 90 days, each take-off followed by a climb to at least 500 ft AGL.","61.395。"),
C("🌡️","recent","Which checks can replace recency?","A relevant check or review (e.g. flight review, IPC) or a flight test within 90 days with at least one take-off and landing.","61.395(4)。"),
C("🎖️","endorse","Name common endorsements and ratings.","Flight radio (FROL), aircraft type, aerobatic, formation; ratings include night, instrument (MECIR), instructor.","OPS01。"),
C("😴","fdp","Which regulation governs fatigue in the Enzo manual?","CAO 48.1 Instrument 2019 and its Appendix 6; the pilot must not begin a task if unfit due to fatigue.","Ops Manual 1.14。"),
C("🥤","fdp","Why break long flights for meals?","Low blood sugar and dehydration impair decisions; Enzo offers a break when an FDP exceeds five hours.","Ops Manual 1.14.2.5。"),
C("🧯","eqp2","When must life jackets be carried in a single-engine aeroplane?","When flown further over water than the distance from which you could glide to land with the engine inoperative.","Ops Manual 2.1.8。"),
C("📻","sig","What is the international distress frequency?","121.5 MHz.","OPS01。"),
C("🌐","xpdr","Which squawk for hijack?","7500.","ICAO 通用。"),
C("🔦","light","What does steady green mean in flight versus on ground?","In flight: cleared to land; on the ground: cleared to take off (if the pilot is satisfied no collision risk).","Light gun。"),
C("📢","paxb","When may a passenger sit in a control seat?","Only after a special briefing from the PIC on not touching or kicking the controls.","Ops Manual 2.1.3。"),
C("⛰️","efato","Why not turn back after engine failure below the crosswind turn?","Too low to complete the turn safely; land straight ahead within about 30° of the nose.","TOSB。"),
C("🧱","sms","Which regulations require SMS in Australia?","CASR Part 119 requires air transport operators to have an SMS; Part 145 maintenance organisations and certain aerodromes have requirements too.","SMS book 1。"),
C("🎯","sms","What does SMART stand for in safety objectives?","Specific, Measurable, Achievable, Realistic, with a Time frame.","SMS book 1。"),
C("🔎","haz","Give an example of hazard and consequence.","Hazard: fatigue or bird activity near the runway; risk: errors or a bird strike causing engine failure.","SMS book 1。"),
C("📝","srm","What is a hazard register for?","It records hazards, their ranking, controls and further actions, to monitor and show regulators.","SMS book 3。"),
C("🛡️","srm","Can the risk be treated in ways other than reducing it?","Yes: avoid, accept to pursue an opportunity, remove, or share the risk.","SMS book 3 p8。"),
C("🔺","alarp","What are the three ALARP risk regions?","Unacceptable, tolerable (must be controlled to ALARP), and broadly acceptable.","SMS book 3。"),
C("🧀","swiss","Which two kinds of failure create holes in the cheese?","Active failures (errors by front-line people) and latent conditions (organisational factors).","SMS book 1。"),
C("🗣️","culture","What are Reason's five ingredients of safety culture?","Informed, learning, flexible, reporting and just culture.","SMS book 1。"),
C("🧪","assure","Name programs for capturing normal-operations data.","FDA, LOSA, MOSA, NOSS and MEDA.","SMS book 4。"),
C("🔬","assure","What is the purpose of SPIs/safety objectives?","To measure whether the SMS works; objectives must be SMART and tracked.","SMS book 4。"),
C("🕵️","invest","Why is blame a poor investigation focus?","Active failures are not the root cause; fix the underlying organisational factors so the hole does not reappear.","SMS book 4。"),
C("📚","promo","What are the two elements of safety promotion?","Safety training and safety communication.","SMS book 5。"),
C("☎️","irm","What number do you call for an immediately reportable matter?","1800 011 034 (international +61 2 6230 4470) to ATSB.","AIP ENR 1.14。"),
C("🧾","irm","Which event is immediately reportable for all categories?","Loss of separation standard between aircraft, serious property damage (external), and aircraft accident (limited for Cat C to serious injury/missing).","AIP table。"),
C("🛰️","tsi","Does the ATSB investigate to blame?","No; its function under the TSI Act is prevention, not apportioning blame or liability.","AIP ENR 1.14。"),
C("🔐","just","How does just culture relate to REPCON?","Confidential, non-punitive reporting encourages people to share safety information.","SMS／AIP。"),
],
anims:[
{title:"Airspace 立體切層：飛機穿越變 requirements", hint:"拉距離＋高度滑桿（示意圖，非真實 chart）", build(box,H){
  const svg=H.svg(box,700,320),say=H.note(box),E=H.el;
  const yA=a=>290-a/20000*270, xP=v=>40+v;
  E("rect",{x:0,y:0,width:700,height:320,fill:"#0f172a"},svg);
  const R=(x1,x2,a1,a2,f)=>E("rect",{x:xP(x1),y:yA(a2),width:x2-x1,height:yA(a1)-yA(a2),fill:f,stroke:"#475569"},svg);
  R(0,640,0,20000,"#1e293b");R(0,640,8500,18000,"#164e63");R(0,640,18000,20000,"#7f1d1d");
  R(160,460,4500,12500,"#6b21a8");R(210,410,2500,4500,"#6b21a8");R(260,360,0,4500,"#166534");
  E("rect",{x:xP(0),y:290,width:640,height:6,fill:"#a16207"},svg);
  const tx=(x,y,s,c)=>{const t=E("text",{x,y,"font-size":12,fill:c||"#e2e8f0","text-anchor":"middle"},svg);t.textContent=s};
  tx(xP(310),yA(2200),"D (CTR)","#bbf7d0");tx(xP(310),yA(8000),"C","#e9d5ff");tx(xP(90),yA(5000),"G","#cbd5e1");tx(xP(90),yA(12000),"E","#a5f3fc");tx(xP(320),yA(19000),"A (IFR only)","#fecaca");
  tx(xP(310),310,"airport","#fde68a");
  [0,5000,10000,15000,20000].forEach(a=>tx(20,yA(a)+4,a/1000+"k","#94a3b8"));
  const ac=E("circle",{r:8,fill:"#fbbf24",stroke:"#fff"},svg);
  let d=60,al=3000;
  const info={A:"Class A：IFR only，要 clearance，全部 separated",C:"Class C：要 clearance；VFR 同 IFR 分隔；250 kt <10,000",D:"Class D：要 clearance；VFR 只有 traffic info",E:"Class E：VFR 唔使 clearance；IFR 有 ATC",G:"Class G：冇 clearance；FIS only；自己 see-and-avoid"};
  const cls=()=>{if(al>=18000)return "A";if(d>=260&&d<=360&&al<4500)return "D";if((d>=160&&d<=460&&al>=4500&&al<12500)||(d>=210&&d<=410&&al>=2500&&al<4500))return "C";if(al>=8500)return "E";return "G"};
  const upd=()=>{ac.setAttribute("cx",xP(d));ac.setAttribute("cy",yA(al));const k=cls();say("而家喺 "+al+" ft："+info[k])};
  H.slider(box,"距離（機場喺中間）",0,640,60,v=>{d=v;upd()},5);
  H.slider(box,"高度 ft",0,20000,3000,v=>{al=v;upd()},250);
}},
{title:"Right of Way：點擊邊架要讓路", hint:"撳你覺得要讓路嘅飛機", build(box,H){
  const svg=H.svg(box,700,300),say=H.note(box),E=H.el;
  const S=[
   {n:"Converging：同高度會合",a:[{x:200,y:260,h:45,s:1.3,l:"A"},{x:500,y:260,h:315,s:1.3,l:"B"}],ans:0,w:"B 喺 A 右邊 → A 讓（轉右）"},
   {n:"Head-on：對頭",a:[{x:100,y:150,h:90,s:1.3,l:"A"},{x:600,y:150,h:270,s:1.3,l:"B"}],ans:-1,w:"兩架都向右轉"},
   {n:"Overtaking：超車",a:[{x:100,y:150,h:90,s:2,l:"A (快)"},{x:300,y:150,h:90,s:1,l:"B (慢)"}],ans:0,w:"超車者 A 讓，向右過"},
   {n:"Approach to land：兩架 final",a:[{x:330,y:170,h:180,s:.7,l:"A 低"},{x:370,y:100,h:180,s:.7,l:"B 高"}],ans:1,w:"高機 B 讓低機 A（但 A 唔可 cut in）"},
   {n:"Powered vs Glider",a:[{x:500,y:260,h:315,s:1.3,l:"A 動力機"},{x:200,y:260,h:45,s:1.3,l:"G 滑翔機"}],ans:0,w:"動力機 A 讓 glider（category 優先於 right 規則）"},
   {n:"Emergency：A 發動機故障要降落",a:[{x:200,y:260,h:45,s:1.3,l:"A 緊急"},{x:500,y:260,h:315,s:1.3,l:"B"}],ans:1,w:"B 讓 compelled-to-land 嘅 A（emergency 最優先）"}];
  let cur=0,t=0,run=false,P=[],G=[];
  const nm=E("text",{x:12,y:22,"font-size":14,fill:"#fbbf24"},svg);
  E("rect",{x:0,y:0,width:700,height:300,fill:"#0f172a",opacity:.4},svg);
  const layer=E("g",{},svg);
  function load(i){cur=i;t=0;run=false;layer.innerHTML="";nm.textContent=S[i].n;P=S[i].a.map(o=>Object.assign({},o));G=P.map((o,k)=>{
    const g=E("g",{style:"cursor:pointer"},layer);E("polygon",{points:"0,-14 10,12 0,6 -10,12",fill:k?"#38bdf8":"#f472b6",stroke:"#fff"},g);
    const tt=E("text",{y:28,"font-size":12,fill:"#e2e8f0","text-anchor":"middle"},g);tt.textContent=o.l;g.onclick=()=>pick(k);return g});say("撳邊架要讓路？");draw()}
  function draw(){P.forEach((o,k)=>{let h=o.h;if(o.turn)h+=35*Math.min(1,Math.max(0,(t-30)/25));G[k].setAttribute("transform","translate("+o.x+","+o.y+") rotate("+h+")");o._h=h})}
  function pick(k){if(run)return;const a=S[cur].ans;if(a===-1||a===k){P.forEach((o,j)=>{o.turn=(a===-1||a===j)});run=true;say("啱！"+S[cur].w)}else say("唔啱，再諗：由規則（emergency > landing > category > right）搵起")}
  H.loop(()=>{if(!run||t>200)return;t++;P.forEach(o=>{const h=(o._h||o.h)*Math.PI/180;o.x+=Math.sin(h)*o.s;o.y-=Math.cos(h)*o.s});draw()});
  S.forEach((s,i)=>H.button(box,(i+1)+". "+s.n.split("：")[0],()=>load(i)));
  load(0);
}},
{title:"Risk Matrix：likelihood × severity", hint:"撳格仔，再試加 control", build(box,H){
  const svg=H.svg(box,700,320),say=H.note(box),E=H.el;
  E("rect",{x:0,y:0,width:700,height:320,fill:"#0f172a"},svg);
  const sev=["A 災難","B 危險","C 中等","D 輕微","E 可忽略"],lk=["5 頻繁","4 偶爾","3 稀有","2 不太可能","1 極不可能"];
  const bad=["5A","5B","5C","4A","4B","3A"],ok=["3E","2D","2E","1B","1C","1D","1E"];
  const zone=c=>bad.includes(c)?0:ok.includes(c)?2:1;
  const col=["#dc2626","#f59e0b","#16a34a"],zt=["Unacceptable：唔可繼續，要先降風險","Tolerable：要 controls，做到 ALARP，定期 review","Acceptable：可接受，繼續 monitor"];
  const X0=130,Y0=40,W=100,Hh=48;let r=0,c=0;
  sev.forEach((s,j)=>{const t=E("text",{x:X0+j*W+W/2,y:30,"font-size":12,fill:"#e2e8f0","text-anchor":"middle"},svg);t.textContent=s});
  lk.forEach((s,i)=>{const t=E("text",{x:X0-8,y:Y0+i*Hh+Hh/2+4,"font-size":12,fill:"#e2e8f0","text-anchor":"end"},svg);t.textContent=s});
  for(let i=0;i<5;i++)for(let j=0;j<5;j++){const code=(5-i)+"ABCDE"[j];const rc=E("rect",{x:X0+j*W,y:Y0+i*Hh,width:W-2,height:Hh-2,fill:col[zone(code)],opacity:.75,style:"cursor:pointer"},svg);rc.onclick=()=>{r=i;c=j;upd()};const t=E("text",{x:X0+j*W+W/2,y:Y0+i*Hh+Hh/2+4,"font-size":13,fill:"#fff","text-anchor":"middle","pointer-events":"none"},svg);t.textContent=code}
  const mk=E("circle",{r:14,fill:"none",stroke:"#fff","stroke-width":4},svg);
  let tx=0,ty=0,tgx=0,tgy=0;
  function upd(){const code=(5-r)+"ABCDE"[c];tgx=X0+c*W+W/2-1;tgy=Y0+r*Hh+Hh/2-1;say(code+" → "+zt[zone(code)])}
  H.loop(()=>{tx+=(tgx-tx)*.15;ty+=(tgy-ty)*.15;mk.setAttribute("cx",tx);mk.setAttribute("cy",ty)});
  tx=tgx=X0+W/2;ty=tgy=Y0+Hh/2;
  H.button(box,"Control：降低 likelihood（少啲發生）",()=>{if(r<4)r++;upd()});
  H.button(box,"Control：降低 severity（後果細啲）",()=>{if(c<4)c++;upd()});
  H.button(box,"Reset",()=>{r=0;c=0;upd()});
  upd();say("撳一個格；顏色係 ICAO 通用圖（教材冇列分區，待驗證）");
}},
{title:"Swiss Cheese：洞對齊先出事", hint:"拉每層洞嘅位置，再放 hazard", build(box,H){
  const svg=H.svg(box,700,300),say=H.note(box),E=H.el;
  E("rect",{x:0,y:0,width:700,height:300,fill:"#0f172a"},svg);
  const names=["Organisational\n(latent)","Workplace\nfactors","Unsafe acts\n(active)","Defences\n(failed)"],X=[170,300,430,560],holes=[150,150,150,150];let hy=150,pos=-1,stop=-1,run=false,px=40;
  const hs=[];
  X.forEach((x,i)=>{E("rect",{x:x-18,y:30,width:36,height:230,rx:6,fill:"#facc15",opacity:.85},svg);hs.push(E("circle",{cx:x,cy:150,r:24,fill:"#0f172a"},svg));names[i].split("\n").forEach((s,k)=>{const t=E("text",{x:x,y:280+k*0,"font-size":10,fill:"#e2e8f0","text-anchor":"middle",dy:k*12-6},svg);t.textContent=s})});
  const ln=E("line",{x1:40,x2:660,y1:150,y2:150,stroke:"#64748b","stroke-dasharray":"4 4"},svg);
  const hz=E("circle",{cx:40,cy:150,r:9,fill:"#ef4444"},svg);
  const tag=E("text",{x:40,y:24,"font-size":12,fill:"#fca5a5"},svg);tag.textContent="Hazard";
  const out=E("text",{x:560,y:24,"font-size":16,fill:"#fff"},svg);
  const redraw=()=>{hs.forEach((h,i)=>h.setAttribute("cy",holes[i]));ln.setAttribute("y1",hy);ln.setAttribute("y2",hy);if(!run){hz.setAttribute("cy",hy);px=40;hz.setAttribute("cx",40)}};
  H.slider(box,"Hazard 高度",40,260,150,v=>{hy=v;redraw()});
  names.forEach((n,i)=>H.slider(box,n.split("\n")[0]+" 洞位置",40,260,150,v=>{holes[i]=v;redraw()}));
  H.button(box,"放 hazard 入去",()=>{run=true;px=40;stop=-1;out.textContent="";say("Hazard 前進…")});
  H.loop(()=>{if(!run)return;px+=3;hz.setAttribute("cx",px);hz.setAttribute("cy",hy);
    for(let i=0;i<4;i++){if(stop<0&&px>=X[i]-18&&Math.abs(holes[i]-hy)>24){stop=i;px=X[i]-22;run=false;out.textContent="BLOCKED";say("喺「"+names[i].split("\n")[0]+"」被擋住：洞冇對齊 → 冇事故")}}
    if(run&&px>=680){run=false;out.textContent="ACCIDENT";say("四個洞對齊 → hazard 穿過所有 defences = accident。SMS 目標：補洞、令洞唔對齊")}});
  redraw();say("先拉洞對齊 hazard 高度，再撳「放 hazard」");
}},
{title:"VMC Minima：高度／空域／雲距離", hint:"揀空域，拉高度同雲距離睇係咪 VMC", build(box,H){
  const svg=H.svg(box,700,280),say=H.note(box),E=H.el;
  E("rect",{x:0,y:0,width:700,height:280,fill:"#0f172a"},svg);
  let K="G",al=2000,vis=6,hz=800,vz=500,above=true;
  const ring=E("circle",{cx:350,cy:140,fill:"none",stroke:"#38bdf8","stroke-dasharray":"6 4","stroke-width":2},svg);
  const need=E("circle",{cx:350,cy:140,fill:"none",stroke:"#f472b6","stroke-dasharray":"2 4","stroke-width":2},svg);
  const cl=E("ellipse",{rx:55,ry:26,fill:"#cbd5e1"},svg);
  E("polygon",{points:"350,126 360,152 350,146 340,152",fill:"#fbbf24"},svg);
  const t1=E("text",{x:12,y:22,"font-size":13,fill:"#e2e8f0"},svg),t2=E("text",{x:12,y:260,"font-size":14,fill:"#fff"},svg);
  const req=()=>{if(K==="D")return {v:5,h:600,vu:1000,vd:500,txt:"Class D：5 km / 600 m 橫 / 1000 ft 雲上 / 500 ft 雲下"};
    if(K==="G"&&al<=3000)return {v:5,h:0,vu:0,vd:0,txt:"Class G ≤3,000 ft：5 km，clear of cloud，見地面／水"};
    if(al>=10000)return {v:8,h:1500,vu:1000,vd:1000,txt:"≥10,000 ft：8 km / 1500 m 橫 / 1000 ft 豎"};
    return {v:5,h:1500,vu:1000,vd:1000,txt:"<10,000 ft：5 km / 1500 m 橫 / 1000 ft 豎"}};
  function upd(){const r=req();t1.textContent=r.txt;ring.setAttribute("r",Math.max(6,vis*20));need.setAttribute("r",r.v*20);
    const cx=350+Math.max(60,hz/2000*260+55),cy=above?140-Math.max(30,vz/1500*100+26):140+Math.max(30,vz/1500*100+26);cl.setAttribute("cx",cx);cl.setAttribute("cy",cy);
    const visOK=vis>=r.v;let cOK;if(r.h===0)cOK=hz>0||vz>0;else{const vn=above?r.vu:r.vd;cOK=hz>=r.h||vz>=vn}
    const ok=visOK&&cOK;t2.textContent=ok?"VMC ✓ 可以 VFR":"IMC ✗ "+(visOK?"離雲太近":"能見度不足");t2.setAttribute("fill",ok?"#4ade80":"#f87171");
    say("藍圈＝你嘅能見度；粉紅圈＝最低要求。橫距 或 豎距 其一達標即可（唔入雲）")}
  H.button(box,"Class G",()=>{K="G";upd()});H.button(box,"Class C／E",()=>{K="E";upd()});H.button(box,"Class D",()=>{K="D";upd()});
  H.button(box,"雲喺上／下",()=>{above=!above;upd()});
  H.slider(box,"高度 ft AMSL",500,14000,2000,v=>{al=v;upd()},500);
  H.slider(box,"能見度 km",1,12,6,v=>{vis=v;upd()},.5);
  H.slider(box,"雲橫距 m",0,2000,800,v=>{hz=v;upd()},50);
  H.slider(box,"雲豎距 ft",0,1500,500,v=>{vz=v;upd()},50);
}},
{title:"Fuel Stack：開飛要帶幾多油", hint:"拉飛行時間／燃油消耗，睇每層油", build(box,H){
  const svg=H.svg(box,700,300),say=H.note(box),E=H.el;
  E("rect",{x:0,y:0,width:700,height:300,fill:"#0f172a"},svg);
  let trip=1.5,burn=36,night=false,hold=0,alt=false;
  const lay=[["Taxi","#64748b"],["Trip","#38bdf8"],["Alternate","#a78bfa"],["Holding","#f59e0b"],["Final reserve","#ef4444"]];
  const rects=lay.map(l=>{const r=E("rect",{x:300,width:120,fill:l[1],stroke:"#0f172a"},svg);const t=E("text",{x:430,"font-size":12,fill:"#e2e8f0"},svg);return [r,t]});
  const tot=E("text",{x:60,y:40,"font-size":18,fill:"#fff"},svg);
  function upd(){const v=[4,trip*burn,alt?0.75*burn:0,hold/60*burn,(night?45:30)/60*burn];const T=v.reduce((a,b)=>a+b,0);let y=270;
    v.forEach((q,i)=>{const h=q/Math.max(T,1)*230;y-=h;rects[i][0].setAttribute("y",y);rects[i][0].setAttribute("height",Math.max(h,0));rects[i][1].setAttribute("y",y+Math.min(h,14)/2+6);rects[i][1].textContent=q>0?lay[i][0]+" "+Math.round(q)+" L":""});
    tot.textContent="Total ≈ "+Math.round(T)+" L";say("Final reserve＝"+(night?45:30)+" min（"+(night?"night VFR":"day VFR")+"），永遠唔計劃用。Alternate 假設 45 min 飛行（示意）。")}
  H.slider(box,"Trip 時間 h",.5,4,1.5,v=>{trip=v;upd()},.25);
  H.slider(box,"Burn L/h",20,60,36,v=>{burn=v;upd()},2);
  H.slider(box,"Holding min（TEMPO 60／INTER 30）",0,60,0,v=>{hold=v;upd()},30);
  H.button(box,"Day／Night VFR",()=>{night=!night;upd()});
  H.button(box,"加／減 Alternate",()=>{alt=!alt;upd()});
  upd();
}},
{title:"Accident Reporting：IRM 定 RRM？", hint:"揀 operation category 同事件，再睇時間線", build(box,H){
  const svg=H.svg(box,700,240),say=H.note(box),E=H.el;
  E("rect",{x:0,y:0,width:700,height:240,fill:"#0f172a"},svg);
  const cats=["A 載客","B 商業非載客（含 Part141 訓練）","C 非商業"],ev=["Accident（死亡／重傷／失蹤）","Accident（其他）","Serious incident","Loss of separation","Declared emergency","Aircraft incident"];
  const R=[
   ["IRM","IRM","IRM","IRM","IRM","RRM"],
   ["IRM","RRM","RRM","IRM","RRM","—"],
   ["IRM","RRM","RRM","IRM","RRM","—"]];
  let c=1,e=0,t=0,run=false;
  const lbl=E("text",{x:20,y:30,"font-size":15,fill:"#fff"},svg),res=E("text",{x:20,y:60,"font-size":20,fill:"#fbbf24"},svg);
  E("line",{x1:60,x2:640,y1:150,y2:150,stroke:"#64748b","stroke-width":3},svg);
  const l0=E("text",{x:60,y:175,"font-size":12,fill:"#e2e8f0","text-anchor":"middle"},svg),l1=E("text",{x:640,y:175,"font-size":12,fill:"#e2e8f0","text-anchor":"middle"},svg);
  l0.textContent="事件";l1.textContent="72 小時";
  const ph=E("text",{x:60,y:120,"font-size":13,fill:"#4ade80","text-anchor":"middle"},svg);
  const dot=E("circle",{cx:60,cy:150,r:9,fill:"#fbbf24"},svg);
  function upd(){const r=R[c][e];t=0;run=false;dot.setAttribute("cx",60);lbl.textContent="Cat "+cats[c]+"｜"+ev[e];
    res.textContent=r==="IRM"?"IRM：即時電話 ATSB ＋ 72h 內書面":r==="RRM"?"RRM：72h 內書面報告":"表中冇列為 reportable（待查 TSI Regs）";ph.textContent=r==="IRM"?"📞 as soon as practicable":"";
    say("電話：1800 011 034（IRM）；online：atsb.gov.au/mandatory。撳「播放」睇 72h 時間線")}
  cats.forEach((n,i)=>H.button(box,"Cat "+n.split(" ")[0],()=>{c=i;upd()}));
  ev.forEach((n,i)=>H.button(box,n.split("（")[0],()=>{e=i;upd()}));
  H.button(box,"▶ 播放",()=>{t=0;run=true});
  H.loop(()=>{if(!run)return;t=Math.min(t+2,580);dot.setAttribute("cx",60+t);if(t>=580)run=false});
  upd();
}},
]
});
})();
