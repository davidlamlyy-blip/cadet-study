// 學習筆記（Recall → Notes → Summary → MCQ）。中文為主、tech term 英文；圖來自 FAA PHAK（美國政府著作，公有領域）。
// rl＝每條 Recall 對應嘅 Duolingo 課堂 id（null＝暫時未有課堂）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.lift",k:"pof",n:2,t:"Lift Generation",g:"Lift Generation",lesson:"pof-1-1",src:["PHAK ch4–5（圖）","Airspace POF","Lecture 13a (What causes lift?)"],
rec:["四個力 (4 forces) 幾時平衡？","lift點樣產生？pressure角度同動量角度有咩分別？","「Equal transit time」點解係錯嘅？","AoA (AoA) 係咩？AoA 變咗，lift點變？","lift公式 L = ½ρV²SCL 講咩？","Parasite drag 同 Induced drag 有咩分別？"],
rl:["pof-1-1","pof-1-2","pof-1-2","pof-1-3",null,null],
notes:`## 1. 四個力 (The four forces)
- **Lift**：垂直於 relative wind；**Weight**：指向地心；**Thrust**：向前；**Drag**：平行於 relative wind，向後。
- level flight、speed唔變 (steady level flight)：**Lift = Weight**，同時 **Thrust = Drag**。兩對力各自平衡。
- Lift **唔一定垂直向上**：climb或turn時 lift 會傾斜，所以之後先有 load factor 呢個概念。
![圖 5-1 概念：Angle of attack 喺唔同speed下嘅變化（FAA PHAK Fig 5-3）](img/phak/aoa-speeds.png)

## 2. lift點產生：兩個角度，講同一件事
- **pressure角度 (Bernoulli)**：wing上面airflow較快 → static pressure (static pressure) 較低；下面pressure相對高。**pressure差 × 面積 = lift**，大約三分之二lift係上翼面「抽」出嚟。
- **動量角度 (Newton)**：wing將空氣向**下**推（**downwash**），空氣反過嚟向**上**推wing，就係 lift。
- 兩個唔係競爭理論，而係**同一個現象**：pressure差同airflow轉向係同時發生。

## 3. 常見誤解：Equal transit time
- 誤解：「上面路程長，所以airflow要行快啲，咁先可以同下面嘅空氣**同時**去到後緣。」
- 事實：兩股空氣**冇理由要同時到**，上面嘅空氣其實**更早**到達。
- 面試時**唔好**用呢個解釋，用「pressure差＋airflow向下偏轉」。

## 4. AoA (AoA) 同lift曲線
- **AoA** ＝ **chord line**（前緣至後緣嗰條線）同 **relative wind** 之間嘅夾角。**唔係**nose指向（嗰個叫 pitch attitude）。
- AoA 增加 → lift大致線性上升，到 **critical AoA（約 15–18°）** 就 **stall**，lift反而跌。呢條曲線叫 **CL–α curve**。
- 有camber (camber) 嘅wing，即使 AoA = 0° 都有lift。
![CL、CD 同 L/D 隨AoA變化（FAA PHAK Fig 5-5）。CL max 之後就係 stall。](img/phak/lift-drag-curve.png)

## 5. lift公式
**L = ½ × ρ × V² × S × CL**
| 符號 | 意思 | 機師點改變 |
| ρ | 空氣density (density) | altitude、temperature（高＋熱 = density低 = lift少） |
| V | TAS (TAS) | throttle (power)、nose (pitch) |
| S | wing面積 | 放 flaps（等效增加面積） |
| CL | CL | AoA、flaps、airfoil (airfoil) |
- lift同 **V² 成正比**：speed減半，要大約 **4 倍 CL** 先維持同樣lift。

## 6. drag兩部分 (Drag)
- **Parasite drag**：形狀、表面摩擦、干擾，隨speed **V²** 上升。
- **Induced drag**：lift嘅「副作用」（wingtipvortex），喺 **低速、大 AoA** 最大。
- 總drag最細嗰點 ＝ **best L/D speed**（約 Vmd）。低過呢個speed就喺「power curve 後半段」(back of the power curve)。`,
sum:`- level flight：**L = W**、**T = D**。
- lift＝**pressure差＋airflow向下偏轉**，兩個角度都啱；**Equal transit time 係錯**。
- **AoA** 係翼對airflow嘅角度，lift隨 AoA 升到 critical AoA 就 stall。
- **L = ½ρV²SCL**：density、speed、面積、CL 決定lift；高＋熱要更高嘅 TAS。
- **Induced drag 低速最大**、parasite drag 高速最大；兩者相加最細嘅位置就係 **best L/D**。`,
mcq:[
{q:"In steady level flight, which is correct?",o:{A:"Lift = Weight and Thrust = Drag",B:"Lift = Thrust",C:"Lift is greater than Weight",D:"Drag = Weight"},a:"A",why:"Each pair is balanced.",zh:"兩對力各自平衡。"},
{q:"Which explanation of lift is a common myth?",o:{A:"The wing deflects air downwards",B:"Lower pressure above the wing",C:"Top and bottom air must reach the trailing edge at the same time",D:"Pressure difference acts on the wing area"},a:"C",why:"Equal transit time has no physical basis.",zh:"上面airflow其實更早到達後緣。"},
{q:"Angle of attack is measured between:",o:{A:"Chord line and relative wind",B:"Nose and horizon",C:"Wing and fuselage",D:"Flight path and horizon"},a:"A",why:"It is the wing against the airflow.",zh:"AoA 係翼對airflow，唔係nose對地平線。"},
{q:"If the airspeed halves at the same lift and density, the CL must become about:",o:{A:"Half",B:"The same",C:"Double",D:"Four times"},a:"D",why:"Lift ∝ V², so CL must increase by 4.",zh:"lift同 V² 成正比。"},
{q:"Induced drag is greatest:",o:{A:"At high speed in a dive",B:"At low speed with a high angle of attack",C:"At the speed of minimum drag",D:"In the clean configuration only"},a:"B",why:"It is a by-product of lift and falls as speed rises.",zh:"低速、大 AoA 時最大。"},
{q:"Which change INCREASES lift at a given speed and AoA?",o:{A:"Higher density altitude",B:"Higher air density",C:"Smaller wing area",D:"Lower CL"},a:"B",why:"L = ½ρV²SCL, so a higher ρ gives more lift.",zh:"density愈高，lift愈大。"},
{q:"On a hot, high-altitude airfield, to get the same lift you need:",o:{A:"A lower true airspeed",B:"A higher true airspeed",C:"The same true airspeed",D:"Less flap"},a:"B",why:"Thin air (lower ρ) must be compensated by a higher TAS.",zh:"空氣薄，要更高 TAS。"},
{q:"The best L/D speed is where:",o:{A:"Parasite drag is highest",B:"Total drag is lowest",C:"Induced drag is zero",D:"Thrust is zero"},a:"B",why:"Best L/D = minimum total drag.",zh:"總drag最細嗰點。"}
]},
{id:"ln.pof.stall",k:"pof",n:3,t:"Stall & Spin",g:"Stall & Spin",lesson:"pof-1-4",src:["PHAK ch5（圖）","ENZO Flight Study Guide 06","Airspace POF03","Lecture 14 (separation)"],
rec:["Stall 係咩？真正原因係咩？","Boundary layer 係咩？「Flow separation」係點發生？","點解任何speed、任何姿態都可以 stall？","邊啲因素改變 stall **speed**，但唔改變 critical AoA？","Stall 嘅警告徵兆同標準recovery (recovery)？","Accelerated stall 係咩？","Stall 點變成 spin？點recovery？"],
rl:["pof-1-4","pof-1-4","pof-1-4","pof-1-5","pof-1-5","pof-1-4",null],
notes:`## 1. 核心概念
- **Stall** ＝ wing嘅AoA超過 **critical angle of attack (AoA)**，上翼面flow separation (flow separation)，**lift驟減、drag上升**。
- Stall 時wing**仲有啲lift**，只係唔夠托住weight，所以nose下沉、飛機下墜。
- Stall 睇嘅係 **AoA，唔係speed**：快或慢、climb、dive、turn都可以 stall。
![CL 隨 AoA 上升，到 CL max 之後 stall，lift下跌（FAA PHAK Fig 5-5）](img/phak/lift-drag-curve.png)

## 2. airflow點解會分離 (Boundary layer separation)
- AoA 細至中等：空氣貼住wing流，形成薄薄嘅 **boundary layer**（先laminar flow laminar，再轉為turbulent flow turbulent）。
- AoA 增加 → 上翼面空氣被加速，之後要喺**逐漸升高嘅pressure**下減速（**adverse pressure gradient**）。
- 過咗 critical AoA，boundary layer 追唔到wing表面 → **flow separation** → turbulent flow尾跡 → lift崩潰。
- 一般簡單wing critical AoA 大約 **15–18°**（視airfoil、flaps、污染而定）。
![Boundary layer：laminar flow → 轉變區 → turbulent flow（FAA PHAK Fig 5-66）](img/phak/boundary-layer.png)

## 3. Stall speed vs critical AoA
- **Critical AoA（幾乎）固定**：由wing形狀同形態決定。
- **Stall speed**＝去到 critical AoA 嗰一刻嘅speed，會變：

| 因素 | 對 stall speed | 點解 |
| weight (Weight) ↑ | ↑ | 要更多lift，同speed下 AoA 要更大 |
| 放 flaps | ↓ | 增加camber同面積，低速都有lift |
| 開throttle (power-on) | ↓ | propellerairflow吹過wing＋thrust分量 |
| Load factor n ↑（turn／拉nose） | ↑ √n 倍 | lift要等於 n × weight |
| 冰／霜／污垢 | ↑ | 表面變粗糙，critical AoA 同liftdescent |
| altitude | IAS 約相同 | Stall 嘅 IAS 變化好細；TAS 較高 |

- 速記：**Vs（turn） = Vs（level flight） × √n**。60° bank angle n = 2 → Vs × 1.41。
![turn時由weight同離心力合成 load factor（FAA PHAK Fig 5-52）](img/phak/turn-forces.png)
![bank angle (bank angle) 愈大，load factor 升得愈快；過 60° 之後急升（FAA PHAK Fig 5-53）](img/phak/load-factor-bank.png)
![Load factor 對 stall speed 嘅影響：例如 3 G 時 stall speed 約 ×1.7（FAA PHAK Fig 5-54）](img/phak/stall-speed-load.png)

## 4. 警告徵兆 (Warning signs)
- Stall warning（警告喇叭或燈），通常設喺 stall 之前幾 knots。
- 操縱變「軟」(mushy)，要大幅度先有反應。
- **Buffet**：分離嘅airflow打到tail，fuselage抖動。
- nose下沉 (nose drop)，可能伴隨單邊wing下墜 (wing drop)。

## 5. 標準recovery (Stall recovery)
1. **減 AoA**：降nose、放鬆拉桿。
2. **全throttle (full power)**（平順）。
3. 用 **rudder** 保持平衡、止 yaw。**唔好**喺stall時用 aileron 抬翼。
4. wing重新有lift之後，先用 aileron **水平wing (level wings)**，再輕輕拉返climb。
5. 按手冊收返 flaps／landing gear。
- 第一步**永遠係減 AoA**。先拉桿或用 aileron，可能令 stall 更深，甚至變 spin。

## 6. Stall 嘅種類
| 種類 | 意思 | 常見情況 |
| Clean (Vs1) | Flaps、landing gear收起 | 巡航形態慢飛 |
| Dirty / landing (Vs0) | Flaps／landing gear放出 | approach同landing |
| Accelerated | n > 1 時 stall，speed更高 | 急turn、突然拉nose |
| Power-on | 有throttle下 stall | take-off、go-around (go-around) |
| Secondary | 第一次recovery太急，再 stall | recovery時大力拉桿 |
| Deep stall | wake遮住tail，elevator失效 | 主要係 T-tail、尾置engine噴射機 |

## 7. 由 Stall 到 Spin
- **Spin** ＝ stall ＋ **yaw**：一邊wing stall 得更深 (**autorotation**)，fuselage一邊旋轉一邊急降。
- 常見原因：stall 時**唔coordinated (uncoordinated)** —— rudder 太多或太少、低altitudeslipturn (slipping/skidding turn)。
- 標準recovery（以機型 POH 為準）：**throttle收 idle、aileron 中立、全力反向 rudder (full opposite rudder)、推桿向前**，直至旋轉停止，再recoverydive。
- 最危險：**base-to-final turn時低altitude入 spin**，recovery需要嘅altitude唔夠。`,
sum:`- Stall ＝ **超過 critical AoA**，唔係某個speed。
- Critical AoA 基本固定；**stall speed**受weight、flaps、power、load factor、污染影響。
- recovery次序：**減 AoA → 全throttle → rudder 保持平衡 → 水平wing**。
- Spin ＝ stall ＋ yaw；低速時一定要保持**coordinated (coordinated)**。
- C172S 參考（以 POH 為準）：Vs1 約 53 kt、Vs0 約 48 kt。`,
mcq:[
{q:"A wing stalls when:",o:{A:"The airspeed falls below the green arc",B:"The critical angle of attack is exceeded",C:"The engine power is reduced",D:"The aircraft is above a certain altitude"},a:"B",why:"Stall is defined by AoA. Speed is only an indirect indicator.",zh:"Stall 由 AoA 決定，speed只係間接指標。"},
{q:"Which statement about the critical angle of attack is correct?",o:{A:"It increases with aircraft weight",B:"It is lower at high altitude",C:"It is basically fixed for a given wing and configuration",D:"It depends on engine power"},a:"C",why:"Weight and altitude change the stall speed, not the critical AoA.",zh:"weight同altitude改變嘅係 stall speed。"},
{q:"What is the FIRST action in a stall recovery?",o:{A:"Apply full power",B:"Reduce the angle of attack",C:"Level the wings with aileron",D:"Raise the flaps"},a:"B",why:"The cause is excess AoA, so reduce it first, then add power.",zh:"成因係 AoA 太大，所以先減 AoA。"},
{q:"Which change DECREASES the stall speed?",o:{A:"Increasing weight",B:"Ice on the wing",C:"Extending flaps",D:"Entering a steep turn"},a:"C",why:"Flaps increase lift at low speed. The others raise the stall speed.",zh:"放 flaps 令 stall speeddescent。"},
{q:"In a level 60° bank turn (load factor 2), the stall speed is about:",o:{A:"The same as level flight",B:"1.4 × level stall speed",C:"2 × level stall speed",D:"0.7 × level stall speed"},a:"B",why:"Vs × √n = Vs × √2 ≈ 1.41.",zh:"√2 ≈ 1.41。"},
{q:"Which is NOT a normal stall warning sign?",o:{A:"Stall warning horn",B:"Buffet",C:"Increasing control effectiveness",D:"Nose drop"},a:"C",why:"Control effectiveness decreases as the wing approaches the stall.",zh:"接近 stall 時操縱反而變軟。"},
{q:"On base-to-final you tighten a turn and pull back; the horn sounds and a wing starts to drop. Best action?",o:{A:"Pull back more to stop the descent",B:"Aileron against the dropping wing, keep the back pressure",C:"Lower the nose, add power, use rudder to stay balanced",D:"Reduce power to idle"},a:"C",why:"Reduce AoA first. Aileron on a stalled wing can aggravate the drop.",zh:"先減 AoA，用 rudder 而唔係 aileron。"},
{q:"A spin is best described as:",o:{A:"A stall with symmetric airflow over both wings",B:"A stall with yaw, where one wing is more stalled and the aircraft autorotates",C:"A very high speed dive with rotation",D:"A turn with too little bank"},a:"B",why:"Spin = stall + yaw → autorotation.",zh:"Spin ＝ stall ＋ yaw。"},
{q:"Why is an accelerated stall dangerous in a steep turn?",o:{A:"The critical AoA is much lower",B:"The stall speed rises, so a stall can occur at a higher airspeed than expected",C:"Flaps are required",D:"It only happens in the clean configuration"},a:"B",why:"Load factor raises the stall speed by √n while the critical AoA is unchanged.",zh:"speed你以為安全，其實已經喺新嘅 stall speed之下。"},
{q:"Frost is on the wings before take-off. What is the effect?",o:{A:"None, if it is thin",B:"Higher stall speed and reduced lift",C:"Lower stall speed",D:"Only an increase in drag"},a:"B",why:"Surface roughness lowers the critical AoA and reduces lift.",zh:"薄霜都可以令 stall speed上升。"}
]}
]);
