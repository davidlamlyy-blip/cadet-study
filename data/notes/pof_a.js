// 學習筆記 POF 第 4–6 章（Air & Atmosphere / Airfoil & Wing / Drag）。中文為主、tech term 英文；圖來自 FAA PHAK（公有領域）。
// rl＝每條 Recall 對應嘅 Duolingo 課堂 id（null＝暫時未有課堂）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.atmos",k:"pof",n:4,t:"Air & Atmosphere",g:"Air & Atmosphere",lesson:null,src:["PHAK ch4","RPL ch1 & ch6","ATP ch3","Airspace POF"],
rec:["ISA 嘅 sea level 標準值係咩？","空氣有咩成份？點解 humidity 高會令 density 低？","Density altitude 係咩？Hot, high, humid 點影響 performance？","IAS、CAS、TAS 有咩分別？高空同一 IAS 點解 TAS 更大？","Mach number 係咩？Stall IAS 點解唔隨 altitude 變？","Viscosity 同 boundary layer 有咩關係？"],
rl:[null,null,null,null,null,null],
notes:`## 1. 空氣係咩 (Atmosphere)
- 空氣有 **mass、weight、density**，係 fluid，所以 wing 先可以靠 airflow 產生 lift。
- 成份大約：**78% nitrogen、21% oxygen、約 1% 其他氣體**（例如 argon）。
- 水蒸氣分子比 nitrogen／oxygen 輕，所以 **humidity 高 → density 低**。
- density 隨 altitude 增加而下降，因為上面壓住嘅空氣少咗。

## 2. ISA (International Standard Atmosphere)
ISA 係一個標準參考大氣，用嚟比較 performance 同校 instrument。
| 項目 | ISA sea level 值 |
| Temperature | 15°C |
| Pressure | 1013.25 hPa（29.92 inHg） |
| Density | 約 1.225 kg/m³ |
- Temperature 隨 altitude 降，troposphere 入面 lapse rate 約 **2°C／1000 ft**（6.5°C／km），去到 tropopause（約 36,000 ft）；之後先 isothermal（約 −56.5°C）。
- 以上係 ICAO／ISA 通用定義，FAA 同 CASA 都用同一套。

## 3. Density altitude
- **Pressure altitude**：altimeter 設 1013.25 hPa（29.92）時讀到嘅 altitude。
- **Density altitude (DA)**：pressure altitude 按「同 ISA 差幾多 temperature」修正；等於「飛機感覺自己喺幾高」。
- **Hot、high、humid = high DA**。後果：
  - wing 嘅 lift 少（L = ½ρV²SCL，ρ 細）
  - engine power 少、propeller efficiency 差
  - takeoff roll 長、climb rate 差
- 粗略經驗法則：DA ≈ PA + 120 × (OAT − ISA temp) ft（rule of thumb，只作估算，實際用 chart／flight computer）。

## 4. IAS、TAS 同 Mach
| 速度 | 意思 |
| IAS | Pitot 量到嘅 dynamic pressure 直接換算，儀表讀數 |
| CAS | IAS 修正 instrument／position error |
| TAS | 真正穿過空氣嘅 speed，要按 density 修正 |
- 高空 density 低，同一 dynamic pressure 要更大 TAS → **同一 IAS，TAS 隨 altitude 增加**（經驗法則：約每 1000 ft 加 2%）。
- **Stall IAS 唔隨 altitude 變**：stall 取決於 dynamic pressure（½ρV²），IAS 正正反映呢個值；TAS 就會變大。
- **Mach number = TAS ÷ local speed of sound**。speed of sound 只同 temperature 有關，所以高空較冷，同一 TAS 嘅 Mach 會較高。

## 5. Viscosity 同 friction
- 空氣 viscosity 好低，但 surface 微觀上都粗糙，貼面一層空氣被拖慢。
- 結果係 **boundary layer**（見 Drag 章）同 **skin friction drag**。
![Boundary layer：貼面空氣被 surface 拖慢，離面愈遠愈接近 free stream（FAA PHAK 圖）](img/phak/boundary-layer.png)

## 6. 面試要記
- 講到 performance 變差，要講清楚 **density 低 → lift、thrust、power 全部受影響**。
- Altimeter 設 1013.25 hPa 係 standard setting；ISA 值屬 ICAO 定義。
- Humidity 對 density 嘅影響細過 temperature 同 altitude，但 hot day 加埋都要計。`,
sum:`- 空氣：約 **78% N₂、21% O₂**；有 mass 同 density，density 隨 altitude 降。
- **ISA sea level：15°C、1013.25 hPa**；troposphere lapse rate 約 2°C／1000 ft。
- **Hot、high、humid → high density altitude** → lift、thrust、propeller efficiency 全部下降，takeoff 同 climb 變差。
- 同一 **IAS** 喺高空 **TAS 更大**；**stall IAS 唔隨 altitude 變**。
- **Mach = TAS ÷ speed of sound**；viscosity 令 surface 附近出現 boundary layer 同 skin friction。`,
mcq:[
{q:"Approximately what percentage of the atmosphere is oxygen?",o:{A:"1%",B:"21%",C:"50%",D:"78%"},a:"B",why:"About 78% nitrogen, 21% oxygen and 1% other gases.",zh:"氧氣約佔 21%，nitrogen 約 78%。"},
{q:"ISA sea level conditions are:",o:{A:"0°C and 1013.25 hPa",B:"20°C and 1000 hPa",C:"15°C and 1000 hPa",D:"15°C and 1013.25 hPa"},a:"D",why:"ISA defines 15°C and 1013.25 hPa (29.92 inHg) at mean sea level.",zh:"ISA 係 15°C、1013.25 hPa。"},
{q:"Which combination gives the HIGHEST density altitude?",o:{A:"High elevation, high temperature, high humidity",B:"Low elevation, low temperature, low humidity",C:"High elevation, low temperature, low humidity",D:"Low elevation, high temperature, low humidity"},a:"A",why:"Height, heat and moisture all reduce air density.",zh:"hot、high、humid 令 density 最低。"},
{q:"Why does higher humidity reduce air density?",o:{A:"Water vapour is heavier than dry air",B:"Water vapour increases the pressure",C:"Water vapour is lighter than the nitrogen and oxygen it displaces",D:"Humid air is always colder"},a:"C",why:"Water vapour molecules are lighter than N₂ and O₂.",zh:"水蒸氣比 N₂／O₂ 輕。"},
{q:"At a constant IAS, as altitude increases the TAS:",o:{A:"Decreases",B:"Increases",C:"Stays the same",D:"Equals Mach number"},a:"B",why:"Lower density needs a higher TAS to give the same dynamic pressure.",zh:"density 低，同一 IAS 要更大 TAS。"},
{q:"The indicated stall speed of an aircraft (same weight and configuration) with increasing altitude:",o:{A:"Increases with altitude",B:"Decreases with altitude",C:"Is lower in cold air only",D:"Remains essentially the same"},a:"D",why:"Stall depends on dynamic pressure, which IAS reflects.",zh:"stall IAS 大致唔隨 altitude 變。"},
{q:"Mach number is defined as:",o:{A:"TAS divided by the local speed of sound",B:"IAS divided by the speed of sound at sea level",C:"Ground speed divided by TAS",D:"CAS multiplied by density ratio"},a:"A",why:"Mach = TAS / local speed of sound, which depends on temperature.",zh:"Mach = TAS ÷ 當地 speed of sound。"},
{q:"Which statement about the standard lapse rate in the troposphere is correct (ISA)?",o:{A:"Temperature increases about 2°C per 1000 ft",B:"Temperature is constant with height",C:"Temperature decreases about 2°C per 1000 ft",D:"Temperature decreases about 10°C per 1000 ft"},a:"C",why:"ISA lapse rate is about 1.98°C per 1000 ft (6.5°C per km).",zh:"ISA lapse rate 約 2°C／1000 ft。"}
]},
{id:"ln.pof.airfoil",k:"pof",n:5,t:"Airfoil & Wing",g:"Airfoil & Wing",lesson:null,src:["PHAK ch4–5","RPL ch6","Lecture 13/14/16","POF02"],
rec:["Chord line、camber、thickness 係咩？NACA 4412 點解？","Symmetric 同 cambered airfoil 有咩分別？各用喺邊？","Aspect ratio 點計？High AR 有咩好處同代價？","Elliptical、tapered、swept、delta planform 各有咩特點？","High wing、low wing、dihedral 對 stability 有咩影響？","Washout 同 stall strip 點樣令 root 先 stall？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Airfoil 術語 (Terminology)
- **Chord line**：leading edge (LE) 到 trailing edge (TE) 嘅直線；**chord** 係佢嘅長度。
- **Mean camber line**：上下 surface 之間嘅中線；離 chord line 愈遠 = **camber** 愈大。
- **Thickness**：用 t/c（thickness ÷ chord）表示；另外有 **LE radius**。
- **NACA 4 位數**例子：4412 → max camber 4% chord、位置喺 40% chord、max thickness 12% chord。
- AoA 係 chord line 對 relative wind（見 Lift 章）。

## 2. Camber 同 airfoil 種類
| 種類 | 特點 | 常見用途 |
| Cambered（positive camber） | CL 高，α = 0° 都有 lift | 一般 wing，低速 |
| Symmetric | α = 0° 時 lift = 0 | tailplane、aerobatic、rudder |
| Laminar-flow foil | max thickness 靠後（約 mid-chord），drag 低 | 高效率 wing |
- Tailplane 可以有 negative camber 去產生向下 force。
- 薄 airfoil 傾向 **LE stall**（stall 突然）；較厚傾向 **TE stall**（較溫和）。Laminar foil 通常 stall 較突然、對 surface 污染敏感（一般認知，具體飛機要睇 AFM）。

## 3. Aspect ratio (AR)
- **AR = b² / S**（span² ÷ wing area）。
- **High AR**（glider）→ induced drag 低：**CDi = CL² / (π · e · AR)**。
- **Low AR**（fighter、delta）→ induced drag 高，但結構短而勁、roll 靈。
- 代價：High AR wing 長、bending moment 大 → 結構較重。

## 4. Wing planform
- **Rectangular**：易造；**root 先 stall**（對 pilot 友善）。
- **Tapered**：接近 elliptical，induced drag 低、較輕。
- **Elliptical**：理論上 **induced drag 最低**（e = 1），但造價高。
- **Swept**：提高 **Mcrit**（高速）；缺點係傾向 **tip stall**，低速性能差。
- **Delta**：適合 supersonic，AR 低。

## 5. Wing configuration
- **High wing**：CG 喺 wing 下面 → pendulum stability，視野向下好。
- **Low wing**：**ground effect** 較強；視野向上好。
- **Dihedral**：wing 向上翹 → sideslip 時產生 roll 回復力（lateral stability）。
- **Anhedral**：向下垂 → 較靈活、較唔穩定。

## 6. Washout 同 stall strip
- **Washout**：wingtip 嘅 incidence 細過 root → tip 嘅 AoA 細啲 → **root 先 stall**。
- **Stall strip**：喺 root LE 加細楔，令呢度早啲 stall（例如 C172 類輕型機）。
- 好處：stall 時 tip 仍然未 stall，**aileron 仍有效**，nose 下垂易 recover。
- Swept wing 因為 tip stall 風險，常配 washout 或其他裝置。
![Lift／drag 對 AoA（FAA PHAK 圖）：CL max 之後 airflow separation → stall](img/phak/lift-drag-curve.png)`,
sum:`- **Chord line** LE→TE；**camber** 令 α = 0° 都有 lift；NACA 4412 = 4% camber、12% thick。
- **Symmetric** airfoil 用喺 tail；**laminar foil** drag 低但 stall 較突然。
- **AR = b²/S**；high AR → induced drag 低（CDi = CL²/πeAR），代價係結構重。
- **Elliptical** induced drag 最低；**swept** 高 Mcrit 但傾向 tip stall。
- **Washout／stall strip** 令 root 先 stall，保住 aileron control。`,
mcq:[
{q:"The chord line of an airfoil is:",o:{A:"The curve midway between the upper and lower surfaces",B:"The longest dimension from wingtip to wingtip",C:"The straight line from leading edge to trailing edge",D:"The line of the relative wind"},a:"C",why:"Chord line joins the LE and TE.",zh:"Chord line 係前緣到後緣嘅直線。"},
{q:"A symmetric airfoil at zero angle of attack produces:",o:{A:"Zero lift",B:"Maximum lift",C:"Negative CL only",D:"Lift equal to a cambered airfoil"},a:"A",why:"With no camber there is no pressure difference at α = 0°.",zh:"Symmetric foil 喺 α = 0° 冇 lift。"},
{q:"Aspect ratio is calculated as:",o:{A:"Span divided by chord only",B:"Chord squared divided by span",C:"Wing area divided by span",D:"Span squared divided by wing area"},a:"D",why:"AR = b²/S.",zh:"AR = span² ÷ area。"},
{q:"Compared with a low aspect ratio wing, a high aspect ratio wing at the same CL has:",o:{A:"Higher induced drag",B:"Lower induced drag",C:"No induced drag",D:"Higher parasite drag only"},a:"B",why:"CDi = CL²/(π·e·AR), so higher AR reduces CDi.",zh:"AR 高 → induced drag 低。"},
{q:"Which planform theoretically gives the lowest induced drag?",o:{A:"Elliptical",B:"Rectangular",C:"Delta",D:"Swept"},a:"A",why:"An elliptical lift distribution gives e = 1.",zh:"Elliptical 理論上 induced drag 最低。"},
{q:"The main purpose of washout is to:",o:{A:"Increase top speed",B:"Make the wingtip stall first",C:"Make the wing root stall first so ailerons stay effective",D:"Reduce skin friction"},a:"C",why:"A lower tip incidence keeps the tip flying while the root stalls.",zh:"令 root 先 stall，aileron 仍有效。"},
{q:"A swept wing is characterised by:",o:{A:"Lower critical Mach number",B:"Root stalling first in all cases",C:"Higher critical Mach number but a tendency to tip stall",D:"Zero induced drag"},a:"C",why:"Sweep delays compressibility effects, but spanwise flow promotes tip stall.",zh:"Swept 提高 Mcrit，但易 tip stall。"},
{q:"Positive dihedral provides:",o:{A:"Pitch stability",B:"Directional stability only",C:"Higher stall speed",D:"Lateral (roll) stability in a sideslip"},a:"D",why:"The lower wing gets a higher AoA and rolls the aircraft back to level.",zh:"Dihedral 提供 lateral stability。"}
]},
{id:"ln.pof.drag",k:"pof",n:6,t:"Drag",g:"Drag",lesson:null,src:["PHAK ch5","RPL ch6","ATP ch3","Lecture 14/15","ENZO 04"],
rec:["Parasite drag 有邊三種？點受 speed 影響？","Induced drag 點產生？幾時最大？","Wingtip vortices 點形成？由後面睇點轉？","Winglet 點減 drag？","Boundary layer 入面 laminar 同 turbulent 有咩分別？","L/D ratio 同 best glide speed 有咩關係？重量改變會點？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Drag 概覽
- **Total drag = Parasite drag + Induced drag**。
- **Parasite drag**：同 lift 無關，隨 speed **V² 上升**（speed 加倍 → ×4）。
- **Induced drag**：因為產生 lift 而生，level flight 時大致 **∝ 1/V²**（低速大）。
- Weight 增加 → 需要更多 lift → induced drag 增加。

## 2. Parasite drag 三部分
| 種類 | 來源 | 減法 |
| Form (pressure) drag | 形狀、frontal area、separation | streamlining |
| Skin friction | surface 粗糙、viscosity | 光滑 surface、清潔 |
| Interference | 部件交界（wing root、strut）airflow互相干擾 | fairings |
- 注意：放 landing gear、flaps、開 canopy 都加 parasite drag。

## 3. Induced drag 同 wingtip vortices
- Wing 下面高壓、上面低壓 → 喺 wingtip 空氣由下面繞去上面 → **tip vortices**。
- Vortices 製造 **downwash**，令 effective AoA 變細，lift vector 向後傾 → 後向分量就係 **induced drag**。
- **低速、重、高 AoA、clean configuration** 時最大。
- 從飛機後面望：**右翼 vortex 逆時針 (CCW)、左翼 vortex 順時針 (CW)**。
- Vortices 係 **wake turbulence** 嘅來源：重、慢、clean 嘅飛機最強。

## 4. 減 induced drag
- 加 **aspect ratio**（長而窄 wing）。
- **Winglet／wing fence**：阻擋 spanwise leakage，令 vortex 變弱，高 CL 時效益較大。
- 好嘅 planform（elliptical／tapered）。

## 5. Boundary layer
- 貼面薄層空氣：先 **laminar**，經 **transition** 變 **turbulent**。
- Laminar：skin friction 低，但 **較易 separate**。
- Turbulent：skin friction 較高，但**抗 separation 能力強**（vortex generators 就係利用呢點）。
- 喺 **adverse pressure gradient** 下 boundary layer 會 **separate** → lift 跌（stall）、form drag 上升。
![Boundary layer 由 laminar 變 turbulent（FAA PHAK 圖）](img/phak/boundary-layer.png)

## 6. Drag vs airspeed，L/D
- 慢：induced drag 主導；快：parasite drag 主導；總 drag 有一個**最低點 = minimum drag speed**。
- 簡單模型下，最低點出現喺 **parasite = induced** 嗰度，等於 **L/D max**（約 4° AoA 係部分輕型機嘅典型值，待驗證，視乎 airfoil）。
- **L/D = CL / CD**；**glide ratio = L/D**（still air）。
- **Best glide speed = L/D max speed**。Weight 增加 → **ratio 唔變，只係 best glide speed 提高**。
![CL、CD、L/D 對 AoA（FAA PHAK 圖）](img/phak/lift-drag-curve.png)

## 7. 面試要記
- 先講「兩大類」，再講點受 speed 影響。
- 低過 minimum drag speed 屬「back of the power curve」：加 speed 反而減 drag。`,
sum:`- **Total drag = parasite + induced**；parasite ∝ **V²**，induced ∝ **1/V²**。
- Parasite 包括 **form、skin friction、interference**；用 fairings 減 interference。
- **Induced drag** 由 **wingtip vortices → downwash** 造成；低速、重、大 AoA 最大。
- **Winglet／high AR** 減 induced drag；vortices 係 **wake turbulence** 來源。
- **Turbulent boundary layer** 摩擦高但抗 separation；**best glide speed = L/D max**，weight 改 speed 唔改 ratio。`,
mcq:[
{q:"Which is a component of parasite drag?",o:{A:"Downwash drag",B:"Wingtip vortex drag",C:"Induced drag",D:"Interference drag"},a:"D",why:"Parasite drag = form + skin friction + interference.",zh:"Interference 屬 parasite drag。"},
{q:"If airspeed doubles, parasite drag becomes approximately:",o:{A:"Twice",B:"Four times",C:"Half",D:"The same"},a:"B",why:"Parasite drag is proportional to V².",zh:"speed 加倍 → drag ×4。"},
{q:"Induced drag is greatest:",o:{A:"At high speed and low AoA",B:"In a steep dive",C:"At low speed and high angle of attack",D:"At zero lift"},a:"C",why:"It is a by-product of lift and decreases as speed increases.",zh:"低速、大 AoA 最大。"},
{q:"Viewed from behind the aircraft, the right wingtip vortex rotates:",o:{A:"Counter-clockwise",B:"Clockwise",C:"Upward only",D:"In either direction"},a:"A",why:"Air flows from under the wing round the tip to the top.",zh:"由後面睇，右翼 vortex 逆時針。"},
{q:"Which device directly reduces induced drag?",o:{A:"Wheel fairing",B:"Landing gear",C:"Spoiler",D:"Winglet"},a:"D",why:"Winglets weaken the tip vortex.",zh:"Winglet 減弱 tip vortex。"},
{q:"Compared with a laminar boundary layer, a turbulent boundary layer has:",o:{A:"Higher skin friction and better resistance to separation",B:"Lower skin friction and less resistance to separation",C:"The same skin friction",D:"No effect on separation"},a:"A",why:"Turbulent layers carry more energy near the surface.",zh:"Turbulent：摩擦高，但抗 separation。"},
{q:"The total drag curve has its minimum where:",o:{A:"Parasite drag is zero",B:"Parasite drag equals induced drag (simple model)",C:"Induced drag is maximum",D:"CL is zero"},a:"B",why:"In the simple parabolic model min drag occurs when the two are equal.",zh:"簡單模型下，兩者相等時總 drag 最低。"},
{q:"If aircraft weight increases, the best glide ratio in still air:",o:{A:"Decreases",B:"Increases",C:"Stays the same while the best glide speed increases",D:"Stays the same at the same speed"},a:"C",why:"L/D max depends on aerodynamics; weight changes the speed to achieve it.",zh:"weight 唔改 ratio，只改 best glide speed。"}
]}
]);
