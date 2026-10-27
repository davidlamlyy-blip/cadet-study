var _pofC=function(t,e,q,a,zh,st){return {e:e,q:q,a:a,zh:zh,topic:t,st:st||"ok"}};
Cadet.add({
  key:"pof", name:"Principles of Flight", emoji:"🛩️", color:"#38bdf8",
  src:"Areodynamics Lectures 1-21 · Airspace POF02/03/05 · PHAK ch4-6 · RPL BAK · ATP Test Prep ch3 · ENZO briefings",
  topics:[
  // ===== Air & Atmosphere
  {id:"pof.atmos",g:"Air & Atmosphere",t:"Atmosphere & ISA",d:"空氣有質量、weight、density；ISA 係標準參考大氣。",pts:["78% N₂, 21% O₂, 1% others","ISA sea level: 15°C, 1013.25 hPa","Density 隨altitudedescent","Temp/humidity ↑ → density ↓"],rel:["pof.densalt","pof.liftformula"],src:"PHAK ch4; RPL ch1 & ch6"},
  {id:"pof.viscosity",g:"Air & Atmosphere",t:"Viscosity & Friction",d:"空氣係 fluid，有 viscosity；貼面空氣被 friction 拖慢。",pts:["Air = fluid, low viscosity","Surface 微觀上都粗糙","→ Boundary layer","→ Skin friction drag"],rel:["pof.bl","pof.parasite"],src:"PHAK ch4"},
  {id:"pof.densalt",g:"Air & Atmosphere",t:"Density Altitude",d:"熱、高、濕 → 空氣疏 → 性能差。",pts:["DA = pressure alt 按非 ISA temperature修正","Hot, high, humid = high DA","Lift, thrust, prop 效率都降","Takeoff roll 同 climb 變差","同一 IAS → TAS 更大"],rel:["pof.liftformula","pof.perf"],src:"PHAK ch4"},
  {id:"pof.speeds",g:"Air & Atmosphere",t:"IAS, TAS & Mach",d:"IAS 反映 dynamic pressure；高空同一 IAS 要更大 TAS。",pts:["IAS ∝ √dynamic pressure","TAS = IAS 按 density 修正","Mach = TAS ÷ speed of sound","Stall IAS 唔隨altitude變"],rel:["pof.stallfactors","pof.machnum"],src:"ATP ch3; RPL ch6"},
  // ===== Lift Generation
  {id:"pof.fourforces",g:"Lift Generation",t:"Four Forces",d:"Lift, Weight, Thrust, Drag；勻速直線飛行時成對平衡。",pts:["Lift ⟂ relative wind","Thrust/Drag ∥ relative wind","Weight 指向地心","Lift 唔一定垂直向上","S&L: L = W, T = D"],rel:["pof.liftformula","pof.drag","pof.climb"],src:"PHAK ch5; ATP ch3"},
  {id:"pof.aoa",g:"Lift Generation",t:"Angle of Attack",d:"AoA = chord line 同 relative wind 夾角，唔係nose指向。",pts:["Attitude ≠ flightpath ≠ AoA","Relative wind 與 flightpath 相反","Stall 同 AoA 有關，唔同speed","Critical AoA ≈ 16–20°","細機多數冇 AoA indicator"],rel:["pof.stall","pof.clcurve"],src:"PHAK ch5; RPL ch6"},
  {id:"pof.liftformula",g:"Lift Generation",t:"Lift Formula",d:"L = CL · ½ρV² · S；speed影響最大（平方）。",pts:["CL: AoA, camber, flap","ρ: air density","V 加倍 → lift ×4","S: wing area","Pilot: Lift = AoA × IAS"],rel:["pof.stallfactors","pof.clcurve","pof.densalt"],src:"ENZO 06 Stalling; RPL ch6; ATP ch3"},
  {id:"pof.bernoulli",g:"Lift Generation",t:"Bernoulli's Principle",d:"流速快 → static pressure低；翼上面流速高所以pressure低。",pts:["Total P = static + dynamic","Venturi 窄位流速高、壓低","上翼面 suction ≈ ⅔ lift","只係『footprint』，唔係完整 why","沿 streamline、inviscid 先成立"],rel:["pof.newton","pof.u.bernlaplace"],src:"PHAK ch4; RPL ch6; Lecture 8"},
  {id:"pof.newton",g:"Lift Generation",t:"Newton & Downwash",d:"Wing 將空氣向下偏轉 (downwash)，reaction 就係 lift。",pts:["Momentum：空氣向下 → 機向上","Newton's 3rd law","Bernoulli 同 Newton 講同一件事","Coandă：airflow貼面","Kutta condition：後緣平順離開"],rel:["pof.bernoulli","pof.u.liftcause"],src:"PHAK ch4; Lecture 13a"},
  {id:"pof.liftmyth",g:"Lift Generation",t:"Lift Misconceptions",d:"『Equal transit time』係錯：上下airflow唔會同時到後緣。",pts:["Equal transit time ✗","『空氣彈走』✗","每個講法只講到一部分","真正：mass/momentum/energy 守恆","Pressure 同 flow turning 同時成立"],rel:["pof.bernoulli","pof.newton"],src:"Lecture 13a"},
  {id:"pof.clcurve",g:"Lift Generation",t:"CL–α Curve",d:"CL 隨 AoA 線性升到 CLmax，之後跌 = stall。",pts:["Thin airfoil: slope ≈ 2π /rad","CLmax @ critical AoA","Camber/flap → 曲線上移","Cambered: α₀ 為負","Symmetric: CL = 0 @ α = 0"],rel:["pof.stall","pof.u.thin","pof.flaps"],src:"RPL ch6; Lecture 12; ENZO 06"},
  {id:"pof.cp",g:"Lift Generation",t:"Centre of Pressure",d:"CP = 總空氣動力作用點；AoA ↑ CP 前移，stall 後 CP 後移。",pts:["Total reaction through CP","AoA ↑ → CP 前移","Stall → CP 後移 → nose drops","Transonic: CP 後移 → Mach tuck","Cm 約 quarter-chord (thin airfoil)"],rel:["pof.stall","pof.machtuck","pof.longstab"],src:"RPL ch6; PHAK ch5; Lecture 12 p9"},
  // ===== Airfoil & Wing
  {id:"pof.airfoil",g:"Airfoil & Wing",t:"Airfoil Terminology",d:"Chord、camber、thickness、LE/TE 係基本名詞。",pts:["Chord line: LE → TE 直線","Mean camber line: 上下面中線","t/c 同 LE radius","Max camber 約 30% chord","NACA 4412: 4% camber, 12% thick"],rel:["pof.camber","pof.clcurve"],src:"PHAK ch4; RPL ch6; Lecture 13 & 14"},
  {id:"pof.camber",g:"Airfoil & Wing",t:"Camber & Airfoil Types",d:"Cambered 高 lift 適合低速；symmetric 用喺 tail；laminar foil 低 drag。",pts:["Positive camber = 高 CL","Symmetric: α=0 時 lift=0","Tailplane 可有 negative camber","Laminar-flow foil: 最厚點靠後","薄 foil → LE stall；厚 → TE stall"],rel:["pof.airfoil","pof.flaps","pof.u.dragsep"],src:"RPL ch6; Lecture 13 & 14"},
  {id:"pof.aspect",g:"Airfoil & Wing",t:"Aspect Ratio",d:"AR = span² ÷ area；AR 高 → induced drag 低。",pts:["AR = b²/S","High AR: glider","Low AR: fighter, delta","CDi = CL²/(π·e·AR)","代價：結構重"],rel:["pof.induced","pof.u.lifting"],src:"Lecture 16; PHAK ch5"},
  {id:"pof.planform",g:"Airfoil & Wing",t:"Wing Planform",d:"Rectangular / tapered / elliptical / swept / delta 各有取捨。",pts:["Elliptical: min induced drag","Tapered: 近 elliptical、較輕","Rectangular: 簡單、root 先 stall","Swept: 高 Mcrit、tip stall","Delta: 超speed of sound、低 AR"],rel:["pof.induced","pof.sweep","pof.washout"],src:"PHAK ch5; RPL ch6; Lecture 13/16"},
  {id:"pof.wingcfg",g:"Airfoil & Wing",t:"Wing Configuration",d:"高/低翼、dihedral、sweep 影響穩定、效率、視野。",pts:["High wing: pendulum 穩定","Low wing: ground effect 較強","Dihedral: roll 穩定","Anhedral: 較靈活較唔穩","Biplane vs monoplane"],rel:["pof.latstab","pof.groundeffect"],src:"Lecture 13"},
  {id:"pof.washout",g:"Airfoil & Wing",t:"Washout & Stall Strips",d:"令wing root先 stall，保住wingtip aileron 控制。",pts:["Washout: tip 角度細過 root","Stall strip: root 前緣細楔","DA40 有 stall strip","Root 先 stall → aileron 仍有效","Nose drops 易 recover"],rel:["pof.stall","pof.aileron"],src:"POF02; PHAK ch5; RPL ch6"},
  // ===== Drag
  {id:"pof.drag",g:"Drag",t:"Drag Overview",d:"Drag 分 parasite 同 induced 兩大類。",pts:["Parasite: form+skin+interference","Induced: 因 lift 而生","Total = parasite + induced","Parasite ∝ V²","Induced ∝ 1/V²"],rel:["pof.parasite","pof.induced","pof.dragcurve"],src:"PHAK ch5; RPL ch6"},
  {id:"pof.parasite",g:"Drag",t:"Parasite Drag",d:"同 lift 無關：form、skin friction、interference。",pts:["Form: 形狀/frontal area","Skin friction: 表面粗糙度","Interference: wing root 交界","Fairings 減 interference","speed加倍 → ×4"],rel:["pof.bl","pof.drag"],src:"PHAK ch5; RPL ch6"},
  {id:"pof.induced",g:"Drag",t:"Induced Drag",d:"Lift 嘅副產品：downwash 令 lift vector 向後傾。",pts:["Tip vortices → downwash","Effective AoA ↓, lift 後傾","低速高 AoA 最大","weight ↑ → induced ↑","減：high AR, winglet"],rel:["pof.vortices","pof.aspect","pof.u.finite"],src:"PHAK ch5; RPL ch6; Lecture 15"},
  {id:"pof.vortices",g:"Drag",t:"Wingtip Vortices",d:"高壓翼下漏去低壓翼上；旋轉方向固定。",pts:["Tip: 下面 → 上面漏","由後面睇：右翼 CCW、左翼 CW","重、慢、clean 最強","Winglet/fence 減弱","Wake turbulence 來源"],rel:["pof.wake","pof.induced"],src:"PHAK ch5; RPL ch6"},
  {id:"pof.winglet",g:"Drag",t:"Winglets & Tip Devices",d:"Winglet / wing fence 減 tip 漏氣 → 降 induced drag。",pts:["阻擋 spanwise leakage","Vortex 變弱","高 CL 時效益大","另一方法：加 AR","Wingtip tank 亦改 tip flow"],rel:["pof.vortices","pof.aspect"],src:"RPL ch6; Lecture 15"},
  {id:"pof.bl",g:"Drag",t:"Boundary Layer",d:"貼面薄層空氣；laminar 摩擦低，turbulent 摩擦高但抗 separation。",pts:["Laminar → transition → turbulent","Turbulent: skin friction 較高","Turbulent 較難 separate","Adverse pressure gradient → separation","Separation = stall / form drag"],rel:["pof.viscosity","pof.stall","pof.u.dragsep"],src:"PHAK ch5; RPL ch6; Lecture 14"},
  {id:"pof.dragcurve",g:"Drag",t:"Drag vs Airspeed",d:"Total drag 曲線有最低點 = minimum drag speed ≈ best L/D。",pts:["慢：induced 主導","快：parasite 主導","Min drag @ L/DMAX","約 4° AoA (light a/c)","Weight ↑ → induced ↑"],rel:["pof.ld","pof.induced","pof.parasite"],src:"PHAK ch5; RPL ch6; ATP ch3"},
  {id:"pof.ld",g:"Drag",t:"Lift/Drag Ratio",d:"L/D 越高越有效率；L/DMAX 即最佳滑翔 AoA。",pts:["L/D = CL/CD","L/DMAX = min total drag","Glide ratio = L/D (still air)","Best glide speed = L/DMAX speed","weight唔改 ratio，只改speed"],rel:["pof.dragcurve","pof.glide"],src:"PHAK ch5; ENZO 04"},
  // ===== Stall & Spin
  {id:"pof.stall",g:"Stall & Spin",t:"Stall",d:"AoA 超 critical → flow separation → lift 驟跌、drag 升。",pts:["任何 attitude、任何speed","Wing 未完全冇 lift，只係唔夠","Critical AoA 固定","Nose drops：CP 喺 CG 後","Recover = 減 AoA"],rel:["pof.aoa","pof.clcurve","pof.stallrec"],src:"PHAK ch5; RPL ch6; ENZO 06"},
  {id:"pof.stallsym",g:"Stall & Spin",t:"Stall Warning & Symptoms",d:"IAS 低/減、nose高、控制軟、buffet、warning horn。",pts:["Low & decreasing IAS","High nose attitude","Sloppy controls, 機艙靜","Buffet; horn 高過 stall 5–10 kt","Full stall: sink, nose/wing drop"],rel:["pof.stall","pof.ctrleff"],src:"ENZO 06; RPL ch6"},
  {id:"pof.stallfactors",g:"Stall & Spin",t:"Factors Affecting Stall Speed",d:"Stall AoA 唔變，stall speed 會變。",pts:["Weight ↑ → Vs ↑","Flap down → Vs ↓","Power on → Vs ↓","Load factor n → Vs × √n","Ice/frost/dirt → Vs ↑"],rel:["pof.loadfactor","pof.liftformula","pof.flaps","pof.icing"],src:"ENZO 06; RPL ch6; PHAK ch5"},
  {id:"pof.stallrec",g:"Stall & Spin",t:"Stall Recovery",d:"先減 AoA，再 power、balance、climb。",pts:["Control column 向前 (unstall)","Full power 同時降nose","Rudder 止 yaw / wing drop","Unstall 後先用 aileron 水平","Incipient：warning 就 recover"],rel:["pof.stall","pof.advstall"],src:"ENZO 06; RPL ch6"},
  {id:"pof.accstall",g:"Stall & Spin",t:"Accelerated Stall",d:"任何speed都可 stall；load factor ↑ → stall speed ↑。",pts:["Steep turn / pull-up / gust","Vs_new = Vs × √n","60° bank: n=2, Vs ×1.41","Dive pull-up：AoA 突然升","高過 VA → 結構風險"],rel:["pof.loadfactor","pof.turnforces","pof.va"],src:"PHAK ch5; POF03; ENZO 06"},
  {id:"pof.advstall",g:"Stall & Spin",t:"Advanced Stalls",d:"Climbing-turn（wing-drop）stall 同 approach stall。",pts:["Climbing turn stall → wing drop","Approach stall：flap down, idle","用 rudder，唔用 aileron 抬翼","HASELL 前、HELL 後","學校：3000 ft AGL 前 recover"],rel:["pof.stallrec","pof.spin"],src:"ENZO Study Guide 23"},
  {id:"pof.spin",g:"Stall & Spin",t:"Spin",d:"Stalled + yaw → autorotation；一翼更深 stall，spindescent。",pts:["要 stall 加 yaw/roll","IAS 低而穩、ROD 高","下沉翼更 stalled","入口：stall 時 yaw","拉桿只會更差"],rel:["pof.stall","pof.spinrec","pof.spiral"],src:"RPL ch6; POF03; PHAK ch5"},
  {id:"pof.spinrec",g:"Stall & Spin",t:"Spin Recovery",d:"Power idle、aileron neutral、opposite rudder、nose forward。",pts:["Power idle","Ailerons neutral","Full opposite rudder","Control column 向前至停轉","Wings level, ease out of dive"],rel:["pof.spin"],src:"POF03; RPL ch6",check:true},
  {id:"pof.spiral",g:"Stall & Spin",t:"Spiral Dive vs Spin",d:"Spiral：未 stall、speed升；Spin：stall、speed低。",pts:["Spiral: IAS 升、g 升","Spin: IAS 低、wings stalled","Spiral 復原：idle, 水平翼, ease out","拉桿 → 收緊 spiral","夜間/IMC 要提防"],rel:["pof.spin","pof.spiralinst"],src:"POF03; PHAK ch5"},
  {id:"pof.icing",g:"Stall & Spin",t:"Ice & Contamination",d:"Ice/frost/dirt 令 BL 早 separate：Vs ↑、lift ↓。",pts:["PHAK: 0.8 mm ice → lift −25%","Weight ↑","Stall AoA 變低","Frost 都危險","污染wing唔好take-off"],rel:["pof.stallfactors","pof.bl"],src:"PHAK ch5; RPL ch6"},
  // ===== Flight Controls
  {id:"pof.axes",g:"Flight Controls",t:"Axes & Moments",d:"三軸過 CG：roll=longitudinal, pitch=lateral, yaw=normal。",pts:["Longitudinal → Roll (aileron)","Lateral → Pitch (elevator)","Normal/vertical → Yaw (rudder)","全部圍繞 CG","Moment = force × arm"],rel:["pof.aileron","pof.elevator","pof.rudder"],src:"ENZO 02; PHAK ch5; RPL ch6"},
  {id:"pof.aileron",g:"Flight Controls",t:"Ailerons",d:"Primary effect roll；secondary adverse yaw。",pts:["Down aileron: lift ↑ drag ↑","Up aileron: lift ↓","Roll rate 隨 stick 動作","Secondary: adverse yaw","Tertiary: spiral dive"],rel:["pof.advyaw","pof.axes"],src:"ENZO 02; POF02; PHAK ch6"},
  {id:"pof.advyaw",g:"Flight Controls",t:"Adverse Yaw",d:"Down-going aileron drag 大 → nose yaw 向turn相反方向。",pts:["Down aileron: induced drag ↑","Nose 向反方向","Cure: coordinated rudder","Differential ailerons","Frise ailerons"],rel:["pof.aileron","pof.rudder","pof.turncoord","pof.ailerontypes"],src:"ENZO 02 & 05; POF03; PHAK ch6"},
  {id:"pof.ailerontypes",g:"Flight Controls",t:"Aileron Designs",d:"Differential、Frise、coupled、flaperon 用來減 adverse yaw。",pts:["Differential: up > down 偏轉","Frise: up aileron 鼻突出增 drag","Coupled ailerons+rudder","Flaperon: aileron+flap","DA40: differential + Frise"],rel:["pof.advyaw"],src:"POF03; ENZO 02; PHAK ch6"},
  {id:"pof.elevator",g:"Flight Controls",t:"Elevator & Pitch",d:"Elevator 控制 pitch；改 pitch → AoA、speed、altitude都變。",pts:["Back stick → nose up","Primary: pitch (lateral axis)","Tertiary: altitude & speed","Tail downforce 平衡 wing","Slipstream 令更有力"],rel:["pof.longstab","pof.trim"],src:"ENZO 02; PHAK ch6"},
  {id:"pof.rudder",g:"Flight Controls",t:"Rudder & Yaw",d:"Rudder 控制 yaw；secondary effect roll（外翼快）。",pts:["Primary: yaw (normal axis)","Secondary: roll","唔係turn嘅力","抵消 adverse yaw","Slipstream 令更有力"],rel:["pof.advyaw","pof.turncoord"],src:"ENZO 02; PHAK ch5"},
  {id:"pof.ctrleff",g:"Flight Controls",t:"Control Effectiveness",d:"speed越高、slipstream 越強，舵面越有效。",pts:["IAS ↑ → 更有效","Slipstream: rudder & elevator，唔係 aileron","近 stall：控制軟","高速：細動作","Tail 設計上唔先 stall"],rel:["pof.stallsym","pof.rudder"],src:"ENZO 02; RPL ch6"},
  {id:"pof.tail",g:"Flight Controls",t:"Tail Configurations",d:"Conventional、T-tail、stabilator、canard、V-tail。",pts:["T-tail: 避開 wing wake","Stabilator: 整塊 pivot","Canard: 前翼都出 lift","V-tail: ruddervator","T-tail 要留意高 AoA airflow"],rel:["pof.elevator","pof.trimstab"],src:"PHAK ch6",check:true},
  {id:"pof.spoilers",g:"Flight Controls",t:"Spoilers & Speedbrakes",d:"Spoilers 減 lift 加 drag；單邊 roll，雙邊 speedbrake。",pts:["Flight spoiler: roll + speedbrake","Ground spoiler: 着陸 dump lift","配合 aileron","增加 sink rate","同 high-lift device 相反"],rel:["pof.aileron","pof.hydraulic"],src:"ATP ch3; PHAK ch6"},
  {id:"pof.hydraulic",g:"Flight Controls",t:"Powered Controls",d:"Jet 氣動力大，用 hydraulic actuator；有 manual reversion。",pts:["Hydraulic actuator 推舵面","Inboard aileron 全程用","Outboard aileron 只喺 flap 放出","Control tab 於 manual reversion","Aileron/spoiler mix 隨speed變"],rel:["pof.spoilers","pof.tabs"],src:"ATP ch3; PHAK ch6"},
  // ===== High-Lift & Trim
  {id:"pof.flaps",g:"High-Lift & Trim",t:"Flaps",d:"加 camber/面積：CLmax ↑、Vs ↓，但 drag ↑、stall AoA ↓。",pts:["TO flap: lift > drag","LDG flap: drag 大 → 較斜approach","放 flap nose balloon/向前 pitch","DA40: TO≤108, LDG≤91 KIAS","Raise flap 要有 positive climb"],rel:["pof.stallfactors","pof.flaptypes","pof.clcurve"],src:"POF02; ENZO 02; PHAK ch6"},
  {id:"pof.flaptypes",g:"High-Lift & Trim",t:"Flap Types",d:"Plain、split、slotted、Fowler；Fowler 加面積加 camber。",pts:["Plain: 只有 hinge","Split: 只下表面","Slotted: airflow經縫","Fowler: 後滑 + 加面積","Triple-slotted Fowler (airliner)"],rel:["pof.flaps","pof.slats"],src:"POF02; PHAK ch6"},
  {id:"pof.slats",g:"High-Lift & Trim",t:"Slats, Slots & LE Devices",d:"前緣 device 延遲 separation，令 stall AoA 升高。",pts:["Slat: 縫令高能量airflow過上面","Krueger flap: 伸出加 camber","Fixed slot / LE cuff","sweepback翼 jet 常用","CLmax ↑ → 起降speed ↓"],rel:["pof.flaps","pof.sweep"],src:"ATP ch3; PHAK ch6; POF02"},
  {id:"pof.trim",g:"High-Lift & Trim",t:"Trim Tabs",d:"Trim 消除 control force，令舵面自己保持位置。",pts:["Tab 動向同舵面相反","Relieves stick pressure","配合 attitude & speed 設定","Nose-up trim → tab 向下","Stabilator: anti-servo/adjustable"],rel:["pof.elevator","pof.tabs"],src:"PHAK ch6; ENZO 02"},
  {id:"pof.tabs",g:"High-Lift & Trim",t:"Servo, Balance & Anti-servo Tabs",d:"Tab 幫手移舵面或增減 control force。",pts:["Servo: airflow推舵面","Balance: 反向 → 減輕力","Anti-servo: 同向 → 加重","Control tab: manual reversion","Ground-adjustable tab"],rel:["pof.trim","pof.hydraulic"],src:"ATP ch3; PHAK ch6"},
  // ===== Stability
  {id:"pof.stability",g:"Stability",t:"Static & Dynamic Stability",d:"Static = 初步反應；Dynamic = 隨時間嘅振盪。",pts:["Positive static: 返回平衡","Neutral: 停喺新位置","Negative: 發散","Dynamic +: 振盪縮細","Dynamic −: 振盪放大"],rel:["pof.longstab","pof.stabcontrol"],src:"PHAK ch5; ATP ch3"},
  {id:"pof.stabcontrol",g:"Stability",t:"Stability vs Control",d:"越穩定越難操縱；戰機故意放寬穩定換機動性。",pts:["多穩定 → 少機動","Airliner: 穩定","Fighter: relaxed stability + FBW","太少穩定 → workload ↑","CG 位置調節"],rel:["pof.stability","pof.cg"],src:"RPL ch1",check:true},
  {id:"pof.longstab",g:"Stability",t:"Longitudinal Stability",d:"Pitch 穩定：tail 提供恢復力矩；CG 喺 neutral point 前。",pts:["Horizontal stabiliser = 主要來源","CG 在 neutral point 前面","Tail download 平衡 nose-heavy wing","speed ↑ → tail download ↑","Power/thrust line 影響 pitch"],rel:["pof.cg","pof.elevator","pof.cp"],src:"PHAK ch5; ATP ch3"},
  {id:"pof.cg",g:"Stability",t:"CG Location",d:"CG 前移更穩定；後移較唔穩但 cruise 快、Vs 略低。",pts:["Forward CG: 穩定、tail load 大","Aft CG: 不穩、Vs 略低","Aft CG: cruise 快 (trim drag ↓)","超後限：stall 或 recover 唔到","前限：flare elevator 未必夠"],rel:["pof.longstab","pof.stall"],src:"PHAK ch5; ATP ch3"},
  {id:"pof.latstab",g:"Stability",t:"Lateral Stability (Roll)",d:"Dihedral、sweep、翼位置令wing自動返水平。",pts:["Dihedral: 低翼 AoA ↑","Sweepback 有 dihedral effect","High wing: keel effect","Sideslip → 恢復 roll","太強 → Dutch roll"],rel:["pof.wingcfg","pof.dutch"],src:"PHAK ch5"},
  {id:"pof.dirstab",g:"Stability",t:"Directional Stability (Yaw)",d:"Fin 令nose自動朝 relative wind（weathercock）。",pts:["Vertical fin = 主要來源","Sideslip → fin 出 lift → nose回正","後fuselage keel surface 都有份","太強 vs dihedral → spiral instability","Weathercocking 同原理"],rel:["pof.weathercock","pof.spiralinst","pof.dutch"],src:"PHAK ch5; RPL ch1"},
  {id:"pof.dutch",g:"Stability",t:"Dutch Roll",d:"Roll + yaw 耦合振盪，nose畫 figure-8。",pts:["Dir. 穩定強、lateral 弱","Roll/yaw 相位差","sweepback翼 jet 常見","Yaw damper 處理","輕機通常幾下就收"],rel:["pof.latstab","pof.dirstab","pof.hsctrl"],src:"PHAK ch5"},
  {id:"pof.spiralinst",g:"Stability",t:"Spiral Instability",d:"directional stability強、dihedral 弱 → bank 越來越斜、慢慢spindescent。",pts:["Fin 強、dihedral 弱","外翼較快 → overbank","nose跌、speed升","所以唔可以 hands-off","唔好拉桿：收緊 spiral"],rel:["pof.spiral","pof.dirstab"],src:"PHAK ch5"},
  // ===== Turning & Load Factor
  {id:"pof.turnforces",g:"Turning & Load Factor",t:"Forces in a Turn",d:"Lift 傾斜：垂直分力托 weight，水平分力 = centripetal force。",pts:["Bank → lift vector 傾斜","垂直分力 = W (要加 AoA)","水平分力令機turn","Centrifugal = reaction","Rudder 唔係turn力"],rel:["pof.loadfactor","pof.rot","pof.turncoord"],src:"POF03; PHAK ch5; ENZO 05"},
  {id:"pof.turncoord",g:"Turning & Load Factor",t:"Balanced Turn: Slip & Skid",d:"Ball 喺中間 = balanced；偏內 slip，偏外 skid。",pts:["Ball 偏內: slipping","Ball 偏外: skidding","Slip: bank 多過 ROT 所需","Skid: ROT 多過 bank 所需","『Step on the ball』"],rel:["pof.advyaw","pof.rudder"],src:"POF03; ENZO 05; PHAK ch5"},
  {id:"pof.rot",g:"Turning & Load Factor",t:"Rate & Radius of Turn",d:"Rate 1 = 3°/s；bank ↑ 或 TAS ↓ → radius ↓。",pts:["Rate 1 = 360° 喺 2 min","AoB ≈ TAS/10 + 7 (rule of thumb)","同 bank：TAS ↑ → radius ↑","同 TAS：bank ↑ → radius ↓","747 vs DA40：747 radius 大"],rel:["pof.turnforces"],src:"POF03; ENZO 05; PHAK ch5"},
  {id:"pof.loadfactor",g:"Turning & Load Factor",t:"Load Factor (n)",d:"n = Lift ÷ Weight；level turn 只由 bank 決定：n = 1/cos φ。",pts:["S&L: n = 1","30° → 1.15; 45° → 1.41","60° → 2.0 g","75° → 3.9; 80° → 5.76","同speed、weight 無關"],rel:["pof.stallfactors","pof.accstall","pof.vg"],src:"POF03; PHAK ch5; ATP ch3"},
  {id:"pof.overbank",g:"Turning & Load Factor",t:"Overbanking & Underbanking",d:"外翼行得遠、較快 → overbank；climbing turn 更甚。",pts:["外翼較快 → lift ↑","Level turn: aileron 略向外","Climbing turn: 外翼 AoA ↑ → 更多","Descending turn: 內翼 AoA ↑ → underbank","ENZO：descent 兩者大致抵消"],rel:["pof.turnforces","pof.aileron"],src:"POF03; ENZO 05",check:true},
  {id:"pof.va",g:"Turning & Load Factor",t:"Maneuvering Speed VA",d:"VA 以下單一舵面全偏轉一次，先 stall 後load factor。",pts:["低過 VA：先 stall 再超 limit","舊輕機約 1.7 × Vs","weight輕 → VA 降","唔保護多軸/反覆輸入","turbulent flow減至 VA"],rel:["pof.vg","pof.limitload","pof.accstall"],src:"PHAK ch5; RPL ch6"},
  {id:"pof.vg",g:"Turning & Load Factor",t:"V-g Diagram",d:"Flight envelope：speed vs load factor；左邊 stall 限，右邊結構限。",pts:["左曲線：stall 限 g","Corner = VA","Normal: +3.8 / −1.52 g","右邊：VNE","包絡外 = 結構損壞"],rel:["pof.va","pof.loadfactor","pof.limitload"],src:"PHAK ch5; RPL ch6"},
  {id:"pof.limitload",g:"Turning & Load Factor",t:"Limit vs Ultimate Load",d:"Limit load 開始永久變形；ultimate = limit × 1.5。",pts:["Normal +3.8, utility +4.4, acro +6.0","Safety factor 1.5","超 limit → 永久變形","Gust：減速","懷疑load factor要 report"],rel:["pof.vg","pof.va"],src:"PHAK ch5; RPL ch6"},
  // ===== Climb & Performance
  {id:"pof.climb",g:"Climb & Performance",t:"Forces in Climb & Descent",d:"Climb 靠 excess thrust；weight 有 rearward component。",pts:["T > D in climb","Steady climb: L 略 < W","Weight 後向分力","Descent：前向分力","Power + Attitude = Performance"],rel:["pof.fourforces","pof.vxvy"],src:"ENZO 04; PHAK ch5"},
  {id:"pof.vxvy",g:"Climb & Performance",t:"Vx & Vy",d:"Vx = 最大 angle（excess thrust）；Vy = 最大 rate（excess power）。",pts:["Vx：越障","Vy：最短時間climb","DA40 Vx 67 / Vy 76 KIAS","C172SP Vx 62 / Vy 74 KIAS","Vx < Vy"],rel:["pof.climb","pof.powercurve"],src:"ENZO 04"},
  {id:"pof.powercurve",g:"Climb & Performance",t:"Power Curve & Back of Power",d:"慢過 min-power speed，減速反而要更多 power。",pts:["Min power ≈ best endurance","低過佢 → power req ↑","Region of reverse command","Min drag ≈ best range / glide","近 landing flare 區"],rel:["pof.dragcurve","pof.vxvy"],src:"ENZO 04 revision; 一般航空知識",check:true},
  {id:"pof.glide",g:"Climb & Performance",t:"Glide Performance",d:"Best glide speed = L/DMAX speed；headwind 縮短距離。",pts:["Glide angle = 1/(L/D)","weight：ratio 同，speed快啲","Headwind：distance ↓","Flap down：ratio ↓","停頓 prop：drag ↑"],rel:["pof.ld","pof.dragcurve"],src:"ENZO 04; PHAK ch5"},
  {id:"pof.perf",g:"Climb & Performance",t:"Weight, Density & Wind Effects",d:"重、高 DA、flap 放出都令 climb 差。",pts:["Weight ↑: climb ↓, Vs ↑","High DA: power/thrust ↓","同 IAS → TAS ↑","Headwind: 地面 climb angle 較斜","Flap：drag ↑"],rel:["pof.densalt","pof.vxvy"],src:"ENZO 04"},
  // ===== Left-Turning Tendencies
  {id:"pof.ltt",g:"Left-Turning Tendencies",t:"Left-Turning Tendencies",d:"Prop 順時針（駕駛位睇）嘅機有四個令nose向左嘅效應。",pts:["Torque reaction","Corkscrew slipstream","Gyroscopic precession","P-factor","高 power 低速最明顯 → rudder"],rel:["pof.torque","pof.pfactor","pof.gyro","pof.corkscrew"],src:"PHAK ch5; POF03"},
  {id:"pof.torque",g:"Left-Turning Tendencies",t:"Torque Reaction",d:"Prop 順時針轉 → fuselage逆時針反作用 → roll 左。",pts:["Newton's 3rd law","空中：roll 向左","地面：左輪pressure大 → 偏左","高 power 低速最強","Offset engine / aileron trim"],rel:["pof.ltt"],src:"PHAK ch5"},
  {id:"pof.pfactor",g:"Left-Turning Tendencies",t:"P-Factor (Asymmetric Thrust)",d:"高 AoA 時下行 blade 咬位大 → thrust 中心偏右 → yaw 左。",pts:["Prop disc 對 airflow 傾斜先有","高nose、低速、高 power","下行(右)blade thrust 大","Thrust centre 移右","加右 rudder"],rel:["pof.ltt","pof.critengine"],src:"POF03; PHAK ch5"},
  {id:"pof.gyro",g:"Left-Turning Tendencies",t:"Gyroscopic Precession",d:"Prop 係 gyro；力喺旋轉方向 90° 後生效。",pts:["Rigidity & precession","力 → 90° ahead of rotation","Tail up → 力喺頂 → yaw 左","Pitch ↔ Yaw 互相耦合","Tailwheel a/c 最明顯"],rel:["pof.ltt"],src:"POF03; PHAK ch5"},
  {id:"pof.corkscrew",g:"Left-Turning Tendencies",t:"Corkscrew Slipstream",d:"spin形 slipstream 打 fin → yaw 左（順時針 prop）。",pts:["Slipstream spin形","打 vertical fin 側面","低速高 power spin密 → 強","speed ↑ spin拉長 → 弱","亦產生 rolling moment"],rel:["pof.ltt","pof.ctrleff"],src:"PHAK ch5"},
  {id:"pof.weathercock",g:"Left-Turning Tendencies",t:"Weathercocking",d:"Crosswind 令nose轉向風來嘅方向（fin 效應）。",pts:["Fin 似 weathervane","左 crosswind → nose向左","take-off滑跑同空中都有","輕機/tailwheel 較明顯","Rudder / crab 處理"],rel:["pof.dirstab"],src:"POF03"},
  {id:"pof.critengine",g:"Left-Turning Tendencies",t:"Critical Engine (Twin)",d:"P-factor 令一邊 engine fail 影響較大 = critical engine。",pts:["順時針 prop：左 engine critical","失效側 thrust line 靠近中線","VMC = 最低控制speed","VMC 隨altitude降 (non-turbo)","向好 engine bank ≥5°"],rel:["pof.pfactor"],src:"ATP ch3"},
  // ===== Ground effect & wake
  {id:"pof.groundeffect",g:"Ground Effect & Wake",t:"Ground Effect",d:"離地約 1 wingspan 內，downwash 受限 → induced drag ↓、lift ↑。",pts:["Within ~1 wingspan","Vortex 弱、downwash 少","Flare 時 float","離開 GE：induced ↑、AoA ↑","Low wing 更明顯"],rel:["pof.induced","pof.wingcfg"],src:"PHAK ch5; RPL ch6; ATP ch3"},
  {id:"pof.wake",g:"Ground Effect & Wake",t:"Wake Turbulence",d:"重、慢、clean 嘅機 tip vortices 最強，會令後機 roll。",pts:["Heavy/clean/slow 最強","Vortices 下沉","近地面向外移","Approach 喺前機 flightpath 上方","喺前機 touchdown 點之後着陸"],rel:["pof.vortices","pof.groundeffect"],src:"PHAK ch5"},
  // ===== High-Speed Flight
  {id:"pof.machnum",g:"High-Speed Flight",t:"Mach Number & Speed of Sound",d:"Mach = TAS ÷ a；a 只隨temperature變，高空 a 細啲。",pts:["a = √(γRT)","Mach 1 = speed of sound","ISA SL: a ≈ 661 kt","Machmeter 顯示 % of a","Compressibility 重要由 M≈0.3"],rel:["pof.regimes","pof.u.compress","pof.speeds"],src:"ATP ch3; PHAK ch5; Lecture 17"},
  {id:"pof.regimes",g:"High-Speed Flight",t:"Flow Regimes",d:"Subsonic / transonic / supersonic / hypersonic。",pts:["< M0.3: incompressible","0.3–0.5: compressibility 可忽略","約 0.75–1.2: transonic","1.2–5: supersonic","> 5: hypersonic"],rel:["pof.mcrit","pof.u.hyper"],src:"POF05; ATP ch3"},
  {id:"pof.mcrit",g:"High-Speed Flight",t:"Critical Mach Number",d:"Mcrit：fuselage Mach 數，令翼面最快處剛好 M=1。",pts:["Wing 面流速 > fuselagespeed","Local M=1，freestream <1","高過 Mcrit → shock 出現","每款機唔同","升 Mcrit：薄、sweep、supercritical"],rel:["pof.wavedrag","pof.sweep","pof.supercrit"],src:"POF05; PHAK ch5; ATP ch3"},
  {id:"pof.wavedrag",g:"High-Speed Flight",t:"Shock Waves & Wave Drag",d:"Shock 後 flow 分離，drag 急升 = wave drag。",pts:["M ↑ → shock 向後移","Shock 強 → 分離","Drag divergence","M≈1: bow wave","Supersonic 後 drag 相對回落"],rel:["pof.mcrit","pof.machtuck","pof.shocktypes"],src:"POF05; PHAK ch5"},
  {id:"pof.shocktypes",g:"High-Speed Flight",t:"Types of Shock Waves",d:"Normal、oblique、expansion fan 嘅比較。",pts:["Normal: M>1→M<1，損耗大","Oblique: 轉向，M 仍 >1","Expansion fan: 加速，P↓，損耗小","Normal 唔轉向","Blunt body: detached bow wave"],rel:["pof.wavedrag","pof.u.normal","pof.u.oblique"],src:"POF05; Lecture 18 & 19"},
  {id:"pof.machtuck",g:"High-Speed Flight",t:"Mach Tuck",d:"CP 後移 + tail airflow差 → nose自己向下。",pts:["Shock 令 flow 分離","CP 後移 → nose-down moment","Tail airflow混亂、效力降","Fix: sweep","Fix: trimmable stabilizer"],rel:["pof.cp","pof.sweep","pof.trimstab"],src:"POF05; ATP ch3"},
  {id:"pof.sweep",g:"High-Speed Flight",t:"Sweepback",d:"只有垂直前緣嘅分量影響 shock 同 lift → Mcrit ↑。",pts:["Effective M = M·cosΛ","延遲 drag rise","代價：CLmax ↓ → 要大 flap/slat","低速 tip 先 stall","Spanwise flow"],rel:["pof.mcrit","pof.slats","pof.fwdsweep"],src:"POF05; ATP ch3; PHAK ch5"},
  {id:"pof.fwdsweep",g:"High-Speed Flight",t:"Forward & Variable Sweep",d:"Forward sweep CP 前移；swing-wing（F-14）兼顧低速。",pts:["Su-47 forward swept","CP 前移 → 另類操控問題","Variable sweep: F-14","低速：翼向前","高速：翼向後"],rel:["pof.sweep"],src:"POF05"},
  {id:"pof.supercrit",g:"High-Speed Flight",t:"Supercritical Airfoil",d:"上面平、後緣 aft-loaded → shock 弱、延後 drag rise。",pts:["Flat upper surface","LE radius 大","弱 shock 喺後面","後部 camber 出 lift","Blunt trailing edge"],rel:["pof.mcrit","pof.wavedrag"],src:"POF05"},
  {id:"pof.trimstab",g:"High-Speed Flight",t:"Trimmable Horizontal Stabilizer",d:"整塊 stabilizer 偏轉，足夠力矩抵銷 Mach tuck。",pts:["Hydraulic / autopilot 驅動","Trim authority 大","取代 elevator trim tab","抗 nose-down tuck","處理大 CG/speed範圍"],rel:["pof.machtuck","pof.trim"],src:"POF05; PHAK ch5"},
  {id:"pof.vmo",g:"High-Speed Flight",t:"Vmo / Mmo & Buffet Boundary",d:"Vmo/Mmo = 最大 operating speed；超過有 buffet、flutter、Mach tuck 風險。",pts:["Barber pole 紅白條","低空 Vmo (IAS)，高空 Mmo (Mach)","Low-speed buffet = stall 側","High-speed buffet = shock 側","Coffin corner：兩者相遇"],rel:["pof.mcrit","pof.stall"],src:"POF05; PHAK ch5"},
  {id:"pof.hsctrl",g:"High-Speed Flight",t:"High-Speed Control Devices",d:"Yaw damper、vortex generator、Mach trim、aileron lockout。",pts:["Yaw damper 對 Dutch roll","Vortex generators 激勵 BL","Outboard aileron 高速鎖死","Spoilers 輔助 roll","Mach trim 對 Mach tuck"],rel:["pof.dutch","pof.bl","pof.machtuck"],src:"PHAK ch5; ATP ch3",check:true},
  {id:"pof.supfoil",g:"High-Speed Flight",t:"Supersonic Airfoil",d:"薄、尖前緣 → 弱 oblique shock、bow wave 細。",pts:["尖 LE: attached oblique shock","薄 → wave drag 低","鈍 LE: detached bow wave","Shock-expansion 理論估力","Diamond / double-wedge"],rel:["pof.shocktypes","pof.u.oblique"],src:"POF05 key topics; Lecture 19",check:true},
  {id:"pof.arearule",g:"High-Speed Flight",t:"Transonic Area Rule",d:"總截面積沿機長要平滑，減 wave drag（蜂腰fuselage）。",pts:["截面積分佈平滑","Wing 位置fuselage收窄","減 transonic wave drag","Anti-shock body","同 Mcrit 唔同方法"],rel:["pof.wavedrag"],src:"POF05 key topics（內容未能讀到，一般航空知識）",check:true},
  {id:"pof.intakes",g:"High-Speed Flight",t:"Supersonic Engine Intakes",d:"Jet engine 只收 subsonic airflow → intake 用 shock 減速。",pts:["Engine 要 subsonic inlet flow","Oblique shocks 再 normal shock","Ramp / variable geometry","Shock 要受控制","Spike / ramp intake"],rel:["pof.shocktypes"],src:"POF05 key topics（內容未能讀到，一般航空知識）",check:true},
  // ===== Advanced: Flow Basics
  {id:"pof.u.hows",g:"Advanced: Flow Basics",t:"How We Study Aerodynamics",d:"【進階】Theory、wind tunnel、CFD 三條路互相驗證。",pts:["Theory：方程式","Experiment：wind tunnel / flight test","CFD：數值模擬","Steady flow 假設常用","三者交叉驗證"],rel:["pof.u.conserve"],src:"Lecture 1（手寫，OCR 讀唔到，靠標題）",check:true},
  {id:"pof.u.variables",g:"Advanced: Flow Basics",t:"Flow Variables, Forces & Moments",d:"【進階】p, ρ, T, V；body force 分 L, D, M，用 CL, CD, Cm 無因次化。",pts:["Pressure + shear 積分 → force","Lift ⟂ V∞，Drag ∥ V∞","Moment 要講明參考點","CL = L / (q∞ S)","q∞ = ½ρV²"],rel:["pof.liftformula","pof.u.reynolds"],src:"Lecture 2 & 3（手寫，OCR 差）",check:true},
  {id:"pof.u.reynolds",g:"Advanced: Flow Basics",t:"Reynolds Number & Similarity",d:"【進階】Re = ρVL/μ = inertia ÷ viscous；Re、Mach 相同 → 流場相似。",pts:["Re 大：inertia 主導","Re 細：viscous 主導","Wind tunnel 要配 Re & M","Re 決定 laminar→turbulent","Re_crit ≈ 5×10⁵ (flat plate)"],rel:["pof.bl","pof.u.dragsep","pof.u.bio"],src:"Lecture 4, 14 & 21"},
  {id:"pof.u.conserve",g:"Advanced: Flow Basics",t:"Conservation Laws",d:"【進階】Mass、momentum (F=ma)、energy 三條守恆律 = 一切嘅起點。",pts:["Continuity: ρAV = const","Momentum → Euler / Navier-Stokes","Energy → h + V²/2 = const","Incompressible: ρ = const","由此推 Bernoulli"],rel:["pof.u.bernlaplace","pof.u.compress","pof.newton"],src:"Lecture 5（OCR 差）",check:true},
  {id:"pof.u.streamlines",g:"Advanced: Flow Basics",t:"Streamlines & Stream Function",d:"【進階】Streamline 切線＝speed方向；steady 時 pathline=streakline=streamline。",pts:["Flow 唔會穿過 streamline","Streamlines 收窄 → 流速 ↑","ψ = const 即 streamline","Δψ = mass flow","Smoke / tuft 用作可視化"],rel:["pof.u.vorticity","pof.u.elem"],src:"Lecture 6"},
  {id:"pof.u.vorticity",g:"Advanced: Flow Basics",t:"Vorticity, Circulation & Potential",d:"【進階】Vorticity ζ=∇×V 量度自轉；irrotational (ζ=0) 可用 velocity potential φ。",pts:["ζ≠0 rotational；ζ=0 irrotational","Circulation Γ = ∮V·ds","Γ 同 lift 相關","V = ∇φ（irrotational）","BL 內 rotational"],rel:["pof.u.kj","pof.u.bernlaplace"],src:"Lecture 7"},
  {id:"pof.u.bernlaplace",g:"Advanced: Flow Basics",t:"Bernoulli & Laplace (Ideal Flow)",d:"【進階】Inviscid + incompressible：p+½ρV²=const；φ、ψ 滿足 ∇²=0。",pts:["Bernoulli 只沿 streamline","Irrotational → 處處成立","Laplace → 可疊加解","適用 BL 外、低速 M<0.3","風洞：用 Δp 量speed"],rel:["pof.bernoulli","pof.u.elem","pof.u.vorticity"],src:"Lecture 8"},
  // ===== Advanced: Airfoil Theory
  {id:"pof.u.elem",g:"Advanced: Airfoil Theory",t:"Elementary Flows",d:"【進階】Uniform、source/sink、doublet、vortex：可疊加成真實形狀。",pts:["Uniform: V∞","Source/sink: 向外/向內","Doublet: source+sink 合體","Vortex: 環繞，帶 Γ","Superposition"],rel:["pof.u.cylinder","pof.u.bernlaplace","pof.u.panel"],src:"Lecture 9"},
  {id:"pof.u.cylinder",g:"Advanced: Airfoil Theory",t:"Flow Over a Cylinder",d:"【進階】Uniform + doublet = 靜止圓柱：無 lift 無 drag；加 vortex → 有 lift。",pts:["Rankine oval = uniform+source+sink","Stationary cylinder: L=0, D=0","d'Alembert paradox","加 vortex (Γ) → rotating cyl","Stagnation point 位置隨 Γ 移"],rel:["pof.u.elem","pof.u.kj"],src:"Lecture 9 & 10"},
  {id:"pof.u.kj",g:"Advanced: Airfoil Theory",t:"Kutta–Joukowski Theorem",d:"【進階】L' = ρ V∞ Γ：circulation 指示 lift 存在。",pts:["L' = lift per unit span","Γ 本身唔製造 lift","Lift 來自 pressure / shear","Γ = 『足印』","Airfoil 無旋轉但有 Γ"],rel:["pof.u.cylinder","pof.u.kutta","pof.u.vorticity","pof.u.lifting"],src:"Lecture 10"},
  {id:"pof.u.kutta",g:"Advanced: Airfoil Theory",t:"Kutta Condition",d:"【進階】後緣 flow 平順離開 → 決定 Γ 大小，鎖定 stagnation 位置。",pts:["尖後緣：上下流同速離開","唔加條件 → Γ 不定","非 lift：stagnation 自然","Lifting：要 Kutta 修正","粘性令 flow 真係咁做"],rel:["pof.u.kj","pof.newton","pof.u.panel"],src:"Lecture 11 & 13a"},
  {id:"pof.u.panel",g:"Advanced: Airfoil Theory",t:"Panel Methods",d:"【進階】將形狀分成 panels，放 source/vortex，令 streamlines = 物體表面。",pts:["Source panel：non-lifting 專用","Vortex panel：lifting body","No-penetration boundary condition","Kutta condition 加埋","概念設計快速計算 (PANAIR)"],rel:["pof.u.elem","pof.u.kutta","pof.u.thin"],src:"Lecture 11"},
  {id:"pof.u.thin",g:"Advanced: Airfoil Theory",t:"Thin Airfoil Theory",d:"【進階】用 chord line 上嘅 vortex sheet 代表 camber：CL = 2π(α − α₀)。",pts:["Symmetric: CL = 2πα (α in rad)","Cambered: 有 α_L=0","Cm 約 quarter-chord","Fourier 級數解 γ(θ)","適用小角、薄 foil"],rel:["pof.clcurve","pof.u.panel","pof.camber"],src:"Lecture 12"},
  {id:"pof.u.liftcause",g:"Advanced: Airfoil Theory",t:"What Causes Lift? (Full Picture)",d:"【進階】Flow 貼面、轉向下；mass/momentum/energy 守恆解釋力。",pts:["Flow 加速→pressure降 (Bernoulli)","Coandă / entrainment：flow 貼面","Kutta：後緣平順離開","Air 被轉向下 → momentum","Equal-transit 係錯"],rel:["pof.newton","pof.liftmyth","pof.u.kutta"],src:"Lecture 13a"},
  {id:"pof.u.dragsep",g:"Advanced: Airfoil Theory",t:"Drag, Separation & Pressure Gradient",d:"【進階】Skin friction (Cf) vs pressure drag；adverse gradient 令 flow separate。",pts:["Laminar Cf ∝ Re^-½；turbulent 較高","Re_crit 決定 transition","Favourable gradient: 加速","Adverse gradient: 減速 → separation","Separated：失 lift + 加 drag"],rel:["pof.bl","pof.stall","pof.u.reynolds"],src:"Lecture 14"},
  // ===== Advanced: Finite Wing
  {id:"pof.u.finite",g:"Advanced: Finite Wing",t:"Finite Wing: Downwash & Induced AoA",d:"【進階】Tip vortex 產生 downwash，令 effective AoA 細過 geometric AoA。",pts:["2D 係理想 (b→∞)","Downwash w → α_i","α_eff = α − α_i","Lift 向後傾 → induced drag","Lift 沿翼展分佈 L'(y)"],rel:["pof.induced","pof.u.biot","pof.u.lifting"],src:"Lecture 15"},
  {id:"pof.u.biot",g:"Advanced: Finite Wing",t:"Biot–Savart & Helmholtz",d:"【進階】Vortex filament 對周圍誘導speed；Helmholtz 規則解釋 tip vortex。",pts:["半無限 vortex: V = Γ/(4πh)","無限: V = Γ/(2πh)","Strength 沿線唔變","Vortex 唔可以喺 fluid 中終止","→ horseshoe vortex"],rel:["pof.u.finite","pof.vortices"],src:"Lecture 15 & 16"},
  {id:"pof.u.lifting",g:"Advanced: Finite Wing",t:"Prandtl Lifting-Line Theory",d:"【進階】Horseshoe vortices 疊加求 Γ(y)；elliptical 分佈 → CDi = CL²/(π·AR)。",pts:["預測 L'(y)、總 lift、induced drag","Elliptical Γ：α_i 恆定","CDi = CL² / (π·e·AR)","e ≤ 1 (span efficiency)","適用中高 AR 直翼"],rel:["pof.aspect","pof.planform","pof.induced","pof.u.finite"],src:"Lecture 16"},
  // ===== Advanced: Compressible Flow
  {id:"pof.u.compress",g:"Advanced: Compressible",t:"Compressible Flow Basics",d:"【進階】M > 0.3：ρ 變化 >5%；kinetic ↔ internal energy 互換；a = √(γRT)。",pts:["Perfect gas: p = ρRT","γ = 1.4 (air)","Isentropic = adiabatic + reversible","Stagnation T0 = T(1+(γ−1)/2·M²)","Subsonic 都可以 compressible"],rel:["pof.machnum","pof.u.normal","pof.u.conserve"],src:"Lecture 17"},
  {id:"pof.u.normal",g:"Advanced: Compressible",t:"Normal Shock Relations",d:"【進階】Shock 前 M₁>1；後 M₂<1，p、T、ρ 急升，總壓損失。",pts:["Mass + momentum + energy 守恆","M₂² < 1 always","p₂/p₁ = 1 + 2γ/(γ+1)·(M₁²−1)","T0 唔變，p0 跌","Look-up tables"],rel:["pof.shocktypes","pof.u.oblique","pof.u.compress"],src:"Lecture 18"},
  {id:"pof.u.oblique",g:"Advanced: Compressible",t:"Oblique Shock & Expansion Fan",d:"【進階】Shock 角 β，轉角 θ：只有垂直分量似 normal shock；expansion 用 Prandtl–Meyer。",pts:["Mn1 = M1 sinβ","Tangential V 唔變","θ–β–M 關係：weak / strong","θ 太大 → detached shock","Expansion fan：isentropic，P-M function"],rel:["pof.shocktypes","pof.supfoil","pof.u.normal"],src:"Lecture 19"},
  {id:"pof.u.hyper",g:"Advanced: Compressible",t:"Hypersonic Flow",d:"【進階】M>5：thin shock layer、entropy layer、air 解離，真實氣體效應。",pts:["Shock layer 薄貼身","Viscous interaction","O₂ 約 2000K 解離；N₂ 約 4000K","Ionised：plasma","Kn 判斷 continuum 是否成立"],rel:["pof.regimes","pof.u.compress"],src:"Lecture 20"},
  {id:"pof.u.bio",g:"Advanced: Flow Basics",t:"Swimming & Flying Animals",d:"【進階】Re 細 → viscous 主導；Re 大 → inertia 主導；flapping wing 靠 unsteady 效應。",pts:["Re 大：drag ∝ ρV²L²","Re 細：Stokes drag ∝ μVL","Lift-based vs drag-based thrust","Added mass","Leading-edge vortex"],rel:["pof.u.reynolds"],src:"Lecture 21"}
  ],
  links:[
  ["pof.aoa","pof.stall","AoA 過 critical → stall（同speed無關）"],
  ["pof.liftformula","pof.densalt","DA 高 → ρ 低 → 同 IAS 下 lift 要更高 TAS"],
  ["pof.liftformula","pof.stallfactors","L=W 時 Vs=√(2W/ρSCLmax)，所以 W、flap 影響 Vs"],
  ["pof.clcurve","pof.stall","CLmax 之後曲線跌 = stall"],
  ["pof.flaps","pof.clcurve","Flap 令 CL–α 曲線上移、CLmax ↑"],
  ["pof.flaps","pof.stallfactors","Flap 放出 → Vs ↓"],
  ["pof.bernoulli","pof.newton","同一件事兩個角度：pressure差 = 動量變化"],
  ["pof.newton","pof.induced","Downwash 愈大，lift 後傾愈多 → induced drag"],
  ["pof.vortices","pof.induced","Tip vortex 產生 downwash → induced drag"],
  ["pof.vortices","pof.wake","同一 vortex 留喺後面 = wake turbulence"],
  ["pof.aspect","pof.induced","AR ↑ → tip 影響細 → induced drag ↓"],
  ["pof.dragcurve","pof.ld","Total drag 最低點 = L/DMAX"],
  ["pof.induced","pof.dragcurve","低速區 induced 主導，曲線左支"],
  ["pof.parasite","pof.dragcurve","高速區 parasite 主導，曲線右支"],
  ["pof.bl","pof.stall","BL separation = stall"],
  ["pof.bl","pof.parasite","Skin friction 來自 BL"],
  ["pof.washout","pof.aileron","Root 先 stall → tip 仍可用 aileron"],
  ["pof.stall","pof.spin","Stall + yaw → spin"],
  ["pof.spin","pof.spiral","分辨 stalled vs not stalled"],
  ["pof.spiralinst","pof.spiral","Spiral instability 發展成 spiral dive"],
  ["pof.loadfactor","pof.stallfactors","n ↑ → Vs × √n"],
  ["pof.turnforces","pof.loadfactor","Bank ↑ → lift 要 ↑ → n = 1/cosφ"],
  ["pof.turnforces","pof.rot","Horizontal lift 決定turn快慢"],
  ["pof.accstall","pof.va","高於 VA stall：load 可超 limit"],
  ["pof.va","pof.vg","VA 係 V-g 包絡嘅 corner"],
  ["pof.limitload","pof.vg","V-g 圖頂線 = limit load"],
  ["pof.advyaw","pof.rudder","Rudder 用嚟抵消 adverse yaw"],
  ["pof.advyaw","pof.turncoord","Adverse yaw 唔處理 → ball 偏出 (slip/skid)"],
  ["pof.ctrleff","pof.corkscrew","Slipstream 令 rudder/elevator 重，aileron 唔變"],
  ["pof.cg","pof.longstab","CG 位置決定 pitch 穩定"],
  ["pof.cg","pof.stall","後 CG 超限 → stall 後 nose 壓唔低"],
  ["pof.cp","pof.longstab","CP 同 CG 嘅相對位置決定 pitch 力矩"],
  ["pof.dirstab","pof.spiralinst","Fin 強 vs dihedral 弱 → spiral"],
  ["pof.latstab","pof.dutch","Dihedral 太強 vs fin → Dutch roll"],
  ["pof.pfactor","pof.critengine","P-factor → critical engine"],
  ["pof.ltt","pof.weathercock","兩者都係 yaw 方向嘅效應"],
  ["pof.groundeffect","pof.induced","近地 vortex 受限 → induced drag ↓"],
  ["pof.climb","pof.vxvy","Excess thrust/power 決定 Vx/Vy"],
  ["pof.ld","pof.glide","L/DMAX speed = best glide"],
  ["pof.mcrit","pof.wavedrag","超過 Mcrit → shock → wave drag"],
  ["pof.wavedrag","pof.machtuck","Shock 分離 → CP 後移 + tail 差 → tuck"],
  ["pof.sweep","pof.mcrit","Sweep → effective M ↓ → Mcrit ↑"],
  ["pof.sweep","pof.slats","Sweep 令 CLmax 降 → 要 slat/flap"],
  ["pof.trimstab","pof.machtuck","可動 stabilizer 抵銷 tuck"],
  ["pof.supercrit","pof.wavedrag","平頂 foil → 弱 shock"],
  ["pof.shocktypes","pof.u.normal","Normal shock 公式"],
  ["pof.dutch","pof.hsctrl","Yaw damper 抑制 Dutch roll"],
  ["pof.u.kj","pof.induced","Γ 沿翼展變 → trailing vortex → induced drag"],
  ["pof.u.kj","pof.newton","Γ 係 turning flow 嘅『足印』"],
  ["pof.u.kutta","pof.liftmyth","Kutta 條件解釋點解流唔『等時間』"],
  ["pof.u.thin","pof.clcurve","CL=2πα 係 CL–α 斜率來源"],
  ["pof.u.lifting","pof.aspect","CDi ∝ 1/AR"],
  ["pof.u.dragsep","pof.bl","Adverse gradient → BL separation"],
  ["pof.u.reynolds","pof.u.dragsep","Re 決定 laminar/turbulent 同 Cf"],
  ["pof.u.compress","pof.mcrit","M>0.3 起 compressibility；接近 M1 出 shock"],
  ["pof.stallsym","pof.stall","症狀係 AoA 接近 critical 嘅警告"],
  ["pof.stallrec","pof.stall","減 AoA 係 recover 第一步"],
  ["pof.icing","pof.bl","Ice 令 BL 早 separate"],
  ["pof.rot","pof.turnforces","Horizontal lift 加上 TAS 決定 ROT／radius"],
  ["pof.advyaw","pof.aileron","Down aileron drag ↑ 是 adverse yaw 起因"],
  ["pof.pfactor","pof.aoa","AoA 高 → prop disc 傾斜 → P-factor"],
  ["pof.gyro","pof.corkscrew","兩者都係 prop 帶來嘅 yaw 力"],
  ["pof.perf","pof.densalt","DA 高 → climb 差"],
  ["pof.u.panel","pof.u.kutta","Vortex panel 需要 Kutta condition"],
  ["pof.u.biot","pof.u.lifting","Horseshoe vortex 用 Biot-Savart 計 downwash"],
  ["pof.u.normal","pof.wavedrag","Normal shock 令總壓下跌 → wave drag"],
  ["pof.u.oblique","pof.supfoil","尖前緣 → attached oblique shock"],
  ["pof.u.reynolds","pof.bl","Re 決定 BL 類型"],
  ["pof.slats","pof.stall","Slat 延遲 separation → stall AoA ↑"],
  ["pof.spoilers","pof.flaps","同 high-lift 相反：減 lift 加 drag"]
  ],
  cards:[
  _pofC("pof.atmos","🌍","What is the composition of the atmosphere?","About 78% nitrogen, 21% oxygen and 1% other gases such as argon.","氧氣大部分喺 35,000 ft 以下。"),
  _pofC("pof.atmos","🌡️","What are ISA sea-level values?","15°C, 1013.25 hPa and a density of about 1.225 kg/m³.","ISA = 標準參考大氣。"),
  _pofC("pof.atmos","📉","How do pressure and temperature change with altitude in the ISA troposphere?","Both decrease with altitude; ISA temperature falls about 2°C per 1000 ft.","Lapse rate ≈ 2°C/1000 ft。"),
  _pofC("pof.viscosity","🧈","What is viscosity and how does it affect an aircraft?","Viscosity is a fluid's resistance to flow; it makes air stick to the skin, creating a boundary layer and skin friction drag.","空氣 viscosity 低但唔係零。"),
  _pofC("pof.viscosity","🪨","Why do smooth-looking surfaces still cause friction?","Every surface is rough at microscopic level, so the air touching it is slowed down.","所以飛機要清潔、flush rivet。"),
  _pofC("pof.densalt","🔥","What is density altitude and why does it matter?","It is pressure altitude corrected for non-standard temperature; high density altitude reduces lift, thrust and propeller efficiency.","熱、高、濕 → 性能差。"),
  _pofC("pof.densalt","🏔️","What happens to takeoff performance on a hot day at a high-elevation airfield?","Longer takeoff roll and reduced climb rate, because air density is lower and the engine produces less power.","要更長runway。"),
  _pofC("pof.speeds","🧭","What is the difference between IAS and TAS?","IAS reflects dynamic pressure at the pitot; TAS is IAS corrected for air density, so TAS is higher than IAS at altitude.","高空 TAS > IAS。"),
  _pofC("pof.speeds","🧮","Does stall IAS change with altitude?","No. The wing stalls at the same indicated airspeed in straight-and-level flight; the TAS at the stall is higher at altitude.","Stall IAS ≈ 不變。"),
  _pofC("pof.fourforces","⚖️","Name the four forces on an aircraft and their directions.","Lift (perpendicular to relative wind), weight (towards the earth's centre), thrust and drag (parallel to relative wind).","Lift 唔一定垂直。"),
  _pofC("pof.fourforces","➡️","In steady straight-and-level flight, how are the forces related?","Lift equals weight and thrust equals drag.","勻速level flight = 成對平衡。"),
  _pofC("pof.aoa","📐","Define angle of attack.","The angle between the wing chord line and the relative airflow.","唔係nose指向。"),
  _pofC("pof.aoa","🔀","How do attitude, flightpath and angle of attack differ?","Attitude is the nose position relative to the horizon, flightpath is the direction of travel, and AoA is chord versus relative wind.","三者可以完全唔同。"),
  _pofC("pof.aoa","❓","Why is AoA more important than airspeed for stalling?","A wing always stalls at its critical AoA; airspeed at the stall varies with weight, load factor and configuration.","Stall = AoA 問題。"),
  _pofC("pof.liftformula","➗","State the lift formula and what each term means.","L = CL × ½ρV² × S: lift coefficient, air density, speed squared and wing area.","V 加倍 → lift ×4。"),
  _pofC("pof.liftformula","✖️","If airspeed doubles at constant AoA, what happens to lift?","Lift increases four times, because lift is proportional to V squared.","計算：2² = 4。"),
  _pofC("pof.liftformula","🪂","How must AoA change when IAS is reduced in level flight?","AoA must increase to keep the same lift, until the critical AoA is reached and the wing stalls.","慢 → 要拉高 AoA。"),
  _pofC("pof.bernoulli","🌬️","State Bernoulli's principle for flow along a streamline.","In steady inviscid flow, static pressure plus dynamic pressure is constant, so faster flow means lower static pressure.","P + ½ρV² = const。"),
  _pofC("pof.bernoulli","🧪","Why is Bernoulli not the whole story of lift?","It describes the pressure pattern but not why the flow speeds up; that comes from conservation of mass, momentum and the Kutta condition.","只係 footprint。"),
  _pofC("pof.newton","⬇️","Explain lift using Newton's laws.","The wing deflects air downward (downwash); the equal and opposite reaction on the wing is lift.","Momentum 角度。"),
  _pofC("pof.newton","🤝","Are the Bernoulli and Newton explanations in conflict?","No. They describe the same physics: the pressure difference on the wing is what changes the air's momentum.","兩個講法等價。"),
  _pofC("pof.liftmyth","🙅","Is the 'equal transit time' explanation of lift correct?","No. Air over the top does not have to meet the air from below at the trailing edge, and it actually arrives sooner.","面上空氣更快到後緣。"),
  _pofC("pof.clcurve","📈","Describe the CL versus angle-of-attack curve.","CL rises roughly linearly with AoA up to CLmax at the critical angle, then falls sharply as the wing stalls.","CLmax 之後跌。"),
  _pofC("pof.clcurve","🔼","What does camber or flap extension do to the CL curve?","It shifts the curve upward, giving more lift at each AoA and a higher CLmax.","Flap 上移曲線。"),
  _pofC("pof.cp","🎯","What is the centre of pressure and how does it move with AoA?","It is the point where the total aerodynamic force acts; it moves forward as AoA increases and moves aft after the stall.","Stall 後 CP 後移 → nose drops。"),
  _pofC("pof.airfoil","📏","Define chord line, camber line and thickness.","The chord line joins the leading and trailing edges, the mean camber line lies midway between upper and lower surfaces, and thickness is the max distance between them.","基本名詞。"),
  _pofC("pof.airfoil","🔢","What does NACA 4412 mean?","4% maximum camber located at 40% chord, with 12% maximum thickness.","4-4-12。"),
  _pofC("pof.camber","🌙","Why use a cambered wing rather than a flat plate?","A cambered airfoil produces more lift and less drag at a given AoA, and is stronger and holds fuel.","Camber ↑ = CL ↑。"),
  _pofC("pof.camber","🔁","Where is a symmetrical aerofoil typically used?","On tailplanes, fins and aerobatic wings, where lift must be zero at zero AoA.","α=0 無 lift。"),
  _pofC("pof.aspect","↔️","Define aspect ratio and its effect on induced drag.","Aspect ratio is span squared divided by wing area; higher AR reduces induced drag because tip effects are smaller.","高 AR → 低 induced drag。"),
  _pofC("pof.aspect","🧮","A rectangular wing has span 11 m and chord 1.6 m. What is its aspect ratio?","AR = span/chord = 11/1.6 ≈ 6.9.","計算 b/c。"),
  _pofC("pof.planform","🛩️","Why is an elliptical lift distribution ideal?","It gives the minimum induced drag for a given lift and span, with constant downwash along the wing.","Spitfire 橢圓翼。"),
  _pofC("pof.planform","🔺","Why do many light aircraft use tapered wings?","They approximate an elliptical lift distribution with less induced drag, while being lighter and easier to build than a true elliptical wing.","Taper = 折衷。"),
  _pofC("pof.wingcfg","🏗️","What does dihedral do?","Dihedral gives a restoring rolling moment after a sideslip, increasing lateral stability.","向上傾角。"),
  _pofC("pof.wingcfg","⬆️","What are pros and cons of a high wing versus a low wing?","High wing: stable and good visibility downward; low wing: stronger ground effect and better upward visibility.","取捨。"),
  _pofC("pof.washout","🌀","Why is a wing designed to stall at the root first?","So the ailerons at the tips keep working, giving roll control through the stall and a gentler nose-drop.","Root 先 stall。"),
  _pofC("pof.washout","🧷","What is a stall strip?","A small wedge on the leading edge near the root that makes the root stall before the tip; the DA40 has them.","DA40 有。"),
  _pofC("pof.drag","🧱","What are the two main categories of drag?","Parasite drag (form, skin friction, interference) and induced drag (a by-product of lift).","Total = P + I。"),
  _pofC("pof.drag","📊","How do the two drag types vary with airspeed?","Parasite drag increases with V squared; induced drag decreases roughly with 1/V squared.","一升一降。"),
  _pofC("pof.parasite","🪟","Name the three types of parasite drag.","Form drag (shape), skin friction drag (surface roughness) and interference drag (airflow mixing at junctions).","三種。"),
  _pofC("pof.parasite","🔧","How can interference drag be reduced?","With fairings and smooth blending at junctions such as the wing root.","Fairings。"),
  _pofC("pof.induced","⬆️","What causes induced drag?","Wingtip vortices create downwash, tilting the lift vector rearwards and adding a drag component.","Lift 的副作用。"),
  _pofC("pof.induced","🐌","When is induced drag greatest and why?","At low speed and high AoA, since more lift is needed from a lower dynamic pressure.","慢 = induced 大。"),
  _pofC("pof.vortices","🌪️","How do wingtip vortices form and rotate?","High pressure under the wing leaks to low pressure above at the tip; seen from behind, the right tip rotates counterclockwise and the left clockwise.","右 CCW，左 CW。"),
  _pofC("pof.winglet","🦅","How do winglets reduce drag?","They hinder spanwise leakage around the tip, weakening the vortex and reducing induced drag.","Winglet。"),
  _pofC("pof.bl","🧅","What is the boundary layer and what are its two types?","A thin layer of air next to the surface slowed by friction; it can be laminar (smooth) or turbulent (mixing).","Laminar → turbulent。"),
  _pofC("pof.bl","🎭","Why can a turbulent boundary layer be beneficial?","It carries more energy near the surface and resists separation longer, though it has higher skin friction.","Vortex generator 同原理。"),
  _pofC("pof.dragcurve","📉","What is the shape of the total drag curve?","A U-shape: induced drag dominates at low speed, parasite at high speed, with a minimum at an intermediate speed.","最低點 = best L/D。"),
  _pofC("pof.dragcurve","🏋️","How does increased weight affect the drag curve?","Induced drag rises, so the minimum-drag speed increases while parasite drag changes little.","重 → 曲線右移。"),
  _pofC("pof.ld","🎿","What is L/D and what does L/DMAX represent?","The ratio of lift to drag; L/DMAX is the AoA and speed with the lowest total drag, giving best glide.","最佳效率點。"),
  _pofC("pof.ld","📐","An aircraft has L/D of 10. How far does it glide from 5000 ft in still air?","Glide distance = height × L/D = 5000 ft × 10 = 50,000 ft ≈ 8.2 NM.","50,000 ÷ 6076 ≈ 8.2 NM。"),
  _pofC("pof.stall","🛑","What is a stall?","A rapid loss of lift and increase in drag when airflow separates from the wing because the critical angle of attack is exceeded.","同speed、attitude 無關。"),
  _pofC("pof.stall","🧱","Does a stalled wing produce zero lift?","No. It still produces lift, but not enough to sustain level flight.","Lift 大減，唔係零。"),
  _pofC("pof.stall","🔽","Why does the nose drop in a stall?","The centre of pressure moves aft of the CG and tail download falls, giving a nose-down pitching moment that reduces AoA.","CP 後移。"),
  _pofC("pof.stallsym","🔔","What are the symptoms of an approaching stall?","Low and decreasing airspeed, high nose attitude, sloppy controls, quiet cabin, buffet and the stall warning horn.","Horn 約高過 stall 5–10 kt。"),
  _pofC("pof.stallsym","💥","What indicates a fully developed stall?","Heavy buffet, high sink rate at low airspeed, and possibly a nose or wing drop even with full back stick.","充分 stall。"),
  _pofC("pof.stallfactors","⚙️","What factors change stall speed?","Weight, flap setting, power, load factor and wing contamination; the critical AoA stays the same.","五樣。"),
  _pofC("pof.stallfactors","🪶","Does a heavier aircraft stall at a different AoA?","No, same critical AoA, but it stalls at a higher airspeed because more lift is needed.","重 → Vs 高。"),
  _pofC("pof.stallfactors","🔌","Why does power reduce the stall speed?","Thrust has a vertical component supporting weight, and slipstream re-energises airflow over the inner wing.","Power-on stall 較低速。"),
  _pofC("pof.stallrec","🆘","Describe a fully developed stall recovery.","Move the control column forward to unstall, apply full power, use rudder to stop yaw, level wings with aileron, then climb.","先減 AoA。"),
  _pofC("pof.stallrec","⏱️","When do you recover from an incipient stall?","At the stall warning: release back pressure, apply full power, keep balance and adopt the climb attitude.","Warning 就 recover。"),
  _pofC("pof.accstall","🌀","What is an accelerated stall?","A stall at a higher airspeed than normal because load factor increased, for example in a steep turn or sharp pull-up.","n 高 → Vs 高。"),
  _pofC("pof.accstall","🧮","Vs1 is 53 kt. What is the stall speed in a 60° bank level turn?","Load factor is 2, so Vs = 53 × √2 ≈ 75 kt.","計算：×1.41。"),
  _pofC("pof.advstall","🔄","Why shouldn't you use aileron to pick up a dropped wing in a stall?","Down aileron raises AoA on the already stalled wing and can deepen the stall or start a spin; use rudder to stop yaw and unstall first.","用 rudder。"),
  _pofC("pof.advstall","🛬","What is an approach stall?","A stall practised in the landing configuration with power idle, recovered by reducing AoA and applying power while keeping balance.","Landing config。"),
  _pofC("pof.spin","🌪️","What is a spin?","A sustained stalled autorotation in which one wing is more deeply stalled, causing roll, yaw and a spiralling descent at low airspeed.","Stall + yaw。"),
  _pofC("pof.spin","🪂","What characterises a developed spin?","Low and steady airspeed, high rate of descent, rapid rotation and a stalled wing.","IAS 低、ROD 高。"),
  _pofC("pof.spinrec","🆘","State the standard spin recovery steps.","Power idle, ailerons neutral, full opposite rudder, control column forward until rotation stops, then level the wings and ease out of the dive.","跟 POH 為準。","check"),
  _pofC("pof.spiral","🌀","How do you distinguish a spiral dive from a spin?","In a spiral dive airspeed increases and the wing is not stalled; in a spin airspeed is low and the wing is stalled.","關鍵：stalled 唔 stalled。"),
  _pofC("pof.spiral","⚠️","How do you recover from a spiral dive?","Reduce power, roll wings level with coordinated aileron and rudder, then ease out of the dive smoothly.","唔好先拉桿。"),
  _pofC("pof.icing","🧊","How does ice on the wing affect stall?","It disrupts the boundary layer, so the wing stalls at a lower AoA and higher airspeed, and adds weight.","0.8 mm ice → lift −25%。"),
  _pofC("pof.axes","🧭","Name the three axes and the control surface for each.","Longitudinal axis: roll via ailerons; lateral axis: pitch via elevator; normal axis: yaw via rudder.","全部過 CG。"),
  _pofC("pof.aileron","🎚️","What are the primary and secondary effects of ailerons?","Primary: roll about the longitudinal axis; secondary: adverse yaw.","Roll → adverse yaw。"),
  _pofC("pof.advyaw","↩️","What is adverse yaw and why does it happen?","Yaw opposite to the roll direction, caused by more drag on the wing with the down-going aileron.","Down aileron drag 大。"),
  _pofC("pof.advyaw","🛠️","How do designers and pilots counter adverse yaw?","Differential or Frise ailerons by design, and coordinated rudder by the pilot.","設計 + 技術。"),
  _pofC("pof.ailerontypes","🔩","Explain differential and Frise ailerons.","Differential: the up aileron moves more than the down one; Frise: the up aileron's nose protrudes into the airstream to add drag.","兩種減 adverse yaw。"),
  _pofC("pof.elevator","🛫","What are the effects of the elevator?","Primary effect is pitch about the lateral axis; the pitch change also changes AoA, airspeed and altitude.","Pitch 之後speedaltitude都變。"),
  _pofC("pof.rudder","🦶","What are the primary and secondary effects of rudder?","Primary: yaw about the normal axis; secondary: roll in the direction of yaw, because the outer wing moves faster.","Yaw → roll。"),
  _pofC("pof.rudder","❌","Does the rudder turn the aircraft?","No. Banking provides the turning force; rudder only keeps the nose aligned with the relative wind (balance).","Banking 先turn。"),
  _pofC("pof.ctrleff","🌬️","How do airspeed and slipstream affect control effectiveness?","Higher airspeed makes all controls more effective; propeller slipstream strengthens rudder and elevator but not the ailerons.","Aileron 唔受影響。"),
  _pofC("pof.ctrleff","🐢","Why are controls sloppy near the stall?","Low airspeed means low dynamic pressure over the surfaces, so larger movements are needed for the same effect.","慢 → 軟。"),
  _pofC("pof.tail","🅃","What is a stabilator?","A single-piece horizontal tail that pivots as a whole and acts as both stabiliser and elevator.","整塊活動。"),
  _pofC("pof.spoilers","🛑","What do spoilers do?","They destroy lift and add drag; asymmetric use assists roll, symmetric use acts as speedbrakes, and ground spoilers dump lift after touchdown.","三用途。"),
  _pofC("pof.hydraulic","💪","Why do jets use hydraulic flight controls?","Aerodynamic loads are too high to move surfaces by muscle alone, so actuators move them, with tabs for manual reversion.","高氣動力。"),
  _pofC("pof.hydraulic","🔒","Why are outboard ailerons locked out at high speed?","To prevent excessive roll response and wing bending when flaps are retracted.","高速只用 inboard。"),
  _pofC("pof.flaps","🪽","What do flaps do to lift, drag and stall speed?","They increase camber and lift (higher CLmax) and drag, lowering stall speed but also the stall AoA.","Vs ↓，drag ↑。"),
  _pofC("pof.flaps","🛫","Why use take-off flap and landing flap differently?","Take-off flap adds more lift than drag to shorten the ground run; landing flap adds a lot of drag for a steeper approach.","TO: lift；LDG: drag。"),
  _pofC("pof.flaps","⚠️","When do you raise flaps after take-off?","Once a positive rate of climb is established, at a safe height and speed (the briefing used 200 ft and 70 kt).","ENZO 做法。"),
  _pofC("pof.flaptypes","🔧","Name four flap types.","Plain, split, slotted and Fowler (also slotted Fowler); Fowler flaps slide aft to add area and camber.","Fowler 加面積。"),
  _pofC("pof.slats","🔭","What is a leading-edge slat?","A device that extends from the leading edge, creating a slot that passes high-energy air over the upper surface and delays stall to a higher AoA.","延遲 separation。"),
  _pofC("pof.slats","🔬","Why do swept-wing jets need slats and slotted flaps?","Sweep reduces maximum CL, so high-lift devices are needed to get acceptable take-off and landing speeds.","Sweep → CLmax ↓。"),
  _pofC("pof.trim","🎛️","What does a trim tab do?","It moves opposite to the control surface so air loads hold the surface in position, relieving stick pressure.","消除 control force。"),
  _pofC("pof.trim","🎯","Does trim change the aircraft's attitude by itself?","No; you set the attitude and power first, then trim to remove the control force at that attitude.","Attitude → trim。"),
  _pofC("pof.tabs","🔁","Compare servo, balance and anti-servo tabs.","Servo and balance tabs move opposite the surface to help move it; anti-servo tabs move the same way to increase stick force and stability.","方向相反 / 相同。"),
  _pofC("pof.stability","⚖️","Define static and dynamic stability.","Static stability is the initial tendency to return to equilibrium after a disturbance; dynamic stability is how the motion behaves over time.","Static 初步，Dynamic 長期。"),
  _pofC("pof.stability","〰️","What does positive dynamic stability look like?","Oscillations after a disturbance decrease in amplitude until the aircraft returns to trim.","振幅縮小。"),
  _pofC("pof.stabcontrol","🥊","Why is a very stable aircraft less manoeuvrable?","Stability resists changes in attitude, so more control force is needed to manoeuvre; fighters trade stability for agility.","穩定 vs 機動。","check"),
  _pofC("pof.longstab","↕️","What provides longitudinal stability?","Mainly the horizontal stabiliser, with the CG ahead of the neutral point.","Tail + CG。"),
  _pofC("pof.cg","📦","What are the effects of an aft CG?","Less stability, slightly lower stall speed and faster cruise, but stall recovery may become impossible beyond the aft limit.","超後限 = 危險。"),
  _pofC("pof.cg","🎒","What is the effect of a forward CG?","More stability, higher tail download, higher stall speed and heavier elevator forces.","穩但重。"),
  _pofC("pof.latstab","🪁","How do dihedral and sweepback provide lateral stability?","In a sideslip the lower wing meets more airflow and AoA, creating a rolling moment back toward level.","自動返水平。"),
  _pofC("pof.dirstab","🧭","What gives directional stability?","The vertical fin and rear fuselage, which generate a restoring force when the nose is yawed away from the relative wind.","Fin = weathervane。"),
  _pofC("pof.dutch","🇳🇱","What is Dutch roll?","A coupled roll-yaw oscillation in which the nose traces a figure-eight; yaw dampers suppress it in swept-wing jets.","Yaw damper。"),
  _pofC("pof.spiralinst","🌀","What is spiral instability?","Strong directional stability with weak dihedral lets a bank steepen gradually into a descending spiral if uncorrected.","唔可以 hands-off。"),
  _pofC("pof.turnforces","🔄","What force turns an aircraft?","The horizontal component of lift (centripetal force), produced by banking.","唔係 rudder。"),
  _pofC("pof.turnforces","⬆️","Why must back pressure be applied in a level turn?","Banking tilts lift, so the vertical component falls below weight; AoA must increase to restore it and hold altitude.","加 AoA 補回垂直 lift。"),
  _pofC("pof.turnforces","🔙","What happens to airspeed in a level turn without added power?","Induced drag increases with the higher AoA, so airspeed decays; more thrust is needed as bank increases.","Bank ↑ → 加 power。"),
  _pofC("pof.turncoord","🎱","What does the slip/skid ball show?","Whether the turn is balanced: ball inside = slipping, centred = balanced, outside = skidding.","Ball 偏內 slip，偏外 skid。"),
  _pofC("pof.turncoord","🧯","How do you correct a skid?","Reduce rudder (or add bank) so the rate of turn matches the bank angle.","Skid = ROT 過大。"),
  _pofC("pof.rot","⏲️","What is a rate one turn?","3° per second, so 360° takes 2 minutes.","Standard rate。"),
  _pofC("pof.rot","🧮","Estimate bank angle for a rate one turn at 100 kt TAS.","Rule of thumb: TAS/10 + 7 = 10 + 7 = 17°.","約 17°。"),
  _pofC("pof.rot","📏","If a 747 and a DA40 fly at the same TAS and bank, which has the larger radius?","Equal: radius depends on speed and bank only, not size or weight (r = V²/(g·tanφ)).","同 TAS 同 bank 就一樣。"),
  _pofC("pof.rot","🧮","Find turn radius at 100 kt TAS with 30° bank.","100 kt = 51.4 m/s; r = V²/(g·tan30°) = 2644/(9.81×0.577) ≈ 467 m.","約 470 m。"),
  _pofC("pof.loadfactor","🎢","Define load factor.","The ratio of total lift to weight (n = L/W), expressed in g.","n = L/W。"),
  _pofC("pof.loadfactor","📐","What load factor results in a level coordinated turn at 60° bank?","n = 1/cos60° = 2 g.","60° → 2 g。"),
  _pofC("pof.loadfactor","🧮","Find load factor at 45° bank.","n = 1/cos45° ≈ 1.41 g.","計算：1/0.707。"),
  _pofC("pof.loadfactor","❓","Does load factor in a level turn depend on speed or weight?","No, only on bank angle.","只靠 bank。"),
  _pofC("pof.overbank","↪️","Why does an aircraft tend to overbank in a turn?","The outer wing travels farther and faster, producing more lift than the inner wing.","外翼快。","check"),
  _pofC("pof.overbank","⛰️","How does a climbing turn change overbanking?","The outer wing also has a higher AoA, so overbanking is stronger and the pilot must hold off bank.","Climbing → 更甚。","check"),
  _pofC("pof.va","🎚️","What is design manoeuvring speed VA?","The speed at or below which full single-axis control deflection in smooth air will stall the wing before structural limit is exceeded.","一軸一次 full deflection。"),
  _pofC("pof.va","🧮","Stall speed is 60 kt. Estimate VA and load factor at that speed.","VA ≈ 1.7 × 60 = 102 kt; load factor ≈ 1.7² = 2.89 g.","FAA 經驗法則。"),
  _pofC("pof.va","⚠️","Does flying below VA protect against all structural damage?","No; multiple or rapidly alternating inputs, or combined control inputs, can still overstress the aircraft.","唔係完全保護。"),
  _pofC("pof.vg","📊","What does a V-g diagram show?","The flight envelope: load factor against airspeed, limited by stall on the left and structural limits and VNE on the right.","包絡圖。"),
  _pofC("pof.limitload","🔩","What are limit and ultimate load factors?","Limit load is the maximum expected in service (permanent deformation beyond it); ultimate is 1.5 times limit, where failure may occur.","Safety factor 1.5。"),
  _pofC("pof.limitload","🔢","What are the limit load factors for normal, utility and acrobatic category?","Normal +3.8/−1.52 g, utility +4.4/−1.76 g, acrobatic +6.0/−3.0 g.","FAA 表。"),
  _pofC("pof.climb","🧗","How does an aircraft climb?","Using excess thrust (or power) over drag, not extra lift; lift is about equal to or slightly less than weight in a steady climb.","Excess thrust。"),
  _pofC("pof.climb","⬇️","What happens to the forces in a glide?","Weight has a forward component along the flight path, replacing thrust.","Weight 前向分力。"),
  _pofC("pof.vxvy","🧗","Distinguish Vx and Vy.","Vx gives the best angle of climb (maximum excess thrust, obstacle clearance); Vy gives best rate of climb (maximum excess power, least time).","Vx < Vy。"),
  _pofC("pof.vxvy","📋","What are the DA40 Vx and Vy in the briefing?","Vx 67 KIAS and Vy 76 KIAS.","ENZO 數據。"),
  _pofC("pof.powercurve","📉","What is the back of the power curve?","Flying slower than minimum-power speed, where reducing speed requires more power; it is a speed-unstable region.","Region of reverse command。","check"),
  _pofC("pof.glide","🪂","At what speed do you get the best glide distance?","At the speed for L/DMAX (minimum drag); headwind reduces distance and flap or a windmilling prop reduces the ratio.","Best glide。"),
  _pofC("pof.glide","⚖️","Does weight change the glide ratio?","No; a heavier aircraft glides at a higher airspeed with the same ratio in still air.","ratio 同，speed快。"),
  _pofC("pof.perf","🏜️","How do weight and density altitude affect climb?","Greater weight and higher density altitude both reduce climb angle and rate because excess thrust/power falls.","差兩樣。"),
  _pofC("pof.ltt","⬅️","What are the four left-turning tendencies?","Torque reaction, corkscrew slipstream, gyroscopic precession and P-factor (asymmetric propeller loading).","適用順時針 prop。"),
  _pofC("pof.ltt","⏳","When are left-turning tendencies strongest?","At high power, low airspeed and high AoA, such as take-off and climb; counter with rudder.","Takeoff/climb。"),
  _pofC("pof.torque","🔃","What is torque reaction?","As the engine and propeller turn clockwise, the airframe reacts by rolling counter-clockwise (left); on the ground this loads the left wheel and yaws left.","Newton 3。"),
  _pofC("pof.pfactor","🍴","Explain P-factor.","At high AoA, the down-going blade has greater angle of attack and thrust, shifting the thrust centre right and yawing the nose left.","下行 blade 咬位大。"),
  _pofC("pof.gyro","🪀","Explain gyroscopic precession of the propeller.","A force applied to the spinning prop acts 90° ahead in the direction of rotation; raising the tail on take-off yaws the nose left.","90° 後生效。"),
  _pofC("pof.corkscrew","🔩","What is the corkscrew effect?","The propeller's spiralling slipstream hits the fin from one side, yawing the aircraft left, strongest at high power and low speed.","spin slipstream。"),
  _pofC("pof.weathercock","🌬️","What is weathercocking?","The tendency of the aircraft to yaw into wind because the fin acts like a weathervane.","向風。"),
  _pofC("pof.critengine","2️⃣","What is the critical engine on a twin?","The engine whose failure most adversely affects performance and handling; with clockwise props it is the left engine, due to P-factor.","順時針 prop → 左。"),
  _pofC("pof.critengine","🧊","How does VMC vary with altitude?","For unsupercharged engines VMC decreases with altitude as engine power falls.","altitude ↑ VMC ↓。"),
  _pofC("pof.groundeffect","🛬","What is ground effect?","Within about one wingspan of the ground, downwash and tip vortices are restricted, reducing induced drag and increasing lift.","Float。"),
  _pofC("pof.groundeffect","🛫","What happens as you climb out of ground effect?","Induced drag rises and AoA must increase to hold lift, so thrust required increases.","take-off離地後。"),
  _pofC("pof.wake","🌪️","What conditions produce the strongest wake turbulence?","A heavy, clean (flaps up) aircraft flying slowly, such as on take-off and landing.","重、慢、clean。"),
  _pofC("pof.wake","🛬","How do you avoid wake turbulence on landing behind a heavy aircraft?","Fly above its flight path and land beyond its touchdown point.","高過佢、落地點之後。"),
  _pofC("pof.machnum","🔊","Define Mach number.","The ratio of true airspeed to the local speed of sound.","TAS ÷ a。"),
  _pofC("pof.machnum","🧮","Speed of sound depends on what?","Only on air temperature (a = √(γRT)); about 661 kt at ISA sea level.","高空冷 → a 細。"),
  _pofC("pof.regimes","🗺️","Name the flow regimes by Mach number.","Subsonic (below ~0.75), transonic (~0.75–1.2), supersonic (1.2–5), hypersonic (above 5).","大約值。"),
  _pofC("pof.mcrit","🎯","What is critical Mach number?","The freestream Mach number at which local airflow somewhere on the wing first reaches Mach 1.","局部 M=1。"),
  _pofC("pof.mcrit","⬆️","How can critical Mach number be raised?","Use thin airfoils, wing sweepback or a supercritical section.","三法。"),
  _pofC("pof.wavedrag","📈","What is wave drag?","A sharp drag rise when shocks form on the wing, because of energy loss in the shock and separation behind it.","Drag divergence。"),
  _pofC("pof.wavedrag","🎬","Describe the shock development as Mach number increases past Mcrit.","A normal shock forms on the upper surface, strengthens and moves aft, a lower-surface shock appears, and near Mach 1 a bow wave forms with large drag rise.","POF05 序列。"),
  _pofC("pof.shocktypes","💥","Compare normal shock, oblique shock and expansion fan.","Normal: supersonic to subsonic, no direction change, high loss; oblique: stays supersonic with a turn; expansion fan: flow accelerates and pressure falls with low loss.","POF05 表。"),
  _pofC("pof.machtuck","🔻","What is Mach tuck?","A nose-down pitching tendency at transonic speeds due to aft CP shift and reduced tail effectiveness from shock-induced separation.","CP 後移。"),
  _pofC("pof.machtuck","🛠️","How is Mach tuck handled?","By sweepback and anti-shock bodies to weaken shocks, a trimmable stabiliser and a Mach trim system.","Fix。"),
  _pofC("pof.sweep","🛩️","How does sweepback raise critical Mach number?","Only the velocity component perpendicular to the leading edge matters for shocks, so the effective Mach number is reduced.","M·cosΛ。"),
  _pofC("pof.sweep","⚠️","What are the low-speed problems of a swept wing?","Lower CLmax and tip stall first, causing early loss of aileron control and little buffet warning.","Tip stall。"),
  _pofC("pof.fwdsweep","↕️","What is variable sweep?","Wings that can be swept for high speed and unswept for low speed, as on the F-14.","Swing-wing。"),
  _pofC("pof.supercrit","🥞","What are the features of a supercritical airfoil?","A flat upper surface, large nose radius and aft camber so the shock is weaker and forms further aft.","Aft-loaded。"),
  _pofC("pof.trimstab","🎚️","Why use a trimmable horizontal stabiliser on jets?","Moving the whole stabiliser gives enough nose-up moment to counter Mach tuck and large CG or speed changes.","整塊 trim。"),
  _pofC("pof.vmo","🚥","What do Vmo and Mmo mean?","Maximum operating speed (IAS) and maximum operating Mach number; the barber pole marks the limit.","紅白條。"),
  _pofC("pof.vmo","🪤","What is coffin corner?","The altitude where stall speed and critical-Mach-related high-speed buffet speed converge, leaving almost no speed margin.","Buffet boundaries 相遇。"),
  _pofC("pof.hsctrl","🧰","Name devices that help jet handling at high speed.","Yaw damper (Dutch roll), vortex generators, Mach trim, outboard aileron lockout and roll spoilers.","列舉。","check"),
  _pofC("pof.supfoil","🔪","Why are supersonic airfoils thin with sharp leading edges?","A sharp leading edge produces an attached oblique shock rather than a strong detached bow wave, and thin sections reduce wave drag.","減 wave drag。","check"),
  _pofC("pof.arearule","⏳","What is the transonic area rule?","Shape the total cross-sectional area distribution smoothly along the aircraft (waisted fuselage at the wing) to reduce wave drag.","蜂腰。","check"),
  _pofC("pof.intakes","🕳️","Why must supersonic intakes slow the airflow?","Jet compressors need subsonic air, so ramps or spikes use oblique shocks, then a weak normal shock, to decelerate the flow.","減速。","check"),
  _pofC("pof.u.hows","🔬","What are the three ways to study aerodynamics?","Theory, experiment (wind tunnel/flight test) and computation (CFD), used together to cross-check.","三種方法。","check"),
  _pofC("pof.u.variables","📏","What is the dynamic pressure and the lift coefficient?","q = ½ρV² and CL = L/(q·S).","無因次化。","check"),
  _pofC("pof.u.reynolds","🔢","What is Reynolds number and why does it matter?","Re = ρVL/μ, the ratio of inertial to viscous forces; it governs transition to turbulence and similarity between model and full scale.","Re 大 = inertia。"),
  _pofC("pof.u.conserve","📚","Which conservation laws underlie fluid flow?","Conservation of mass (continuity), momentum (F = ma) and energy.","三條。","check"),
  _pofC("pof.u.streamlines","〰️","What is a streamline?","A line whose tangent at every point is the local velocity direction; no flow crosses it, and in steady flow it equals pathline and streakline.","Steady 時三線合一。"),
  _pofC("pof.u.vorticity","🌀","What is the difference between rotational and irrotational flow?","Vorticity is the curl of velocity; zero vorticity (irrotational) flow allows a velocity potential, while viscous boundary layers are rotational.","ζ = ∇×V。"),
  _pofC("pof.u.bernlaplace","📜","What assumptions does Bernoulli's equation need?","Steady, inviscid, incompressible flow, no body force; it holds along a streamline, or everywhere if the flow is irrotational.","假設。"),
  _pofC("pof.u.elem","🧩","Name the elementary flows.","Uniform flow, source/sink, doublet and vortex; they can be superposed because Laplace's equation is linear.","可疊加。"),
  _pofC("pof.u.cylinder","⭕","Why does potential flow around a non-spinning cylinder give no drag?","Symmetry gives zero net pressure force (d'Alembert's paradox); adding a vortex gives lift.","d'Alembert paradox。"),
  _pofC("pof.u.kj","📘","State the Kutta–Joukowski theorem.","Lift per unit span equals ρ V∞ Γ, where Γ is circulation.","L' = ρVΓ。"),
  _pofC("pof.u.kutta","🔚","What does the Kutta condition state?","Flow leaves the sharp trailing edge smoothly, which fixes the circulation and stagnation point.","後緣平順。"),
  _pofC("pof.u.panel","🧱","What is a panel method?","It splits the body surface into panels carrying source or vortex strengths so that streamlines follow the body; source panels cannot model lift.","Boundary condition。"),
  _pofC("pof.u.thin","📐","What does thin airfoil theory predict for lift slope?","CL = 2π(α − α₀), i.e. about 0.11 per degree.","2π/rad ≈ 0.11/°。"),
  _pofC("pof.u.thin","🧮","A symmetric thin airfoil is at 5° AoA. Estimate CL.","CL = 2π × (5° in rad = 0.0873) ≈ 0.55.","計算。"),
  _pofC("pof.u.liftcause","💡","Summarise the complete explanation of lift.","Flow accelerates over the curved upper surface, sticks to the surface (Coandă) and leaves the trailing edge smoothly (Kutta), turning air downward; momentum change gives the force.","整合。"),
  _pofC("pof.u.dragsep","🌊","Why does flow separate?","An adverse pressure gradient (rising pressure downstream) decelerates the near-wall flow until it reverses and detaches.","Adverse gradient。"),
  _pofC("pof.u.dragsep","📊","What are the two sources of airfoil drag?","Skin friction from viscosity and pressure drag from separation or pressure imbalance.","兩種。"),
  _pofC("pof.u.finite","➡️","What is induced angle of attack?","The downward tilt of local relative wind caused by wing downwash, which reduces effective AoA and tilts lift aft.","α_eff = α − α_i。"),
  _pofC("pof.u.biot","🧲","What do Helmholtz's vortex rules say?","Vortex strength is constant along a filament, and a vortex cannot end in the fluid; it must close or end at a boundary.","→ horseshoe vortex。"),
  _pofC("pof.u.lifting","🧮","Write the induced drag coefficient from lifting-line theory.","CDi = CL²/(π·e·AR), with e = 1 for an elliptical lift distribution.","e ≤ 1。"),
  _pofC("pof.u.lifting","🔁","Why is an elliptical lift distribution special?","It gives constant induced angle of attack and the minimum induced drag for a given lift and span.","最小 CDi。"),
  _pofC("pof.u.compress","🔥","When must compressibility be considered?","Above about Mach 0.3, where density changes exceed roughly 5%.","M>0.3。"),
  _pofC("pof.u.compress","❄️","Write the speed of sound formula.","a = √(γ·R·T), where γ = 1.4 and R = 287 J/(kg·K) for air.","只靠temperature。"),
  _pofC("pof.u.normal","💢","What happens to M, p and T across a normal shock?","Mach drops from above 1 to below 1, while static pressure, temperature and density rise; total pressure drops.","P0 損失。"),
  _pofC("pof.u.oblique","📐","How are oblique shocks related to normal shocks?","Only the velocity component normal to the shock changes; the tangential component is unchanged, so use Mn1 = M1 sinβ.","Mn = M sinβ。"),
  _pofC("pof.u.oblique","🌬️","What is an expansion fan?","A smooth, isentropic acceleration where supersonic flow turns away from itself, described by the Prandtl–Meyer function.","P ↓ M ↑。"),
  _pofC("pof.u.hyper","🚀","Why does air chemistry matter at hypersonic speeds?","High temperatures excite vibration and then dissociate O₂ and N₂ and ionise the gas, so the perfect-gas model breaks down.","真實氣體效應。"),
  _pofC("pof.u.bio","🐦","Why do small animals fly differently from aircraft?","At low Reynolds number viscosity dominates, so flapping unsteady lift and added-mass effects become important.","低 Re。"),
  _pofC("pof.liftmyth","🙅","Name two common misconceptions about lift.","'Equal transit time' (air must rejoin at the trailing edge) and 'air bounces off the underside'; each captures only part of the physics.","都唔完整。"),
  _pofC("pof.cp","🎯","Why does the centre of pressure matter for stability?","Lift acts through the CP; its position relative to the CG, and how it moves with AoA or Mach number, sets the pitching moment.","CP vs CG。"),
  _pofC("pof.vortices","🧭","Which way do wingtip vortices rotate near the ground, and why does it matter?","They roll off outward from the aircraft; a crosswind can hold the upwind vortex over the runway.","近地向外。"),
  _pofC("pof.winglet","🪽","Name other ways of reducing wingtip-vortex drag.","Increase aspect ratio, use taper or twist, fit wing fences, modified wingtips or winglets.","列舉。"),
  _pofC("pof.spinrec","🆘","Why does spin recovery start with rudder rather than pulling back?","Opposite rudder stops the yaw (autorotation) first; pulling back would keep the wings stalled.","停 yaw 先。","check"),
  _pofC("pof.icing","🧊","Why is wing frost dangerous even if it is thin?","It roughens the surface, causing early separation, reducing lift and increasing stall speed.","薄都危險。"),
  _pofC("pof.axes","🎯","Where do all three axes intersect?","At the centre of gravity; aircraft rotate about the CG.","CG。"),
  _pofC("pof.aileron","🔼","Which way does the aileron on the rising wing move?","It moves down on the wing going up (more lift and drag) and up on the wing going down.","相反方向。"),
  _pofC("pof.ailerontypes","🔀","What is a flaperon?","A control surface combining aileron and flap functions.","兩用。"),
  _pofC("pof.elevator","🔝","What is the tertiary effect of a pitch change?","Altitude and airspeed change as the aircraft climbs or descends.","altitudespeed變。"),
  _pofC("pof.tail","🅃","Name tail configurations other than conventional.","T-tail, stabilator, canard and V-tail.","列舉。"),
  _pofC("pof.spoilers","🛬","Why are ground spoilers used after landing?","They dump lift so weight goes on the wheels, improving braking.","增加煞車效果。"),
  _pofC("pof.flaptypes","🪽","Which flap type adds wing area?","The Fowler flap, which slides rearward as well as down.","加面積。"),
  _pofC("pof.tabs","🧰","What is a control tab used for?","Manual reversion on jets: movement of the control wheel moves the tab, which moves the surface aerodynamically.","Hydraulic 失效。"),
  _pofC("pof.stabcontrol","🔀","What does relaxed stability mean?","A deliberately low static stability to improve manoeuvrability, requiring fly-by-wire to keep the aircraft controllable.","FBW。","check"),
  _pofC("pof.longstab","⚓","What does the tailplane normally do in cruise?","It produces a small downforce that balances the nose-down moment of the wing lift acting behind the CG.","Tail download。"),
  _pofC("pof.latstab","📏","What is keel effect?","Side area above the CG gives a restoring roll when the aircraft sideslips, helping lateral stability in high-wing aircraft.","高翼機。"),
  _pofC("pof.dirstab","🪶","What happens when the aircraft yaws relative to the airflow?","The fin sees a sideslip angle, produces a side force and yaws the nose back into the relative wind.","自動回正。"),
  _pofC("pof.dutch","🔁","Why is spiral instability preferred to Dutch roll in design?","Spiral divergence is slow and easy to correct, while Dutch roll is an oscillation that is hard to control.","設計取捨。"),
  _pofC("pof.spiralinst","🔧","Why can't an aircraft be flown hands-off indefinitely?","Because of spiral instability; a bank will slowly steepen unless corrected.","Spiral。"),
  _pofC("pof.vg","📐","Why is the left side of the V-g diagram curved?","Because lift (and load factor) at the stall is proportional to V squared, so the wing stalls before the limit load is reached.","n ∝ V²。"),
  _pofC("pof.powercurve","📉","At the back of the power curve, what happens when you pull back?","Speed drops and drag rises, so you need more power to hold altitude; it is why approach speed control matters.","要加 power。","check"),
  _pofC("pof.perf","🌬️","How does a headwind affect climb over the ground?","Airspeed climb performance is unchanged but the ground-track climb gradient is steeper.","對地 gradient 較斜。"),
  _pofC("pof.torque","🛞","On the take-off roll, why does torque reaction pull to the left?","The left main gear is pressed harder onto the runway, giving more friction there, adding a left yaw.","左輪摩擦大。"),
  _pofC("pof.pfactor","↗️","When is P-factor zero?","When the propeller shaft is aligned with the relative airflow (low AoA, cruise).","Shaft ∥ airflow。"),
  _pofC("pof.gyro","🌀","What two properties does a gyroscope have?","Rigidity in space and precession.","Rigidity + precession。"),
  _pofC("pof.corkscrew","💨","Why does corkscrew effect fade with speed?","As forward speed increases the spiral slipstream elongates and strikes the fin less strongly.","拉長變弱。"),
  _pofC("pof.weathercock","🌬️","Which way does the nose yaw with a left crosswind on take-off?","To the left, into the wind.","向風。"),
  _pofC("pof.regimes","🗺️","What did the Airspace slides give as the incompressible range?","Below about Mach 0.3, with compressibility negligible up to about 0.5.","POF05。"),
  _pofC("pof.shocktypes","📊","Which shock type has the highest energy loss?","The normal shock; expansion waves have small loss.","Normal 損失最大。"),
  _pofC("pof.fwdsweep","🛩️","Name an aircraft with forward sweep.","The Russian Su-47 experimental fighter.","POF05。"),
  _pofC("pof.supercrit","📦","Why is the supercritical airfoil aft-loaded?","With a flat upper surface the lift is carried by the rear camber at subsonic speed, and by the forward supersonic region at transonic speed.","POF05。"),
  _pofC("pof.trimstab","🔄","What drives a jet's trimmable stabiliser?","Hydraulic actuators and the autopilot.","POF05。"),
  _pofC("pof.hsctrl","🌀","What does a yaw damper do?","It automatically applies rudder to damp Dutch roll.","抑制振盪。","check"),
  _pofC("pof.supfoil","📉","How does wave drag scale with thickness in supersonic flow?","In linear theory it rises with the square of thickness-to-chord ratio.","t/c 平方。","check"),
  _pofC("pof.arearule","🎯","Which aircraft look like the area rule?","Fuselages narrowed at the wing root, 'Coke-bottle' shapes.","蜂腰。","check"),
  _pofC("pof.intakes","⚙️","What is the problem if a shock sits at the intake lip?","Flow spillage and unstable shock position cause drag and engine instability, so intakes are designed to control shock position.","控制 shock 位置。","check"),
  _pofC("pof.u.hows","🧪","Why use wind tunnels if we have CFD?","They validate theory and simulations and cover cases too complex to compute.","驗證。","check"),
  _pofC("pof.u.variables","📐","How are lift and drag defined relative to the freestream?","Lift is perpendicular to V∞, drag parallel to it.","⟂ / ∥。","check"),
  _pofC("pof.u.reynolds","🧰","Why must model tests match Reynolds and Mach number?","Dynamic similarity requires the same non-dimensional numbers, so forces scale properly.","Similarity。"),
  _pofC("pof.u.conserve","⚗️","What equation follows from conservation of momentum with no viscosity?","Euler's equation; integrating along a streamline gives Bernoulli.","Euler → Bernoulli。","check"),
  _pofC("pof.u.streamlines","💧","What does stream function Δψ represent?","The volume (mass) flow between two streamlines per unit depth.","Δψ = flux。"),
  _pofC("pof.u.vorticity","♾️","What is circulation?","The line integral of velocity around a closed loop; by Stokes' theorem it equals the integrated vorticity inside.","∮V·ds。"),
  _pofC("pof.u.bernlaplace","🧮","What is Laplace's equation for velocity potential?","∇²φ = 0 for irrotational incompressible flow.","線性 → 可疊加。"),
  _pofC("pof.u.elem","🧱","How is a doublet formed?","By bringing a source and a sink of equal strength together.","Source + sink。"),
  _pofC("pof.u.cylinder","🛢️","How does adding a vortex to the cylinder create lift?","It shifts the stagnation points and makes the velocity on top higher than the bottom, giving a pressure difference.","Γ → lift。"),
  _pofC("pof.u.kj","🪢","Does the aircraft wing have to spin for Kutta–Joukowski to apply?","No; camber and angle of attack produce circulation without rotation.","唔使轉。"),
  _pofC("pof.u.kutta","🗜️","Why is the Kutta condition needed?","Without it potential flow allows infinite solutions; the condition picks the physical circulation.","選唯一解。"),
  _pofC("pof.u.panel","💻","What is a boundary condition used in panel methods?","No-penetration: velocity normal to the surface is zero.","無穿透。"),
  _pofC("pof.u.liftcause","🧵","What is the Coandă effect in lift?","Moving flow tends to stay attached to a curved surface, helping the flow turn.","貼面。"),
  _pofC("pof.u.finite","🌬️","Why is real lift less than 2D theory predicts?","Finite span creates downwash that reduces effective AoA and adds induced drag.","三維效應。"),
  _pofC("pof.u.biot","📏","What is the induced speed from a semi-infinite vortex at distance h?","V = Γ/(4πh), half that of an infinite line vortex.","一半。"),
  _pofC("pof.u.normal","📈","What is the pressure ratio across a normal shock?","p2/p1 = 1 + 2γ/(γ+1) × (M1² − 1).","M1=2 → 4.5。"),
  _pofC("pof.u.hyper","🔥","Which Knudsen number indicates continuum flow?","Kn below about 0.03 (mean free path small compared with the body).","Continuum。"),
  _pofC("pof.u.bio","🐠","What is lift-based thrust?","Using lateral flapping motion to tilt lift into thrust, much like a tilted wing.","Flapping。")
  ],
  anims:[
  {title:"Lift → AoA → Stall",hint:"拉 AoA 滑桿：睇 lift 箭咀同airflow（>16° 分離）",build(box,H){
    const svg=H.svg(box,700,340),say=H.note(box);H.marker(svg,"ah1","#fbbf24");
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    const CX=330,CY=125,P=[];
    for(let i=0;i<26;i++){const y0=30+i*(190/25);P.push({y0:y0,x:(i*53)%700,dy:0,c:H.el("circle",{r:2.6,fill:"#7dd3fc"},svg)})}
    const wing=H.el("g",{},svg);H.el("path",{d:"M-110,0 C-80,-22 40,-22 110,2 C40,10 -60,10 -110,0Z",fill:"#e2e8f0"},wing);
    const arrow=H.el("line",{stroke:"#fbbf24","stroke-width":5,"marker-end":"url(#ah1)"},svg);
    T(20,22,"relative wind →","#7dd3fc",12);const lab=T(CX+12,50,"LIFT","#fbbf24",13);
    // CL plot
    const X0=440,Y0=325,W=230,Hh=85;
    H.el("rect",{x:X0,y:Y0-Hh,width:W,height:Hh,fill:"none",stroke:"#475569"},svg);T(X0,Y0-Hh-6,"CL vs AoA","#94a3b8",11);T(X0+W,Y0+12,"AoA →","#94a3b8",10,"end");
    const CL=a=>a<=16?0.083*(a+2):Math.max(0.35,1.49-0.14*(a-16));
    let pts="";for(let a=0;a<=25;a+=1)pts+=(X0+a/25*W)+","+(Y0-CL(a)/1.6*Hh)+" ";
    H.el("polyline",{points:pts,fill:"none",stroke:"#94a3b8","stroke-width":2},svg);
    const dot=H.el("circle",{r:5,fill:"#fbbf24"},svg);let a=5;
    H.slider(box,"AoA °",0,25,5,v=>{a=v;const c=CL(a),st=a>16;
      wing.setAttribute("transform",`translate(${CX},${CY}) rotate(${a})`);
      const L=15+c*75;arrow.setAttribute("x1",CX);arrow.setAttribute("y1",CY);arrow.setAttribute("x2",CX);arrow.setAttribute("y2",CY-L);
      arrow.setAttribute("stroke",st?"#f87171":"#fbbf24");dot.setAttribute("cx",X0+a/25*W);dot.setAttribute("cy",Y0-c/1.6*Hh);dot.setAttribute("fill",st?"#f87171":"#fbbf24");
      lab.setAttribute("y",CY-L-6);
      say(st?"STALL：上面flow separation（亂），CL 跌，drag 升。減 AoA 先 recover。":a>13?"接近 critical AoA（~16°）：stall warning 響":"AoA ↑ → CL ↑ → lift ↑（線性）")});
    H.loop(()=>{P.forEach(p=>{let u=p.y0<CY;let d=(p.x-CX)/90,bump=Math.exp(-d*d);
      p.x+=2.1*(1+(u?0.7:0.15)*bump);if(p.x>700){p.x=0}
      let dy=u?-bump*(10+a*1.3):bump*(4+a*0.6);
      if(p.x>CX)dy+=Math.min(1,(p.x-CX)/90)*a*1.1;
      const st=a>16&&u&&p.x>CX-30;if(st)dy+=(Math.random()-0.5)*26*Math.min(1,(a-16)/5);
      p.c.setAttribute("cx",p.x);p.c.setAttribute("cy",p.y0+dy);p.c.setAttribute("fill",st?"#f87171":"#7dd3fc")})});
  }},
  {title:"Four Forces & Climb",hint:"加 Thrust：T > D → climb角 γ",build(box,H){
    const svg=H.svg(box,700,300),say=H.note(box);
    ["L","T","D","W"].forEach((n,i)=>H.marker(svg,"af"+n,["#4ade80","#38bdf8","#f87171","#fbbf24"][i]));
    const CX=330,CY=150,S=1.5,Dd=20,Wt=100;
    const plane=H.el("g",{},svg);H.el("ellipse",{cx:0,cy:0,rx:62,ry:9,fill:"#e2e8f0"},plane);H.el("path",{d:"M-10,0 L-30,-4 L-30,4Z M-10,0 L-35,26 L-22,26Z",fill:"#94a3b8"},plane);H.el("path",{d:"M-60,0 L-72,-24 L-52,-4Z",fill:"#94a3b8"},plane);
    const mk=(c,id)=>H.el("line",{stroke:c,"stroke-width":5,"marker-end":"url(#"+id+")"},svg);
    const aL=mk("#4ade80","afL"),aT=mk("#38bdf8","afT"),aD=mk("#f87171","afD"),aW=mk("#fbbf24","afW");
    const tx=(c,s)=>{const t=H.el("text",{fill:c,"font-size":14,"font-weight":700,"text-anchor":"middle"},svg);t.textContent=s;return t};
    const tL=tx("#4ade80","LIFT"),tT=tx("#38bdf8","THRUST"),tD=tx("#f87171","DRAG"),tW=tx("#fbbf24","WEIGHT");
    const set=(l,t,x1,y1,x2,y2,dx,dy)=>{l.setAttribute("x1",x1);l.setAttribute("y1",y1);l.setAttribute("x2",x2);l.setAttribute("y2",y2);t.setAttribute("x",x2+dx);t.setAttribute("y",y2+dy)};
    H.slider(box,"Thrust (Drag = 20)",0,50,20,v=>{
      const s=Math.max(-1,Math.min(1,(v-Dd)/Wt)),g=Math.asin(s),c=Math.cos(g);
      plane.setAttribute("transform",`translate(${CX},${CY}) rotate(${-g*180/Math.PI})`);
      const ux=Math.cos(g),uy=-Math.sin(g),px=-Math.sin(g),py=-Math.cos(g);
      set(aL,tL,CX,CY,CX+px*Wt*c*S*0.9,CY+py*Wt*c*S*0.9,0,-8);
      set(aT,tT,CX+ux*70,CY+uy*70,CX+ux*(70+v*S*1.4),CY+uy*(70+v*S*1.4),30,-6);
      set(aD,tD,CX-ux*70,CY-uy*70,CX-ux*(70+Dd*S*1.4),CY-uy*(70+Dd*S*1.4),-28,-6);
      set(aW,tW,CX,CY,CX,CY+Wt*S*0.9,0,16);
      say(v>Dd?"T > D（excess thrust）→ climb γ = "+(g*180/Math.PI).toFixed(1)+"°；Lift ≈ W·cosγ，weight 有後向分力":v<Dd?"T < D → 減速／descent γ = "+(g*180/Math.PI).toFixed(1)+"°":"T = D, L = W：level flight")});
  }},
  {title:"Drag Curve & Best L/D",hint:"拉speed同weight：induced vs parasite，最低 drag speed",build(box,H){
    const svg=H.svg(box,700,300),say=H.note(box);
    const X0=60,X1=660,Y0=270,Y1=30,V0=30,V1=190,DM=200;
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    H.el("path",{d:`M${X0},${Y1} L${X0},${Y0} L${X1},${Y0}`,fill:"none",stroke:"#64748b"},svg);
    T(X1,Y0+16,"Airspeed (kt) →","#94a3b8",11,"end");T(X0+4,Y1+2,"Drag","#94a3b8",11);
    const sx=v=>X0+(v-V0)/(V1-V0)*(X1-X0),sy=d=>Y0-d/DM*(Y0-Y1);
    const mkl=c=>H.el("polyline",{fill:"none",stroke:c,"stroke-width":2.5},svg);
    const lp=mkl("#f87171"),li=mkl("#38bdf8"),lt=mkl("#e2e8f0");
    T(sx(160),sy(120),"Parasite ∝ V²","#f87171",12);T(sx(36),sy(70),"Induced ∝ 1/V²","#38bdf8",12);T(sx(95),sy(125),"Total","#e2e8f0",12);
    const vl=H.el("line",{stroke:"#4ade80","stroke-dasharray":"4 4"},svg),dot=H.el("circle",{r:6,fill:"#fbbf24"},svg);
    let V=75,w=1;const A=0.0045,B=142383;
    const par=v=>A*v*v,ind=(v,w)=>B*w*w/(v*v);
    function draw(){let a="",b="",c="";for(let v=V0;v<=V1;v+=2){a+=sx(v)+","+sy(par(v))+" ";b+=sx(v)+","+sy(Math.min(DM,ind(v,w)))+" ";c+=sx(v)+","+sy(Math.min(DM,par(v)+ind(v,w)))+" "}
      lp.setAttribute("points",a);li.setAttribute("points",b);lt.setAttribute("points",c);
      const vmd=75*Math.sqrt(w);vl.setAttribute("x1",sx(vmd));vl.setAttribute("x2",sx(vmd));vl.setAttribute("y1",Y0);vl.setAttribute("y2",Y1);
      const tot=par(V)+ind(V,w);dot.setAttribute("cx",sx(V));dot.setAttribute("cy",sy(Math.min(DM,tot)));
      say("V = "+V+" kt：total drag "+tot.toFixed(0)+"；L/D ≈ "+(700*w/tot).toFixed(1)+"；min-drag（best glide）speed ≈ "+vmd.toFixed(0)+" kt（綠線）。"+(V<vmd-3?" 低過佢：induced 主導（back of curve）":V>vmd+3?" 高過佢：parasite 主導":" 呢度 = L/DMAX"))}
    H.slider(box,"Weight (×)",0.8,1.3,1,v=>{w=v;draw()},0.05);
    H.slider(box,"Airspeed kt",40,180,75,v=>{V=v;draw()},1);
  }},
  {title:"Pitch Stability: CG vs Neutral Point",hint:"移 CG，撳 Disturb：CG 喺 NP 前面先會自己返正（概念模型）",build(box,H){
    const svg=H.svg(box,700,280),say=H.note(box);
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    const ac=H.el("g",{},svg);H.el("ellipse",{cx:0,cy:0,rx:100,ry:12,fill:"#e2e8f0"},ac);H.el("path",{d:"M-100,0 L-125,-30 L-105,-30 L-80,0Z",fill:"#94a3b8"},ac);H.el("path",{d:"M-10,4 L-40,34 L-18,34 L20,4Z",fill:"#94a3b8"},ac);H.el("path",{d:"M-120,-2 L-150,-4 L-150,4Z",fill:"#94a3b8"},ac);
    const hor=H.el("line",{x1:150,x2:550,y1:110,y2:110,stroke:"#475569","stroke-dasharray":"5 5"},svg);T(555,114,"horizon","#64748b",11);
    const BX=150,BW=400,BY=235;
    H.el("rect",{x:BX,y:BY-8,width:BW,height:16,fill:"#334155"},svg);T(BX,BY+30,"Leading edge (0%)","#94a3b8",11);T(BX+BW,BY+30,"50% chord","#94a3b8",11,"end");
    const NP=35;H.el("rect",{x:BX+NP/50*BW-3,y:BY-22,width:6,height:44,fill:"#4ade80"},svg);T(BX+NP/50*BW,BY-28,"Neutral point","#4ade80",12,"middle");
    const cgm=H.el("circle",{cy:BY,r:10,fill:"#fbbf24"},svg),cgt=T(0,BY+4,"CG","#0f172a",10,"middle");
    let th=0,w=0,m=0.15;
    function setcg(v){m=(NP-v)/100;cgm.setAttribute("cx",BX+v/50*BW);cgt.setAttribute("x",BX+v/50*BW);
      say(m>0.03?"CG 喺 NP 前面：stable → 擾動後振盪縮細（positive static + dynamic）":m>=-0.03?"CG ≈ NP：neutral，唔會自己返正":"CG 喺 NP 後面：unstable → 越偏越遠（aft CG limit 就係防呢樣）")}
    H.slider(box,"CG 位置 (% chord)",10,50,20,setcg,1);
    H.button(box,"Disturb（nose +15°）",()=>{th=15;w=0});
    H.loop(()=>{const dt=1/60;const acc=-m*140*th-1.0*w;w+=acc*dt;th+=w*dt*1;if(th>70){th=70;w=0}if(th<-70){th=-70;w=0}
      ac.setAttribute("transform",`translate(350,110) rotate(${-th})`)});
  }},
  {title:"Turn: Bank → Load Factor → Stall Speed",hint:"拉 Bank：lift 斜、n = 1/cosφ、Vs ×√n、radius 改變",build(box,H){
    const svg=H.svg(box,700,300),say=H.note(box);H.marker(svg,"at1","#4ade80");H.marker(svg,"at2","#fbbf24");H.marker(svg,"at3","#38bdf8");
    const CX=230,CY=190,Wt=60;
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||13,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    const ac=H.el("g",{},svg);H.el("rect",{x:-100,y:-3,width:200,height:6,fill:"#e2e8f0"},ac);H.el("ellipse",{cx:0,cy:0,rx:12,ry:10,fill:"#cbd5e1"},ac);
    const ln=(c,id)=>H.el("line",{stroke:c,"stroke-width":4,"marker-end":"url(#"+id+")"},svg);
    const Lft=ln("#4ade80","at1"),Wgt=ln("#fbbf24","at2"),Hor=ln("#38bdf8","at3");
    Wgt.setAttribute("x1",CX);Wgt.setAttribute("y1",CY);Wgt.setAttribute("x2",CX);Wgt.setAttribute("y2",CY+Wt);
    const vl=H.el("line",{stroke:"#4ade80","stroke-dasharray":"3 4"},svg);
    T(CX+8,CY+Wt+4,"W","#fbbf24",13);const tl=T(0,0,"Lift","#4ade80",13);const th=T(0,0,"horizontal = centripetal","#38bdf8",12);
    const out=[T(470,60,"","#e2e8f0",15),T(470,95,"","#e2e8f0",15),T(470,130,"","#e2e8f0",15),T(470,165,"","#e2e8f0",15),T(470,200,"","#e2e8f0",15)];
    let b=30,V=100;
    function upd(){const p=b*Math.PI/180,c=Math.cos(p),n=1/c,L=Wt*n,Hh=Wt*Math.tan(p);
      ac.setAttribute("transform",`translate(${CX},${CY}) rotate(${b})`);
      const lx=CX+L*Math.sin(p),ly=CY-L*c;Lft.setAttribute("x1",CX);Lft.setAttribute("y1",CY);Lft.setAttribute("x2",lx);Lft.setAttribute("y2",ly);
      vl.setAttribute("x1",CX);vl.setAttribute("y1",CY);vl.setAttribute("x2",CX);vl.setAttribute("y2",CY-Wt);
      Hor.setAttribute("x1",CX);Hor.setAttribute("y1",CY-Wt);Hor.setAttribute("x2",CX+Hh);Hor.setAttribute("y2",CY-Wt);
      tl.setAttribute("x",lx+6);tl.setAttribute("y",ly-4);th.setAttribute("x",CX+Hh*0.5-40);th.setAttribute("y",CY-Wt-8);
      const v=V*0.5144,r=b>0?v*v/(9.81*Math.tan(p)):0,rate=b>0?9.81*Math.tan(p)/v*57.296:0;
      out[0].textContent="Load factor n = "+n.toFixed(2)+" g";out[1].textContent="Stall speed = 53 × √n = "+(53*Math.sqrt(n)).toFixed(0)+" kt";
      out[2].textContent="Lift needed = "+(n*100).toFixed(0)+"% of weight";out[3].textContent=b>0?"Radius @ "+V+" kt = "+r.toFixed(0)+" m":"Radius = ∞（直線）";out[4].textContent=b>0?"Rate of turn = "+rate.toFixed(1)+" °/s":"";
      say(n>3.8?"超過 normal category limit +3.8 g！":b>=60?"60° → 2 g：Vs 升 41%；加 AoA、加 power":"Bank 越大 → n 越大 → Vs 越高（以 Vs1 = 53 kt 為例）。Radius 只靠 TAS 同 bank。")}
    H.slider(box,"Bank °",0,80,30,v=>{b=v;upd()},1);
    H.slider(box,"TAS kt",60,200,100,v=>{V=v;upd()},5);
  }},
  {title:"P-Factor & Left Turning",hint:"提高nose／power：下行 blade thrust 大 → nose向左",build(box,H){
    const svg=H.svg(box,700,300),say=H.note(box);
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    const DX=170,DY=140,R=95;
    H.el("circle",{cx:DX,cy:DY,r:R,fill:"none",stroke:"#475569","stroke-dasharray":"4 4"},svg);T(DX,DY-R-8,"從駕駛位睇 prop（順時針）","#94a3b8",11,"middle");
    const b1=H.el("line",{stroke:"#e2e8f0","stroke-width":8,"stroke-linecap":"round"},svg),b2=H.el("line",{stroke:"#e2e8f0","stroke-width":8,"stroke-linecap":"round"},svg);
    T(DX-R-4,DY+4,"up-going","#94a3b8",11,"end");T(DX+R+4,DY+4,"down-going","#38bdf8",11);
    const bl=H.el("rect",{x:DX-70,width:26,fill:"#f87171"},svg),br=H.el("rect",{x:DX+44,width:26,fill:"#4ade80"},svg),tc=H.el("circle",{cy:DY+R+34,r:6,fill:"#fbbf24"},svg);
    T(DX,DY+R+54,"thrust centre（黃點）","#fbbf24",11,"middle");
    const ac=H.el("g",{},svg);H.el("rect",{x:-8,y:-70,width:16,height:130,rx:8,fill:"#e2e8f0"},ac);H.el("rect",{x:-85,y:-25,width:170,height:22,fill:"#94a3b8"},ac);H.el("rect",{x:-32,y:40,width:64,height:12,fill:"#94a3b8"},ac);
    H.el("path",{d:"M470,200 L470,60",stroke:"#475569","stroke-dasharray":"4 4"},svg);T(470,52,"原航向","#64748b",11,"middle");
    const yaw=T(560,250,"","#fbbf24",12,"middle");
    let a=10,pw=60,ang=0;
    function upd(){const k=a/25*(pw/100),tl=60*(1-0.5*a/25)*(0.5+pw/200),tr=60*(1+0.5*a/25)*(0.5+pw/200);
      bl.setAttribute("y",DY+R+30-tl);bl.setAttribute("height",tl);br.setAttribute("y",DY+R+30-tr);br.setAttribute("height",tr);
      tc.setAttribute("cx",DX+k*55);ac.setAttribute("transform",`translate(560,170) rotate(${-k*25})`);
      yaw.textContent="nose向左 "+(k*25).toFixed(0)+"°（需要 right rudder）";
      say(a<3?"低 AoA／level flight：prop disc ⟂ airflow → 左右 thrust 一樣 → 冇 P-factor":"高 AoA：down-going（右）blade 見到較大 relative speed → thrust 大 → thrust centre 右移 → yaw 左")}
    H.slider(box,"Nose attitude / AoA °",0,25,10,v=>{a=v;upd()},1);
    H.slider(box,"Power %",20,100,60,v=>{pw=v;upd()},5);
    H.loop(()=>{ang+=pw/100*9;const r=ang*Math.PI/180;b1.setAttribute("x1",DX+R*Math.cos(r));b1.setAttribute("y1",DY+R*Math.sin(r));b1.setAttribute("x2",DX-R*Math.cos(r));b1.setAttribute("y2",DY-R*Math.sin(r));
      b2.setAttribute("x1",DX+R*Math.cos(r+Math.PI/2));b2.setAttribute("y1",DY+R*Math.sin(r+Math.PI/2));b2.setAttribute("x2",DX-R*Math.cos(r+Math.PI/2));b2.setAttribute("y2",DY-R*Math.sin(r+Math.PI/2))});
  }},
  {title:"Gyroscopic Precession (Tail Up)",hint:"撳按鈕：力作用喺頂，效果喺旋轉方向 90° 後",build(box,H){
    const svg=H.svg(box,700,280),say=H.note(box);H.marker(svg,"ag1","#f87171");H.marker(svg,"ag2","#4ade80");
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||13,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    const DX=190,DY=140,R=90;
    H.el("circle",{cx:DX,cy:DY,r:R,fill:"none",stroke:"#475569"},svg);
    const sp=H.el("line",{stroke:"#e2e8f0","stroke-width":6,"stroke-linecap":"round"},svg),sp2=H.el("line",{stroke:"#e2e8f0","stroke-width":6,"stroke-linecap":"round"},svg);
    const rot=H.el("path",{d:`M${DX-30},${DY-R-14} A110,110 0 0 1 ${DX+30},${DY-R-14}`,fill:"none",stroke:"#94a3b8","marker-end":"url(#ag2)"},svg);T(DX,DY-R-26,"順時針旋轉","#94a3b8",11,"middle");
    const f1=H.el("line",{x1:DX,y1:DY-R-60,x2:DX,y2:DY-R-4,stroke:"#f87171","stroke-width":5,"marker-end":"url(#ag1)",opacity:0},svg),t1=T(DX+12,DY-R-40,"① 抬尾 → 力喺頂（向前）","#f87171",12);t1.setAttribute("opacity",0);
    const f2=H.el("line",{x1:DX+R+60,y1:DY,x2:DX+R+4,y2:DY,stroke:"#4ade80","stroke-width":5,"marker-end":"url(#ag2)",opacity:0},svg),t2=T(DX+R+20,DY-12,"② 效果喺右邊（+90°）","#4ade80",12);t2.setAttribute("opacity",0);
    H.el("path",{d:"M470,215 L470,70",stroke:"#475569","stroke-dasharray":"4 4"},svg);
    const ac=H.el("g",{},svg);H.el("rect",{x:-8,y:-70,width:16,height:130,rx:8,fill:"#e2e8f0"},ac);H.el("rect",{x:-85,y:-25,width:170,height:22,fill:"#94a3b8"},ac);H.el("rect",{x:-32,y:40,width:64,height:12,fill:"#94a3b8"},ac);
    const t3=T(560,250,"","#fbbf24",12,"middle");
    let t=-1,ang=0;
    H.button(box,"▶ Raise tail",()=>{t=0});H.button(box,"Reset",()=>{t=-1});
    say("Prop = gyroscope。力喺 rim 上 A 點 → 效果喺旋轉方向前 90° 嗰點。Tail-wheel 機抬尾最明顯。");
    H.loop(()=>{ang+=8;const r=ang*Math.PI/180;sp.setAttribute("x1",DX+R*Math.cos(r));sp.setAttribute("y1",DY+R*Math.sin(r));sp.setAttribute("x2",DX-R*Math.cos(r));sp.setAttribute("y2",DY-R*Math.sin(r));
      sp2.setAttribute("x1",DX+R*Math.cos(r+Math.PI/2));sp2.setAttribute("y1",DY+R*Math.sin(r+Math.PI/2));sp2.setAttribute("x2",DX-R*Math.cos(r+Math.PI/2));sp2.setAttribute("y2",DY-R*Math.sin(r+Math.PI/2));
      let y=0;if(t>=0&&t<400)t++;
      f1.setAttribute("opacity",t>5?1:0);t1.setAttribute("opacity",t>5?1:0);f2.setAttribute("opacity",t>70?1:0);t2.setAttribute("opacity",t>70?1:0);
      if(t>=0)y=Math.min(18,Math.max(0,(t-130)/6));
      ac.setAttribute("transform",`translate(560,150) rotate(${-y})`);t3.textContent=y>1?"nose yaw 向左":""})
  }},
  {title:"Mach, Shock & Critical Mach",hint:"加 Mach：supersonic 區同 shock 後移；加 sweep 睇 Mcrit",build(box,H){
    const svg=H.svg(box,700,340),say=H.note(box);
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    const X0=120,C=360,Y=120;
    for(let i=0;i<5;i++)H.el("line",{x1:20,x2:100,y1:60+i*25,y2:60+i*25,stroke:"#64748b","stroke-dasharray":"6 6"},svg);
    H.el("path",{d:`M${X0},${Y} C${X0+40},${Y-36} ${X0+260},${Y-36} ${X0+C},${Y+4} C${X0+250},${Y+14} ${X0+100},${Y+10} ${X0},${Y}Z`,fill:"#e2e8f0"},svg);
    const sup=H.el("rect",{x:X0+30,y:Y-48,width:10,height:26,fill:"#f87171",opacity:0.55},svg),shock=H.el("line",{y1:Y-60,y2:Y-18,stroke:"#fbbf24","stroke-width":4},svg);
    const bow=H.el("path",{d:`M${X0-30},${Y-50} Q${X0-60},${Y} ${X0-30},${Y+50}`,fill:"none",stroke:"#fbbf24","stroke-width":3,opacity:0},svg);
    const lab=T(X0+C+20,Y-20,"","#f8fafc",13);
    const PX0=70,PX1=650,PY0=320,PY1=190;
    H.el("path",{d:`M${PX0},${PY1} L${PX0},${PY0} L${PX1},${PY0}`,fill:"none",stroke:"#64748b"},svg);T(PX1,PY0+0,"","#fff",1);T(PX0+4,PY1,"CD","#94a3b8",11);T(PX1,PY0-4,"Mach →","#94a3b8",11,"end");
    [0.6,0.8,1.0,1.2].forEach(m=>{const x=PX0+(m-0.6)/0.7*(PX1-PX0);T(x,PY0+14,String(m),"#94a3b8",10,"middle")});
    const cd=H.el("polyline",{fill:"none",stroke:"#38bdf8","stroke-width":2.5},svg),dot=H.el("circle",{r:6,fill:"#fbbf24"},svg),mc=H.el("line",{y1:PY1,y2:PY0,stroke:"#4ade80","stroke-dasharray":"4 4"},svg);
    const wave=x=>x<0.77?0:x<1?1.6*(x-0.77)*(x-0.77):Math.max(0.04,0.0846-0.15*(x-1));
    const CDf=(m,L)=>0.02+wave(m*Math.cos(L*Math.PI/180));
    const px=m=>PX0+(m-0.6)/0.7*(PX1-PX0),py=c=>PY0-c/0.12*(PY0-PY1);
    let M=0.7,L=0;
    function upd(){let p="";for(let m=0.6;m<=1.301;m+=0.01)p+=px(m)+","+py(CDf(m,L))+" ";cd.setAttribute("points",p);
      const me=M*Math.cos(L*Math.PI/180),mcr=0.77/Math.cos(L*Math.PI/180);
      dot.setAttribute("cx",px(M));dot.setAttribute("cy",py(CDf(M,L)));mc.setAttribute("x1",px(Math.min(1.3,mcr)));mc.setAttribute("x2",px(Math.min(1.3,mcr)));
      let f=0;if(me>=0.77)f=me>=1?1:0.1+(me-0.77)/0.23*0.85;
      const has=me>=0.77;sup.setAttribute("opacity",has?0.55:0);shock.setAttribute("opacity",has&&me<1?1:0);
      const sx=X0+30+f*(C-60);sup.setAttribute("width",Math.max(1,sx-(X0+30)));shock.setAttribute("x1",sx);shock.setAttribute("x2",sx);
      bow.setAttribute("opacity",me>=1?1:0);
      lab.textContent="M = "+M.toFixed(2)+(L?"（垂直前緣分量 "+me.toFixed(2)+"）":"");
      say(me<0.77?"Subsonic：翼面最快處都未到 M=1。Mcrit ≈ "+mcr.toFixed(2)+"（綠線）":me<1?"Transonic：上面出現 supersonic 區 + normal shock，shock 後分離 → wave drag 急升；Mach tuck 風險":"Supersonic：bow wave，shock 去到後緣；drag 高但開始回落")}
    H.slider(box,"Mach",0.6,1.3,0.7,v=>{M=v;upd()},0.01);
    H.slider(box,"Sweep Λ °",0,40,0,v=>{L=v;upd()},1);
  }},
  {title:"Flight Controls → Motion",hint:"三條滑桿：elevator／aileron／rudder 點樣改變 attitude",build(box,H){
    const svg=H.svg(box,700,260),say=H.note(box);
    const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
    T(120,24,"Elevator → PITCH","#38bdf8",13,"middle");T(350,24,"Aileron → ROLL","#4ade80",13,"middle");T(580,24,"Rudder → YAW","#fbbf24",13,"middle");
    const sd=H.el("g",{},svg);H.el("rect",{x:40,y:112,width:170,height:16,rx:8,fill:"#e2e8f0"},sd);H.el("path",{d:"M195,112 L205,80 L215,80 L220,112Z",fill:"#94a3b8"},sd);H.el("rect",{x:100,y:126,width:50,height:5,fill:"#94a3b8"},sd);
    const el=H.el("line",{x1:215,y1:120,x2:245,y2:120,stroke:"#38bdf8","stroke-width":6},svg);
    const fr=H.el("g",{},svg);H.el("rect",{x:260,y:118,width:180,height:8,fill:"#e2e8f0"},fr);H.el("circle",{cx:350,cy:122,r:10,fill:"#cbd5e1"},fr);
    const al=H.el("rect",{x:262,y:108,width:30,height:6,fill:"#4ade80"},svg),ar=H.el("rect",{x:408,y:108,width:30,height:6,fill:"#4ade80"},svg);
    const tp=H.el("g",{},svg);H.el("rect",{x:572,y:50,width:16,height:150,rx:8,fill:"#e2e8f0"},tp);H.el("rect",{x:515,y:100,width:130,height:20,fill:"#94a3b8"},tp);H.el("rect",{x:550,y:168,width:60,height:10,fill:"#94a3b8"},tp);
    const rd=H.el("line",{stroke:"#fbbf24","stroke-width":6},svg);
    let e=0,a=0,r=0;
    function upd(){sd.setAttribute("transform",`rotate(${-e*0.5},125,120)`);
      el.setAttribute("transform",`rotate(${-e*0.5},125,120) rotate(${-e},215,120)`);
      fr.setAttribute("transform",`rotate(${a*0.8},350,122)`);
      al.setAttribute("transform",`rotate(${a*0.8},350,122) translate(0,${a>0?a*0.6:0})`);ar.setAttribute("transform",`rotate(${a*0.8},350,122) translate(0,${a<0?-a*0.6:0})`);
      tp.setAttribute("transform",`rotate(${r*0.4},580,125)`);
      rd.setAttribute("x1",580);rd.setAttribute("y1",178);rd.setAttribute("x2",580-r*1.0);rd.setAttribute("y2",205);rd.setAttribute("transform",`rotate(${r*0.4},580,125)`);
      say((e>2?"Elevator 後拉（TE up）→ tail 下壓 → nose UP。 ":e<-2?"Elevator 前推 → nose DOWN。 ":"")+(a>2?"Stick 右：右 aileron up、左 down → 右翼降 → roll RIGHT（secondary: adverse yaw 向左）。 ":a<-2?"Stick 左 → roll LEFT。 ":"")+(r>2?"右 rudder → TE 向右 → tail 左 → nose yaw RIGHT（secondary: roll 右）。":r<-2?"左 rudder → nose yaw LEFT。":"")||"撥動滑桿睇每個舵面嘅 primary effect")}
    H.slider(box,"Elevator（+ = 拉桿）",-25,25,0,v=>{e=v;upd()},1);
    H.slider(box,"Aileron（+ = stick 右）",-25,25,0,v=>{a=v;upd()},1);
    H.slider(box,"Rudder（+ = 右腳）",-25,25,0,v=>{r=v;upd()},1);
  }}
  ]
});
