// pof 補漏 pass：Lecture 1-5（手寫 PDF 逐頁睇圖）、Lecture 13a/14/15/18 抽樣、POF02/03/05 OCR、ENZO study guide 11-16、Mass briefing OLD/NEW、AGK10、PHAK ch5、ATP ch3、BAK ch6
var _pxC=function(t,e,q,a,zh,st){return {e:e,q:q,a:a,zh:zh,topic:t,st:st||"ok"}};
Cadet.extend("pof",{
topics:[

{id:"pof.x.scope",g:"Advanced: Flow Basics",t:"Aerodynamics vs Hydrodynamics",d:"Aerodynamics = 空氣點樣郁、對物體嘅力。Air 可壓縮、water 唔可以。",pts:["Fluid dynamics ⊃ aerodynamics","Conservation eqns 一樣","Water: ρ = const；air: ρ ≠ const","Water 有 buoyancy；air 要 lift","Aero 用途：飛機、車、火箭、風機"],rel:["pof.u.hows","pof.x.variables"],src:"Lecture 1 p1-2"},
{id:"pof.x.approach",g:"Advanced: Flow Basics",t:"4 Ways Aero Is Practised",d:"Aero 難求精確解 → 用 body force、經驗查表、force balance、更多變量。",pts:["Body forces + moment + p 分佈","Complex 形狀 → empirical (NACA 表)","Force balance：L=W, T=D","Moments 要平衡，否則轉","變量 u,p,ρ,T,e（T 高速重要）"],rel:["pof.u.hows","pof.x.forcebal","pof.x.measure"],src:"Lecture 1 p3-5"},
{id:"pof.x.forcebal",g:"Advanced: Flow Basics",t:"Force & Moment Balance",d:"定速平飛＝所有力同力矩平衡；唔平衡就加速或轉動。",pts:["Lift = Weight，否則升降","Thrust = Drag，否則加減速","Moments 平衡，否則 spin","Flight mechanics = 力平衡"],rel:["pof.fourforces","pof.x.approach"],src:"Lecture 1 p4"},
{id:"pof.x.variables",g:"Advanced: Flow Basics",t:"5 Flow Variables: u, p, ρ, T, μ",d:"全部係 molecular 現象，但 flow 層面（continuum）睇。決定物體受力。",pts:["u: fluid element 流速 (m/s, Eulerian)","p: 分子撞擊面 (Pa)；Δp → 淨力","ρ: 每體積幾多分子 (kg/m³)","T: 分子動能 (K)，唔係流速","μ: 流體摩擦 (Pa·s)，要 velocity gradient"],rel:["pof.x.gas","pof.x.shear","pof.u.variables"],src:"Lecture 2 p1-3"},
{id:"pof.x.gas",g:"Advanced: Flow Basics",t:"Ideal Gas Law & Assumption Ladder",d:"p = ρRT 連 p、ρ、T；假設由簡到繁：incompressible inviscid → viscous → compressible。",pts:["p = ρRT (R 常數)","ρ=const, μ=0：最簡","ρ=const, μ≠0：加 BL","ρ=f(x,y,z,t), μ≠0：全部","T 同 ρ 變 → 要 energy eqn"],rel:["pof.x.variables","pof.u.compress","pof.atmos"],src:"Lecture 2 p1,3"},
{id:"pof.x.shear",g:"Advanced: Flow Basics",t:"Viscosity & Shear Stress",d:"分子跳 streamline 交換動量 → viscous force；τ = μ du/dy。",pts:["μ = fluid friction coefficient","需要 velocity gradient","τ = μ ∂u/∂n（tangential）","Pressure 係 normal force"],rel:["pof.viscosity","pof.bl","pof.x.twoforces"],src:"Lecture 2 p3; Lecture 3 p1"},
{id:"pof.x.twoforces",g:"Advanced: Flow Basics",t:"Only 2 Basic Forces: Pressure & Shear",d:"物體再複雜，流體只靠 pressure（垂直）同 shear（切線）作用，積分得淨力。",pts:["P(s) normal；τ(s) tangential","複雜表面 → 複雜分佈","Pressure + shear ⇒ net force","Distribution 沿表面 s 變"],rel:["pof.x.shear","pof.x.cyl3","pof.x.nad"],src:"Lecture 3 p1-2"},
{id:"pof.x.cyl3",g:"Advanced: Flow Basics",t:"Cylinder: 3 Cases (Lift or Drag?)",d:"同一圓柱，三種情況：冇力 / 有 lift / 有 drag，睇 pressure 分佈對稱性。",pts:["Stationary + inviscid：Fx=Fy=0","d'Alembert paradox","Spinning + inviscid：Fy>0 (lift)","Stationary + viscous：separation → Fx>0"],rel:["pof.u.cylinder","pof.u.kj","pof.u.dragsep"],src:"Lecture 3 p2-3"},
{id:"pof.x.nad",g:"Advanced: Flow Basics",t:"N, A → L, D & Moment",d:"表面積分得 N'（垂直 chord）、A'（平行 chord），再轉做 L'、D'。",pts:["L = N cosα − A sinα","D = N sinα + A cosα","Per unit span：'  (除以 span)","M'LE 由 pressure & shear 積分","Lift ⟂ flow；Drag ∥ flow"],rel:["pof.x.twoforces","pof.x.xcp","pof.u.variables"],src:"Lecture 3 p3-5"},
{id:"pof.x.xcp",g:"Advanced: Flow Basics",t:"Centre of Pressure x_cp (Why Not Used)",d:"x_cp = −M'LE / N'：力作用點。但佢隨條件郁，所以工程用 quarter-chord moment。",pts:["類比：雪覆平板嘅平衡點","N' 要產生 M'LE","x_cp = f(u, p, τ …) 會郁","實用：L', D', M'c/4 (NACA 表)","Small α：N' ≈ L'"],rel:["pof.cp","pof.x.nad","pof.longstab"],src:"Lecture 3 p6-7"},
{id:"pof.x.measure",g:"Advanced: Flow Basics",t:"Wind Tunnel vs Simulation",d:"風洞易直接量 L、D、M；shear τ 難量。CFD 俾 P(x,y)、τ(x,y) 再積分。",pts:["Wind tunnel：balance + pressure taps","τ(s) 難量","CFD output: P, τ → 積分","Industry 兩樣都用"],rel:["pof.u.hows","pof.x.similar"],src:"Lecture 3 p5-6"},
{id:"pof.x.nondim",g:"Advanced: Flow Basics",t:"Non-dimensionalising",d:"用相關 scale 做比值：5 km 對人、鯨、螞蟻意思唔同；aero 用 ½ρV²A 做 force scale。",pts:["Dimensionless = 量 ÷ relevant scale","Body length 唔係好 scale","Velocity × time = 新 length scale","L → CL, D → CD, μ → Re"],rel:["pof.x.coeffs","pof.u.reynolds"],src:"Lecture 4 p1-2"},
{id:"pof.x.coeffs",g:"Advanced: Flow Basics",t:"CL, CD, Cm Definitions",d:"Reference force = inertia force = ½ρV∞²·area；來自 Wright brothers。",pts:["CL = L / (½ρV²S)","CD = D / (½ρV²S)","Cm = M / (½ρV²Sc)","Per span：cl, cd, cm (小楷)","流體力學叫 Euler number"],rel:["pof.liftformula","pof.x.nondim","pof.u.variables"],src:"Lecture 4 p3"},
{id:"pof.x.similar",g:"Advanced: Flow Basics",t:"Similarity: Match Re & Mach",d:"形狀同 Re、M 相同 → 同一 CL(α)。縮尺風洞好難同時配到。",pts:["Same shape + Re + M → same CL, CD","Re → 壓力/摩擦 drag、separation、transition","M → compression、flow regime","風洞例：Re~10⁷, c=0.75m → M≈0.6","出路：加大／改 fluid／唔配 Re"],rel:["pof.u.reynolds","pof.x.remach","pof.x.measure"],src:"Lecture 4 p4-6"},
{id:"pof.x.remach",g:"Advanced: Flow Basics",t:"Re & Mach as Force Ratios",d:"Re = inertia ÷ viscous = ρVL/μ；M = √(inertia ÷ compression) = V/a。",pts:["Re 大：inertia 主導","M < 0.8 subsonic","M > 1.2 shock + expansion","M > 5 hypersonic：好熱","a = speed of sound"],rel:["pof.u.reynolds","pof.machnum","pof.regimes"],src:"Lecture 4 p4-5"},
{id:"pof.x.cv",g:"Advanced: Flow Basics",t:"Control Volume: Mass In − Out",d:"質量唔會憑空生或消失：ṁ_in − ṁ_out = 方塊內質量變化。",pts:["ṁ_in − ṁ_out = ṁ_cv","Differential：∂(ρu)/∂x+… = −∂ρ/∂t","Incompressible：∇·V = 0","只適合 liquid 或 M < 0.3","管收窄 → A↓ → u↑"],rel:["pof.u.conserve","pof.x.momentum","pof.bernoulli"],src:"Lecture 5 p1-2; Lecture 13a"},
{id:"pof.x.momentum",g:"Advanced: Flow Basics",t:"Momentum Eqn → Euler → Bernoulli",d:"F = d(mv)/dt。丟低 body force、viscous、unsteady → Euler；再 incompressible → Bernoulli。",pts:["項：加速、動量流出、p、viscous、body","Aero 通常：無 body force","Inviscid + steady → Euler eqns","Incompressible 沿 streamline → Bernoulli","p₁+½ρu₁² = p₂+½ρu₂²"],rel:["pof.u.bernlaplace","pof.u.conserve","pof.x.cv"],src:"Lecture 5 p2-3"},
{id:"pof.x.energy",g:"Advanced: Flow Basics",t:"Energy Eqn (1st Law) & Closure",d:"δq + δw = de。Aero 常假設 steady、inviscid、adiabatic，再配 e = cvT 同 p = ρRT。",pts:["Energy 唔會生滅，只轉形","項：e+u²/2、work by p、熱、body","Adiabatic：q̇ = 0 → T0 不變","5 條 eqn 理論上描述所有 flow","實用：Bernoulli / Mach 公式"],rel:["pof.u.compress","pof.u.normal","pof.x.momentum"],src:"Lecture 5 p4-5"},

{id:"pof.x.liftchain",g:"Advanced: Airfoil Theory",t:"Lift Chain: Mass → Energy → Momentum",d:"三步：鼻尖加速、貼面、後緣平順離開 → 氣流向下轉 = lift。",pts:["1 鼻：A↓ → u↑ → p↓ (mass, Bernoulli)","2 面：flow 貼住 (Coandă)","3 尾：Kutta，top/bottom 同時離開","空氣被轉向下 = momentum 的足印","缺一就唔 work"],rel:["pof.u.liftcause","pof.x.coanda","pof.x.circ"],src:"Lecture 13a p3-5"},
{id:"pof.x.myths",g:"Advanced: Airfoil Theory",t:"Lift Myths Dissected (3 Flaws)",d:"Equal time、air pushes、air turned：每個都只啱一部分，唔係 why。",pts:["Equal time：粒子唔使同時到 TE","上落顛倒翼：d1≫d2 都有 lift","Bernoulli 要沿 streamline/無旋","Air 唔係彈力波","Turned flow = 結果，唔係原因"],rel:["pof.liftmyth","pof.x.liftchain","pof.bernoulli"],src:"Lecture 13a p1-3"},
{id:"pof.x.coanda",g:"Advanced: Airfoil Theory",t:"Coandă Effect & Entrainment",d:"Jet 帶走周圍空氣 → 貼面側壓低 → flow 傾向貼住表面。",pts:["Flow 傾向留喺 surface","Entrainment：jet 拉走旁邊空氣","貼面側 low pressure","令 flow 跟住 airfoil 彎","對比：脫離 = stall"],rel:["pof.x.liftchain","pof.newton","pof.bl"],src:"Lecture 13a p4"},
{id:"pof.x.circ",g:"Advanced: Airfoil Theory",t:"Circulation Makes the Kutta Condition",d:"無 circulation，flow 會繞後緣爬上去（太多能量）；加 Γ 令佢平順離開，L'=ρV∞Γ。",pts:["Airfoil flow = 無 Γ 流 + vortex Γ","Γ 令 stagnation 點移到 TE","Kutta：TE 平順離開","L' = ρV∞Γ (Kutta–Joukowski)","Γ 係足印，唔係成因"],rel:["pof.u.kutta","pof.u.kj","pof.x.liftchain"],src:"Lecture 13a p5; Lecture 10-11"},
{id:"pof.x.flatplate",g:"Advanced: Airfoil Theory",t:"Flat-Plate BL: Laminar vs Turbulent",d:"Laminar δ 薄、Cf 細；turbulent δ 厚、Cf 大。Re_x 越大越傾向 turbulent。",pts:["Laminar: δ = 5x/√Re_x","Laminar: Cf = 1.328/√Re_c","Turbulent: δ = 0.37x/Re_x^(1/5)","Turbulent: Cf = 0.074/Re_c^(1/5)","Cf 按單面；整塊 CD ≈ 2Cf"],rel:["pof.bl","pof.u.dragsep","pof.x.rexcr"],src:"Lecture 14 p3 (手寫)",check:true},
{id:"pof.x.rexcr",g:"Advanced: Airfoil Theory",t:"Transition Location x_cr",d:"Re_x,cr = ρU x_cr/μ；數值靠經驗／實驗／模擬／文獻，唔係計得出。",pts:["Natural transition 喺 x_cr","真實 CD 介乎全 laminar 同全 turbulent","例 NACA 2412：CD 實測 0.0068","全 laminar 0.0015；全 turbulent 0.0074","Flat plate Re_cr ~ 5×10⁵"],rel:["pof.x.flatplate","pof.u.reynolds","pof.bl"],src:"Lecture 14 p3 (手寫)",check:true},
{id:"pof.x.sepcost",g:"Advanced: Airfoil Theory",t:"Separation Costs Lift & Adds Drag",d:"Adverse gradient (p₂>p₁) 令 BL 回流分離：頂面 suction 失 → lift ↓；後向分量 → drag ↑。",pts:["Adverse pressure gradient → 回流","Separated：頂面 p 升 → lift ↓","Pressure 後向分量 → 加 drag","Stall α_s 同 x_cr 難算，要量／模擬","Tuft 睇：郁嚟郁去 = separated"],rel:["pof.stall","pof.u.dragsep","pof.x.rexcr"],src:"Lecture 14 p5-7"},
{id:"pof.x.vgen",g:"Advanced: Airfoil Theory",t:"Turbulent BL Keeps Flow Attached",d:"Trip strip／vortex generator 令 BL 變 turbulent → 較有 energy → 唔易分離。",pts:["Laminar BL 易分離（後緣）","Trip strip → turbulent 貼住","VG 混合高能量外層氣流","高速 VG 延遲 shock-induced separation","Aileron 高速更有效"],rel:["pof.bl","pof.hsctrl","pof.x.sepcost"],src:"Lecture 14 p7; ATP ch3"},
{id:"pof.x.perspan",g:"Advanced: Finite Wing",t:"2D vs 3D: Per-Unit-Span Is Ideal",d:"cl、cd 係 span=∞ 理想值；真翼 CL≠cl，因為 tip 漏氣 → downwash。",pts:["2D：cl=1.2 (α=8° 例)","3D：CL ≠ cl","Tip：高壓繞去低壓","Downwash → effective α ↓","→ induced drag"],rel:["pof.u.finite","pof.vortices","pof.induced"],src:"Lecture 15 p2"},

{id:"pof.x.machwaves",g:"Advanced: Compressible",t:"Sound Waves from a Moving Source",d:"u<a：波走到前面；u=a：疊成 standing wave；u>a：形成 Mach cone，上游冇預警。",pts:["u<a：upstream 有擾動","u=a：waves 疊成 wavefront","u>a：Mach cone，angle μ = sin⁻¹(1/M)","Cone 外面係『silence zone』","類比：hydraulic jump → shock"],rel:["pof.machnum","pof.shocktypes","pof.u.normal"],src:"Lecture 18 p2"},
{id:"pof.x.normalcv",g:"Advanced: Compressible",t:"Normal Shock: Control-Volume Relations",d:"三守恆 + h=cpT、p=ρRT。Adiabatic → T0 不變 → a*² = u₁u₂（Prandtl）。",pts:["Mass: ρ₁u₁ = ρ₂u₂","Momentum: p₁+ρ₁u₁² = p₂+ρ₂u₂²","Energy: h₁+u₁²/2 = h₂+u₂²/2","Prandtl: a*² = u₁·u₂","過 shock：u↓, p ρ T ↑"],rel:["pof.u.normal","pof.x.machwaves","pof.x.energy"],src:"Lecture 18 p6"},
{id:"pof.x.shockseq",g:"High-Speed Flight",t:"Shock Progression on the Wing (POF05)",d:"M 加：頂面 shock 出現 → 後移 → 底面 shock → bow wave。例子數值只係示意。",pts:["例 M0.72：Mcrit，局部 sonic","M0.77：頂面 normal shock","M0.82–0.88：shock 後移，separation","M0.95：頂底都有 shock","M1.05：bow wave，wave drag 大增"],rel:["pof.mcrit","pof.wavedrag","pof.machtuck"],src:"POF05 slides 4-8",check:true},
{id:"pof.x.sweptstall",g:"High-Speed Flight",t:"Swept-Wing Tip Stall & Pitch-Up",d:"Tip 先 stall → CP 向內向前 → 機頭上揚；root 先 shock stall → tuck。",pts:["Root shock stall → nose-down (tuck)","Tip stall → CP 內移前移 → pitch-up","Tip stall 失 aileron 效力","CLmax ↓ → 要 slat／slotted flap","Buffet 唔夠 tail 警告"],rel:["pof.sweep","pof.machtuck","pof.slats"],src:"ATP ch3 (High Speed Flight)"},
{id:"pof.x.machbuffet",g:"High-Speed Flight",t:"Mach Buffet: High vs Low Speed",d:"Mach buffet 睇 wing 氣流速度。太慢（高 AoA）都可以出『低速 Mach buffet』。",pts:["Buffet 取決 airflow Mach，非機速","太快：shock separation","太慢（對重量／高度）：AoA 太大","兩邊靠攏 = 窄 speed band","『Coffin corner』口語"],rel:["pof.vmo","pof.mcrit","pof.stall"],src:"ATP ch3 Q8394-3",check:true},

{id:"pof.x.ctrleffects",g:"Flight Controls",t:"Primary, Secondary & Further Effects",d:"每個 control：primary effect、secondary effect、further effect（若唔糾正）。",pts:["Elevator：pitch → IAS 變","Aileron：roll → adverse yaw","Rudder：yaw → roll (dihedral)","Power：pitch & yaw → IAS 變","Further：spiral dive"],rel:["pof.axes","pof.advyaw","pof.spiral"],src:"POF02 slide 1; ENZO 11; RPL ch6"},
{id:"pof.x.trimchg",g:"Flight Controls",t:"IAS / Power / Flap → Trim Change",d:"改 IAS、power、flap 會改 trim；DA40 教材：power↑ 機頭上揚＋左偏。",pts:["Power ↑：slipstream → nose up + yaw left","IAS ↑：nose up + yaw right (DA40)","Flap down：lift ↑ → balloon","要推桿 + re-trim","唔同機型方向可能唔同"],rel:["pof.ctrleff","pof.trim","pof.x.flapops"],src:"ENZO 11 (DA40); Mass briefing 02",check:true},
{id:"pof.x.pa",g:"Climb & Performance",t:"Power + Attitude = Performance",d:"Attitude 定 AoA／速度、power 定爬降率；每個 IAS 只有一個平飛 attitude。",pts:["Level：L = CL·½ρV²S 要平衡","IAS ↑ → 要 lower pitch (α↓)","Climb：power；speed：pitch","Descent：pitch 定 speed，power 定 ROD","Performance = flight path + speed"],rel:["pof.liftformula","pof.vxvy","pof.x.sht"],src:"ENZO 12-14; BAK ch6 p219"},
{id:"pof.x.sht",g:"Flight Controls",t:"Select–Hold–Trim",d:"揀 attitude → 守住 → trim 走餘力；唔好用 trim 去改 attitude。",pts:["Select attitude + power","Hold 等 speed 穩定","Trim：back pressure → trim back","改 power/IAS/config 就 re-trim","DA40 只有 elevator trim"],rel:["pof.trim","pof.x.pa","pof.x.trimchg"],src:"ENZO 11-12; AGK10 slide"},
{id:"pof.x.rangeend",g:"Climb & Performance",t:"Range vs Endurance Flying",d:"Range：best L/D（約 4° AoA）；endurance：最低 power；piston 低飛 endurance 好啲。",pts:["Max range：L/Dmax speed","DA40 約 4° AoA (best L/D)","Range：揀有 tailwind 嘅高度","Endurance：最低安全高度","Lean mixture"],rel:["pof.ld","pof.powercurve","pof.dragcurve"],src:"ENZO 12 (DA40)",check:true},
{id:"pof.x.climbeq",g:"Climb & Performance",t:"Climb Equation, Wind & Weight",d:"sinγ = (T − D)/W。Angle 睇 excess thrust；rate 睇 excess power。",pts:["Vx：excess thrust 最大","Vy：excess power 最大","Headwind ↑ angle；rate 唔變","Weight ↑：max rate ↓，Vy ↑","Flap/DA ↑：excess ↓"],rel:["pof.vxvy","pof.climb","pof.perf"],src:"ENZO 13 (DA40)"},
{id:"pof.x.glideeq",g:"Climb & Performance",t:"Glide Equation & Effects",d:"Glide：T=0 → sinθ = D/W。Max L/D → 最細 glide angle；weight 唔改 range。",pts:["Min drag = best glide angle","DA40 clean 85 KIAS；flap 80 KIAS","Headwind ↓ range；rate 唔變","Weight ↑：speed ↑，range 同","Sideslip/flap ↑ drag → 縮短"],rel:["pof.glide","pof.ld","pof.x.sideslip"],src:"ENZO 14 (DA40)"},
{id:"pof.x.sideslip",g:"Flight Controls",t:"Sideslip & Slipping Turn",d:"Cross controls：bank + 反向 rudder，加 drag 令更陡落，唔使加速。",pts:["Entry：bank + 反 rudder","Ball 偏向 low wing 側","Nose 趨降 → 加 back pressure","唔好 trim","用於 forced landing／無 flap 機"],rel:["pof.turncoord","pof.x.glideeq","pof.rudder"],src:"ENZO 14; BAK ch6"},
{id:"pof.x.flapops",g:"High-Lift & Trim",t:"Flap Operations: Speeds & Ballooning",d:"落 flap 前查速、一次一格；T/O flap 多 lift，LDG flap 多 drag。",pts:["先查 VFE，再選、再確認","DA40：T/O 10° ≤108 kt","DA40：LDG 25° ≤91 kt","Balloon → 推桿防止","Flaps up 要有 positive rate"],rel:["pof.flaps","pof.flaptypes","pof.x.clshift"],src:"ENZO 02, 11; AGK10 slides"},
{id:"pof.x.clshift",g:"High-Lift & Trim",t:"Flaps Shift the CL–α Curve",d:"落 flap：CLmax ↑，通常 stall AoA ↓，curve 上移；slotted Fowler 增益最大。",pts:["CLmax ↑ → Vs ↓","Stall α 一般降","Plain < slotted < Fowler","Take-off → landing：curve 更高","更多 drag"],rel:["pof.clcurve","pof.flaps","pof.stallfactors"],src:"POF02 slide 5; ENZO 02"},

{id:"pof.x.cpf",g:"Turning & Load Factor",t:"Centripetal vs Centrifugal Force",d:"轉彎要向心力（horizontal lift）；centrifugal 係 reaction（Newton 3）。",pts:["CPF 指向轉彎中心","Aircraft：L 水平分量供應","CFF = CPF，向外","CPF 消失 → 直線飛出","Lift 要加 → 否則 sink"],rel:["pof.turnforces","pof.loadfactor","pof.x.turnradius"],src:"POF03 slides 1-7; ATP ch3"},
{id:"pof.x.turnradius",g:"Turning & Load Factor",t:"Turn Radius & Rate: Who Controls?",d:"只由 TAS 同 bank 決定，同機型大細無關：747 同 DA40 同 TAS、同 bank → 同半徑。",pts:["r = V²/(g·tanφ)","Bank ↑ → radius ↓、rate ↑","Speed ↑ → radius ↑、rate ↓","Rate 1 = 3°/s = 360° in 2 min","Rate 1 直徑約 IAS 嘅 1% (nm)"],rel:["pof.rot","pof.turnforces","pof.loadfactor"],src:"POF03 slide 8; Mass briefing OLD 05"},

{id:"pof.x.moment",g:"Stability",t:"Moment, Arm & CG Near 20% MAC",d:"物體繞 CG 轉：moment = force × arm。設計令 CG 約 20% MAC，thrust 過 CG。",pts:["Moment = 力 × 距離","Designer：CG ≈ 20% MAC","Thrust 過 CG → power 唔轉 pitch","Tail 位置/大細最有控制","Pilot 控制力嘅大細，唔係位置"],rel:["pof.cg","pof.longstab","pof.x.thrustline"],src:"PHAK ch5 p13"},
{id:"pof.x.thrustline",g:"Stability",t:"Tail Download & Thrust Line",d:"速度 ↑ → downwash ↑ → tail download ↑；power ↑ 可能抬頭，high thrust line 抵消。",pts:["Cruise：tail load 平衡","慢：downwash↓ → nose 下垂","Thrust 高過 CG：加 power 低頭","Thrust 低過 CG：加 power 抬頭","T-tail 例外"],rel:["pof.longstab","pof.x.moment","pof.tail"],src:"PHAK ch5 p16-17"},
{id:"pof.x.phugoid",g:"Stability",t:"Long-Period Oscillation (Phugoid)",d:"速度與機頭互換嘅慢擺動：dynamic stable 時越擺越細，最後穩定。",pts:["Nose 下 → 加速 → tail download ↑ → 抬頭","抬頭 → 減速 → 又降頭","Damped：幅度遞減","Divergent：越擺越大","『Phugoid』名係常識，PHAK 只描述"],rel:["pof.stability","pof.longstab","pof.x.dynstab"],src:"PHAK ch5 p16-17",check:true},
{id:"pof.x.dynstab",g:"Stability",t:"Dynamic Stability: Damped / Undamped / Divergent",d:"Static positive 唔等於 dynamic positive：返正會超過，之後振盪變細／不變／變大。",pts:["Positive static：傾向返正","Positive dynamic：振盪遞減","Neutral：振幅不變","Negative：振幅變大 (divergent)","Pitch/yaw static+；roll ≈ neutral"],rel:["pof.stability","pof.x.phugoid","pof.dutch"],src:"PHAK ch5; ATP ch3"},
{id:"pof.x.keel",g:"Stability",t:"Keel Effect & Weight Distribution",d:"High wing：機身如 keel，傾向將 longitudinal axis 轉入 relative wind。",pts:["High wing → laterally stable","Sideslip → dihedral restoring lift","Pendulum effect (CG 低過 wing)","Sweepback 增加 dihedral effect","Low wing 要多啲 dihedral"],rel:["pof.latstab","pof.dirstab","pof.wingcfg"],src:"PHAK ch5 p23-24; BAK ch6"},
{id:"pof.x.aoaind",g:"Stall & Spin",t:"AOA Indicator & Stall Margin",d:"AOA indicator 顯示距 critical AoA 嘅 margin；published Vs 只喺 1G、coordinated、max weight 有效。",pts:["Loss of control 係頭號致命原因","GA 致命事故 >25% 喺 maneuvering","其中一半係 stall/spin","Vs 只 valid：1G、balanced、一個 weight","Flap／contamination 改 stall speed"],rel:["pof.stall","pof.stallfactors","pof.stallsym"],src:"PHAK ch5 p26-27"},

{id:"pof.x.propwing",g:"Propeller Aerodynamics",t:"Propeller = Rotating Wing",d:"每片 blade 係 airfoil；blade angle ≠ AoA，AoA = relative wind 同 chord 之間角。",pts:["Thrust = low-pressure 向前","Relative wind = 旋轉 + 前進","Blade angle：chord 對 plane of rotation","Best AoA 細：+2° 至 +4°","Thrust ≈ ṁ × (slipstream − V)"],rel:["pof.pfactor","pof.torque","pof.x.proptwist"],src:"PHAK ch5 p28-30; ATP ch3"},
{id:"pof.x.proptwist",g:"Propeller Aerodynamics",t:"Blade Twist & Geometric Pitch",d:"外圍轉得快 → 要細 blade angle；twist 令沿 blade AoA 大致相同。",pts:["Tip 速 > root 速","無 twist：root negative AoA / tip stall","Geometric pitch = 無 slip 前進距離","Effective pitch = 實際前進距離","Slip = 兩者差"],rel:["pof.x.propwing","pof.x.propeff"],src:"PHAK ch5 p29-30; ATP Q8368"},
{id:"pof.x.propeff",g:"Propeller Aerodynamics",t:"Fixed Pitch vs Constant Speed",d:"Fixed pitch 只喺一組 rpm/速度最高效；CSU 自動調 blade angle 維持有效 AoA。",pts:["Fixed：妥協 (climb 或 cruise)","Efficiency 約 50–87%","靜止：AoA 大、效率低","CSU：takeoff 細角 (fine)","CSU：cruise 較粗 (coarse)"],rel:["pof.x.propwing","pof.perf","pof.ltt"],src:"PHAK ch5 p29-31; ENZO 02"},
],
cards:[
_pxC("pof.x.scope","🌬️","Why is aerodynamics different from hydrodynamics?","Air is compressible (density varies) while water is effectively incompressible, and water has buoyancy whereas an aircraft needs a lift force.","Conservation eqns 一樣，但 ρ 唔同。"),
_pxC("pof.x.scope","🌬️","What is the definition of aerodynamics?","The study of how air moves around objects and the forces it exerts on them.","空氣點郁＋對物體嘅力。"),
_pxC("pof.x.approach","🧰","Why does aerodynamics rely on empirical data?","Complex geometries (airfoil, car, sphere) have no exact solution, so we use measured data such as NACA lookup tables of L, D and M versus angle of attack.","複雜形狀無解析解。"),
_pxC("pof.x.approach","🧰","Name the four approaches used to study aerodynamics.","Body forces and moments, empirical look-up data, force balances, and more flow variables (u, p, rho, T, e).","4 條路。"),
_pxC("pof.x.forcebal","⚖️","What happens if the forces and moments are not balanced?","Lift not equal to weight: you climb or fall; thrust not equal to drag: you speed up or slow down; unbalanced moments: the aircraft rotates.","Lecture 1 嘅 force balance。"),
_pxC("pof.x.variables","🔢","Which five flow variables control the force on a body?","Velocity u, pressure p, density rho, temperature T and viscosity mu.","u p ρ T μ。"),
_pxC("pof.x.variables","🔢","What does temperature physically represent in a gas?","The kinetic energy of the molecules based on molecular velocity, not the bulk flow velocity.","T ∝ 分子動能。"),
_pxC("pof.x.variables","🔢","What is pressure at molecular level and how does it make a net force?","Force per area from molecules hitting a surface; a pressure difference across the surface gives a net force.","Δp → 淨力。"),
_pxC("pof.x.gas","🔥","State the ideal gas law and what it links.","p = rho R T, linking pressure, density and temperature, so all three can produce force on an object.","R 係氣體常數。"),
_pxC("pof.x.gas","🔥","Order the flow assumptions from simplest to most general.","Incompressible inviscid, then incompressible viscous, then compressible viscous.","由簡到繁。"),
_pxC("pof.x.shear","🧈","Define viscosity and when it produces a force.","A coefficient of fluid friction; it produces shear stress tau = mu du/dy only when there is a velocity gradient.","無 gradient 就無 viscous force。"),
_pxC("pof.x.twoforces","🎯","What are the only two basic forces a fluid exerts on a surface?","Pressure (normal to the surface) and shear stress (tangential); integrating both over the surface gives the net force.","P 垂直、τ 切線。"),
_pxC("pof.x.cyl3","⭕","Why does a stationary cylinder in inviscid flow have no drag?","The pressure distribution is symmetric front/back and top/bottom, so net force is zero; this is d'Alembert's paradox.","對稱 → 0。"),
_pxC("pof.x.cyl3","⭕","How does a spinning cylinder make lift, and a viscous one make drag?","Spin gives different top and bottom pressure (lift); viscosity causes separation, so front and back pressures differ (drag).","Case 2 vs 3。"),
_pxC("pof.x.nad","📐","Write lift and drag in terms of normal force N and axial force A.","L = N cos(alpha) - A sin(alpha); D = N sin(alpha) + A cos(alpha).","by definition。"),
_pxC("pof.x.nad","📐","Why are forces given 'per unit span'?","To remove span from the calculation: L' = L/span, so the 2D airfoil result is independent of wing length.","L', D', M'。"),
_pxC("pof.x.xcp","📍","How is the centre of pressure obtained?","x_cp = -M'_LE / N' (approximately -M'_LE / L' at small angles).","moment ÷ force。"),
_pxC("pof.x.xcp","📍","Why is x_cp not used in practice?","It moves with flow conditions (angle of attack, pressure, shear), so airfoil data uses L', D' and the moment about the quarter chord.","c/4 moment 近乎恆定。"),
_pxC("pof.x.measure","🧪","Which aerodynamic quantity is hard to measure in a wind tunnel?","Shear stress distribution; lift, drag and moment are easy to measure directly and pressure from surface taps.","τ(s) 難量。"),
_pxC("pof.x.nondim","📏","Why non-dimensionalise?","To compare cases by relative scale; a 5 km trip means different things for a person, a whale and an ant, and force is compared to a reference force.","相對比。"),
_pxC("pof.x.coeffs","📈","Define CL and the lift equation.","CL = L / (1/2 rho V^2 S), so L = 1/2 rho V^2 S CL.","同 pof.liftformula 一致。"),
_pxC("pof.x.coeffs","📈","Define the moment coefficient Cm.","Cm = M / (1/2 rho V^2 S c), using the chord c as the length scale for the moment.","加一個 chord。"),
_pxC("pof.x.coeffs","📈","Where do CL, CD, Cm originate?","They come from the Wright brothers; in general fluid mechanics they correspond to the Euler number.","歷史小知識。"),
_pxC("pof.x.similar","🔬","When are two flows around the same shape similar?","When Reynolds number and Mach number match; then CL and CD are the same at the same angle of attack.","縮尺實驗核心。"),
_pxC("pof.x.similar","🔬","Why is wind tunnel testing a real aircraft's Reynolds number hard?","A 0.75 m chord model at Re about 10^7 needs about 200 m/s, which is Mach 0.6 and no longer incompressible; options are bigger tunnel, other fluid, or accept mismatch.","Re 同 M 衝突。"),
_pxC("pof.x.remach","⚔️","Define Reynolds number and its physical meaning.","Re = rho V L / mu = inertia force / viscous force.","大 Re：inertia 主導。"),
_pxC("pof.x.remach","⚔️","What does preserving Reynolds number ensure?","Similar pressure vs friction drag, similar separation and similar laminar/turbulent behaviour.","3 樣。"),
_pxC("pof.x.remach","⚔️","What does Mach number compare, and what does matching it ensure?","Inertia force to compression force, M = V/a; matching ensures similar compressibility and flow regime.","regime：<0.8、>1.2、>5。"),
_pxC("pof.x.cv","📦","State conservation of mass for a control volume.","Mass flow in minus mass flow out equals the change of mass inside the volume.","ṁin − ṁout = ṁcv。"),
_pxC("pof.x.cv","📦","When can we assume incompressible flow?","For liquids and slow gas flow, Mach below about 0.3, where density is nearly constant and divergence of velocity is zero.","M<0.3。"),
_pxC("pof.x.cv","📦","Why does air speed up in a narrowing passage?","Mass flow is constant (rho u A), so smaller area A means higher velocity u.","連續方程。"),
_pxC("pof.x.momentum","🏹","What does the momentum equation say?","A change in momentum must be caused by a force: F = d(mv)/dt, applied in each direction.","F = ma 推廣。"),
_pxC("pof.x.momentum","🏹","How do you get Bernoulli's equation from the momentum equation?","Assume no body force, inviscid, steady and incompressible flow along a streamline: p1 + 1/2 rho u1^2 = p2 + 1/2 rho u2^2.","假設四個。"),
_pxC("pof.x.momentum","🏹","What are the Euler equations?","The momentum equations with no body force, no viscosity and steady flow.","Aero 最常用。"),
_pxC("pof.x.energy","⚡","State the energy conservation principle for fluids.","Energy cannot be created or destroyed, only change form: heat added plus work done equals change in energy (first law).","δq+δw=de。"),
_pxC("pof.x.energy","⚡","Which equations close the system for compressible flow?","Energy needs e = cv T and the equation of state p = rho R T; with mass and three momentum equations they describe the flow.","5 條方程。"),
_pxC("pof.x.liftchain","⛓️","Explain lift in terms of mass, energy and momentum.","Mass conservation accelerates the flow at the nose (lower pressure), the flow sticks to the surface, and exits smoothly at the trailing edge, turning the flow down; momentum change explains the force.","3 步鏈。"),
_pxC("pof.x.liftchain","⛓️","Is 'air is turned downward' the cause of lift?","No, it is the footprint: it shows the force exists but the why comes from acceleration, surface attachment and the Kutta condition.","結果 ≠ 成因。"),
_pxC("pof.x.myths","🚫","Give two flaws of the equal transit time explanation.","Particles over the top do not need to meet those from below at the trailing edge, and upside-down or flat wings still make lift despite very different path lengths.","唔成立。"),
_pxC("pof.x.myths","🚫","Why is 'air bounces off the bottom' incomplete?","Air does not behave like bouncy balls; it follows the surface and is turned smoothly, with the upper surface contributing most.","Upper surface 主要。"),
_pxC("pof.x.coanda","💨","What is the Coanda effect and why does it matter for wings?","A jet entrains surrounding air, lowering pressure on the surface side so the flow follows the surface; airflow tends to stay attached to the wing.","貼面。"),
_pxC("pof.x.circ","🌀","Why do we need circulation for the Kutta condition?","Without circulation the flow turns around the trailing edge with too much energy; adding circulation moves the stagnation point to the trailing edge so flow leaves smoothly.","Γ 係 Kutta 嘅代價。"),
_pxC("pof.x.circ","🌀","State the Kutta-Joukowski theorem.","Lift per unit span L' = rho V_inf Gamma.","Γ → lift。"),
_pxC("pof.x.flatplate","🧱","How does laminar boundary layer thickness grow on a flat plate?","delta = 5.0 x / sqrt(Re_x), with Cf = 1.328 / sqrt(Re_c).","手寫筆記，已標待驗。",'check'),
_pxC("pof.x.flatplate","🧱","Compare turbulent and laminar skin friction.","Turbulent Cf = 0.074 / Re^(1/5) is larger than laminar 1.328 / sqrt(Re), and the boundary layer is thicker.","Turbulent 摩擦大。",'check'),
_pxC("pof.x.rexcr","📍","How is the transition point found in practice?","Critical Reynolds number Re_x,cr = rho U x_cr / mu is taken from experience, experiments, simulation or literature, not calculated.","唔計得。"),
_pxC("pof.x.rexcr","📍","In the NACA 2412 example, why is real CD between laminar and turbulent values?","Natural transition occurs partway along the chord, so the real CD (about 0.0068) lies between fully laminar (0.0015) and fully turbulent (0.0074).","Lecture 14 例，已標待驗。",'check'),
_pxC("pof.x.sepcost","🌊","What two penalties does boundary-layer separation cause?","Loss of lift (suction on top is lost) and more drag (pressure acts with a larger rearward component).","兩樣。"),
_pxC("pof.x.sepcost","🌊","What is an adverse pressure gradient?","Pressure rising in the flow direction (p2 > p1), which decelerates the boundary layer and can cause reverse flow and separation.","p 向後升。"),
_pxC("pof.x.sepcost","🌊","How can tufts show separation?","Tufts lying flat mean attached flow; wiggling or reversed tufts mean separated flow.","wiggly = separated。"),
_pxC("pof.x.vgen","🌪️","How do vortex generators or trip strips help?","They mix or trip the boundary layer so high-energy air reaches the surface, keeping flow attached and delaying separation.","高速 VG 延遲 shock separation。"),
_pxC("pof.x.perspan","↔️","Why is CL of a finite wing different from the 2D cl?","2D values assume infinite span; a finite wing has tip leakage, downwash, a smaller effective angle of attack and induced drag.","finite-span effect。"),
_pxC("pof.x.machwaves","🔔","What happens to disturbance waves as source speed passes the speed of sound?","Below a they travel upstream; at a they pile into a standing wave; above a they form a Mach cone and nothing travels upstream.","a = speed of sound。"),
_pxC("pof.x.machwaves","🔔","How is the Mach angle defined?","mu = arcsin(1/M) for a supersonic source.","M↑ → 角更尖。"),
_pxC("pof.x.normalcv","💥","What are the three conservation equations across a normal shock?","Mass: rho1 u1 = rho2 u2; momentum: p1 + rho1 u1^2 = p2 + rho2 u2^2; energy: h1 + u1^2/2 = h2 + u2^2/2.","control volume 方法。"),
_pxC("pof.x.normalcv","💥","What is Prandtl's relation?","For a normal shock with adiabatic flow, a*^2 = u1 u2, which implies u1 > a* > u2.","supersonic → subsonic。"),
_pxC("pof.x.normalcv","💥","How do properties change across a normal shock?","Velocity decreases to subsonic; static pressure, density and temperature jump up.","u↓ p,ρ,T↑。"),
_pxC("pof.x.shockseq","🌡️","Describe how shock waves progress on a wing as Mach rises.","At Mcrit local flow reaches Mach 1; then a normal shock forms on top, moves aft, another forms underneath, and finally a bow wave appears with large wave drag.","POF05 slides。"),
_pxC("pof.x.shockseq","🌡️","What flow regimes does POF05 give?","Mach 0-0.3 incompressible, 0.3-0.5 compressibility negligible, 0.5-Mcrit subsonic, up to about 1.2 transonic, 1.2-5 supersonic, above 5 hypersonic.","Mach 範圍。"),
_pxC("pof.sweep","🏹","Why do swept wings avoid shock formation longer?","Only the velocity component perpendicular to the leading edge matters, so the airfoil sees a lower effective Mach number.","V·cosΛ。"),
_pxC("pof.x.sweptstall","🪽","What happens if the tips of a swept wing stall first?","The centre of pressure moves inboard and forward, causing pitch-up, and aileron control is lost early.","ATP ch3。"),
_pxC("pof.x.sweptstall","🪽","Why do swept-wing aircraft need powerful high-lift devices?","Sweep reduces maximum CL, so slats and slotted flaps are needed for acceptable take-off and landing speeds.","CLmax ↓。"),
_pxC("pof.x.machbuffet","📳","Can an aircraft get Mach buffet when flying too slowly?","Yes, at high altitude if too slow for weight, high angle of attack makes local flow supersonic; buffet depends on airflow speed over the wing.","低速 Mach buffet。",'check'),
_pxC("pof.x.ctrleffects","🎛️","State primary and secondary effect of aileron, elevator and rudder.","Aileron: roll, adverse yaw; elevator: pitch, nil; rudder: yaw, roll.","ENZO 02 表。"),
_pxC("pof.x.ctrleffects","🎛️","How does yaw cause roll?","The advancing wing has more lift (higher airspeed and angle of attack, plus dihedral effect), and past about 10-20 degrees the roll can lead to a spiral dive.","further effect。"),
_pxC("pof.x.ctrleffects","🎛️","What are the primary and secondary effects of power?","Primary pitch and yaw (slipstream); secondary IAS change; further effect is a spiral dive if uncorrected.","POF02 表。"),
_pxC("pof.x.trimchg","🔧","What trim changes does adding power cause in a propeller aircraft?","Slipstream over the tail raises the nose and yaws the aircraft left (clockwise propeller), so rudder and elevator input are needed.","DA40 教材。",'check'),
_pxC("pof.x.trimchg","🔧","What happens when take-off flap is selected?","Increased lift makes the aircraft balloon; use forward elevator and re-trim.","balloon。"),
_pxC("pof.x.pa","⚙️","What is the basic performance formula?","Power + Attitude = Performance (flight path and speed).","每次改 power 都配 attitude。"),
_pxC("pof.x.pa","⚙️","Why must pitch attitude be lowered when speed increases in level flight?","Lift is proportional to CL V^2, so higher V needs lower CL, meaning a lower angle of attack.","一個 IAS 一個 attitude。"),
_pxC("pof.x.pa","⚙️","In a descent, what do power and pitch control?","Pitch controls airspeed and power controls rate of descent (powered descent).","ENZO 14。"),
_pxC("pof.x.sht","🔄","Explain Select-Hold-Trim.","Select the attitude and power, hold it until speed stabilises, then trim off the remaining control pressure.","唔好用 trim 改 attitude。"),
_pxC("pof.trim","🔧","Which way do you trim if you are holding back pressure?","Trim back (nose up) until no control pressure remains.","Pull back, trim back。"),
_pxC("pof.x.rangeend","📏","At what speed is range maximised?","At best lift-to-drag ratio (L/D max), about 4 degrees angle of attack in the DA40 notes; fly at the optimum speed and lean the mixture.","POH range curve。",'check'),
_pxC("pof.x.rangeend","📏","Why does piston-aircraft endurance fall with altitude?","Thinner air needs higher true airspeed to produce the same lift, so the engine works harder; fly at the lowest safe altitude for endurance.","小影響。",'check'),
_pxC("pof.x.climbeq","⛰️","Which excess determines climb angle and which determines climb rate?","Angle of climb depends on excess thrust (best angle Vx); rate depends on excess power (best rate Vy).","Vx vs Vy。"),
_pxC("pof.x.climbeq","⛰️","How does wind affect climb angle and rate?","A headwind increases climb angle over the ground, a tailwind reduces it, but rate of climb is unchanged.","Rate 睇時間。"),
_pxC("pof.x.climbeq","⛰️","Give DA40 clean Vx and Vy.","Vx 65 KIAS and Vy 78 KIAS at sea level (cruise climb 90 KIAS).","C172R：65 / 75 (AGK10 slide)。"),
_pxC("pof.x.climbeq","⛰️","How does weight affect climb performance?","Higher weight raises drag and power required, reduces maximum rate of climb and raises the best-climb speed.","ATP Q8397-1。"),
_pxC("pof.x.glideeq","🪂","Why is best glide at L/D max?","In a glide sin(theta) = D/W; with L about equal to W, minimum drag gives the smallest glide angle.","min drag。"),
_pxC("pof.x.glideeq","🪂","Does weight change glide range?","No, at the L/D max angle of attack range is unchanged, but best glide speed rises with weight and you arrive sooner.","距離同，時間短。"),
_pxC("pof.x.glideeq","🪂","How do headwind and flap affect glide?","Headwind shortens glide distance but not rate of descent; flap adds drag, steepening the glide and reducing range.","DA40：85 / 80 KIAS。"),
_pxC("pof.x.sideslip","↘️","What is a sideslip and why use it?","Banking with opposite rudder (crossed controls) exposes the fuselage sideways, adding drag so you descend more steeply without gaining airspeed.","forced landing 用。"),
_pxC("pof.x.sideslip","↘️","What should you watch during a sideslip?","Nose tends to drop so add back pressure, hold airspeed with elevator, and do not trim.","唔好 trim。"),
_pxC("pof.x.flapops","🪽","What is the DA40 flap speed limit for take-off and landing flap?","Take-off 10 degrees not above 108 KIAS; landing 25 degrees not above 91 KIAS.","ENZO 02。"),
_pxC("pof.x.flapops","🪽","What is the procedure before selecting flap?","Check speed below the limit, select one stage, confirm it moved, and anticipate pitch change; change one setting at a time.","VFE。"),
_pxC("pof.x.flapops","🪽","Why do take-off flap and landing flap differ?","Take-off flap gives more lift than drag; landing flap gives more drag, allowing lower speed and steeper approach.","分別。"),
_pxC("pof.x.clshift","📊","How do flaps change the CL-alpha curve?","They raise CL max (lowering stall speed), usually reduce the stall angle of attack, and increase drag; slotted Fowler gives the largest gain.","POF02 圖。"),
_pxC("pof.flaps","🪽","Do flaps change the critical angle of attack?","Generally yes, they raise CL max but the stall occurs at a lower angle of attack.","POF02 slide 5。"),
_pxC("pof.x.cpf","🔄","What provides the centripetal force in a turn?","The horizontal component of lift; the centrifugal force is the equal and opposite reaction (Newton's third law).","lift 傾斜。"),
_pxC("pof.x.cpf","🔄","What happens if lift is not increased in a bank?","The vertical lift component falls below weight, so the aircraft sinks and may enter a spiral dive.","要加 AoA。"),
_pxC("pof.x.turnradius","🛞","Does a 747 turn wider than a DA40 at the same TAS and bank?","No, radius depends only on true airspeed and bank angle, r = V^2/(g tan(bank)).","同機型無關。"),
_pxC("pof.x.turnradius","🛞","What is a rate one turn and what is its diameter?","3 degrees per second (360 degrees in 2 min); diameter in nm is about 1% of IAS in knots.","100 kt → 約 1 nm。"),
_pxC("pof.x.turnradius","🛞","How do bank and speed change turn rate and radius?","More bank or less speed gives smaller radius and faster rate; less bank or more speed gives larger radius and slower rate.","ENZO OLD 05。"),
_pxC("pof.rot","🛞","Calculate: how does turning at a steeper bank at the same speed change radius?","Radius is proportional to 1/tan(bank): 30 to 60 degrees bank cuts radius from V^2/(0.577 g) to V^2/(1.73 g), about one third.","tan30=0.577, tan60=1.73。"),
_pxC("pof.loadfactor","⚖️","Calculate the stall speed at 60 degree bank if Vs1 is 53 kt.","n = 1/cos60 = 2, so Vs = 53 x sqrt(2) = about 75 kt.","DA40。"),
_pxC("pof.loadfactor","⚖️","Calculate the load factor at 30 degrees of bank and the stall speed increase.","n = 1/cos30 = 1.155, stall speed rises by sqrt(1.155) = about 7.5%.","53 → 57 kt。"),
_pxC("pof.stallfactors","📉","How does weight, flap and power change stall speed?","Higher weight raises it; flaps lower it; more power lowers it (thrust vertical component and slipstream); more load factor raises it.","ENZO OLD 06。"),
_pxC("pof.stallfactors","📉","Give the DA40 clean stall speeds against weight.","About 47 KIAS at 980 kg, 52 at 1150 kg and 53 at 1200 kg (flaps up).","舊 briefing 表。"),
_pxC("pof.stallrec","🛬","In stall recovery, what must rudder never be used for?","Never to level the wings; use it only to prevent further yaw, unstall with forward control column, then level with aileron.","spin 風險。"),
_pxC("pof.spiral","🌀","How do spin and spiral dive differ?","Spin: stalled, low steady airspeed, low g; spiral: not stalled, speed and g increasing, rapid descent.","POF03 表。"),
_pxC("pof.spiral","🌀","How do you recover from a spiral dive?","Power idle, roll wings level, then ease out of the dive smoothly (one thing at a time).","唔好先拉。"),
_pxC("pof.x.moment","➗","What is a moment and where do designers put the CG?","Moment is force times distance about the CG; designers place the CG near 20 percent of mean aerodynamic chord.","PHAK。"),
_pxC("pof.x.thrustline","⬆️","How does the thrust line affect pitch with power?","A thrust line above the CG tends to pitch nose down with power; below the CG tends to pitch nose up; through the CG gives no change.","PHAK Fig 5-26。"),
_pxC("pof.x.thrustline","⬆️","How does speed change tail download?","Faster flow increases downwash and tail download; slower flow reduces it, so the nose drops and speed recovers.","stable。"),
_pxC("pof.x.phugoid","〰️","Describe the long-period pitch oscillation.","Nose drops, speed rises, tail download increases and the nose rises; speed falls and the cycle repeats with decreasing amplitude if dynamically stable.","PHAK p16。",'check'),
_pxC("pof.x.dynstab","📉","Distinguish static and dynamic stability.","Static is the initial tendency to return; dynamic is whether oscillations then decay (positive), stay constant, or grow (negative).","ATP ch3。"),
_pxC("pof.x.dynstab","📉","Which tail provides pitch and which yaw stability?","The horizontal tail provides pitch stability and the vertical tail directional stability.","CG 後移 → 穩定性降。"),
_pxC("pof.x.keel","⚓","What is keel effect?","In a high-wing aircraft the fuselage acts like a keel, turning the longitudinal axis into the relative wind and steadying roll.","pendulum。"),
_pxC("pof.x.aoaind","🧭","Why is an AOA indicator useful?","It shows margin to the critical angle of attack, which is always the same, while stall speed varies with load factor, weight and configuration.","loss of control。"),
_pxC("pof.x.aoaind","🧭","When is the published stall speed valid?","In unaccelerated 1G, coordinated flight at one weight (usually max), and a given flap setting and clean wing.","PHAK。"),
_pxC("pof.x.propwing","🌀","How does a propeller produce thrust?","Each blade is an airfoil; relative wind from rotation and forward speed gives an angle of attack, lowering pressure ahead of the disc to pull the aircraft forward.","Rotating wing。"),
_pxC("pof.x.propwing","🌀","What is the difference between blade angle and angle of attack?","Blade angle is chord to plane of rotation; angle of attack is chord to relative wind and depends on forward speed.","PHAK。"),
_pxC("pof.x.proptwist","🌀","Why are propeller blades twisted?","Blade sections near the tip move faster, so the blade angle is reduced toward the tip to keep angle of attack about constant along the blade in cruise.","ATP Q8368。"),
_pxC("pof.x.proptwist","🌀","Define geometric pitch, effective pitch and slip.","Geometric pitch is the theoretical advance per revolution; effective pitch is actual advance; slip is the difference.","PHAK。"),
_pxC("pof.x.propeff","🌀","Why use a constant-speed propeller?","It adjusts blade angle automatically to keep an efficient angle of attack for all engine and aircraft speeds, fine at take-off and coarser in cruise.","唔係變 power。"),
_pxC("pof.x.propeff","🌀","What is typical propeller efficiency?","About 50 to 87 percent depending on slip.","PHAK p29。"),
_pxC("pof.groundeffect","🛫","What happens when an aircraft leaves ground effect?","Induced drag rises, a higher angle of attack is needed, stability falls with a nose-up change, and static pressure readings change so indicated airspeed reads higher.","ATP Q8375。"),
_pxC("pof.groundeffect","🛫","How can the wing give the same lift in ground effect?","At a lower angle of attack, since reduced wingtip vortices cut induced angle of attack.","ATP Q8379。"),
_pxC("pof.powercurve","📈","Below L/D max speed, what does raising the nose do?","Total drag increases so, at fixed power, the aircraft descends or slows (back of the drag curve); above L/D max, raising the nose lets it climb.","ATP Q8399。"),
_pxC("pof.stall","🛑","Does a wing's stall angle change with weight or altitude?","No, a wing always stalls at the same critical angle of attack; stall speed (IAS/TAS) changes with weight, load factor and density.","IAS 近常數，TAS 隨高度升。"),
_pxC("pof.shocktypes","💥","Compare normal, oblique and expansion waves.","Normal: no direction change, supersonic to subsonic, high loss, large pressure rise; oblique: converging, still supersonic, less loss; expansion: diverging, speeds up, small loss, pressure falls.","POF05 summary table。"),
_pxC("pof.arearule","🫙","What is the area rule?","Keep cross-sectional area along the aircraft smoothly distributed (a narrowed waist where the wing is) to cut transonic wave drag.","教材只列標題，已標待驗。",'check'),
_pxC("pof.intakes","🌀","Why do supersonic intakes slow the flow before the engine?","A jet engine needs subsonic air, so ramps create oblique shocks then a weak normal shock to decelerate the flow.","教材只列標題，已標待驗。",'check'),
_pxC("pof.supfoil","🔺","Why is a supersonic airfoil thin and sharp?","A sharp leading edge keeps an attached oblique shock and thin section reduces wave drag; a blunt edge gives a detached bow wave.","教材只列標題，已標待驗。",'check'),
_pxC("pof.vmo","🚨","What does Vmo/Mmo mark?","The maximum operating speed and Mach number, the bottom of the red/black barber pole; exceeding risks buffet, flutter and Mach tuck.","POF05。"),
]
,
links:[
["pof.x.scope","pof.x.cv","Water ρ=const，air 要用 ρ 變嘅 continuity"],
["pof.x.variables","pof.x.gas","p、ρ、T 由 ideal gas law 連埋"],
["pof.x.shear","pof.bl","μ + velocity gradient → boundary layer"],
["pof.x.twoforces","pof.x.nad","積分 P、τ → N'、A' → L'、D'"],
["pof.x.cyl3","pof.x.circ","Spinning cylinder 嘅 Γ 同 airfoil 嘅 Kutta circulation 同原理"],
["pof.x.circ","pof.u.kj","Γ → L' = ρV∞Γ"],
["pof.x.xcp","pof.cp","x_cp 隨 α 郁 → 實用改用 c/4 moment"],
["pof.x.coeffs","pof.liftformula","CL 由 ½ρV²S 做 reference force"],
["pof.x.similar","pof.x.remach","Re 同 M 相同先 similar"],
["pof.x.remach","pof.machnum","M = V/a = √(inertia/compression)"],
["pof.x.cv","pof.x.momentum","Mass + momentum → Bernoulli"],
["pof.x.momentum","pof.bernoulli","Euler + incompressible + streamline = Bernoulli"],
["pof.x.energy","pof.x.normalcv","Energy eqn + shock control volume → Prandtl relation"],
["pof.x.liftchain","pof.x.coanda","第二步：flow 貼面"],
["pof.x.liftchain","pof.x.circ","第三步：Kutta ← circulation"],
["pof.x.flatplate","pof.x.rexcr","δ、Cf 公式要知 transition 位置"],
["pof.x.rexcr","pof.x.sepcost","Laminar 晚轉 turbulent → 易 separate"],
["pof.x.vgen","pof.x.sepcost","Turbulent BL 有 energy → 延遲 separation"],
["pof.x.perspan","pof.induced","有限翼 → downwash → induced drag"],
["pof.x.machwaves","pof.shocktypes","u>a 嘅波疊成 shock"],
["pof.x.shockseq","pof.wavedrag","Bow wave 出現 → wave drag 大增"],
["pof.x.sweptstall","pof.machtuck","Root stall → tuck；tip stall → pitch-up"],
["pof.x.machbuffet","pof.vmo","Buffet boundary 限制速度範圍"],
["pof.x.ctrleffects","pof.advyaw","Aileron secondary effect = adverse yaw"],
["pof.x.trimchg","pof.x.sht","改 config → re-trim"],
["pof.x.pa","pof.x.climbeq","Climb：excess thrust/power"],
["pof.x.climbeq","pof.vxvy","sinγ=(T−D)/W 定 Vx、Vy"],
["pof.x.glideeq","pof.ld","Glide angle 最細 = L/D max"],
["pof.x.sideslip","pof.x.glideeq","加 drag → 更陡下降"],
["pof.x.flapops","pof.x.clshift","Flap → CLmax ↑、stall α ↓"],
["pof.x.cpf","pof.loadfactor","轉彎要加 lift → n = 1/cosφ"],
["pof.x.turnradius","pof.rot","r = V²/(g tanφ)"],
["pof.x.thrustline","pof.longstab","Tail download 同 thrust line 影響 pitch stability"],
["pof.x.phugoid","pof.x.dynstab","慢擺動 = dynamic stability"],
["pof.x.aoaind","pof.stall","Critical α 固定，IAS 唔固定"],
["pof.x.propwing","pof.pfactor","Blade AoA 隨機頭姿態變 → P-factor"],
["pof.x.propeff","pof.x.proptwist","Twist + CSU 令 AoA 保持有效"]
]
,
anims:[
{title:"Circulation → Stagnation Point → Lift (Cylinder)",hint:"拉 Γ：下面 stagnation 點移、上面快 p 低、Cp 曲線分叉＝lift（Kutta 概念）",build(box,H){
  const svg=H.svg(box,700,320),say=H.note(box);H.marker(svg,"axc","#fbbf24");
  const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
  const CX=250,CY=165,R=48,U=1;let g=0;
  const P=[];for(let i=0;i<60;i++){P.push({x:Math.random()*480,y:40+Math.random()*250,c:H.el("circle",{r:2.4,fill:"#7dd3fc"},svg)})}
  H.el("circle",{cx:CX,cy:CY,r:R,fill:"#e2e8f0"},svg);
  const stag=H.el("circle",{r:6,fill:"#f87171"},svg);
  const arr=H.el("line",{stroke:"#fbbf24","stroke-width":5,"marker-end":"url(#axc)"},svg);
  T(10,22,"Uniform flow + doublet + vortex (Γ clockwise)","#94a3b8",12);const lt=T(CX,60,"LIFT","#fbbf24",13,"middle");
  // Cp plot
  const X0=490,Y0=250,W=190,Hh=170;
  H.el("rect",{x:X0,y:Y0-Hh,width:W,height:Hh,fill:"none",stroke:"#475569"},svg);
  T(X0,Y0-Hh-6,"Cp around cylinder (suction ↑)","#94a3b8",11);T(X0+W,Y0+14,"θ −180°→180°","#94a3b8",10,"end");
  const zero=H.el("line",{x1:X0,x2:X0+W,stroke:"#475569","stroke-dasharray":"3 3"},svg);
  const cpl=H.el("polyline",{fill:"none",stroke:"#fbbf24","stroke-width":2},svg);
  const cpY=c=>Y0-Hh/2-c*(Hh/2)/4.5;
  function vel(x,y){const r2=x*x+y*y,r4=r2*r2;
    const u=U*(1-R*R*(x*x-y*y)/r4)+2*U*R*g*y/r2;
    const v=-2*U*R*R*x*y/r4-2*U*R*g*x/r2;return [u,v]}
  H.slider(box,"Circulation Γ (0 → 4πUR)",0,120,0,s=>{g=s/100;
    const th=Math.asin(Math.min(1,g));// 下面 stagnation (g<=1)
    const sx=CX+R*Math.cos(-Math.PI/2-(g<=1?Math.asin(g)-Math.PI/2+Math.PI/2:0)+0);
    let ang=g<=1?(Math.PI+Math.asin(g)):-Math.PI/2;
    stag.setAttribute("cx",CX+R*Math.cos(ang+0));stag.setAttribute("cy",CY-R*Math.sin(ang));
    // front stagnation moves down: sinθ = -g (θ ccw from +x), front is θ=180°+asin(g)
    const L=g*80;arr.setAttribute("x1",CX);arr.setAttribute("y1",CY-R-6);arr.setAttribute("x2",CX);arr.setAttribute("y2",CY-R-6-Math.max(2,L));
    lt.setAttribute("y",CY-R-14-L);lt.textContent=g<0.02?"L = 0":"L' = ρ V Γ";
    zero.setAttribute("y1",cpY(0));zero.setAttribute("y2",cpY(0));
    let pts="";for(let d=-180;d<=180;d+=6){const t=d*Math.PI/180,c=1-4*Math.pow(Math.sin(t)+g,2);pts+=(X0+(d+180)/360*W)+","+cpY(c)+" "}
    cpl.setAttribute("points",pts);
    say(g<0.02?"Γ = 0：上下對稱，pressure 對稱 → lift = 0（d'Alembert）":g<1?"Γ ↑：頂面 speed ↑、p ↓，底面相反 → Cp 曲線分叉 = lift (L' = ρVΓ)。Airfoil 靠 Kutta 條件揀 Γ，令尾部 flow 平順離開。":"Γ 太大：stagnation 點離開表面（cylinder 專屬）")});
  H.loop(()=>{P.forEach(p=>{const dx=p.x-(CX-10),dy=p.y-CY;
    let uv=vel(p.x-CX,CY-p.y);p.x+=uv[0]*2.4;p.y-=uv[1]*2.4;
    const inside=(p.x-CX)*(p.x-CX)+(p.y-CY)*(p.y-CY)<R*R*0.98;
    if(inside||p.x>480||p.y<20||p.y>310||!isFinite(p.x)||!isFinite(p.y)){p.x=Math.random()*20;p.y=40+Math.random()*250}
    p.c.setAttribute("cx",p.x);p.c.setAttribute("cy",p.y)})});
}},
{title:"Reynolds Number → Boundary-Layer Transition",hint:"加風速：Re_x 過臨界 → laminar 變 turbulent，BL 變厚",build(box,H){
  const svg=H.svg(box,700,300),say=H.note(box);
  const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
  const X0=60,L=580,YP=210,nu=1.5e-5,Rcr=5e5;
  const bl=H.el("polygon",{fill:"rgba(56,189,248,0.25)",stroke:"#38bdf8","stroke-width":2},svg);
  H.el("rect",{x:X0,y:YP,width:L,height:8,fill:"#e2e8f0"},svg);
  const mk=H.el("line",{y1:YP-90,y2:YP+8,stroke:"#f87171","stroke-dasharray":"4 4"},svg);const mt=T(0,YP-96,"transition x_cr","#f87171",12,"middle");
  T(X0,YP+28,"flat plate L = 1 m (leading edge)","#94a3b8",11);T(X0+L,YP+28,"→ x","#94a3b8",11,"end");
  const dots=[];for(let i=0;i<40;i++)dots.push({f:Math.random(),h:Math.random(),c:H.el("circle",{r:2.2,fill:"#e2e8f0"},svg)});
  let U=5,xc=1;
  const SC=1500;// px per metre of δ (exaggerated)
  H.slider(box,"Free-stream U (m/s)",2,60,5,v=>{U=v;xc=Math.min(1,Rcr*nu/U);
    let pts=[X0+","+YP];const N=60;
    for(let i=1;i<=N;i++){const x=i/N;const Rx=U*x/nu;const d=x<=xc?5*x/Math.sqrt(Rx):0.37*x/Math.pow(Rx,0.2);pts.push((X0+x*L)+","+(YP-Math.min(110,d*SC)))}
    pts.push((X0+L)+","+YP);bl.setAttribute("points",pts.join(" "));
    mk.setAttribute("x1",X0+xc*L);mk.setAttribute("x2",X0+xc*L);mk.setAttribute("opacity",xc<1?1:0.15);mt.setAttribute("x",X0+xc*L);mt.setAttribute("opacity",xc<1?1:0.15);
    say("Re_L = "+(U*1/nu/1e5).toFixed(1)+"×10⁵ ；"+(xc<1?"x_cr ≈ "+(xc*100).toFixed(0)+" cm（Re_x,cr≈5×10⁵）：之後 turbulent，BL 突然變厚、skin friction ↑、但較抗 separation":"Re 未夠臨界：整塊板 laminar，δ = 5x/√Re_x，摩擦細但易 separate (adverse gradient)"))});
  H.loop(()=>{dots.forEach(d=>{const x=d.f;const Rx=U*x/nu;const dl=x<=xc?5*x/Math.sqrt(Rx):0.37*x/Math.pow(Rx,0.2);const hh=Math.min(110,dl*SC);
    d.f+=0.004*(0.3+d.h*0.9);if(d.f>1)d.f=0.02;
    const tur=d.f>xc;const jit=tur?(Math.random()-0.5)*14:0;
    d.c.setAttribute("cx",X0+d.f*L);d.c.setAttribute("cy",YP-Math.max(2,Math.min(hh*0.95,d.h*hh+jit)));d.c.setAttribute("fill",tur?"#fbbf24":"#7dd3fc")})});
}},
{title:"Control Volume: Mass In = Mass Out",hint:"收窄管：A↓ → u↑ → p↓（連續方程 + Bernoulli）",build(box,H){
  const svg=H.svg(box,700,300),say=H.note(box);
  const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
  const CY=130,X0=40,X1=660,H0=60;let k=0.5;
  const top=H.el("path",{fill:"none",stroke:"#94a3b8","stroke-width":3},svg),bot=H.el("path",{fill:"none",stroke:"#94a3b8","stroke-width":3},svg);
  const hAt=x=>{const t=(x-X0)/(X1-X0);const s=Math.exp(-Math.pow((t-0.5)/0.17,2));return H0*(1-(1-k)*s)};
  const P=[];for(let i=0;i<46;i++)P.push({x:X0+Math.random()*(X1-X0),h:(Math.random()*2-1)*0.9,c:H.el("circle",{r:2.6,fill:"#7dd3fc"},svg)});
  const cv=H.el("rect",{y:CY-H0-8,height:2*H0+16,fill:"none",stroke:"#fbbf24","stroke-dasharray":"5 4","stroke-width":2},svg);
  T(X0,CY+H0+40,"inlet: A₁, u₁, p₁","#94a3b8",12);const tt=T(350,CY+H0+40,"","#fbbf24",12,"middle");
  // bars
  const bu=H.el("rect",{x:560,width:26,fill:"#38bdf8"},svg),bp=H.el("rect",{x:620,width:26,fill:"#4ade80"},svg);
  T(573,262,"u","#38bdf8",12,"middle");T(633,262,"p","#4ade80",12,"middle");
  H.slider(box,"Throat area A₂/A₁ (%)",25,100,50,v=>{k=v/100;
    let d1="M"+X0+","+(CY-H0),d2="M"+X0+","+(CY+H0);for(let x=X0;x<=X1;x+=10){d1+=" L"+x+","+(CY-hAt(x));d2+=" L"+x+","+(CY+hAt(x))}
    top.setAttribute("d",d1);bot.setAttribute("d",d2);
    const cx=X0+(X1-X0)*0.5-35;cv.setAttribute("x",cx);cv.setAttribute("width",70);
    const u=1/k,pp=1-0.5*(u*u-1)*0.35;
    bu.setAttribute("y",262-30-u*30);bu.setAttribute("height",30+u*30-0);bp.setAttribute("y",262-Math.max(8,pp*70));bp.setAttribute("height",Math.max(8,pp*70));
    tt.textContent="ρ u₁A₁ = ρ u₂A₂ → u₂ = "+u.toFixed(1)+"× u₁";
    say("Control volume：ṁin = ṁout (ρ 不變)。A 縮到 "+v+"% → u ×"+u.toFixed(1)+"；Bernoulli：u ↑ → p ↓（只適用 M<0.3 同無 viscous）。")});
  H.loop(()=>{P.forEach(p=>{const h=hAt(p.x),u=1/(h/H0);p.x+=1.6*u;if(p.x>X1)p.x=X0;
    p.c.setAttribute("cx",p.x);p.c.setAttribute("cy",CY+p.h*hAt(p.x))})});
}},
{title:"Mach Waves: Subsonic → Sonic → Mach Cone",hint:"拉 Mach：u<a 波去到前面；u>a 形成 Mach cone",build(box,H){
  const svg=H.svg(box,700,300),say=H.note(box);
  const T=(x,y,s,f,sz,a)=>{const t=H.el("text",{x:x,y:y,fill:f||"#cbd5e1","font-size":sz||12,"text-anchor":a||"start"},svg);t.textContent=s;return t};
  const CY=150,A=1.1;let M=0.5,sx=60,t=0;const W=[];
  const cones=[H.el("line",{stroke:"#f87171","stroke-width":2.5},svg),H.el("line",{stroke:"#f87171","stroke-width":2.5},svg)];
  const pool=[];for(let i=0;i<36;i++)pool.push(H.el("circle",{fill:"none",stroke:"#7dd3fc","stroke-width":1.4,opacity:0},svg));
  const src=H.el("circle",{r:6,fill:"#fbbf24"},svg);
  H.slider(box,"Mach (source speed / a)",3,25,5,v=>{M=v/10;W.length=0;sx=60;
    say(M<0.98?"M < 1：波比 source 行得快，去到前面 → 上游有預警":M<1.04?"M ≈ 1：波疊喺 source 前面成 wavefront（standing wave）":"M > 1：形成 Mach cone，sin μ = 1/M = "+(1/M).toFixed(2)+"（μ ≈ "+(Math.asin(1/M)*180/Math.PI).toFixed(0)+"°）；cone 外面完全唔知")});
  H.loop(()=>{t++;sx+=M*A;if(sx>640){sx=60;W.length=0}
    if(t%9===0)W.push({x:sx,t:t});
    pool.forEach((c,i)=>{const w=W[i];if(!w||W.length>36){c.setAttribute("opacity",0);return}const r=(t-w.t)*A;c.setAttribute("cx",w.x);c.setAttribute("cy",CY);c.setAttribute("r",r);c.setAttribute("opacity",r>320?0:0.9)});
    src.setAttribute("cx",sx);src.setAttribute("cy",CY);
    if(M>1.02){const mu=Math.asin(1/M),L=300;cones[0].setAttribute("x1",sx);cones[0].setAttribute("y1",CY);cones[0].setAttribute("x2",sx-L*Math.cos(mu));cones[0].setAttribute("y2",CY-L*Math.sin(mu));
      cones[1].setAttribute("x1",sx);cones[1].setAttribute("y1",CY);cones[1].setAttribute("x2",sx-L*Math.cos(mu));cones[1].setAttribute("y2",CY+L*Math.sin(mu));cones.forEach(c=>c.setAttribute("opacity",1))}
    else cones.forEach(c=>c.setAttribute("opacity",0))});
}},
]
,src:"補漏：Lecture 1-5 手寫、POF02/03/05、ENZO guide、AGK10、PHAK ch5、ATP ch3"});
