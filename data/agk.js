// Aircraft General Knowledge —— 由 AGK01-11（Airspace）+ ENZO C172SP/DA40/Lycoming/Hartzell + Robson BAK 整合
(function(){
const S1="AGK01 Intro", S2="AGK02 Piston engine (圖片PDF)", S4="AGK04 Forces on Propeller", S5="AGK05 CSU/Critical Engine",
 S6="AGK06 Gas Turbine", S7="AGK07 Electric (含 hydraulic/pneu/press)", S8="AGK08 Hydraulic/Gear/Pneu", S10="AGK10 Autopilot",
 S11="AGK11 Warning", C172="C172SP POH", DA="DA40 XLT AFM", FC="ENZO FCOM", HZ="Hartzell Prop Manual 115N", RB="Robson BAK ch4";
const G={af:"Airframe",pe:"Piston Engine",ig:"Ignition",fi:"Fuel & Induction",oc:"Oil, Cooling, Exhaust",pr:"Propeller",me:"Multi-Engine",
 gt:"Gas Turbine",el:"Electrical",hy:"Hydraulics",lg:"Landing Gear & Brakes",pn:"Pneumatic & Pressurisation",in:"Instruments",ap:"Autopilot",wn:"Warning Systems",ty:"Aircraft Types"};
const TP=[
// id, group, title, d, pts, rel, src, check
["agk.stress","af","Structural Stresses","飛機結構受五種力。",["Tension 拉","Compression 壓","Bending 彎","Torsion 扭","Shear 剪"],["agk.loads","agk.fatigue"],S1],
["agk.loads","af","Design Loads","Ultimate load = 1.5 × limit load。",["Limit load：預期最大","Ultimate = 1.5 × limit","要承受 ultimate 不散"],["agk.stress","agk.structcat"],S1],
["agk.structcat","af","Structural Categories","按失效後果分四級。",["Critical：wing spar","Primary：rib、frame","Secondary：doors、fairing","Tertiary：內飾"],["agk.loads"],S1],
["agk.fuselage","af","Fuselage Types","Truss／Monocoque／Semi-monocoque／Composite。",["Truss：強、重、易修","Monocoque：蒙皮受力","Semi-mono：蒙皮＋stringer","Composite：輕、抗蝕"],["agk.wings"],S1],
["agk.wings","af","Wing & Tail Layouts","高／低翼、dihedral、tail 類型各有利弊。",["High wing：穩、視野落","Low wing：roll 快","Dihedral → lateral stability","T-tail：deep stall 風險"],["agk.fuselage","agk.fatigue"],S1],
["agk.fatigue","af","Metal Fatigue","反覆載荷令結構喺低過一次性載荷時失效。",["Cyclic loading","細載荷都可以裂","要定期檢查 airframe"],["agk.stress","agk.pressurisation"],S1],

["agk.fourstroke","pe","Four-Stroke Cycle","Intake→Compression→Power→Exhaust，曲軸轉兩圈。",["720° crank = 1 cycle","Intake valve 開 → 入混合氣","點火喺 TDC 前","Exhaust valve 開 → 排氣"],["agk.valves","agk.compratio","agk.ignswitch"],S1+" / "+S2],
["agk.parts","pe","Engine Components","曲軸箱內同汽缸內嘅主要零件。",["Crankcase：crank、cam","Cylinder：piston、conrod","Intake／exhaust valve","Spark plug"],["agk.fourstroke","agk.firing"],S1],
["agk.compratio","pe","Compression Ratio","Total volume ÷ clearance volume。",["越高 → 越大 power","但要更好 fuel 防 detonation","IO-360-L2A：8.5:1（Lycoming 手冊）"],["agk.detonation","agk.fourstroke"],S1+" / Lycoming IO-360 manual"],
["agk.valves","pe","Valve Timing & Overlap","Valve 唔係剛好喺 TDC/BDC 開關。",["Intake 開：約 15° BTDC","Exhaust 閂：約 15° ATDC","Overlap：兩者同時開","Intake 閂：約 50° ABDC"],["agk.fourstroke"],S1,true],
["agk.firing","pe","Firing Order","影響 power 同震動；Lycoming 4 缸 1-3-2-4。",["不同廠牌可能唔同","1-3-2-4（Lycoming 手冊）","平衡力矩減震"],["agk.parts"],S1+" / Lycoming manual"],
["agk.horsepower","pe","Horsepower","1 hp = 745.7 W = 550 ft·lb/s。",["Indicated hp：理論無摩擦","Friction hp：損失","oil pump、alternator 都食力"],["agk.compratio"],S1],
["agk.sixsys","pe","6 Systems of Piston Engine","燃燒要 Air＋Fuel＋Heat，所以有六個系統。",["Ignition","Induction","Fuel","Lubrication","Cooling","Exhaust"],["agk.magneto","agk.fuelsys","agk.lube","agk.cooling","agk.exhaust"],S1+" / "+S2],
["agk.detonation","pe","Detonation","燃料未受控地爆燃，高壓高溫引致。",["高 CR／低 octane／太熱","突然pressure峰值","震動、過熱、損壞 piston"],["agk.compratio","agk.preign"],S1+" / "+RB],
["agk.preign","pe","Pre-ignition","混合氣喺火花前被熱點點燃。",["Hot spot 引致","Rough、backfire","CHT 突然升","Piston 仲上升時已燃燒"],["agk.detonation","agk.egtcht"],S1],

["agk.magneto","ig","Magneto","旋轉磁鐵產生高壓電，自給自足。",["Primary／secondary circuit","Breaker、condenser","Distributor 分配去 plug","唔連 aircraft electrical"],["agk.dualign","agk.ignswitch"],S2],
["agk.dualign","ig","Dual Ignition","兩個 mag、每缸兩個 plug。",["更完全燃燒 → 更好 power","Redundancy","C172SP：R mag 燒 lower R＋upper L","L mag 燒 lower L＋upper R"],["agk.magneto","agk.ignswitch"],S2+" / "+C172],
["agk.impulse","ig","Impulse Coupling","一個彈簧喺 left mag，起動時助火花。",["低 RPM 出強火花","延遲 timing（retard）","防起動 kickback"],["agk.magneto"],S2],
["agk.ignswitch","ig","Ignition Switch & P-lead","Switch 係「接地」mag 令其停用。",["OFF：primary circuit 接地","R／L／BOTH／START","Mag check：RPM drop","P-lead 斷 → mag 長期有電（hot）"],["agk.dualign","agk.magneto","agk.da40"],S2+" / "+C172+" / "+FC],

["agk.fuelsys","fi","Fuel System","Tank → selector → strainer → pump → engine。",["Boost／aux pump electric","Engine-driven pump","Strainer 濾水同雜質","Vent 防真空"],["agk.fuelinj","agk.carb","agk.c172sp"],S2+" / "+C172],
["agk.carb","fi","Carburettor","Venturi 低壓抽油；throttle 控量、mixture 控比。",["Throttle ＝ butterfly valve","Mixture ＝ needle","Float chamber 控油面","Venturi 引致降溫"],["agk.carbice","agk.mixture"],S1+" / "+S2],
["agk.carbice","fi","Carburettor Icing","三種：induction、fuel evaporation、throttle ice。",["Venturi 冷卻 → icing","可喺 OAT 高時發生","RPM 跌、rough"],["agk.carb","agk.carbheat"],S2+" / "+RB],
["agk.carbheat","fi","Carburettor Heat","用熱空氣融冰，但會令 power 少啲。",["Hot air 繞過 air filter","RPM 先跌後升＝有冰","C172SP 係 fuel injected → 冇 carb heat"],["agk.carbice","agk.altair"],S2+" / "+C172],
["agk.fuelinj","fi","Fuel Injection","Pump、control unit、distributor、nozzle。",["優：少 icing、反應快","優：分trim均、易冷啟動","缺：熱機難起動","缺：vapour lock"],["agk.carb","agk.mixture","agk.c172sp"],S1+" / "+FC],
["agk.mixture","fi","Mixture & Leaning","混合比；巡航 lean、落降前 rich。",["Rich：冷卻較好","Lean：慳油、EGT 升","DA40 lean assist：peak 後 enrich −100","落降前一定 full rich"],["agk.egtcht","agk.carb","agk.fuelinj"],FC+" / "+C172],
["agk.altair","fi","Alternate Air","Air filter 塞咗，開 door 吸機艙空氣。",["C172SP：spring-loaded door","全throttle約失 10% power","DA40：手動 lever","MAP 突降時用"],["agk.carbheat","agk.fuelinj"],C172+" / "+DA],
["agk.egtcht","fi","EGT vs CHT","EGT＝排temperature；CHT＝缸頭溫。",["EGT 準確反映混合比","CHT 反映 power stroke 熱量","DA40 CHT max 500°F"],["agk.mixture","agk.cooling"],S2+" / "+DA],
["agk.boost","fi","Supercharger vs Turbocharger","加壓進氣令高空保持 manifold pressure。",["Super：齒輪由 engine 驅動","Turbo：排氣驅動 turbine","Wastegate 控 boost","落 MAP 計睇"],["agk.critalt","agk.mapcsp"],S4],
["agk.critalt","fi","Rated vs Critical Altitude","Turbo 擎維持 MAP 嘅最高altitude。",["Rated power：最大連續 power","Rated altitude＝full throttle height","Critical alt：以上 MAP 維持唔到","空氣density隨altitude跌"],["agk.boost"],S4],

["agk.lube","oc","Lubrication System","減摩、冷卻、清潔、密封。",["Oil tank、pump、filter、cooler","Pressure relief valve","Cooler bypass","Scavenge pump（dry sump）"],["agk.oilind","agk.cooling"],S2+" / "+RB],
["agk.oilind","oc","Oil Indications","睇 oil pressure、temp、quantity。",["高溫：油少／cooler 塞","低壓：pump 弱／漏油","又高溫又低壓：嚴重","C172SP pressure green 50–90 psi"],["agk.lube","agk.da40"],S2+" / "+C172],
["agk.cooling","oc","Air Cooling","Ram air 經 baffle 流過缸頭。",["Cowling 入口＋baffles","C172SP 冇 cowl flap","climb慢速 → CHT 易高","落降要避免過冷"],["agk.egtcht","agk.lube"],S2+" / "+C172],
["agk.exhaust","oc","Exhaust System","排氣經 riser 去 muffler；有 shroud 暖艙。",["EGT probe 喺 exhaust","暖艙 muff 漏 → CO","CO detector 變色"],["agk.egtcht","agk.comon"],S2+" / "+C172],
["agk.comon","oc","CO Risk (Cabin Heat)","暖氣 muff 裂 → 一氧化碳入艙。",["無色無味","Dark spot detector","懷疑：關暖氣、開風、著陸"],["agk.exhaust"],S7],

["agk.proptwist","pr","Propeller Twist","葉由根到尖 blade angle 逐漸變細。",["尖speed快、根慢","令全葉 AoA 差唔多","唔 twist：根負 AoA、尖stall"],["agk.pitch","agk.propforces"],S4],
["agk.propforces","pr","Forces on Propeller","葉片受幾種力。",["Centrifugal force","Thrust bending","Torque bending","Aerodynamic／centrifugal twisting"],["agk.proptwist"],S4],
["agk.pitch","pr","Blade Angle vs Pitch","Pitch＝無 slip 時每轉前進距離。",["Geometric pitch：理論","Effective pitch：實際","差＝slip","Fine＝低角、高 RPM；Coarse＝高角、低 RPM"],["agk.fixedprop","agk.csu"],S4],
["agk.fixedprop","pr","Fixed-Pitch Propeller","一個角度，只喺一個speed／RPM 最高效。",["C172SP：76 in，McCauley","Ground-adjustable 都算 fixed","RPM 係 power 指示"],["agk.pitch","agk.csu","agk.c172sp"],S4+" / "+C172],
["agk.csu","pr","Constant Speed Unit (CSU)","Governor 調 oil 去 hub，保持設定 RPM。",["Pilot valve、speeder spring、flyweight","Governor oil pump","Prop lever 設 RPM","Throttle 設 MAP"],["agk.csu1","agk.csu2","agk.mapcsp"],S4+" / "+S5],
["agk.csu1","pr","CSP Force Pair 1 (Hub)","Hub 內：spring＋CTM vs oil pressure。",["Spring > oil → fine pitch","Spring < oil → coarse pitch","Fine：低 AoA、高 RPM","Coarse：高 AoA、低 RPM"],["agk.csu2","agk.proploss"],S5+" / "+HZ],
["agk.csu2","pr","CSP Force Pair 2 (Governor)","Governor：speeder spring vs flyweight。",["Lever 前 → spring 緊 → valve 落","Oil 洩走 → fine → RPM 升","Overspeed：flyweight 外飛 → oil 入","On-speed：valve 中立"],["agk.csu1","agk.csu"],S5],
["agk.mapcsp","pr","MAP as Power Indicator","CSP 嘅 RPM 已固定，用 MAP 睇 power。",["MAP＝進氣歧管絕對pressure","單位 inHg","Throttle 改 MAP","停機時 MAP＝環境pressure"],["agk.csu","agk.boost"],S4],
["agk.proploss","pr","Loss of Oil Pressure","按 prop 設計，葉會去 fine 或 feather。",["單發 CSP：→ fine（高 RPM）","Feathering twin：→ feather","用 throttle 控 RPM"],["agk.csu1","agk.feather","agk.da40"],DA+" / "+HZ],
["agk.feather","pr","Feather vs Windmilling","Feather：葉近 90°，drag 最細。",["Windmill：葉被風推轉 → 大 drag","Hartzell -2：oil 去 low pitch","失油 → counterweight/spring → feather","Latches 防停機時 feather（~800 RPM）"],["agk.proploss","agk.critical"],S5+" / "+HZ],

["agk.critical","me","Critical Engine","失效後對 control／performance 影響最大。",["Conventional twin：Left 係 critical","原因：P-factor、slipstream×2、torque","Counter-rotating → 冇 critical"],["agk.pfactor","agk.vmc"],S5],
["agk.pfactor","me","P-factor & Slipstream Effects","高 AoA 時下行葉thrust較大。",["Thrust centre 偏右","L 失效 → arm 較長 → yaw 大","Accelerated slipstream：roll","Spiral slipstream／torque 都向 L 引向"],["agk.critical","agk.vmc"],S5],
["agk.vmc","me","Vmc","Critical 失效仍可保持控制嘅最低速。",["Calibrated airspeed","直線飛、bank ≤ 5°（lecture）","Rudder 隨speed失效","「Live leg, live engine」"],["agk.critical","agk.vmcg","agk.vmca"],S5],
["agk.vmcg","me","Vmcg (Ground)","take-off滑行中 engine 失效，偏離 centreline 唔過 30 ft。",["只用 primary aerodynamic controls","取決於 thrust","V1 唔可低過 Vmcg"],["agk.vmc","agk.vmca"],S5],
["agk.vmca","me","Vmca (Airborne)","同 Vmcg 類似，但可 5° bank 向 live 邊。",["「5° to the live」","VR 唔可低過 Vmca","不利：max thrust、aft CG、windmill","最不利weight需對照手冊"],["agk.vmc","agk.vmcg"],S5,true],
["agk.counterrot","me","Counter-rotating vs Contra-rotating","Counter：兩 engine 反向；Contra：同一 engine 兩 prop。",["Counter-rotating 平衡 torque","冇 critical engine","唔好混淆"],["agk.critical"],S5],

["agk.brayton","gt","Brayton Cycle","連續燃燒：Intake→Compress→Burn→Expand。",["比 Otto 連續 power","Power-to-weight 高","T = m(Vj − Vi)","Newton 2nd／3rd law"],["agk.turbtypes","agk.compressor","agk.turbine"],S6],
["agk.turbtypes","gt","Turbine Engine Types","Turbojet／turbofan／turboprop／turboshaft。",["Fan 加thrust（bypass）","Turboprop：推 prop","Turboshaft：驅動 rotor","Cold section／hot section"],["agk.brayton","agk.spools"],S6],
["agk.intake","gt","Intake","Divergent duct：升static pressure、airflow平順亞speed of sound。",["最少能量損失","Smooth、subsonic","GE90 static test 用特別 intake"],["agk.compressor"],S6],
["agk.compressor","gt","Compressor","Centrifugal／Axial／Compound。",["Centrifugal：夠 robust、少 surge","Axial：高效、高 ratio、易 FOD","每 stage ratio ~1.1–1.2:1","Compound＝兩者結合"],["agk.intake","agk.combustor","agk.spools"],S6,true],
["agk.combustor","gt","Combustor","Can／annular；diffuser 降速增壓。",["Diffuser：全 engine 最高壓","Fuel nozzle：約 15:1 stoichiometric（lecture）","Igniter 只喺起動用","Primary／dilution／cooling air"],["agk.compressor","agk.turbine"],S6],
["agk.turbine","gt","Turbine","抽取熱氣能量驅動 compressor。",["Impulse：像水車","Reaction：氣動lift","NGV 導向","同 compressor 同軸"],["agk.combustor","agk.turbcool","agk.brayton"],S6],
["agk.turbcool","gt","Turbine Cooling","第一級temperature最高（約 1500°C，lecture）。",["Internal cooling","Film cooling","Thermal coating","高熔點材料"],["agk.turbine"],S6,true],
["agk.nozzle","gt","Exhaust & Nozzle","將氣體轉成 propulsive thrust。",["Convergent propelling nozzle","Suppressor nozzle 降噪","Exhaust cone、struts"],["agk.turbine","agk.brayton"],S6],
["agk.spools","gt","Multi-Spool","N1／N2（／N3）各自最佳 RPM。",["高壓段高 RPM 更高效","加速更快（每 spool 質量細）","Rolls-Royce triple spool"],["agk.turbtypes","agk.compressor"],S6],

["agk.elecbasic","el","Volts, Amps, Ohms","Current A、Voltage V、Resistance Ω。",["V = IR","P = V × I","Resistance ↑：長、細、熱","Series：I 同；Parallel：V 同"],["agk.acdc","agk.battery"],S7],
["agk.acdc","el","AC vs DC","DC 單向；AC 周期反向。",["Hz＝每秒 cycle","3-phase","AC → DC：rectifier／TR","DC → AC：inverter"],["agk.elecbasic","agk.acairliner"],S7],
["agk.c172elec","el","C172SP Electrical System","28 V DC、50 A alternator、24 V battery。",["Split primary bus＋essential bus","Avionics bus 經 avionics master","Master switch：BAT／ALT","Airspace slide 係舊款 14 V/12 V"],["agk.alternator","agk.bus","agk.c172sp"],C172+" / "+S7],
["agk.battery","el","Batteries","Lead-acid vs NiCad。",["功能：起動、備用電","Lead-acid：安全、電壓逐漸跌","NiCad：電壓穩、會 thermal runaway","容量 Ah ＝ 電流 × 時間"],["agk.elecbasic","agk.elecfail"],S7],
["agk.alternator","el","Alternator/Generator","Engine 驅動；輸出 AC 經 rectifier 變 DC。",["ACU 調壓","Low voltage warning","Overvoltage → 保護跳掣","Alternator 最低輸出喺 idle"],["agk.ammeter","agk.c172elec"],S7+" / "+C172],
["agk.ammeter","el","Ammeter vs Loadmeter","Ammeter：+／− battery 電流；Loadmeter：alternator 輸出。",["Ammeter 零位喺中間","− ＝ battery 放電","Loadmeter 只顯示 alternator 負載"],["agk.alternator","agk.elecfail"],S7],
["agk.bus","el","Bus Bars & Avionics Master","Bus＝配電點；avionics 另設 bus 保護。",["隔離 transient 電壓","Avionics master 先接 avionics","Starter／ignition 唔靠 bus（mag）"],["agk.cb","agk.c172elec"],S7+" / "+C172],
["agk.cb","el","Circuit Breakers & Fuses","防過流；數字＝amp rating。",["Short circuit → 跳掣","Push／pull-off 類型","唔好反覆 reset"],["agk.bus","agk.elecfail"],S7],
["agk.elecfail","el","Electrical Failure","Alternator fail → 用 battery、卸載、落地。",["C172SP：ammeter、VOLTS annunciator","DA40：essential bus 約 30 分鐘","DA40 emergency switch","Overvoltage：關 ALT 保留 BAT"],["agk.battery","agk.ammeter","agk.da40"],C172+" / "+DA+" / "+S7],
["agk.acairliner","el","Airliner AC System","115 V、400 Hz、3-phase；TR 轉 28 V DC。",["IDG／CSD、APU gen","BTC bus tie 分擔","AC bus 供大 power 設備"],["agk.acdc","agk.elecback"],S7],
["agk.elecback","el","Backup Power","Emer gen（hyd 驅動）／RAT／battery。",["Gen 全失 → emergency config","RAT 隨speed變","Battery 40 Ah only ESS bus","Static inverter DC → AC"],["agk.acairliner","agk.hydsource"],S7],

["agk.hydprin","hy","Hydraulic Principles","液體不可壓縮；Pascal：pressure平均傳遞。",["P = F / A","F = P × A","Force × distance 守恆","細 area 行得遠"],["agk.hydparts","agk.brakes"],S7+" / "+S8],
["agk.hydfluid","hy","Hydraulic Fluid","Mineral（MIL-5606）／Skydrol。",["低黏度、不燃、低凝點","唔可以混用","Skydrol：phosphate-ester、防火","配 butyl 類 seal"],["agk.hydparts"],S8],
["agk.hydparts","hy","Hydraulic Components","Reservoir、pump、filter、accumulator。",["Filter bypass pop-up indicator","Pump 後有 pressure sensor","Actuator：single／double acting","Hydraulic motor"],["agk.hydprin","agk.accum","agk.hydvalves"],S7+" / "+S8],
["agk.hydvalves","hy","Hydraulic Valves","Check、relief、selector valve。",["Check：單向","Relief：限壓回 reservoir","Selector：揀流向"],["agk.hydparts"],S8],
["agk.accum","hy","Accumulator","氮氣＋油；穩壓、緊急pressure、停車 brake。",["Floating piston","減輕pressure波動","Pump fail → 儲備","檢查 charge 要先洩壓"],["agk.hydparts","agk.hydsource"],S8],
["agk.hydsource","hy","Pressure Sources","EDP、electric pump、PTU、hand pump、RAT。",["Airliner 約 3000 psi","A350 可高至 5000 psi","A330：Green／Yellow／Blue","PTU 令一系統借另一系統動力"],["agk.accum","agk.elecback"],S8],
["agk.brakes","lg","Brakes","小機 single disc；大機 multi-disc powered。",["Unpowered：pilot 踩 pedal 增壓","Powered：用 system pressure（~3000 psi 要減壓）","Fusible plug 防 tyre burst"],["agk.hydprin","agk.fusible","agk.hydroplane"],S7+" / "+S8+" / "+C172],

["agk.geargroup","lg","Gear Structure","Strut、trunnion、drag／side／jury strut。",["Trunnion beam：連wing spar、容許 retract","Drag strut：前後力","Side strut：側向力","Jury strut：鎖 down-lock"],["agk.gearsafe","agk.gearcfg"],S8],
["agk.gearsafe","lg","Gear Safety Features","Over-centre、ground pin、bungee spring。",["Over-centre 越重越鎖","Ground safety pin","Bungee：無 hydraulic 都拉鎖","Nose gear 後軸線設計"],["agk.geargroup"],S8],
["agk.gearcfg","lg","Tricycle vs Taildragger","兩種配置各有取捨。",["Tail gear：刹車易翻頭、視野差","Tricycle：刹車安全","Nose gear 吸收刹車動力負荷"],["agk.geargroup"],S8],
["agk.nosegear","lg","Nose Gear Parts","Torque link、steering、shimmy damper。",["Torque link 防內缸轉","Steering actuator","Shimmy damper 防擺動"],["agk.geargroup"],S8],
["agk.hydroplane","lg","Hydroplaning","三種：dynamic、reverted rubber、viscous。",["Dynamic：水楔","Reverted rubber：鎖死生蒸氣","Viscous：薄水層","Speed ≈ 9 × √tyre psi（kt）"],["agk.brakes"],S7,true],
["agk.fusible","lg","Fusible Plug","熱融合金釋放 tyre 氣防爆。",["超溫先融","weight abort 後 tyre 可能慢慢放氣"],["agk.brakes"],S8],

["agk.pneu","pn","Pneumatic / Bleed Air","用壓縮空氣傳力；airliner 用 bleed air。",["Engine compressor／APU／ground","Bleed valve、check valve、X-bleed","Over-pressure valve"],["agk.aircon","agk.compressor"],S7],
["agk.pneuuse","pn","Uses of Bleed Air","起動、空調、anti-ice、reservoir 增壓。",["Engine start","Air-con & pressurisation","Wing anti-ice","Cargo heating"],["agk.pneu"],S7],
["agk.aircon","pn","Air Conditioning Pack","Bleed air 經 heat exchanger＋ACM 降溫。",["Non-pressurised：ram air＋muff","Airbus：recycle 混合","Trim valve 加熱調溫"],["agk.pneu","agk.pressurisation","agk.comon"],S7],
["agk.pressurisation","pn","Pressurisation","Air-con 供氣，outflow valve 控壓。",["Cabin alt 約 8000 ft max","新機可 6000 ft","CPC 控 outflow valve","Safety relief＋negative relief"],["agk.aircon","agk.fatigue"],S7],

["agk.pitotstatic","in","Pitot-Static System","Pitot＝total pressure；Static＝環境壓。",["ASI：pitot＋static","ALT、VSI：static","Pitot heat 防冰（C172SP 5 A）","Alternate static：艙內氣"],["agk.asi","agk.blockage"],C172+" / "+RB],
["agk.asi","in","Airspeed Indicator","差壓＝dynamic pressure → IAS。",["C172SP green 48–129 kt、red 163","可讀 TAS window","Instrument／position error"],["agk.pitotstatic","agk.blockage"],C172],
["agk.altvsi","in","Altimeter & VSI","static pressure隨altitude降。",["ALT：aneroid、QNH 調整","VSI：pressure變化率（有 lag）","Static blocked → ALT 凍結、VSI 0"],["agk.pitotstatic","agk.blockage"],C172+" / "+RB],
["agk.blockage","in","Pitot/Static Blockage","幾種堵塞對 ASI／ALT／VSI 影響唔同。",["Pitot ram＋drain 塞：climb ASI over-read","Pitot 全塞（drain 通）：ASI 歸零","Static 塞：climb ASI under-read","Static 塞：ALT 凍、VSI 0"],["agk.pitotstatic","agk.altvsi"],RB+" / "+C172],
["agk.gyro","in","Gyroscopic Properties","Rigidity 同 Precession。",["Rigidity：質量大＋快轉＝穩","Precession：力作用後 90° 發生","HI 會漂移要對返 compass","Artificial horizon 用 rigidity"],["agk.vacuum","agk.attind"],RB],
["agk.attind","in","Attitude & Heading Instruments","AI、HI（真空）；turn coordinator（電）。",["C172SP：vacuum AI＋DI","Turn coordinator：electric","Vacuum fail → partial panel"],["agk.gyro","agk.vacuum"],C172+" / "+RB],
["agk.vacuum","in","Vacuum System","兩個 engine-driven pump；吸氣驅動 gyro。",["正常 4.5–5.5 inHg","< 3.0 inHg → L VAC／VAC R","Check valve 防倒流","Relief valve 防過高"],["agk.gyro","agk.attind"],C172+" / "+RB],
["agk.compass","in","Magnetic Compass","Dip 令turn同加速出錯。",["Turning error：UNOS","Accel error：ANDS","要水平直線飛先準","Alternator off 時 deviation 可達 25°（C172SP）"],["agk.gyro"],RB+" / "+C172,true],

["agk.afcs","ap","AFCS Philosophy","減疲勞、提升穩定、增加決策容量。",["Sensors → Computers → Output","Feedback loop","FD、AP、A/THR、envelope protection"],["agk.fd","agk.ap"],S10],
["agk.fd","ap","Flight Director","Command bar 顯示要做嘅動作，唔直接控制 aircraft。",["FCU 揀 mode","FDC 計 path","Pilot 決定跟唔跟"],["agk.afcs","agk.fma","agk.ap"],S10],
["agk.ap","ap","Autopilot","「無腦」但唔累；跟指令保持狀態。",["Basic mode：hold pitch／wings level","揀 FCU → Path mode","Yaw damping"],["agk.fd","agk.failpass"],S10],
["agk.athr","ap","Auto-thrust vs Auto-throttle","Airbus：lever 唔郁；Boeing：lever 會動。",["Speed／Mach mode","Thrust mode：CLB、IDLE","FADEC 計 thrust"],["agk.ap","agk.fma"],S10],
["agk.fma","ap","FMA","Flight Mode Annunciator：一定要核對。",["綠＝active，藍＝armed","改 mode 必睇 FMA","顯示 lateral／vertical／A/THR"],["agk.fd","agk.athr"],S10],
["agk.failpass","ap","Fail-Passive vs Fail-Operational","Autoland 冗餘概念。",["Fail-passive：2 AP，失效無 autoland","Fail-operational：3 AP","Airbus：CAT 3 SINGLE vs DUAL"],["agk.ap"],S10],
["agk.envprot","ap","Flight Envelope Protection","喺安全邊界內保護，唔等於不會stall。",["Bank、pitch、load factor、AoA 限制","AP 用到 limit","嚴重 upset 保護可能失效"],["agk.afcs"],S10,true],

["agk.warnclass","wn","Warning Classes","Warning／Caution／Advisory。",["Warning：red、即時行動","Caution：amber","EASA CS 25.1322 顏色","Aural＋visual"],["agk.configwarn","agk.fire"],S11],
["agk.configwarn","wn","Configuration & Gear Warnings","take-off config 同 gear 位置警告。",["take-off horn：trim／brake／flap／slat","Gear warning：未鎖下","Gear position vs lever 不符"],["agk.warnclass"],S11],
["agk.fire","wn","Fire & Yaw Damper Warnings","Engine fire：紅燈＋bell。",["Fire bell inhibit：take-off至 400 ft AGL","Yaw damper inop：amber","Evacuation signal"],["agk.warnclass"],S11],
["agk.gpws","wn","GPWS","地形接近警告，用 radio altimeter 等輸入。",["Inputs：airspeed、baro、radio alt、G/S、flap","Visual＋aural","EGPWS 加 look-ahead terrain"],["agk.gpwsmodes","agk.gpwsrec"],S11],
["agk.gpwsmodes","wn","GPWS Modes 1–7","七個 mode 覆蓋唔同情況。",["1：sink rate；2：terrain closure","3：take-off後掉altitude","4：gear/flap 不足","5：G/S 下偏；6：bank；7：windshear"],["agk.gpws"],S11],
["agk.gpwsrec","wn","GPWS Recovery","Pull-up 動作。",["AP、A/THR off","Max thrust","Wings level，pitch 約 20°","收 speedbrake，gear／flap 不改"],["agk.gpws","agk.windshear"],S11],
["agk.tcas","wn","TCAS","TA（遠）→ RA（近）。",["TA：「Traffic」；約 40 s","RA：「Climb／Descend」；約 25 s","Symbols：白、藍、琥珀、紅","Clear of Conflict"],["agk.gpws"],S11],
["agk.windshear","wn","Windshear Warning","Mode 7；escape maneuver。",["Predictive／reactive","AP off、TO/GA、max thrust","Pitch 約 15°","唔好改 flap／gear"],["agk.gpwsrec","agk.gpwsmodes"],S11],

["agk.c172sp","ty","C172SP (Enzo/POH)","IO-360-L2A，180 hp @2700，fuel injected，fixed pitch。",["Fuel：56 gal total、53 usable","Oil sump 8 qt","28 V DC、24 V battery","Vacuum 4.5–5.5 inHg"],["agk.fuelinj","agk.c172elec","agk.fixedprop"],C172],
["agk.da40","ty","DA40 XLT (Enzo/AFM)","IO-360-M1A，180 hp @2700，MT 3-blade CSP。",["Max continuous 160 hp @2400","Oil pressure green 55–95 psi","CHT max 500°F","Loss oil → fine pitch、high RPM"],["agk.csu","agk.proploss","agk.elecfail"],DA+" / "+FC],
];
const topics=TP.map(r=>({id:r[0],g:G[r[1]],t:r[2],d:r[3],pts:r[4],rel:r[5],src:r[6],check:!!r[7]}));

const links=[
["agk.fourstroke","agk.valves","Valve overlap 令排氣帶走新混合氣"],
["agk.compratio","agk.detonation","CR 高 → pressuretemperature高 → 易爆燃"],
["agk.detonation","agk.preign","兩種異常燃燒，一個係太早點燃"],
["agk.magneto","agk.dualign","兩個 mag 令燃燒更完全＋有 redundancy"],
["agk.ignswitch","agk.magneto","Switch 接地 primary circuit"],
["agk.carb","agk.carbice","Venturi 降溫 → icing"],
["agk.carbice","agk.carbheat","Heat 融冰但會失 power"],
["agk.carbheat","agk.fuelinj","Fuel injection 無 carb icing，所以冇 carb heat"],
["agk.mixture","agk.egtcht","Mixture 改變 EGT；EGT 反映混合比"],
["agk.altair","agk.fuelinj","Filter 塞 → 開 alternate air"],
["agk.boost","agk.critalt","加壓只可維持到 critical altitude"],
["agk.lube","agk.oilind","Oil 狀態反映喺pressure／temperature"],
["agk.cooling","agk.egtcht","缸頭過熱同 CHT 相關"],
["agk.exhaust","agk.comon","Exhaust muff 裂 → CO"],
["agk.proptwist","agk.pitch","Twist 令 blade angle 由根到尖不同"],
["agk.fixedprop","agk.csu","Fixed 唔夠效率 → CSU 調 pitch"],
["agk.csu1","agk.csu2","Hub 同 governor 兩對力互相配合"],
["agk.csu","agk.mapcsp","RPM 固定 → 用 MAP 睇 power"],
["agk.csu1","agk.proploss","Oil 失壓 → hub 力平衡改變"],
["agk.proploss","agk.feather","Twin：失油自動 feather"],
["agk.feather","agk.critical","Feather 減 drag，改善 OEI 性能"],
["agk.pfactor","agk.critical","P-factor 令 L engine critical"],
["agk.critical","agk.vmc","Critical engine 決定 Vmc"],
["agk.vmc","agk.vmcg","Vmcg 係地面版 Vmc"],
["agk.vmc","agk.vmca","Vmca 係空中版 Vmc"],
["agk.counterrot","agk.critical","反向旋轉消除 critical engine"],
["agk.brayton","agk.turbine","Turbine 抽取能量驅動 compressor"],
["agk.compressor","agk.spools","每 spool 喺最佳 RPM 更高效"],
["agk.combustor","agk.turbcool","Combustor 熱 → turbine 要冷卻"],
["agk.turbtypes","agk.spools","Turbofan 需要 low/high spool"],
["agk.elecbasic","agk.battery","Ah ＝ 電流 × 時間"],
["agk.alternator","agk.ammeter","Ammeter 顯示 alternator 同 battery 嘅流向"],
["agk.bus","agk.cb","Bus 上用 CB 保護各路"],
["agk.elecfail","agk.battery","Alternator 失效後 battery 係唯一來源"],
["agk.acairliner","agk.elecback","AC 失效用 emer gen／RAT"],
["agk.hydprin","agk.brakes","Pascal 令刹車 pedal 增力"],
["agk.accum","agk.hydsource","Accumulator 做 pump 失效備援"],
["agk.hydsource","agk.elecback","RAT 兼供 hydraulic／電"],
["agk.gearsafe","agk.geargroup","Over-centre＋jury strut 令 gear 鎖緊"],
["agk.brakes","agk.fusible","重刹 → 熱 → fusible plug 洩壓"],
["agk.pneu","agk.aircon","Bleed air 供應 air-con"],
["agk.aircon","agk.pressurisation","Air-con 供氣，outflow valve 控壓"],
["agk.pressurisation","agk.fatigue","每次增壓／減壓都係 cyclic load"],
["agk.pitotstatic","agk.blockage","Pitot／static 堵塞令讀數出錯"],
["agk.gyro","agk.vacuum","Vacuum 令 gyro 高速轉"],
["agk.vacuum","agk.attind","Vacuum fail → AI／DI 失效"],
["agk.fd","agk.ap","FD 指示、AP 執行"],
["agk.ap","agk.failpass","AP 冗餘決定 autoland 能力"],
["agk.fma","agk.athr","FMA 顯示 A/THR mode"],
["agk.gpws","agk.gpwsrec","GPWS 觸發 → pull-up 動作"],
["agk.windshear","agk.gpwsmodes","Mode 7 係 windshear"],
["agk.c172sp","agk.fuelinj","C172SP 係 fuel injected"],
["agk.da40","agk.proploss","DA40 prop 失油 → fine pitch"],
["agk.da40","agk.csu","DA40 係 constant speed prop"],
];

const EM={af:"🏗️",pe:"⚙️",ig:"⚡",fi:"⛽",oc:"🛢️",pr:"🌀",me:"✌️",gt:"🔥",el:"🔋",hy:"💧",lg:"🛬",pn:"💨",in:"🧭",ap:"🤖",wn:"🚨",ty:"🛩️"};
const emojiOf={};TP.forEach(r=>emojiOf[r[0]]=EM[r[1]]);
const cards=[];
const K=(t,q,a,zh,st)=>cards.push({e:emojiOf[t],q:q,a:a,zh:zh,topic:t,st:st||"ok"});

// ---- Airframe
K("agk.stress","Name the five stresses on an aircraft structure.","Tension, compression, bending, torsion and shear.","拉、壓、彎、扭、剪。");
K("agk.stress","What is torsion?","A twisting force, for example on a wing or fuselage in roll.","Torsion＝扭力。");
K("agk.loads","What is the design ultimate load?","1.5 times the design limit load; the structure must withstand it without collapse.","Ultimate＝1.5×limit。");
K("agk.loads","What is the design limit load?","The maximum load the designer expects the airframe to experience in service.","預期最大載荷。");
K("agk.structcat","Give an example of a critical structure.","The wing spar; its failure would be catastrophic.","Critical：失效即災難。");
K("agk.structcat","What is the difference between primary and secondary structure?","Primary carries flight, ground or pressurisation loads; secondary affects function but not safety.","Primary 受主要載荷。");
K("agk.fuselage","What is a semi-monocoque fuselage?","Skin plus internal supports like stringers and bulkheads share the load, giving high strength-to-weight and damage tolerance.","蒙皮加內部支架共同受力。");
K("agk.fuselage","Compare truss and monocoque fuselage.","Truss is strong and easy to repair but heavy with more drag; monocoque skin carries all loads, light but deforms between formers.","Truss 重易修；mono 輕。");
K("agk.wings","Why does a high-wing aircraft feel more stable?","The pendulum effect keeps the weight below the wing, giving lateral stability.","Pendulum effect。");
K("agk.wings","What does dihedral do?","Wing tips higher than the root increase lateral (roll) stability.","上反角增lateral stability。");
K("agk.wings","What is a risk of a T-tail?","Deep stall, because the tailplane sits in the wake of a stalled wing.","T-tail 有 deep stall 風險。");
K("agk.fatigue","What is metal fatigue?","Failure under repeated load cycles at a stress lower than a single static load would cause.","反覆載荷令金屬裂。");
K("agk.fatigue","Why must airframes be inspected for fatigue?","Even low loads can start cracks over time, so cyclic parts like the pressurised fuselage are monitored.","低載荷都會累積裂紋。");

// ---- Piston basics
K("agk.fourstroke","Name the four strokes of a piston engine.","Intake, compression, power, exhaust.","吸、壓、爆、排。");
K("agk.fourstroke","How many crankshaft revolutions per cycle?","Two revolutions (720 degrees) for one complete four-stroke cycle.","720° crank。");
K("agk.fourstroke","When should ignition occur and why?","Slightly before TDC so combustion completes and gives maximum pressure around 30 degrees after TDC.","點火要早過 TDC。");
K("agk.parts","Which components are inside the cylinder?","Piston, connecting rod, intake and exhaust valves and spark plugs.","汽缸內零件。");
K("agk.compratio","Define compression ratio.","Total cylinder volume divided by clearance volume.","總體積 ÷ 餘隙體積。");
K("agk.compratio","What is the downside of a high compression ratio?","It needs higher-quality fuel to avoid detonation under high pressure and temperature.","高 CR 要好 fuel。");
K("agk.valves","What is valve overlap?","The period when both intake and exhaust valves are open around TDC at the end of exhaust.","兩 valve 同時開。");
K("agk.firing","What is the Lycoming four-cylinder firing order?","1-3-2-4.","1-3-2-4。");
K("agk.horsepower","Convert one horsepower to watts.","About 745.7 W, equal to 550 ft-lb per second.","1 hp ≈ 745.7 W。");
K("agk.horsepower","What is friction horsepower?","Power lost to friction and to drive accessories such as oil pump, fuel pump and alternator.","摩擦同附件損失。");
K("agk.sixsys","What do you need for combustion, and what are the six engine systems?","Air, fuel and heat; ignition, induction, fuel, lubrication, cooling, exhaust.","六個系統。");
K("agk.detonation","What is detonation?","Uncontrolled explosive burning of the mixture due to high pressure and temperature, causing damage.","爆燃。");
K("agk.detonation","What can cause detonation?","Low-octane fuel, excessive manifold pressure, lean mixture or overheating.","低辛烷、過熱。");
K("agk.preign","What is pre-ignition and what are the symptoms?","Ignition before the spark, caused by a hot spot; rough running, possible backfire and sudden CHT rise.","熱點令提早點燃。");
K("agk.preign","How does pre-ignition differ from detonation?","Pre-ignition is mixture lit too early by a hot spot; detonation is the explosive burn after normal ignition.","一個太早、一個爆炸。");

// ---- Ignition
K("agk.magneto","How does a magneto work?","A rotating magnet induces current in a coil; the secondary circuit steps it up to high voltage through the distributor.","轉動磁鐵生電。");
K("agk.magneto","Why does the ignition not depend on the aircraft electrical system?","Magnetos are self-contained, so the engine keeps running if the alternator and battery fail.","Mag 自給自足。");
K("agk.dualign","Why have two magnetos?","Redundancy and more complete, faster burning of the mixture for better performance.","冗餘＋燃燒好。");
K("agk.dualign","Which plugs does each magneto fire on the C172SP?","Right magneto fires lower right and upper left; left fires lower left and upper right.","C172SP 嘅 mag 分配。");
K("agk.impulse","What does an impulse coupling do?","A spring in the left magneto gives a stronger spark and retarded timing at low RPM during start.","助起動、retard。");
K("agk.ignswitch","What does OFF do on the ignition switch?","It grounds the magneto primary circuit so no spark is produced.","接地令 mag 停用。");
K("agk.ignswitch","What is a hot magneto?","A broken P-lead leaves the magneto live even with the switch off; the prop could fire if turned.","P-lead 斷開。");
K("agk.ignswitch","What are Enzo's DA40 magneto check limits?","At 2000 RPM the drop must not exceed 175 RPM and the difference between magnetos must not exceed 50 RPM.","DA40：175／50 RPM。");

// ---- Fuel & induction
K("agk.fuelsys","Trace fuel from tank to engine in a light aircraft.","Tank, selector valve, strainer, electric auxiliary pump, engine-driven pump, then carburettor or injection.","路徑。");
K("agk.fuelsys","What is the purpose of the auxiliary fuel pump?","To prime the engine, provide pressure if the engine pump fails and help with vapour.","起動／備用。");
K("agk.carb","What does a venturi do in a carburettor?","It accelerates the air, creating low pressure that draws fuel from the discharge nozzle.","Venturi 低壓抽油。");
K("agk.carb","What do throttle and mixture each control in a carburettor?","Throttle controls the quantity of mixture via the butterfly valve; mixture controls the fuel-to-air ratio via the needle.","量同比例。");
K("agk.carbice","What are the three types of carburettor icing?","Induction (impact) icing, fuel evaporation icing and throttle icing.","三種icing。");
K("agk.carbice","Why can carburettor ice form on a warm day?","Fuel vaporisation and venturi pressure drop cool the air; moist air then freezes even at several degrees above zero.","汽化降溫。");
K("agk.carbheat","How do you recognise and clear carburettor ice?","RPM drops and runs rough; apply carb heat, RPM falls then recovers as the ice melts.","用 carb heat。");
K("agk.carbheat","Why does carb heat reduce power?","Hot air is less dense and bypasses the filter, so mixture richens and power falls.","熱空氣density低。");
K("agk.fuelinj","List advantages of fuel injection.","Less icing, better fuel distribution, faster throttle response, precise mixture and easier cold starts.","少icing、分配好。");
K("agk.fuelinj","What are disadvantages of fuel injection?","Hot start difficulty, vapour lock on hot days and restart problems after fuel starvation.","熱機難起動。");
K("agk.mixture","When must the mixture be full rich?","Before descent, landing, go-around and high power settings, as extra fuel cools the engine.","落降前 rich。");
K("agk.mixture","Describe Enzo's DA40 lean-assist procedure.","Lean slowly until peak temperature difference is zero, then enrich until it shows about minus 100.","到 peak 再 enrich。");
K("agk.altair","What happens if the C172SP induction air filter blocks?","A spring-loaded alternate air door opens, drawing unfiltered air from the lower cowl with about 10% power loss at full throttle.","C172SP alternate air。");
K("agk.altair","How is alternate air selected in the DA40?","By a manual lever under the panel, pulled rearward, if MAP drops from icing or blocking.","DA40 手動 lever。");
K("agk.egtcht","What does EGT indicate?","Exhaust gas temperature at the exhaust, a very accurate indicator of mixture setting.","EGT 反映混合比。");
K("agk.egtcht","What does CHT measure?","Cylinder head temperature, reflecting heat wasted during the power stroke at maximum stress.","缸頭溫。");
K("agk.boost","Compare supercharger and turbocharger.","A supercharger is gear-driven by the engine; a turbocharger uses exhaust gas to spin a turbine driving the compressor.","齒輪 vs 排氣。");
K("agk.boost","What does a wastegate do?","It controls the amount of exhaust gas passing through the turbine and so the boost level.","控制 boost。");
K("agk.critalt","Define critical altitude.","The altitude above which a turbocharged engine can no longer maintain its manifold pressure.","MAP 維持唔到。");

// ---- Oil / cool / exhaust
K("agk.lube","What are the functions of engine oil?","Lubricate, cool, clean, seal and protect against corrosion.","潤滑冷卻清潔。");
K("agk.lube","What does the oil cooler bypass do?","If the cooler is blocked or cold oil is thick, the valve lets oil bypass it.","防塞。");
K("agk.oilind","What do high oil temperature and low oil pressure together indicate?","A serious oil problem such as oil loss; reduce power and land as soon as possible.","嚴重失油。");
K("agk.oilind","What are C172SP oil limits?","Oil pressure minimum 20 psi, green 50–90 psi, maximum 115 psi; oil temperature maximum 245°F.","C172SP 油壓油溫限制。");
K("agk.cooling","How is a light-aircraft engine cooled?","Ram air through cowl inlets is directed by baffles around the cylinders and exits at the bottom of the cowling.","Ram air＋baffle。");
K("agk.cooling","Why avoid rapid descent with idle power?","Shock cooling: cylinders cool too fast, risking cracks; warm the engine regularly.","避免過冷。");
K("agk.exhaust","What is the purpose of a muff on the exhaust?","Outside air passes around the muffler to produce cabin heat.","暖艙。");
K("agk.comon","What is the risk with exhaust-muff cabin heat?","A cracked muff can let carbon monoxide into the cabin; use a CO detector and shut off heat.","CO 中毒。");

// ---- Propeller
K("agk.proptwist","Why is a propeller blade twisted?","The tip moves faster than the root, so blade angle decreases outward to keep a similar AoA and uniform lift.","尖速快，角細。");
K("agk.proptwist","What if a propeller had no twist?","The root would have negative AoA while the tip would stall, so it would be inefficient.","根負 AoA、尖stall。");
K("agk.propforces","Name forces acting on a propeller.","Centrifugal force, thrust bending, torque bending, plus twisting forces and vibration.","受力。");
K("agk.pitch","What is propeller pitch?","The distance the propeller would advance in one revolution with no slip.","每轉前進距離。");
K("agk.pitch","Geometric versus effective pitch?","Geometric is theoretical advance without slip; effective is the actual advance including slip.","理論 vs 實際。");
K("agk.pitch","What are fine and coarse pitch used for?","Fine pitch gives low AoA and high RPM for take-off and climb; coarse gives high AoA and low RPM for cruise.","Fine climb；Coarse 巡航。");
K("agk.fixedprop","Why is a fixed-pitch propeller inefficient?","Its blade angle is optimum only at one speed and RPM, so it is a compromise for the rest of flight.","只一點最高效。");
K("agk.fixedprop","What is the C172SP propeller?","A two-bladed, fixed-pitch, 76-inch McCauley propeller.","C172SP prop。");
K("agk.csu","What does a constant speed unit do?","The governor modulates oil pressure to the hub to change pitch and hold selected RPM.","調油控 pitch。");
K("agk.csu","Name the main governor parts.","Pilot valve, speeder spring, flyweights and governor oil pump driven by the engine.","Governor 組件。");
K("agk.csu1","Describe the first force pair in a CSP hub.","Spring (and twisting moment) tends toward fine; oil pressure opposes toward coarse in a non-counterweighted single.","Hub：spring vs oil。");
K("agk.csu1","What happens when spring force exceeds oil pressure?","Blades go to fine pitch: lower AoA, less drag, higher RPM.","Spring 大 → fine。");
K("agk.csu2","Describe the second force pair in a governor.","Speeder spring pushes the pilot valve down; flyweight centrifugal force lifts it.","Spring vs flyweight。");
K("agk.csu2","What happens in an overspeed condition?","Flyweights fly outward, lift the pilot valve, oil flows to the hub, pitch coarsens, RPM falls.","過速 → coarse。");
K("agk.csu2","What happens if the prop lever is moved forward?","Speeder spring tension increases, valve moves down, oil drains from the hub, pitch fines and RPM rises.","Lever 前 → RPM 升。");
K("agk.mapcsp","Why use MAP with a constant speed prop?","RPM is held by the governor so cannot show power; manifold pressure shows engine power.","RPM 固定。");
K("agk.mapcsp","What does MAP measure?","Absolute pressure in the induction manifold just before the inlet valves, in inches of mercury.","進pressure。");
K("agk.proploss","Where do blades go with oil loss on a single-engine CSP?","To fine pitch (high RPM) as spring and twisting moment are no longer opposed; control RPM with throttle.","失油 → fine。");
K("agk.proploss","What happens on loss of oil in a DA40?","The governor sets the finest pitch, giving high RPM; regulate RPM with throttle and avoid exceeding 2700 RPM.","DA40 失油。");
K("agk.feather","What is feathering?","Blades rotate to almost 90 degrees so the leading edge faces the airflow, giving minimum drag.","葉近 90°。");
K("agk.feather","What is windmilling?","The prop being rotated by ram air after engine failure, producing significant drag.","風推轉 → drag 大。");
K("agk.feather","Why do Hartzell feathering props have latches?","Springs engage latches below about 800 RPM to stop the prop feathering at normal shutdown on the ground.","防地面 feather。");

// ---- Multi
K("agk.critical","What is the critical engine?","The engine whose failure has the most adverse effect on control and performance.","最不利嘅 engine。");
K("agk.critical","Which engine is critical on a conventional twin and why?","The left engine, because of P-factor, accelerated slipstream, spiral slipstream and torque.","Left 係 critical。");
K("agk.critical","Which designs have no critical engine?","Counter-rotating propellers balance torque and P-factor.","Counter-rotating。");
K("agk.pfactor","What is P-factor?","At high AoA the descending blade produces more thrust, moving the thrust centre toward the descending side.","下行葉thrust大。");
K("agk.pfactor","Why does P-factor make the left engine critical?","Thrust acts further from the centreline on the right engine, so failure of the left has a greater yawing arm.","Arm 較長。");
K("agk.vmc","Define Vmc.","The calibrated airspeed at which, with the critical engine suddenly inoperative, control can be kept in straight flight with up to 5 degrees bank.","Vmc 定義。");
K("agk.vmc","How is yaw countered on engine failure?","Primary control is rudder: live leg, live engine; dead leg, dead engine.","Rudder 主控。");
K("agk.vmc","Why does rudder fail at low speed?","Aerodynamic force depends on airspeed, so below a certain speed there is not enough force.","力隨speed。");
K("agk.vmcg","What is Vmcg?","Minimum speed on the ground at which directional control can be kept within 30 ft laterally using primary aerodynamic controls.","Vmcg。");
K("agk.vmcg","How does thrust affect Vmcg?","More thrust gives more yawing moment on failure, needing more aerodynamic force and therefore higher speed.","Thrust ↑ Vmcg ↑。");
K("agk.vmca","What is Vmca?","Minimum control speed airborne, like Vmcg but with a small bank (5 degrees) toward the live engine allowed.","5° to the live。");
K("agk.vmca","Which condition must be true for VR and Vmca?","VR must not be lower than Vmca.","VR ≥ Vmca。");
K("agk.counterrot","Counter-rotating versus contra-rotating?","Counter-rotating: two engines turn opposite ways; contra-rotating: two props on one engine turn opposite ways.","兩個唔同概念。");

// ---- Gas turbine
K("agk.brayton","What is the Brayton cycle?","Continuous cycle of intake, compression, combustion and expansion at roughly constant pressure.","連續循環。");
K("agk.brayton","Give the thrust equation.","Thrust equals mass flow times the difference between jet velocity and intake velocity: T = m(Vj − Vi).","T = m(Vj−Vi)。");
K("agk.brayton","Why is a gas turbine smoother than a piston engine?","Combustion and power output are continuous rather than a single power stroke.","連續輸出。");
K("agk.turbtypes","Name four types of gas turbine engine.","Turbojet, turbofan, turboprop and turboshaft.","四類。");
K("agk.intake","What shape is the intake and why?","Divergent duct to deliver smooth subsonic air to the compressor at the highest static pressure with minimum loss.","Divergent 升壓。");
K("agk.compressor","Compare axial and centrifugal compressors.","Axial is efficient with high overall ratio but prone to stall, surge and FOD; centrifugal is robust but has lower overall ratio.","Axial vs centrifugal。");
K("agk.compressor","Why do axial compressors need many stages?","Each rotor-stator stage raises pressure only a little (about 1.1–1.2:1).","每 stage 升少。");
K("agk.combustor","What is the purpose of the diffuser in the combustor?","It slows the air and raises pressure to prepare for combustion; it is the highest-pressure point.","降速增壓。");
K("agk.combustor","When is the igniter used?","Only for start; combustion is continuous once the engine runs.","起動先用。");
K("agk.turbine","What does the turbine do?","Extracts energy from hot gas to turn the compressor and accessories.","驅動 compressor。");
K("agk.turbine","Impulse vs reaction turbine?","Impulse turns by gas impact like a water wheel; reaction turns from aerodynamic lift of the blades.","衝動式 vs 反作用式。");
K("agk.turbcool","How are turbine blades cooled?","Internal cooling air, film cooling over the surface, thermal barrier coatings and high-melting-point alloys.","內部／薄膜冷卻。");
K("agk.nozzle","What is the exhaust section's function?","To convert turbine exit gas into propulsive thrust through a convergent nozzle.","轉成thrust。");
K("agk.spools","Why use multi-spool engines?","Each spool runs at its own optimum RPM for efficiency and stable airflow, and accelerates faster.","各 spool 最佳 RPM。");
K("agk.spools","What are N1 and N2?","N1 is the low-pressure spool and N2 the high-pressure spool.","N1 低壓、N2 高壓。");

// ---- Electrical
K("agk.elecbasic","State Ohm's law and the power formula.","V = I × R and P = V × I.","歐姆定律。");
K("agk.elecbasic","Which factors increase resistance?","Longer conductor, smaller cross-section and higher temperature.","長、細、熱。");
K("agk.elecbasic","Series versus parallel circuits?","Series: same current, voltages add. Parallel: same voltage, currents add.","串 vs 並。");
K("agk.acdc","Difference between AC and DC?","DC flows one way; AC periodically reverses direction.","直流／交流。");
K("agk.acdc","What converts AC to DC and DC to AC?","Rectifier (or transformer-rectifier) for AC to DC; inverter for DC to AC.","Rectifier／inverter。");
K("agk.c172elec","Describe the C172SP electrical system.","28 V DC powered by a belt-driven 50 A alternator and a 24 V battery, with split primary bus and essential bus.","C172SP 電系統。");
K("agk.c172elec","Why is the avionics master separate?","To isolate sensitive electronics from harmful transients, for example at starting.","隔離瞬變電壓。");
K("agk.c172elec","Why does the Airspace slide differ from the C172SP POH?","The slide shows an older 14 V DC system with a 12 V battery; the 172S POH states 28 V and 24 V.","舊款 vs C172SP。","check");
K("agk.battery","Compare lead-acid and NiCad batteries.","Lead-acid is less prone to overheating but loses voltage as it discharges; NiCad holds voltage but can thermal runaway.","Lead-acid vs NiCad。");
K("agk.battery","How do you estimate battery endurance?","Divide battery capacity in amp-hours by the load in amps.","Ah ÷ A。");
K("agk.alternator","What does an alternator control unit do?","It regulates voltage and trips the alternator on overvoltage.","調壓、過壓保護。");
K("agk.ammeter","Ammeter versus loadmeter?","Ammeter shows charge or discharge to the battery, zero centre; loadmeter shows only amps drawn from the alternator.","兩者分別。");
K("agk.bus","What is a bus bar?","A distribution point for electrical power to several circuits.","配電點。");
K("agk.bus","Is the ignition powered by the aircraft electrical system?","No; the magnetos are self-powered; only the starter uses the electrical system.","點火唔靠 bus。");
K("agk.cb","What is the purpose of a circuit breaker?","To protect wiring and equipment from excessive current, such as a short circuit.","防過流。");
K("agk.elecfail","What do you do for C172SP VOLTS annunciation in flight?","Avionics off, check ALT FLD breaker, cycle master OFF then ON; if it recurs switch ALT off, shed load and land soon.","VOLTS 程序。");
K("agk.elecfail","What does the DA40 essential bus give you?","Systems listed in the AFM are supplied for about half an hour after alternator failure.","約 30 分鐘。");
K("agk.elecfail","What if the ammeter shows excessive charge in a C172SP?","Turn the alternator off, switch off nonessential equipment and land as soon as practical.","過充。");
K("agk.acairliner","What AC power do airliners use?","Three-phase 115 V at 400 Hz from engine-driven generators and an APU generator; 28 V DC via TRs.","115V 400Hz。");
K("agk.acairliner","What does a bus tie contactor do?","Connects buses so another generator can power the system when one fails.","BTC。");
K("agk.elecback","What powers the aircraft if all generators fail?","The emergency generator (hydraulic driven) or RAT and batteries to the essential bus; a static inverter provides AC ESS.","Emer config。");

// ---- Hydraulics
K("agk.hydprin","State Pascal's principle.","Pressure applied to a confined fluid is transmitted equally and undiminished in all directions.","Pascal。");
K("agk.hydprin","Calculate force: 100 lb on 10 sq in piston driving 100 sq in piston.","Pressure 100/10 = 10 psi; output force = 10 × 100 = 1000 lb, but the large piston moves one tenth the distance.","10 psi、1000 lb。");
K("agk.hydprin","Why is hydraulic fluid used rather than air?","Liquid is almost incompressible, so force transmits instantly and predictably.","液體唔可壓縮。");
K("agk.hydfluid","Why can't different hydraulic fluids be mixed?","Combinations can gel; mineral and Skydrol are incompatible with each other's seals.","混用會 gel。");
K("agk.hydfluid","What is Skydrol?","A phosphate-ester fire-resistant synthetic hydraulic fluid used in most modern airliners.","防火合成油。");
K("agk.hydparts","What are the main hydraulic system components?","Reservoir, pump, filter, accumulator, selector and relief valves, and actuators.","主要組件。");
K("agk.hydparts","What does the filter bypass indicator tell you?","A pop-up indicator shows the element is clogged and the bypass valve has operated.","濾芯塞。");
K("agk.hydvalves","Function of check, relief and selector valves?","Check valve allows one-way flow; relief limits pressure; selector directs flow.","三種閥。");
K("agk.accum","What are the uses of an accumulator?","Damp pressure fluctuations, provide emergency pressure after pump failure and parking brake pressure.","穩壓、備援。");
K("agk.accum","How do you check accumulator gas charge?","The hydraulic system pressure must be fully depleted first.","要先洩壓。");
K("agk.hydsource","How is an airliner hydraulic system pressurised?","Engine-driven pumps, electric pumps, PTU, hand pump or RAT, typically 3000 psi (up to 5000 psi on some).","加壓來源。");
K("agk.hydsource","What is a PTU?","Power transfer unit: lets one hydraulic system power another without exchanging fluid.","PTU。");

// ---- Landing gear / brakes
K("agk.brakes","Small versus large aircraft brakes?","Small: single disc, pilot pressure on the pedals; large: multi-disc powered by main hydraulic pressure via reducing valve.","小機 vs 大機。");
K("agk.brakes","Symptoms of impending brake failure on the C172SP?","Gradual loss of braking, noisy or dragging brakes, soft pedals and excessive travel.","刹車失效徵兆。");
K("agk.fusible","What is a fusible plug?","A heat-sensitive plug in the wheel that melts to deflate the tyre and prevent burst.","防 tyre 爆。");
K("agk.geargroup","What does the jury strut do?","It locks the retractable gear in the down position and is the last to move when locking, first when retracting.","Jury strut 鎖定。");
K("agk.geargroup","Drag versus side strut?","Drag strut takes fore-aft loads; side strut takes lateral loads.","前後 vs 側向。");
K("agk.geargroup","What is the trunnion beam?","The structure joining shock strut to the airframe, allowing the gear to rotate for retraction.","連接wing。");
K("agk.gearsafe","Name gear safety features.","Over-centre locking, ground safety pins, bungee springs and rearward wheel axis.","安全設計。");
K("agk.gearsafe","What does the bungee spring do?","It pulls the jury strut into lock during alternate extension with no hydraulics and keeps it locked.","無液壓都鎖。");
K("agk.gearcfg","Advantages of tricycle over tail gear?","Heavy braking cannot nose over, better forward visibility, no tail-down incidence.","Tricycle 刹車安全。");
K("agk.nosegear","What do torque links and a shimmy damper do?","Torque links stop the strut inner cylinder rotating; shimmy damper stops rapid oscillations.","防轉、防擺。");
K("agk.hydroplane","Name the three types of hydroplaning.","Dynamic (water wedge), reverted rubber (locked wheel steam) and viscous (thin film).","三種。");
K("agk.hydroplane","Hydroplaning speed estimate?","Approximately 9 times the square root of tyre pressure in psi, in knots (lecture rule of thumb).","9×√psi。","check");

// ---- Pneumatic
K("agk.pneu","Where does bleed air come from?","Engine compressor, APU load compressor or ground source.","Bleed 來源。");
K("agk.pneuuse","List uses of bleed air.","Engine start, air conditioning and pressurisation, anti-icing, cargo heating, hydraulic reservoir pressurisation.","用途。");
K("agk.aircon","How is bleed air turned into conditioned air?","Through pack heat exchangers and an air cycle machine that cools it with turbines.","Pack 降溫。");
K("agk.aircon","How do non-pressurised aircraft get cabin heat?","Ram air heated by passing over the exhaust muff.","排氣 muff。");
K("agk.pressurisation","How is cabin pressure controlled?","Air conditioning supplies air; outflow valves control the outflow and cabin altitude.","Outflow valve。");
K("agk.pressurisation","What is the typical maximum cabin altitude?","About 8000 ft; some newer aircraft keep about 6000 ft.","約 8000 ft。");
K("agk.pressurisation","What are the relief valves?","Positive safety relief and negative relief valves protect the structure from over- and under-pressure.","防結構損壞。");

// ---- Instruments
K("agk.pitotstatic","Which instruments use pitot and static?","ASI uses both; altimeter and VSI use static only.","ASI 用 pitot＋static。");
K("agk.pitotstatic","What is the C172SP alternate static source?","A cabin-pressure source for static instruments when the external port is blocked.","艙內static pressure。");
K("agk.pitotstatic","Maximum C172SP alternate static error?","About 4 knots airspeed and 30 feet altitude variation with windows closed.","4 kt／30 ft。");
K("agk.asi","How does an ASI work?","It measures the difference between pitot (total) and static pressure, which is dynamic pressure.","dynamic pressure。");
K("agk.altvsi","Why does the altimeter read less when static ports block in climb?","It keeps the trapped static pressure from where the blockage occurred, so it freezes.","凍結。");
K("agk.blockage","Pitot ram and drain blocked: effect in climb?","Pitot pressure stays constant while static falls, so the ASI over-reads in a climb and under-reads in a descent.","climb over-read。");
K("agk.blockage","Static blocked: effect on ASI in climb?","Trapped static is higher than actual, so differential is smaller and ASI under-reads; in descent it over-reads.","climb under-read。");
K("agk.blockage","Pitot fully blocked at take-off roll?","The ASI reads zero as only trapped static pressure reaches it.","歸零。");
K("agk.gyro","What are the two gyroscopic properties?","Rigidity in space and precession.","Rigidity、precession。");
K("agk.gyro","Define precession.","A force applied to a spinning gyro acts as if applied 90 degrees later in the direction of rotation.","90° 後發生。");
K("agk.gyro","Why does the DI need resetting?","It precesses slightly over time due to friction and earth rotation, so set it to the compass regularly.","漂移。");
K("agk.attind","Which instruments are vacuum driven on the C172SP?","The attitude indicator and directional indicator; the turn coordinator is electric.","AI、DI 真空。");
K("agk.vacuum","What are normal C172SP vacuum limits and warnings?","4.5–5.5 inHg; below 3.0 inHg a VAC annunciator flashes then stays on.","4.5–5.5 inHg。");
K("agk.vacuum","What if both vacuum pumps fail in cloud?","Attitude and directional indicators are disabled; rely on turn coordinator and partial-panel technique.","Partial panel。");
K("agk.compass","What are compass turning and acceleration errors?","Dip causes turning errors (undershoot north, overshoot south) and acceleration errors (accelerate north, decelerate south on east/west headings).","UNOS／ANDS。","check");

// ---- Autopilot
K("agk.afcs","Why do pilots need an AFCS?","Reduce fatigue, improve handling and stability, operate in difficult conditions and free capacity for decisions.","減疲勞。");
K("agk.afcs","What is the AFCS operation flow?","Sensors measure, computers analyse, outputs move control surfaces, and feedback compares output.","感測→計算→輸出→回饋。");
K("agk.fd","What is a flight director?","A command bar showing the computed manoeuvre; it does not itself control the aircraft.","指令條。");
K("agk.ap","What mode appears if AP is engaged without FD guidance?","Basic mode: hold pitch attitude, wings level and yaw damping.","Basic mode。");
K("agk.athr","Auto-thrust vs auto-throttle?","Airbus levers stay fixed in climb detent while computers command engines; Boeing levers move.","Airbus 唔郁、Boeing 郁。");
K("agk.athr","Speed mode versus thrust mode?","Speed/Mach mode adjusts thrust to hold speed; thrust mode holds fixed thrust (CLB, IDLE) while pitch holds speed.","兩種 mode。");
K("agk.fma","What do green and blue mean on the FMA?","Green is active; blue is armed or selected.","綠 active、藍 armed。");
K("agk.failpass","Fail-passive versus fail-operational?","Fail-passive needs two APs; a failure disconnects without out-of-trim but no autoland. Fail-operational has three and completes landing.","兩種冗餘。");
K("agk.envprot","What does flight envelope protection do?","Keeps the aircraft within safe limits (bank, pitch, load factor, AoA, speed) while AP or manual flight is used.","保護邊界。");

// ---- Warnings
K("agk.warnclass","What are the three alert levels?","Warnings (immediate action), cautions (action soon) and advisories (when convenient).","三級。");
K("agk.warnclass","Colours under CS 25.1322?","Red for warning, amber for caution, green for safe operation.","紅、琥珀、綠。");
K("agk.warnclass","What are inhibits?","Alerts suppressed in critical phases, for example fire bell from nose wheel off to 400 ft AGL.","take-off抑制。");
K("agk.configwarn","What triggers a take-off configuration warning?","Thrust advanced with stabiliser trim, park brake, flaps, slats or speed brake out of take-off setting.","take-off config。");
K("agk.configwarn","What gear warning is required?","Aural warning if landing attempted gear not locked down, or position inconsistent with lever.","Gear 警告。");
K("agk.fire","How does the engine fire warning appear?","Steady red warning light for the affected engine plus an alarm bell.","紅燈＋bell。");
K("agk.fire","What does a yaw damper inoperative light mean?","Rudder yaw damping (dutch roll control) has malfunctioned; amber light.","Yaw damper 故障。");
K("agk.gpws","What is GPWS for?","It warns of dangerous proximity to terrain: sink after take-off, inadequate clearance, closure rate, below glideslope.","地形警告。");
K("agk.gpws","How is EGPWS different?","Standard GPWS uses radio altimeter and cannot see ahead; EGPWS adds look-ahead terrain alerting and display.","EGPWS 睇前面。");
K("agk.gpwsmodes","Give GPWS modes 1 to 5.","1 sink rate, 2 terrain closure, 3 altitude loss after take-off, 4 unsafe terrain clearance, 5 below glideslope.","Mode 1–5。");
K("agk.gpwsmodes","What are modes 6 and 7?","Mode 6 bank angle; mode 7 windshear.","Mode 6、7。");
K("agk.gpwsmodes","What is the GPWS priority?","Windshear and pull-up highest; then terrain, too low terrain, gear, flaps, bank, sink rate, don't sink.","優先次序。");
K("agk.gpwsrec","Pilot flying actions for a GPWS pull-up?","AP and A/THR off, max thrust, wings level and rotate to about 20 degrees pitch, retract speedbrakes.","Pull-up。");
K("agk.gpwsrec","Should gear or flaps be changed?","Not until terrain separation is assured.","唔好改 config。");
K("agk.tcas","What are TA and RA?","TA is a traffic alert, no manoeuvre commanded; RA gives a vertical resolution manoeuvre.","TA vs RA。");
K("agk.tcas","What are TCAS traffic symbols?","White open diamond other, solid diamond proximate, amber circle TA, red square RA.","符號。");
K("agk.tcas","What do you do for a TCAS RA?","Disengage AP and A/THR if manoeuvring, follow the RA smoothly, and tell ATC.","跟 RA。");
K("agk.windshear","What is a windshear escape manoeuvre?","AP off, TO/GA, max thrust, wings level, pitch to about 15 degrees, retract speedbrakes, keep gear and flaps.","Windshear escape。");
K("agk.windshear","Indications of windshear?","Windshear warning siren and call, or unacceptable flight path deviations such as 15 kt, 500 fpm, 5 degrees pitch.","警告同偏差。");

// ---- Types
K("agk.c172sp","What engine does the C172SP have?","Lycoming IO-360-L2A, 180 BHP at 2700 RPM, fuel-injected, horizontally opposed four-cylinder.","IO-360-L2A。");
K("agk.c172sp","C172SP fuel capacity?","56 US gallons total, 53 usable, 3 unusable; tanks 28 gal each.","56／53 gal。");
K("agk.c172sp","C172SP oil capacity and fuel grade?","Sump 8 US quarts; 100LL (blue).","8 qt、100LL。");
K("agk.da40","What engine and prop does the DA40 XLT have?","Lycoming IO-360-M1A, 180 HP at 2700 RPM, with an mt-Propeller 3-blade constant speed prop.","DA40 engine。");
K("agk.da40","DA40 oil, fuel pressure and CHT limits?","Oil pressure green 55–95 psi, fuel pressure 14–35 psi, CHT max 500°F, oil temp max 245°F.","DA40 限制。");
K("agk.da40","DA40 static RPM and FCU relief?","Static RPM 2680±20 per Enzo FCOM; after shutdown advance mixture slightly to relieve fuel control unit pressure.","DA40 FCOM。");
K("agk.da40","Static RPM comparison?","C172SP fixed pitch about 2300–2400 RPM static; DA40 CSP about 2680±20.","對比。");

const X=(H,svg,x,y,s,f,z,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#e2e8f0","font-size":z||12,"text-anchor":a||"middle"},svg);t.textContent=s;return t};
const cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const setSlider=(inp,v)=>{inp.value=v;const b=inp.parentNode.querySelector("b");if(b)b.textContent=Math.round(v)};
const A=[
// 1. Four-stroke cycle
{title:"Four-Stroke Cycle（720° crank）",hint:"撳播放或拉 crank 角度睇 valve／piston／火花",build(box,H){
 const svg=H.svg(box,700,300), say=H.note(box);
 const cx=250, cy=262, r=38, L=95;
 H.el("rect",{x:212,y:40,width:76,height:170,fill:"none",stroke:"#94a3b8","stroke-width":3},svg);
 const gas=H.el("rect",{x:214,y:42,width:72,height:60,fill:"#60a5fa","fill-opacity":.3},svg);
 const piston=H.el("rect",{x:214,y:100,width:72,height:28,fill:"#cbd5e1"},svg);
 const rod=H.el("line",{stroke:"#e2e8f0","stroke-width":5},svg);
 H.el("circle",{cx:cx,cy:cy,r:r+8,fill:"none",stroke:"#64748b","stroke-width":2},svg);
 const pin=H.el("circle",{r:6,fill:"#fbbf24"},svg);
 const iv=H.el("rect",{x:224,y:32,width:16,height:6,fill:"#38bdf8"},svg);
 const ev=H.el("rect",{x:260,y:32,width:16,height:6,fill:"#f87171"},svg);
 const spark=H.el("circle",{cx:250,cy:42,r:0,fill:"#fde047"},svg);
 X(H,svg,232,22,"Intake","#38bdf8",11);X(H,svg,268,22,"Exhaust","#f87171",11);
 const title=X(H,svg,500,60,"","#e2e8f0",22);
 const sub=X(H,svg,500,90,"","#cbd5e1",13);
 const cols=["#38bdf8","#60a5fa","#fb923c","#94a3b8"],nm=["Intake","Compression","Power","Exhaust"];
 for(let i=0;i<4;i++){H.el("rect",{x:380+i*65,y:130,width:65,height:22,fill:cols[i],"fill-opacity":.6},svg);X(H,svg,412+i*65,145,nm[i],"#0f172a",10)}
 const mk=H.el("path",{d:"M0,0L-6,-12L6,-12Z",fill:"#fbbf24"},svg);
 X(H,svg,380,175,"TDC","#cbd5e1",10);X(H,svg,640,175,"720°","#cbd5e1",10);
 X(H,svg,500,200,"例子 timing：intake 開 15° BTDC，閂 50° ABDC","#94a3b8",11);
 X(H,svg,500,218,"點火喺 TDC 前（約 20°），最大pressure約 30° ATDC","#94a3b8",11);
 const info=["Piston 落 → 吸入 air-fuel","Piston 上 → 壓縮，兩 valve 閂","火花 → 爆 → 推 piston 落（做功）","Piston 上 → 排廢氣"];
 let th=0, playing=true, sl;
 function draw(){
  const f=(th%360)*Math.PI/180;
  const py=cy-(r*Math.cos(f)+Math.sqrt(L*L-r*r*Math.sin(f)*Math.sin(f)));
  piston.setAttribute("y",py-28);
  gas.setAttribute("height",Math.max(2,py-28-42));
  const px=cx+r*Math.sin(f), qy=cy-r*Math.cos(f);
  pin.setAttribute("cx",px);pin.setAttribute("cy",qy);
  rod.setAttribute("x1",px);rod.setAttribute("y1",qy);rod.setAttribute("x2",250);rod.setAttribute("y2",py);
  const s=Math.floor(th/180)%4;
  const io=(th>=705||th<230), eo=(th>=490||th<15);
  iv.setAttribute("y",io?42:32);ev.setAttribute("y",eo?42:32);
  gas.setAttribute("fill",s==2?"#fb923c":(s==3?"#94a3b8":"#60a5fa"));
  let op=.3; if(s==1)op=.3+.5*(th-180)/180; if(s==2)op=.8-.5*(th-360)/180; if(s==3)op=.3;
  gas.setAttribute("fill-opacity",op);
  spark.setAttribute("r",(th>=340&&th<372)?9:0);
  title.textContent=nm[s]+"  "+Math.round(th)+"°";title.setAttribute("fill",cols[s]);
  sub.textContent=info[s];
  mk.setAttribute("transform",`translate(${380+th/720*260},128)`);
  say(`Intake valve ${io?"開":"閂"}，Exhaust valve ${eo?"開":"閂"}；Valve overlap 喺 exhaust 尾／intake 頭兩個都開`);
 }
 sl=H.slider(box,"Crank °",0,719,0,v=>{th=v;draw()});
 H.button(box,"⏯ 播放／暫停",()=>{playing=!playing});
 H.loop(()=>{if(playing){th=(th+1.2)%720;setSlider(sl,th);draw()}});
}},

// 2. Carb icing
{title:"Carburettor Icing（icing風險）",hint:"改temperature、humidity、冷卻幅度；試開 carb heat",build(box,H){
 const svg=H.svg(box,700,260), say=H.note(box);
 H.el("path",{d:"M60,70 L260,70 L300,110 L340,70 L560,70 L560,190 L340,190 L300,150 L260,190 L60,190Z",fill:"#1e293b",stroke:"#64748b","stroke-width":2},svg);
 X(H,svg,150,60,"Air in","#38bdf8",12);X(H,svg,300,205,"Venturi","#e2e8f0",12);X(H,svg,470,60,"Throttle (butterfly)","#e2e8f0",11);
 H.el("line",{x1:470,y1:75,x2:470,y2:185,stroke:"#94a3b8","stroke-width":4},svg);
 const ice=H.el("ellipse",{cx:300,cy:130,rx:0,ry:0,fill:"#bae6fd"},svg);
 const arrows=[];for(let i=0;i<8;i++)arrows.push(H.el("circle",{r:4,fill:"#38bdf8"},svg));
 const txt=X(H,svg,620,100,"","#e2e8f0",12,"end");
 const t2=X(H,svg,620,125,"","#e2e8f0",12,"end"),t3=X(H,svg,620,150,"","#fde047",13,"end");
 let oat=15,rh=70,drop=25,heat=false,risk=0,ph=0;
 const sOat=H.slider(box,"OAT °C",-10,35,15,v=>{oat=v;calc()});
 const sRh=H.slider(box,"相對humidity %",20,100,70,v=>{rh=v;calc()});
 const sDr=H.slider(box,"Venturi＋汽化降溫 °C（概念值）",10,35,25,v=>{drop=v;calc()});
 const bt=H.button(box,"Carb heat：OFF",()=>{heat=!heat;bt.textContent="Carb heat："+(heat?"ON":"OFF");calc()});
 function calc(){
  const inT=oat+(heat?30:0), ct=inT-drop, dew=oat-(100-rh)/5;
  const moist=ct<=dew+0.5;
  risk=(!heat||ct<0)&&ct<=0.5&&moist?Math.min(1,(1-ct/20)*(rh/100)+0.2):0;
  if(ct>0.5||!moist)risk=0;
  txt.textContent=`入口temperature ${inT.toFixed(0)}°C → carb 內 ${ct.toFixed(0)}°C`;
  t2.textContent=`露點（近似）${dew.toFixed(0)}°C`;
  t3.textContent=risk>0?"⚠ icing：RPM 跌、rough":"✔ 暫時冇冰";
  ice.setAttribute("rx",risk*30);ice.setAttribute("ry",risk*18);
  say(heat?"Carb heat：熱空氣融冰，但 power 少咗，要預期 RPM 先跌後升":(oat>20&&risk>0?"OAT 高都可以icing：汽化降溫＋濕空氣":"留意：C172SP 係 fuel injected，冇 carb heat，只有 alternate air"));
 }
 H.loop(()=>{ph+=2;arrows.forEach((a,i)=>{const x=60+((ph*1.5+i*70)%500);a.setAttribute("cx",x);a.setAttribute("cy",x>260&&x<340?130:(110+ (i%2)*40));a.setAttribute("fill",x>260&&x<340?"#93c5fd":"#38bdf8")})});
}},

// 3. CSU governor
{title:"Constant Speed Prop：Governor 運作",hint:"拉 RPM 設定／MAP／speed，睇 pitch 點跟；再試失油",build(box,H){
 const svg=H.svg(box,700,300), say=H.note(box);
 X(H,svg,110,22,"Governor","#34d399",13);
 H.el("rect",{x:60,y:35,width:100,height:30,fill:"#475569"},svg);X(H,svg,110,55,"Speeder spring","#fff",10);
 const spr=H.el("rect",{x:80,y:65,width:60,height:20,fill:"#34d399","fill-opacity":.6},svg);
 const fw1=H.el("circle",{cy:130,r:10,fill:"#fbbf24"},svg), fw2=H.el("circle",{cy:130,r:10,fill:"#fbbf24"},svg);
 H.el("line",{x1:110,y1:85,x2:110,y2:190,stroke:"#94a3b8","stroke-width":3},svg);
 const pv=H.el("rect",{x:98,y:170,width:24,height:16,fill:"#38bdf8"},svg);X(H,svg,110,215,"Pilot valve","#38bdf8",11);
 const flow=X(H,svg,110,235,"","#38bdf8",12);
 H.el("circle",{cx:420,cy:150,r:34,fill:"#334155",stroke:"#64748b"},svg);X(H,svg,420,200,"Hub","#cbd5e1",11);
 const blades=[0,1].map(()=>H.el("rect",{x:-6,y:-95,width:12,height:90,fill:"#e2e8f0"},svg));
 const angTxt=X(H,svg,420,222,"","#fde047",14);
 const rpmTxt=X(H,svg,600,60,"","#e2e8f0",20),setTxt=X(H,svg,600,85,"","#cbd5e1",13),st=X(H,svg,600,125,"","#fde047",13);
 const bar=H.el("rect",{x:540,y:150,width:10,height:100,fill:"#475569"},svg),barf=H.el("rect",{x:540,y:250,width:10,height:0,fill:"#34d399"},svg);
 let setR=2400,map=23,tas=100,mode="n",b=22,rpm=2400;
 H.slider(box,"Prop lever（設定 RPM）",2000,2700,2400,v=>{setR=v},50);
 H.slider(box,"MAP inHg（throttle）",12,29,23,v=>{map=v});
 H.slider(box,"Airspeed kt",60,140,100,v=>{tas=v});
 H.button(box,"失油：單發 CSP",()=>{mode="f"});
 H.button(box,"失油：twin feathering",()=>{mode="x"});
 H.button(box,"Reset",()=>{mode="n";rpm=setR;b=22});
 H.loop(()=>{
  const eq=b>=80?0:2400*Math.sqrt(map/25)*Math.pow(20/b,0.6)*(0.85+tas/700);
  if(mode=="x")b=Math.min(85,b+1.2),rpm+= (0-rpm)*0.02;
  else {rpm+=(eq-rpm)*0.08;
   const err=rpm-setR;
   if(mode=="f")b=Math.max(12,b-0.4);
   else b=cl(b+cl(err*0.004,-0.35,0.35),12,38);}
  const err=rpm-setR, k=cl(err/80,-1,1);
  const sp=cl((setR-2000)/700,0,1);
  spr.setAttribute("height",10+25*sp);
  const sep=14+Math.max(0,(rpm-1800))/700*30;
  fw1.setAttribute("cx",110-sep);fw2.setAttribute("cx",110+sep);
  pv.setAttribute("y",170-k*18);
  blades.forEach((e,i)=>e.setAttribute("transform",`translate(420,150) rotate(${i*180+ (90-b*0.9)}) `));
  angTxt.textContent="Blade angle "+(b>=80?"FEATHER":b.toFixed(0)+"°");
  rpmTxt.textContent="RPM "+Math.round(rpm);setTxt.textContent="Set "+setR;
  barf.setAttribute("height",cl(rpm/2900,0,1)*100);barf.setAttribute("y",250-cl(rpm/2900,0,1)*100);
  let s="";
  if(mode=="f")s="失油：spring 贏 → fine stop → 高 RPM，用 throttle 控 RPM（DA40／單發）";
  else if(mode=="x")s="失油：counterweight／spring → FEATHER，drag 最細";
  else if(Math.abs(err)<20)s="ON-SPEED：flyweight 同 spring 平衡，pilot valve 中立";
  else if(err>0&&b>=38)s="Overspeed：已到 coarse stop，governor 控唔住";
  else if(err<0&&b<=12)s="Underspeed：已到 fine stop，加 MAP／降速令 RPM 回升";
  else s=err>0?"Overspeed → flyweight 外飛 → oil 入 hub → pitch 變 coarse":"Underspeed → flyweight 內縮 → oil 洩走 → pitch 變 fine";
  flow.textContent=err>20?"Oil → hub（coarse）":(err<-20?"Oil ← hub 洩走（fine）":"");
  st.textContent=mode=="n"?(Math.abs(err)<20?"✔ on-speed":""):"";
  say(s);
 });
}},

// 4. Gas turbine / Brayton
{title:"Gas Turbine 各 Station：Pressure ＆ Temperature",hint:"改 pressure ratio 同 turbine entry temp",build(box,H){
 const svg=H.svg(box,700,320), say=H.note(box);
 const names=["Intake","Compressor","Combustor","Turbine","Nozzle"];
 const xs=[60,190,320,450,580], hs=[70,50,56,64,44];
 const bg=[];
 for(let i=0;i<5;i++){bg.push(H.el("rect",{x:xs[i]-55,y:80-hs[i]/2,width:110,height:hs[i],fill:"#334155",stroke:"#64748b"},svg));X(H,svg,xs[i],35,names[i],"#cbd5e1",12);}
 const parts=[];for(let i=0;i<18;i++)parts.push(H.el("circle",{r:4},svg));
 const pb=[],tb=[],pt=[],tt=[];
 X(H,svg,20,150,"P","#38bdf8",13);X(H,svg,20,250,"T","#f87171",13);
 for(let i=0;i<5;i++){pb.push(H.el("rect",{x:xs[i]-20,width:40,fill:"#38bdf8"},svg));tb.push(H.el("rect",{x:xs[i]-20,width:40,fill:"#f87171"},svg));pt.push(X(H,svg,xs[i],0,"","#38bdf8",11));tt.push(X(H,svg,xs[i],0,"","#f87171",11));}
 let pr=20,tit=1500,ph=0,P=[],T=[];
 H.slider(box,"Pressure ratio",5,45,20,v=>{pr=v;calc()});
 H.slider(box,"Turbine entry K",900,1700,1500,v=>{tit=v;calc()},50);
 function calc(){
  const t2=288*Math.pow(pr,0.2857), t5=tit-(t2-288);
  T=[288,t2,tit,t5>288?t5:288,t5>288?t5:288];
  const p5=pr*Math.pow(Math.max(0.2,T[3]/tit),3.5);
  P=[1,pr,pr*0.95,Math.max(1,p5),1.3];
  for(let i=0;i<5;i++){
   const ph1=Math.max(3,P[i]/45*70), th1=T[i]/1800*70;
   pb[i].setAttribute("height",ph1);pb[i].setAttribute("y",190-ph1);
   tb[i].setAttribute("height",th1);tb[i].setAttribute("y",290-th1);
   pt[i].setAttribute("y",186-ph1);pt[i].textContent=P[i].toFixed(P[i]<10?1:0)+"×";
   tt[i].setAttribute("y",286-th1);tt[i].textContent=Math.round(T[i])+" K";
   bg[i].setAttribute("fill",`rgb(${Math.round(40+T[i]/1800*200)},${Math.round(60+20)},${Math.round(120-T[i]/1800*90)})`);
  }
  say(t5<=288?"Turbine 抽唔夠能量驅動 compressor：要高啲 TIT 或低啲 PR":"Compressor 做功 ↑ → turbine 要抽更多；理想循環數字只作概念（T5＝TIT−Δ compressor）");
 }
 H.loop(()=>{ph+=1.5;parts.forEach((e,i)=>{const u=((ph+i*20)%370)/370;const x=10+u*640;const k=Math.min(4,Math.floor((x-5)/130));const tv=T[k]||288;e.setAttribute("cx",x);e.setAttribute("cy",80+Math.sin(i)*14);e.setAttribute("fill",`rgb(${Math.round(80+tv/1800*170)},${Math.round(160-tv/1800*100)},${Math.round(255-tv/1800*200)})`)})});
}},

// 5. Electrical
{title:"C172SP DC System：Alternator／Battery／Ammeter",hint:"揀 switch，搖 load，睇 ammeter 同 battery 時間",build(box,H){
 const svg=H.svg(box,700,300), say=H.note(box);
 const bat=H.el("rect",{x:50,y:180,width:100,height:60,fill:"#475569",stroke:"#fbbf24","stroke-width":2},svg);X(H,svg,100,215,"Battery 24V","#fff",12);
 const alt=H.el("rect",{x:50,y:40,width:100,height:60,fill:"#475569",stroke:"#34d399","stroke-width":2},svg);X(H,svg,100,75,"Alternator 28V","#fff",12);
 H.el("rect",{x:300,y:100,width:30,height:100,fill:"#cbd5e1"},svg);X(H,svg,315,92,"Bus","#cbd5e1",12);
 H.el("rect",{x:480,y:100,width:120,height:100,fill:"#334155",stroke:"#94a3b8"},svg);X(H,svg,540,155,"Loads","#fff",14);
 const l1=H.el("line",{x1:150,y1:70,x2:300,y2:130,stroke:"#34d399","stroke-width":5,"stroke-dasharray":"10 8"},svg);
 const l2=H.el("line",{x1:150,y1:210,x2:300,y2:170,stroke:"#fbbf24","stroke-width":5,"stroke-dasharray":"10 8"},svg);
 const l3=H.el("line",{x1:330,y1:150,x2:480,y2:150,stroke:"#38bdf8","stroke-width":6,"stroke-dasharray":"10 8"},svg);
 const am=X(H,svg,330,260,"","#fde047",14), lm=X(H,svg,330,282,"","#34d399",13), en=X(H,svg,560,260,"","#fde047",14);
 let load=25,cap=35,master=true,altOn=true,fail=false,off=0,batI=0,altI=0;
 H.slider(box,"Load A",5,60,25,v=>{load=v;calc()});
 H.slider(box,"Battery Ah",10,60,35,v=>{cap=v;calc()});
 const b1=H.button(box,"Master BAT：ON",()=>{master=!master;b1.textContent="Master BAT："+(master?"ON":"OFF");calc()});
 const b2=H.button(box,"ALT switch：ON",()=>{altOn=!altOn;b2.textContent="ALT switch："+(altOn?"ON":"OFF");calc()});
 const b3=H.button(box,"Alternator 故障",()=>{fail=!fail;b3.textContent=fail?"Alternator 已故障（再撳修復）":"Alternator 故障";calc()});
 function calc(){
  const altOK=master&&altOn&&!fail;
  altI=altOK?Math.min(load,50):0;
  batI=master?(altOK?(load>50?-(load-50):Math.min(8,50-load)):-load):0;
  l1.setAttribute("opacity",altI>0?1:.15);l2.setAttribute("opacity",batI!==0?1:.15);
  l2.setAttribute("stroke",batI>0?"#34d399":"#fbbf24");
  am.textContent="Ammeter："+(batI>0?"+":"")+batI.toFixed(0)+" A（"+(batI>0?"battery 充電":(batI<0?"battery 放電":"零"))+"）";
  lm.textContent="Loadmeter：alternator 輸出 "+altI.toFixed(0)+" A / 50 A";
  const dis=batI<0?-batI:0;
  en.textContent=dis>0?"Battery 可撐約 "+(cap/dis*60).toFixed(0)+" min（"+cap+"Ah ÷ "+dis.toFixed(0)+"A，理想）":"";
  say(!master?"Master OFF：全機冇電（mag 照行）":(altOK?"Alternator 供電，剩餘電流充 battery":"Alternator 失效：battery 供電 → 卸載（load shed）、盡快落地"));
 }
 H.loop(()=>{off-=1.5;[l1,l2,l3].forEach(l=>l.setAttribute("stroke-dashoffset",off))});
}},

// 6. Hydraulic Pascal
{title:"Hydraulics：Pascal ＆ Mechanical Advantage",hint:"改力同面積，睇pressure、輸出力同位移",build(box,H){
 const svg=H.svg(box,700,280), say=H.note(box);
 H.el("rect",{x:100,y:100,width:60,height:130,fill:"#334155",stroke:"#94a3b8"},svg);
 H.el("rect",{x:400,y:100,width:160,height:130,fill:"#334155",stroke:"#94a3b8"},svg);
 H.el("rect",{x:100,y:215,width:460,height:15,fill:"#0ea5e9","fill-opacity":.5},svg);
 const p1=H.el("rect",{x:102,width:56,height:14,fill:"#e2e8f0"},svg), p2=H.el("rect",{x:402,width:156,height:14,fill:"#e2e8f0"},svg);
 const a1=H.el("line",{x1:130,x2:130,stroke:"#f87171","stroke-width":5},svg), a2=H.el("line",{x1:480,x2:480,stroke:"#34d399","stroke-width":5},svg);
 const t1=X(H,svg,130,40,"","#f87171",13), t2=X(H,svg,480,40,"","#34d399",13), tp=X(H,svg,330,260,"","#38bdf8",15);
 let F=100,A1=5,A2=50,d1=4;
 H.slider(box,"輸入力 F1 (lb)",10,200,100,v=>{F=v;calc()});
 H.slider(box,"細 piston 面積 A1 (sq in)",1,20,5,v=>{A1=v;calc()});
 H.slider(box,"大 piston 面積 A2 (sq in)",10,100,50,v=>{A2=v;calc()});
 H.slider(box,"推落距離 d1 (in)",1,8,4,v=>{d1=v;calc()});
 function calc(){
  const P=F/A1,F2=P*A2,d2=d1*A1/A2;
  const y1=100+d1*10, y2=100+(8-d2)*10-10+10;
  p1.setAttribute("y",y1);p2.setAttribute("y",Math.max(100,200-d2*10-0));
  a1.setAttribute("y1",y1-45);a1.setAttribute("y2",y1);a2.setAttribute("y1",Math.max(100,200-d2*10)+14);a2.setAttribute("y2",Math.max(100,200-d2*10)+14-Math.min(60,F2/F*12));
  t1.textContent="F1 "+F+" lb";t2.textContent="F2 "+F2.toFixed(0)+" lb";
  tp.textContent="P = F/A = "+P.toFixed(1)+" psi；F2 = P×A2；d2 = d1×A1/A2 = "+d2.toFixed(2)+" in";
  say("力放大 "+(A2/A1).toFixed(1)+" 倍，但位移縮 "+(A2/A1).toFixed(1)+" 倍：Force×distance 守恆（刹車、actuator 原理）");
 }
}},

// 7. Pitot-static blockage
{title:"Pitot／Static 堵塞：ASI、ALT、VSI",hint:"揀堵塞類型，拉altitude變化同speed",build(box,H){
 const svg=H.svg(box,700,300), say=H.note(box);
 X(H,svg,120,28,"ASI","#38bdf8",14);X(H,svg,350,28,"ALT","#38bdf8",14);X(H,svg,580,28,"VSI","#38bdf8",14);
 H.el("path",{d:"M30,180 A90,90 0 0 1 210,180",fill:"none",stroke:"#64748b","stroke-width":3},svg);
 const nd=H.el("line",{x1:120,y1:180,stroke:"#fbbf24","stroke-width":4},svg);
 const asiT=X(H,svg,120,205,"","#e2e8f0",16),asiN=X(H,svg,120,225,"","#94a3b8",11);
 const altT=X(H,svg,350,120,"","#e2e8f0",30),altN=X(H,svg,350,150,"","#94a3b8",12);
 const vsT=X(H,svg,580,120,"","#e2e8f0",28),vsN=X(H,svg,580,150,"","#94a3b8",12);
 const diag=X(H,svg,350,260,"","#fde047",13);
 let sc=0,v0=100,dh=0,vs=0;
 H.slider(box,"真實 IAS kt",60,140,100,v=>{v0=v;calc()});
 H.slider(box,"自堵塞後altitude變化 ft（＋climb／－descent）",-3000,3000,0,v=>{dh=v;calc()},100);
 H.slider(box,"實際 rate of climb fpm",-1000,1000,0,v=>{vs=v;calc()},100);
 ["正常","Pitot ram＋drain 都塞","Pitot ram 塞（drain 通）","Static 塞"].forEach((n,i)=>H.button(box,n,()=>{sc=i;calc()}));
 function calc(){
  const q0=0.5*1.225*Math.pow(v0*0.5144,2);
  let ias=v0,alt=5000+dh,v=vs,msg="正常：三個儀錶都準";
  if(sc==1){const q=q0+3300*dh/1000;ias=Math.sqrt(2*Math.max(0,q)/1.225)/0.5144;msg=dh>0?"Pitot pressure被鎖住，static 隨climbdescent → ASI over-read（像 altimeter）":(dh<0?"descent → ASI under-read":"altitude冇變 → 暫時準")}
  if(sc==2){ias=0;msg="Ram 塞但 drain 通：pitot pressure洩走 → ASI 歸零"}
  if(sc==3){const q=q0-3300*dh/1000;ias=Math.sqrt(2*Math.max(0,q)/1.225)/0.5144;alt=5000;v=0;msg=dh>0?"Static 被鎖住：ALT 凍結、VSI 0；climb ASI under-read":"Static 被鎖住：ALT 凍結、VSI 0；descent ASI over-read（危險）"}
  const f=cl(ias/200,0,1)*Math.PI;
  nd.setAttribute("x2",120-Math.cos(f)*80);nd.setAttribute("y2",180-Math.sin(f)*80);
  asiT.textContent=Math.round(ias)+" kt";asiN.textContent="真實 "+v0+" kt";
  altT.textContent=Math.round(alt)+" ft";altN.textContent="真實 "+(5000+dh)+" ft";
  vsT.textContent=Math.round(v)+" fpm";vsN.textContent="真實 "+vs+" fpm";
  diag.textContent=msg;
  say("C172SP：static 懷疑有問題 → 拉 alternate static（艙內氣），誤差約 4 kt／30 ft");
 }
 calc();
}},

// 8. Gyro precession
{title:"Gyro：Rigidity ＆ Precession",hint:"改力嘅位置、轉速、轉向，睇結果出現喺邊",build(box,H){
 const svg=H.svg(box,700,300), say=H.note(box);
 const cx=300,cy=150,R=85;
 H.el("circle",{cx:cx,cy:cy,r:R,fill:"#1e293b",stroke:"#94a3b8","stroke-width":3},svg);
 const sp=[];for(let i=0;i<6;i++)sp.push(H.el("line",{x1:cx,y1:cy,stroke:"#64748b","stroke-width":3},svg));
 const fm=H.el("circle",{r:12,fill:"#f87171"},svg),fx=X(H,svg,0,0,"×","#fff",16);
 const rm=H.el("circle",{r:12,fill:"#34d399"},svg),rx=X(H,svg,0,0,"●","#0f172a",12);
 X(H,svg,520,60,"紅 ×：施力（推入紙面）","#f87171",13,"start");
 X(H,svg,520,85,"綠 ●：效果出現位置","#34d399",13,"start");
 const bar=H.el("rect",{x:520,y:140,height:14,fill:"#fbbf24"},svg);
 X(H,svg,520,130,"傾斜speed（越細越穩 = rigidity）","#cbd5e1",11,"start");
 const res=X(H,svg,520,190,"","#e2e8f0",13,"start");
 let fa=0,spin=50,dir=1,ph=0;
 H.slider(box,"施力位置（°，0＝頂部，順時針）",0,359,0,v=>{fa=v;upd()},15);
 H.slider(box,"轉速",10,100,50,v=>{spin=v;upd()},5);
 H.button(box,"反轉轉向",()=>{dir=-dir;upd()});
 function pos(a){const r=a*Math.PI/180;return[cx+Math.sin(r)*R,cy-Math.cos(r)*R]}
 function upd(){
  const a=pos(fa),b=pos(fa+90*dir);
  fm.setAttribute("cx",a[0]);fm.setAttribute("cy",a[1]);fx.setAttribute("x",a[0]);fx.setAttribute("y",a[1]+5);
  rm.setAttribute("cx",b[0]);rm.setAttribute("cy",b[1]);rx.setAttribute("x",b[0]);rx.setAttribute("y",b[1]+4);
  bar.setAttribute("width",Math.max(5,8000/spin/ 1.5));
  res.textContent="轉向 "+(dir>0?"順時針":"逆時針")+"：效果喺力之後 90°";
  say("Precession：力喺 rotor 邊緣施加，效果喺轉向方向 90° 後出現；轉越快 → rigidity 越大 → 傾斜越慢");
 }
 H.loop(()=>{ph+=spin*0.05*dir;sp.forEach((l,i)=>{const r=(ph+i*60)*Math.PI/180;l.setAttribute("x2",cx+Math.cos(r)*R);l.setAttribute("y2",cy+Math.sin(r)*R)})});
}},
];

Cadet.add({
  key:"agk", name:"Aircraft General Knowledge", emoji:"⚙️", color:"#34d399",
  src:"Airspace AGK01–11 · ENZO C172SP/DA40/Lycoming/Hartzell/FCOM · Robson BAK ch4",
  topics:topics, links:links, cards:cards,
  anims:A
});
})();
