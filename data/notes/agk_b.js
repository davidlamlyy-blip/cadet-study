// 學習筆記 AGK Level 2（Gas Turbine → Autopilot）。內容整理自 data/agk.js 嘅 Must know topics（AGK06–10、C172SP POH、DA40 AFM、PHAK、ATP）。
Cadet.lnotes=(Cadet.lnotes||[]).concat([
{id:"ln.agk.turbine",k:"agk",n:7,t:"Gas Turbine",g:"Gas Turbine",lesson:"agk-2-1",src:["AGK06 Gas Turbine"],
rec:["Brayton cycle 同 piston 嘅 Otto cycle 有咩分別？","Thrust equation 係點？","四種 gas turbine engine 係咩？","Axial 同 centrifugal compressor 點比較？","Diffuser 做咩？Igniter 幾時用？","Impulse 同 reaction turbine 有咩分別？"],
rl:["agk-2-1","agk-2-1","agk-2-1","agk-2-1","agk-2-1","agk-2-1"],
notes:`## 1. Brayton cycle
**連續**燃燒：**Intake → Compression → Combustion → Expansion**。
- 同 piston 分別：四個步驟**同時喺唔同位置**發生，power 連續，power-to-weight 高。
- Thrust：**T = m(Vj − Vi)**：mass flow × 噴出速度同入口速度之差（Newton 2nd、3rd law）。

## 2. 四種 engine
| Type | 用途 |
| Turbojet | 全部 thrust 來自噴氣 |
| Turbofan | Fan 推 bypass air，加 thrust |
| Turboprop | Turbine 驅動 propeller |
| Turboshaft | Turbine 驅動 rotor／shaft |
- 分 **cold section**（intake、compressor）同 **hot section**（combustor、turbine、exhaust）。

## 3. Compressor
| 類型 | 優點 | 缺點 |
| Centrifugal | Robust、少 surge | Overall ratio 低 |
| Axial | 高效、高 overall ratio | 易 stall／surge、易 FOD |
- Axial 每個 stage 只升壓一點（教材數字約 1.1–1.2:1），所以要好多 stage。
- **Compound** = 兩種結合。

## 4. Combustor
- **Diffuser**：減速增壓，係全 engine **最高 pressure** 位。
- 形式：can、annular。
- 空氣分 primary（燃燒）、dilution、cooling air。
- **Igniter 主要用嚟起動**；之後燃燒自己持續。教材未講：部分 engine 喺大雨或結冰等情況會開 continuous ignition，以機型手冊為準。

## 5. Turbine
- 由熱氣抽能量，驅動 compressor 同 accessories（同軸）。
- **NGV** 導向氣流。
- **Impulse**：氣流撞擊，好似水車。
- **Reaction**：blade 似 airfoil，靠 aerodynamic lift 轉。`,
sum:`- Brayton：連續 **intake、compress、burn、expand**；**T = m(Vj − Vi)**。
- Turbojet、turbofan、turboprop、turboshaft。
- Axial 高效易 surge；centrifugal robust ratio 低。
- **Diffuser = 最高 pressure**；igniter 主要起動用。
- Turbine 驅動 compressor。`,
mcq:[
{q:"The highest pressure in a gas turbine is found at the:",o:{A:"Intake",B:"Diffuser",C:"Turbine exit",D:"Jet pipe"},a:"B",why:"The diffuser slows the air and raises pressure before combustion.",zh:"Diffuser 位 pressure 最高。"},
{q:"Compared with a centrifugal compressor, an axial compressor:",o:{A:"Is more robust against FOD",B:"Has a higher overall pressure ratio",C:"Never surges",D:"Needs only one stage"},a:"B",why:"Many stages give a high ratio, but it is more prone to surge and FOD.",zh:"Axial overall ratio 高，但易 surge 同 FOD。"},
{q:"In a turboshaft engine the turbine mainly drives:",o:{A:"A jet nozzle",B:"A rotor or output shaft",C:"A bypass duct",D:"A carburettor"},a:"B",why:"Turboshafts deliver shaft power, for example to a helicopter rotor.",zh:"Turboshaft 驅動 rotor。"}
]},
{id:"ln.agk.elec",k:"agk",n:8,t:"Electrical",g:"Electrical",lesson:"agk-2-2",src:["AGK07","C172SP POH","DA40 AFM","PHAK"],
rec:["Ohm's law 同 power formula 係咩？邊啲因素令 resistance 增加？","C172SP electrical system 有咩規格？","點解要有 avionics master？","C172SP 見到 VOLTS annunciation 要做咩？","Circuit breaker reset 規則係咩？"],
rl:["agk-2-2","agk-2-2","agk-2-2","agk-2-2","agk-2-2"],
notes:`## 1. 基本電學
- **V = I × R**；**P = V × I**。
- Resistance 增加：導線**長、細、熱**。
- **Series**：I 相同；**Parallel**：V 相同。

## 2. C172SP system
- **28 V DC**，belt-driven **50 A alternator**、**24 V battery**。
- Split primary bus + essential bus。
- **Avionics bus** 經 avionics master：隔離起動等 transient，保護 electronics。
- Master switch 有 **BAT** 同 **ALT** 兩半。

> 留意：Airspace slide 係舊款 14 V／12 V 系統，同 C172SP 唔同。

## 3. Electrical failure
- Alternator 壞 → 靠 battery → **shed load、盡快落地**。
- C172SP 睇 **ammeter** 同 **VOLTS annunciator**。
- VOLTS annunciation：avionics off → check ALT FLD breaker → master OFF 再 ON；再出就 **ALT off、shed load、land soon**。
- Ammeter 顯示 excessive charge（overvoltage）：**ALT off，保留 BAT**，關非必要設備，as soon as practical 落地。
- DA40：有 emergency switch，essential bus 約 **30 分鐘**（以 AFM 為準）。

## 4. Circuit breaker reset
- 等大約 **90 秒**俾 bimetal 冷卻，只 **reset 一次**。
- 有**煙或燒焦味：唔好 reset**。
- 可以嘅話先關咗嗰件設備。
- 再跳 = 真故障。
- 所有 procedure 以機型 POH／AFM 為準。`,
sum:`- **V = IR、P = VI**；長、細、熱 → R 大。
- C172SP：**28 V DC、50 A alternator、24 V battery**。
- Alternator 壞：shed load、落地。
- CB：等 **90 秒**、reset **一次**、有煙唔 reset。`,
mcq:[
{q:"A 28 V system draws 5 A. The power used is:",o:{A:"5.6 W",B:"33 W",C:"140 W",D:"280 W"},a:"C",why:"P = V × I = 28 × 5 = 140 W.",zh:"P = 28 × 5 = 140 W。"},
{q:"The C172SP alternator is rated at:",o:{A:"12 A",B:"28 A",C:"50 A",D:"100 A"},a:"C",why:"It has a belt-driven 50 A alternator.",zh:"C172SP alternator 係 50 A。"},
{q:"A circuit breaker trips and there is a burning smell. You should:",o:{A:"Reset it at once",B:"Wait 90 seconds and reset it",C:"Not reset it",D:"Reset it twice"},a:"C",why:"Smoke or a burning smell means do not reset.",zh:"有燒焦味唔好 reset。"}
]},
{id:"ln.agk.gear",k:"agk",n:9,t:"Landing Gear & Brakes",g:"Landing Gear & Brakes",lesson:"agk-2-3",src:["AGK07–08","C172SP POH","Lecture"],
rec:["細機同大機 brakes 有咩分別？","Fusible plug 做咩？","Tricycle 比 tail gear 有咩好處？","Hydroplaning 有邊三種？Speed 點估？"],
rl:["agk-2-3","agk-2-3","agk-2-3","agk-2-3"],
notes:`## 1. Brakes
| | 細機 | 大機 |
| Disc | Single disc | Multi-disc |
| 力源 | Pilot 踩 pedal 增壓 | Main hydraulic（約 3000 psi，經 reducing valve 減壓） |
- **Fusible plug**：過熱時熔開放氣，防 **tyre burst**。
- C172SP brake 將壞嘅徵兆：braking 漸弱、有聲或 drag、pedal 軟、行程長。

## 2. Tricycle vs tail gear
- **Tricycle**：重力刹車都唔會 nose over、前方視野好、停機時機身水平；nose gear 要吸收刹車 load。
- **Tail gear**：刹車易翻頭、視野差。

## 3. Hydroplaning
| 類型 | 成因 |
| Dynamic | 水楔托起 tyre |
| Reverted rubber | 鎖死 wheel，熱力生蒸氣 |
| Viscous | 薄水層，配合光滑 surface |
- 教材 rule of thumb：**Speed ≈ 9 × √tyre pressure (psi)**，單位 kt。呢個係 lecture 數字，標咗待驗證；考試或實機以官方資料為準。`,
sum:`- 細機 single disc pilot pressure；大機 multi-disc hydraulic。
- **Fusible plug 防 tyre burst**。
- Tricycle：刹車安全，視野好。
- Hydroplaning：**dynamic、reverted rubber、viscous**；約 **9√psi** kt。`,
mcq:[
{q:"Reverted rubber hydroplaning is associated with:",o:{A:"A locked wheel generating steam",B:"Deep standing water at high speed only",C:"A dry runway",D:"Excess tyre pressure"},a:"A",why:"A locked wheel heats the rubber and water, producing steam.",zh:"鎖死 wheel 生蒸氣。"},
{q:"Using the rule of thumb, a tyre at 100 psi hydroplanes at about:",o:{A:"45 kt",B:"90 kt",C:"120 kt",D:"900 kt"},a:"B",why:"9 × √100 = 90 kt.",zh:"9 × 10 = 90 kt。"}
]},
{id:"ln.agk.press",k:"agk",n:10,t:"Pneumatic & Pressurisation",g:"Pneumatic & Pressurisation",lesson:"agk-2-4",src:["AGK07"],
rec:["Cabin pressure 點樣控制？","典型 maximum cabin altitude 係幾多？","Safety relief 同 negative relief 用嚟做咩？"],
rl:["agk-2-4","agk-2-4","agk-2-4"],
notes:`## 1. Pressurisation
- **Air conditioning** 供氣入 cabin。
- **Outflow valve** 控制放幾多氣走，由 **cabin pressure controller (CPC)** 指揮。
- 入氣大致固定，**調 outflow 就調 cabin altitude**。

## 2. 數字
- Cabin altitude 典型 max 約 **8,000 ft**。
- 部分新機約 **6,000 ft**。

## 3. 保護
- **Safety relief valve**：防 cabin 同外面壓差過大。
- **Negative relief**：防外面 pressure 高過 cabin。`,
sum:`- 空調供氣，**outflow valve** 控 cabin altitude。
- Max cabin altitude 約 **8,000 ft**，新機約 6,000 ft。
- Safety relief 防過壓；negative relief 防負壓。`,
mcq:[
{q:"Cabin altitude is controlled mainly by the:",o:{A:"Outflow valve",B:"Pitot tube",C:"Fuel selector",D:"Static port"},a:"A",why:"The CPC modulates outflow to control cabin altitude.",zh:"CPC 控制 outflow valve。"}
]},
{id:"ln.agk.instr",k:"agk",n:11,t:"Instruments",g:"Instruments",lesson:"agk-2-5",src:["C172SP POH","DA40 AFM","ATP","PHAK"],
rec:["邊啲 instrument 用 pitot？邊啲只用 static？","ASI 量度咩？","Pitot ram + drain 塞，climb 時 ASI 點？","Static 塞，climb 時 ASI、ALT、VSI 點？","Compass 嘅 UNOS 同 ANDS 係咩？","Altimeter setting 太高會點？冷天 true altitude 點？","C172SP 邊啲 instrument 係 vacuum？"],
rl:["agk-2-5","agk-2-5","agk-2-6","agk-2-6","agk-2-5","agk-2-5","agk-2-5"],
notes:`## 1. Pitot-static system
- **Pitot** = total pressure；**static** = ambient pressure。
- **ASI**：pitot + static。**ALT、VSI**：static only。
- Pitot heat 防冰（C172SP 5 A）。
- Alternate static：用 cabin air（C172SP）。

## 2. ASI
- 量度 **total − static = dynamic pressure**，顯示 IAS。
- C172SP：green 48–129 kt，red line 163 kt。
- 有 instrument 同 position error。

## 3. Altimeter 同 VSI
- ALT：aneroid 感應 static，用 **QNH** 調整。
- VSI：pressure **變化率**，有 lag。

## 4. Blockage 重點
| 故障 | ASI（climb） | ALT | VSI |
| Pitot ram + drain 塞 | **Over-read** | 正常 | 正常 |
| Pitot ram 塞，drain 通 | 跌到 **0** | 正常 | 正常 |
| Static 塞 | **Under-read** | **凍結** | **0** |
- Descent 時方向相反：pitot ram + drain 塞 under-read；static 塞 over-read。
- 記法：Pitot 塞咗 + 升高，static 跌，差壓變大 → ASI 讀高。

## 5. Altimeter setting 同 errors
- 設定 **太高 → 讀數太高**（例如 1 inHg 約 1,000 ft）。
- **比標準凍 → true altitude 低過 indicated**。呢個方向最危險，因為你實際上低過你以為。
- 標準設定：**29.92 inHg／1013 hPa**。
- FAA：地面誤差大過 75 ft 要存疑。

## 6. Attitude 同 heading
- C172SP：**AI + DI = vacuum**；**turn coordinator = electric**。
- Vacuum 壞 → partial panel。

## 7. Magnetic compass
- **Dip** 令佢喺 turn 同加速時出錯，要 **straight and level、勻速**先準。
- **UNOS**：Undershoot North, Overshoot South（turn 時）。
- **ANDS**：Accelerate North, Decelerate South（東／西 heading 時）。
- 以上係**北半球**規則，南半球相反。
- C172SP：alternator off 時 deviation 可達 25°。

## 8. Stall warning
- 快 stall 時發聲，大約**高過 stall 5–10 kt** 開始響，越近越大聲。
- DA40：suction orifice 喺左翼前緣，有紅圈標記；preflight 按 AFM 測試。`,
sum:`- ASI 用 pitot + static；**ALT、VSI 只用 static**。
- **Pitot 塞 climb over-read；static 塞 climb under-read，ALT 凍，VSI 0**。
- 冷天：true altitude **低過** indicated。
- **UNOS、ANDS**（北半球）。
- C172SP：AI + DI vacuum；TC electric。`,
mcq:[
{q:"The static port blocks in a climb. The ASI will:",o:{A:"Over-read",B:"Under-read",C:"Read zero",D:"Read correctly"},a:"B",why:"Trapped static is too high, so the differential is smaller.",zh:"困住嘅 static 偏高，差壓變細。"},
{q:"The pitot ram inlet and drain block in a climb. The ASI will:",o:{A:"Over-read",B:"Under-read",C:"Read zero",D:"Freeze at zero"},a:"A",why:"Pitot stays constant while static falls.",zh:"Pitot 不變、static 跌，所以讀高。"},
{q:"Flying in air colder than standard, true altitude is:",o:{A:"Higher than indicated",B:"Lower than indicated",C:"Equal to indicated",D:"Unrelated to indicated"},a:"B",why:"Cold air is denser, so pressure levels sit lower.",zh:"凍空氣令 true altitude 低過 indicated。"},
{q:"Which instrument is electric on the C172SP?",o:{A:"Attitude indicator",B:"Directional indicator",C:"Turn coordinator",D:"Airspeed indicator"},a:"C",why:"AI and DI are vacuum driven; the TC is electric.",zh:"Turn coordinator 係電動。"}
]},
{id:"ln.agk.ap",k:"agk",n:12,t:"Autopilot",g:"Autopilot",lesson:"agk-2-7",src:["AGK10 Autopilot Systems"],
rec:["點解 pilot 要 AFCS？","AFCS 運作流程係點？","Flight director 同 autopilot 有咩分別？","FMA 綠色同藍色代表咩？"],
rl:["agk-2-7","agk-2-7","agk-2-7","agk-2-7"],
notes:`## 1. AFCS philosophy
- 目的：**減疲勞、提升 stability、喺困難環境操作、騰出 capacity 做決策**。
- 流程：**Sensors → Computers → Output → Feedback**。
- 包括 FD、AP、A/THR、envelope protection。

## 2. Flight director
- **Command bar** 顯示電腦計出嘅動作。
- **唔會直接控制飛機**；pilot 決定跟唔跟。
- FCU 揀 mode，FDC 計 path。

## 3. Autopilot
- 跟指令保持狀態，「無腦」但唔會攰。
- 冇 FD guidance 時 engage → **basic mode**：hold pitch、wings level、yaw damping。
- 喺 FCU 揀咗就變 path mode。

## 4. FMA
- 顯示 **lateral、vertical、A/THR** mode。
- **綠 = active；藍 = armed**。
- **每次改 mode 都要讀同核對 FMA**：FMA 先至係飛機真正做緊嘅嘢。`,
sum:`- AFCS：減負荷，sensors → computers → output → feedback。
- **FD 只提示，唔控制**；AP 先郁飛機。
- FMA：**綠 active、藍 armed**，改 mode 必睇。`,
mcq:[
{q:"A flight director:",o:{A:"Moves the control surfaces directly",B:"Displays commands for the pilot to follow",C:"Sets the thrust",D:"Replaces the FMA"},a:"B",why:"It shows the computed manoeuvre but does not control the aircraft.",zh:"FD 只係顯示指令。"},
{q:"On the FMA, blue generally means:",o:{A:"Active",B:"Armed",C:"Failed",D:"Warning"},a:"B",why:"Green is active; blue is armed.",zh:"藍係 armed。"}
]}
]);
