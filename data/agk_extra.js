// AGK 補漏：G1000/GFC700、fuel/oil/engine 管理、turbine 運作、flight controls、ice、oxygen/pressurisation、DA40 systems
(function(){
const GP="G1000 NXi Pilot's Guide (DA40)", CR="G1000 NXi Cockpit Ref Guide", EL="G1000 ELA GFC700 DA40", AF="DA40 AFM ch7", PH="PHAK ch7", AT="ATP Test Prep", RB="Robson BAK ch4", P2="AGK02 Piston engine.pdf";
const GG="G1000 Avionics", GF="Flight Controls", GI="Ice & Rain Protection", GO="Oxygen & Cabin Pressure";
const topics=[], cards=[], links=[];
const T=(id,g,t,d,pts,rel,src,check)=>topics.push({id:"agk."+id,g,t,d,pts,rel:rel.map(r=>r.indexOf(".")<0?"agk."+r:r),src,check:!!check});
const emo={};
const K=(t,q,a,zh,st)=>cards.push({e:emo[t]||"📘",q,a,zh,topic:"agk."+t,st:st||"ok"});
const L=(a,b,w)=>links.push(["agk."+a,"agk."+b,w]);

// ===== G1000 =====
T("g1000arch",GG,"G1000 NXi Architecture","Display＋LRU 組成，經 HSDB／ARINC 429 傳資料。",["PFD GDU 1050、MFD GDU 1054","2× GIA 64W（IAU）：comm hub＋GPS","GRS 79 AHRS＋GMU 44 magnetometer","GDC 72 ADC、GEA 71B engine unit","GMA 1360 audio、GTX transponder"],["g1000ahrs","g1000adc","g1000rev","g1000pfd"],GP+" ch1",false);
T("g1000pfd",GG,"PFD Layout","Attitude 大地平線，兩邊 tape，下面 HSI。",["左 airspeed tape、右 altitude tape","VSI、slip/skid、turn rate","Softkeys 喺底部","SVT 只係輔助（唔係 primary）","Alerts／CAS 窗喺右邊"],["g1000arch","g1000flags","g1000cas"],GP+" ch2",false);
T("g1000eis",GG,"EIS (Engine Indication)","MFD 左邊顯示 engine／fuel／electrical。",["Green＝正常、amber＝caution、red＝warning","白色＝未入 caution 但非正常","Amber X＝無有效 data","Dashes＝超出範圍","Engine softkey 展開全頁"],["g1000lean","g1000rev","oilind"],GP+" ch3",false);
T("g1000lean",GG,"Lean Assist","偵測每缸 EGT peak，幫手 lean。",["Assist softkey 開／關","最熱缸先高亮","Peak 後 cyan 標記，標 1st","全部 lean of peak → 標 Last","ΔPeak＝距離 peak 溫差"],["g1000eis","mixture","egtcht"],GP+" 3.3",false);
T("g1000ahrs",GG,"AHRS & Magnetometer","Gyro＋加速計＋GPS＋mag＋air data 算 attitude／heading。",["Normal：GPS＋mag","No-GPS：用 mag＋air data","No-Mag：attitude 有效、空中 heading 無效","缺 air data＋GPS：coast on gyros 後失效","Magnetic variation db（IGRF）約 5 年更新"],["g1000adc","g1000gps","g1000flags","gyro"],GP+" ch1 Fig1-7",false);
T("g1000adc",GG,"Air Data Computer (GDC)","Pitot／static／OAT → IAS、altitude、VS、OAT。",["經 ARINC 429 送 PFD／MFD／IAU／AHRS","失效：speed/alt/VS/OAT 紅 X","AHRS 靠 air data 做後備","QNH only；唔可以用 QFE","Pitot 堵塞可得假 IAS，備用錶對照"],["pitotstatic","blockage","g1000ahrs","g1000flags"],GP+" ch1 / ch2",false);
T("g1000gps",GG,"GPS Receivers & Integrity","每個 IAU 內置一個 GPS，AHRS 可轉用另一個。",["GPS1／GPS2 喺 Aux–GPS Status","單個失效：自動轉用後備＋message","GPS LOI＝integrity 唔夠","DR＝dead reckoning mode","兩個失效：AHRS 轉 No-GPS"],["g1000ahrs","g1000arch"],GP+" ch1 / CR",false);
T("g1000rev",GG,"Reversionary Mode","Display 壞，剩低嗰個顯示晒 PFD＋EIS。",["紅色 DISPLAY BACKUP 掣（audio panel）","自動轉用 AHRS／ADC／GEA／XPDR 後備路","壞咗嗰個 display 負責嘅 NAV／COM 會 flag invalid","格式同平時一樣，唔需要 pilot 操作","再撳掣即取消"],["g1000arch","g1000flags","g1000eis"],GP+" ch1 / CR p111",false);
T("g1000flags",GG,"Red/Amber X Flags","LRU 或功能失效 → 對應 field 出 X。",["Airspeed／alt／VS／OAT X → ADC","Attitude／heading X → AHRS／mag","Engine field amber X → GEA／sensor","開機一分鐘內仍 invalid 要檢查","Aux–System Status：綠剔／紅 X"],["g1000adc","g1000ahrs","g1000rev","g1000cas"],GP+" Table 1-1",false);
T("g1000cas",GG,"CAS Alert Levels","Warning／Caution／Advisory，色同聲不同。",["Warning：紅、連續 tone","Caution：琥珀、單一 tone","Advisory：白、冇 tone 要求","Softkey 閃，撳掣 acknowledge","Alerts window 最多 64 條，按優先次序"],["g1000cas40","g1000flags","warnclass"],GP+" App A",false);
T("g1000cas40",GG,"DA40 CAS Messages","DA40 嘅 warning／caution 觸發值。",["Warning：FUEL PRES <14 psi","Warning：OIL PRES <25 psi","ALTN FAIL、DOOR OPEN、STARTER、CO LVL HIGH","Caution：L/R FUEL LOW <3 gal","Caution：VOLTS LOW <25 V、PITOT FAIL／HT OFF"],["g1000cas","da40annun","elecfail"],GP+" App A",true);
T("gfc700",GG,"GFC 700 AFCS","FD＋AP＋MET，由 IAU、servo 組成。",["兩個 flight director，各喺一個 IAU","3 個 GSA 81 servo＋GSM 86 gearbox","MET＝AP 未接時嘅 manual electric trim","FD 限制：pitch −15°／+20°、roll 22°","控制掣喺 MFD（GDU 1042 型有掣）"],["afcs","fd","ap","gfcmodes","gfcdisc"],GP+" ch7 / "+EL,false);
T("gfcmodes",GG,"AFCS Modes","按掣揀 mode；預設 PIT／ROL。",["預設：Pitch Hold＋Roll Hold","HDG、NAV、APR 控橫向","ALT、VS、FLC、VNV 控縱向","Nose Up/Dn 改 reference","GA 掣喺 throttle"],["gfc700","fma","gfcdisc"],GP+" 7.2–7.3",false);
T("gfcdisc",GG,"AP Disconnect & CWS","手動 vs 自動斷開，annunciation 唔同。",["手動：琥珀 AP 閃 5 秒＋2 秒 tone","自動：紅白 AP 閃，tone 到確認","自動原因：system fail／invalid data／FD 算唔到","AP DISC 長撳：斷開＋servo／trim 斷電","CWS：撳住手飛，放手 AP 重新接"],["gfc700","gfcalert","failpass"],GP+" 7.5",false);
T("gfcalert",GG,"AFCS Status Alerts","PTRM／ROLL／PTCH／AFCS／PFT／mistrim。",["PTRM：pitch trim fail 或 switch 黐","ROLL／PTCH：該軸失效，AP inoperative","AFCS：AP＋MET 無，FD 或仍有","PFT：preflight test 進行／失敗","AIL→／↓ELE：servo 持續出力＝mistrim"],["gfcdisc","gfc700","fma"],GP+" Table 7-6",false);
T("g1000ela",GG,"DA40 Electrical Load Analysis","證明 alternator／battery 夠 IFR 同 emergency。",["Alternator 70 A × 0.8＝56 A","全機 IFR 負載 28.6 A＝51%","Battery 11 Ah × 0.7＝7.7 Ah","Essential bus 12.4 A → 約 0.62 h","Emergency pack 1.05 A，只供 AI＋flood"],["elecfail","battery","da40elec"],EL,true);
T("g1000haz",GG,"TAWS, SVT & Traffic Limits","全部只係情境意識，唔係 primary。",["SVT 唔可單靠 depict runway","TAWS 唔可做主要避地","Traffic display 無 RA，要 see and avoid","唔可用 QFE altimeter","Database 要 current（Garmin／Jeppesen）"],["gpws","tcas","g1000pfd"],CR+" p5-6",false);

// ===== Piston fuel/oil =====
T("octane","Fuel & Induction","Octane & Fuel Grades","Octane＝抗 detonation，唔係能量。",["80 紅、100 綠、100LL 藍","Jet A 無色／草黃，唔可入 piston","MOGAS 揮發性高，除非有批准","舊燃料 octane 會跌","用低 octane → detonation"],["detonation","fuelcontam","fuelinj"],P2+" / "+RB+" / "+PH,false);
T("fuelcontam","Fuel & Induction","Fuel Contamination","最常見係水；每次飛前 drain 檢查。",["Sump／strainer／tank 都要放","用透明容器睇水同雜質","夜凍 → condensation；tank 滿啲減少","檢出水：重複放到清，搖翼","冬天水凍堵管；暖天流入 carb"],["fuelsys","fuelicing","octane"],PH+" / "+RB+" / "+P2,false);
T("fuelfeed","Fuel & Induction","Gravity vs Pump Feed","高翼靠weight；低翼要 pump。",["Gravity：tank 高過 carb","Pump：engine-driven＋electric boost","Boost 用於 start、TO、LDG、轉 tank","Primer 直接噴入 intake manifold","Gauge 只保證 empty 準；睇 tank"],["fuelsys","fuelselector","da40fuel"],PH+" / "+RB,false);
T("fuelselector","Fuel & Induction","Fuel Selector & Tank Management","揀錯 tank＝fuel starvation 常見原因。",["LEFT／RIGHT／BOTH／OFF","唔好飛乾一個 tank → 吸氣 vapour lock","轉 tank 前開 boost pump","唔好喺低altitude轉；睇 fuel pressure","注意 placard（如 level flight only）"],["fuelfeed","fuelsys","da40fuel"],PH+" / "+RB,false);
T("fuelicing","Fuel & Induction","Fuel System Icing","燃料入面嘅水icing堵 filter。",["Free water 沉底；entrained 懸浮","icing堵 screen／strainer／filter","EGME 0.15% 抑制（FAA 資料）","Additive 唔取代 carb heat","凍住嘅 drain 要暖機庫解凍"],["fuelcontam","carbice"],PH,true);
T("refuel","Fuel & Induction","Refuelling & Bonding","靜電火花會點fuel氣：先 bond／接地。",["先接地 aircraft，再開 cap","Nozzle bond 到fuselage並保持","Drum：drum→地→機→nozzle","Chamois 增靜電；唔用膠桶","engine同 ignition 要關"],["fuelsys","octane"],PH+" / "+RB,false);
T("mixcons","Fuel & Induction","Rich/Lean Consequences & ICO","微 rich 冷卻缸；太 lean 高 power → detonation。",["Over-rich：低 power、火咀積碳","Over-lean 高 power：CHT 升","Power >75% 用 full rich（Robson）","巡航高過 5000 ft 通常要 lean","ICO 關機：燒淨 manifold 內混合氣"],["mixture","detonation","egtcht"],RB,true);
T("lubfun","Oil, Cooling, Exhaust","Functions & Properties of Oil","五大功能：Lube、Cool、Clean、Seal、Protect。",["Viscosity 係最重要特性","Multigrade 例如 15W50","高溫變稀、低溫變稠","Oil cooler 帶走熱","混油短期冇事；冇油先致命"],["lube","oilprob","oilind"],RB+" / "+P2,false);
T("oilprob","Oil, Cooling, Exhaust","Oil Problems","按 pressure／temp 組合判斷。",["低壓：油少、漏、pump、PRV 卡開","高溫：油少或缸過熱","起動 30 秒內無壓 → 關機","壓低但temperature正常 → 可能係錶壞","漸漸漏油：temperature先升，之後pressure突降"],["oilind","lubfun","proploss"],RB,false);
T("cowlflap","Oil, Cooling, Exhaust","Cowl Flaps & Overheat Actions","高 power 低速最難冷卻。",["Take-off／climb 最危險","開 cowl flaps","Rich mixture 冷卻","加速（降nose）","減 power"],["cooling","egtcht","mixcons"],RB+" / "+P2,false);
T("starter","Electrical","Starter & Master Switch","Start 電流好大，唔經 ammeter。",["Master＝BAT＋ALT 兩半","BAT 關會連帶 ALT 關","起動大電流經 solenoid","Ancillary 設備起動後先開","DA40 START 燈：pinion 未退出"],["bus","ammeter","da40elec"],RB+" / "+AF,false);
T("fadec","Fuel & Induction","FADEC","電腦控制 fuel／ignition／prop，單桿。",["取代 mag、carb heat、mixture","兩條相同 digital channel","需要後備電源","每缸獨立調 fuel 同點火","可用於 piston 同 turbine"],["ap","mixture","gpws"],PH+" ch7",false);

// ===== Turbine ops =====
T("turbinst","Gas Turbine","Turbine Engine Instruments","EPR、EGT/TIT、torque、N1、N2。",["EPR＝turbine discharge／compressor inlet","EGT 系：TIT、TOT、ITT、TGT","Turboprop 用 torquemeter","N1＝low pressure compressor %","N2＝high pressure compressor %"],["turbine","spools","hotstart"],PH,false);
T("hotstart","Gas Turbine","Hot / Hung Start","EGT 超限＝hot start；唔加速＝hung start。",["Hot：太多油或 turbine rpm 太低","Hung：未加速到 idle","原因：電源不足、fuel control 故障","Hot start 要按 AFM 檢查","Start 要監察 EGT"],["turbinst","combustor"],PH+" / "+AT,false);
T("compstall","Gas Turbine","Compressor Stall","葉片 AoA 超 critical → airflow停滯。",["Transient：間歇 bang","Steady：大聲轟鳴＋震","RPM 波動、EGT 升","回復：減 power、降 AoA、加速","預防：VIGV、bleed valve、遵守限制"],["compressor","flameout","spools"],PH+" / "+AT,false);
T("flameout","Gas Turbine","Flameout","火熄：rich 或 lean 都可以。",["Rich：加速太快","Lean：高空低壓油／拉低 throttle","燃料中斷（姿態、icing、用晒）","徵狀似 engine failure","按 AFM airstart 程序"],["compstall","combustor"],PH,false);
T("fod","Gas Turbine","FOD","外物吸入損壞 compressor／turbine。",["小凹痕至完全摧毀","鳥擊、冰、碎石","Vortex dissipater","Preflight 睇 inlet","Axial compressor 較易受損"],["intake","compressor"],PH+" / AGK06",false);
T("turbthrust","Gas Turbine","Thrust, Density & ESHP","Thrust 隨空氣density變。",["高溫／高 density altitude → thrust 降","humidity影響細（piston 大）","Turboprop ESHP＝shaft HP＋jet thrust","Jet thrust 約佔 15–25%（ATP）","TIT 係主要限制"],["turbtypes","turbinst","boost"],AT+" ch4 / "+PH,false);

// ===== Flight controls =====
T("fcprimary",GF,"Primary Flight Controls","Aileron、elevator、rudder，再加 trim。",["Cable＋pulley 或 push-pull rod","Column、yoke、side-stick","Stabilator＝全動 tailplane","Control lock／restrain 防風","Preflight 最重要檢查之一"],["tabs","poweredfc","fcsecondary"],RB+" / "+AT,false);
T("fcsecondary",GF,"Secondary Controls","Tabs、flaps、slats、spoilers。",["高lift：增 CLmax、降stall speed","Spoiler：加 drag、減 lift","Tabs：減力或 trim","Primary 同 secondary 分類常考","Ruddervator 屬 primary"],["fcprimary","flaptypes","spoilers"],AT,false);
T("tabs",GF,"Tab Types","方向相對 surface 決定作用。",["Trim tab：反方向，改 hinge moment","Servo tab：反方向，帶動 surface","Anti-servo：同方向，增加力防過偏","Control tab：manual reversion 時用","方向諗法：tab 上 → surface 下（servo）"],["fcprimary","poweredfc"],AT+" ch3",false);
T("flaptypes",GF,"Flap & Slat Types","Plain、split、slotted、Fowler；前緣 slat／Krueger。",["Fowler：後移加面積加 camber","Slotted：airflow過 slot 延遲分離","Slat：開 gap，延遲stall","Krueger：前緣向下增 camber","目的：CLmax↑、stall speed↓"],["fcsecondary","wings"],RB+" / "+AT,false);
T("spoilers",GF,"Spoilers","Flight spoiler 同 ground spoiler。",["單邊升：助 roll","同時升：減速／急降","地面：破壞 lift，加強刹車","Ground spoiler 靠 gear 感應","唔增加 lift"],["fcsecondary","brakes"],AT+" ch3",false);
T("poweredfc",GF,"Powered Controls & Manual Reversion","高氣動力 → 用 hydraulic actuator。",["Hydraulic 全失 → manual reversion","Control tab 幫手移 surface","Upper rudder（B727）後備","力量感需要 artificial feel","與 fly-by-wire 唔同體系"],["hydsource","tabs","fcprimary"],AT+" ch3",true);
T("ailerons2",GF,"Inboard/Outboard Aileron & VG","高速鎖住 outboard，防翼過度扭。",["Inboard 全程用","Outboard 只喺 flaps 放時用","Flaps 收 → outboard locked out","Vortex generator 延遲 shock separation","改善高速 aileron 效用"],["fcprimary","spoilers"],AT+" ch3",false);
T("structforms",GF,"Airframe Forms & Rigger's Angle","Monocoque／externally braced，incidence 固定。",["Semi-monocoque：frame＋longeron＋skin","翼：spar、rib、stringer","External bracing：flying vs landing wires","Rigger's angle：翼同 tailplane 對fuselage角度","唔可自行改變 incidence"],["fuselage","wings","stress"],RB,false);

// ===== Ice =====
T("deiceboots",GI,"Anti-ice vs De-ice & Boots","Anti-ice 防止；de-ice 去除。",["Boot 由 pneumatic 脹開打碎冰","Bridging 喺現代 boots 不存在（PHAK）","可一見冰就 cycle","睇 suction／pneumatic gauge","保護：前緣、pitot、vent、風擋、prop"],["thermalai","pneu","pitotstatic"],PH,false);
T("thermalai",GI,"Thermal & TKS Anti-ice","Bleed air 或電熱；TKS 流出防凍液。",["Turbine：compressor bleed air 熱前緣","ThermaWing：電熱 graphite foil","TKS：細孔流出 antifreeze","入冰前先開","唔係長時間飛冰設計"],["deiceboots","pneuuse","propai"],PH,false);
T("propai",GI,"Prop, Windscreen & Pitot Heat","Alcohol 或電加熱。",["Prop：alcohol 沿葉前緣；或電 boot","Boot 一葉唔熱 → 不平衡震動","Windscreen 電熱：只可飛行中用","可令 compass 偏差達 40°","Pitot heat：power-on 燈＋ammeter"],["deiceboots","pitotstatic","compass"],PH+" / "+AT,false);
T("icebasic",GI,"Fuel & Induction Ice Links","icing唔止翼：carb、fuel、pitot 都有。",["Carb ice：venturi 降溫","Fuel ice：水icing堵 filter","Pitot ice：IAS 錯","Alternate air／static source 備用","入冰前檢查系統"],["carbice","fuelicing","blockage"],PH,false);

// ===== Oxygen / pressure =====
T("o2req",GO,"Oxygen Requirements & Hypoxia","altitude越高氧分壓越低。",["FAA 例子：12,500–14,000 ft 超 30 分鐘","14,000 ft 以上持續用","15,000 ft 以上所有乘員要有","日間 10,000 ft、夜間 5,000 ft 建議用（PHAK）","CASA／HK CAD 數字唔同，需核對"],["o2types","decomp","pressurisation"],PH+" ch7",true);
T("o2types",GO,"Oxygen System Types","Diluter-demand、pressure-demand、continuous flow、pulse。",["Diluter-demand：用戶吸氣先供氧","Pressure-demand：高過 40,000 ft 安全","Continuous flow＋reservoir bag：乘客","Pulse-demand 省氧 50–85%","Pulse oximeter 量血氧"],["o2req","decomp"],PH,false);
T("o2safety",GO,"Oxygen Handling Safety","氧助燃，油脂接觸會燃燒。",["高壓瓶約 1,800–2,200 psi","temperature跌 → pressure跌（唔一定漏）","禁止油脂、吸煙","飛前測試 mask 同 regulator","加氧唔同時加油"],["o2types","pneu"],PH,false);
T("cabinalt",GO,"Cabin Altitude & Differential","Cabin pressure同外面嘅差＝differential。",["最大巡航 cabin 約 8,000 ft","Isobaric range：維持設定 cabin alt","Differential range：維持 max psid","Outflow valve 控壓","Safety valve：pressure／vacuum relief＋dump"],["pressurisation","aircon","fatigue"],PH+" ch7",false);
T("decomp",GO,"Decompression","Explosive <0.5 秒；rapid 較慢。",["主要危險：hypoxia","TUC 縮短到 1/3–1/4","戴氧氣罩，緊急descent","結構破損：吹出機外風險","Visual＋aural warning 必備"],["o2req","cabinalt","pressurisation"],PH+" / "+AT,false);

// ===== Electrical monitoring / misc =====
T("voltdiag","Electrical","Voltmeter Diagnostics","電壓睇 alternator 狀態。",["28 V 系統正常約 27.5 V","14 V 系統約 13.75 V","Alternator 失效 28 V → 約 25 V","跌到 24 V＝battery 近乾","over-voltage：關 ALT、減載、盡快落地"],["alternator","battery","elecfail"],RB,false);
T("cbreset","Electrical","Circuit Breaker Reset Rule","等 90 秒；只 reset 一次。",["Bimetal 要時間冷卻","有燒焦味／煙：唔好 reset","可能就關咗設備先 reset","再跳＝真故障","Overload switch 可手動開"],["cb","bus","elecfail"],RB,false);
T("cabinheat","Pneumatic & Pressurisation","Cabin Heating Types","Exhaust muff、fuel暖氣、bleed air。",["Muff：最簡單，有 CO 風險","Fuel-fired heater：要 vent 好","Combustion heater：pressure令漏氣向外","Bleed air：turbine 機，有 check valve／sensor","懷疑 CO → 關暖氣、開風、落地"],["comon","exhaust","aircon"],PH+" / "+RB,false);
T("altsetting","Instruments","Altimeter Settings & Errors","設定錯就讀數錯；temperature影響 true altitude。",["QNH／STD 29.92 inHg／1013 hPa","設定偏高 → 讀數偏高","約 1,000 ft 對 1 inHg（ATP）","冷於 standard → true 低過 indicated","地面誤差 >75 ft（FAA）需存疑"],["altvsi","pitotstatic","asi"],AT+" ch2",true);
T("machmeter","Instruments","Machmeter & Air Data","Mach＝speed／聲速，用 pitot＋static。",["IAS 只喺海平面標準一致","TAS 高空通常高過 IAS","Machmeter 經 altimeter 機件修正","Jet 常有三套 pitot-static","Aux 系統供非飛行instrument"],["asi","pitotstatic","g1000adc"],AT+" ch2",false);
T("stallwarn","Instruments","Stall Warning","飛機快stall時發聲。",["DA40：吸力 orifice 喺左翼前緣","高過stall約 5–10 kt 響","越近越大聲","Orifice 有紅圈標記","Preflight 要測試（按 AFM）"],["blockage","da40"],AF+" 7.13",false);
T("tailwheel","Landing Gear & Brakes","Trike vs Tailwheel Handling","CG 位置決定directional stability。",["Trike：CG 喺主輪前，抗 ground loop","Trike：視野好、可大力刹車","Tailwheel：CG 喺主輪後，易 ground loop","Tailwheel 適合 unimproved field","過高落groundspeed度 → wheelbarrowing"],["gearcfg","nosegear","brakes"],PH+" / "+RB,false);

// ===== DA40 =====
T("da40fuel","Aircraft Types","DA40 Fuel System","Mechanical＋electric pump，selector 有安全掣。",["Standard 20 US gal／tank，LR 25 gal","Selector：LEFT／RIGHT／OFF","電動 pump：起動、TO、LDG、轉 tank","每 tank 兩條 vent（capillary＋check valve）","Gascolator 喺最低位，可 drain"],["fuelfeed","fuelselector","da40"],AF+" 7.10",false);
T("da40elec","Aircraft Types","DA40 Electrical System","28 V DC，70 A alternator，essential bus。",["V-belt 驅動 alternator","Lead-acid battery 約 10–11 Ah","Emergency pack 供 AI＋flood","AFM 寫 1 h 30；ELA 另有 1.24／2.7 h","Mag 獨立於電網"],["g1000ela","elecfail","da40annun"],AF+" 7.11 / "+EL,true);
T("da40annun","Aircraft Types","DA40 Annunciator Panels","DAI（方燈）同 White Wire（平面）兩種。",["Preflight 必須 test","DAI：個別燈","White Wire：warning／caution＋acknowledge","Low fuel 兩邊都 <3 gal 變連續 tone","IGN 白燈＝電子點火失效，mag 接手"],["g1000cas40","da40elec","fire"],AF+" 7.11.2–3",false);
T("da40eng","Aircraft Types","DA40 Engine & Controls","Throttle、RPM、mixture；alternate air 拉桿。",["IO-360-M1A：180 hp@2700、max cont 160 hp@2400","RPM lever 前＝fine／高 RPM","Governor／油壓失 → fine pitch","Alternate air：拉後打開","木質葉輕：RPM 變化快，推桿要慢"],["da40","csu","altair"],AF+" 7.9",false);
T("da40struct","Aircraft Types","DA40 Airframe & Gear","GFRP／CFRP 複合材料，T-tail。",["Wing 前後 spar，上下殼＝fail-safe","Aileron、elevator、flap 用 rod；rudder 用 cable","Flap 電動；trim 用 Bowden cable","Gear：sprung steel strut＋castering nosewheel","Hydraulic disc brake；hinge 要 roll pin"],["fuselage","wings","brakes"],AF+" 7.2–7.5",false);

// ===== Cards =====
const GE={"G1000 Avionics":"🖥️","Flight Controls":"🕹️","Ice & Rain Protection":"🧊","Oxygen & Cabin Pressure":"😮‍💨","Fuel & Induction":"⛽","Oil, Cooling, Exhaust":"🛢️","Gas Turbine":"🔥","Electrical":"🔋","Instruments":"🧭","Aircraft Types":"🛩️","Landing Gear & Brakes":"🛬","Pneumatic & Pressurisation":"💨"};
topics.forEach(t=>{emo[t.id.slice(4)]=GE[t.g]||"📘"});

K("g1000arch","What are the main LRUs in a G1000 NXi?","PFD and MFD displays, two GIA integrated avionics units, GRS AHRS with GMU magnetometer, GDC air data computer, GEA engine unit, GMA audio panel and GTX transponder.","主要 LRU。");
K("g1000arch","What does the GIA do?","It is the communication hub with GPS, COM/NAV receivers and flight director; each IAU pairs with one display.","GIA＝IAU，通訊樞紐。");
K("g1000arch","What does LRU stand for?","Line Replaceable Unit, a box that can be swapped as a unit.","可整件更換嘅單元。");
K("g1000pfd","What does the G1000 PFD show?","Attitude, airspeed and altitude tapes, VSI, HSI, turn rate, slip/skid and alerts.","PFD 內容。");
K("g1000pfd","Can you use SVT as your only reference to the runway?","No; SVT is an awareness aid only and must not be the sole means of judging runway position or approach path.","SVT 輔助。");
K("g1000eis","What do the colours on EIS gauges mean?","Green is normal, amber caution, red warning; white means outside normal but not yet caution.","綠、琥珀、紅。");
K("g1000eis","What does an amber X on an engine gauge mean?","The display is not receiving valid sensor data for that field.","資料無效。");
K("g1000lean","How does Lean Assist help?","It highlights the first cylinder to peak EGT and shows delta from peak as you reduce fuel flow, marking the last cylinder to peak.","偵測 peak。");
K("g1000lean","What does delta-peak show?","The difference between the peak EGT and the present EGT of the selected cylinder.","距 peak 溫差。");
K("g1000ahrs","What sensors does the AHRS use?","Internal gyros and accelerometers plus GPS, magnetometer and air data.","AHRS 輸入。");
K("g1000ahrs","What happens if the magnetometer fails?","The AHRS switches to a no-magnetometer mode; attitude remains valid but heading becomes invalid when airborne.","Mag 失效。");
K("g1000ahrs","What happens if both GPS fail but air data and mag are valid?","The AHRS continues in reversionary No-GPS mode.","No-GPS mode。");
K("g1000ahrs","What if air data fails while AHRS is in No-GPS mode?","Attitude and heading go invalid and red X flags appear.","兩個後備都失。");
K("g1000ahrs","Why must the magnetic field database be updated?","It corrects heading for variation (IGRF model, updated about every five years); an outdated database can give wrong heading.","約 5 年更新。");
K("g1000adc","What does the GDC provide?","Pressure altitude, airspeed, vertical speed and OAT from the pitot/static system and temperature probe.","ADC 輸出。");
K("g1000adc","Which flags appear on ADC failure?","Red X on airspeed, altitude, vertical speed and OAT.","ADC 失效。");
K("g1000adc","What altimeter setting does the G1000 require?","QNH or standard pressure only; QFE does not work correctly.","唔可用 QFE。");
K("g1000gps","What is GPS LOI?","Loss of Integrity monitoring: GPS integrity is insufficient for the current phase of flight.","Integrity 不足。");
K("g1000gps","How many GPS receivers does the G1000 have?","Two, one in each IAU; the AHRS switches to the other if one fails.","兩個 GPS。");
K("g1000rev","What is reversionary mode?","If one display fails, the remaining display shows PFD and engine data in normal format using backup data paths.","Display 失效模式。");
K("g1000rev","How do you activate reversionary mode manually?","Press the red DISPLAY BACKUP button on the audio panel.","紅色 DISPLAY BACKUP。");
K("g1000rev","What is lost when a PFD fails?","NAV1 and COM1 functions that the failed display provided are flagged invalid on the remaining display.","NAV1／COM1 invalid。");
K("g1000flags","What does a red X over heading indicate?","The display is not receiving valid heading from the AHRS or magnetometer.","Heading X。");
K("g1000flags","What if windows stay flagged one minute after power-up?","Treat it as a fault; the system should be serviced.","開機後一分鐘。");
K("g1000flags","Where can you check LRU status?","On the Aux - System Status page: green check for active, red X for failed.","Aux System Status。");
K("g1000cas","What are the three G1000 alert levels?","Warning (red, continuous tone), caution (amber, single tone), advisory (white).","三級警報。");
K("g1000cas","How do you acknowledge a CAS alert?","Press the flashing Warning, Caution or Advisory softkey; the Alerts window then shows the message.","撳 softkey。");
K("g1000cas40","Which DA40 conditions are warnings?","ALTN FAIL, CO LVL HIGH, DOOR OPEN, FUEL PRES (below 14 psi), OIL PRES (below 25 psi) and STARTER.","Warning 清單。");
K("g1000cas40","Which DA40 conditions are cautions?","L/R FUEL LOW (below 3 gal), PITOT FAIL, PITOT HT OFF and VOLTS LOW (below 25 V per Pilot's Guide).","Caution 清單。");
K("gfc700","What are the three parts of the Garmin AFCS?","Flight director, autopilot and manual electric trim.","FD、AP、MET。");
K("gfc700","What are the FD pitch and roll command limits?","Pitch -15 to +20 degrees and roll 22 degrees.","FD 限制。");
K("gfcmodes","What modes engage when you press the FD or AP key?","Default Pitch Hold and Roll Hold (PIT and ROL).","預設 PIT／ROL。");
K("gfcmodes","Which keys select vertical modes?","ALT, VS, FLC and VNV; Nose Up/Down changes the reference.","縱向 mode。");
K("gfcdisc","How is a manual AP disconnect shown?","A flashing amber AP for five seconds with a two-second disconnect tone.","手動斷開。");
K("gfcdisc","How is an automatic AP disconnect shown?","A flashing red and white AP with a tone until acknowledged with AP DISC or AP TRIM.","自動斷開。");
K("gfcdisc","What does holding the AP DISC switch do?","It disconnects the AP and removes power from the servos and trim motor.","長撳 AP DISC。");
K("gfcdisc","What is CWS?","Control Wheel Steering: hold the button to hand-fly while the FD syncs; releasing re-engages the AP with the new reference.","CWS。");
K("gfcalert","What does PTRM mean?","A pitch trim failure or a stuck AP TRIM switch.","PTRM。");
K("gfcalert","What is the action for a suspected autopilot malfunction?","Grip the stick, hold AP DISC, retrim, pull the relevant circuit breakers, then release the switch.","AP 故障程序。");
K("gfcalert","Why avoid overpowering the autopilot?","Force on the controls makes auto-trim run out of trim, giving large forces after disconnect.","會令 trim 跑偏。");
K("g1000ela","How much alternator capacity is available after derating in the DA40 ELA?","70 A x 0.8 = 56 A; the IFR load of 28.6 A is about 51 percent.","56 A，51%。");
K("g1000ela","How long can the ship battery run the essential bus?","11 Ah x 0.7 = 7.7 Ah; at 12.4 A that is about 0.62 hours.","7.7÷12.4≈0.62 h。");
K("g1000ela","What does the emergency battery pack supply?","The attitude indicator and flood lighting only.","只供 AI 同 flood。");
K("g1000haz","Does the G1000 traffic display provide resolution advisories?","No; it supports see-and-avoid only and does not replace pilot responsibility.","無 RA。");
K("octane","What does octane rating measure?","Resistance to detonation, not energy content.","抗爆性。");
K("octane","Identify AVGAS colours.","80 red, 100 green, 100LL blue; Jet A is colourless or straw.","燃料顏色。");
K("octane","What happens if you use lower-octane fuel than recommended?","Detonation can occur, causing power loss and engine damage.","低 octane。");
K("fuelcontam","Where do you sample fuel on preflight?","From the strainer quick drain and each tank sump into a clear container.","Drain 位置。");
K("fuelcontam","Why keep tanks full overnight?","Less air space means less condensation and water in the tanks.","減 condensation。");
K("fuelfeed","Why do low-wing aircraft need fuel pumps?","Tanks are below the engine so gravity cannot feed it.","低翼無weight。");
K("fuelfeed","When is the electric boost pump used?","Start, take-off, landing, tank changes and low fuel pressure.","Boost pump。");
K("fuelselector","What is the risk of running a tank dry?","Air enters the fuel system and may cause vapour lock that is hard to clear.","Vapour lock。");
K("fuelselector","What should you do before switching tanks?","Turn on the boost pump and monitor fuel pressure.","轉 tank。");
K("fuelicing","Why does water in fuel matter at altitude?","It can freeze and block screens, strainers and filters.","水icing。");
K("refuel","What is the bonding sequence from a drum?","Drum to ground, ground to aircraft, then nozzle or drum to aircraft before removing the cap.","接地順序。");
K("mixcons","What are the risks of an over-lean mixture at high power?","High cylinder head temperature and detonation.","太 lean。");
K("mixcons","Why use idle cut-off to shut down?","It burns off the fuel-air mixture so none remains in the manifold.","ICO。");
K("lubfun","What are the five functions of engine oil?","Lubricate, cool, clean, seal and protect against corrosion.","五大功能。");
K("lubfun","What does 15W50 mean?","A multigrade oil that behaves like 15-weight when cold and does not thin more than 50-weight when hot.","Multigrade。");
K("oilprob","What does low oil pressure with normal temperature suggest?","Possibly a faulty gauge, but monitor both.","可能錶壞。");
K("oilprob","What should oil pressure do after start?","Rise within about 30 seconds, otherwise shut down.","30 秒內。");
K("cowlflap","How do you reduce high CHT in flight?","Open cowl flaps, enrich mixture, increase airspeed and reduce power.","降 CHT。");
K("starter","Does start current show on the ammeter?","No; it flows through the starter solenoid on a direct heavy path.","唔顯示。");
K("starter","How does the split master switch behave?","BAT can be on alone; ALT alone is not possible, and turning BAT off switches ALT off.","Master 分兩半。");
K("fadec","What does FADEC replace?","Mixture control, magneto, carb heat and priming for single-lever operation.","取代手動控制。");
K("fadec","Why two channels in FADEC?","Redundancy; each channel can control all functions.","兩個 channel。");
K("turbinst","What is EPR?","Engine pressure ratio, turbine discharge pressure divided by compressor inlet pressure.","EPR。");
K("turbinst","What do N1 and N2 show?","Rotational speed of the low and high pressure compressors as percent of design RPM.","N1／N2。");
K("hotstart","What causes a hot start?","Too much fuel or insufficient turbine RPM so EGT exceeds limits.","Hot start。");
K("hotstart","What is a hung start?","The engine fails to accelerate to idle after light-off.","Hung start。");
K("compstall","What is a compressor stall?","Blade angle of attack exceeds critical so airflow separates and may reverse.","Compressor stall。");
K("compstall","How do you recover from a compressor stall?","Reduce power, lower angle of attack and increase airspeed.","減 power。");
K("flameout","What causes a flameout?","Too rich or too lean a mixture or fuel interruption; common at high altitude and low power.","Flameout 原因。");
K("fod","What is FOD?","Damage from ingested debris, bird strikes or ice.","外物損壞。");
K("turbthrust","What does ESHP include?","Shaft horsepower to the propeller plus residual jet thrust.","ESHP。");
K("turbthrust","Why does turbine thrust fall in hot weather?","Lower air density reduces mass flow.","density低。");
K("fcprimary","Which surfaces are primary controls?","Ailerons, elevator and rudder.","Primary。");
K("fcprimary","What is a stabilator?","A single all-moving tailplane serving as the elevator.","全動 tail。");
K("fcsecondary","Which devices are secondary controls?","Tabs, flaps, slats and spoilers.","Secondary。");
K("tabs","Which way does a servo tab move?","Opposite to the control surface.","反方向。");
K("tabs","What does an anti-servo tab do?","Moves with the surface to raise control forces and stop full deflection.","同方向。");
K("flaptypes","What is the purpose of high-lift devices?","Raise CLmax and lower stall speed.","增 CLmax。");
K("flaptypes","How does a slat delay stall?","It opens a slot that lets high-energy air flow over the upper surface.","Slot。");
K("spoilers","Why deploy ground spoilers?","They destroy lift to put weight on the wheels so brakes work better.","地面 spoiler。");
K("poweredfc","What happens on hydraulic failure in a manually reverting design?","Control tabs move the surfaces aerodynamically.","Manual reversion。");
K("ailerons2","Why lock outboard ailerons at high speed?","To avoid excessive roll and wing bending when flaps are retracted.","防翼彎。");
K("structforms","What is rigger's angle of incidence?","The fixed angle between wing or tailplane and the fuselage axis.","Rigger's angle。");
K("structforms","Compare flying and landing wires.","Flying wires carry flight loads; landing wires carry ground and negative loads.","兩種鋼線。");
K("deiceboots","Anti-ice versus de-ice?","Anti-ice prevents ice forming; de-ice removes it.","分別。");
K("deiceboots","Do modern boots suffer bridging?","PHAK says no; cycle as soon as ice appears.","Bridging。");
K("thermalai","How does TKS work?","Antifreeze weeps through holes in the leading edge.","TKS。");
K("propai","Why can windscreen heat affect the compass?","Its electrical current can cause deviation up to about 40 degrees.","Compass 偏差。");
K("icebasic","Name icing types beyond airframe ice.","Carburettor, fuel and pitot icing.","其他icing。");
K("o2req","When is crew oxygen required in the FAA example?","After 30 minutes between 12,500 and 14,000 ft and always above 14,000 ft.","FAA 規定。");
K("o2types","What is a pulse-demand system?","It delivers oxygen only during inhalation, saving 50-85 percent.","Pulse demand。");
K("o2safety","Why can an oxygen cylinder read lower on a cold day?","Pressure falls with temperature even without leakage.","temperature效應。");
K("cabinalt","What is differential pressure?","Cabin pressure minus ambient pressure.","Differential。");
K("cabinalt","What is typical cabin altitude at max cruise?","About 8,000 ft.","約 8,000 ft。");
K("decomp","How is explosive decompression defined?","Cabin pressure change faster than the lungs can decompress, under about 0.5 seconds.","Explosive。");
K("decomp","What is the immediate action in decompression?","Don oxygen masks and start emergency descent.","戴氧氣罩。");
K("voltdiag","What should a 28 V voltmeter read normally?","About 27.5 V; about 25 V after alternator failure.","27.5 V。");
K("cbreset","What is the circuit breaker reset rule?","Wait about 90 seconds and reset once if no smoke or burning smell.","重置一次。");
K("cabinheat","Why is exhaust muff heat a risk?","A crack lets carbon monoxide into the cabin.","CO 風險。");
K("altsetting","What if the altimeter setting is too high?","It reads higher than actual altitude.","偏高。");
K("altsetting","Rule of thumb for altimeter setting error?","About 1,000 ft per 1 inHg.","1000 ft。");
K("machmeter","What does the Machmeter display?","Aircraft speed as a fraction of the speed of sound.","Mach。");
K("stallwarn","How does the DA40 stall warning work?","Suction at a wing leading-edge orifice activates the horn.","吸力喇叭。");
K("tailwheel","Why is a tailwheel more prone to ground loop?","The CG is behind the main wheels so a swerve can grow.","CG 喺後。");
K("tailwheel","What is wheelbarrowing?","Nosewheel touches first and bears the load on landing.","Wheelbarrowing。");
K("da40fuel","How big is each DA40 tank?","20 US gal standard or 25 US gal long range.","20／25 gal。");
K("da40fuel","How does the DA40 selector reach OFF?","Pull up the safety catch while turning.","安全掣。");
K("da40elec","What voltage and alternator on DA40?","28 V DC with 70 A belt-driven alternator.","28 V，70 A。");
K("da40annun","How do White Wire panels handle a warning?","Flashing red lights and continuous tone until acknowledged.","Acknowledge。");
K("da40eng","What does the RPM lever do?","Forward is high RPM fine pitch; back is low RPM coarse.","RPM lever。");
K("da40struct","What is the DA40 airframe made of?","GFRP/CFRP composite.","複合材料。");
K("da40struct","What are DA40 brakes?","Hydraulic disc brakes operated by toe pedals with parking valve.","Disc brake。");

// ===== Links =====
L("g1000adc","g1000flags","ADC 失效 → speed／alt／VS／OAT 紅 X");
L("g1000ahrs","g1000flags","AHRS／mag 失效 → attitude／heading 紅 X");
L("g1000ahrs","g1000gps","GPS 失效令 AHRS 轉 No-GPS mode");
L("g1000rev","g1000arch","Display 壞 → 其他 LRU 用備用路徑");
L("g1000cas","g1000cas40","警報等級決定 DA40 訊息顏色同 tone");
L("gfcdisc","gfcalert","斷開／故障同一套 annunciation 系統");
L("gfc700","gfcmodes","GFC 700 通過按掣揀 mode");
L("g1000ela","da40elec","Load analysis 證明 DA40 電網夠用");
L("g1000lean","mixcons","Lean assist 幫手搵 peak 避免過 lean");
L("octane","detonation","Octane 太低 → detonation");
L("fuelcontam","fuelicing","水污染 → icing堵 filter");
L("fuelfeed","fuelselector","Pump 系統下要小心轉 tank");
L("lubfun","oilprob","功能失效 → pressure／temperature異常");
L("cowlflap","cooling","Cowl flaps 控制冷卻airflow");
L("starter","ammeter","起動電流不經 ammeter");
L("compstall","flameout","Stall 後空airflow失可致 flameout");
L("hotstart","turbinst","EGT instrument偵測 hot start");
L("turbthrust","turbtypes","Turboprop 用 ESHP，jet 看 thrust");
L("fcprimary","tabs","Tab 減輕 primary control 力");
L("flaptypes","fcsecondary","Flap／slat 屬 secondary 控制");
L("spoilers","brakes","Ground spoiler 加重輪壓令刹車更有效");
L("poweredfc","hydsource","Hydraulic 失壓 → manual reversion");
L("deiceboots","pneu","Boot 由 pneumatic 脹開");
L("propai","pitotstatic","電熱保護 pitot／static");
L("o2req","decomp","Decompression → 氧氣需求");
L("cabinalt","pressurisation","Differential 限制決定最高 cabin pressure");
L("voltdiag","elecfail","電壓下跌提示 alternator 失效");
L("cbreset","cb","CB 重置規則");
L("cabinheat","comon","Exhaust muff 加熱 → CO 風險");
L("altsetting","altvsi","設定錯 → altitude錯");
L("machmeter","asi","Mach 同 IAS 都用 pitot＋static");
L("tailwheel","gearcfg","兩種 gear layout directional stability性不同");
L("da40fuel","fuelselector","DA40 selector 有安全掣");
L("da40annun","g1000cas40","燈板同 CAS 訊息對應");
L("da40eng","csu","DA40 governor 控 RPM");
L("structforms","fuselage","Semi-monocoque 屬 fuselage 結構");
L("g1000adc","pitotstatic","ADC 用 pitot／static 輸入");
L("g1000eis","oilind","EIS 顯示 oil indications");

// ===== Animations =====
const X=(H,svg,x,y,s,f,z,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#e2e8f0","font-size":z||12,"text-anchor":a||"middle"},svg);t.textContent=s;return t};
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const A=[];

// 1. AHRS mode selector
A.push({title:"AHRS Mode：GPS／Mag／Air data",hint:"撳掣模擬感應器失效",build(box,H){
 const svg=H.svg(box,700,300), say=H.note(box);
 const S={gps:true,mag:true,air:true};
 const names={gps:"GPS",mag:"Magnetometer",air:"Air data"};
 const rects={},tx={};
 ["gps","mag","air"].forEach((k,i)=>{rects[k]=H.el("rect",{x:30,y:40+i*70,width:150,height:46,rx:8},svg);tx[k]=X(H,svg,105,69+i*70,"",  "#0f172a",14)});
 const mode=X(H,svg,430,60,"","#fbbf24",18);
 X(H,svg,300,110,"Attitude","#cbd5e1",14,"start");X(H,svg,300,170,"Heading","#cbd5e1",14,"start");
 const att=H.el("rect",{x:420,y:90,width:200,height:30,rx:6},svg), hd=H.el("rect",{x:420,y:150,width:200,height:30,rx:6},svg);
 const at=X(H,svg,520,111,"","#0f172a",14), ht=X(H,svg,520,171,"","#0f172a",14);
 ["gps","mag","air"].forEach(k=>H.button(box,"Toggle "+names[k],()=>{S[k]=!S[k];upd()}));
 function upd(){
  ["gps","mag","air"].forEach(k=>{rects[k].setAttribute("fill",S[k]?"#34d399":"#f87171");tx[k].textContent=names[k]+(S[k]?" OK":" FAIL")});
  let m,a,h;
  if(S.gps&&S.mag){m="Normal";a=true;h=true}
  else if(S.gps&&!S.mag){m=S.air?"No-Mag":"No-Mag / No-Air";a=true;h=false}
  else if(!S.gps&&S.mag&&S.air){m="No-GPS";a=true;h=true}
  else{m="Coast on gyros → invalid";a=false;h=false}
  mode.textContent="AHRS: "+m;
  att.setAttribute("fill",a?"#34d399":"#f87171");att.setAttribute("opacity","0.9");at.textContent=a?"valid":"RED X";
  hd.setAttribute("fill",h?"#34d399":"#f87171");ht.textContent=h?"valid":"RED X";
  say("GPS＋Mag 正常；缺 GPS 要靠 mag＋air data；缺 mag 空中 heading 無效（概念模型）");
 }
 upd();
}});

// 2. Failure → which X
A.push({title:"G1000：邊個 LRU 壞 → 邊個 X",hint:"揀失效嘅 LRU",build(box,H){
 const svg=H.svg(box,700,300), say=H.note(box);
 H.el("rect",{x:20,y:20,width:660,height:200,rx:10,fill:"#0f172a",stroke:"#475569"},svg);
 const fields={ias:[60,70,"IAS 110"],att:[260,50,"Attitude"],alt:[500,70,"ALT 3500"],vs:[560,150,"VS +500"],hdg:[260,170,"HDG 270"],oat:[60,170,"OAT 15C"],eng:[430,170,"RPM 2300"]};
 const bx={},xs={};
 for(const k in fields){const f=fields[k];bx[k]=H.el("rect",{x:f[0]-45,y:f[1]-20,width:110,height:36,rx:6,fill:"#334155"},svg);X(H,svg,f[0]+10,f[1]+3,f[2],"#e2e8f0",13);xs[k]=X(H,svg,f[0]+10,f[1]+8,"","#ef4444",34)}
 const map={ADC:["ias","alt","vs","oat"],AHRS:["att","hdg"],Magnetometer:["hdg"],GEA:["eng"],"None":[]};
 const names=Object.keys(map);
 names.forEach(n=>H.button(box,n==="None"?"Reset":"Fail "+n,()=>{
  for(const k in xs){xs[k].textContent="";bx[k].setAttribute("stroke","none")}
  map[n].forEach(k=>{xs[k].textContent="X";bx[k].setAttribute("stroke","#ef4444")});
  say(n==="None"?"全部正常":n==="GEA"?"GEA 失效 → engine fields 琥珀 X":"失效 LRU："+n+" → 對應 field 紅 X");
 }));
 say("揀失效嘅 LRU");
}});

// 3. DA40 battery endurance
A.push({title:"DA40 Essential Bus Battery 時間",hint:"改 load 同 battery 容量",build(box,H){
 const svg=H.svg(box,700,260), say=H.note(box);
 const bar=H.el("rect",{x:60,y:100,height:40,rx:8,fill:"#34d399"},svg);
 H.el("rect",{x:60,y:100,width:560,height:40,rx:8,fill:"none",stroke:"#94a3b8"},svg);
 const t1=X(H,svg,340,60,"","#fbbf24",20), t2=X(H,svg,340,190,"","#cbd5e1",14);
 let Ah=11,load=12.4;
 H.slider(box,"Battery Ah",5,20,11,v=>{Ah=v;upd()},1);
 H.slider(box,"Load (A)",5,30,12.4,v=>{load=v;upd()},0.1);
 function upd(){
  const avail=Ah*0.7, h=avail/load;
  t1.textContent="Endurance = "+h.toFixed(2)+" h ("+Math.round(h*60)+" min)";
  t2.textContent="Ah × 0.7 = "+avail.toFixed(1)+" Ah; ÷ "+load.toFixed(1)+" A";
  bar.setAttribute("width",cl(h/1.5,0,1)*560);
  bar.setAttribute("fill",h>=0.5?"#34d399":"#f87171");
  say(h>=0.5?"夠 0.5 h 要求（ELA）":"低過 0.5 h 要求");
 }
}});

// 4. Compressor stall
A.push({title:"Compressor Stall：Blade AoA",hint:"改 inlet speed同 RPM",build(box,H){
 const svg=H.svg(box,700,280), say=H.note(box);
 H.marker(svg,"ah1","#38bdf8");H.marker(svg,"ah2","#fbbf24");H.marker(svg,"ah3","#f87171");
 const blade=H.el("rect",{x:300,y:130,width:120,height:10,fill:"#cbd5e1"},svg);
 const a1=H.el("line",{x1:150,y1:135,x2:290,y2:135,stroke:"#38bdf8","stroke-width":4,"marker-end":"url(#ah1)"},svg);
 const a2=H.el("line",{x1:360,y1:50,x2:360,y2:120,stroke:"#fbbf24","stroke-width":4,"marker-end":"url(#ah2)"},svg);
 const a3=H.el("line",{x1:360,y1:135,x2:360,y2:135,stroke:"#f87171","stroke-width":4,"marker-end":"url(#ah3)"},svg);
 const tx=X(H,svg,350,230,"","#e2e8f0",18);
 let v=100,rpm=70;
 H.slider(box,"Inlet velocity",20,150,100,x=>{v=x;upd()});
 H.slider(box,"Compressor RPM %",30,100,70,x=>{rpm=x;upd()});
 function upd(){
  const aoa=Math.atan2(v,rpm*1.4)*180/Math.PI;
  a1.setAttribute("x1",290-v*0.9);a2.setAttribute("y1",130-rpm*0.8);
  a3.setAttribute("x2",360+0);
  blade.setAttribute("transform","rotate("+(-(30-aoa)*0.3)+" 360 135)");
  tx.textContent="AoA ≈ "+aoa.toFixed(0)+"°";
  tx.setAttribute("fill",aoa>45?"#f87171":"#34d399");
  say(aoa>45?"AoA 超 critical → STALL：減 power、降 AoA、加速（概念模型）":"inlet velocity 高、RPM 低 → AoA 大；平衡就安全");
 }
}});

// 5. Pressurisation
A.push({title:"Cabin Altitude vs Aircraft Altitude",hint:"拉 aircraft altitude，睇 differential",build(box,H){
 const svg=H.svg(box,700,260), say=H.note(box);
 const bA=H.el("rect",{x:80,y:60,height:30,fill:"#38bdf8"},svg), bC=H.el("rect",{x:80,y:120,height:30,fill:"#34d399"},svg);
 const tA=X(H,svg,80,52,"","#cbd5e1",13,"start"), tC=X(H,svg,80,112,"","#cbd5e1",13,"start"), tD=X(H,svg,80,190,"","#fbbf24",16,"start");
 let alt=30000,maxd=8.0;
 const P=h=>14.696*Math.pow(1-6.8756e-6*h,5.2559);
 const Ph=p=>(1-Math.pow(p/14.696,1/5.2559))/6.8756e-6;
 H.slider(box,"Aircraft alt (ft)",0,41000,30000,v=>{alt=v;upd()},1000);
 H.slider(box,"Max differential (psi)",4,9,8,v=>{maxd=v;upd()},0.5);
 function upd(){
  const pa=P(alt);let ca=Math.min(alt,8000),pc=P(ca);
  if(pc-pa>maxd){pc=pa+maxd;ca=Ph(pc)}
  bA.setAttribute("width",alt/41000*560);bC.setAttribute("width",ca/41000*560);
  tA.textContent="Aircraft "+Math.round(alt)+" ft";
  tC.textContent="Cabin "+Math.round(ca)+" ft";
  tD.textContent="Differential "+(pc-pa).toFixed(1)+" psid";
  say(ca>=7999?"Isobaric：cabin 保持約 8,000 ft":"Differential limit 到：cabin alt 隨 aircraft 升（簡化 ISA 模型）");
 }
}});

Cadet.extend("agk",{topics,cards,links,anims:A,src:"補漏：G1000 Pilot's Guide／CRG／ELA · PHAK ch7 · ATP Test Prep · Robson ch4 · AGK02 圖 · DA40 AFM ch7"});
})();
