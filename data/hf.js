// Human Factors & NTS — 來源：CASA Safety Behaviours HF booklets 1-10、AC 61-08、ENZO Mass briefing（Pilot in Command-NTS 等）、Airspace HPL02、Basic Aeronautical Knowledge ch8、ATP Test Prep
(function(){
const T=(id,g,t,d,pts,rel,src,check)=>({id:"hf."+id,g,t,d,pts,rel:rel.map(r=>r.indexOf(".")<0?"hf."+r:r),src,check:!!check});
const G1="Foundations",G2="Error & Safety Culture",G3="TEM",G4="Situational Awareness",G5="Decision Making",G6="Human Performance",G7="Perception & Illusions",G8="Communication & Teamwork",G9="Automation & Design",G10="Interview Link";
const C=(t,e,q,a,zh,st)=>({e,q,a,zh,topic:"hf."+t,st:st||"ok"});
const X=[
C("nts_map","📋","Which NTS elements fall under TEM?","NTS 2.1 threats, 2.2 errors and 2.3 undesired aircraft states.","2.x = TEM。"),
C("airmanship","🧭","Why link airmanship to NTS?","Behavioural markers make airmanship observable and measurable, so assessment is valid and reliable.","可量度。"),
C("pic","📌","What must a PIC do after the flight?","Report any damage or incident, check oil and fuel, and tie down if last flight.","After-flight admin。"),
C("kas","🎓","Why does knowledge improve SA and decisions?","Better knowledge means better recognition of cues and wider options.","Enzo 簡報。"),
C("swiss","🧀","In the Swiss cheese model, what are the slices?","Defences such as SOPs, checklists, training and cross-checking.","每層 defence。"),
C("errchain","⛓️","What does breaking the error chain mean?","Intercepting one link — through a check, cross-check or a stop decision — prevents the accident.","斷一環。"),
C("errmgmt","🛠️","Name ways to minimise the occurrence of errors.","Adhere to SOPs, improve training including CRM, and improve SHEL interfaces.","Minimise。"),
C("safetyculture","🏭","Why does SMS need a safety culture?","Without the culture, standards are just words on paper (Piper Alpha).","Culture drives SMS。"),
C("just","📣","Why encourage reporting?","Unreported incidents and near misses repeat; lessons can't be learned.","Reporting culture。"),
C("cultstages","🪜","What is the generative stage?","Safety is 'how we do business round here' — fully integrated and proactive.","最高級。"),
C("sms_lockhart","🧮","Why avoid labelling Lockhart River as simply 'pilot error'?","Because system mismatches in procedures, equipment, training and culture also contributed.","Context。"),
C("tem","🧭","Who developed TEM and when?","University of Texas, late 1990s, now recognised by ICAO.","來源。"),
C("tem","🧠","How does TEM differ from risk management?","Risk management decides if operations can be done acceptably (go/no-go); TEM maintains safety during the flight.","分工。"),
C("threattypes","🕵️","Why are latent threats hard to see?","They sit in organisation and design, needing formal safety analysis to find.","隱藏。"),
C("threatmgmt","⏳","When does threat management succeed?","When the threat is detected in time to avoid an undesired aircraft state.","時間。"),
C("errmgmt_tem","📑","Why monitor other crew for errors?","Cross-monitoring catches errors the individual misses.","Cross-check。"),
C("tem_flow","➡️","Why can't you ignore a threat?","Unmanaged threats raise error probability and may lead to UAS.","Chain。"),
C("countermeasures","🧪","What does 'control' mean in TEM?","Monitoring progress of events and amending plans and actions as needed.","Monitor。"),
C("tem_stall","🔧","What errors can happen during stall recovery?","Using aileron in a stall or too much rudder in recovery.","Enzo。"),
C("tem_solo","📍","Name circuit threats for solo.","Traffic, upwind tracking, helicopter operations, base-final turn judgement, engine failure.","Circuit。"),
C("emp","🔥","What comes first in an emergency?","Fly the aircraft; don't get distracted from flying.","Step 1。"),
C("sa","🎞️","Why must SA be timely?","Information gathered after the event is useless; SA lagging the aircraft is dangerous.","Time & space。"),
C("sa1","📟","What are Level 1 problems?","Data unavailable, hard to detect, not monitored, misperceived or forgotten.","L1 風險。"),
C("sa2","🧩","What is a mental model?","Your internal picture of the situation, built from observations plus knowledge.","Level 2。"),
C("sa3","🛰️","What are Level 3 risks?","Poor mental model and over-projection of current trends.","L3 風險。"),
C("sa_loss","📣","Is needing a clearance repeated a sign of anything?","Yes — degraded SA, as is missing calls.","警號。"),
C("sa_factors","⚠️","How does fatigue affect SA?","Causes fixation on a single task and narrows attention.","Fatigue。"),
C("sa_build","🛠️","What should you do with attention?","Direct it systematically: aircraft, flight path, then people; repeat.","Scan pattern。"),
C("resa","↩️","Why teach re-establishing SA?","Because SA is often lost; pilots must regain it quickly.","重建。"),
C("tunnel","🔦","Give an example of fixation in flight.","Staring at one instrument, or at a checklist item while neglecting lookout and radio.","Fixation。"),
C("tasksat","📚","What is task saturation?","Too much to do without enough time, tools or resources.","Overload。"),
C("cfit","🏔️","Name CFIT contributing factors.","Loss of terrain awareness, non-adherence to SOPs and VFR into IMC.","因素。"),
C("lookout","📐","Why is size more important than contrast?","Small GA aircraft are hard to detect; size matters most.","AC 61-08。"),
C("collision","⏱️","How long does it take to avoid a collision after detection?","About 12.5 seconds (US military research).","避撞時間。"),
C("dm","🧠","Is a good outcome always a good decision?","No; the quality lies in the process and information used.","Outcome bias。"),
C("ndm","⚡","Why use naturalistic decision making?","Because aviation has time pressure, uncertainty and shifting goals.","Real world。"),
C("dmprocess","🔄","Why re-evaluate decisions?","Conditions change, so decisions need updating.","動態。"),
C("decide","🧩","In DECIDE what is 'Detect'?","Notice a change needing attention.","Step 1。"),
C("dodar","👥","What does 'Assign' mean in DODAR?","Allocate tasks to crew members to execute the decision.","Task。"),
C("agrade","🔎","Why Review in A-GRADE?","Break information into 2–3 chunks and ask what else is needed.","Chunk。"),
C("acronyms","🔡","What does the 'E' in SAFE do?","Evaluate the result of the fix.","Close loop。"),
C("ooda","🎯","What does 'Orient' mean in OODA?","Interpret observations using experience and context.","非教材。","check"),
C("threep","📊","In 3P what do you do under Process?","Evaluate hazards' effect on the flight and the risk.","非教材。","check"),
C("fordec","📋","What is FORDEC's last step?","Check — verify the outcome of execution.","非教材。","check"),
C("dmtraps","⚙️","What is a trap with 'assuming no time'?","You skip options and consultation, leading to poor decisions.","Time trap。"),
C("pressure","🧗","What is a macho attitude?","'It'll be right, I can handle this' — reluctance to stop for fear of looking weak.","Hazardous。"),
C("gonogo","🚦","What did the seafood charter accident show?","Multiple pressures (time, cargo, injured pax) led a non-IMC pilot into darkness and rain.","Case。"),
C("dmimprove","🛠️","Why involve others when time permits?","They become invested in and support the decision.","Buy-in。"),
C("workload","🧱","Why is the brain a single-channel processor?","It handles one decision at a time, so prioritise.","Priorities。"),
C("qf32","🛫","How many checklists did QF32 face?","More than 120 ECAM checklists (per Capt de Crespigny).","Overload。"),
C("fatigue","🛌","What are warning signs of fatigue?","Errors of judgement, forgetfulness, yawning, irritability and lower standards.","警號。"),
C("fatigue_mgmt","🍽️","What is sleep debt?","Accumulated lack of sleep needing several days of extra sleep to repay.","補返。"),
C("frms","📊","Why do pilots under-report fatigue?","Culture and fear; only about 10% of charter pilots had an FRMS.","Survey。"),
C("stress","🎢","Name in-flight stressors.","Noise, alarms, bad weather, night, vibration and altitude changes.","列表。"),
C("arousal","⛰️","What happens at stress overload?","Panic, anxiety, anger, and performance drops.","右邊。"),
C("stresscope","🤝","How does CRM reduce stress?","Share tasks and ask for help when overloaded.","CRM。"),
C("amygdala","⚡","Why does an amygdala hijack bypass logic?","The thalamus sends a fast signal straight to the amygdala before the prefrontal cortex.","Fast route。"),
C("hypoxia","🫁","Hypoxic versus anaemic hypoxia?","Low oxygen in air versus blood unable to carry it (anaemia, CO).","兩種。"),
C("tuc","⏲️","Does TUC get shorter or longer with altitude?","Shorter.","越高越短。"),
C("hyperv","🌬️","What are hyperventilation symptoms?","Tingling lips, fingers and toes, dizziness and palpitations.","似 hypoxia。"),
C("co","🏭","Why is CO dangerous?","Haemoglobin binds CO in preference to oxygen, starving the brain.","隱形。"),
C("baro","👂","Why do ears hurt on descent?","Blocked Eustachian tube prevents pressure equalising.","Descent。"),
C("alcohol","🍷","Does sleeping speed alcohol removal?","No; it may slow it.","唔會加快。"),
C("health","🍽️","Why different meals for crew?","Food poisoning is a common cause of in-flight incapacitation.","Policy。"),
C("infoproc","🧠","What limits information processing?","Time, overload, expectation, fatigue, stress and insufficient knowledge.","AC 61-08。"),
C("vision","💡","What is flash blindness?","Temporary vision loss from sudden bright light, restarting night adaptation.","夜間。"),
C("sd","📉","Can experienced pilots get spatial disorientation?","Yes, anyone can, especially on dark nights without visual cues.","Lake Eyre。"),
C("leans","↩️","How do you avoid the leans?","Use standard rate turns and scan the attitude indicator.","Instruments。"),
C("graveyard","🌀","What does the graveyard spiral feel like?","Wings-level descent — so you pull back and tighten the spiral.","Pull = worse。"),
C("somato","📈","What is the opposite of somatogravic acceleration?","Rapid deceleration feels like pitching down, tempting a nose-up and stall.","Opposite。"),
C("vest_other","🌪️","How to avoid Coriolis?","Avoid rapid head movement in a turn; fly instruments.","Head。"),
C("blackhole","🌃","When is the black hole worst?","Over water or sparse terrain, with a bright city behind, in very clear air.","條件。"),
C("lowill","🌬️","Why aviate first on a PSL?","Over-focus on the landing site can cause loss of control.","Priority。"),
C("trustinst","🎚️","Why is vision dominant over instruments in conflict?","It isn't safe — in IMC you must trust instruments.","Trust。"),
C("memory","🔢","What is CIGAR?","Controls, Instruments, Gas, Attitude (flaps/trim), Run-up.","Checklist。"),
C("bias","🪞","What is expectation bias?","Hearing or seeing what you expect.","Readback。"),
C("commproc","📬","Why feedback in communication?","It confirms shared meaning.","Loop。"),
C("commtypes","📞","What is paralinguistics?","Tone, volume, inflection and pitch.","語氣。"),
C("commfail","📻","Name air-ground miscommunication causes.","Blocked transmissions, callsign confusion, congestion, partial read-backs.","列表。"),
C("readback","✍️","Why write down long clearances?","It improves recall and reduces read-back errors.","寫低。"),
C("assert","🗨️","What is the risk of being too polite?","Urgent concerns may not be understood.","Hint 唔夠。"),
C("authgrad","⬇️","What is a flat authority gradient risk?","Equals may not challenge each other for fear of offence.","Flat。"),
C("leader","🧑‍✈️","What is inverse gradient?","Instructor not exercising PIC authority over a more experienced student.","Case。"),
C("team","🧱","Which teamwork skills matter?","Adaptability, communication, coordination, decision making, leadership, monitoring and shared SA.","8 skills。"),
C("crmroles","🎛️","Why did Sullenberger take the radio?","To let the first officer concentrate on the checklist.","Delegation。"),
C("singlecrm","🧳","How handle an overweight baggage dispute?","Use assertiveness, tact and conflict resolution; safety limits are non-negotiable.","Scenario。"),
C("auto","⚙️","What is the pilot's role with automation?","Monitor and manage it, and disconnect when needed.","Monitor。"),
C("mode","📟","How avoid mode confusion?","Check annunciators and verify mode after selection.","Verify。"),
C("complacency","😴","What's the risk of over-reliance?","Skills fade and unexpected failures cause startle.","Training。"),
C("design","🧰","Why 'design-induced error'?","Poor cockpit design makes errors likely, so blame is misplaced.","L–H。"),
C("i_team","🎤","What keywords show teamwork?","Shared goal, roles, communication, support, feedback.","關鍵字。"),
C("i_lead","🎤","How show leadership without authority?","Lead by example, delegate, listen, take responsibility.","Influence。"),
C("i_err","🎤","What mustn't you do answering about mistakes?","Blame others or hide the error.","Just culture。"),
C("i_speak","🎤","What if the senior person ignores you?","Escalate assertively, state safety impact, and take action if needed.","PACE。"),
C("i_stress","🎤","Which words show stress awareness?","Recognise signs, prioritise, breathe, ask for support.","Self-aware。"),
C("i_dm","🎤","What do interviewers want in DM answers?","Structured process, risk awareness and evaluation.","Structure。"),
C("i_sa","🎤","What keyword shows SA?","Mental model, scan, project, what-if.","SA。"),
C("i_fatigue","🎤","Why admit fatigue?","It shows honesty and safety mindset.","Just culture。"),
C("i_safety","🎤","What are hard limits?","Fuel, weather minima, last light, aircraft limits.","唔可讓步。"),
C("i_comm","🎤","What closes the communication loop?","Read-back or confirmation of understanding.","Loop。"),
C("i_adapt","🎤","What shows adaptability?","Re-evaluating the plan and communicating the new one.","NDM。"),
];
Cadet.add({
key:"hf", name:"Human Factors & NTS", emoji:"🧠", color:"#a3e635",
src:"CASA HF booklets 1-10 · AC 61-08 · ENZO NTS/TEM briefings · Airspace HPL02 · BAK ch8 · ATP Test Prep",
topics:[
// ---------- Foundations
T("hf",G1,"Human Factors","研究人同系統點配合；補足 technical skills 嘅個人／社交技能。",["約 70–80% accidents 同 human performance 有關 (CASA)","AC 61-08 寫約 75%","Aim：optimise 人、活動、設備關係","唔止負面：人亦識 adapt、解難"],["shell","crm","airmanship","history"],"CASA HF b1 p4; AC 61-08 §2"),
T("history",G1,"Why HF Matters","大型事故多數係 human performance 問題，唔係單純機件。",["Tenerife 1977：583 死，miscommunication","Eastern 401 (1972)：專注壞燈膽，101 死","US-Bangla 2018 Kathmandu：49 死","relatively few accidents purely technical"],["hf","commfail","authgrad"],"CASA HF b1 p4"),
T("shell",G1,"SHEL(L) Model","Software、Hardware、Environment、Liveware×2；配合唔到就出事。",["L–L：crew／handover 溝通","L–S：違規、SOP 唔清","L–H：設計差（掣太近）","SCHEL(L)O 加 culture＋organisation","Edwards 1972；第二個 L 1975"],["hf","sms_lockhart","design"],"CASA HF b1 p11; SMS b6"),
T("crm",G1,"CRM = NTS","1970s 高事故率後出現；用晒所有 resources 減 error。",["CRM 同 NTS 係同一樣嘢","Leadership、SA、comm、DM、SOP","Stress／fatigue 管理、teamwork","Single pilot：pax、ATC 都係 resource"],["nts_map","team","singlecrm"],"Pilot in Command-NTS s3-4; CASA b5"),
T("nts_map",G1,"NTS Elements (Part 61 MOS)","CASA 嘅 NTS 單元：1.1–1.5 + 2.1–2.3 (TEM)。",["1.1 Lookout；1.2 Situation awareness","1.3 Assess situations & decide","1.4 Priorities & task management","1.5 Communications & interpersonal","2.1 Threats；2.2 Errors；2.3 UAS"],["lookout","sa","dm","workload","commproc","tem"],"Pilot in Command-NTS s4-9; AC 61-08 §2.2"),
T("airmanship",G1,"Airmanship","consistent good judgement＋skills 達成 flight objectives (ICAO)。",["NTS 令 airmanship 可以量度","Behavioural markers＝可觀察行為","例：nav 時一直揀 forced landing area","Kern：要有 flight discipline"],["nts_map","hf"],"AC 61-08 §1.2, §2.1"),
T("pic",G1,"Pilot in Command","你係 PIC：識規則、做足準備、安全操作、做報告。",["Rules／procedures／regs","W&B、fuel、performance、maintenance release","Manage passengers","Report damage／incident；after-flight admin"],["crm","leader","kas"],"Pilot in Command-NTS s2"),
T("kas",G1,"Knowledge · Skills · Attitude","你帶嚟三樣資源；Attitude 靠你自己。",["Knowledge↑ → SA↑、decision↑","Skills：練 technique","Attitude 教唔到，要自己有","讀 safety magazines 學人哋錯","只有 PIC 先可以 recover UAS"],["pic","sa","dm"],"Pilot in Command-NTS s16-17"),
// ---------- Error & Safety Culture
T("errtypes",G2,"Error Types (Reason)","Slip、Lapse、Mistake、Violation：unintended vs intended。",["Slip：做錯（拉 mixture 當 carb heat）","Lapse：記憶失敗（唔記得 carb heat）","Mistake：plan 本身錯（rule／knowledge）","Violation：故意偏離（routine／exceptional）"],["swiss","tem_errors","errmgmt"],"CASA b8 p6-7"),
T("swiss",G2,"Swiss Cheese Model","每片芝士係一層 defence；洞對齊先出事故。",["Defences：SOP、checklist、training","洞會移動、開合","Active failures＋latent conditions","例：non-standard procedure、confusion、rushed"],["errchain","errmgmt","tem_flow"],"Airspace HPL02 slides"),
T("errchain",G2,"Error Chain","事故係一串事件；斷咗任何一環就停。",["'Breaking the error chain'","警號：ambiguity、confusion、fixation","冇人 look outside（heads down）","溝通含糊、missed checkpoint"],["swiss","sa_loss"],"HPL02; CASA b6 p11"),
T("errmgmt",G2,"Minimise vs Mitigate Error","減少 error 發生，同減輕 error 後果，兩個方向。",["Minimise：SOP、CRM training、SHEL interface","Mitigate：error reversible 設計","Protective procedures、cross-monitoring","適當 authority gradient；warning systems"],["swiss","errtypes","authgrad"],"HPL02 slide 2"),
T("safetyculture",G2,"Safety Culture","'The way we do things around here'；冇人睇都做啱。",["Reason：驅動系統抵抗 hazards 嘅 engine","冇文化，SMS 只係紙 (Piper Alpha)","好：人人 watchful、報 near miss","差：blame、唔報、safety 排第二"],["just","cultstages","sms_lockhart"],"CASA b2"),
T("just",G2,"Just Culture & Reporting","唔 blame、鼓勵報告，但清楚劃線邊啲行為唔接受。",["Reason：informed、reporting、just","Flexible、learning culture","Reporting：人願意報 error／near miss","Fair & just：acceptable vs unacceptable"],["safetyculture","i_err"],"CASA b2; SMS b6"),
T("cultstages",G2,"Culture Maturity","Pathological → Reactive → Calculative → Proactive → Generative。",["Pathological：safety 唔重要","Reactive：出事先理","Calculative：數字化，但係 add-on","Generative：'safety is how we do business'"],["safetyculture"],"CASA b2 p22"),
T("sms_lockhart",G2,"Case: Lockhart River CFIT","SHELL 分析：唔係淨係 PIC 錯，成個系統配合差。",["S–L：approach 程序、speed 唔清","H–L：冇 EGPWS／TAWS","E–L：冇 CRM 訓練、難報告安全問題","L–L：冇人糾正 descent rate"],["shell","cfit","safetyculture"],"CASA SMS b6 p4-5"),
// ---------- TEM
T("tem",G3,"Threat & Error Management","喺 safety margin 縮小前 detect＋respond threats／errors。",["人一定出錯；每 flight 都有 threat","Univ. of Texas 1990s；ICAO 認可","CASA 2009 起列入 licence assessment","補充 risk management (go/no-go)","'extension of airmanship'"],["threats","tem_errors","uas","tem_flow","nts_map"],"CASA b8 p3-4; NTS s10"),
T("threats",G3,"Threats","影響安全或增加 pilot error 機會嘅情況；外部或內部。",["外部：weather、ATC、traffic、terrain","內部：fatigue、stress、over-confidence","press-on-itis、impulsiveness","time pressure、night、passenger 干擾"],["threattypes","threatmgmt"],"CASA b8 p4-5; AC 61-08 §13"),
T("threattypes",G3,"Anticipated · Unanticipated · Latent","三類 threat：預見到、突發、隱藏喺系統。",["Anticipated：預報 TS、擠塞機場","Unanticipated：engine fault、unforecast wx","Latent：org culture、差 manual、rostering","Latent 要靠 formal safety analysis 搵"],["threats","safetyculture"],"CASA b8 p5-6"),
T("threatmgmt",G3,"Manage Threats (NTS 2.1)","識別 threat→ 定 countermeasure→ monitor 結果。",["識別 environment／operational threats","競爭 priorities 都係 threat","落實 countermeasures","Monitor；唔安全就改 plan"],["threats","countermeasures"],"Pilot in Command-NTS s7"),
T("tem_errors",G3,"Errors in TEM","Flight crew 嘅行動或不作為，令偏離預期、縮 margin。",["Handling：flap／power 錯、manual flying","Procedural：briefing、checklist、callout","Communication：read-back 錯、clearance 錯","Mismanaged error＝引致另一 error／UAS"],["errtypes","errmgmt_tem","uas"],"CASA b8 p6-8"),
T("errmgmt_tem",G3,"Manage Errors (NTS 2.2)","用 checklist／SOP 預防，UAS 前搵出 error。",["Monitor：systems、environment、其他 crew","喺 UAS 前 correct","目標：error 變 inconsequential","Single pilot：self-direction"],["tem_errors","uas","countermeasures"],"Pilot in Command-NTS s8"),
T("uas",G3,"Undesired Aircraft State","Pilot 造成嘅位置／speed偏差或 config 錯，safety margin 減。",["例：wrong altitude／heading／IAS","Hi／Lo on glidepath；unstable approach","Unnecessary weather penetration","最後機會避免 unsafe outcome","NTS 2.3：recognise、prioritise、recover"],["tem_flow","aviatenav","cfit"],"CASA b8 p8; NTS s9-10"),
T("tem_flow",G3,"TEM Flow","Threat → Error → UAS → Incident；每道關都可以截。",["Threat 唔管理 → error 機會↑","Error 冇發現 → UAS","UAS 冇 recover → LOC／CFIT","每步都有 countermeasure"],["threats","tem_errors","uas","swiss"],"CASA b8; NTS s10"),
T("countermeasures",G3,"TEM Countermeasures","Plan → Direct → Control：briefing、checklist、monitor。",["Plan：pre-flight 識別 threats","Direct：SOP、checklist、approved procedures","Control：monitor progress、amend","保留 reserve capacity"],["threatmgmt","errmgmt_tem","dmimprove"],"CASA b8 p4"),
T("tem_stall",G3,"TEM Example: Stall","Stall 係經典 TEM：threat→ error→ UAS→ recover。",["Threat：distraction、turbulence、fuel imbalance","Error：用 aileron 改 stall／過多 rudder","UAS：low airspeed＋high AOA → stall","Manage：HASELL、lookout、verbalise"],["tem_flow","lookout"],"Mass briefing 06 Stalling s30-31"),
T("tem_solo",G3,"TEM Examples: Solo","每種 solo 有唔同 threat：circuit、WTA、nav。",["Circuit：traffic、upwind tracking","WTA：boundaries、radio failure","Nav：lost、low fuel、weather、last light","Engine failure：glide approach"],["threats","emp"],"Pilot in Command-NTS s11-13"),
T("emp",G3,"Emergency Management Procedure","7 步：fly→ identify→ effect→ decide→ act→ assess→ modify。",["1 Fly the aircraft（用 AP 如有幫助）","2 Identify problem；3 邊啲系統會失","4 Decide：divert／return／continue／PFL","5 Tell someone & act","6 Assess；7 Modify plan"],["aviatenav","dm","agrade"],"Pilot in Command-NTS s14-15"),
// ---------- Situational Awareness
T("sa",G4,"Situational Awareness","明白周圍發生乜，同埋下一步會點 (Endsley)。",["Level 1 Perception；Level 2 Comprehension","Level 3 Projection","喺 time & space 內先有價值","SA 同 decision 係分開評估"],["sa1","sa2","sa3","dm"],"CASA b6 p8; AC 61-08 §5"),
T("sa1",G4,"SA Level 1: Perception","主動掃描、收集數據（機內機外）。",["Instruments、systems、fuel","Weather、ATC、traffic","問題：數據冇、難見、冇 monitor","Misperception、memory failure"],["sa","sa2","lookout"],"CASA b6 p9"),
T("sa2",G4,"SA Level 2: Comprehension","將數據同知識配對，形成 mental model。",["'What does that mean for me?'","例：對頭機；fuel 用多咗","問題：差／錯 mental model","Over-rely default values"],["sa1","sa3","bias"],"CASA b6 p9"),
T("sa3",G4,"SA Level 3: Projection","預計下一步，'fly ahead of the aircraft'。",["例：要落下個場加油","問題：mental model 差","Over-project current trend","令 timely decision 成真"],["sa2","dm","sa_build"],"CASA b6 p9"),
T("sa_loss",G4,"Signs of Lost SA","警號：模糊資訊、confusion、fixation、錯過 checkpoint。",["Ambiguity／contradiction 冇解決","Confusion：'where am I?'","Fixation；heads-down 太耐","Vague comms；ATC 要你重複","Missed checkpoint；唔跟 SOP"],["errchain","tunnel","resa"],"CASA b6 p11; AC 61-08 §5.2"),
T("sa_factors",G4,"What Reduces SA","Poor comm、fatigue／stress、overload／underload、press-on。",["Insufficient communication","Fatigue & stress → fixation","Task overload／underload","Press-on-itis；degraded conditions"],["tasksat","fatigue","stress"],"CASA b6 p10"),
T("sa_build",G4,"Building & Maintaining SA","Plan、what-if、communicate、manage attention、check。",["預定高 workload 階段 roles","'What ifs'；想 illusions","Communicate；speak up","Attention：aircraft → flight path → people","Validate data、睇 big picture"],["sa3","resa","workload"],"CASA b6 p14"),
T("resa",G4,"Re-establishing SA","SA 丟失要識重建，唔係淨係'維持'。",["例：uncertain position","Stop；回 stable state；aviate first","重新 gather → review → plan","Instructor 可用高 workload 練識別"],["sa_loss","aviatenav"],"AC 61-08 §5.2.9-12"),
T("tunnel",G4,"Fixation / Tunnel Vision","盯住一樣嘢，忽略其他；stress 加劇。",["例：checklist 項目令無 lookout","Eastern 401 壞燈膽","Instrument fixation (BIF)","解法：scan pattern、aviate first"],["sa_loss","amygdala","trustinst"],"NTS 03 s41; CASA b1"),
T("tasksat",G4,"Task Saturation / Underload","工作太多會漏嘢，太少會 complacent。",["Overload：miss radio、forget instructions","Single pilot 特別易","Underload：cruise 放鬆、唔再諗","Aviate-Navigate-Communicate 排序"],["workload","sa_factors","aviatenav"],"CASA b6 p10; AC 61-08 §5.3"),
T("cfit",G4,"CFIT","Airworthy aircraft 受控飛入地形，crew 通常唔知。",["Loss of terrain awareness","唔跟 SOP","VFR into IMC；低 cloud／visibility","常見 SA loss 後果","TAWS／EGPWS 幫手"],["sa","sms_lockhart","uas"],"CASA b6 p6; SMS b6"),
T("lookout",G4,"Effective Lookout (NTS 1.1)","有系統咁掃：機內機外，視覺係主要資訊來源。",["每次 10–15° 移動，停低先再移","重點：左右 60°、上下 20°","Size 同 contrast 決定見唔見","Airspace cleared procedure 先turn","Alerted search：radio、ADS-B、TCAS"],["inatt","vision","sa1"],"AC 61-08 §4"),
T("collision",G4,"Constant Bearing","對方喺 windscreen 同一位置唔郁＝會撞。",["Constant bearing, decreasing range","要主動避，唔好等","FAA scan：10° 一個 sector、約 1 秒","54 s 掃 180°×30°；避撞約 12.5 s"],["lookout","sa3"],"AC 61-08 §1.2, §4.2.7"),
T("inatt",G4,"Inattentional Blindness","Looking but not seeing：冇 attention 就唔見。",["Kerang 火車事故例（陸上）","Empty-field myopia：眼睛 default 1–2 m","Focal traps：窗上污點","望遠處（wingtip）再 refocus"],["lookout","vision"],"CASA b6 p4-6; b9 p7"),
// ---------- Decision Making
T("dm",G5,"Decision Making","喺不確定下揀方案；唔等於結果好就係好決定。",["持續循環：monitor → re-evaluate","冇單一正確答案","SA 好 → decision 好","Process：info→ options→ analyse→ decide→ review"],["ndm","dmprocess","decide","sa"],"CASA b7 p7; AC 61-08 §6"),
T("ndm",G5,"Naturalistic DM","真實環境：時間緊、模糊、風險高；唔追求 optimal。",["1980s 後出現","Successful＝你明白並用得好嘅決定","唔係 formula 計算","要 context 考慮 stakes、uncertainty"],["dm","dmtraps"],"CASA b7 p8"),
T("dmprocess",G5,"DM Process Loop","SA → plan → action → result → feedback 閉環。",["Feedforward：想前面","Feedback：睇結果","Monitor vs plan，re-evaluate","決定可以再修訂"],["dm","decide"],"CASA b7 p8; AC 61-08 §6.3"),
T("decide",G5,"DECIDE (FAA)","Detect, Estimate, Choose, Identify, Do, Evaluate。",["D：察覺改變","E：估計要唔要反應","C：揀 outcome","I：識別 action；D：執行；E：評估"],["agrade","dodar","acronyms"],"CASA b7 p16"),
T("dodar",G5,"DODAR (BA)","Diagnose, Options, Decide, Assign, Review。",["多人 crew 用嘅分工式","A＝Assign 任務","R＝Review 結果","同 DECIDE 結構相似"],["decide","acronyms"],"CASA b7 p16"),
T("agrade",G5,"A-GRADE","Aviate, Gather, Review, Analyse, Decide, Evaluate。",["Aviate 先：飛住個機","Gather 多過一個來源","Review：拆成 2–3 chunk","Evaluate 最易漏"],["decide","aviatenav","dm"],"CASA b7 p16-17"),
T("acronyms",G5,"SAFE · RAISE · NMATE","其他 DM 縮寫：結構都係 觀察→ 分析→ 決定→ 評估。",["SAFE：State, Analyse, Fix, Evaluate","RAISE：Review, Analyse, Identify, Select, Evaluate","NMATE (Boeing)：我唔確定每字（OCR）"],["decide","dodar"],"CASA b7 p16",true),
T("ooda",G5,"OODA Loop","Observe, Orient, Decide, Act；快過對手個 loop。",["Boyd（軍事 fighter pilot）","Orient＝用經驗解讀","循環，唔係線性","非 CASA 教材；一般知識"],["dm","dmprocess"],"一般航空／軍事知識（非教材）"),
T("threep",G5,"3P Model","Perceive, Process, Perform：FAA 風險管理循環。",["Perceive：搵 hazards（PAVE）","Process：評估 effect 同 risk","Perform：mitigate／決定","非 CASA 教材；一般知識"],["dm","imsafe"],"FAA 一般知識（非教材）"),
T("fordec",G5,"FORDEC","Facts, Options, Risks&benefits, Decision, Execution, Check。",["Lufthansa／DLR 設計","適合有少少時間嘅 crew","Check＝閉環","非 CASA 教材；一般知識"],["dm","dodar"],"一般航空知識（非教材）"),
T("dmtraps",G5,"Decision Traps","Jump to assumptions、唔考慮 options、唔敢 challenge。",["Complacency；假設冇時間","唔溝通、唔 consult","唔 evaluate／review","Confirmation bias"],["pressure","bias","dmimprove"],"CASA b7 p17"),
T("pressure",G5,"Press-on / Get-there-itis","Plan bias：天氣差都繼續；macho、sunk cost。",["NASA-Ames：常見 error＝繼續飛","Get-there-itis：公司／自己pressure","Macho：'I can handle this'","VFR into IMC 風險隨飛行時間↑"],["gonogo","dmtraps","stress"],"CASA b7 p12; ATSB Batt&O'Hare"),
T("gonogo",G5,"Go / No-Go & Diversion","早啲決定；拖得越耐，options 越少。",["Charter seafood case：遲飛＋天氣＋夜","Precautionary landing 好過飛入 IMC","Last light、fuel、weather 係 hard limits","Operations vs safety：safety 先"],["pressure","i_safety","aviatenav"],"CASA b7 p13-16; Scenario Port Augusta"),
T("dmimprove",G5,"Improving DM","唔能 improvise 好決定，要預先準備。",["Briefing；用 checklist","Reserve capacity","Delegate；big picture","事前通知；有時間就 involve others"],["countermeasures","dm"],"CASA b7 p17-18"),
T("aviatenav",G5,"Aviate · Navigate · Communicate","優先次序：先控制機，然後方向，最後溝通。",["Malfunction 先於 ATC 要求","先 fix UAS，後諗點解","QF32 都堅持呢個 mantra","單頻道處理器：一次做一樣"],["workload","uas","emp"],"AC 61-08 §7; CASA b7 p11"),
T("workload",G5,"Workload & Task Mgmt (NTS 1.4)","排優先、按次序計劃、預見、用 technology。",["Brain＝single-channel processor","Workload factors：fatigue、stress、準備差","用 AP 騰出時間 lookout","Anticipate events 預留 time"],["aviatenav","tasksat","nts_map"],"AC 61-08 §7; NTS s6"),
T("qf32",G5,"Case: QF32","5 位 crew，CRM＋反轉思維＋'aviate navigate communicate'。",["UERF no.2 engine；A380","ECAM >120 checklists","改問：'有咩 controls 可用'","1 h 44 min 後返 Changi"],["crm","aviatenav","team"],"CASA b7 p9-11"),
// ---------- Human Performance
T("fatigue",G6,"Fatigue","超越正常疲倦嘅身心勞累；影響 judgement。",["Physical＋mental fatigue","Warning：forgetful、irritable、低標準","Slowed reaction；漏 checklist／radio","Charter pilot 最少報 fatigue"],["fatigue_mgmt","frms","sa_factors"],"CASA b3 p4-7"),
T("fatigue_mgmt",G6,"Managing Fatigue","Sleep 係唯一解；sleep debt 要 pay back。",["至少 7 h／晚","休息時間打 nap","話俾同事知；留意同事","Controlled rest；食飯定時"],["fatigue","frms","i_fatigue"],"CASA b3 p7; BAK ch8"),
T("frms",G6,"FRMS & Rostering","Fatigue Risk Management System：收集數據、管 roster。",["Self-report、hazard report form","例（小型 operator）：max 12 h shift","Min 12 h break；max 6 shifts 連續","呢啲係 operator 例子，唔係法規"],["fatigue","safetyculture"],"CASA b3 p8",true),
T("stress",G6,"Stress","Acute 或 chronic；adrenaline／cortisol 提高 HR、BP。",["Acute：irritable、concentration 差","Chronic：burnout、sleep 問題","In-flight stressors：noise、weather、alarm","Management vs safety pressure 都係 stressor"],["arousal","stresscope","amygdala"],"CASA b3 p9-12"),
T("arousal",G6,"Stress–Performance Curve","倒 U：太少會悶，適中最好，過多就 panic／burnout。",["No stress：lethargic","Optimum：focused、motivated","Overload：panic、anger","Prolonged：burnout","Yerkes-Dodson 一類曲線"],["stress","amygdala","tunnel"],"CASA b3 p9 fig"),
T("stresscope",G6,"Coping with Stress","準備→ 預見→ 計劃→ 溝通→ 用 resources→ CRM→ 時間管理。",["Preparation & practice 減 stress","Anticipate & plan","Share tasks；ask for help","Avoid alcohol 作 coping","Mindfulness／運動／睡眠"],["stress","crm","i_stress"],"CASA b3 p10-13"),
T("amygdala",G6,"Amygdala Hijack","Amygdala 快過 PFC，引致 freeze、tunnel vision。",["Goleman 提出","Thalamus → Amygdala（跳過邏輯）","Cortisol／adrenaline、淺呼吸","Fix：stabilise、box breathing、verbalise 情緒"],["arousal","tunnel","i_stress"],"ENZO Amygdala Hijack docx"),
T("hypoxia",G6,"Hypoxia","腦部缺氧；altitude越高越易，自己可能唔察覺。",["Hypoxic：氧分壓低；Anaemic／CO 亦類似","約 10,000 ft 以上 mental／vision 變差","症狀：dizzy、tingling、判斷力差","吸煙＝+4,000–5,000 ft 效果","捐血後 2–3 日唔好飛"],["tuc","hyperv","co"],"BAK ch8 p278; ATP Test Prep"),
T("tuc",G6,"Time of Useful Consciousness","突然失氧後仲有用嘅時間；越高越短。",["又叫 effective performance time (EPT)","18,000 ft 約 20–30 min","30,000 ft 約 1 min 級數","40,000 ft 約十幾秒","表 OCR 唔清；數值係參考"],["hypoxia"],"BAK ch8 Table 8-1",true),
T("hyperv",G6,"Hyperventilation","過度呼吸沖走 CO2；症狀似 hypoxia 但 recovery 快。",["由焦慮引起；自我強化","手腳、唇麻痺","慢呼吸／講嘢／袋呼吸","冇好轉就當 hypoxia"],["hypoxia","stress"],"BAK ch8 p280; ATP"),
T("co",G6,"Carbon Monoxide","無色無味；hb 結合 CO 多過 O2。",["來源：exhaust leak、cabin heat、煙","頭痛、dizzy、judgement 差","Cherry red 皮膚（晚期）","行動：關暖氣、通風、盡快landing","Detector 有 expiry"],["hypoxia"],"BAK ch8 p281"),
T("baro",G6,"Pressure Effects","Barotrauma、ears、decompression、潛水後飛行。",["Eustachian tube 塞住：落機痛","氣體膨脹：climb時 gut、牙","AU 建議：潛水後 4 h／12 h／48 h 唔好飛","感冒：don't fly"],["hypoxia","health"],"BAK ch8 p279-282"),
T("alcohol",G6,"Alcohol & Drugs","少量都影響 judgement；唔可靠時間表。",["BAK：最少 8 h，每杯多 1 h","FAA 14 CFR 91.17：8 h","HK CAD 規定我唔確定","Medication：假設會 ground 你","Anaesthetic：local 24 h／general 72 h (AU)"],["health","imsafe"],"BAK ch8 p283, 287; ATP 9354",true),
T("imsafe",G6,"IMSAFE · PAVE","Fitness 自查：Illness, Medication, Stress, Alcohol, Fatigue, Eating。",["PAVE：Personal, Aircraft, enVironment, External","External pressure 係 threat","CIGAR：run-up check","Personal minimums"],["alcohol","fatigue","threep"],"CASA b9 p19; AOPA"),
T("health",G6,"Health & Fitness","Dehydration、diet、DVT、食物中毒、吸煙。",["Dehydration：climb都漏水；唔好等渴","Food poisoning 係最常見 in-flight incapacitation","機組食唔同餐","DVT：每小時郁腳","吸煙＝慢性缺氧"],["baro","fatigue"],"BAK ch8 p282-286"),
// ---------- Perception & Illusions
T("infoproc",G7,"Information Processing","Sense → Perceive → Decide → Act，加 memory 同 attention。",["Perception 失敗→ SA 差","Sensory memory 1–5 s","Single-channel processor","限制：time、overload、expectation、fatigue"],["memory","bias","sa"],"CASA b9 p4; AC 61-08 §3"),
T("vision",G7,"Vision","眼睛係主要資訊來源；夜間靠 peripheral。",["夜視適應約 30 min","夜間睇偏 10–15° 先見","強光 → flash blindness","Scan：每次 ≤10°、≥1 s"],["lookout","inatt","blackhole"],"CASA b9 p6-7"),
T("vestib",G7,"Vestibular & 3 Senses","Visual、vestibular、musculoskeletal；視覺最 dominant。",["Semicircular canals：pitch／roll／yaw","慢 roll 可能感覺唔到","Otoliths：linear acceleration／tilt","衝突時眼睛優先"],["sd","leans","trustinst"],"CASA b9 p7; BIF s9-11"),
T("sd",G7,"Spatial Disorientation","對 attitude／altitude／airspeed 理解錯；任何人都會。",["~10% GA accidents，其中 90% fatal (ATSB 2013)","Lake Eyre 2011：dark night","預防：instruments／固定地面參考","通常係'when 唔係 if'"],["vestib","trustinst","leans"],"CASA b9 p5, 14"),
T("leans",G7,"The Leans","Roll 慢→ 感覺平；改正又覺得向反方向 bank。",["Fluid 穩定→ 以為 level","放返 level → 覺得向另一邊 bank","唔好跟感覺 re-roll","Standard rate turn；scan attitude"],["graveyard","sd"],"CASA b9 p14; BIF s15"),
T("graveyard",G7,"Graveyard Spiral","持續turn→ fluid 停→ 以為 level descent→ 拉桿收緊spin。",["Turn 夠耐，內耳停止反應","放平時覺得反向轉","拉 back pressure 更緊更跌","信 attitude indicator"],["leans","somato"],"CASA b9 p15; BIF s16"),
T("somato",G7,"Somatogravic Illusion","急加速→ 感覺 nose-up→ 推桿向下。",["Take-off／go-around 冇 horizon","急減速相反→ 拉高→ stall","Cessna 310 Bathurst Island 例","信 instruments"],["graveyard","sd"],"CASA b9 p15-16; BIF s14"),
T("vest_other",G7,"Inversion · Elevator · Coriolis","其他 vestibular illusions：運動突變令內耳誤判。",["Inversion：climb→ level 覺得後翻","Elevator：updraft 覺得要推桿","Coriolis：turn中急轉頭","慢、穩定嘅 control inputs"],["sd","leans"],"CASA b9 p17; ATP"),
T("blackhole",G7,"Black Hole Illusion","無燈地區 straight-in approach：容易太低或太高。",["海岸、outback、極清晰空氣","城市光令覺得更近","避免長 straight-in；用 glide slope／instruments","Mt Gambier 例"],["visill","trustinst"],"CASA b9 p9-10"),
T("visill",G7,"Other Visual Illusions","False horizon、autokinesis、flicker vertigo、runway 形狀。",["Wide runway 覺得太低；narrow 覺得太高","上坡地形：覺得太高","雨令燈更亮→ 覺得太低；霧令覺得太遠","Autokinesis：望側面"],["blackhole","trustinst"],"CASA b9 p9-13"),
T("lowill",G7,"Illusions Close to Ground","低飛：into-wind 覺得慢、downwind 覺得快。",["Into wind：感覺慢","Downwind：感覺快","轉 downwind 覺得 slip；轉 upwind 覺得 skid","Aviate first；唔好 over-focus 場地"],["visill","tem_solo"],"Mass briefing 12 PSL s6"),
T("trustinst",G7,"Trust Your Instruments","視覺唔可靠時，同感覺衝突就信 instruments。",["BIF：inadvertent cloud 唔好慌","即 scan；可 180° 轉頭／AP","Pitot heat ON；返 attitude indicator","唔好 fixate；唔好 over-control"],["sd","tunnel","blackhole"],"Mass briefing 13 BIF"),
T("memory",G7,"Memory & Chunking","Working memory 約 7±2；chunk 同 mnemonics 幫手。",["用得越多→ 入 long-term","CIGAR、PAVE、IMSAFE","Sensory memory 1–5 s","高 workload 容易漏聽 ATC"],["infoproc","bias"],"CASA b9 p18-19"),
T("bias",G7,"Cognitive Biases","Confirmation、expectation、fixation、destination obsession。",["Confirmation：只睇支持自己嘅資訊","Expectation：聽到你預期嘅嘢","Destination obsession → press-on","解法：cross-check、read-back"],["dmtraps","sa2","readback"],"CASA b9 p8, 22; AC 61-08 §3"),
// ---------- Communication & Teamwork
T("commproc",G8,"Communication Process","Sender encode → channel → receiver decode → feedback。",["Shared meaning 先算 communicate","Aviation English＝標準 phraseology","Feedback 閉環","Chinese whispers：多手易變形"],["commtypes","commfail"],"CASA b4 p17-19"),
T("commtypes",G8,"Types of Communication","Verbal、non-verbal、written、visual。",["口頭 error rate 約 3%（工業環境）","Paralinguistics：語氣、音量","Radio 冇表情／手勢","Written：NOTAM、manual"],["commproc","readback"],"CASA b4 p15-16"),
T("commfail",G8,"Why Comms Fail","Sender、receiver 或兩邊都有錯。",["Message 唔完整／模糊","Receiver 唔 listen／唔 clarify","Expectation、workload、accent","Blocked transmission、callsign confusion"],["history","readback","bias"],"CASA b4 p20-22"),
T("readback",G8,"Read-back / Hear-back","Clearance 一定 read back；ATC 錯要 hear back。",["Altitude／heading／speed／hold short 要 full read-back","長 clearance 寫低","每次唔超 2–3 個 critical items","Key 之前聽 2 秒","唔好假設 ATC 聽你 read-back"],["commfail","assert"],"CASA b4 p23-24"),
T("assert",G8,"Assertiveness","Direct、open；唔 aggressive 亦唔過分客氣。",["Advocacy：講出你嘅 concern＋建議","Inquiry：問清楚對方想法","Stress urgency／importance","Advocacy-inquiry 非教材：一般 CRM 知識"],["authgrad","i_speak"],"CASA b4 p22; CRM 一般知識"),
T("authgrad",G8,"Authority Gradient","Crew 權力落差：太斜（唔敢出聲）或太平（冇人拎主意）。",["Steep：Tenerife 1977、ATR Lubbock 2009","Flat：equal，怕得罪人唔指出","Inverse：instructor 唔行使 PIC","因素：rank、experience、culture、fatigue"],["assert","history","i_speak"],"CASA b5 p17-20"),
T("leader",G8,"Leadership & Followership","PIC 係 leader；followers 要建設性挑戰。",["ICAO：leader 以身作則、說服","Followership＝supportive critical thinking","Blake–Mouton grid：4 種 leader style","Airmanship 要 discipline"],["pic","team","i_lead"],"CASA b5 p15; HPL02 slide"),
T("team",G8,"Teamwork & Briefing","Team＝互補技能、共同目標、互相負責。",["8 skills：adaptability、comm、coordination、DM","Interpersonal、leadership、monitoring、shared SA","Briefing：目標、roles、limits、debrief","'Team of champions' 輸 'champion team'"],["crm","leader","crmroles","i_team"],"CASA b5 p4, 23"),
T("crmroles",G8,"Task Sharing","分工：一個飛，一個處理 comms／checklist。",["PF／PM role 清楚","Sullenberger：接 controls＋radio，FO 做 checklist","按經驗分配（FO 新機型熟 checklist）","Heavy workload → 一人專責 comms"],["team","qf32","workload"],"CASA b5 p16; b4 p24"),
T("singlecrm",G8,"Single-Pilot CRM","一個人都用 CRM：passengers、ATC、company 都係 resource。",["Brief pax 令佢哋幫手 lookout","Overweight 例：assertiveness＋conflict resolution","Leadership 面向 pax／company","Seek ATC help"],["crm","assert","i_safety"],"CASA b5 p16-17; b4 p24"),
// ---------- Automation & Design
T("auto",G9,"Automation Paradox","自動化抹走小 error，但製造大 error 機會。",["Wiener 觀點","Pilot 變 monitor：boring 又高風險","Shuttle 例：北緯當南緯","Know when to disconnect"],["mode","complacency"],"CASA b10 p17"),
T("mode",G9,"Mode Confusion","搞唔清 AP／FMS 喺邊個 mode。",["Boeing 737 FL390 2013：誤選 mode climb超 900 ft","Crew 以為 AP re-engaged 但無","Fatigue 加劇","Verify FMA／annunciators"],["auto","fatigue"],"CASA b10 p18; b3 p6"),
T("complacency",G9,"Complacency & Startle","過度信任 automation；突發事件令 startle／surprise。",["Startle＝反射（fight-or-flight）","Surprise＝與預期唔合","Over-reliance","Training 準備 unexpected"],["auto","amygdala"],"CASA b10"),
T("design",G9,"Design & Human Error","設計差令 error 更易；'pilot error' 常係 design problem。",["Gear／flap lever 太近","Fuel gauge 唔準","Error-reversible design","Hardware–liveware match"],["shell","errmgmt"],"CASA b1 p11; b10"),
// ---------- Interview Link
T("i_team",G10,"Q: Teamwork Example","用 CRM／team 結構答；只講你真實經歷，唔好作。",["S：場景＋team 目標","T：你角色；A：溝通、分工、支持","R：結果＋學到咩","Keyword：shared goal、roles、feedback、briefing"],["team","crmroles","crm"],"面試 framework（非教材）"),
T("i_lead",G10,"Q: Leadership Example","Leader＋follower 都要講；示範 influence 而唔係 authority。",["Situation → Task","Action：set goal、delegate、listen","Result；reflect","Keyword：lead by example、followership、workload"],["leader","pic"],"面試 framework"),
T("i_err",G10,"Q: A Mistake You Made","TEM 結構：error → detect → correct → learn。",["Honest；唔 blame 人","Detect 點樣發現","Countermeasure 之後點改","Keyword：just culture、report、checklist"],["errtypes","just","tem_flow"],"面試 framework"),
T("i_speak",G10,"Q: Disagree with Someone Senior","用 advocacy＋inquiry；講事實＋建議，尊重角色。",["State concern 清晰","Offer option；問對方睇法","Escalate 如果安全受影響","Keyword：authority gradient、assertive、respect"],["assert","authgrad"],"面試 framework"),
T("i_stress",G10,"Q: Working Under Pressure","講 prepare、prioritise、keep calm、seek support。",["Recognise stress signs","Aviate-navigate-communicate 式排序","Breathing／verbalise 穩定","Keyword：workload、priority、coping"],["arousal","stresscope","amygdala","aviatenav"],"面試 framework"),
T("i_dm",G10,"Q: Decision with Incomplete Info","用 DECIDE／A-GRADE 說你點分析、揀方案、evaluate。",["Gather info 多過一個來源","Options＋risk","Decide，通知人","Evaluate；準備改"],["decide","agrade","ndm"],"面試 framework"),
T("i_sa",G10,"Q: Multitasking / Awareness","用 SA 3 levels 描述你點 scan、理解、預計。",["Perceive → Comprehend → Project","高 workload 時排 priority","Reset 當 overload","Keyword：mental model、scan、what-if"],["sa","tasksat","sa_build"],"面試 framework"),
T("i_fatigue",G10,"Q: Managing Fatigue / Lifestyle","展示 self-awareness：sleep、IMSAFE、坦白講。",["Sleep ≥7 h 習慣","Self-assess before duty","Report，唔硬撐","Keyword：fitness to fly、fatigue management"],["fatigue_mgmt","imsafe"],"面試 framework"),
T("i_safety",G10,"Q: Safety vs Commercial Pressure","Safety 先；講 go/no-go 同溝通。",["Operations vs safety","Hard limits（fuel、weather、last light）","Early decision；通知相關人","Keyword：press-on、diversion、PIC authority"],["gonogo","pressure","singlecrm"],"面試 framework"),
T("i_comm",G10,"Q: Miscommunication Example","Closed-loop：clarify、read-back、standard phraseology。",["Shared meaning","點發現誤會","Fix 同預防","Keyword：feedback loop、clarify、hear-back"],["readback","commfail"],"面試 framework"),
T("i_adapt",G10,"Q: Adapting to Change","NDM：情況變，plan 要改；講 flexible。",["Situation 變咗","Re-evaluate plan","Communicate 新 plan","Keyword：flexible、monitor、re-evaluate"],["ndm","dmprocess"],"面試 framework"),
],
links:[
["hf.swiss","hf.tem_flow","Swiss cheese 每片 = TEM 一道關"],
["hf.threats","hf.tem_errors","Threat 增加 error 機會"],
["hf.tem_errors","hf.uas","Error 冇 manage → UAS"],
["hf.uas","hf.cfit","UAS 冇 recover → CFIT／LOC"],
["hf.sa_factors","hf.sa_loss","Fatigue／overload 令 SA 流失"],
["hf.sa","hf.dm","SA 質素決定 decision 質素"],
["hf.tunnel","hf.amygdala","Stress 觸發 tunnel vision"],
["hf.arousal","hf.tunnel","過高 arousal → narrow attention"],
["hf.pressure","hf.gonogo","Press-on 令人遲遲唔做 no-go"],
["hf.stress","hf.dmtraps","Stress 令 decision traps 更易發生"],
["hf.fatigue","hf.mode","Fatigue 增加 mode error"],
["hf.fatigue","hf.sa_loss","Fatigue 降低 SA"],
["hf.authgrad","hf.assert","Gradient 太斜，assertiveness 就好難"],
["hf.authgrad","hf.history","Tenerife：steep gradient＋miscomm"],
["hf.commfail","hf.readback","Read-back 係防止 miscommunication 嘅 defence"],
["hf.bias","hf.readback","Expectation bias → 聽錯 clearance"],
["hf.vestib","hf.sd","內耳錯誤訊息 → spatial disorientation"],
["hf.sd","hf.trustinst","解法：信 instruments"],
["hf.leans","hf.graveyard","Leans 若 re-roll 就變 graveyard spiral"],
["hf.somato","hf.sd","加速感覺 pitch-up 屬 spatial disorientation"],
["hf.blackhole","hf.visill","同屬 visual illusions on approach"],
["hf.hypoxia","hf.tuc","altitude越高，TUC 越短"],
["hf.hypoxia","hf.hyperv","症狀相似，要分辨"],
["hf.co","hf.hypoxia","CO 令血液運氧失效，效果似缺氧"],
["hf.aviatenav","hf.uas","先 fix UAS，再諗原因"],
["hf.agrade","hf.aviatenav","A-GRADE 第一步 = Aviate"],
["hf.workload","hf.tasksat","工作管理差 → saturation"],
["hf.crm","hf.nts_map","CRM = NTS"],
["hf.tem","hf.nts_map","NTS 2.x = TEM"],
["hf.lookout","hf.collision","Constant bearing 係 lookout 要識認嘅 cue"],
["hf.inatt","hf.lookout","Looking but not seeing 令 lookout 失效"],
["hf.auto","hf.complacency","Automation 令人 complacent"],
["hf.design","hf.shell","Design 差 = hardware–liveware mismatch"],
["hf.safetyculture","hf.just","Just culture 係 safety culture 一部分"],
["hf.errtypes","hf.just","Violation vs honest error 處理唔同"],
["hf.qf32","hf.crmroles","QF32 分工例子"],
["hf.i_err","hf.just","面試講 error 要展示 just culture 態度"],
["hf.i_speak","hf.authgrad","面試題對應 authority gradient"],
["hf.i_stress","hf.arousal","面試答pressure用 arousal 概念"],
["hf.i_safety","hf.gonogo","面試答 safety vs pressure"],
["hf.i_dm","hf.agrade","用 A-GRADE 答 decision 題"],
["hf.memory","hf.sa_loss","Memory 滿 → 漏 ATC 指示"],
["hf.stresscope","hf.crm","CRM 係 coping 工具"],
["hf.imsafe","hf.fatigue_mgmt","IMSAFE 的 F = fatigue 自查"],
["hf.tem_stall","hf.tem_flow","Stall 係 TEM 實例"],
["hf.emp","hf.aviatenav","EMP 第 1 步 = fly the aircraft"],
["hf.lowill","hf.visill","同屬 visual misperception"],
["hf.ooda","hf.dmprocess","OODA 係循環決策模型"],
["hf.threep","hf.imsafe","3P 的 Perceive 用 PAVE"],
["hf.tem_solo","hf.threats","Solo 每種飛行 threat 唔同"],
["hf.countermeasures","hf.dmimprove","Briefing／checklist 同時係 TEM 同 DM 工具"],
["hf.sa1","hf.vision","Level 1 靠視覺 scan"],
["hf.sa3","hf.i_sa","面試答 SA 用 3 levels"],
["hf.gonogo","hf.sa3","預計未來天氣 → 早啲 no-go"],
["hf.workload","hf.aviatenav","排優先 = aviate first"],
["hf.lowill","hf.tunnel","Over-focus 場地會失控"],
["hf.memory","hf.readback","記憶有限 → 寫低 clearance"],
["hf.crmroles","hf.commproc","分工要靠清晰溝通"],
["hf.singlecrm","hf.threats","Pax 干擾係 threat 亦係 resource"],
["hf.alcohol","hf.imsafe","IMSAFE 的 A"],
["hf.health","hf.fatigue","Dehydration／diet 影響 fatigue"],
["hf.ndm","hf.i_adapt","面試答適應變化用 NDM"],
["hf.stress","hf.i_stress","面試pressure題"],
["hf.tuc","hf.baro","altitude同pressure效果"],
["hf.stresscope","hf.i_stress","Coping 步驟用嚟答"],
["hf.cultstages","hf.just","成熟文化需要 just culture"],
["hf.vest_other","hf.somato","同屬 vestibular illusions"],
["hf.acronyms","hf.agrade","同屬 DM 縮寫"],
["hf.i_lead","hf.leader","面試領導題"],
["hf.i_team","hf.team","面試團隊題"],
],
cards:X.concat([
// Foundations
{e:"🧠",q:"What does 'human factors' mean in aviation?",a:"Applying knowledge of human capabilities and limitations so people and systems fit well together, for safer and more efficient operations.",zh:"人同系統配合，補足 technical skills。",topic:"hf.hf",st:"ok"},
{e:"📊",q:"Roughly how many accidents involve human performance deficiencies?",a:"Around 70–80 per cent (CASA); AC 61-08 quotes about 75 per cent.",zh:"唔同來源略有分別，答範圍。",topic:"hf.hf",st:"ok"},
{e:"🌍",q:"Name an accident caused mainly by miscommunication.",a:"Tenerife 1977, where 583 people died after misunderstood take-off clearance communications.",zh:"最嚴重航空事故。",topic:"hf.history",st:"ok"},
{e:"💡",q:"What was the lesson of Eastern 401 (1972)?",a:"The crew fixated on a faulty bulb and nobody monitored the aircraft; fixation and task prioritisation matter.",zh:"Fixation，冇人飛機。",topic:"hf.history",st:"ok"},
{e:"🧩",q:"What does SHEL(L) stand for?",a:"Software, Hardware, Environment, Liveware (individual), Liveware (others).",zh:"人喺系統中心。",topic:"hf.shell",st:"ok"},
{e:"⚠️",q:"Give a liveware–liveware mismatch example.",a:"Communication breakdown between pilots, or at a handover.",zh:"L–L。",topic:"hf.shell",st:"ok"},
{e:"👥",q:"What is CRM?",a:"The effective use of all available resources — people, equipment, information — to achieve safe, efficient flight and reduce error.",zh:"CRM = NTS。",topic:"hf.crm",st:"ok"},
{e:"📅",q:"Why did CRM begin?",a:"It followed the high accident rate in the 1970s, with many accidents traced to human factors.",zh:"1970s 事故率高。",topic:"hf.crm",st:"ok"},
{e:"🔢",q:"List the NTS elements in Part 61 MOS Schedule 2.",a:"1.1 lookout, 1.2 situation awareness, 1.3 decisions, 1.4 priorities and tasks, 1.5 communications, 2.1-2.3 threats, errors, UAS.",zh:"CASA 結構。",topic:"hf.nts_map",st:"ok"},
{e:"🎯",q:"What is airmanship?",a:"The consistent use of good judgement and well-developed skills to accomplish flight objectives (ICAO).",zh:"NTS 令佢可量度。",topic:"hf.airmanship",st:"ok"},
{e:"👨‍✈️",q:"What is the PIC responsible for?",a:"Knowing the rules, all flight preparation, safe conduct, managing passengers and reporting damage or incidents.",zh:"你係 PIC。",topic:"hf.pic",st:"ok"},
{e:"📚",q:"What three resources do you bring as a pilot?",a:"Knowledge, skills and attitude; attitude is entirely your own.",zh:"KSA。",topic:"hf.kas",st:"ok"},
// Error & Safety Culture
{e:"✋",q:"Slip versus lapse?",a:"A slip is an action not as planned; a lapse is a memory failure — pulling the mixture instead of carb heat versus forgetting carb heat.",zh:"Unintended 兩種。",topic:"hf.errtypes",st:"ok"},
{e:"🧠",q:"What is a mistake in Reason's classification?",a:"A failure in the plan itself — even perfect execution would not achieve the goal.",zh:"Rule／knowledge-based。",topic:"hf.errtypes",st:"ok"},
{e:"🚫",q:"What is a violation?",a:"An intentional deviation from rules or procedures, either routine or exceptional.",zh:"故意。",topic:"hf.errtypes",st:"ok"},
{e:"🧀",q:"Explain the Swiss cheese model.",a:"Each slice is a defence; holes constantly move, and when they line up an error passes through to become an accident.",zh:"洞對齊先出事。",topic:"hf.swiss",st:"ok"},
{e:"🔗",q:"How do you break the error chain?",a:"By spotting warning signs such as confusion or fixation and acting before the chain completes.",zh:"斷任何一環。",topic:"hf.errchain",st:"ok"},
{e:"🛡️",q:"Two ways to reduce human error consequences?",a:"Design errors to be reversible and use protective procedures and cross-monitoring.",zh:"Mitigate。",topic:"hf.errmgmt",st:"ok"},
{e:"🏢",q:"What is safety culture?",a:"The shared values, attitudes and behaviours about safety — 'the way we do things around here'.",zh:"冇人睇都做啱。",topic:"hf.safetyculture",st:"ok"},
{e:"⚖️",q:"What is just culture?",a:"A culture without blame that encourages reporting, but with a clear line between acceptable and unacceptable behaviour.",zh:"Trust＋accountability。",topic:"hf.just",st:"ok"},
{e:"📈",q:"What are the stages of safety culture maturity?",a:"Pathological, reactive, calculative, proactive, generative.",zh:"Hudson。",topic:"hf.cultstages",st:"ok"},
{e:"🏔️",q:"What did the Lockhart River analysis show using SHELL?",a:"Multiple mismatches: unclear procedures, no TAWS, weak CRM training, and no correction of the descent — not just pilot error.",zh:"系統性原因。",topic:"hf.sms_lockhart",st:"ok"},
// TEM
{e:"🛠️",q:"What is TEM?",a:"A way of detecting and responding to threats and errors before they reduce safety margins or cause an undesired aircraft state.",zh:"Humans will err。",topic:"hf.tem",st:"ok"},
{e:"🌩️",q:"Define a threat.",a:"A situation or event that may negatively affect flight safety or promote pilot error.",zh:"外部／內部。",topic:"hf.threats",st:"ok"},
{e:"🧍",q:"Give internal threats.",a:"Fatigue, stress, inexperience, over- or under-confidence and press-on-itis.",zh:"Liveware。",topic:"hf.threats",st:"ok"},
{e:"📋",q:"Anticipated, unanticipated and latent threats — examples?",a:"Forecast thunderstorms; unforecast engine malfunction or weather; poor manuals or organisational culture.",zh:"Latent 難見。",topic:"hf.threattypes",st:"ok"},
{e:"🎛️",q:"How do you manage a threat?",a:"Identify it, develop and apply countermeasures, then monitor and modify the plan if safety is not assured.",zh:"NTS 2.1。",topic:"hf.threatmgmt",st:"ok"},
{e:"❌",q:"Name TEM error categories.",a:"Handling, procedural and communication errors.",zh:"三類。",topic:"hf.tem_errors",st:"ok"},
{e:"🔁",q:"What is a mismanaged error?",a:"An error that is linked to or induces another error or an undesired aircraft state.",zh:"Error cascade。",topic:"hf.tem_errors",st:"ok"},
{e:"✅",q:"How do you manage errors?",a:"Use checklists and SOPs, monitor systems, environment and other crew, and correct before reaching a UAS.",zh:"NTS 2.2。",topic:"hf.errmgmt_tem",st:"ok"},
{e:"⛔",q:"What is an undesired aircraft state?",a:"A pilot-induced position or speed deviation, flight-control misapplication or incorrect configuration with reduced safety margin.",zh:"最後機會。",topic:"hf.uas",st:"ok"},
{e:"📉",q:"Give examples of UAS.",a:"Wrong altitude, heading or speed, unstable approach, unnecessary weather penetration.",zh:"Handling UAS。",topic:"hf.uas",st:"ok"},
{e:"🔄",q:"Describe the TEM flow.",a:"Threat → error → undesired aircraft state → incident, with chances to intercept at each stage.",zh:"每步截。",topic:"hf.tem_flow",st:"ok"},
{e:"🛬",q:"Explain stalling as a TEM scenario.",a:"Threat: distraction or turbulence; error: poor handling; UAS: high AOA and low airspeed; manage by recognising and recovering.",zh:"Enzo。",topic:"hf.tem_stall",st:"ok"},
{e:"🧭",q:"Give TEM threats for a nav solo.",a:"Getting lost, low fuel, weather and last light — managed by planning, fuel checks, and TAF/GAF knowledge.",zh:"Solo。",topic:"hf.tem_solo",st:"ok"},
{e:"🚨",q:"What are the steps of an emergency management procedure?",a:"Fly, identify, assess effect, decide, act and tell, assess, modify.",zh:"7 步。",topic:"hf.emp",st:"ok"},
{e:"🧰",q:"What are TEM countermeasures?",a:"Planning, directing actions with checklists and SOPs, and controlling progress by monitoring and amending.",zh:"Plan-direct-control。",topic:"hf.countermeasures",st:"ok"},
// SA
{e:"👁️",q:"Define situational awareness.",a:"Perceiving elements in the environment, understanding their meaning and projecting their near-future status (Endsley).",zh:"3 levels。",topic:"hf.sa",st:"ok"},
{e:"🔍",q:"What is Level 1 SA?",a:"Perception: actively scanning to gather data inside and outside the aircraft.",zh:"睇到。",topic:"hf.sa1",st:"ok"},
{e:"🧩",q:"What is Level 2 SA?",a:"Comprehension: matching observations with knowledge to form an accurate mental model.",zh:"明白。",topic:"hf.sa2",st:"ok"},
{e:"🔮",q:"What is Level 3 SA?",a:"Projection: using understanding to anticipate what happens next and decide in time.",zh:"預計。",topic:"hf.sa3",st:"ok"},
{e:"🚩",q:"What are signs of degraded SA?",a:"Needing ATC to repeat, missed checkpoints, fixation, vague communication and unresolved discrepancies.",zh:"警號。",topic:"hf.sa_loss",st:"ok"},
{e:"⬇️",q:"What factors reduce SA?",a:"Poor communication, fatigue and stress, task overload or underload, press-on-itis and degraded conditions.",zh:"五樣。",topic:"hf.sa_factors",st:"ok"},
{e:"🏗️",q:"How do you build SA?",a:"Plan ahead, ask 'what ifs', communicate, manage attention and check your understanding.",zh:"Maintain。",topic:"hf.sa_build",st:"ok"},
{e:"🆘",q:"What should you do after losing SA?",a:"Stabilise the flight, gather and review information again, and rebuild the mental model.",zh:"Re-establish。",topic:"hf.resa",st:"ok"},
{e:"🕳️",q:"Define tunnel vision.",a:"Narrow focus on one task or instrument that excludes other critical information.",zh:"Stress 加劇。",topic:"hf.tunnel",st:"ok"},
{e:"🌀",q:"Overload versus underload?",a:"Overload misses information; underload leads to complacency — both reduce SA.",zh:"兩端。",topic:"hf.tasksat",st:"ok"},
{e:"⛰️",q:"What is CFIT?",a:"An airworthy aircraft under crew control is flown unintentionally into terrain, water or obstacles.",zh:"通常冇察覺。",topic:"hf.cfit",st:"ok"},
{e:"🔭",q:"How should you scan for traffic?",a:"Move your eyes 10–15° at a time, pause, emphasise 60° left/right and 20° up/down.",zh:"AC 61-08。",topic:"hf.lookout",st:"ok"},
{e:"🛩️",q:"What does constant bearing mean?",a:"Traffic stays at the same spot in the windscreen while closing, so collision will occur unless action is taken.",zh:"要避。",topic:"hf.collision",st:"ok"},
{e:"🙈",q:"What is inattentional blindness?",a:"Looking without seeing because attention is directed elsewhere.",zh:"Kerang 例。",topic:"hf.inatt",st:"ok"},
{e:"👓",q:"What is empty-field myopia?",a:"With nothing to focus on, eyes default to 1–2 m focus, making distant traffic look smaller and farther.",zh:"望 wingtip。",topic:"hf.inatt",st:"ok"},
// DM
{e:"⚖️",q:"Define decision making.",a:"The act of choosing between alternatives under conditions of uncertainty.",zh:"CASA 定義。",topic:"hf.dm",st:"ok"},
{e:"🌪️",q:"What is naturalistic decision making?",a:"Studying decisions in real, time-pressured, uncertain, high-stakes settings rather than optimal formulas.",zh:"1980s 後。",topic:"hf.ndm",st:"ok"},
{e:"🔁",q:"How is feedback used in decisions?",a:"Results are monitored against the plan and the decision is re-evaluated and updated.",zh:"閉環。",topic:"hf.dmprocess",st:"ok"},
{e:"🧮",q:"What does DECIDE stand for?",a:"Detect, Estimate, Choose, Identify, Do, Evaluate.",zh:"FAA。",topic:"hf.decide",st:"ok"},
{e:"🇬🇧",q:"What does DODAR stand for?",a:"Diagnose, Options, Decide, Assign, Review.",zh:"BA。",topic:"hf.dodar",st:"ok"},
{e:"✈️",q:"What does A-GRADE stand for?",a:"Aviate, Gather information, Review, Analyse, Decide, Evaluate.",zh:"Aviate 第一。",topic:"hf.agrade",st:"ok"},
{e:"🔤",q:"What do SAFE and RAISE stand for?",a:"SAFE: State, Analyse, Fix, Evaluate. RAISE: Review, Analyse, Identify, Select, Evaluate.",zh:"另兩個。",topic:"hf.acronyms",st:"ok"},
{e:"🎯",q:"What is the OODA loop?",a:"Observe, Orient, Decide, Act — a continuous decision cycle developed by John Boyd.",zh:"非教材。",topic:"hf.ooda",st:"check"},
{e:"3️⃣",q:"What are the 3Ps?",a:"Perceive, Process, Perform — an FAA risk-management cycle.",zh:"非教材。",topic:"hf.threep",st:"check"},
{e:"🇩🇪",q:"What does FORDEC stand for?",a:"Facts, Options, Risks and benefits, Decision, Execution, Check.",zh:"非教材。",topic:"hf.fordec",st:"check"},
{e:"🪤",q:"Give common decision-making traps.",a:"Jumping to assumptions, ignoring options, not communicating, not challenging, complacency, not evaluating.",zh:"CASA 列表。",topic:"hf.dmtraps",st:"ok"},
{e:"🏃",q:"What is press-on-itis?",a:"A tendency to continue despite deteriorating conditions, driven by self- or external pressure.",zh:"Get-there-itis。",topic:"hf.pressure",st:"ok"},
{e:"🛑",q:"Why decide early on diversion?",a:"Delaying shrinks your options; a precautionary landing is safer than continuing into worsening visibility.",zh:"Port Augusta 例。",topic:"hf.gonogo",st:"ok"},
{e:"📝",q:"How can you improve decision making?",a:"Prepare and brief, use checklists, keep reserve capacity, delegate, see the big picture and communicate plans.",zh:"你唔能 improvise。",topic:"hf.dmimprove",st:"ok"},
{e:"🥇",q:"What is the priority order in an emergency?",a:"Aviate, navigate, communicate.",zh:"先 fly。",topic:"hf.aviatenav",st:"ok"},
{e:"📞",q:"Malfunction or ATC request first?",a:"Deal with the malfunction; the first priority is survival and controlling the aircraft.",zh:"唔好因'權威'錯序。",topic:"hf.aviatenav",st:"ok"},
{e:"🧱",q:"How do you manage workload?",a:"Prioritise, plan tasks sequentially, anticipate events and use technology like the autopilot.",zh:"NTS 1.4。",topic:"hf.workload",st:"ok"},
{e:"🛬",q:"What lessons does QF32 teach?",a:"Use all crew resources, invert logic to use what still works, and keep aviate-navigate-communicate.",zh:"CRM 例。",topic:"hf.qf32",st:"ok"},
// Human performance
{e:"😴",q:"What is fatigue?",a:"Physical and/or mental weariness beyond normal tiredness that degrades performance.",zh:"Judgement 差。",topic:"hf.fatigue",st:"ok"},
{e:"💤",q:"How do you manage fatigue?",a:"Get adequate sleep (around seven hours or more), nap when allowed, plan rest, and tell colleagues.",zh:"Sleep debt 要補。",topic:"hf.fatigue_mgmt",st:"ok"},
{e:"🗂️",q:"What is an FRMS?",a:"A system that collects and analyses information on crew alertness and performance to manage fatigue risk.",zh:"含 roster。",topic:"hf.frms",st:"ok"},
{e:"🧯",q:"What hormones does acute stress release?",a:"Adrenaline and cortisol, increasing heart rate, breathing and blood pressure.",zh:"Fight-or-flight。",topic:"hf.stress",st:"ok"},
{e:"📈",q:"Describe the stress-performance curve.",a:"Performance is low with too little stress, peaks at optimum stress, then falls into panic and burnout with overload.",zh:"倒 U。",topic:"hf.arousal",st:"ok"},
{e:"🧘",q:"How can pilots cope with stress?",a:"Prepare, anticipate, plan, communicate, use resources, share tasks and manage time.",zh:"CASA 7 步。",topic:"hf.stresscope",st:"ok"},
{e:"🧠",q:"What is an amygdala hijack?",a:"An instant emotional reaction bypassing the prefrontal cortex, causing freezing and tunnel vision.",zh:"Goleman。",topic:"hf.amygdala",st:"ok"},
{e:"🌬️",q:"How do you recover from an amygdala hijack?",a:"Stabilise the situation, use box breathing and verbalise the feeling.",zh:"Reset。",topic:"hf.amygdala",st:"ok"},
{e:"🫁",q:"What is hypoxia?",a:"Insufficient oxygen reaching the brain, commonly due to low partial pressure at altitude.",zh:"可能唔知。",topic:"hf.hypoxia",st:"ok"},
{e:"⏱️",q:"What is time of useful consciousness?",a:"The time after oxygen loss during which you can still act effectively; it shortens with altitude.",zh:"又叫 EPT。",topic:"hf.tuc",st:"ok"},
{e:"🚬",q:"Why is smoking relevant to hypoxia?",a:"Carbon monoxide in the blood acts like adding 4,000–5,000 ft to cabin altitude.",zh:"BAK。",topic:"hf.hypoxia",st:"ok"},
{e:"😮‍💨",q:"Hyperventilation or hypoxia?",a:"Slow your breathing; if recovery is quick it was hyperventilation, otherwise assume hypoxia.",zh:"分辨。",topic:"hf.hyperv",st:"ok"},
{e:"☠️",q:"What do you do if you suspect carbon monoxide?",a:"Turn off cabin heat, stop smoking, increase fresh air and land as soon as possible.",zh:"CO。",topic:"hf.co",st:"ok"},
{e:"🤿",q:"What about flying after scuba diving?",a:"Wait: Australia recommends 4, 12 or 48 hours depending on dive type.",zh:"AU 建議。",topic:"hf.baro",st:"check"},
{e:"🍺",q:"What is the alcohol rule before flying?",a:"BAK says at least 8 hours plus an hour per standard drink; FAA 14 CFR 91.17 also says 8 hours.",zh:"HK 規定我唔確定。",topic:"hf.alcohol",st:"check"},
{e:"✅",q:"What does IMSAFE check?",a:"Illness, Medication, Stress, Alcohol, Fatigue, Eating.",zh:"Fitness。",topic:"hf.imsafe",st:"ok"},
{e:"🧳",q:"What does PAVE stand for?",a:"Personal, Aircraft, enVironment, External pressures.",zh:"風險分類。",topic:"hf.imsafe",st:"ok"},
{e:"💧",q:"Why is dehydration a problem in flight?",a:"Thin dry air increases moisture loss and dehydration impairs brain function.",zh:"唔好等渴。",topic:"hf.health",st:"ok"},
// Perception
{e:"🔄",q:"What are the stages of information processing?",a:"Sensing, perceiving, deciding and acting, supported by memory and attention.",zh:"CASA 圖。",topic:"hf.infoproc",st:"ok"},
{e:"🌙",q:"How long does night vision take to develop?",a:"About 30 minutes; bright light resets it.",zh:"夜視。",topic:"hf.vision",st:"ok"},
{e:"👀",q:"How do you see a dim object at night?",a:"Look 10–15° to the side so it falls on peripheral vision.",zh:"Off-centre。",topic:"hf.vision",st:"ok"},
{e:"👂",q:"What do semicircular canals sense?",a:"Angular motion in pitch, roll and yaw.",zh:"內耳。",topic:"hf.vestib",st:"ok"},
{e:"🥇",q:"Which sense dominates when senses conflict?",a:"Vision.",zh:"眼先。",topic:"hf.vestib",st:"ok"},
{e:"🌀",q:"What is spatial disorientation?",a:"Incorrectly perceiving the aircraft's attitude, altitude or airspeed.",zh:"ATSB: ~10% GA。",topic:"hf.sd",st:"ok"},
{e:"↔️",q:"What are 'the leans'?",a:"After a slow undetected roll, levelling feels like banking the other way.",zh:"Fluid 錯。",topic:"hf.leans",st:"ok"},
{e:"🌪️",q:"Explain the graveyard spiral.",a:"In a prolonged turn the ears stop sensing it; rolling out feels like turning the other way, so you re-enter the turn and tighten the descent.",zh:"拉桿更跌。",topic:"hf.graveyard",st:"ok"},
{e:"🚀",q:"What is somatogravic illusion?",a:"Rapid acceleration feels like pitching up, tempting you to push the nose down.",zh:"Take-off。",topic:"hf.somato",st:"ok"},
{e:"🔁",q:"Inversion vs elevator illusion?",a:"Inversion: levelling from a climb feels like tumbling backward. Elevator: an updraft feels like you must push the nose down.",zh:"另外 Coriolis。",topic:"hf.vest_other",st:"ok"},
{e:"🌑",q:"What is the black hole illusion?",a:"On an approach over unlit terrain you lack depth cues and may fly too low or high.",zh:"用 instruments。",topic:"hf.blackhole",st:"ok"},
{e:"🛬",q:"How does runway width affect perception?",a:"A wide runway feels too low; a narrow one feels too high.",zh:"Compare。",topic:"hf.visill",st:"ok"},
{e:"🌫️",q:"Effect of rain or fog on approach perception?",a:"Rain brightens lights (feels low); fog makes runway look farther (feels high).",zh:"CASA。",topic:"hf.visill",st:"ok"},
{e:"📏",q:"Name low-level illusions in a PSL.",a:"Into-wind feels slow, downwind feels fast, turning downwind feels like slipping.",zh:"Enzo。",topic:"hf.lowill",st:"ok"},
{e:"🛰️",q:"What should you do if you inadvertently enter cloud?",a:"Don't panic; scan instruments, use the attitude indicator, consider a 180° turn or autopilot, and avoid over-controlling.",zh:"BIF。",topic:"hf.trustinst",st:"ok"},
{e:"🧮",q:"What is working memory capacity?",a:"About seven items ±2; chunking helps.",zh:"Mnemonics。",topic:"hf.memory",st:"ok"},
{e:"🎭",q:"What is confirmation bias?",a:"Organising information to confirm what you already believe.",zh:"Cross-check。",topic:"hf.bias",st:"ok"},
// Comms & teams
{e:"📡",q:"How does communication work?",a:"A sender encodes a message, sends it through a channel, the receiver decodes it, and feedback confirms shared meaning.",zh:"Loop。",topic:"hf.commproc",st:"ok"},
{e:"🗣️",q:"What is the error rate of oral communication?",a:"Around 3 per cent in industrial settings, one in 30 exchanges.",zh:"CASA。",topic:"hf.commtypes",st:"ok"},
{e:"🚧",q:"Why does communication fail?",a:"Incomplete messages, no clarification, expectation, workload and language barriers.",zh:"三方。",topic:"hf.commfail",st:"ok"},
{e:"🔊",q:"What clearances must be read back?",a:"Altitude, heading, speed, hold-short and position-and-hold instructions.",zh:"Full。",topic:"hf.readback",st:"ok"},
{e:"👂",q:"What is hear-back?",a:"Listening carefully to ATC's reply to catch errors; never assume they check your read-back.",zh:"防錯。",topic:"hf.readback",st:"ok"},
{e:"🔑",q:"What is assertive communication?",a:"Direct and open communication, neither aggressive nor excessively polite.",zh:"CASA。",topic:"hf.assert",st:"ok"},
{e:"🗨️",q:"What are advocacy and inquiry?",a:"Advocacy: state your concern and proposal. Inquiry: ask for the other person's view.",zh:"一般 CRM。",topic:"hf.assert",st:"check"},
{e:"📐",q:"What is an authority gradient?",a:"The perceived power difference in a crew; too steep silences challenges, too flat leaves no clear decision maker.",zh:"Steep／flat。",topic:"hf.authgrad",st:"ok"},
{e:"✈️",q:"Give an example of a steep gradient accident.",a:"Tenerife 1977, where the flight engineer and first officer doubted the take-off clearance but did not convince the captain.",zh:"CASA。",topic:"hf.authgrad",st:"ok"},
{e:"👑",q:"What is followership?",a:"Subordinates actively support the leader with constructive critical thinking.",zh:"唔係盲從。",topic:"hf.leader",st:"ok"},
{e:"🗺️",q:"What does the Blake-Mouton grid show?",a:"Leadership styles by concern for people and tasks: country club, team, impoverished, authoritarian.",zh:"HPL02。",topic:"hf.leader",st:"ok"},
{e:"🏆",q:"What is a team?",a:"A small group with complementary skills, a shared purpose and mutual accountability.",zh:"Not just a group。",topic:"hf.team",st:"ok"},
{e:"🔀",q:"How should tasks be shared in a crisis?",a:"Assign one pilot to fly and another to handle checklists and comms, based on experience.",zh:"Sullenberger。",topic:"hf.crmroles",st:"ok"},
{e:"🧍",q:"How does a single pilot use CRM?",a:"Treat passengers, ATC and company as resources and communicate assertively.",zh:"Single。",topic:"hf.singlecrm",st:"ok"},
// Automation
{e:"🤖",q:"What is the automation paradox?",a:"Automation removes small errors but creates opportunities for large ones.",zh:"Wiener。",topic:"hf.auto",st:"ok"},
{e:"🎚️",q:"What is mode confusion?",a:"Not knowing which automation mode is active, causing unexpected behaviour.",zh:"737 FL390 例。",topic:"hf.mode",st:"ok"},
{e:"😱",q:"Startle versus surprise?",a:"Startle is an immediate reflex to sudden events; surprise is a mismatch with expectation.",zh:"CASA。",topic:"hf.complacency",st:"ok"},
{e:"🔧",q:"How can design cause error?",a:"Poor layouts such as flap and gear levers placed close together, or inaccurate gauges.",zh:"L–H。",topic:"hf.design",st:"ok"},
// Interview
{e:"🎤",q:"Tell me about a time you worked in a team.",a:"Structure: situation and goal, your role, how you communicated and shared tasks, result and lessons.",zh:"STAR。",topic:"hf.i_team",st:"ok"},
{e:"🎤",q:"Describe a time you showed leadership.",a:"Set the goal, delegate, listen to input, make decisions, then reflect on outcome.",zh:"Influence。",topic:"hf.i_lead",st:"ok"},
{e:"🎤",q:"Tell me about a mistake you made.",a:"Be honest, explain how you detected it, how you corrected it and what you changed afterwards.",zh:"TEM。",topic:"hf.i_err",st:"ok"},
{e:"🎤",q:"Describe disagreeing with a senior person.",a:"State facts and concern, offer an option, ask their view, escalate if safety is at risk.",zh:"Advocacy。",topic:"hf.i_speak",st:"ok"},
{e:"🎤",q:"How do you handle pressure?",a:"Prepare, prioritise, stay calm through breathing and structure, and ask for help.",zh:"Coping。",topic:"hf.i_stress",st:"ok"},
{e:"🎤",q:"Describe a decision with incomplete information.",a:"Gather what you can, weigh options and risks, decide, communicate, and evaluate.",zh:"A-GRADE。",topic:"hf.i_dm",st:"ok"},
{e:"🎤",q:"How do you stay aware while multitasking?",a:"Perceive, comprehend and project; prioritise aviate-navigate-communicate style.",zh:"SA。",topic:"hf.i_sa",st:"ok"},
{e:"🎤",q:"How do you manage fatigue and lifestyle?",a:"Prioritise sleep, self-assess fitness, and report concerns rather than push on.",zh:"IMSAFE。",topic:"hf.i_fatigue",st:"ok"},
{e:"🎤",q:"Would you fly if a client pressured you to continue in poor weather?",a:"No: safety comes first; explain hard limits, decide early, and communicate alternatives.",zh:"Safety vs commercial。",topic:"hf.i_safety",st:"ok"},
{e:"🎤",q:"Describe a miscommunication and how you fixed it.",a:"Explain the misunderstanding, how you clarified with feedback, and prevention afterwards.",zh:"Closed loop。",topic:"hf.i_comm",st:"ok"},
{e:"🎤",q:"Tell me about adapting to change.",a:"Describe the change, how you re-evaluated, communicated the new plan and monitored results.",zh:"NDM。",topic:"hf.i_adapt",st:"ok"},
]),
anims:[
{title:"Swiss Cheese Model",hint:"拉洞大細／加減 defence，睇洞幾時對齊",build(box,H){
  const svg=H.svg(box,700,260),say=H.note(box);
  const names=["SOP","Checklist","Cross-check","Training","ATC/Alert"];
  const sl=[];
  for(let i=0;i<5;i++){const x=150+i*100;
    const r=H.el("rect",{x:x-14,y:30,width:28,height:200,rx:6,fill:"#facc15",opacity:.85},svg);
    const hole=H.el("rect",{x:x-14,y:100,width:28,height:40,fill:"#0b1224"},svg);
    const lb=H.el("text",{x:x,y:248,"text-anchor":"middle",fill:"#e2e8f0","font-size":11},svg);lb.textContent=names[i];
    sl.push({r,hole,x,ph:i*1.7+1,sp:.6+i*.23,en:true})}
  const haz=H.el("circle",{cx:50,cy:130,r:11,fill:"#ef4444"},svg);
  const ht=H.el("text",{x:50,y:160,"text-anchor":"middle",fill:"#fca5a5","font-size":11},svg);ht.textContent="Hazard";
  const beam=H.el("line",{x1:61,y1:130,x2:61,y2:130,stroke:"#ef4444","stroke-width":4},svg);
  const res=H.el("text",{x:640,y:130,"text-anchor":"middle",fill:"#fff","font-size":14,"font-weight":"bold"},svg);
  let size=40,n=5,t=0;
  H.slider(box,"洞大細",14,90,40,v=>{size=v});
  H.slider(box,"Defence 層數",1,5,5,v=>{n=v});
  H.loop(()=>{t+=.016;let cur=61,blocked=-1;
    sl.forEach((s,i)=>{const on=i<n;s.r.setAttribute("opacity",on?.85:.08);s.hole.setAttribute("opacity",on?1:0);
      const cy=130+Math.sin(t*s.sp+s.ph)*55;s.hole.setAttribute("y",cy-size/2);s.hole.setAttribute("height",size);
      s.open=!on||Math.abs(cy-130)<size/2-6});
    for(let i=0;i<5;i++){if(!sl[i].open){blocked=i;break}}
    const end=blocked<0?640:sl[blocked].x-14;beam.setAttribute("x2",end);
    if(blocked<0){res.textContent="ACCIDENT";res.setAttribute("fill","#ef4444");say("洞全部對齊：hazard 穿過所有 defence")}
    else{res.textContent="";say("Hazard 被「"+names[blocked]+"」擋住；洞會郁，所以要多層 defence")}
  });
}},
{title:"TEM Flow: Threat → Error → UAS",hint:"調 skill，撳 Run 睇多次飛行結果",build(box,H){
  const svg=H.svg(box,700,240),say=H.note(box);
  const nodes=[["Threat",70,"#f59e0b"],["Error",230,"#fb923c"],["UAS",390,"#ef4444"],["Outcome",560,"#64748b"]];
  nodes.forEach((n,i)=>{H.el("rect",{x:n[1]-50,y:80,width:100,height:50,rx:10,fill:n[2]},svg);
    const t=H.el("text",{x:n[1],y:110,"text-anchor":"middle",fill:"#0b1224","font-size":14,"font-weight":"bold"},svg);t.textContent=n[0]});
  const gate=["Threat mgmt","Error trap","Recovery"];
  [150,310,470].forEach((x,i)=>{H.el("line",{x1:x-20,y1:105,x2:x+20,y2:105,stroke:"#94a3b8","stroke-width":2},svg);
    H.el("rect",{x:x-8,y:60,width:16,height:90,fill:"#22d3ee",opacity:.5},svg);
    const t=H.el("text",{x:x,y:50,"text-anchor":"middle",fill:"#67e8f9","font-size":11},svg);t.textContent=gate[i]});
  const tok=H.el("circle",{cx:20,cy:105,r:8,fill:"#fff"},svg);
  const stat=H.el("text",{x:350,y:215,"text-anchor":"middle",fill:"#e2e8f0","font-size":13},svg);
  let sk=[60,60,60],stage=-1,x=20,target=130,fate="",cnt={safe:0,rec:0,inc:0};
  const sets=["Threat 管理","Error 截返","UAS 恢復"],pos=[150,310,470];
  sets.forEach((l,i)=>H.slider(box,l+" %",0,100,60,v=>{sk[i]=v}));
  function upd(){stat.textContent="Safe "+cnt.safe+" · UAS 後 recover "+cnt.rec+" · Incident "+cnt.inc}
  H.button(box,"Run 一次 flight",()=>{if(stage>=0)return;stage=0;x=20;target=130;fate=""});
  H.button(box,"重設統計",()=>{cnt={safe:0,rec:0,inc:0};upd()});
  upd();
  H.loop(()=>{if(stage<0)return;x+=(target-x)*.08;tok.setAttribute("cx",x);tok.setAttribute("fill",fate=="bad"?"#ef4444":fate=="ok"?"#22c55e":"#fff");
    if(Math.abs(x-target)<2){
      if(stage<=2){const pass=Math.random()*100<sk[stage];
        if(pass){fate="ok";if(stage==2)cnt.rec++;else cnt.safe++;say("喺「"+gate[stage]+"」被截住：安全結束");stage=3;target=590}
        else if(stage==2){fate="bad";cnt.inc++;say("UAS 冇 recover → Incident");stage=3;target=590}
        else{stage++;target=pos[stage]-20;say("「"+gate[stage-1]+"」失敗，繼續去下一關")}}
      else{stage=-1;upd()}}});
  say("每道關都可以截住；skill 越高，越多 flight 安全結束");
}},
{title:"Decision Loop Models",hint:"揀模型，撳 Next 逐步行",build(box,H){
  const svg=H.svg(box,700,300),say=H.note(box);
  const M={
   "DECIDE":["Detect","Estimate","Choose","Identify","Do","Evaluate"],
   "A-GRADE":["Aviate","Gather","Review","Analyse","Decide","Evaluate"],
   "DODAR":["Diagnose","Options","Decide","Assign","Review"],
   "OODA":["Observe","Orient","Decide","Act"],
   "3P":["Perceive","Process","Perform"],
   "FORDEC":["Facts","Options","Risks&Benefits","Decision","Execution","Check"]};
  const hint={"Detect":"VFR 前面 cloud 低過 minima","Aviate":"先飛穩個機","Perceive":"見到 cloud 變低","Observe":"睇 TAF／前面天氣","Facts":"Fuel、weather、last light",
   "Decide":"揀 divert","Decision":"揀 divert","Evaluate":"Divert 後有冇新問題？","Check":"Divert 後有冇新問題？","Review":"Divert 結果如何？","Do":"轉頭去 alternate","Act":"轉頭","Execution":"轉頭＋通知 ATC","Perform":"轉頭＋mitigate"};
  const cols="#a3e635";let cur="DECIDE",step=0,tt=0,gr=H.el("g",{},svg);
  function draw(){gr.innerHTML="";const s=M[cur],n=s.length;
    s.forEach((w,i)=>{const a=-Math.PI/2+i*2*Math.PI/n,x=350+Math.cos(a)*105,y=150+Math.sin(a)*105,on=i==step;
      H.el("circle",{cx:x,cy:y,r:on?38:32,fill:on?cols:"#334155",stroke:"#a3e635","stroke-width":2},gr);
      const t=H.el("text",{x:x,y:y+4,"text-anchor":"middle","font-size":11,"font-weight":"bold",fill:on?"#0b1224":"#e2e8f0"},gr);t.textContent=w});
    const c=H.el("text",{x:350,y:155,"text-anchor":"middle",fill:"#e2e8f0","font-size":16,"font-weight":"bold"},gr);c.textContent=cur;
    const w=s[step];say("Scenario：VFR 途中天氣轉差。"+w+(hint[w]?" → "+hint[w]:" → 按呢步做")+"（循環，唔係一次過）")}
  Object.keys(M).forEach(k=>H.button(box,k,()=>{cur=k;step=0;draw()}));
  H.button(box,"Next ▶",()=>{step=(step+1)%M[cur].length;draw()});
  draw();
}},
{title:"Situational Awareness 3 Levels",hint:"拉 SA level，改 traffic speed 睇 constant bearing",build(box,H){
  const svg=H.svg(box,700,320),say=H.note(box);
  const own=H.el("polygon",{points:"0,-14 8,10 -8,10",fill:"#a3e635"},svg);
  const tr=H.el("polygon",{points:"0,-12 7,9 -7,9",fill:"#f87171"},svg);
  const brg=H.el("line",{stroke:"#facc15","stroke-width":2,"stroke-dasharray":"5 4"},svg);
  const pOwn=H.el("line",{stroke:"#a3e635","stroke-dasharray":"3 4"},svg),pTr=H.el("line",{stroke:"#f87171","stroke-dasharray":"3 4"},svg);
  const cpa=H.el("circle",{r:6,fill:"none",stroke:"#fff","stroke-width":2},svg);
  const lab=H.el("text",{x:20,y:24,fill:"#e2e8f0","font-size":13},svg);
  let lvl=1,spd=1,t=0;const O={x:250,y:290,vx:0,vy:-.9};
  H.slider(box,"SA level",1,3,1,v=>{lvl=v});
  H.slider(box,"Traffic speed ×0.1",3,20,9,v=>{spd=v/10});
  H.button(box,"Replay",()=>{t=0});
  function tp(){return {x:600,y:290-.9*250*1,vx:-spd,vy:0}}
  H.loop(()=>{t+=1;if(t>260)t=0;const T=tp();const ox=O.x+O.vx*t,oy=O.y+O.vy*t,tx=T.x+T.vx*t,ty=T.y+T.vy*t;
    own.setAttribute("transform","translate("+ox+","+oy+")");tr.setAttribute("transform","translate("+tx+","+ty+") rotate(-90)");
    const rx=T.x-O.x,ry=T.y-O.y,rvx=T.vx-O.vx,rvy=T.vy-O.vy,v2=rvx*rvx+rvy*rvy;let tc=v2>0?-(rx*rvx+ry*rvy)/v2:0;if(tc<0)tc=0;
    const cx=rx+rvx*tc,cy=ry+rvy*tc,d=Math.sqrt(cx*cx+cy*cy);
    brg.setAttribute("opacity",lvl>=2?1:0);brg.setAttribute("x1",ox);brg.setAttribute("y1",oy);brg.setAttribute("x2",tx);brg.setAttribute("y2",ty);
    const on=lvl>=3?1:0;pOwn.setAttribute("opacity",on);pTr.setAttribute("opacity",on);cpa.setAttribute("opacity",on);
    pOwn.setAttribute("x1",ox);pOwn.setAttribute("y1",oy);pOwn.setAttribute("x2",O.x+O.vx*(t+tc));pOwn.setAttribute("y2",O.y+O.vy*(t+tc));pTr.setAttribute("x1",tx);pTr.setAttribute("y1",ty);pTr.setAttribute("x2",T.x+T.vx*(t+tc));pTr.setAttribute("y2",T.y+T.vy*(t+tc));
    cpa.setAttribute("cx",O.x+O.vx*(t+tc));cpa.setAttribute("cy",O.y+O.vy*(t+tc));
    if(lvl==1)lab.textContent="Level 1：見到有 traffic（紅色）";
    else if(lvl==2)lab.textContent="Level 2：bearing 線"+(d<25?" — 角度唔變 = constant bearing，會撞":" — 角度變緊，會錯開");
    else lab.textContent="Level 3：預測 CPA "+Math.round(d)+" 單位"+(d<25?" → 要避！":" → 安全");
    say(lvl==1?"只睇到，唔知有冇事":lvl==2?"理解咗意思：traffic 喺 windscreen 位置變唔變":"預計之後位置，提早決定轉向")});
}},
{title:"Hypoxia: Time of Useful Consciousness",hint:"揀altitude，撳 Fail，趁未暈掣 Mask",build(box,H){
  const svg=H.svg(box,700,260),say=H.note(box);
  const tab=[[18000,1500],[22000,600],[25000,240],[28000,150],[30000,90],[35000,40],[40000,15]];
  function tuc(a){if(a<=tab[0][0])return tab[0][1];for(let i=1;i<tab.length;i++){if(a<=tab[i][0]){const f=(a-tab[i-1][0])/(tab[i][0]-tab[i-1][0]);return Math.exp(Math.log(tab[i-1][1])*(1-f)+Math.log(tab[i][1])*f)}}return 15}
  const bar=H.el("rect",{x:60,y:130,width:580,height:26,rx:8,fill:"#22c55e"},svg);
  H.el("rect",{x:60,y:130,width:580,height:26,rx:8,fill:"none",stroke:"#94a3b8"},svg);
  const face=H.el("circle",{cx:350,cy:60,r:36,fill:"#fde68a"},svg);
  const mouth=H.el("path",{d:"M335,75 Q350,85 365,75",stroke:"#7c2d12","stroke-width":3,fill:"none"},svg);
  const info=H.el("text",{x:350,y:195,"text-anchor":"middle",fill:"#e2e8f0","font-size":14},svg);
  const sym=H.el("text",{x:350,y:225,"text-anchor":"middle",fill:"#fbbf24","font-size":13},svg);
  let alt=25000,p=-1,total=0,saved=false;
  function idle(){info.textContent="altitude "+alt+" ft → TUC 約 "+(tuc(alt)>=120?Math.round(tuc(alt)/60)+" min":Math.round(tuc(alt))+" s")}
  H.slider(box,"Altitude ft",18000,40000,25000,v=>{alt=v;if(p<0)idle()},1000);
  H.button(box,"Oxygen Fail ⚠",()=>{p=0;saved=false;total=tuc(alt)});
  H.button(box,"Don mask 😷",()=>{if(p>=0&&p<1){saved=true;p=-1;bar.setAttribute("width",580);bar.setAttribute("fill","#22c55e");face.setAttribute("opacity",1);sym.textContent="Mask on，100% O2：recover";idle()}});
  idle();
  H.loop(()=>{if(p<0)return;p+=.006;if(p>=1){p=1;sym.textContent="Unconscious — 太遲";face.setAttribute("opacity",.3);bar.setAttribute("width",0);say("TUC 過咗：altitude越高，越短");return}
    bar.setAttribute("width",580*(1-p));bar.setAttribute("fill",p<.4?"#22c55e":p<.7?"#f59e0b":"#ef4444");face.setAttribute("opacity",1-p*.5);
    sym.textContent=p<.3?"Tingling、dizzy":p<.6?"Tunnel vision、判斷力差":"Euphoria／發藍、行動慢";
    say("模擬speed已加快；真實 TUC 約 "+(total>=120?Math.round(total/60)+" min":Math.round(total)+" s")+"。未必覺得自己有事")});
  say("TUC 數值係參考（教材表 OCR 唔清，待驗證）");
}},
{title:"Vestibular Illusion: Graveyard Spiral",hint:"拉 turn 時間，睇真實 vs 感覺轉速",build(box,H){
  const svg=H.svg(box,700,280),say=H.note(box);
  H.el("line",{x1:60,y1:140,x2:660,y2:140,stroke:"#475569"},svg);
  const act=H.el("polyline",{fill:"none",stroke:"#22d3ee","stroke-width":3},svg),sen=H.el("polyline",{fill:"none",stroke:"#f87171","stroke-width":3},svg);
  const mk=H.el("line",{y1:30,y2:250,stroke:"#fff","stroke-width":1.5},svg);
  const l1=H.el("text",{x:70,y:34,fill:"#67e8f9","font-size":12},svg);l1.textContent="真實 roll／turnspeed";
  const l2=H.el("text",{x:70,y:50,fill:"#fca5a5","font-size":12},svg);l2.textContent="內耳感覺";
  const msg=H.el("text",{x:350,y:268,"text-anchor":"middle",fill:"#fde047","font-size":13},svg);
  let D=25,t=0;const tau=8;
  function sensed(s){return s<D?Math.exp(-s/tau):(Math.exp(-D/tau)-1)*Math.exp(-(s-D)/tau)}
  function plot(){let a="",b="";for(let s=0;s<=60;s+=1){const x=60+s*10;a+=x+","+(s>=1&&s<D?60:140)+" ";b+=x+","+(140-80*sensed(s)*(s>=1?1:0))+" "}act.setAttribute("points",a);sen.setAttribute("points",b)}
  H.slider(box,"持續turn s",5,50,25,v=>{D=v;plot()});
  plot();
  H.button(box,"Replay",()=>{t=0});
  H.loop(()=>{t+=.15;if(t>60)t=0;mk.setAttribute("x1",60+t*10);mk.setAttribute("x2",60+t*10);
    if(t<D)msg.textContent=t>3*tau?"轉咗好耐：內耳覺得自己冇轉（以為 level）":"turn開始，內耳識感覺";
    else msg.textContent=(sensed(t)<-.15?"放平後：感覺向反方向轉 → 想再 bank 返（graveyard spiral／leans）":"漸漸恢復")});
  say("真相：信 attitude indicator，唔好跟感覺 re-roll（τ=8 s 係示意）");
}},
{title:"Stress–Performance Curve",hint:"拉 arousal，睇表現同症狀",build(box,H){
  const svg=H.svg(box,700,280),say=H.note(box);
  H.el("line",{x1:60,y1:240,x2:660,y2:240,stroke:"#64748b"},svg);H.el("line",{x1:60,y1:40,x2:60,y2:240,stroke:"#64748b"},svg);
  const f=(x,c)=>Math.exp(-Math.pow((x-c)/28,2));
  let cx=50,pts="";const path=H.el("polyline",{fill:"none",stroke:"#a3e635","stroke-width":3},svg);
  const dot=H.el("circle",{r:9,fill:"#fff"},svg);
  const xl=H.el("text",{x:360,y:262,"text-anchor":"middle",fill:"#94a3b8","font-size":12},svg);xl.textContent="Stress／arousal →";
  const yl=H.el("text",{x:25,y:140,fill:"#94a3b8","font-size":12,transform:"rotate(-90 25 140)"},svg);yl.textContent="Performance";
  [["Lethargic",0],["Focused",50],["Panic",85],["Burnout",100]].forEach(z=>{const t=H.el("text",{x:60+z[1]*5.8,y:30,fill:"#e2e8f0","font-size":11,"text-anchor":"middle"},svg);t.textContent=z[0]});
  let complex=false,v=50;
  function draw(){const c=complex?35:50;let p="";for(let x=0;x<=100;x+=2)p+=(60+x*5.8)+","+(240-190*f(x,c))+" ";path.setAttribute("points",p);upd()}
  function upd(){const c=complex?35:50;dot.setAttribute("cx",60+v*5.8);dot.setAttribute("cy",240-190*f(v,c));
    const tx=v<c-25?"太悶／低警覺：慢、漏嘢":v<c+15?"Optimum：focused、motivated":v<c+35?"load factor：tunnel vision、panic、amygdala hijack":"Prolonged：burnout";
    say(tx+(complex?"（複雜任務：optimum 靠左）":"（簡單任務）"))}
  H.slider(box,"Arousal",0,100,50,x=>{v=x;upd()});
  H.button(box,"簡單／複雜任務切換",()=>{complex=!complex;draw()});
  draw();
}},
{title:"Authority Gradient & Speaking Up",hint:"調 gradient 同 FO 說話強度",build(box,H){
  const svg=H.svg(box,700,260),say=H.note(box);
  H.el("path",{d:"M0,230 L200,230 L330,150 L450,200 L560,110 L700,110 L700,260 L0,260Z",fill:"#334155"},svg);
  const ac=H.el("polygon",{points:"-18,0 14,-8 18,0 14,8",fill:"#a3e635"},svg);
  const out=H.el("text",{x:350,y:30,"text-anchor":"middle",fill:"#fde047","font-size":14,"font-weight":"bold"},svg);
  const lv=["Hint","Concern","Challenge","Take over"];
  let grad=70,level=1,t=0,y=40,state="run",cooldown=0;
  H.slider(box,"Authority gradient（0 平 → 100 斜）",0,100,70,v=>{grad=v});
  H.slider(box,"FO 強度（1 hint → 4 take over）",1,4,1,v=>{level=v});
  H.button(box,"FO speaks up",()=>{if(state!="run")return;const eff=level*25+(100-grad)*.5;
    if(eff>=60){state="save";out.textContent="Captain 接受（"+lv[level-1]+"）→ climb";out.setAttribute("fill","#22c55e")}
    else out.textContent="Captain 當冇聽到（"+lv[level-1]+" 太弱，gradient 太斜）"});
  H.button(box,"Reset",()=>{t=0;y=40;state="run";out.textContent=""});
  H.loop(()=>{if(state=="run"){t+=1.2;y+=.35;if(t>=680){state="crash";out.textContent="CFIT：冇人有效 challenge";out.setAttribute("fill","#ef4444")}}
    else if(state=="save"){t+=1.2;y-=.8;if(t>=690)t=690}
    ac.setAttribute("transform","translate("+(t+10)+","+y+")");
    const ter=t<200?230:t<330?230-(t-200)*.615:t<450?150+(t-330)*.417:t<560?200-(t-450)*.82:110;
    if(state!="save"&&y+10>=ter&&t<650){state="crash";out.textContent="CFIT：冇人有效 challenge";out.setAttribute("fill","#ef4444")}});
  say("Gradient 越斜，FO 越要用強 assertiveness（直接講事實＋建議）");
}}
]
});
})();
