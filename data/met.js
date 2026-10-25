// Meteorology (met) — Airspace HK MET01/03/05/06/MTE5 + Aviation Theory Centre Meteorology + FAA ATP/PHAK
(function(){
const T=(id,g,t,d,pts,rel,src,chk)=>({id:"met."+id,g,t,d,pts,rel:rel.map(r=>"met."+r),src,check:!!chk});
const cards=[];
const C=(topic,e,q,a,zh,chk)=>cards.push({e,q,a,zh,topic:"met."+topic,st:chk?"check":"ok"});
const topics=[
// ---- Atmosphere
T("composition","1 Atmosphere","Composition","空氣 78% N2、21% O2；水蒸氣最變化，影響 density。",["N2 78%, O2 21%, other 1%","Water vapour 0–5%","Moist air lighter than dry air","Humid day = worse performance"],["density","humidity"],"Robson ch1; MET01"),
T("layers","1 Atmosphere","Layers of Atmosphere","按溫度分層：Troposphere→Stratosphere→Mesosphere→Thermosphere。",["Weather 喺 Troposphere","Strato：isothermal 然後升溫","Ozone 喺 Stratosphere","Tropopause 唔係一層"],["tropopause","isa"],"MET01; Robson ch1"),
T("tropopause","1 Atmosphere","Tropopause","Troposphere 同 Stratosphere 嘅界線，係邊界唔係層。",["赤道 ~54–60k ft, -70~-80°C","兩極 ~20–27k ft, ~-45~-55°C","夏高冬低","最低溫＋最強風喺度"],["layers","jet"],"MET01 p2; Robson ch1"),
T("isa","1 Atmosphere","ISA","標準大氣：MSL 1013.25 hPa、15°C；2°C/1000 ft 降到 36,000 ft。",["1.225 kg/m3 at MSL","Lapse 1.98°C/1000ft (用 2)","36,090 ft 以上 -56.5°C","ISA temp = 15 − 2×(ft/1000)"],["pressure-height","lapse"],"Robson ch1"),
T("pressure-height","1 Atmosphere","Pressure vs Height","愈高氣壓愈低；低空約 1 hPa / 30 ft。",["5000 ft 約 845 hPa","20,000 ft density ≈ 一半","1 mb ≈ 30 ft (低空)","Altimeter 靠呢個原理"],["altimeter","density"],"Robson ch1; MET06"),
T("density","1 Atmosphere","Density & Performance","Density 高 = 升力、引擎、呼吸都好。",["熱＋濕＋高 = density 低","Humidity 令 density 降","影響 TAS needed、power"],["composition","pressure-height"],"Robson ch1"),
T("heat","1 Atmosphere","Heat Transfer","太陽曬地面，地面再暖空氣；convection 最重要。",["Radiation/Conduction/Convection","Advection = 水平風","Latent heat：凝結放熱","Land 熱得快冷得快 (low specific heat)"],["diurnal","lapse","cloud-form"],"Robson ch1; MET01 latent heat"),
T("diurnal","1 Atmosphere","Diurnal Variation","地面最高溫約下午 3 點，最低溫日出後約 1 小時。",["雲層：日間降溫、夜間保暖","沙漠變化最大","陸海溫差 → sea breeze"],["heat","seabreeze","inv-rad"],"Robson ch1"),
T("inv-rad","1 Atmosphere","Radiation Inversion","晴朗無風夜，地面輻射冷卻，上暖下冷。",["要晴天、微風、陸地","只有幾百 ft 厚","攔住污染 → 低 vis","日出附近最明顯"],["fog-rad","inversion-effects"],"MET01 p; Robson ch1"),
T("inv-sub","1 Atmosphere","Subsidence Inversion","高壓下沉空氣壓縮升溫，形成高空 inversion。",["常見 4–6k ft (中緯度)","High pressure 特徵","限制 cloud 垂直發展","Haze 被蓋住"],["highlow","inversion-effects"],"MET01; Robson ch1"),
T("inv-front","1 Atmosphere","Frontal Inversion","暖空氣爬上冷空氣 (warm front) 形成。",["Warm front 最常見","Sea-breeze front 亦有","界面有 wind shear"],["warmfront","windshear"],"MET01; Robson ch1"),
T("inversion-effects","1 Atmosphere","Inversion Effects","穿過 inversion：風突變、乱流、performance 變。",["Wind speed 爬升時增加","爬升入 inversion 失 lift/thrust","下面 vis 差","Stable 限制雲發展"],["inv-rad","inv-sub","windshear"],"Robson ch1"),
T("humidity","1 Atmosphere","Humidity & Dewpoint","暖空氣載水多；冷到 dewpoint 就飽和。",["RH 100% = saturated","T−Td spread 細 = 近飽和","Condensation nuclei 必要","Dewpoint 隨升高降 0.5°C/1000ft"],["cloudbase","fog-rad"],"MET01; Robson ch2"),
// ---- Pressure & wind
T("pressure-sys","2 Pressure & Wind","Isobars & Gradient","等壓線愈密 = gradient 愈大 = 風愈強。",["Isobar 間距 2 或 4 hPa","Gradient force 由高到低","Surface chart = MSL pressure"],["coriolis","geostrophic"],"MET01; Robson ch7"),
T("coriolis","2 Pressure & Wind","Coriolis Force","地球自轉令風偏轉：北半球向右。",["赤道為零 (±5° 可忽略)","風愈快、緯度愈高愈強","南半球向左","解釋點解有 3 個 cell"],["geostrophic","hadley"],"MET01 p; Robson ch6"),
T("geostrophic","2 Pressure & Wind","Geostrophic Wind","Gradient＝Coriolis 平衡，風平行等壓線。",["NH：背風，低壓喺左 (Buys Ballot)","高空 >2000ft AGL 適用","Isobar 愈密風愈勁"],["pressure-sys","friction"],"Robson ch6"),
T("friction","2 Pressure & Wind","Surface Friction","近地面摩擦令風減速、偏向低壓。",["海面：減至 ~2/3，偏 ~10°","陸地：~1/2，偏 ~30°","摩擦層約 2000 ft AGL","夜晚風弱 veer、日間較似 gradient"],["geostrophic","highlow"],"Robson ch6"),
T("highlow","2 Pressure & Wind","High & Low Systems","NH：高壓順時針、發散下沉；低壓逆時針、輻合上升。",["High：穩定、好天、divergence","Low：cloud、rain、convergence","Ridge/Trough/Col","Low 風勁 gradient 大"],["inv-sub","extratropical","tc-form"],"MET01; Robson ch7; FAA ATP"),
T("hadley","2 Pressure & Wind","General Circulation","每個半球 3 個 cell：Hadley、Ferrel、Polar。",["赤道上升、30° 下沉 (subtropical high)","Trade winds 東風","Mid-lat westerlies","60° polar front"],["coriolis","itcz","jet"],"Robson ch1; FAA ATP"),
T("seabreeze","2 Pressure & Wind","Sea / Land Breeze","日間陸地熱 → 海風；夜間相反。",["Sea breeze 下午最強","Land breeze 較弱 <500ft 深","Sea breeze front 像 mini cold front"],["diurnal","inv-front"],"Robson ch6"),
T("katabatic","2 Pressure & Wind","Katabatic / Anabatic / Föhn","夜間冷空氣沿斜坡流下；日間上坡；föhn 乾暖。",["Katabatic：夜、冷、下坡","Anabatic：日、上坡","Föhn：lee 面暖乾"],["orographic","lapse"],"Robson ch6; FAA ATP"),
T("itcz","2 Pressure & Wind","ITCZ","兩半球 trade winds 輻合帶，Cb 雷暴多。",["Cloud 可至 tropopause","闊 200–300 nm","雷暴、squall、torrential rain","隨太陽南北移"],["hadley","tc-form","hk-monsoon"],"Robson ch8; MET05 p"),
// ---- Stability & cloud
T("lapse","3 Stability & Cloud","Lapse Rates","DALR 3°C/1000ft；SALR 1.5；ELR 實際環境。",["Unsaturated 升：DALR 3","Saturated 升：SALR ~1.5 (潛熱)","ELR 平均 2、可 1–4","Dewpoint 降 0.5/1000ft"],["stability","cloudbase"],"Robson ch2; ATP"),
T("stability","3 Stability & Cloud","Stability","Parcel 比環境暖就繼續升 = unstable。",["ELR>DALR：絕對 unstable","ELR<SALR：絕對 stable","介乎：conditionally unstable","Inversion 最 stable"],["lapse","cloud-types","ts-conditions"],"Robson ch2"),
T("cloudbase","3 Stability & Cloud","Cloud Base Formula","T 同 Td 每升 1000 ft 收窄 2.5°C。",["Base(ft)=(T−Td)/2.5×1000","例：17/12 → 2000 ft AGL","Base 係 AGL (METAR 亦 AAL)"],["humidity","lapse"],"Robson ch2; ATP"),
T("cloud-form","3 Stability & Cloud","How Clouds Form","潮濕空氣被抬升冷到 dewpoint 就成雲。",["Convection / Orographic","Turbulence mixing","Frontal widespread ascent (<30 ft/min)","Convergence (trough)"],["heat","orographic","stability"],"Robson ch2"),
T("orographic","3 Stability & Cloud","Orographic Lifting","氣流過山抬升成雲；lee 側下沉蒸發。",["Windward 有雲","Lenticular = 山波","Lee 側空氣暖乾 (föhn)"],["mountain-wave","katabatic"],"Robson ch2"),
T("cloud-types","3 Stability & Cloud","Cloud Types","Cumuliform = unstable 堆狀；Stratiform = stable 層狀。",["High >20k ft：Ci Cs Cc","Mid 7.5–20k：As Ac Ns","Low <7.5k：St Sc Cu Cb","Cb/Cu 底低、頂高"],["stability","precip"],"Robson ch2"),
T("cloud-amount","3 Stability & Cloud","Cloud Amount (Oktas)","天空分 8 份：FEW SCT BKN OVC。",["FEW 1–2, SCT 3–4","BKN 5–7, OVC 8","SKC 0 oktas","Ceiling = BKN/OVC 最低層"],["metar-cloud"],"MET06; Robson ch2"),
// ---- Fronts
T("airmass","4 Fronts & Air Masses","Air Masses","源地決定性質：c/m × T/P/A。",["cT 暖乾、cP 冷乾、cA 極冷乾","mT 暖濕、mP 冷濕、mA 極冷濕","移向冷面：穩定、RH 升","移向暖面：不穩定"],["stability","coldfront"],"MTE5 p9-10"),
T("coldfront","4 Fronts & Air Masses","Cold Front","冷空氣楔入暖空氣下；陡、快、Cb、雷暴。",["Slope ~1:75","風突變、壓力谷後升","溫度跌、陣雨、可有 squall line","過後 vis 好、轉晴"],["warmfront","ts-conditions","hk-fronts"],"MTE5 p22; Robson ch7"),
T("warmfront","4 Fronts & Air Masses","Warm Front","暖空氣爬上冷空氣；緩、廣闊層雲、持續雨。",["Slope ~1:200","Ci→Cs→As→Ns","雨前 ~150nm 開始","Frontal fog、freezing rain 風險"],["coldfront","fog-other","icing-cond"],"MTE5; Robson ch7"),
T("occlusion","4 Fronts & Air Masses","Occluded Front","Cold front 追上 warm front。",["Warm occlusion：embedded CB","Cold occlusion：冷鋒底入","兩種天氣都惡劣"],["coldfront","warmfront","extratropical"],"MTE5 p23-25"),
T("stationary","4 Fronts & Air Masses","Stationary Front","兩氣團對峙不動，層雲、毛毛雨。",["風平行 front","天氣平靜","可生 frontal wave"],["extratropical"],"MTE5 p14"),
T("extratropical","4 Fronts & Air Masses","Extratropical Cyclone","沿 polar front 出波；warm sector 夾住。",["Warm sector：St/Sc、drizzle","西→東移 (polar jet 帶動)","終必 occlude","Comma cloud 衛星圖"],["occlusion","jet","highlow"],"MTE5 p15-20"),
T("hk-fronts","4 Fronts & Air Masses","HK: Fronts","HK 見到冷鋒 (約 12–1 月)，冇 warm front。",["Winter monsoon cold front","MTE5 Q&A：冇 warm front","冷鋒後風轉 N/NE、跌溫"],["coldfront","hk-monsoon"],"MTE5 p16; HK",true),
// ---- Thunderstorm
T("ts-conditions","5 Thunderstorm","TS Conditions","三要素：unstable、moisture、lifting trigger。",["Deep instability (~20k ft)","Abundant moisture","Trigger：front、terrain、heating"],["stability","ts-life"],"MTE5 p2; Robson ch3"),
T("ts-life","5 Thunderstorm","TS Life Cycle","Cumulus → Mature → Dissipating。",["Cu：updraught 10–20 min","Mature：雨開始、20–40 min","Dissipating：全是 downdraught","Anvil 指向高空風"],["ts-conditions","ts-hazards"],"Robson ch3; MTE5"),
T("ts-types","5 Thunderstorm","TS Types","Single cell、multicell、supercell。",["Multicell：不同階段","Supercell：updraught 傾斜、持久","Line squall：非鋒面雷暴線","Gust front 觸發新 cell"],["ts-life","coldfront"],"MTE5 p2; Robson ch3"),
T("ts-hazards","5 Thunderstorm","TS Hazards","Windshear、乱流、icing、hail、lightning、低 vis。",["Hail 可被拋出 several nm","Lightning 影響 compass/ADF","St Elmo's fire / precip static","Severe clear icing"],["microburst","turb","icing-cond"],"Robson ch3; ATP"),
T("microburst","5 Thunderstorm","Microburst","局部強下衝流，≤4 km；headwind 變 tailwind。",["Downdraught up to ~6000 fpm","Outflow ~45 kt","Virga/dust ring 徵兆","通常 <15 min"],["windshear","ts-hazards"],"Robson ch3; ATP"),
T("ts-avoid","5 Thunderstorm","TS Avoidance","避開 ≥10 nm，嚴重 20 nm；絕不飛底。",["Weather radar 紅/黃 = 最強","風下方向更遠","唔好起降近雷暴","Turbulence penetration speed VB"],["ts-hazards","sigmet"],"Robson ch3; MTE5 p7"),
// ---- Visibility, precip, icing
T("vis","6 Vis, Precip & Icing","Visibility","可見最遠距離；slant vis 同 horizontal 唔同。",["Fog <1000 m, Mist 1–5 km","Haze <5 km (固體粒子)","RVR 用 transmissometer","Down-sun vis 好啲"],["fog-rad","mist-haze"],"MET03; Robson ch5"),
T("fog-rad","6 Vis, Precip & Icing","Radiation Fog","晴夜、微風 2–8 kt、T−Td 細、陸地。",["晚秋至早春","風 >10 kt 吹散或變 stratus","日出加熱消散","Overcast 或下雨唔會散"],["inv-rad","humidity"],"MET03 p; Robson ch5"),
T("fog-adv","6 Vis, Precip & Icing","Advection Fog","暖濕空氣吹過冷表面，風可至 15 kt。",["暖海→冷陸 (冬春)","暖陸→冷海 (夏秋)","可持久、日夜都有"],["fog-rad"],"MET03 p"),
T("fog-other","6 Vis, Precip & Icing","Other Fog Types","Orographic、steam、frontal、freezing、ice fog。",["Upslope：vis <200 m","Steam：冷空氣過暖水","Frontal：warm front 前","Freezing fog：過冷水滴"],["warmfront","icing-cond"],"MET03"),
T("mist-haze","6 Vis, Precip & Icing","Mist & Haze","Mist 1–5 km (水)；Haze <5 km (塵、污染)。",["Stable、輕風","T−Td 約 3°C","Inversion 下常見"],["vis","inv-rad"],"MET03"),
T("precip","6 Vis, Precip & Icing","Precipitation","Showers 來自 Cu/Cb；continuous 來自層雲。",["Drizzle 0.2–0.5 mm","Rain 0.5–5.5 mm","Hail 5–50 mm+","Virga 蒸發落唔到地"],["cloud-types","microburst"],"MET03; Robson ch2"),
T("icing-cond","6 Vis, Precip & Icing","Icing Conditions","要 visible moisture＋機身 ≤0°C。",["Freezing level = 0°C 高度","最差：freezing level 附近","Cb 內任何高度都可有","Cirrus 高冰晶風險低"],["rime","clear-ice","freezing-rain"],"MET03; Robson ch4"),
T("rime","6 Vis, Precip & Icing","Rime Ice","細過冷水滴即凍；白、脆、前緣。",["Light–moderate","-10~-20°C 常見","帶住空氣、輕"],["clear-ice","icing-cond"],"MET03 p; Robson ch4"),
T("clear-ice","6 Vis, Precip & Icing","Clear Ice","大過冷水滴流後凍；透明、硬、快積。",["Moderate–severe","最危險","0°C 附近"],["rime","freezing-rain"],"MET03 p; Robson ch4"),
T("freezing-rain","6 Vis, Precip & Icing","Freezing Rain","暖層落雨入冷層成過冷雨；Ice pellets 係警號。",["Warm front 下、inversion 下","立即離開","向暖空氣爬升或下降"],["clear-ice","warmfront"],"MET03 p; Robson ch4"),
T("frost","6 Vis, Precip & Icing","Frost / Hoar Frost","水汽直接 deposition 成霜；起飛前必除。",["清朗冷夜地面","爬/降入暖濕空氣亦會","破壞氣流 → 失升力"],["icing-cond","icing-haz"],"MET03; Robson ch4"),
T("icing-haz","6 Vis, Precip & Icing","Icing Hazards","加重、失升力、增阻、stall speed 升。",["CG 移位、control 卡住","Pitot/static 堵塞","天線、風擋受影響","耗油增加"],["icing-prot","frost"],"MET03 p"),
T("icing-prot","6 Vis, Precip & Icing","Ice Protection","Anti-ice (預防) 同 de-ice (除冰)。",["Boots、bleed air、電熱","化學液","Pitot heat 早開"],["icing-haz"],"MET03"),
// ---- Turbulence, shear, jet
T("turb","7 Turb, Shear & Jet","Turbulence","擾亂 attitude 但未改變航跡；分 light/mod/severe。",["Mechanical、convective、frontal","Inversion 附近","Light/Moderate/Severe","VB 乱流速度"],["windshear","cat"],"MET05 p; Robson ch6"),
T("windshear","7 Turb, Shear & Jet","Wind Shear","風向／風速突變，IAS 變 >15 kt 或 VSI ±500 fpm。",["TS、inversion、jet 都生","Virga/Cb 徵兆","HK：地形風切 (check)"],["microburst","inversion-effects","hk-windshear"],"MET05 p; FAA ATP"),
T("hk-windshear","7 Turb, Shear & Jet","HK: Terrain Windshear","HKIA 旁邊有 Lantau 山，地形致風切。",["報告用 WS 通告","LIDAR / Doppler 偵測","Cb 亦造成"],["windshear","tc-hazard"],"MTE5 p7; HK",true),
T("mountain-wave","7 Turb, Shear & Jet","Mountain Waves","強風 ≥25 kt 垂直過山＋穩定層。",["Lenticular、rotor cloud","Lee 側下沉 altimeter overread","波長 3–25 nm"],["orographic","altimeter-terrain"],"MET05; Robson ch6"),
T("cat","7 Turb, Shear & Jet","Clear Air Turbulence","高空乱流，無雲預警；與 jet 同山波有關。",["Shear >6 kt/1000ft 可 mod–sev","Jet 極側 shear 強","乘客繫安全帶"],["jet","turb"],"MET05 p; Robson ch6"),
T("jet","7 Turb, Shear & Jet","Jet Stream","tropopause 附近窄而快的西風帶。",["教材：>60 kt (FAA 50)","大溫度梯度處","冬季最強","位置隨季節"],["tropopause","jet-types","cat"],"MET05 p; FAA ATP",true),
T("jet-types","7 Turb, Shear & Jet","Jet Types","Polar jet、Subtropical jet、Equatorial jet。",["STJ 西風 ~120 kt, ~40k ft","Polar jet 波動，帶動 cyclone","Equatorial 東風 ~60 kt, 夏 (ITCZ 上)"],["jet","hk-monsoon"],"MET05 p",true),
// ---- HK / TC
T("tc-form","8 HK & Tropical Cyclone","TC Formation","暖海＋原有 depression＋輻合＋Coriolis。",["教材：海深 ≥50 m","SST ~27–28°C (Robson)","離赤道 >5° 才有 Coriolis","能量來自水汽"],["itcz","coriolis","tc-struct"],"MET05 p; Robson ch8"),
T("tc-struct","8 HK & Tropical Cyclone","TC Structure","Eye 最低壓、無雲；eyewall 最強風；spiral bands。",["NH 逆時針","Eye 下沉空氣","Top 輻散","Cb 帶＋storm surge"],["tc-form","tc-hazard"],"MET05 p"),
T("tc-hazard","8 HK & Tropical Cyclone","TC Hazards","Cb/TS、洪水、severe turb/icing、wind shear、hail。",["Lightning、storm surge","最差：右前象限 (NH)","SH 則左前象限"],["tc-struct","hk-windshear"],"MET05 p; Robson ch8"),
T("tc-move","8 HK & Tropical Cyclone","TC Movement","SE Asia 多向 NW，再轉向 NE。",["Subtropical high 引導","Kuroshio 暖流","難預測"],["tc-form","jet"],"MET05 p"),
T("tc-class","8 HK & Tropical Cyclone","HK TC Classification","TD→TS→STS→Typhoon→Severe→Super。",["Typhoon >64 kt","Severe ~80–100 kt","Super >100 kt"],["tc-form"],"MET05 p; HKO",true),
T("hk-signals","8 HK & Tropical Cyclone","HK TC Signals","HKO：1, 3, 8, 9, 10 號信號。",["No.1 Standby","No.3 Strong Wind","No.8 Gale/Storm","No.9 Increasing, No.10 Hurricane"],["tc-class","tc-hazard"],"HKO (非教材)",true),
T("hk-monsoon","8 HK & Tropical Cyclone","HK: Monsoons","冬 NE monsoon 乾冷；夏 SW/S monsoon 濕熱。",["冬：cold surge","夏：雷暴、豪雨","Trade winds 對比"],["itcz","hk-fronts"],"Robson ch8; HK",true),
T("hk-rain","8 HK & Tropical Cyclone","HK: Rainstorm Warnings","黃／紅／黑色暴雨警告。",["Amber/Red/Black","與 Cb、TC、monsoon 有關"],["ts-hazards","hk-monsoon"],"HKO (非教材)",true),
// ---- Altimetry
T("altimeter","9 Altimetry","Altimeter","Aneroid wafer 感測 static pressure。",["Static port 入氣壓","Setting 設定參考壓力","升 = wafer 膨脹","1000/100/10000 ft 指針"],["pressure-height","qcodes"],"MET06 p"),
T("qcodes","9 Altimetry","QNH / QFE / QNE","QNH→altitude；QFE→height；1013.25→FL。",["QNH：地面讀 elevation","QFE：地面讀 0","QNE/Standard：FL","Transition altitude 轉 setting"],["altimeter","pressure-err"],"MET01 Q-code; MET06"),
T("pressure-err","9 Altimetry","Pressure Error","High→Low watch out below：實際較低。",["1 mb ≈ 30 ft","Setting 高 → indicated 高","Flying to lower pressure: over-read"],["qcodes","temp-err"],"MET06 p"),
T("temp-err","9 Altimetry","Temperature Error","冷空氣 column 縮短 → 真高度低於 indicated。",["High→Low temp：over-read","Cold weather 加高度餘裕","~4 ft/1000ft/°C (rule)"],["pressure-err"],"MET06 p",true),
T("altimeter-terrain","9 Altimetry","Terrain Altimeter Error","山 lee 側 pressure 低 → over-read。",["Windward under-read","Lee over-read 小心"],["mountain-wave","pressure-err"],"MET06 p"),
// ---- Met coding
T("metar","10 Met Coding","METAR","每半小時／小時報告，UTC (Z)。",["ICAO→Date/Time→Wind→Vis→Wx→Cloud→T/Td→QNH","SPECI 在變化時發","Wind 為 True","Cloud AAL"],["metar-wind","metar-vis","metar-cloud","taf"],"MET06 p"),
T("metar-wind","10 Met Coding","METAR Wind","dddss(Ggg)KT；VRB、00000、dddVddd。",["28010KT = 280°/10kt","G = gust","VRB 風向不定","True north (ATIS 則磁)"],["metar"],"MET06 p"),
T("metar-vis","10 Met Coding","METAR Visibility & Wx","4 位數 m；9999 ≥10 km。",["+ heavy, - light","TS SH FZ BL MI BC VC","RA DZ SN GR FG BR HZ","R07R/P2000U = RVR"],["metar","vis"],"MET06 p"),
T("metar-cloud","10 Met Coding","METAR Cloud & Temp/QNH","FEW008 SCT025；CB 加後面；25/24 Q0990。",["VV = vertical visibility","T/Td，M = minus","Q = hPa, A = inHg","NSC/NSW/SKC"],["metar","cloud-amount"],"MET06 p; RJAA ATIS"),
T("cavok","10 Met Coding","CAVOK","Vis ≥10km、無雲<5000ft、無 CB/TCU、無 sigwx。",["Ceiling and Visibility OK","無降水"],["metar"],"MET06 p; Robson ch9"),
T("taf","10 Met Coding","TAF","9–30 小時預報，5nm 半徑；TX/TN 氣溫。",["0112/0218 = 01日12Z→02日18Z","TX27/0206Z","BECMG FM TEMPO PROB"],["trend","metar"],"MET06 p"),
T("trend","10 Met Coding","TAF Trend Groups","TEMPO、BECMG、FM、PROB、INTER、NOSIG。",["TEMPO <60 min","INTER <30 min (澳洲用語)","BECMG 漸變，FM 即轉","PROB30/40"],["taf"],"MET06 p; Robson ch9",true),
T("sigmet","10 Met Coding","SIGMET / AIRMET","危險天氣通告：TS、TC、severe turb/icing、volcanic ash。",["SIGMET：所有 aircraft","AIRMET (CASA) ：FL120 以下較輕","HK FIR 由 HKO 發 (check)"],["ts-hazards","tc-hazard","sigwx"],"Robson ch9; HK",true),
T("sigwx","10 Met Coding","SIGWX & Wind Charts","WAFC FL100–450：TS、TC、front、jet、tropopause、volcano。",["Wind/temp chart FL300 = 300 hPa","FL240 = 400 hPa","Wind chart 單位 knots, °C"],["sigmet","jet"],"MET06 p")
];
// ---- links
const links=[
["coriolis","hadley","Coriolis 令一個 cell 分成三個"],["hadley","itcz","兩 trade winds 輻合 = ITCZ"],["itcz","tc-form","ITCZ 低壓帶孕育 TC"],["tropopause","jet","Jet 喺 tropopause 附近、斷口處"],["jet","cat","Jet 邊緣 shear → CAT"],["jet","extratropical","Polar jet 帶動 cyclone 西→東"],
["lapse","stability","ELR 對比 DALR/SALR 決定 stable/unstable"],["stability","cloud-types","Unstable→Cu/Cb；Stable→St"],["stability","ts-conditions","Unstable 係雷暴必要條件"],["lapse","cloudbase","T−Td 每 1000ft 縮 2.5°C"],["humidity","fog-rad","T−Td 細→易起霧"],["inv-rad","fog-rad","晴夜 inversion 配合冷卻"],["inv-sub","highlow","高壓下沉形成 subsidence inversion"],["inv-sub","mist-haze","Inversion 蓋住污染成 haze"],
["coldfront","ts-conditions","Cold front 提供 lifting trigger"],["warmfront","freezing-rain","暖層落雨入冷層"],["warmfront","inv-front","暖空氣爬上冷空氣"],["occlusion","extratropical","Cyclone 終必 occlude"],["hk-fronts","hk-monsoon","冷鋒隨冬季 monsoon"],
["ts-life","ts-hazards","Mature stage 危險最大"],["microburst","windshear","Microburst 造成嚴重 shear"],["ts-hazards","icing-cond","Cb 過冷水大"],["precip","microburst","Virga 蒸發冷卻 → 下衝"],
["rime","clear-ice","水滴大小決定冰型"],["icing-haz","frost","霜破壞氣流→升力減"],["orographic","mountain-wave","過山氣流→波"],["mountain-wave","altimeter-terrain","Lee 側 pressure 低"],["tc-form","tc-struct","形成後 eye＋eyewall"],["tc-struct","tc-hazard","Eyewall＋spiral Cb"],["tc-class","hk-signals","強度對應信號"],["tc-hazard","hk-windshear","TC 增加 HKIA 風切"],
["pressure-height","altimeter","氣壓隨高度 → altimeter 原理"],["pressure-err","temp-err","兩個誤差同方向：High→Low 低飛"],["qcodes","pressure-err","設錯 QNH 即 pressure error"],
["metar","taf","METAR 觀測、TAF 預測"],["metar-vis","vis","Vis 與 RVR"],["sigmet","tc-hazard","TC 需 SIGMET"],["pressure-sys","geostrophic","Gradient 與 Coriolis 平衡"],["geostrophic","friction","近地面摩擦改變風向"],["heat","lapse","Heat transfer 解釋 lapse"],["seabreeze","inv-front","Sea-breeze front"],["katabatic","lapse","下坡空氣按 DALR 暖"]
];
// ---- cards
C("composition","🌬️","What are the main gases in the atmosphere?","Nitrogen 78%, oxygen 21%, and about 1% others, plus a variable amount of water vapour.","78/21/1，加水汽。");
C("composition","💧","How does humidity affect air density?","Water vapour is lighter than dry air, so moist air is less dense and aircraft performance is slightly worse.","濕空氣較輕，performance 差。");
C("layers","🛰️","Where does most weather occur?","In the troposphere, the lowest layer, where temperature decreases with height.","對流層。");
C("layers","🧪","Where is the ozone layer?","In the stratosphere, where it absorbs ultraviolet radiation.","Stratosphere。");
C("tropopause","📏","Describe the tropopause.","It is the boundary, not a layer, between troposphere and stratosphere; coldest temperature and strongest winds are found there.","邊界唔係層。");
C("tropopause","🌍","How does tropopause height vary?","About 54,000–60,000 ft at the equator and 20,000–27,000 ft at the poles; higher in summer.","赤道高、兩極低、夏高。");
C("isa","📐","State ISA sea level values.","1013.25 hPa, 15°C and 1.225 kg/m3; temperature falls 2°C per 1000 ft to 36,000 ft.","ISA 基本數值。");
C("isa","🧮","Calculate ISA temperature at 9,500 ft.","15 − 2×9.5 = −4°C.","用 15−2×(ft/1000)。");
C("isa","🧮","Actual temp at 8,500 ft is +5°C. What is the ISA deviation?","ISA at 8,500 ft is −2°C, so +5 is ISA+7.","5−(−2)=+7。");
C("isa","🧮","Deviation at 6,000 ft is ISA−10. What is actual temp?","ISA at 6,000 ft is +3°C; minus 10 gives −7°C.","3−10=−7。");
C("pressure-height","📉","How fast does pressure fall with height near the surface?","About 1 hPa per 30 ft up to roughly 5,000 ft.","低空 1 hPa=30 ft。");
C("density","✈️","Why does density matter to pilots?","It affects lift, engine power and breathing; high, hot, humid conditions reduce density and performance.","Density 低 = performance 差。");
C("heat","🔥","What is latent heat?","Heat absorbed or released when water changes state; condensation releases it and warms the air.","凝結放熱。");
C("heat","☀️","How is the atmosphere mainly heated?","Short-wave solar radiation heats the surface, which then heats the air by long-wave radiation, conduction and convection.","地面先熱再暖空氣。");
C("diurnal","🕒","When are daily maximum and minimum temperatures?","Maximum about mid-afternoon; minimum about one hour after sunrise.","下午 3 點／日出後。");
C("inv-rad","🌙","Conditions for a radiation inversion?","Clear sky, calm or light wind, and land surface at night.","晴夜、微風、陸地。");
C("inv-sub","⬇️","What causes a subsidence inversion?","Sinking air in a high-pressure system warms by compression, forming warm air above cooler air.","高壓下沉升溫。");
C("inv-front","🌫️","Where do frontal inversions occur?","Typically where warm air rides over cold air, most commonly at a warm front.","warm front。");
C("inversion-effects","⚠️","What are effects of flying through an inversion?","Wind shear, turbulence, density change affecting performance, and poor visibility below.","風切、乱流、performance 變。");
C("humidity","💦","Define dewpoint.","The temperature to which air must be cooled at constant pressure to become saturated.","冷到飽和嘅溫度。");
C("humidity","📈","What happens to RH as air cools?","Relative humidity increases, reaching 100% at the dewpoint.","降溫 RH 升。");
C("pressure-sys","🗺️","What do close isobars indicate?","A steep pressure gradient and therefore stronger wind.","風強。");
C("coriolis","🔄","What does Coriolis force do in the Northern Hemisphere?","It deflects moving air to the right; it is zero at the equator and increases with speed and latitude.","向右偏轉。");
C("geostrophic","🧭","State Buys Ballot's law for the Northern Hemisphere.","With your back to the wind, low pressure is on your left.","背風，低壓喺左。");
C("geostrophic","⚖️","What is geostrophic wind?","Balanced flow parallel to straight isobars, where pressure gradient force equals Coriolis force.","風平行等壓線。");
C("friction","🏙️","Why does surface wind cross isobars into a low?","Friction slows the wind, which reduces Coriolis, so the pressure gradient turns it toward low pressure.","摩擦令 Coriolis 減。");
C("friction","📐","How much does friction reduce wind over land and sea?","Over sea to about 2/3 with about 10° turn; over land to about 1/2 with about 30°.","海 2/3、陸 1/2。");
C("highlow","🔃","Circulation around highs and lows in the Northern Hemisphere?","Clockwise and diverging around highs; counterclockwise and converging around lows.","高順低逆。");
C("highlow","☁️","Typical weather in a high and in a low?","High: stable, subsiding, fair weather. Low: rising air, cloud and precipitation.","高穩定、低多雲雨。");
C("hadley","🌐","Name the three circulation cells.","Hadley, Ferrel (mid-latitude) and Polar cells in each hemisphere.","三個 cell。");
C("hadley","💨","What are trade winds?","Surface easterlies flowing toward the equatorial trough on the equator side of the subtropical high.","赤道向 trade wind 東風。");
C("seabreeze","🏖️","Explain a sea breeze.","Land heats faster by day, air rises over land, and cooler air flows in from the sea at low level.","日間陸熱海冷。");
C("katabatic","⛰️","What is a katabatic wind?","Cold dense air draining down a slope at night; anabatic is the daytime upslope wind.","夜間下坡冷風。");
C("katabatic","🌡️","What is a föhn wind?","A warm dry downslope wind on the lee side, warmed at DALR after losing moisture on the windward side.","lee 側暖乾風。");
C("itcz","⛈️","What is the ITCZ?","The zone where trade winds converge, with deep Cb, thunderstorms and heavy rain up to the tropopause.","trade winds 輻合帶。");
C("lapse","📊","State DALR, SALR and ISA lapse rate.","DALR about 3°C/1000 ft, SALR about 1.5°C/1000 ft, ISA 2°C/1000 ft.","3 / 1.5 / 2。");
C("lapse","❓","Why is SALR smaller than DALR?","Condensation releases latent heat which offsets cooling.","潛熱抵消。");
C("stability","⚖️","How do you judge stability?","Compare ELR with DALR and SALR: ELR>DALR unstable, ELR<SALR stable, between conditionally unstable.","ELR 對比。");
C("stability","🌤️","Characteristics of unstable air?","Cumuliform cloud, showers, turbulence and good visibility between showers.","堆狀雲、陣雨。");
C("stability","🌫️","Characteristics of stable air?","Stratiform cloud, steady rain, smooth flying and poor visibility.","層雲、穩定。");
C("cloudbase","🧮","Surface T 17, Td 12. Estimate cloud base.","Spread 5°C ÷ 2.5 = 2, so about 2,000 ft AGL.","5/2.5=2。");
C("cloudbase","🧮","T 28, Td 18: cloud base?","10 ÷ 2.5 × 1000 = 4,000 ft AGL.","10/2.5。");
C("cloud-form","☁️","Name four cloud-forming lifting mechanisms.","Convection, orographic lifting, frontal/widespread ascent and convergence.","四種 lifting。");
C("orographic","🏔️","What is a lenticular cloud?","A lens-shaped, almost stationary cloud at mountain wave crests; indicates strong turbulence.","山波標記。");
C("cloud-types","☁️","Cloud height groups?","High above 20,000 ft, middle 7,500–20,000 ft, low below 7,500 ft.","高中低。");
C("cloud-types","🌩️","Difference between cumuliform and stratiform?","Cumuliform are heaped from unstable air; stratiform are layered from stable air.","堆狀 vs 層狀。");
C("cloud-amount","🧮","Convert oktas to METAR terms.","FEW 1–2, SCT 3–4, BKN 5–7, OVC 8 oktas.","oktas 對應。");
C("airmass","🌎","What does mT mean?","Maritime tropical: warm and moist air mass.","暖濕。");
C("airmass","🌡️","What happens to an air mass moving to cooler surface?","It cools from below, becomes more stable and RH rises.","更穩定。");
C("coldfront","❄️","Weather at a cold front?","Cumulonimbus, showers or thunderstorms, wind shift, pressure rising and temperature drop.","雷暴、轉風、降溫。");
C("coldfront","📐","Compare slopes of cold and warm fronts.","Cold front about 1:75, warm front about 1:200.","冷陡暖緩。");
C("warmfront","🌥️","Cloud sequence ahead of warm front?","Cirrus, cirrostratus, altostratus then nimbostratus with continuous rain.","Ci→Cs→As→Ns。");
C("warmfront","🧊","Hazard below a warm front in sub-zero air?","Freezing rain causing severe clear ice.","freezing rain。");
C("occlusion","🔀","What is an occluded front?","A cold front overtaking a warm front, lifting the warm sector aloft.","冷鋒追上暖鋒。");
C("occlusion","⚠️","Difference warm vs cold occlusion?","Warm: air ahead is colder, cold front rises over it; cold: air ahead is warmer, cold front undercuts.","兩種 occlusion。");
C("stationary","⏸️","Stationary front weather?","Overcast stratus, light rain or drizzle and calm surface winds.","天氣平靜。");
C("extratropical","🌀","Weather in warm sector?","Overcast or broken St/Sc, drizzle, steady pressure and moderate to poor visibility.","St/Sc、毛毛雨。");
C("hk-fronts","🇭🇰","Does Hong Kong experience cold fronts and warm fronts?","Cold fronts yes (winter, around December–January); warm fronts, no (per course notes).","冷鋒有、暖鋒冇。",true);
C("ts-conditions","⚡","Three conditions for thunderstorm?","Unstable atmosphere, high moisture and a lifting trigger.","三要素。");
C("ts-life","⏱️","Describe the three stages of a thunderstorm.","Cumulus: updraughts only; Mature: updraught and downdraught with rain; Dissipating: downdraughts only.","三階段。");
C("ts-life","🌧️","What indicates mature stage?","Rain starting to fall from the cloud base and first lightning.","開始落雨。");
C("ts-types","🌪️","Types of thunderstorm?","Single cell, multicell and supercell.","三類。");
C("ts-types","📏","What is a line squall?","A non-frontal band of active thunderstorms, often ahead of a cold front.","雷暴線。");
C("ts-hazards","⚠️","List thunderstorm hazards.","Wind shear, severe turbulence, severe icing, hail, lightning, low visibility and precipitation static.","雷暴危險。");
C("ts-avoid","📡","How far to avoid a thunderstorm?","At least 10 nm, and 20 nm or more for severe storms.","10–20 nm。");
C("microburst","⬇️","What is a microburst?","A localized strong downdraft not exceeding 4 km that spreads outward at ground, causing sudden headwind-to-tailwind shear.","局部下衝氣流。");
C("microburst","✈️","What happens to an aircraft penetrating a microburst?","IAS rises first from headwind, then drops with downdraught and tailwind, risking descent and stall.","先升後急降。");
C("vis","👁️","Define fog, mist and haze.","Fog: vis <1000 m water droplets; mist: 1000–5000 m; haze: solid particles reducing vis below 5000 m.","霧、薄霧、霾。");
C("fog-rad","🌫️","Conditions for radiation fog?","Clear night, light wind 2–8 kt, small T−Td spread, over land.","晴夜微風。");
C("fog-rad","🌅","How does radiation fog clear?","By surface heating after sunrise or wind above about 10 kt; not under overcast or rain.","日出消散。");
C("fog-adv","🌊","How does advection fog form?","Warm moist air moving over a colder surface, with wind up to about 15 kt.","暖濕空氣過冷面。");
C("fog-other","🏔️","What is orographic fog?","Moist air forced up a slope cools to its dewpoint; visibility often below 200 m.","上坡霧。");
C("fog-other","❄️","What is freezing fog?","Fog of supercooled droplets that freeze on contact; ice fog consists of ice crystals.","過冷水滴霧。");
C("mist-haze","🌁","Typical T−Td for fog formation?","About 3°C or less, with stable conditions and light wind.","約 3°C。");
C("precip","🌧️","Showers versus continuous rain?","Showers come from cumuliform cloud and are short; continuous rain from layer cloud such as Ns.","陣雨 vs 持續雨。");
C("precip","🍂","What is virga?","Precipitation that evaporates before reaching ground; can cause cold downdraught.","蒸發雨。");
C("icing-cond","🧊","Conditions for airframe icing?","Visible moisture and airframe temperature at or below 0°C.","水份＋0°C以下。");
C("icing-cond","🌡️","Estimate freezing level: +8°C at 5000 ft.","8°C ÷ 2 = 4000 ft up, so 9,000 ft AMSL.","8/2=4。");
C("rime","⬜","Describe rime ice.","White, brittle ice from small supercooled droplets freezing instantly; usually on leading edges.","白色脆。");
C("clear-ice","🔷","Describe clear ice.","Transparent, hard ice from larger supercooled droplets; severe and quick-forming.","透明堅硬。");
C("freezing-rain","🌧️","What do ice pellets indicate?","Rain falling through a below-freezing layer, meaning warmer air with freezing rain above.","上面有暖層。");
C("frost","🧊","Why remove frost before takeoff?","Frost disrupts airflow, causing early separation and loss of lift.","霜令升力降。");
C("icing-haz","⚠️","Effects of icing?","More weight, less lift, more drag, higher stall speed, blocked pitot/static and CG shift.","icing 影響。");
C("icing-prot","🛡️","Anti-ice vs de-ice?","Anti-ice prevents formation; de-ice removes ice already formed.","預防 vs 除冰。");
C("turb","🌪️","Define turbulence.","Variations in wind that disturb attitude but do not significantly change flight path.","乱流定義。");
C("windshear","📉","Define severe wind shear.","Sudden wind change causing IAS change >15 kt or vertical speed change >500 fpm.","15 kt/500 fpm。");
C("hk-windshear","🇭🇰","Why is windshear a concern at VHHH?","Terrain around Lantau and convective storms cause shear; reports include WS advisories (check).","地形風切。",true);
C("mountain-wave","⛰️","Conditions for mountain waves?","Wind ≥25 kt across a range with stable layer above; lenticular and rotor clouds appear.","強風＋穩定層。");
C("cat","🌌","What is CAT?","High-altitude turbulence without cloud, associated with jet streams; shear >6 kt per 1000 ft.","晴空乱流。");
C("jet","🌀","Define a jet stream.","A narrow band of strong wind near the tropopause, over 60 kt (FAA says 50 kt).","tropopause 強風。",true);
C("jet","🧭","Where are jet streams located?","At the tropopause where there is a large horizontal temperature gradient; strongest in winter.","溫差大處。");
C("jet-types","⚡","Name the jet streams.","Polar jet, subtropical jet and equatorial jet; the equatorial jet is easterly.","三個 jet。");
C("tc-form","🌀","Conditions for typhoon formation?","Warm deep ocean, tropical depression, surface convergence and Coriolis force.","暖海＋輻合＋Coriolis。");
C("tc-form","🌡️","Minimum latitude and SST?","Beyond about 5° latitude and sea temp about 27–28°C.","約 5° 及 27°C。");
C("tc-struct","👁️","Describe eye of a tropical cyclone.","Lowest pressure, calm, little or no cloud, with sinking air; eyewall has strongest winds.","眼無雲。");
C("tc-struct","🔄","Direction of rotation in NH?","Counterclockwise.","逆時針。");
C("tc-hazard","⚠️","Which quadrant is worst?","The right forward quadrant in the Northern Hemisphere.","右前象限。");
C("tc-move","🧭","How do typhoons near SE Asia move?","Generally northwest, then recurving to northeast.","NW 然後 NE。");
C("tc-class","📊","HK tropical cyclone classes?","Tropical depression, tropical storm, severe tropical storm, typhoon, severe typhoon, super typhoon.","六級。",true);
C("hk-signals","🚩","HK TC signals?","No.1 Standby, No.3 Strong Wind, No.8 Gale or Storm, No.9 Increasing Gale or Storm, No.10 Hurricane.","1/3/8/9/10。",true);
C("hk-monsoon","🌧️","HK summer vs winter monsoon?","Winter NE monsoon is cool and dry; summer southwesterly/southerly flow is hot, humid and convective.","冬乾冷夏濕熱。",true);
C("hk-rain","☔","HK rainstorm warnings?","Amber, Red and Black in increasing severity.","黃紅黑。",true);
C("altimeter","⏱️","How does an altimeter work?","Aneroid wafers sense static pressure compared with the set reference pressure.","wafer 感壓。");
C("qcodes","🔤","QNH, QFE and QNE?","QNH gives altitude, QFE height above aerodrome, QNE (1013.25) flight level.","三個 Q code。");
C("qcodes","🔧","Setting 1013 above transition altitude?","Standard setting is used so FL separation is consistent.","高空用 1013。");
C("pressure-err","🧮","Flying 1025→1015 mb at indicated 5000 ft; true alt?","10 mb × 30 ft = 300 ft lower, about 4,700 ft.","低 300 ft。");
C("pressure-err","🧮","1020→1008 mb at 5000 ft; true alt?","12 mb × 30 = 360 ft lower, about 4,640 ft.","12×30。");
C("pressure-err","🧮","1004→1008 mb at 2000 ft: indicated vs true?","Indicated is lower than true (under-reads) by about 120 ft.","4×30。");
C("pressure-err","🧮","A elev 0 at 1013; B elev 1200 at 993; indicated 7000: clearance?","20 mb = 600 ft; true 6,400; clearance 5,200 ft.","6400−1200。");
C("pressure-err","⚠️","'High to Low' rule?","Flying high to low pressure (or hot to cold), altimeter over-reads: you are lower than indicated.","High→Low 低飛。");
C("temp-err","🧊","Effect of cold temperature on altimeter?","Cold air is denser column shorter so true altitude is lower than indicated.","冷天真高度低。",true);
C("altimeter-terrain","⛰️","Altimeter error on lee side of mountains?","Lower pressure on lee side causes over-reading, so true altitude is lower.","lee 側 over-read。");
C("metar","📡","What does METAR provide?","Observed aerodrome weather, issued half-hourly or hourly in UTC (Z).","機場實測。");
C("metar-wind","🌬️","Decode 31015G30KT 280V350.","Wind from 310° at 15 kt gusting 30, varying between 280° and 350°.","gust 同 variation。");
C("metar-wind","🧭","Is METAR wind true or magnetic?","True; ATIS winds are magnetic.","METAR 真北。");
C("metar-vis","👁️","What does 9999 mean in METAR?","Visibility 10 km or more.","≥10 km。");
C("metar-vis","🌧️","Decode +SHRA TSRA.","Heavy rain showers and thunderstorm with rain.","大陣雨及雷暴。");
C("metar-cloud","☁️","Decode FEW008 SCT025 BKN040.","1–2 oktas at 800 ft, 3–4 oktas at 2,500 ft, 5–7 oktas at 4,000 ft.","FEW/SCT/BKN。");
C("metar-cloud","🌡️","Decode 25/24 Q0990.","Temp 25°C, dewpoint 24°C, QNH 990 hPa.","Q0990 = 990 hPa。");
C("cavok","✅","Define CAVOK.","Vis ≥10 km, no cloud below 5000 ft or MSA, no CB/TCU, no significant weather.","CAVOK 條件。");
C("taf","📅","Decode TAF validity 0112/0218.","From 12Z on the 1st to 18Z on the 2nd (30 hours).","30 小時。");
C("taf","🌡️","Decode TX27/0206Z.","Maximum temperature 27°C forecast at 06Z on the 2nd.","最高溫。");
C("trend","🔄","BECMG vs TEMPO?","BECMG is a gradual lasting change; TEMPO is temporary, each less than 60 min.","漸變 vs 暫時。");
C("trend","❓","PROB40?","40% probability of the stated conditions.","40%。");
C("sigmet","🚨","What triggers a SIGMET?","Thunderstorms, tropical cyclone, severe turbulence or icing, mountain wave, dust/sand storm, volcanic ash.","SIGMET 內容。",true);
C("sigwx","🗺️","Pressure for FL300 chart?","300 hPa; FL240 is 400 hPa.","FL300=300hPa。");
C("sigwx","📋","What does SIGWX show?","Thunderstorms, tropical cyclones, fronts, jet streams, tropopause height and volcanic activity.","sigwx 內容。");
const E=(H,svg,tag,a)=>H.el(tag,a,svg);
const TX=(H,svg,x,y,s,fill,sz,anchor)=>{const t=H.el("text",{x,y,fill:fill||"#e2e8f0","font-size":sz||13,"text-anchor":anchor||"start"},svg);t.textContent=s;return t};
const anims=[
{title:"Lapse rate：氣塊上升 (stable / unstable)",hint:"拉 ELR 滑桿，睇 parcel 升到邊",build(box,H){
 const svg=H.svg(box,700,320),say=H.note(box);
 const X=t=>60+(t+10)*18, Y=h=>290-h*26; // temp -10..22, h 0..10 (k ft)
 E(H,svg,"line",{x1:60,y1:290,x2:640,y2:290,stroke:"#64748b"});E(H,svg,"line",{x1:60,y1:290,x2:60,y2:20,stroke:"#64748b"});
 TX(H,svg,300,312,"Temperature →",null,12);TX(H,svg,8,30,"ft ×1000",null,11);
 const env=E(H,svg,"polyline",{fill:"none",stroke:"#38bdf8","stroke-width":3});
 const par=E(H,svg,"polyline",{fill:"none",stroke:"#f97316","stroke-width":3,"stroke-dasharray":"6 4"});
 const dot=E(H,svg,"circle",{r:8,fill:"#fbbf24"});
 const cb=E(H,svg,"line",{stroke:"#a5b4fc","stroke-dasharray":"3 3"});const cbt=TX(H,svg,0,0,"cloud base","#a5b4fc",12);
 TX(H,svg,470,40,"— Environment (ELR)","#38bdf8",13);TX(H,svg,470,60,"-- Parcel (DALR → SALR)","#f97316",13);
 const T0=20,Td=12,base=(T0-Td)/2.5; let t=0,top=0,target=0;
 const pT=h=>h<=base?T0-3*h:T0-3*base-1.5*(h-base);
 let elr=2;
 function calc(){ // env starts 1 deg cooler than parcel
  const eT=h=>T0-1-elr*h; let pts="",pp="";
  for(let h=0;h<=10;h+=0.25){pts+=X(eT(h))+","+Y(h)+" ";pp+=X(pT(h))+","+Y(h)+" "}
  env.setAttribute("points",pts);par.setAttribute("points",pp);
  target=0;for(let h=0;h<=10;h+=0.05){if(pT(h)>eT(h))target=h;else break}
  cb.setAttribute("x1",60);cb.setAttribute("x2",640);cb.setAttribute("y1",Y(base));cb.setAttribute("y2",Y(base));cbt.setAttribute("x",520);cbt.setAttribute("y",Y(base)-4);
  t=0;
  say(elr>3?"ELR 大過 DALR：絕對 unstable，parcel 一路升 (Cb)":elr<1.5?"ELR 細過 SALR：絕對 stable，parcel 好快停 (層雲)":"ELR 喺 DALR 同 SALR 之間：conditionally unstable，過咗 cloud base 先加速 ("+(target>=10?">":"升到 ~")+target.toFixed(1)+"k ft)")}
 H.slider(box,"ELR °C/1000ft",0.5,4,2,v=>{elr=v;calc()},0.1);
 H.button(box,"▶ 重放",()=>{t=0});
 H.loop(()=>{t=Math.min(t+0.04,target);const h=Math.min(t,10);dot.setAttribute("cx",X(pT(h)));dot.setAttribute("cy",Y(h))});
}},
{title:"Cold / Warm front 剖面",hint:"切換類型，拖動觀察者位置",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 E(H,svg,"rect",{x:0,y:250,width:700,height:20,fill:"#475569"});
 const air=E(H,svg,"polygon",{fill:"#38bdf8","fill-opacity":.35,stroke:"#38bdf8"});
 const warm=TX(H,svg,300,60,"Warm air","#fb923c",16),cold=TX(H,svg,90,235,"Cold air","#38bdf8",14);
 const cl=E(H,svg,"g",{});const rain=E(H,svg,"g",{});
 const ob=E(H,svg,"path",{d:"M-8,0 L8,0 L0,-22Z",fill:"#fbbf24"});
 const dirT=TX(H,svg,20,24,"","#e2e8f0",13);
 let type="cold",pos=50;
 function clouds(list){cl.innerHTML="";rain.innerHTML="";list.forEach(c=>{E(H,cl,"ellipse",{cx:c[0],cy:c[1],rx:c[2],ry:c[3],fill:c[4]||"#cbd5e1","fill-opacity":.85});})}
 function draw(){
  if(type==="cold"){ // steep wedge, front moves right; cold on left
   const fx=350;air.setAttribute("points",`0,250 ${fx+40},250 ${fx-60},90 0,90`);
   clouds([[fx+10,120,40,38,"#94a3b8"],[fx+30,170,50,40,"#64748b"],[fx+70,215,40,25]]);
   for(let i=0;i<7;i++)E(H,rain,"line",{x1:fx+20+i*10,y1:200,x2:fx+14+i*10,y2:245,stroke:"#38bdf8"});
   dirT.textContent="COLD FRONT →  (cold air undercuts, slope ~1:75)";
   say(pos<45?"Front 前 (warm sector)：壓力跌、風增強、Cu 發展":pos<65?"Front 通過：Cb、陣雨／雷暴、風突轉、壓力最低後急升":"Front 後：溫度跌、壓力升、vis 好、雲散")
  }else{
   air.setAttribute("points","0,250 690,250 380,235 250,210 90,170 0,160");
   clouds([[120,60,90,12,"#e2e8f0"],[200,100,80,16,"#cbd5e1"],[280,140,80,18,"#94a3b8"],[340,190,70,26,"#64748b"]]);
   for(let i=0;i<10;i++)E(H,rain,"line",{x1:260+i*12,y1:200,x2:254+i*12,y2:245,stroke:"#38bdf8"});
   dirT.textContent="WARM FRONT →  (warm air rides over cold, slope ~1:200)";
   say(pos<30?"遠前：Ci→Cs，壓力開始跌":pos<60?"As→Ns：持續雨、低雲、vis 差 (frontal fog／freezing rain 風險)":"Front 通過後：暖區 St／Sc、毛毛雨、壓力穩定")}
 }
 function mv(){ob.setAttribute("transform",`translate(${40+pos*6.2},248)`);draw()}
 H.button(box,"Cold front",()=>{type="cold";mv()});H.button(box,"Warm front",()=>{type="warm";mv()});
 H.slider(box,"觀察者位置",0,100,50,v=>{pos=v;mv()});
}},
{title:"Thunderstorm 三個階段",hint:"拉階段滑桿 (Cu → Mature → Dissipating)",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 E(H,svg,"rect",{x:0,y:260,width:700,height:20,fill:"#475569"});
 const cloud=E(H,svg,"path",{fill:"#94a3b8","fill-opacity":.9});const anvil=E(H,svg,"ellipse",{cx:350,cy:60,rx:0,ry:12,fill:"#cbd5e1"});
 const ups=[],dns=[];for(let i=0;i<3;i++){ups.push(E(H,svg,"path",{stroke:"#ef4444","stroke-width":4,fill:"none","marker-end":"url(#au)"}));dns.push(E(H,svg,"path",{stroke:"#38bdf8","stroke-width":4,fill:"none","marker-end":"url(#ad)"}))}
 H.marker(svg,"au","#ef4444");H.marker(svg,"ad","#38bdf8");
 const rain=E(H,svg,"g",{});const lab=TX(H,svg,20,26,"","#fbbf24",16);
 let s=10,ph=0;
 function upd(){
  const top=s<40?200-s*2.2:60;const w=s<40?50+s:s<75?100:100-(s-75)*2;
  cloud.setAttribute("d",`M${350-w},260 L${350-w*0.8},${top+40} Q350,${top-20} ${350+w*0.8},${top+40} L${350+w},260Z`);
  anvil.setAttribute("rx",s>=40&&s<85?(s-40)*2.8:s>=85?126-(s-85)*4:0);anvil.setAttribute("cy",top+8);
  const upA=s<75?1:Math.max(0,1-(s-75)/20),dnA=s<40?0:s<75?1:1;
  rain.innerHTML="";if(s>=45)for(let i=0;i<12;i++)E(H,rain,"line",{x1:300+i*9,y1:215,x2:296+i*9,y2:255,stroke:"#38bdf8","stroke-opacity":Math.min(1,(s-40)/20)*(s>90?.5:1)});
  ups.forEach((u,i)=>{const x=320+i*30;u.setAttribute("d",`M${x},255 L${x},${255-110*upA-10}`);u.style.opacity=upA>0.05?1:0});
  dns.forEach((d,i)=>{const x=315+i*35;d.setAttribute("d",`M${x},${top+60} L${x},235`);d.style.opacity=dnA&&s>=45?1:0});
  lab.textContent=s<40?"1. Cumulus stage — updraught only (10–20 min)":s<75?"2. Mature — up + down, rain, lightning (20–40 min)":"3. Dissipating — downdraught only";
  say(s<40?"潛熱令 cloud 暖過環境，一路向上；仲未有雨":s<75?"雨拖落冷空氣 → downdraught；shear 最大、hail、microburst、gust front":"Downdraught 壓死 updraught，cloud 坍塌成層雲")}
 H.slider(box,"階段",0,100,10,v=>{s=v;upd()});
}},
{title:"Icing 類型：rime / clear / mixed",hint:"調溫度同水滴大小",build(box,H){
 const svg=H.svg(box,700,260),say=H.note(box);
 H.el("path",{d:"M120,130 C220,95 480,100 600,128 C480,150 220,160 120,130Z",fill:"#e2e8f0"},svg);
 TX(H,svg,100,230,"← airflow     leading edge ·",null,12);
 const ice=E(H,svg,"path",{fill:"#fff","fill-opacity":.9,stroke:"#7dd3fc"});const lab=TX(H,svg,20,26,"","#fbbf24",16);
 for(let i=0;i<8;i++)E(H,svg,"line",{x1:20,y1:70+i*15,x2:100,y2:70+i*15,stroke:"#38bdf8","stroke-dasharray":"6 6"});
 let T=-12,D=3;
 function upd(){
  let type,thick;
  if(T>0){type="No ice (>0°C)";thick=0}else if(D<=3){type=T<-10?"RIME — 白、脆、前緣":"Mixed";thick=8+D*3}else if(D>=7&&T>-12){type="CLEAR — 透明、硬、快積";thick=20+D*3}else{type="MIXED — rime + clear";thick=14+D*3}
  const f=T<-12?"#ffffff":"#bae6fd";ice.setAttribute("fill",type.startsWith("CLEAR")?"#bae6fd":"#ffffff");
  ice.setAttribute("d",thick?`M120,130 C110,${130-thick} 135,${100-thick} 200,${108-thick/2} L200,112 C150,115 135,125 120,130Z M120,130 C110,${130+thick} 135,${150+thick*0.4} 200,${142+thick/3} L200,138 C150,135 135,128 120,130Z`:"");
  lab.textContent=type;say("溫度 "+T+"°C · 水滴大小 "+D+"/10；細滴→rime，大滴／近 0°C→clear；freezing rain 最差")}
 H.slider(box,"Temp °C",-30,2,-12,v=>{T=v;upd()});H.slider(box,"Droplet size",1,10,3,v=>{D=v;upd()});
}},
{title:"Altimeter setting 錯誤 → 實際高度",hint:"改目的地氣壓、氣溫偏差",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const gr=E(H,svg,"polygon",{fill:"#475569"});const ac=E(H,svg,"path",{d:"M-24,0 L24,0 L14,-10 L-14,-10Z",fill:"#fbbf24"});
 const il=E(H,svg,"line",{x1:0,x2:700,stroke:"#38bdf8","stroke-dasharray":"6 4"});const it=TX(H,svg,10,0,"","#38bdf8",13);
 const tl=TX(H,svg,10,0,"","#fbbf24",13);const arr=E(H,svg,"line",{stroke:"#ef4444","stroke-width":3});
 let p=1013,d=0;
 function upd(){
  const ind=5000,tr=ind+(p-1013)*30; const tt=tr*(1+0.004*d)-0; // d = ISA dev: warmer -> true higher
  const y=v=>270-v/30*1.0; const yi=y(ind),yt=y(tt);
  gr.setAttribute("points","0,270 700,270 700,300 0,300");
  il.setAttribute("y1",yi);il.setAttribute("y2",yi);it.setAttribute("y",yi-6);it.textContent="Indicated 5000 ft (set 1013)";
  ac.setAttribute("transform",`translate(560,${yt})`);tl.setAttribute("x",330);tl.setAttribute("y",yt+22);tl.textContent="TRUE ≈ "+Math.round(tt)+" ft";
  arr.setAttribute("x1",610);arr.setAttribute("x2",610);arr.setAttribute("y1",yi);arr.setAttribute("y2",yt);
  say((p<1013?"Flying High→Low：實際低過 indicated (over-read)，watch out below. ":p>1013?"Low→High：實際高過 indicated (under-read). ":"")+(d<0?"凍空氣：額外降低。":d>0?"暖空氣：真高度偏高。":""))}
 H.slider(box,"Pressure at destination hPa",980,1040,1013,v=>{p=v;upd()});
 H.slider(box,"ISA deviation °C (rule 0.4%/°C)",-30,30,0,v=>{d=v;upd()});
}},
{title:"METAR 逐段解碼 (VHHH 風暴例)",hint:"點每段睇意思",build(box,H){
 const toks=[["VHHH","機場 ICAO：Hong Kong Intl"],["011347Z","日期 01 日 13:47 UTC"],["36039G62KT","風 360° (真北) 39 kt，陣風 62 kt"],["1800","Visibility 1800 m"],["R07R/P2000U","RVR 07R：多於 2000 m，趨勢上升"],["+SHRA","Heavy rain showers"],["FEW008","1–2 oktas at 800 ft"],["SCT025","3–4 oktas at 2500 ft"],["25/24","Temp 25°C / Dewpoint 24°C (幾乎飽和)"],["Q0990","QNH 990 hPa (好低 → TC!)"],["TEMPO","暫時變化 (<60 min)"],["36055G75KT","TEMPO：風 55G75 kt"],["TSRA","TEMPO：雷暴＋雨"],["FEW008CB","CB at 800 ft = 雷暴雲"]];
 const wrap=document.createElement("div");wrap.style.cssText="display:flex;flex-wrap:wrap;gap:6px;margin:8px 0";box.appendChild(wrap);
 const say=H.note(box);const out=document.createElement("div");out.style.cssText="padding:10px;border-radius:8px;background:#1e293b;color:#fbbf24;font-size:15px;min-height:24px";box.appendChild(out);
 toks.forEach((t,i)=>{const b=document.createElement("button");b.className="b g";b.textContent=t[0];b.onclick=()=>{[...wrap.children].forEach(c=>c.style.outline="");b.style.outline="3px solid #fbbf24";out.textContent=t[0]+" → "+t[1];say("第 "+(i+1)+"/"+toks.length+" 段")};wrap.appendChild(b)});
 say("order：ICAO · date/time · wind · vis · RVR · wx · cloud · T/Td · QNH · trend");
}},
{title:"Tropical Cyclone 結構＋HK 信號",hint:"拉強度；撳信號",build(box,H){
 const svg=H.svg(box,700,320),say=H.note(box);
 const cx=240,cy=160;
 const bands=[];for(let i=0;i<3;i++)bands.push(E(H,svg,"path",{fill:"none",stroke:"#93c5fd","stroke-width":8-i*2,"stroke-opacity":.7}));
 const wall=E(H,svg,"circle",{cx,cy,r:28,fill:"none",stroke:"#ef4444","stroke-width":10});E(H,svg,"circle",{cx,cy,r:16,fill:"#0f172a"});
 TX(H,svg,cx,cy+4,"EYE","#e2e8f0",11,"middle");
 const q=E(H,svg,"path",{d:`M${cx},${cy} L${cx+120},${cy} A120 120 0 0 0 ${cx},${cy-120}Z`,fill:"#f97316","fill-opacity":.3});
 TX(H,svg,cx+40,cy-60,"右前 quadrant","#fb923c",12);
 E(H,svg,"path",{d:`M${cx+20},${cy-130} L${cx+20},${cy-165}`,stroke:"#fbbf24","stroke-width":3,"marker-end":"url(#mv)"});H.marker(svg,"mv","#fbbf24");TX(H,svg,cx+30,cy-165,"移動方向 (NW)","#fbbf24",12);
 const info=TX(H,svg,420,60,"","#fbbf24",16),info2=TX(H,svg,420,90,"","#e2e8f0",13);
 let ang=0,kt=70;
 function cls(k){return k<34?"Tropical Depression":k<48?"Tropical Storm":k<64?"Severe Tropical Storm":k<81?"Typhoon":k<100?"Severe Typhoon":"Super Typhoon"}
 H.loop(()=>{ang+=0.03+kt/4000;bands.forEach((b,i)=>{let d="";for(let a=0;a<4.5;a+=0.2){const r=40+a*(14+i*3)+i*8,t=a*1.3+ang+i*2.1;d+=(a?"L":"M")+(cx+r*Math.cos(t)).toFixed(1)+","+(cy-r*Math.sin(t)).toFixed(1)}b.setAttribute("d",d)})});
 H.slider(box,"Max wind kt",20,130,70,v=>{kt=v;wall.setAttribute("r",34-Math.min(v,120)/8);info.textContent=cls(v)+" · "+v+" kt";info2.textContent="NH 逆時針；風向 eyewall 最強，eye 最低壓、無雲";say("Typhoon 由 64 kt 起；ST ~80–100；Super >100 (教材／HKO，部分待驗證)")});
 [["No.1 Standby","TC 距 HK ~800 km 內，會影響 HK (HKO，待驗證)"],["No.3 Strong Wind","持續風 41–62 km/h 或預料 (HKO，待驗證)"],["No.8 Gale/Storm","風力 34–63 kt (NE/NW/SE/SW)；機場大量影響"],["No.9 Increasing","風力預料顯著增強"],["No.10 Hurricane","風力 ≥64 kt"]].forEach(s=>H.button(box,s[0],()=>say(s[0]+"：" + s[1])));
}},
{title:"Global circulation (Hadley / Ferrel / Polar)",hint:"揀 cell；睇空氣循環",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const cells=[{n:"Hadley",c:"#fb923c",x0:60,x1:240,txt:"Hadley (0–30°)：赤道上升 (ITCZ)，30° 下沉 (subtropical high)，地面 trade winds 向赤道"},{n:"Ferrel",c:"#4ade80",x0:240,x1:420,txt:"Ferrel (30–60°)：地面 westerlies，60° 上升，間接 cell"},{n:"Polar",c:"#60a5fa",x0:420,x1:600,txt:"Polar (60–90°)：極地下沉冷空氣，地面 polar easterlies"}];
 E(H,svg,"rect",{x:60,y:240,width:540,height:10,fill:"#475569"});
 ["0°","30°","60°","90°N"].forEach((s,i)=>TX(H,svg,60+i*180,268,s,null,12,"middle"));
 const pts=[];let sel=-1;
 cells.forEach((c,i)=>{const r=E(H,svg,"ellipse",{cx:(c.x0+c.x1)/2,cy:150,rx:(c.x1-c.x0)/2-14,ry:80,fill:"none",stroke:c.c,"stroke-width":2,"stroke-opacity":.5});c.el=r;
  for(let k=0;k<8;k++)pts.push({c,i,d:E(H,svg,"circle",{r:4,fill:c.c}),t:k/8*6.283})});
 H.loop(()=>{pts.forEach(p=>{p.t+=0.02;const cx=(p.c.x0+p.c.x1)/2,rx=(p.c.x1-p.c.x0)/2-14;const dir=p.i===1?-1:1;p.d.setAttribute("cx",cx+dir*rx*Math.cos(p.t));p.d.setAttribute("cy",150-80*Math.sin(p.t));p.d.setAttribute("opacity",sel<0||sel===p.i?1:.15)})});
 TX(H,svg,60,215,"L","#ef4444",14);TX(H,svg,235,60,"H","#60a5fa",14);TX(H,svg,415,215,"L","#ef4444",14);TX(H,svg,585,60,"H","#60a5fa",14);
 cells.forEach((c,i)=>H.button(box,c.n,()=>{sel=i;cells.forEach((k,j)=>k.el.setAttribute("stroke-width",j===i?5:2));say(c.txt)}));
 say("Coriolis 令單一 cell 分成三個；30° 下沉 = 沙漠／subtropical high");
}}
];
Cadet.add({key:"met",name:"Meteorology",emoji:"⛈️",color:"#60a5fa",
 src:"Airspace MET01/03/05/06/MTE5 · Aviation Theory Centre Meteorology · FAA ATP Test Prep",
 topics,links:links.map(l=>["met."+l[0],"met."+l[1],l[2]]),cards,anims});
})();
