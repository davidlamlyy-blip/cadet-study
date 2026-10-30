// 學習筆記：High-Speed Flight。中文為主、tech term 英文。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.pof.highspeed",k:"pof",n:14,t:"High-Speed Flight",g:"High-Speed Flight",lesson:null,src:["POF05 slides","ATP Test Prep ch3 (High Speed Flight)","PHAK ch5","Lecture 17–19"],
rec:["Mach number 係咩？點解 high altitude 同 low altitude 嘅 speed of sound 唔同？","Critical Mach number (Mcrit) 係咩？過咗 Mcrit 會發生咩事？","Wave drag 同 shock wave 點樣產生？Normal、oblique shock 同 expansion fan 有咩分別？","Mach tuck 點解會出現？有咩方法解決？","Sweepback 點樣提高 Mcrit？代價係咩？","Vmo／Mmo 同 buffet boundary（coffin corner）係咩意思？"],
rl:[null,null,null,null,null,null],
notes:`## 1. Mach number 同 speed of sound
- **Mach number M = TAS ÷ a**，a ＝ local **speed of sound**。
- **a = √(γRT)**：只隨 **temperature** 變。高空 temperature 低 → a 細啲，所以同一個 TAS，高空 Mach 數大啲。
- ISA sea level：a ≈ 661 kt（約 340 m/s）。ISA 嘅 tropopause 以上 temperature 大致不變，a 都大致不變。
- **Machmeter** 顯示嘅係 M，唔係 IAS。
- Compressibility：M 去到大約 0.3 以上，density 變化開始要計（約 5%）；低過呢個值 airflow 當 incompressible。

## 2. Flow regimes
| 範圍（M） | 名稱 | 特徵 |
| < 約 0.3 | Incompressible | density 當常數 |
| 約 0.3–0.75 | Subsonic（compressible） | 有 compressibility effect，但冇 shock |
| 約 0.75–1.2 | Transonic | wing 上面一部分 airflow 超音速，一部分 subsonic，出 shock |
| 約 1.2–5 | Supersonic | 全機 airflow 超音速 |
| > 5 | Hypersonic | air 受高溫影響，真實氣體效應（待驗證：各書分界略有出入） |
- 以上係大概分界，每款 airfoil 唔同。

## 3. Critical Mach number 同 shock progression
- Wing 上面 airflow 比 free stream 快（尤其 camber 位）。**Mcrit** ＝ 令 wing 上**最快一點剛好 M = 1** 時嘅 **free-stream Mach**；呢個時候 aircraft 本身仲係 subsonic。
- 高過 Mcrit：wing 上面出現 **normal shock**，之後 airflow 變返 subsonic。
- M 再加：shock **向後移**，下面都出 shock，最後 M ≈ 1 以上出 **bow wave**。
- Shock 後面pressure急升，**boundary layer** 容易 **separation**。
![Boundary layer（FAA PHAK 圖）：shock 令 boundary layer 分離，就係 buffet 同 drag 嘅來源](img/phak/boundary-layer.png)
- 提高 Mcrit：airfoil 薄、**sweepback**、**supercritical airfoil**。

## 4. Shock waves 同 wave drag
- **Wave drag**：shock 令能量損耗、airflow 分離 → **drag 急升**（**drag divergence**）。
- 過咗 M = 1 之後，drag coefficient 相對回落，但依然高過 subsonic。
| Shock 類型 | 特徵 |
| **Normal shock** | 同 airflow 垂直；M 由 >1 變 <1；pressure、temperature、density 升，total pressure 損失大 |
| **Oblique shock** | 斜住，airflow 轉向；M 一般仍 >1；損耗較細 |
| **Expansion fan** | 超音速 airflow 繞凸角；加速、pressure 跌；幾乎冇損耗（isentropic） |
- Normal shock 例（Lecture 18 公式）：p₂/p₁ = 1 + 2γ/(γ+1)·(M₁² − 1)，M₁ = 2 → 約 4.5。
- Mach cone：source 超音速時，擾動被困喺 cone 入面，半角 **μ = sin⁻¹(1/M)**，cone 外面收唔到 warning。

## 5. Mach tuck
- 成因：shock 令 wing 上面 airflow 分離 → **center of pressure (CP) 向後移** → **nose-down pitching moment**；同時 tail 嘅 airflow 受 downwash 變化，elevator 效力下降。
- 結果：aircraft 自己 nose-down、speed 再加，越 tuck 越快 — 需要大力拉 elevator 先救到。
- 對策：**sweepback**（延遲 shock）、**trimmable horizontal stabilizer**（大 trim authority）、**Mach trim**（自動補償）。
- 唔同體系用字會略有差異；Mach trim 嘅實際設計因機型而異（待驗證）。

## 6. Sweepback 同佢嘅代價
- 只有**垂直於 leading edge** 嘅 airflow 分量影響 pressure：**effective M ≈ M·cosΛ**（Λ ＝ sweep angle）。
- 好處：Mcrit 上升，**drag rise 延遲**。
- 代價：
  - **CLmax 下降** → 要靠 **slats**、大 **slotted flaps**，approach speed 提高。
  - **Spanwise flow** 令 **wing tip 先 stall** → CP 向內向前 → **pitch-up**；tip 失 **aileron** 效力。
  - Root 先出 shock stall 就係 nose-down（tuck）；tip stall 就係 nose-up。兩種都要識分。
  - Stall 前 **buffet** 對 tail 嘅警告唔夠清楚。
- **Forward sweep**（例 Su-47）：CP 向前，另有操控問題；**variable sweep**（例 F-14）：低速翼向前、高速向後。

## 7. Supercritical airfoil 同 area rule
- **Supercritical airfoil**：upper surface 平、leading edge radius 大、後部 camber 出 lift（aft-loaded）、blunt trailing edge → **shock 弱、位置靠後、drag rise 延遲**。
- **Transonic area rule**：total cross-sectional area 沿 fuselage 要平滑變化 → 減 wave drag；所以 wing 位置 fuselage 會「收腰」（Coke-bottle）。
- 呢兩項喺教材只有標題，詳細內容用一般航空知識，待驗證。

## 8. Vmo／Mmo 同 buffet boundary
- **Vmo**（IAS，低空）同 **Mmo**（Mach，高空）＝ 最大 operating speed；超過會有 buffet、flutter、Mach tuck 風險。**Barber pole**（紅白條）顯示 limit。
- **Low-speed buffet**：AoA 太大（stall 側）。**High-speed buffet**：shock separation。
- Buffet 睇 wing 上嘅 airflow Mach，唔係單純機速：太慢（高 weight、高 altitude、或 load factor 高）一樣可以出 low-speed Mach buffet。
- Altitude 越高、weight 越重，兩個 boundary 越近 → 窄 speed band，俗稱 **coffin corner**（口語，唔係正式術語）。
- 轉彎（load factor 加）會令 buffet margin 收窄。

## 9. High-speed control devices 同 supersonic 設計
- **Yaw damper**：抑制 **Dutch roll**（swept wing 特別明顯）。
- **Vortex generators**：激勵 boundary layer，延遲 separation。
- **Outboard aileron** 高速鎖死，改用 inboard aileron／**spoilers** 控制 roll（因機型而異）。
- **Supersonic airfoil**：薄、尖 leading edge → attached oblique shock、wave drag 低；鈍前緣 → detached bow wave。
- **Supersonic engine intake**：jet engine 只收 subsonic airflow，所以用 ramp／oblique shocks 加 normal shock 減速（一般航空知識，待驗證）。`,
sum:`- **M = TAS ÷ a**，a = √(γRT) 只隨 temperature 變；高空 a 細。
- 過 **Mcrit** 出 shock → **wave drag** 同 boundary layer separation → drag divergence、buffet。
- **Mach tuck**：CP 後移＋tail 效力差 → nose-down；用 sweepback、trimmable stabilizer、Mach trim 對付。
- **Sweepback**：effective M = M·cosΛ，延遲 shock；代價係 CLmax 低、tip stall、pitch-up。
- **Vmo／Mmo** 同 low-speed buffet 兩邊夾住 = coffin corner，高空重 weight 最窄。
- Supercritical airfoil、area rule、vortex generators、yaw damper 都係為咗 high-speed flight 而設。`,
mcq:[
{q:"The local speed of sound in air depends primarily on:",o:{A:"Air pressure",B:"Air temperature",C:"Aircraft weight",D:"Air density only"},a:"B",why:"a = √(γRT), so only temperature matters.",zh:"a 只靠 temperature。"},
{q:"Critical Mach number is the free-stream Mach number at which:",o:{A:"The aircraft first flies at M = 1",B:"A shock wave first appears at the tail",C:"Local airflow over the wing first reaches M = 1",D:"The wing stalls"},a:"C",why:"The fastest point on the wing reaches sonic speed while the aircraft is still subsonic.",zh:"fuselage未到 M1，翼面最快處先到。"},
{q:"What mainly causes the sharp drag rise (drag divergence) near Mcrit?",o:{A:"Induced drag",B:"Skin friction",C:"Shock waves and boundary layer separation",D:"Wingtip vortices"},a:"C",why:"Energy loss through shocks and separated flow is wave drag.",zh:"Shock 同 separation 造成 wave drag。"},
{q:"Mach tuck is caused by:",o:{A:"A forward shift of the centre of pressure",B:"A rearward shift of the centre of pressure and reduced tail effectiveness",C:"Loss of lift at the wing tip",D:"Dutch roll"},a:"B",why:"CP moves aft, giving a nose-down moment.",zh:"CP 後移 → nose-down。"},
{q:"Which is the best fix for Mach tuck in a transport aircraft?",o:{A:"Larger rudder",B:"Higher flap setting",C:"Vortex generators on the tail only",D:"Mach trim or a trimmable horizontal stabilizer"},a:"D",why:"They provide the pitching moment needed to counter the nose-down tendency.",zh:"用 trim 抵銷 nose-down。"},
{q:"A swept wing raises Mcrit because:",o:{A:"Only the airflow component normal to the leading edge affects the pressure",B:"It increases CLmax",C:"It reduces weight",D:"It increases induced drag"},a:"A",why:"Effective Mach is approximately M × cos Λ.",zh:"Effective M = M·cosΛ。"},
{q:"A disadvantage of a swept wing at low speed is:",o:{A:"Higher CLmax",B:"Tip stall tendency and reduced CLmax",C:"No need for flaps",D:"Lower stall warning speed"},a:"B",why:"Spanwise flow thickens the tip boundary layer, so the tips stall first.",zh:"Tip 先 stall，CLmax 低。"},
{q:"What happens to Mach number and static pressure across a normal shock?",o:{A:"Mach drops below 1, static pressure rises",B:"Mach rises, static pressure rises",C:"Mach rises, static pressure drops",D:"Mach drops, static pressure drops"},a:"A",why:"Flow decelerates to subsonic and is compressed.",zh:"M 跌，p 升。"},
{q:"The 'coffin corner' describes:",o:{A:"A narrow speed range between low-speed buffet and high-speed (Mach) buffet at high altitude",B:"An engine-out ceiling",C:"A runway limit on wet days",D:"The point where Vmo equals Va"},a:"A",why:"At high weight and altitude the stall-side and shock-side limits converge.",zh:"兩邊 buffet 靠近。"},
{q:"Why is Mmo used instead of Vmo at high altitude?",o:{A:"Because IAS reads higher than TAS",B:"Because compressibility and shock effects depend on Mach number, not IAS",C:"Because Mach number is the same as stall speed",D:"Because air is denser"},a:"B",why:"At altitude the Mach limit is reached before the structural IAS limit.",zh:"高空以 Mach 為限。"}
]}
]);
