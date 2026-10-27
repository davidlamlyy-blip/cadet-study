// Meteorology 補漏 pass — topics + links
(function(){
const T=(id,g,t,d,pts,rel,src,chk)=>({id:"met."+id,g,t,d,pts,rel:rel.map(r=>"met."+r),src,check:!!chk});
const topics=[
// ---- 1/2/3 basics (PHAK ch12, BAK ch7)
T("barometer","9 Altimetry","Barometer & Station Pressure","Aneroid cell 感壓；station pressure 要換算做 MSL 先可以比較。",["29.92 inHg = 1013.2 hPa = 14.7 psi","1 inHg ≈ 34 hPa","Station→MSL：每 1000 ft 加約 1 inHg","Aneroid 易帶、準度低過 mercury","Altimeter 感壓部件 = aneroid"],["altimeter","pressure-height","qcodes"],"PHAK ch12 p4-6"),
T("sat-methods","3 Stability & Cloud","Ways to Reach Saturation","四個方法令空氣到 dewpoint：過冷面、混合、夜冷、抬升。",["Warm air over cold surface","Cold/warm air mixing","Night contact cooling","Lifting (最常見)","每升 20°F 容水量 ×2"],["humidity","cloud-form","fog-adv"],"PHAK ch12 p13-14"),
T("hypoxia","1 Atmosphere","Altitude & Hypoxia","altitude升，氧分壓跌；反應變差由約 10,000 ft（有人 5,000）開始。",["18,000 ft pressure約一半","症狀：迷惘 → 失去能力","Insidious，自己唔覺","補氧或加壓 cabin 解決"],["layers","pressure-height"],"PHAK ch12 p6-7"),
T("wind-barb","2 Pressure & Wind","Wind Barbs & Station Model","圖上wind direction箭咀指風吹來方向；barb 讀speed。",["Full barb 10 kt、half 5 kt","Pennant 50 kt","wind direction＝風吹『來』嘅方向","2000 ft AGL：右轉 20–40°、風更勁"],["pressure-sys","friction","metar-wind"],"PHAK ch12 p12"),
T("conv-mech","7 Turb, Shear & Jet","Convective & Mechanical Turbulence","地面受熱不均＋障礙物令低空turbulent flow；高啲就避得開。",["Updraft：路面、荒地","Downdraft：水面、樹林","Lee 側 downdraught 最差","最嚴重turbulent flow喺低 1–2k ft","夏天可升高避熱airflow"],["turb","mountain-wave","seabreeze"],"PHAK ch12 p7-10; BAK ch7 p266"),
T("wind-gradient","7 Turb, Shear & Jet","Wind Gradient","近地面風弱，愈高愈勁，altitude上風變化 = shear。",["摩擦令地面風減速","大慣性 aircraft 影響最大","take-off/landing最敏感"],["friction","windshear","overshoot"],"BAK ch7 p264"),
T("overshoot","7 Turb, Shear & Jet","Overshoot / Undershoot Effect","Shear 令 IAS 突變：先高過 path (overshoot) 或低過 path (undershoot)。",["Overshoot：頂風增、tailwind減、upfraft","Undershoot：頂風減、tailwind增、downdraft","Nose 亦跟住 pitch 變","唔好追 airspeed 細擺"],["windshear","wind-gradient","shear-escape"],"BAK ch7 p264-266; ATP ch8"),
T("shear-escape","7 Turb, Shear & Jet","Wind Shear Recovery","遇嚴重 shear：maintain/加 pitch、full power、接受低 IAS。",["Trade airspeed for altitude","必要時 pitch 到 stick shaker","唔好 reduce power 追 IAS","最佳係唔好入（報告就避）"],["windshear","microburst","overshoot"],"ATP ch8 p21-22"),
T("burst-size","5 Thunderstorm","Microburst vs Macroburst","分別在影響範圍：<4 km 係 micro，>4 km 係 macro。",["Micro：<4 km，最短命 5–15 min","Macro：>4 km，持續較長","Downdraft 最高約 6000 fpm","Headwind 變 tailwind：雙倍 shear","~5% TS 生 microburst"],["microburst","windshear","ts-hazards"],"MTE5 p5; PHAK ch12; ATP ch8",true),
T("ts-gustfront","5 Thunderstorm","Gust Front & Roll Cloud","Mature stage 冷 downdraft 外流，前緣係 gust front，頂有 roll cloud。",["可前進離雨區 ~15 mi","wind directionwind speed突變","Roll cloud = 強turbulent flow標記","15–20 min mature stage"],["ts-life","microburst","windshear"],"MTE5 p3; PHAK ch12 p24"),
T("ts-lightning","5 Thunderstorm","Lightning & St Elmo's Fire","冰晶同冰雹碰撞分電荷：底負、頂正；放電＝閃電。",["Hail 由冰晶得電子","Strike：擊穿蒙皮、傷 avionics","可致盲、compass 永久誤差","St Elmo's Fire：corona 放電，風擋見光","Precip static 擾 radio"],["ts-hazards","ts-avoid"],"MTE5 p4; PHAK ch12 p25"),
T("ts-secondary","5 Thunderstorm","TS Secondary Hazards","Altimeter pressure波動、hail、engine吞水、視程近零。",["Pressure 先跌後急升，>100 ft 誤差","Hail 可出現喺雲外數 mi","Hail >½ in 數秒毀機","Updraft 大 → water ingestion、flameout","雲內 vis ≈ 0"],["ts-hazards","altimeter","pressure-err"],"PHAK ch12 p25"),
T("ts-squall","5 Thunderstorm","Squall Line & Tornado","一條窄thunderstorm帶，常喺cold front前；最強單一天氣威脅。",["多為 steady-state cells","傍晚至夜初最強","可長 200–300 NM (MTE5)","Funnel→tornado(地)→waterspout(水)","Severe TS：≥50 kt 風或 ≥¾ in hail"],["ts-types","coldfront","ts-avoid"],"PHAK ch12 p23-24; ATP ch8; MTE5 p21"),
T("awr","5 Thunderstorm","AWR, Doppler & LIDAR","機載 radar 偵測水同冰雹；Doppler 睇動；LIDAR 用光測 shear。",["AWR：紅/黃 = 水最多","Doppler：頻率變化 = 運動","LIDAR：light radar，runway shear","HK 機場有 LIDAR (check)","Radar 睇唔到雲內全部"],["ts-avoid","windshear","hk-windshear"],"MTE5 p7; ATP ch8; HK",true),
// ---- 4 Fronts
T("airmass-class","4 Fronts & Air Masses","Air Mass Classification","c/m（乾/濕）× E/T/P/A（temperature）。",["E：很暖，20N–20S","T：暖，副熱帶高壓","P：冷，40–60° 緯度","A：極冷，只喺冬天 pole","例：cT 暖乾、mP 冷濕"],["airmass","airmass-mod"],"MTE5 p8-9"),
T("airmass-mod","4 Fronts & Air Masses","Air Mass Modification","離開源地被地面改變：冷面變 stable、暖面變 unstable。",["越冷面：由下冷、stable、RH↑","越暖面：由下暖、unstable、RH↓","冷面：低雲、霧、vis 差","暖面：Cu、陣雨、turbulent flow"],["airmass","stability","fog-adv"],"MTE5 p10; PHAK ch12 p18"),
T("polar-front","4 Fronts & Air Masses","Polar & Arctic Front","Polar front 分隔 polar 同 tropical；Arctic front 只喺冬天。",["約 60° 緯度附近","位置隨季節移","全球最多 frontal system 喺日韓一帶 (筆記)","Front = 不同temperature氣團邊界","Polar jet 喺 polar front 上"],["airmass","jet","extratropical"],"MTE5 p15; MET05 whiteboard"),
T("front-mech","4 Fronts & Air Masses","Frontogenesis & Front Motion","Front 位於 trough；風平行 front；前後pressure、wind direction有規律。",["Frontogenesis 生成；Frontolysis 消散","NH 飛向 front：壓降、左風","過鋒後：風右轉、壓升","cold frontspeed ≈ 高空垂直風分量","Dew-point front / dry line：humidity差"],["coldfront","warmfront","highlow"],"ATP ch8 p8"),
T("warm-sector","4 Fronts & Air Masses","Warm Sector","兩鋒之間，條件穩定：OVC/BKN St、Sc，輕雨毛毛雨。",["pressure大致平穩","Vis 中至差","雲層薄，上面可 SKC","空氣多數 Tm (tropical maritime)"],["extratropical","coldfront","warmfront"],"MTE5 p20"),
T("front-pass","4 Fronts & Air Masses","Frontal Passage Sequence","cold front：壓谷後升、急轉風；warm front：壓跌、雲漸低、雨持久。",["暖：Ci→Cs→As→Ns，通過約 40 min–1 hr","暖：frontal fog、freezing rain","冷：TCu/Cb、陣風、temperature驟降","cold front後：WNW 風、vis 好、壓升","MTE5 話cold frontpressure『升』(見 coverage)"],["coldfront","warmfront","front-compare"],"PHAK ch12 p18-22; MTE5 p19-22",true),
T("front-compare","4 Fronts & Air Masses","Cold vs Warm Front","cold front陡、快、突然；warm front緩、慢、有預警。",["冷：20–35 mph；暖：10–25 mph (PHAK)","冷：thunderstorm、hail、陣風","暖：低雲、持續雨、vis 差","cold front：幾小時變天","warm front：預警多，可數日"],["coldfront","warmfront","occ-types"],"PHAK ch12 p20-21"),
T("occ-types","4 Fronts & Air Masses","Cold vs Warm Occlusion","取決於前方空氣比cold front後空氣暖或冷。",["Cold occ：前方較暖→cold front鑽底","Warm occ：前方較冷→cold front爬上","兩者雲會合併","Embedded Cb 風險","冬季海→陸：warm occlusion"],["occlusion","ts-hazards"],"MTE5 p24-25; PHAK ch12 p21-22"),
// ---- 8 HK / TC
T("hk-chart","8 HK & Tropical Cyclone","HK Surface Chart (Winter)","HKO 地面圖 2023-01-14：cold front喺華南沿岸，NE 風等壓線好密。",["等壓線密 = gradient 大 = 風勁","cold front喺 HK 以南/沿岸","冬季 12–1 月最多見","問答：HK 冇 warm front"],["hk-fronts","pressure-sys","hk-monsoon"],"MTE5 p12-13 (圖)"),
T("tc-cond","8 HK & Tropical Cyclone","TC Formation Conditions","MET05 五條件：SST >26.5°C、海深 50 m、LOW、輻合、Coriolis。",["教材：>26.5°C (Robson 27–28°C)","暖水層深 ~50 m","先有 tropical depression","地面 convergence","離赤道 ≥ ~5° 先有 Coriolis"],["tc-form","itcz","coriolis"],"MET05 p; Robson ch8"),
T("tc-names","8 HK & Tropical Cyclone","Typhoon / Hurricane / Cyclone","同一類系統按地區叫法不同；>64 kt 先叫typhoon級。",["Typhoon：SE Asia、NW Pacific","Hurricane：北美","Cyclone：印度洋、澳洲、非洲","ICAO/US：TD ≤34、TS 35–64、H/T ≥65 kt","US 用 1 分鐘平均風 (HKO 用 10 分鐘，check)"],["tc-class","tc-form"],"MET05 p; ATP ch8 p42",true),
T("tc-cycle","8 HK & Tropical Cyclone","TC Self-sustaining Cycle","輻合上升 → Cb → 頂部輻散下沉 → 被低壓吸返 → 自我維持。",["1 地面輻合加強","2 空氣急升成 CB/TS","3 tropopause 輻散","4 下沉空氣再被吸入","5 NH 逆時針 (Coriolis)"],["tc-struct","tc-cond"],"MET05 p"),
T("tc-rfq","8 HK & Tropical Cyclone","Right Forward Quadrant","NH 最強風喺右前象限：旋轉風＋移動speed相加。",["wind speed = 旋轉 + 前進speed","左後最弱","SH：鏡像（左前最強）","亦最多 TS/shear"],["tc-hazard","tc-move","tc-struct"],"MET05 p; Robson ch8"),
T("tc-glow","8 HK & Tropical Cyclone","Foreglow / Afterglow","日出/日落紅光映喺typhoon外圍高雲，係來臨前兆之一。",["筆記圖示：太陽、遠處雲雨、觀察者","晨昏天色異常紅","只係經驗徵兆","仍要睇 HKO 信號"],["tc-move","tc-struct"],"MET05 whiteboard (只有草圖)",true),
T("tc-fuji","8 HK & Tropical Cyclone","Fujiwhara Effect","兩個靠近嘅 TC 會互相繞轉並影響路徑。",["MET05 影片標題「藤原效應」","筆記繪兩個typhoon＋Kuroshio","路徑更難預測","定義為我嘅記憶，教材只列標題"],["tc-move","tc-hazard"],"MET05 p (video title); whiteboard",true),
T("hk-t13","8 HK & Tropical Cyclone","HK Signal No.1 & No.3","T1 Standby：TC 靠近；T3 Strong Wind：持續風 41–62 km/h。",["T1：TC 約 800 km 內","T3：預計/持續 41–62 km/h","仍可正常飛行（待核對）","升級取決於預測風力"],["hk-signals","tc-class"],"HKO (記憶，非教材)",true),
T("hk-t810","8 HK & Tropical Cyclone","HK Signal No.8–10","T8：63–117 km/h gale/storm；T9 增強；T10 hurricane ≥118 km/h。",["T8 分 NE/NW/SE/SW","T9：預料風力顯著增強","T10：≥118 km/h 持續風","T8 以上機場運作大受影響 (check)","數值全部要同 HKO 核對"],["hk-signals","tc-hazard","hk-windshear"],"HKO (記憶，非教材)",true),
// ---- 7 Jet & charts
T("jet-form","7 Turb, Shear & Jet","Jet Stream Formation","大水平溫差 → 大水平pressure差 → Coriolis → 西風急流。",["MET05：>60 kt，近 tropopause","通常 4 條：每半球 2 條","冬季最強，位置隨季節","SH 季節移動較細"],["jet","coriolis","tropopause"],"MET05 p"),
T("jet-front","7 Turb, Shear & Jet","Jet vs Surface Front","Jet 喺地面鋒北面；front波生成時 jet 向低壓中心移。",["Polar jet 波動似 wave","帶動 extratropical cyclone 西→東","Occlusion 時 jet 橫過鋒","Arctic jet 只喺冬季 arctic front"],["jet-types","extratropical","polar-front"],"MET05 p; ATP ch8 p8"),
T("const-chart","7 Turb, Shear & Jet","Constant Pressure Charts","850–200 mb 圖，對應約 5000–39,000 ft；用等高線睇高低、isotach 睇 jet。",["Contours = altitude；isotherm、isotach","Isotach 密 = shear/turbulent flow","垂直 shear >6 kt/1000 ft 易turbulent flow","可東向tailwind、西向頂風規劃","HK 用 WAFC 圖 (check)"],["sigwx","jet","cat"],"ATP ch8 p48-52",true),
T("fb-decode","10 Met Coding","Winds Aloft (FB) Decode","3 位方向＋2 位speed＋temperature；方向加 50 代表 ≥100 kt。",["731960：230°/119 kt/−60°C","9900 = light & variable","≥200 kt 寫 7899","30,000 ft 以上唔寫負號","3000 ft 冇temperature"],["sigwx","const-chart","jet"],"ATP ch8 p47 (US FB)"),
// ---- 10 coding & 11 services
T("taf-decode","10 Met Coding","TAF Time Groups","DDHH/DDHH 係期間；FM 後係 DDHHMM；PROB 只用 <50%。",["FM100100 = 10 日 0100Z","TEMPO <1 hr、<½ 期間","PROB30/40：低於 50% 先用","BECMG：喺期間內漸變","COR/AMD/CNL/NIL"],["taf","trend"],"ATP ch8 p43; Robson ch9"),
T("taf-cat","10 Met Coding","TAF Coverage & Cloud Datum","TAF 只列雲底（AAL）；ARFOR 用 AMSL；TAF 只報 TCu/Cb。",["TAF 半徑 5 nm","Cat1 國際：6-hourly、18–24 h","雲底 AAL；ARFOR AMSL","VVnnn：被遮蔽","澳洲體系 (CASA)"],["taf","metar-cloud","briefing"],"Robson ch9 p137-142"),
T("wx-codes","10 Met Coding","Present Weather Codes","描述詞＋現象 code，前面 −/+ 表強度。",["Descriptor：BC BL DR FZ MI SH TS","BR DZ FG FU GR GS HZ IC PL RA SN SQ VA","TSGR = thunderstorm + hail","ISOL/OCNL/FREQ = Cb 量","VCTS = 5–10 mi 範圍"],["metar-vis","taf"],"Robson ch9 p143; ATP ch8"),
T("speci-atis","10 Met Coding","SPECI & ATIS Remarks","SPECI 喺天氣越過標準時發；ATIS 可帶 WS／MBST 通告。",["SPECI：例如cold front通過","RJAA 例：WS ADVS、MBST ADVS","RMK：機長報 WS (B789 final)","wind direction ATIS 係磁北","格式部分為日本式 (check)"],["metar","windshear","microburst"],"MET05 p (ATIS 照); Robson ch9",true),
T("pirep","11 Weather Services & Decisions","PIREP","機組報告：icing、turbulent flow、雲頂只有空中先見到。",["UA /OV /TM /FL /TP /SK","OV：地點／方位距離","icing最準資料來源","CAT 不能憑雲睇"],["sigmet-types","turb-int","icing-cond"],"ATP ch8 p56"),
T("sigmet-types","10 Met Coding","SIGMET / AIRMET / Convective","按危險程度分級；US 另有 Convective SIGMET。",["US AIRMET：中度icing/turbulent flow、風 ≥30 kt","SIGMET：嚴重turbulent flow/icing、塵暴、火山灰","Convective SIGMET：1 小時有效","涵蓋 tornado、TS 線、hail >¾ in","ICAO/HK 格式有分別 (check)"],["sigmet","ts-squall","pirep"],"ATP ch8 p55; Robson ch9",true),
T("turb-int","7 Turb, Shear & Jet","Turbulence Intensity & Frequency","按fuselage反應分級；按時間比例講頻率。",["Light chop→light→mod→severe→extreme","Mod：0.5–1.0 g；Severe >1.0 g","<⅓ occasional；⅓–⅔ intermittent；>⅔ continuous","高空無積雲turbulent flow報 CAT","Severe：可短暫失控"],["turb","cat","pirep"],"ATP ch8 p31; Robson ch9"),
T("icing-extra","6 Vis, Precip & Icing","Structural vs Induction Icing","結構icing＋進氣icing；嚴重可 roll upset、tailplane stall。",["Freezing rain 必在 inversion","Ice pellets = 上面有 freezing rain","Roll upset：嚴重icing","Tailplane icing快且睇唔到","TS：0 至 −15°C 最易 clear ice"],["icing-haz","freezing-rain","ts-hazards"],"ATP ch8 p29-32; PHAK ch12 p24"),
T("deice","6 Vis, Precip & Icing","De-icing & Anti-icing Fluids","Type I 稀、時效短；Type II 稠、holdover 長。",["Type I ≥80% glycol","Type II ≥50% glycol＋增稠","One-step 快；two-step 省液","唔好噴入 pitot/TAT/static","Freeze point ≤ 低於環境 20°F"],["icing-prot","frost"],"ATP ch8 p29"),
T("cloud-suffix","3 Stability & Cloud","Cloud Name Suffixes & Ceiling","字尾講外形；ceiling = 最低 BKN/OVC 或 VV。",["Castellanus 堡狀、Lenticularis 透鏡","Fracto 破碎、Nimbus 帶雨","Ceiling：BKN (5–7) 或 OVC","Vis = 最遠可辨 prominent object","Billow/roll cloud 提示 shear"],["cloud-types","cloud-amount","mountain-wave"],"PHAK ch12 p15-17; MET05 p (圖)"),
T("briefing","11 Weather Services & Decisions","Briefing Products","TAF、METAR/SPECI、ARFOR/GAF、GPWT、SIGMET、NOTAM、ATIS。",["Robson：ARFOR 6-hourly，AMSL","ARFOR：overview→wind→cloud→wx→vis→icing","Area QNH 在 ARFOR 底","ENZO：NAIPS、GAF、GPWT","澳洲體系；HK 用 HKO 產品"],["taf","sigmet","qcodes"],"Robson ch9 p133-141; ENZO nav briefing"),
T("wx-decision","11 Weather Services & Decisions","Weather Go / No-Go","邊緣天氣：risky shift、INTER、SVFR、VFR into IMC。",["預報變差就重評估","Risky shift：越行越冒險","Cb/陣雨帶 → 轉頭","Ceiling 低過 terrain → 唔走","CTWO：Chart、Terrain、Weather、Ops"],["trend","ts-avoid","sigmet"],"AELP 'Clouded thinking'; ENZO preparation"),
T("case-rotor","11 Weather Services & Decisions","Case: Rotor Encounter","實際風強過預報＋橫過山脊＋altitude不足 → 撞 rotor。",["≥25 kt 垂直山脊","GS 顯示風比預報勁","5500 ft 唔夠高","可繞行／等風減弱","頭撞機頂：未繫穩"],["mountain-wave","cat","conv-mech"],"AELP 'The Hills are Alive'"),
T("density-alt","1 Atmosphere","Density Altitude & Takeoff","低density = 好似喺更高處：take-off距離、climb都差。",["例：SL 745 ft → 8000 ft PA 1590 ft ground roll","Canberra 2000 ft + ISA+25 ≈ 5000 ft DA","需更高 TAS 達同一 IAS","engine、propeller都差","ISA +1°C ≈ +120 ft DA (rule, check)"],["density","isa","pressure-height"],"PHAK ch12 p6; BAK ch7 p255",true),
];
const links=[
["sat-methods","cloud-form","Saturation 方法決定雲點樣生成"],
["barometer","pressure-err","Station→MSL 換算原理 = setting 錯誤原因"],
["wind-barb","friction","地面風 vs 2000 ft 風差 20–40°"],
["conv-mech","windshear","低空turbulent flow同wind shear都因地形／熱力不均"],
["wind-gradient","overshoot","風隨altitude變 → IAS 突變"],
["overshoot","shear-escape","知道效應先識反應"],
["burst-size","shear-escape","Micro/macrobursts 要用 recovery technique"],
["ts-gustfront","windshear","Gust front 係 TS 外圍低空wind shear"],
["ts-lightning","awr","電荷＝thunderstorm強度；radar 睇水／冰"],
["ts-secondary","altimeter","TS pressure波動令altitude計誤差"],
["ts-squall","coldfront","Squall line 常喺cold front前"],
["airmass-class","airmass-mod","源地性質經路徑被改變"],
["airmass-mod","fog-adv","暖濕氣團過冷面 → advection fog"],
["polar-front","jet-front","Polar jet 喺 polar front 上"],
["front-mech","front-pass","Front 在 trough 解釋pressure、wind direction變化"],
["front-compare","front-pass","兩種鋒通過順序唔同"],
["warm-sector","extratropical","Warm sector 係 cyclone 嘅一部分"],
["occ-types","ts-hazards","Occlusion 內有 embedded Cb"],
["tc-cond","tc-cycle","條件滿足 → 自我維持循環"],
["tc-rfq","tc-hazard","右前象限係最差位置"],
["tc-names","hk-signals","分類同信號係兩套制度"],
["hk-t13","hk-t810","信號按預測風力逐級升"],
["jet-form","cat","急流邊緣大 shear → CAT"],
["jet-front","extratropical","Polar jet 帶 cyclone 西→東"],
["const-chart","jet","Isotach 密 = 急流／turbulent flow位置"],
["fb-decode","const-chart","FB 係高空風嘅預報版本"],
["taf-decode","trend","時間組合決定天氣變化類型"],
["taf-cat","briefing","TAF 同 ARFOR 嘅雲底 datum 唔同"],
["wx-codes","metar-vis","Code 同 METAR 一致"],
["speci-atis","hk-windshear","ATIS WS 通告源自 shear 報告"],
["pirep","icing-cond","icing最準資料 = PIREP"],
["sigmet-types","ts-squall","Convective SIGMET 專為 TS 線"],
["turb-int","cat","CAT 報告用嚴重度＋頻率"],
["icing-extra","freezing-rain","Freezing rain 必在 inversion 下"],
["wx-decision","trend","INTER/TEMPO 延長 = 天氣唔穩"],
["case-rotor","mountain-wave","Rotor 係 mountain wave 一部分"],
["density-alt","density","DA 係 density 嘅 performance 表達"],
["hk-chart","hk-fronts","圖示 HK 冬季cold front"],
];
const cards=[];
const C=(topic,e,q,a,zh,chk)=>cards.push({e,q,a,zh,topic:"met."+topic,st:chk?"check":"ok"});
// ---- barometer / basics
C("barometer","🧪","Standard sea-level pressure in three units?","29.92 inHg, 1013.2 hPa (mb) and 14.7 psi.","三個單位。");
C("barometer","🔁","How do weather stations make pressure comparable?","They convert station pressure to mean sea level, adding about 1 inHg per 1,000 ft of elevation.","加返altitude部分。");
C("barometer","🧮","A station at 5,000 ft reads 24.92 inHg. What is its MSL pressure?","About 29.92 inHg (24.92 + 5 × 1).","24.92+5。");
C("barometer","⚙️","What sensor does an altimeter essentially use?","An aneroid cell: a sealed capsule that expands or contracts with pressure.","封閉膜盒。");
C("sat-methods","💧","Four ways air reaches saturation?","Warm air moving over a cold surface, mixing of cold and warm air, night cooling by the ground, and lifting.","四個方法。");
C("sat-methods","🌡️","How much more water can air hold for each 20°F rise?","It roughly doubles.","升 20°F 加倍。");
C("sat-methods","🧮","T 85°F, dewpoint 71°F. Cloud base?","Spread 14°F ÷ 4.4°F per 1,000 ft ≈ 3,180 ft AGL.","14 ÷ 4.4。");
C("hypoxia","🫁","Why does hypoxia occur at altitude?","Oxygen is still 21% but its partial pressure falls with the lower total pressure.","分壓降。");
C("hypoxia","⏱️","At what altitude can reactions start to be impaired?","Around 10,000 ft for most people, and some as low as 5,000 ft.","個體差異。");
C("wind-barb","🧭","On a surface chart, which way does the wind arrow point?","Toward the station circle from the direction the wind blows from.","風『來』嘅方向。");
C("wind-barb","🏴","Barb values?","Full barb 10 kt, half barb 5 kt, pennant 50 kt.","10/5/50。");
C("wind-barb","🌪️","How does wind at 2,000 ft AGL differ from surface wind?","Stronger and typically 20–40° to the right (veered) in the Northern Hemisphere.","高處風更勁偏右。");
C("pressure-sys","📉","What does rapidly falling pressure at a station suggest?","Approaching bad weather and possibly severe storms; rising pressure suggests fair weather.","壓跌 = 變差。");
// ---- turbulence near ground / shear
C("conv-mech","☀️","Where are updrafts and downdrafts at low level on a sunny day?","Updrafts over pavement, bare ground and sand; downdrafts over water and vegetation.","熱面升、冷面降。");
C("conv-mech","🛬","Effect on final approach over bare ground vs over water?","Rising air over bare ground can balloon you long; sinking air over water or trees can leave you short.","ballooning / sinking。");
C("conv-mech","⛰️","Where is mechanical turbulence worst near a ridge?","On the lee side, with strong downdrafts; the stronger the wind the worse it is.","lee 側。");
C("conv-mech","📏","How high is the worst mechanical turbulence?","Mostly within the lowest 1,000–2,000 ft above the local ground.","低 1–2k ft。");
C("wind-gradient","📈","Why does wind increase with height?","Surface friction slows the air near the ground; the effect fades with height.","摩擦層。");
C("wind-gradient","🧩","Define windshear.","Any change in wind speed or direction, with change in height or distance.","wind speed／wind direction改變。");
C("overshoot","⬆️","Which shear causes an overshoot effect?","Increasing headwind, decreasing tailwind, or an updraft.","IAS 加、飛高。");
C("overshoot","⬇️","Which shear causes an undershoot effect?","Decreasing headwind, increasing tailwind, or a downdraft.","IAS 減、飛低。");
C("overshoot","🚆","Why does IAS jump in windshear?","The aircraft's inertia keeps its groundspeed, so moving into different air changes airspeed immediately.","慣性。");
C("overshoot","🛩️","Descend from a headwind into calm air. What happens?","IAS drops about the headwind amount, nose drops, and you go below the path: undershoot. Add power and raise the nose.","頂風→無風：undershoot。");
C("shear-escape","🚨","Recovery technique for severe windshear on approach?","Maintain or increase pitch, apply maximum power, accept low airspeed, even to stick shaker if the descent continues.","用speed換altitude。");
C("shear-escape","❌","Common error in a microburst encounter?","Reducing power or lowering the nose to chase airspeed when headwind first increases.","唔好追 IAS。");
C("shear-escape","📖","Definition of severe windshear (ATP)?","A rapid change in wind causing airspeed changes over 15 kt or vertical speed changes over 500 fpm.","15 kt / 500 fpm。");
C("shear-escape","🛡️","What do airports use to warn of low-level windshear?","LLWAS sensors, Doppler radar and, at some airports, LIDAR; tower or ATIS broadcasts the warning.","LLWAS / Doppler / LIDAR。");
// ---- thunderstorm extras
C("burst-size","📏","Microburst vs macroburst size?","Microburst affects under 4 km; macroburst over 4 km.","<4 km / >4 km。");
C("burst-size","⏳","Typical microburst life?","About 5–15 minutes.","5–15 分鐘。");
C("burst-size","⬇️","Maximum microburst downdraft?","Up to about 6,000 fpm.","6000 fpm。");
C("burst-size","↔️","Why is a microburst so dangerous for performance?","Flying through the outflow turns a headwind into a tailwind, so the shear is doubled (e.g. 45 kt each way = 90 kt change).","wind shear翻倍。");
C("burst-size","❓","MTE5 slide gives 150 kt (micro) and 120 kt (macro). Reliable?","I am unsure; PHAK and ATP quote headwind loss of 30–90 kt and outflow to about 45 kt.","數字有矛盾。",true);
C("ts-gustfront","🌫️","What is a roll cloud?","A rolled cloud on the leading edge of the gust front, marking an extremely turbulent zone.","roll cloud。");
C("ts-gustfront","🏃","How far ahead of the rain can a gust front be?","Up to about 15 miles.","~15 mi。");
C("ts-gustfront","⏱️","Mature stage duration (MTE5)?","Around 15–20 minutes, with updrafts, downdrafts and precipitation.","15–20 分鐘。");
C("ts-gustfront","1️⃣","How long does a single-cell thunderstorm last?","Less than one hour overall.","<1 小時。");
C("ts-lightning","⚡","How is charge separated in a Cb?","Falling hail gains electrons from rising ice crystals; cloud bottom becomes negative, top positive.","底負頂正。");
C("ts-lightning","💥","Lightning hazards to an aircraft?","Skin puncture, avionics damage, temporary blindness, compass errors and radio interference.","致盲、compass 錯。");
C("ts-lightning","🔥","What is St Elmo's Fire?","A visible corona electrical discharge on windscreens and extremities in charged air near storms (or volcanic ash).","corona 放電。");
C("ts-secondary","📉","Altimeter error near a thunderstorm?","Pressure falls then jumps with the gust front; without a corrected setting the error can exceed 100 ft.","可超過 100 ft。");
C("ts-secondary","🧊","Why avoid the area under an anvil?","Hail can fall well outside the cloud, even in clear air several miles away.","anvil 下有 hail。");
C("ts-secondary","🚰","Why can heavy convective rain stop a turbine engine?","If updraft speed approaches raindrop terminal velocity, water concentration can exceed engine ingestion limits and cause flameout.","吞水 flameout。");
C("ts-squall","🧱","What is a squall line?","A narrow band of active thunderstorms, often on or ahead of a cold front, usually steady-state cells.","thunderstorm線。");
C("ts-squall","🌀","Funnel cloud, tornado, waterspout?","A funnel does not reach the surface; touching land it is a tornado; touching water a waterspout.","funnel/tornado/waterspout。");
C("ts-squall","📐","Severe thunderstorm criteria (US)?","Surface winds of 50 kt or more and/or hail 3/4 inch or larger.","≥50 kt / ¾ in。");
C("ts-squall","📏","Rule for avoiding a severe thunderstorm?","Stay at least 20 NM away (PHAK); never fly beneath.","20 NM。");
C("ts-squall","⬆️","Overflying a thunderstorm rule of thumb (ATP)?","At least 1,000 ft above the cloud top for each 10 kt of wind speed.","1000 ft/10 kt。");
C("awr","📡","What does airborne weather radar detect?","Precipitation (water and hail); the strongest return is where moisture is most concentrated.","雨／hail。");
C("awr","🎨","Radar colour meaning?","Green light, yellow moderate, red heavy precipitation; avoid red and yellow areas.","紅黃最強。");
C("awr","📶","What is Doppler radar?","Radar that uses the frequency shift of returns to measure motion of precipitation, revealing windshear.","頻率變化。");
C("awr","💡","What is LIDAR in windshear detection?","Light detection and ranging, a light-based radar able to sense windshear near the runway (new technology).","光學 radar。");
C("awr","❗","Why can radar mislead in storms?","Attenuation by heavy rain can hide cells behind, and dry hail or small cloud droplets may return weakly.","衰減。",true);
// ---- air masses & fronts
C("airmass-class","🧭","What do c and m mean?","Continental forms over land (dry); maritime forms over water (wet).","c 乾 m 濕。");
C("airmass-class","🌡️","E, T, P, A air masses?","Equatorial very warm, tropical warm, polar cold, arctic very cold.","E T P A。");
C("airmass-class","📍","Source regions by latitude?","Equatorial about 20N–20S, tropical in subtropical highs, polar about 40–60°, arctic only over poles in winter.","源地緯度。");
C("airmass-class","🧩","Describe cP and mT.","cP is cold and dry; mT is warm and wet.","冷乾 / 暖濕。");
C("airmass-mod","⬇️","Air mass moving over a colder surface?","Cooled from below, becomes more stable, RH increases: low cloud, fog and poor visibility.","變 stable。");
C("airmass-mod","⬆️","Air mass moving over a warmer surface?","Warmed from below, becomes unstable, RH falls: cumulus, showers and turbulence, good visibility.","變 unstable。");
C("airmass-mod","🌫️","Why is visibility poor in a stable air mass?","Smoke and dust cannot rise out of it and are trapped near the surface.","污染困低層。");
C("polar-front","🌍","Define polar front.","The boundary separating polar and tropical air masses, around 60° and seasonally moving.","polar/tropical 邊界。");
C("polar-front","❄️","Arctic front?","Boundary between arctic and polar air, present only in winter.","冬季先有。");
C("front-mech","🧬","Frontogenesis vs frontolysis?","Frontogenesis is front formation; frontolysis is its dissipation.","生成 / 消散。");
C("front-mech","🧭","Flying toward a front in the NH, what do you notice?","Pressure falling, wind from the left; after crossing the front, wind shifts right and pressure rises.","壓跌、左風。");
C("front-mech","🚀","What controls speed of a cold front?","About the wind component perpendicular to the front just above the friction level; warm fronts move about half as fast.","warm front約一半速。");
C("front-mech","💧","What is a dry line / dew point front?","A front between air masses of similar temperature but different moisture.","humidity差鋒。");
C("front-pass","🔼","Warm front approach sequence?","Ci, Cs, As, then Ns; pressure falls, visibility drops, steady rain, possible frontal fog or freezing rain.","Ci→Ns。");
C("front-pass","⏱️","How long does a warm front take to pass (MTE5)?","Usually 40 minutes to 1 hour at a point.","40 分–1 小時。");
C("front-pass","⚡","Cold front passage?","TCu/Cb, gusty variable winds, temperature and dewpoint drop, pressure bottoms then rises; clearing behind with WNW winds.","急變。");
C("front-pass","❓","MTE5 says pressure rises suddenly approaching a cold front. Consistent?","No; PHAK and Robson say pressure falls ahead of the front, bottoms at passage, then rises. I follow PHAK.","矛盾已說明。");
C("front-compare","⚖️","Compare speeds of cold and warm fronts.","Cold fronts about 20–35 mph; warm fronts about 10–25 mph (PHAK).","冷快暖慢。");
C("front-compare","📐","Which front has steeper slope?","Cold front: it undercuts and forces air up rapidly; warm front is shallow.","cold front陡。");
C("front-compare","⚠️","Main hazards: warm vs cold front?","Warm: low ceilings, poor visibility, steady rain, icing. Cold: thunderstorms, gusts, turbulence, hail, short notice.","hazard 對比。");
C("warm-sector","🌥️","Weather in a warm sector?","Fairly constant: overcast or broken St/Sc, drizzle or light rain, steady pressure, moderate to poor visibility.","穩定。");
C("occ-types","🔁","Cold occlusion vs warm occlusion?","Cold: air ahead of warm front is warmer than air behind cold front, so the cold front undercuts. Warm: ahead is colder so cold front rides over.","前方比cold front後暖／冷。");
C("occ-types","⚠️","Hazard of occlusions?","Clouds merge and can hide embedded Cb inside stratiform cloud.","embedded CB。");
C("extratropical","🌀","Typical satellite shape of an extratropical cyclone?","A comma cloud, rotating counterclockwise in the NH.","comma。");
C("extratropical","🌊","Where do extratropical cyclones often form (MTE5)?","Over the sea, then move west to east steered by the polar jet.","海上生成。");
C("airmass","🏝️","UK summer weather mechanism (MTE5 note)?","Stable maritime tropical air brings fog, low visibility, overcast and inversions.","霧、低 vis。");
// ---- HK / TC
C("hk-chart","🗺️","What does a closely packed isobar pattern on HKO winter chart indicate?","A strong pressure gradient and strong northeast monsoon winds behind the cold front.","gradient 大。");
C("hk-chart","❄️","Does HK experience warm fronts?","No (MTE5 Q&A); cold fronts yes, typically December–January.","冇 warm front。");
C("tc-cond","🌡️","Minimum sea surface temperature for TC formation (MET05)?","Above 26.5°C; Robson quotes about 27–28°C.","26.5°C。");
C("tc-cond","🌊","Ocean depth requirement in MET05?","A warm layer about 50 m deep.","50 m。");
C("tc-cond","🧭","Why not on the equator?","Coriolis force is near zero there, so no rotation; need roughly 5° or more away.","需要 Coriolis。");
C("tc-cond","🔎","Five conditions on the MET05 slide?","SST above 26.5°C, depth 50 m, pre-existing low, surface convergence, Coriolis force.","五個條件。");
C("tc-names","🗺️","Typhoon, hurricane, cyclone by region?","Typhoon SE Asia/NW Pacific, hurricane North America, cyclone Indian Ocean/Australia/Africa.","地區叫法。");
C("tc-names","📊","International classes by sustained wind (ATP)?","Tropical depression up to 34 kt, tropical storm 35–64 kt, hurricane/typhoon 65 kt or more.","34/64/65。");
C("tc-names","🧮","MET05 threshold for typhoon?","In excess of 64 kt.","64 kt。");
C("tc-names","❓","Is 64 kt typhoon threshold the same for HKO and US?","Roughly, but averaging periods differ (HKO 10 min, US 1 min); I am not certain of exact bins.","平均時間不同。",true);
C("tc-cycle","🔄","Explain the self-sustaining TC cycle.","Surface convergence forces rapid ascent to Cb; air diverges at the tropopause and sinks; low pressure draws it back in.","循環。");
C("tc-cycle","↺","TC rotation direction NH?","Anticlockwise, because of Coriolis.","逆時針。");
C("tc-cycle","⛽","Energy source of a TC?","Moisture: latent heat released as water vapour condenses.","潛熱。");
C("tc-struct","👁️","Wind speed pattern across a TC?","Increases toward the eye; strongest in the eyewall; eye is calm and cloudless with lowest pressure.","向眼愈勁。");
C("tc-rfq","🧭","Why is right forward quadrant worst in NH?","Rotating winds add to the storm's forward speed on the right side.","wind speed相加。");
C("tc-rfq","🔁","Southern Hemisphere worst quadrant?","Left forward quadrant (Robson, mirror image).","左前。");
C("tc-hazard","⚠️","TC hazards listed in MET05?","CB/TS, heavy showers and flooding, severe turbulence, windshear, severe icing, hail, lightning, storm surge.","八項。");
C("tc-move","🧭","Typhoon track pattern near SE Asia?","Generally northwest, then curving to the northeast.","NW 轉 NE。");
C("tc-glow","🌅","What are foreglow and afterglow?","Reddened sunrise/sunset light on high cloud ahead of a tropical cyclone, an informal approach sign (whiteboard sketch).","前兆。",true);
C("tc-fuji","🌀","What is the Fujiwhara effect?","Two nearby tropical cyclones orbiting and interacting, making tracks harder to forecast (my recollection; slide gave only the title).","兩typhoon互動。",true);
C("hk-t13","🚩","HK No.1 signal means?","Standby: a tropical cyclone is within about 800 km and may affect HK (HKO, verify).","800 km。",true);
C("hk-t13","💨","HK No.3 signal wind?","Strong Wind: sustained winds of 41–62 km/h expected or blowing (HKO, verify).","41–62 km/h。",true);
C("hk-t810","🌪️","HK No.8 signal wind?","Gale or Storm: sustained 63–117 km/h (34–63 kt); named by direction NE, NW, SE or SW (HKO, verify).","63–117 km/h。",true);
C("hk-t810","🌬️","HK No.10 signal?","Hurricane: sustained winds of 118 km/h (64 kt) or more (HKO, verify).","≥118 km/h。",true);
C("hk-t810","✈️","Effect of T8 on operations?","Airport operations are heavily affected; I am not sure of the exact HKIA procedures.","我唔確定細節。",true);
C("hk-fronts","🗓️","When does HK get cold fronts?","Winter, mainly December–January, bringing wind shift to N/NE and a temperature drop.","12–1 月。",true);
// ---- jet & charts
C("jet-form","🌬️","Why does a jet stream form?","A large horizontal temperature gradient near the tropopause creates strong pressure gradient; Coriolis turns the flow westerly.","溫差 → 西風。");
C("jet-form","🔢","How many jets and when strongest (MET05)?","Typically four, two per hemisphere; strongest in winter; SH jets move less seasonally.","4 條、冬最強。");
C("jet-form","🎚️","Jet stream speed criterion?","MET05: more than 60 kt; FAA uses 50 kt. I am unsure which the interview expects.","60 / 50。",true);
C("jet-types","🧭","Subtropical jet facts?","Westerly about 120 kt at ~40,000 ft over subtropical high latitudes; moves south in winter; more continuous than polar jet.","STJ。");
C("jet-types","🌊","Polar jet facts?","Found at polar front, wave-like, drives extratropical cyclones west to east, moves south in winter.","Polar jet。");
C("jet-types","⬅️","Equatorial jet?","Easterly about 60 kt at ~45,000 ft above the ITCZ, found in summer over SE Asia and East Africa/Indian Ocean.","Equatorial easterly。");
C("jet-front","📍","Where is the jet relative to a surface front?","Generally poleward of the surface front, moving toward a deepening low's centre.","喺鋒北面。");
C("const-chart","🗺️","Pressure levels of constant pressure charts?","850 to 200 mb, roughly 5,000 to 39,000 ft.","850–200 mb。");
C("const-chart","🌀","Which chart features indicate jet turbulence?","Closely spaced isotachs or isotherms; vertical shear over 6 kt per 1,000 ft.","isotach 密。");
C("const-chart","✈️","Planning use of jet stream?","Use it as a tailwind eastbound and avoid headwind westbound; remember CAT at the edges.","tailwind。");
C("fb-decode","🧮","Decode FB 731960 at FL390.","73−50 = 23, so 230° true at 119 kt, temperature −60°C.","方向−50、speed加 100。");
C("fb-decode","🔤","What does 9900 mean?","Light and variable winds.","9900。");
C("fb-decode","🔢","Winds 280° at 205 kt coded?","7899 (speed capped at 199 kt).","7899。");
C("fb-decode","🧊","Temperature rule above 30,000 ft in FB?","The minus sign is omitted to save space.","省略負號。");
// ---- coding / services
C("taf-decode","⌚","FM100100 means?","From 01:00 UTC on the 10th, not 10:00 UTC.","日＋時＋分。");
C("taf-decode","⏲️","TEMPO meaning?","Temporary fluctuations lasting less than 1 hour each and less than half the stated period.","<1 h。");
C("taf-decode","🎲","When is PROB used?","Only for probability below 50% (30 or 40).","<50%。");
C("taf-decode","🔧","TAF AMD / COR / CNL / NIL?","Amended, corrected metadata, cancelled, or not issued.","變更類型。");
C("taf-cat","☁️","Cloud height datum in TAF vs ARFOR?","TAF and METAR use above aerodrome level; ARFOR uses above mean sea level.","AAL vs AMSL。");
C("taf-cat","🔭","TAF radius?","About 5 nm around the aerodrome.","5 nm。");
C("taf-cat","☁️","Cloud types given in aeronautical code?","Only TCu and CB are added.","TCu、CB。");
C("wx-codes","🔤","Decode TSGR and VCTS.","TSGR is thunderstorm with hail; VCTS is thunderstorm in the vicinity (about 5–10 mi) but not at the airport.","vicinity。");
C("wx-codes","🔢","ISOL, OCNL, FREQ?","Isolated, occasional (well-separated) and frequent Cb with little separation.","Cb 量。");
C("wx-codes","🌫️","Codes FG, BR, HZ, FU, DU?","Fog, mist, haze, smoke, dust.","霧靄煙塵。");
C("speci-atis","📻","When is a SPECI issued?","When conditions fluctuate about or fall below specified criteria, e.g. after a cold front passes.","天氣越標準。");
C("speci-atis","🚨","ATIS 'WS ADVS IN EFFECT'?","Windshear advisories are in effect; pilots are warned of reported shear on approach/departure.","WS 通告。");
C("speci-atis","⚠️","ATIS remark WS PS MS 15KT: meaning?","A pilot-reported windshear of 15 kt on final; I am not sure what PS/MS stand for.","我唔確定縮寫。",true);
C("pirep","👨‍✈️","What can only a PIREP provide?","Directly observed in-flight conditions such as icing, turbulence and cloud tops.","空中實測。");
C("pirep","🧾","PIREP elements UA OV TM FL TP SK?","Routine report, location, time, flight level, aircraft type and sky condition.","UA/OV/TM/FL/TP/SK。");
C("sigmet-types","🛑","AIRMET vs SIGMET (US)?","AIRMET: moderate icing/turbulence, sustained surface wind 30 kt+, extensive low ceilings/visibility, mountain obscuration. SIGMET: severe turbulence/icing, dust or ash.","級別。");
C("sigmet-types","⛈️","Convective SIGMET content?","Tornadoes, thunderstorm lines, embedded storms, area at level 4+, hail over 3/4 in; valid one hour.","1 小時。");
C("turb-int","📊","Turbulence frequency terms?","Occasional under 1/3 of the time, intermittent 1/3–2/3, continuous over 2/3.","三個詞。");
C("turb-int","🏋️","G-load for moderate and severe?","Moderate 0.5–1.0 g; severe over 1.0 g.","g 值。");
C("turb-int","📣","What is CAT in reports?","High-altitude turbulence (usually above 15,000 ft MSL) not associated with cumuliform cloud.","無雲turbulent flow。");
C("icing-extra","🌀","Roll upset?","Uncommanded roll associated with severe in-flight icing, outside the certificated icing envelope.","嚴重icing。");
C("icing-extra","🎯","Why is tailplane icing sneaky?","Tail collects ice faster than wing and pilot cannot see it, risking tailplane stall.","睇唔到。");
C("icing-extra","🌧️","Ice pellets in flight imply?","Freezing rain at higher altitude, through a temperature inversion.","上面有 freezing rain。");
C("icing-extra","❄️","Clear ice range in thunderstorms?","Between 0°C and about −15°C, where supercooled water is abundant.","0 ~ −15°C。");
C("icing-extra","🛩️","Induction icing?","Ice affecting engine air intake or carburettor, separate from structural icing on the airframe.","進氣icing。");
C("deice","🧴","Type I vs Type II fluid?","Type I unthickened (≥80% glycol), short holdover; Type II thickened (≥50% glycol), longer holdover.","I / II。");
C("deice","🪜","One-step vs two-step de-icing?","One-step uses heated fluid for both; two-step de-ices first then applies anti-icing fluid.","一步／兩步。");
C("deice","🚫","Where not to spray fluid?","Pitot inlets, TAT probes and static ports.","pitot/static。");
C("cloud-suffix","🏔️","Lenticularis and castellanus?","Lens-shaped cloud over mountains in strong wind; turrets on a common base.","形狀字尾。");
C("cloud-suffix","📏","Define ceiling.","Lowest layer reported broken or overcast, or vertical visibility into an obscuration.","BKN/OVC/VV。");
C("cloud-suffix","🌊","What do billow or roll clouds warn of?","Wind shear or turbulence; billow clouds seen on MET05 slides (my interpretation).","shear 徵兆。",true);
C("briefing","📋","Standard pre-flight weather products?","TAFs, METAR/SPECI, area forecasts (ARFOR/GAF), winds aloft (GPWT), SIGMET/AIRMET, NOTAM and ATIS.","briefing 產品。");
C("briefing","🗂️","ARFOR sections?","Overview, subdivisions, winds, cloud, weather, visibility, freezing level, icing, turbulence, critical locations, area QNH.","ARFOR 結構。");
C("briefing","⏰","ARFOR issue interval and cloud datum?","Every 6 hours; cloud base and tops in feet AMSL.","6 小時。");
C("wx-decision","🧠","What is risky shift?","A group drifting to take more risk than each member would alone, pressing on despite deteriorating weather.","集體冒險。");
C("wx-decision","🔢","CTWO?","Chart, Terrain, Weather, Operational: ENZO departure briefing items.","ENZO 簡報。");
C("wx-decision","🛑","Marginal weather: what is the safe default?","Delay, divert or cancel; re-evaluate when forecast worsens, and never fly into cloud-shrouded terrain or IMC under VFR.","寧可唔飛。");
C("case-rotor","⛰️","Lessons from the rotor encounter case?","Wind stronger than forecast at right angles to the ridge, altitude too low; plan alternate route, more height, and secure harness.","三個教訓。");
C("density-alt","📈","Define density altitude.","The altitude in the standard atmosphere that has the same air density as at your location.","等效altitude。");
C("density-alt","🧮","Takeoff ground roll sea level vs 8,000 ft pressure altitude (PHAK example)?","745 ft versus 1,590 ft: more than double.","745 vs 1590。");
C("density-alt","🔥","Why does high DA lengthen takeoff?","Lower density needs higher TAS for the same IAS and reduces engine and propeller output.","TAS 高、功率低。");
C("density-alt","🧮","Quick DA rule of thumb?","Add about 120 ft for each °C above ISA to pressure altitude (rule of thumb, verify).","120 ft/°C。",true);
// extra on existing topics
C("tropopause","🌐","Why does tropopause location matter?","It is commonly associated with the jet stream and possible clear air turbulence.","jet 同 CAT。");
C("layers","📐","Troposphere height range?","About 4–12 miles (6–20 km), up to ~48,000 ft at equator.","極地低赤道高。");
C("mountain-wave","📏","Mountain wave condition (MET05)?","Wind of 25 kt or more roughly perpendicular to the range, with a stable layer.","≥25 kt。");
C("cat","🔎","CAT characteristics (MET05)?","High altitude, no visual warning, not tied to cloud or precipitation, linked to mountain waves and jet streams.","無預警。");
C("windshear","🧪","MET05 added tip for windshear?","Try to increase airspeed by at least 20 kt (slide wording; method unspecified).","加 20 kt。",true);
C("microburst","🌫️","Visual clues of microburst?","Intense rain shaft with virga aloft and a ring of blowing dust at the surface.","dust ring。");
C("extratropical","🌐","Why does the polar jet matter for cyclones?","It steers extratropical cyclones from west to east.","西→東。");
C("warm-sector","🧪","Which air mass is typical in a warm sector?","Tropical maritime (Tm): warm and moist.","Tm。");
C("tc-glow","🌄","Why is foreglow/afterglow only a weak indicator?","It is an informal visual sign from sky colour on high cloud; official warnings and forecasts must be used.","只係經驗。",true);
C("tc-fuji","🧭","Why does the Fujiwhara effect matter for forecasting?","Interacting storms can deflect each other's tracks, increasing forecast uncertainty (my knowledge).","影響路徑。",true);
C("jet-front","🔁","How does a jet react as a frontal wave deepens?","It moves toward the centre of the deepening low; with an occlusion it often crosses the front near the occlusion point.","jet 跟低壓。");
C("case-rotor","👀","Early warning in the rotor case?","Groundspeed was much higher than forecast wind implied, signalling stronger winds than planned.","GS 睇出風勁。");
C("ts-conditions","⛈️","MTE5 three conditions for thunderstorms?","Unstable atmosphere, high moisture, and a lifting trigger.","三條件。");
C("ts-conditions","🧱","Thunderstorm classification (MTE5)?","Single cell, multicell, supercell.","三類。");
C("ts-hazards","⚠️","MTE5 aviation hazards of thunderstorms?","Hail, heavy rain reducing visibility, moderate to severe icing, severe turbulence, lightning and low-level windshear.","六項。");
C("hk-signals","🔤","Which HK signals exist for tropical cyclones?","1, 3, 8, 9 and 10; there is no 2, 4–7.","1/3/8/9/10。",true);
C("tc-class","📈","HK classification speeds on MET05 slide?","Typhoon over 64 kt, severe typhoon 80–100 kt, super typhoon over 100 kt.","64/80–100/100。");
C("hk-windshear","🏔️","Why is HKIA prone to windshear?","Nearby Lantau terrain disrupts flow; thunderstorms add more. Reports and LIDAR support alerts (HK specifics to verify).","地形。",true);
C("turb","🌀","Turbulence vs windshear (MET05)?","Turbulence disrupts attitude without significantly changing flight path; windshear disrupts the flight path.","turbulent flow vs wind shear。");
C("frost","❄️","Why is frost dangerous on wings?","It disrupts airflow, cuts lift and raises drag; aircraft must be clean before flight.","必須清除。");
C("fog-adv","🌊","Why does advection fog need wind?","Wind brings warm moist air over the cold surface; above about 15 kt it lifts into low stratus.","風 <15 kt。");
C("freezing-rain","🧊","Where does freezing rain form?","Rain falls from warm air aloft into sub-freezing air below (inversion), often ahead of a warm front.","warm front前。");
C("itcz","📍","What does ITCZ do to jets (MET05)?","The equatorial easterly jet sits above the ITCZ at around 45,000 ft.","jet 喺 ITCZ 上。");
C("coriolis","🔁","Coriolis effect size vs latitude and speed?","Zero at equator, greatest at poles, and increases with speed.","緯度＋speed。");
C("hk-monsoon","🌦️","Why check HK monsoon season for thunderstorms?","Summer southwesterly flow is hot and humid, supporting convection; winter NE monsoon is dry and cool.","夏thunderstorm。",true);
const E=(H,svg,tag,a)=>H.el(tag,a,svg);
const TX=(H,svg,x,y,s,fill,sz,anchor)=>{const t=H.el("text",{x,y,fill:fill||"#e2e8f0","font-size":sz||13,"text-anchor":anchor||"start"},svg);t.textContent=s;return t};
const anims=[
// 1. Jet stream cross-section -> CAT
{title:"Jet stream 剖面：shear 同 CAT",hint:"拉急流強度同飛行altitude，睇 6 kt/1000 ft 紅區",build(box,H){
 const svg=H.svg(box,700,330),say=H.note(box);
 const NX=14,NZ=9,x0=60,y0=30,cw=36,ch=26; // grid
 const cells=[];
 for(let i=0;i<NX;i++)for(let j=0;j<NZ;j++)cells.push({i,j,r:E(H,svg,"rect",{x:x0+i*cw,y:y0+j*ch,width:cw-1,height:ch-1,fill:"#1e293b"})});
 E(H,svg,"line",{x1:x0,y1:y0+NZ*ch,x2:x0+NX*cw,y2:y0+NZ*ch,stroke:"#64748b"});
 const zc=36,Wz=8,Wx=3.2; // core FL360 (k ft), width
 const zOf=j=>46-j*(18/(NZ-1))*1; // top=46k ft ... bottom=28k ft
 let vmax=120,alt=36,xpos=0.5;
 const ac=E(H,svg,"path",{d:"M-12,0 L12,0 L0,-10Z",fill:"#fbbf24"});
 const acl=E(H,svg,"line",{stroke:"#fbbf24","stroke-dasharray":"3 3"});
 TX(H,svg,x0,y0+NZ*ch+18,"← 冷空氣（極地側）　　　急流核心 (westerly, 出紙)　　　暖空氣（赤道側）→","#94a3b8",11);
 TX(H,svg,8,y0+10,"46k","#94a3b8",10);TX(H,svg,8,y0+NZ*ch,"28k","#94a3b8",10);
 const info=TX(H,svg,x0+NX*cw-4,18,"","#fbbf24",13,"end");
 function V(x,z){return vmax*Math.exp(-((x/Wx)*(x/Wx)+((z-zc)/Wz)*((z-zc)/Wz)))}
 function shear(x,z){return Math.abs(V(x,z)*(-2*(z-zc)/(Wz*Wz)))} // kt per 1000 ft
 function draw(){
  cells.forEach(c=>{const x=(c.i-(NX-1)/2)*0.5,z=zOf(c.j);const s=shear(x,z),v=V(x,z);
   const col=s>=6?"#ef4444":s>=4?"#f59e0b":v>=60?"#38bdf8":"#334155";c.r.setAttribute("fill",col);c.r.setAttribute("fill-opacity",Math.min(1,0.35+v/vmax*0.65))});
  const X=x0+(xpos*NX)*cw,Y=y0+(46-alt)/(18/(NZ-1))*ch+ch/2;
  ac.setAttribute("transform",`translate(${X},${Y})`);
  const xx=(xpos*NX-(NX-1)/2)*0.5;const s=shear(xx,alt),v=V(xx,alt);
  info.textContent=`FL${Math.round(alt*10)} 風 ${v.toFixed(0)} kt · vertical shear ${s.toFixed(1)} kt/1000ft`;
  say(s>=6?"紅區：shear ≥6 kt/1000ft → 中度至嚴重 CAT 可能，繫安全帶／轉altitude":s>=4?"橙區：shear 增加，留意輕度至中度turbulent flow":v>=60?"藍區：喺急流內 (>60 kt)，turbulent flow少但風大 → tailwind／頂風":"急流外，shear 細")}
 H.slider(box,"急流最大風 kt",50,180,120,v=>{vmax=v;draw()},5);
 H.slider(box,"飛行altitude (k ft)",28,46,36,v=>{alt=v;draw()},1);
 H.slider(box,"水平位置",0,1,0.5,v=>{xpos=v;draw()},0.02);
 draw();
}},
// 2. Fog types
{title:"Fog 類型比較",hint:"揀 fog 類型，再拉wind speed睇會唔會形成／散",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const types={
  rad:{n:"Radiation",wind:[2,8],txt:"晴夜、地面輻射冷卻，空氣冷到 dewpoint；日出消散",col:"#94a3b8"},
  adv:{n:"Advection",wind:[5,15],txt:"暖濕空氣吹過冷表面；要風；>15 kt 變低 stratus；可持久",col:"#60a5fa"},
  up:{n:"Upslope",wind:[5,20],txt:"穩定濕空氣被山坡抬升冷卻；要風；可維持數日",col:"#a78bfa"},
  steam:{n:"Steam (sea smoke)",wind:[0,15],txt:"冷乾空氣過暖水；水蒸發再凝結；常伴turbulent flow／icing",col:"#f97316"},
  front:{n:"Frontal",wind:[3,15],txt:"warm front雨落入冷空氣，蒸發令空氣飽和；喺 warm front 前",col:"#34d399"}};
 let cur="rad",wind=5;
 const gnd=E(H,svg,"rect",{x:0,y:230,width:700,height:70,fill:"#334155"});
 const fog=E(H,svg,"rect",{x:0,y:170,width:700,height:60,fill:"#cbd5e1","fill-opacity":0});
 const sun=E(H,svg,"circle",{cx:620,cy:50,r:0,fill:"#fbbf24"});
 const sceneG=E(H,svg,"g",{});
 const title=TX(H,svg,20,26,"","#fbbf24",16),sub=TX(H,svg,20,48,"","#e2e8f0",12);
 const arr=E(H,svg,"path",{d:"M40,140 L150,140",stroke:"#38bdf8","stroke-width":4,"marker-end":"url(#fa)"});H.marker(svg,"fa","#38bdf8");
 const wt=TX(H,svg,40,128,"","#38bdf8",12);
 function scene(){
  sceneG.innerHTML="";const t=types[cur];
  if(cur==="rad"){gnd.setAttribute("fill","#1e3a5f");TX(H,sceneG,300,215,"地面輻射冷卻 ↓","#94a3b8",12);E(H,sceneG,"path",{d:"M330,170 L330,225",stroke:"#38bdf8","stroke-width":3,"marker-end":"url(#fa)"})}
  else if(cur==="adv"){gnd.setAttribute("fill","#1e3a5f");TX(H,sceneG,250,95,"暖濕空氣 →","#fb923c",13);TX(H,sceneG,300,280,"冷表面 (冷海／冷陸)","#7dd3fc",12)}
  else if(cur==="up"){gnd.setAttribute("fill","#334155");E(H,sceneG,"polygon",{points:"350,230 700,230 700,150 560,130",fill:"#475569"});E(H,sceneG,"path",{d:"M200,200 L520,150",stroke:"#38bdf8","stroke-width":4,"marker-end":"url(#fa)"});TX(H,sceneG,200,190,"濕空氣被抬升 → 冷卻","#38bdf8",12)}
  else if(cur==="steam"){gnd.setAttribute("fill","#0e7490");TX(H,sceneG,300,280,"暖水面","#fdba74",12);TX(H,sceneG,250,95,"冷乾空氣 →","#7dd3fc",13);for(let i=0;i<8;i++)E(H,sceneG,"path",{d:`M${200+i*45},225 q8,-22 0,-44`,stroke:"#fdba74","stroke-width":2,fill:"none"})}
  else {gnd.setAttribute("fill","#334155");E(H,sceneG,"polygon",{points:"0,100 700,40 700,100",fill:"#fb923c","fill-opacity":.3});for(let i=0;i<10;i++)E(H,sceneG,"line",{x1:80+i*50,y1:80,x2:70+i*50,y2:165,stroke:"#38bdf8"});TX(H,sceneG,330,125,"warm front 雨落入冷空氣","#fdba74",12)}
  title.textContent=t.n+" fog";sub.textContent=t.txt;check()}
 function check(){
  const t=types[cur],w=wind;let ok=w>=t.wind[0]&&w<=t.wind[1];
  fog.setAttribute("fill",t.col);fog.setAttribute("fill-opacity",ok?0.85:0.08);
  wt.textContent="風 "+w+" kt";arr.setAttribute("d","M40,140 L"+(40+Math.min(w,25)*8)+",140");
  sun.setAttribute("r",cur==="rad"&&w<0?30:0);
  say(ok?t.n+" fog 形成：風 "+w+" kt 喺適合範圍 ("+t.wind[0]+"–"+t.wind[1]+" kt)":w>t.wind[1]?"風太大 ("+w+" kt)：fog 被吹散或抬成 low stratus":"風太細：呢類 fog 需要風先持續 (advection/upslope) 或條件唔足")}
 Object.keys(types).forEach(k=>H.button(box,types[k].n,()=>{cur=k;scene()}));
 H.slider(box,"wind speed kt",0,25,5,v=>{wind=v;check()},1);
 H.button(box,"☀ 日出加熱 (radiation 消散)",()=>{if(cur==="rad"){sun.setAttribute("r",30);fog.setAttribute("fill-opacity",0.08);say("日出加熱 → radiation fog burn off；advection/upslope 未必散")}else say("Advection／upslope fog 日出唔一定散，可持續數日")});
 scene();
}},
// 3. TAF reader
{title:"TAF 時間線判讀",hint:"拖時間，睇邊個 group 生效 + 飛行類別",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const tafText=["TAF XXXX 250500Z 2506/2612 09010KT 9999 FEW020","BECMG 2512/2514 18008KT 6000 -RA SCT015 BKN025","TEMPO 2516/2520 3000 TSRA BKN012CB","FM260200 36015G25KT 9999 SCT030","PROB30 2605/2608 0800 FG"];
 tafText.forEach((l,i)=>TX(H,svg,20,22+i*17,l,i==0?"#e2e8f0":"#7dd3fc",12));
 TX(H,svg,420,22,"(教學自編例，非真實 TAF)","#94a3b8",11);
 // hours from 2506 (0) to 2612 (30)
 const X=h=>40+h*21,Y=140;
 E(H,svg,"rect",{x:X(0),y:Y,width:30*21,height:24,fill:"#1e293b"});
 const seg=[{t:"base",s:0,e:30,c:"#334155",y:Y},{t:"BECMG",s:6,e:8,c:"#34d399",y:Y},{t:"TEMPO",s:10,e:14,c:"#f97316",y:Y+30},{t:"FM",s:20,e:30,c:"#60a5fa",y:Y},{t:"PROB30",s:23,e:26,c:"#a78bfa",y:Y+60}];
 seg.forEach(s=>{if(s.t!=="base"){E(H,svg,"rect",{x:X(s.s),y:s.y,width:(s.e-s.s)*21,height:22,fill:s.c,"fill-opacity":.8});TX(H,svg,X(s.s)+3,s.y+15,s.t,"#0f172a",11)}});
 TX(H,svg,X(0),Y-6,"25日06Z","#94a3b8",10);TX(H,svg,X(15),Y-6,"25日21Z","#94a3b8",10);TX(H,svg,X(30)-30,Y-6,"26日12Z","#94a3b8",10);
 const cur=E(H,svg,"line",{x1:X(0),y1:Y-4,x2:X(0),y2:Y+90,stroke:"#fbbf24","stroke-width":3});
 const out=TX(H,svg,40,250,"","#fbbf24",15),out2=TX(H,svg,40,272,"","#e2e8f0",13);
 const cat=(vis,cl)=>vis<1600||cl<500?"LIFR":vis<4800||cl<1000?"IFR":vis<8000||cl<3000?"MVFR":"VFR";
 function state(h){
  let b={vis:9999,cl:2000,wx:"",w:"090/10",base:"initial"};
  if(h>=8){b={vis:6000,cl:1500,wx:"-RA",w:"180/08",base:"BECMG 完成"}} else if(h>=6){b={vis:(9999+6000)/2|0,cl:1750,wx:"-RA 轉變中",w:"090→180",base:"BECMG 轉變中"}}
  if(h>=20)b={vis:9999,cl:3000,wx:"",w:"360/15G25",base:"FM260200"};
  let ov=[];let vis=b.vis,cl=b.cl;
  if(h>=10&&h<14){ov.push("TEMPO TSRA CB012");vis=Math.min(vis,3000);cl=Math.min(cl,1200)}
  if(h>=23&&h<26){ov.push("PROB30 FG 0800");vis=Math.min(vis,800)}
  return {b,vis,cl,ov}}
 function draw(h){const s=state(h);cur.setAttribute("x1",X(h));cur.setAttribute("x2",X(h));
  out.textContent=`Prevailing：${s.b.base} · 風 ${s.b.w} · vis ${s.b.vis} m · 雲底 ${s.b.cl} ft`;
  out2.textContent=(s.ov.length?"疊加："+s.ov.join(" + ")+" → ":"無 TEMPO/PROB → ")+"最差 vis "+s.vis+" m / ceiling "+s.cl+" ft → "+cat(s.vis,s.cl)+"（US 類別，教學用）";
  say(s.ov.length?"TEMPO/PROB 只係暫時／機率，要計入 alternate、fuel":"沿住時間行：FM 取代前面所有；BECMG 漸變；TEMPO 只疊加")}
 H.slider(box,"時間 (小時，由 25日06Z)",0,30,0,v=>draw(v),0.5);
 draw(0);
}},
// 4. HK TC approach and signal
{title:"typhoon迫近 HK：象限＋信號判斷",hint:"拉距離睇 RFQ；拉wind speed睇信號",build(box,H){
 const svg=H.svg(box,700,320),say=H.note(box);
 const hx=480,hy=200;
 E(H,svg,"rect",{x:0,y:0,width:700,height:320,fill:"#0c4a6e","fill-opacity":.4});
 E(H,svg,"circle",{cx:hx,cy:hy,r:120,fill:"none",stroke:"#fbbf24","stroke-dasharray":"5 5"});TX(H,svg,hx+30,hy-114,"~800 km (T1 範圍，check)","#fbbf24",11);
 E(H,svg,"circle",{cx:hx,cy:hy,r:7,fill:"#ef4444"});TX(H,svg,hx+10,hy+20,"HK","#fca5a5",13);
 const grp=E(H,svg,"g",{});
 const bands=[];for(let i=0;i<3;i++)bands.push(E(H,grp,"path",{fill:"none",stroke:"#e0f2fe","stroke-width":7-i*2,"stroke-opacity":.8}));
 E(H,grp,"circle",{cx:0,cy:0,r:10,fill:"#0f172a"});
 const rfq=E(H,grp,"path",{d:"M0,0 L0,-70 A70 70 0 0 1 70,0Z",fill:"#f97316","fill-opacity":.35});
 const lab=TX(H,svg,0,0,"右前象限 (最強)","#fb923c",12);
 const mv=E(H,svg,"path",{d:"M0,0 L0,0",stroke:"#fbbf24","stroke-width":3,"marker-end":"url(#tm)"});H.marker(svg,"tm","#fbbf24");
 let dist=250,ang=0,wind=50;
 const sigT=TX(H,svg,20,36,"","#fbbf24",22),sigD=TX(H,svg,20,60,"","#e2e8f0",13);
 function place(){ // TC moves NW->toward HK (comes from SE)
  const dx=-dist*0.707*0.5,dy=dist*0.707*0.5;const x=hx+Math.abs(dx)*0.0+(dist*0.6),y=hy+dist*0.45;
  grp.setAttribute("transform",`translate(${x},${y})`);
  const ex=-60,ey=-50;mv.setAttribute("d",`M${x},${y} L${x-50},${y-40}`);lab.setAttribute("x",x+8);lab.setAttribute("y",y-8)}
 H.loop(()=>{ang+=0.05;bands.forEach((b,i)=>{let d="";for(let a=0;a<4;a+=0.25){const r=14+a*(8+i*2)+i*5,t=a*1.3+ang+i*2.1;d+=(a?"L":"M")+(r*Math.cos(t)).toFixed(1)+","+(-r*Math.sin(t)).toFixed(1)}b.setAttribute("d",d)})});
 function sig(w){ // sustained wind km/h
  if(w>=118)return["No.10 Hurricane","持續風 ≥118 km/h"];
  if(w>=63)return["No.8 Gale / Storm（或更高）","持續風 63–117 km/h；T9 係預料顯著增強"];
  if(w>=41)return["No.3 Strong Wind","持續風 41–62 km/h"];
  return dist<=250?["No.1 Standby","TC 喺 ~800 km 內，預計影響 HK"]:["無信號","TC 較遠或風力未達"]}
 function upd(){const s=sig(wind);sigT.textContent="🚩 "+s[0]+"　（"+wind+" km/h）";sigD.textContent=s[1]+"（HKO 數值憑記憶，需核對）";
  say(wind>=63?"T8+：HK 機場大受影響；RFQ 最嚴重，wind shear／turbulent flow／暴雨最強":"先留意 T1/T3，睇預測路徑同風力；機組要計 alternate")}
 H.slider(box,"TC 距離 (示意 km)",0,500,250,v=>{dist=v;place();upd()},10);
 H.slider(box,"HK 持續風 km/h",0,150,50,v=>{wind=v;upd()},1);
 place();upd();
}},
// 5. Overshoot / undershoot
{title:"Windshear：Overshoot vs Undershoot",hint:"揀 shear 種類，睇 path 同 IAS",build(box,H){
 const svg=H.svg(box,700,300),say=H.note(box);
 const gx=60,gy=240;E(H,svg,"line",{x1:gx,y1:gy,x2:640,y2:70,stroke:"#64748b","stroke-dasharray":"6 4"});
 E(H,svg,"rect",{x:0,y:262,width:700,height:38,fill:"#475569"});
 E(H,svg,"line",{x1:360,y1:50,x2:360,y2:262,stroke:"#fbbf24","stroke-dasharray":"4 4"});TX(H,svg,366,60,"Windshear 層","#fbbf24",12);
 const ac=E(H,svg,"path",{d:"M-18,0 L18,0 L0,-8Z",fill:"#e2e8f0"});
 const trace=E(H,svg,"polyline",{fill:"none",stroke:"#38bdf8","stroke-width":3});
 const ias=TX(H,svg,20,26,"","#fbbf24",15);
 let kind="hw-",str=10,t=0;
 const kinds={ "hw-":["頂風減弱 → IAS 跌，undershoot",-1],"tw+":["tailwind增強 → IAS 跌，undershoot",-1],"dd":["Downdraft → undershoot",-1],"hw+":["頂風增強 → IAS 升，overshoot",1],"tw-":["tailwind減弱 → IAS 升，overshoot",1],"ud":["Updraft / thermal → overshoot",1]};
 function path(x){const baseY=gy+(x-gx)*(70-gy)/(640-gx);const k=kinds[kind][1];const post=Math.max(0,Math.min(1,(x-360)/120));return baseY-k*str*2*post}
 function pts(){let s="";for(let x=gx;x<=640;x+=10)s+=x+","+path(x)+" ";trace.setAttribute("points",s)}
 H.loop(()=>{t=(t+3)%580;const x=gx+t;ac.setAttribute("transform",`translate(${x},${path(x)-6}) rotate(${-14+(x>360?-kinds[kind][1]*str*0.6*0:0)})`);
  const k=kinds[kind][1],post=x>360?Math.min(1,(x-360)/120):0;ias.textContent="IAS 變化 "+(k>0?"+":"-")+Math.round(str*post)+" kt"});
 Object.keys(kinds).forEach(k=>H.button(box,{"hw-":"頂風減","tw+":"tailwind增","dd":"Downdraft","hw+":"頂風增","tw-":"tailwind減","ud":"Updraft"}[k],()=>{kind=k;pts();say(kinds[k][0]+"；要加／收 power、調 pitch，唔好追 IAS 細擺")}));
 H.slider(box,"Shear 強度 kt",5,30,10,v=>{str=v;pts()},1);
 pts();say("揀 shear 種類：虛線係下滑道，藍線係實際路徑");
}},
];
Cadet.extend("met",{topics,links:links.map(l=>["met."+l[0],"met."+l[1],l[2]]),cards,anims,
 src:"補漏：PHAK ch12 · Robson BAK ch7 · ATP ch8 · MTE5 圖頁 · MET05 圖頁 · ENZO/AELP"});
})();
