// content.js — Epinephrine/Adrenaline Revisited: Caveats and Pitfalls in
// Pharmacology and Clinical Practice — Contemporary Decision-Making
// Algorithm for the Use of Epinephrine in Critical Conditions.
// Data only. Rendering logic lives in app.js.
// Co-authored by Dr. Özgür Karcıoğlu and Dr. Satuk Buğra Han Bozatlı.
// Source: "Figure 1. Contemporary decision-making algorithm for the use of
// epinephrine in critical conditions" (authored flowchart figure, three
// parallel decision lanes — Anaphylaxis / Cardiac Arrest / Shock States —
// plus an always-applicable monitoring & evidence-summary panel), from the
// manuscript "Epinephrine/Adrenaline Revisited: Caveats and Pitfalls in
// Pharmacology and Clinical Practice." See METHODOLOGY.md for the fidelity
// rules this file follows: label/sub text is byte-for-byte as authored;
// meaning/rationale/cautions/refs are added research drawn from the
// manuscript's own text and tables.
//
// REFERENCES — verification policy for this tool (differs from other
// tools in this atlas; a deliberate, author-directed exception, not an
// oversight): by explicit author instruction, this 57-entry bibliography
// is transcribed directly from the manuscript's own reference list and was
// NOT independently re-verified against primary sources for this build.
// Dr. Karcıoğlu has already evaluated the manuscript's references and they
// are accepted here as correct on that basis. Every entry's kind field
// states this plainly: "As cited in the manuscript; not independently
// re-verified." DOIs are reproduced as given in the manuscript text. This
// is the opposite default from, e.g., the WBCT tool in this atlas, whose
// 80 references WERE exhaustively re-verified one by one — see that
// tool's own content.js/METHODOLOGY.md for contrast. Readers who need
// primary-source-verified citations should treat this tool's references
// as manuscript-sourced, not independently confirmed.
// REFERENCES: transcribed directly from the manuscript's own 57-entry
// reference list. Per the authors' explicit instruction, this bibliography
// was NOT independently re-verified for this tool — Dr. Karcıoğlu has
// already evaluated it and it is accepted as correct, unlike several prior
// tools in this atlas where every reference was checked against a primary
// source. Every entry's `kind` field says so plainly.
// Date this tool's content and citations were last built/checked
// together (see assets/app.js's References summary, and the hub
// README's "Content search index"-adjacent conventions doc).
const VERIFIED = "2026-11-06";

const REFERENCES = [
  { id: 1, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Goldstein DS. Adrenal responses to stress. Cellular and Molecular Neurobiology. 2010;30(8):1433-1440.",
    url: "https://doi.org/10.1007/s10571-010-9606-9" },
  { id: 2, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Benarroch EE. The locus ceruleus norepinephrine system: functional organization and potential clinical significance. Neurology. 2009;73(20):1699-1704.",
    url: "https://doi.org/10.1212/WNL.0b013e3181c2937c" },
  { id: 3, kind: "As cited in the manuscript; not independently re-verified. The PARAMEDIC2 trial.",
    text: "Perkins GD, Ji C, Deakin CD, et al. A randomized trial of epinephrine in out-of-hospital cardiac arrest. New England Journal of Medicine. 2018;379(8):711-721.",
    url: "https://doi.org/10.1056/NEJMoa1806842" },
  { id: 4, kind: "As cited in the manuscript; not independently re-verified. World Allergy Organization anaphylaxis guidance.",
    text: "Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organization Journal. 2020;13(10):100472.",
    url: "https://doi.org/10.1016/j.waojou.2020.100472" },
  { id: 5, kind: "As cited in the manuscript; not independently re-verified. AAAAI/ACAAI practice parameter.",
    text: "Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis - a 2020 practice parameter update, systematic review, and GRADE analysis. Journal of Allergy and Clinical Immunology. 2020;145(4):1082-1123.",
    url: "https://doi.org/10.1016/j.jaci.2020.01.017" },
  { id: 6, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Reynolds PM, MacLaren R, Mueller SW, Fish DN, Kiser TH. Management of extravasation injuries: a focused evaluation of noncytotoxic medications. Pharmacotherapy. 2014;34(6):617-632.",
    url: "https://doi.org/10.1002/phar.1396" },
  { id: 7, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Levy B, Desebbe O, Montemont C, Gibot S. Increased aerobic glycolysis through beta2 stimulation is a common mechanism involved in lactate formation during shock states. Shock. 2008;30(4):417-421.",
    url: "https://doi.org/10.1097/SHK.0b013e318167378f" },
  { id: 8, kind: "As cited in the manuscript; not independently re-verified. Textbook chapter, no DOI.",
    text: "Westfall TC, Westfall DP. Adrenergic agonists and antagonists. In: Brunton LL, ed. Goodman & Gilman's The Pharmacological Basis of Therapeutics. 13th ed. McGraw-Hill; 2018:191-223.",
    url: null },
  { id: 9, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Kobilka BK. Adrenergic receptors as models for G protein-coupled receptors. Annual Review of Neuroscience. 2012;35:47-67.",
    url: "https://doi.org/10.1146/annurev-neuro-060909-153128" },
  { id: 10, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Clutter WE, Bier DM, Shah SD, Cryer PE. Epinephrine plasma metabolic clearance rates and physiologic thresholds for metabolic and hemodynamic actions in man. Journal of Clinical Investigation. 2006;66(1):94-101.",
    url: "https://doi.org/10.1172/JCI109840" },
  { id: 11, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Belletti A, Benedetto U, Biondi-Zoccai G, et al. The effect of vasoactive drugs on mortality in patients with severe sepsis and septic shock: a network meta-analysis of randomized trials. Journal of Critical Care. 2017;37:91-98.",
    url: "https://doi.org/10.1016/j.jcrc.2016.08.010" },
  { id: 12, kind: "As cited in the manuscript; not independently re-verified. AHA 2020 ACLS guidelines.",
    text: "Panchal AR, Bartos JA, Cabañas JG, et al. Part 3: adult basic and advanced life support: 2020 American Heart Association guidelines for CPR and emergency cardiovascular care. Circulation. 2020;142(16 Suppl 2):S366-S468.",
    url: "https://doi.org/10.1161/CIR.0000000000000916" },
  { id: 13, kind: "As cited in the manuscript; not independently re-verified. ERC 2021 guidelines.",
    text: "Soar J, Böttiger BW, Carli P, et al. European Resuscitation Council Guidelines 2021: adult advanced life support. Resuscitation. 2021;161:115-151.",
    url: "https://doi.org/10.1016/j.resuscitation.2021.02.010" },
  { id: 14, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Simons FER, Gu X, Simons KJ. Epinephrine absorption in adults: intramuscular versus subcutaneous injection. Journal of Allergy and Clinical Immunology. 2001;108(5):871-873.",
    url: "https://doi.org/10.1067/mai.2001.119409" },
  { id: 15, kind: "As cited in the manuscript; not independently re-verified. Surviving Sepsis Campaign 2021.",
    text: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Medicine. 2021;47(11):1181-1247.",
    url: "https://doi.org/10.1007/s00134-021-06506-y" },
  { id: 16, kind: "As cited in the manuscript; not independently re-verified. No DOI given in the original.",
    text: "Schomig A. Catecholamines in myocardial ischemia: systemic and cardiac release. Circulation. 1990;82(3 Suppl):II13-22.",
    url: null },
  { id: 17, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Lee J, Vadas P. Anaphylaxis: mechanisms and management. Clinical and Experimental Allergy. 2011;41(7):923-938.",
    url: "https://doi.org/10.1111/j.1365-2222.2011.03779.x" },
  { id: 18, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Farkas JD. The clinical problem of anaphylaxis with corticosteroid and antihistamine pre-treatment. Allergy, Asthma & Clinical Immunology. 2023;19(1):2.",
    url: "https://doi.org/10.1186/s13223-022-00748-5" },
  { id: 19, kind: "As cited in the manuscript; not independently re-verified. Cochrane review.",
    text: "Choo KJL, Simons FER, Sheikh A. Glucocorticoids for the treatment of anaphylaxis. Cochrane Database of Systematic Reviews. 2012;4:CD007596.",
    url: "https://doi.org/10.1002/14651858.CD007596.pub3" },
  { id: 20, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Nawrocki PS, Poremba M, Lawner BJ. Epinephrine use and outcomes in anaphylaxis: a systematic review of emergency department studies. Journal of Emergency Medicine. 2021;60(2):199-210.",
    url: "https://doi.org/10.1016/j.jemermed.2020.09.032" },
  { id: 21, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Lee S, Bellolio MF, Hess EP, Erwin P, Murad MH, Campbell RL. Time of onset and predictors of biphasic anaphylactic reactions: a systematic review and meta-analysis. Journal of Allergy and Clinical Immunology: In Practice. 2015;3(3):408-416.",
    url: "https://doi.org/10.1016/j.jaip.2014.12.010" },
  { id: 22, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Song TT, Nelson MR, Chang JH, et al. Adequacy of the epinephrine autoinjector needle length in delivering epinephrine to the intramuscular tissues. Annals of Allergy, Asthma & Immunology. 2005;94(5):539-542.",
    url: "https://doi.org/10.1016/S1081-1206(10)61131-1" },
  { id: 23, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Dreborg S, Tsai G, Kim H. Epinephrine auto-injector needle length and the risk of intramuscular versus subcutaneous injection. Allergy, Asthma & Clinical Immunology. 2021;17(1):92.",
    url: "https://doi.org/10.1186/s13223-021-00589-0" },
  { id: 24, kind: "As cited in the manuscript; not independently re-verified. Society guideline, no DOI.",
    text: "Royal College of Emergency Medicine. Anaphylaxis: emergency management. RCEM guidelines. 2020.",
    url: "https://rcem.ac.uk/guidelines/" },
  { id: 25, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Vanden Hoek TL, Morrison LJ, Shuster M, et al. Part 12: cardiac arrest in special situations: 2010 American Heart Association guidelines for CPR and emergency cardiovascular care. Circulation. 2010;122(18 Suppl 3):S829-S861.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.110.971069" },
  { id: 26, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Larabee TM, Liu KY, Campbell JA, Little CM. Vasopressors in cardiac arrest: a systematic review. Resuscitation. 2012;83(8):932-939.",
    url: "https://doi.org/10.1016/j.resuscitation.2012.02.025" },
  { id: 27, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Andrews NE, Jones AYM. Meta-analysis of epinephrine in out-of-hospital cardiac arrest: systematic review of randomized controlled trials. Critical Care Medicine. 2019;47(2):e153-e161.",
    url: "https://doi.org/10.1097/CCM.0000000000003512" },
  { id: 28, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Holmberg MJ, Issa MS, Moskowitz A, et al. Vasopressors during adult cardiac arrest: a systematic review and meta-analysis. Resuscitation. 2019;139:106-121.",
    url: "https://doi.org/10.1016/j.resuscitation.2019.04.008" },
  { id: 29, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Goto Y, Maeda T, Goto Y. Effects of prehospital epinephrine during out-of-hospital cardiac arrest with initial non-shockable rhythm: an observational cohort study. Critical Care. 2013;17(5):R188.",
    url: "https://doi.org/10.1186/cc12872" },
  { id: 30, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Panchal AR, Berg KM, Hirsch KG, et al. 2019 American Heart Association focused update on advanced cardiovascular life support: use of advanced airways, vasopressors, and ECPR during cardiac arrest. Circulation. 2019;140(24):e881-e894.",
    url: "https://doi.org/10.1161/CIR.0000000000000732" },
  { id: 31, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Okubo M, Komukai S, Callaway CW, Izawa J. Association of timing of epinephrine administration with outcomes in adults with out-of-hospital cardiac arrest. JAMA Network Open. 2021;4(8):e2120176.",
    url: "https://doi.org/10.1001/jamanetworkopen.2021.20176" },
  { id: 32, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Granfeldt A, Avis SR, Nicholson TC, et al. Intravenous versus intraosseous epinephrine for cardiac arrest: a systematic review. Resuscitation. 2020;154:1-7.",
    url: "https://doi.org/10.1016/j.resuscitation.2020.06.001" },
  { id: 33, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Lin S, Callaway CW, Shah PS, et al. Adrenaline for out-of-hospital cardiac arrest resuscitation: a systematic review and meta-analysis of randomized controlled trials. Resuscitation. 2014;85(6):732-740.",
    url: "https://doi.org/10.1016/j.resuscitation.2014.03.008" },
  { id: 34, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Driver BE, Debaty G, Plummer DW, Smith SW. Use of esmolol after failure of standard CPR to treat patients with refractory ventricular fibrillation. Resuscitation. 2014;85(10):1337-1341.",
    url: "https://doi.org/10.1016/j.resuscitation.2014.06.032" },
  { id: 35, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Zhu A, Zhang J. Meta-analysis of beta-blocker use in refractory ventricular fibrillation during cardiac arrest. Annals of Emergency Medicine. 2019;73(1):44-51.",
    url: "https://doi.org/10.1016/j.annemergmed.2018.04.032" },
  { id: 36, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Brown SGA, Mcarthur JA, Bray JE, et al. Epinephrine in cardiac arrest. Critical Care Medicine. 2023;51(11):1529-1537.",
    url: "https://doi.org/10.1097/CCM.0000000000006016" },
  { id: 37, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Zhou FH, Song Q. Clinical trials comparing norepinephrine with epinephrine in the treatment of septic shock: meta-analysis. Military Medical Research. 2017;4:9.",
    url: "https://doi.org/10.1186/s40779-017-0116-6" },
  { id: 38, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Myburgh JA, Higgins A, Jovanovska A, et al. A comparison of epinephrine and norepinephrine in critically ill patients. Intensive Care Medicine. 2008;34(12):2226-2234.",
    url: "https://doi.org/10.1007/s00134-008-1219-0" },
  { id: 39, kind: "As cited in the manuscript; not independently re-verified. Surviving Sepsis Campaign 2016.",
    text: "Rhodes A, Evans LE, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock: 2016. Intensive Care Medicine. 2017;43(3):304-377.",
    url: "https://doi.org/10.1007/s00134-017-4683-6" },
  { id: 40, kind: "As cited in the manuscript; not independently re-verified. The CAT trial.",
    text: "Annane D, Vignon P, Renault A, et al. Norepinephrine plus dobutamine versus epinephrine alone for management of septic shock: a randomised trial. Lancet. 2007;370(9588):676-684.",
    url: "https://doi.org/10.1016/S0140-6736(07)61344-0" },
  { id: 41, kind: "As cited in the manuscript; not independently re-verified. The OptimaCC trial.",
    text: "Lévy B, Clere-Jehl R, Legras A, et al. Epinephrine versus norepinephrine for cardiogenic shock after acute myocardial infarction. Journal of the American College of Cardiology. 2018;72(2):173-182.",
    url: "https://doi.org/10.1016/j.jacc.2018.04.051" },
  { id: 42, kind: "As cited in the manuscript; not independently re-verified. The VASST trial.",
    text: "Russell JA, Walley KR, Singer J, et al. Vasopressin versus norepinephrine infusion in patients with septic shock. New England Journal of Medicine. 2008;358(9):877-887.",
    url: "https://doi.org/10.1056/NEJMoa067373" },
  { id: 43, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Belletti A, Lerose CC, Zangrillo A, Landoni G. Vasoactive-inotropic score: evolution, clinical utility, and pitfalls. Journal of Cardiothoracic and Vascular Anesthesia. 2021;35(10):3067-3077.",
    url: "https://doi.org/10.1053/j.jvca.2020.09.117" },
  { id: 44, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Jentzer JC, van Diepen S, Barsness GW, et al. Cardiogenic shock classification to predict mortality in the cardiac intensive care unit. Journal of the American College of Cardiology. 2019;74(17):2117-2128.",
    url: "https://doi.org/10.1016/j.jacc.2019.07.077" },
  { id: 45, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Overgaard CB, Dzavik V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation. 2008;118(10):1047-1056.",
    url: "https://doi.org/10.1161/CIRCULATIONAHA.107.728840" },
  { id: 46, kind: "As cited in the manuscript; not independently re-verified. Finnish registry data.",
    text: "Tarvasmäki T, Lassus J, Varpula M, et al. Current real-life use of vasopressors and inotropes in cardiogenic shock - adrenaline use is associated with excess organ injury and mortality. Critical Care. 2016;20(1):208.",
    url: "https://doi.org/10.1186/s13054-016-1387-1" },
  { id: 47, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Hjalmarson A, Goldstein S, Fagerberg B, et al. Effects of controlled-release metoprolol on total mortality, hospitalizations, and well-being in patients with heart failure: the MERIT-HF trial. JAMA. 2000;283(10):1295-1302.",
    url: "https://doi.org/10.1001/jama.283.10.1295" },
  { id: 48, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Lévy B, Bastien O, Karim B, et al. Experts' recommendations for the management of adult patients with cardiogenic shock. Annals of Intensive Care. 2015;5(1):52.",
    url: "https://doi.org/10.1186/s13613-015-0052-1" },
  { id: 49, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Hochman JS, Sleeper LA, Webb JG, et al. Early revascularization in acute myocardial infarction complicated by cardiogenic shock. New England Journal of Medicine. 1999;341(9):625-634.",
    url: "https://doi.org/10.1056/NEJM199908263410901" },
  { id: 50, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Kjaergaard J, Moller JE, Hassager C. Vasopressors and inotropes in cardiogenic shock. Current Opinion in Critical Care. 2021;27(4):409-415.",
    url: "https://doi.org/10.1097/MCC.0000000000000843" },
  { id: 51, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Mentzelopoulos SD, Malachias S, Chamos C, et al. Vasopressin, steroids, and epinephrine and neurologically favorable survival after in-hospital cardiac arrest: a randomized clinical trial. JAMA. 2013;310(3):270-279.",
    url: "https://doi.org/10.1001/jama.2013.7832" },
  { id: 52, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Mentzelopoulos SD, Zakynthinos SG, Tzoufi M, et al. Vasopressin, epinephrine, and corticosteroids for in-hospital cardiac arrest. Archives of Internal Medicine. 2009;169(1):15-24.",
    url: "https://doi.org/10.1001/archinternmed.2008.509" },
  { id: 53, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Nolan JP, Berg RA, Callaway CW, et al. The present and future of cardiac arrest care: international experts reach out to caregivers and healthcare authorities. Intensive Care Medicine. 2022;48(3):332-345.",
    url: "https://doi.org/10.1007/s00134-022-06594-w" },
  { id: 54, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Zamanian RT, Haddad F, Doyle RL, Weinacker AB. Management strategies for patients with pulmonary hypertension in the intensive care unit. Critical Care Medicine. 2007;35(9):2037-2050.",
    url: "https://doi.org/10.1097/01.CCM.0000281433.76847.6E" },
  { id: 55, kind: "As cited in the manuscript; not independently re-verified. ESC pulmonary embolism guidelines.",
    text: "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism. European Heart Journal. 2020;41(4):543-603.",
    url: "https://doi.org/10.1093/eurheartj/ehz405" },
  { id: 56, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Callaway CW, Donnino MW, Fink EL, et al. Part 8: post-cardiac arrest care: 2015 American Heart Association guidelines update for CPR and emergency cardiovascular care. Circulation. 2015;132(18 Suppl 2):S465-S482.",
    url: "https://doi.org/10.1161/CIR.0000000000000262" },
  { id: 57, kind: "As cited in the manuscript; not independently re-verified.",
    text: "Dumas F, Bougouin W, Geri G, et al. Is epinephrine during cardiac arrest associated with worse outcomes in resuscitated patients? Journal of the American College of Cardiology. 2014;64(22):2360-2367.",
    url: "https://doi.org/10.1016/j.jacc.2014.09.036" }
];
// NODES: transcribed byte-exact from the authors' own Figure 1 ("Contemporary
// decision-making algorithm for the use of epinephrine in critical
// conditions"), supplied as a dedicated vertical-algorithm slide, cross-checked
// against the companion graphical abstract and against the manuscript text the
// figure illustrates. The figure is genuinely three independent, parallel
// decision lanes (Anaphylaxis / Cardiac Arrest / Shock States) sharing one
// page, plus a disconnected "always applicable" monitoring & evidence-summary
// panel below a divider line — see app.js's PANEL map for how this is split
// into four rendered flow grids.
const NODES = [
  // ---------- Panel A: Anaphylaxis ----------
  {
    id: "anaphylaxis_trigger",
    type: "terminal",
    tone: "key",
    label: "ANAPHYLAXIS",
    meaning: "This lane covers epinephrine's use in acute systemic anaphylaxis — the one indication in this entire algorithm where the evidence for epinephrine is unequivocal and uncontested.",
    rationale: "Anaphylaxis is mediated by histamine, tryptase and prostaglandin release, producing vasodilation, increased vascular permeability, bronchospasm and mucosal oedema. Epinephrine is the only agent that addresses all four mechanisms at once: α1-mediated vasoconstriction reverses vasodilation and vascular leak, β2-mediated bronchodilation relieves bronchoconstriction, β1 chronotropy/inotropy supports cardiac output, and α1-mediated mucosal constriction reduces laryngeal oedema. No other single agent recapitulates this breadth, which is why antihistamines and corticosteroids — frequently misused as primary treatment — are relegated to secondary roles with no demonstrated mortality benefit.",
    refs: [4, 5, 17, 18]
  },
  {
    id: "epi_im",
    type: "process",
    label: "Epinephrine 0.3–0.5 mg IM",
    sub: "anterolateral thigh\n(auto-injector)",
    meaning: "Intramuscular epinephrine into the anterolateral thigh (vastus lateralis), by auto-injector where available, is the singular first-line intervention for anaphylaxis endorsed by both the WAO 2020 guidance and the 2020 AAAAI/ACAAI practice parameter.",
    rationale: "IM injection into the vastus lateralis gives reliable absorption with a time to maximum concentration of roughly 8 minutes — substantially faster and more predictable than the subcutaneous route, which the guidelines regard as inadequate in acute reactions. The 1:1000 (1 mg/mL) solution is mandatory for IM use; inadvertent use of the 1:10,000 solution delivers a tenfold underdose. Auto-injector needle length needs attention in obesity: standard 15 mm needles may fail to penetrate subcutaneous fat above BMI 30 kg/m², and an extended-length (25 mm) device should be prescribed instead. Patients should also be trained to avoid directing auto-injectors toward the digits, since inadvertent intra-arterial injection into the digital arteries of the thumb has caused finger ischaemia.",
    cautions: [
      "Needle length: standard 15 mm devices may not reach muscle in patients with BMI > 30 kg/m² — prescribe a 25 mm extended-length auto-injector instead.",
      "Never give the 1:10,000 (0.1 mg/mL) resuscitation concentration IM in place of the 1:1000 (1 mg/mL) anaphylaxis concentration — a tenfold underdose.",
      "Avoid directing an auto-injector toward a digit — inadvertent intra-arterial injection has caused finger ischaemia."
    ],
    refs: [4, 5, 14, 22, 23]
  },
  {
    id: "response_adequate",
    type: "decision",
    label: "Response adequate?",
    meaning: "A reassessment gate after the initial IM dose, determining whether the patient moves to a period of observation or needs a repeat dose / escalation to IV infusion for refractory anaphylaxis.",
    rationale: "This gate matters because epinephrine is substantially underused in practice: meta-analytic data show it is administered in only 38–62% of confirmed anaphylactic episodes in emergency departments, with clinicians disproportionately reaching for antihistamines instead — a pattern associated with progression to biphasic reactions, ICU admission and preventable death. A structured reassessment step is a deliberate counter to that pattern of undertreatment.",
    refs: [19, 20, 21]
  },
  {
    id: "observe_biphasic",
    type: "terminal",
    label: "Observe ≥4–6 h",
    sub: "Watch for biphasic reaction",
    meaning: "Following an adequate response, guidelines recommend a minimum observation period of 4–6 hours, extended to 24 hours after a severe or biphasic reaction, because a single resolved episode does not rule out recurrence.",
    rationale: "Biphasic anaphylaxis affects 5–20% of patients, typically within 1–72 hours of the initial reaction, from incomplete mast-cell mediator suppression or a mediator re-release phenomenon. Premature discharge after a single epinephrine injection without adequate observation is a recognised, preventable patient-safety risk in international adverse-event reporting.",
    refs: [5, 21, 24]
  },
  {
    id: "repeat_im",
    type: "terminal",
    label: "Repeat IM dose or IV infusion",
    sub: "(refractory anaphylaxis)",
    meaning: "If the initial IM dose is inadequate, the next step is a repeat IM dose (guideline-supported at 5–15 minute intervals) or escalation to an IV epinephrine infusion for refractory anaphylaxis.",
    rationale: "A second IM dose is required in a substantial minority of cases (reported at up to roughly one-third), underscoring that under-dosing — not over-dosing — is the dominant clinical error in anaphylaxis management. Continuous IV infusion is reserved for patients who remain refractory to repeated IM dosing.",
    refs: [4, 5]
  },

  // ---------- Panel B: Cardiac Arrest ----------
  {
    id: "arrest_trigger",
    type: "terminal",
    tone: "key",
    label: "CARDIAC ARREST",
    meaning: "This lane covers epinephrine's standard-dose role in cardiac arrest resuscitation, where its benefit is real but — unlike anaphylaxis — ethically and neurologically more complicated.",
    rationale: "Epinephrine's role in cardiac arrest derives from its α1-adrenergic effect: peripheral vasoconstriction raises aortic diastolic pressure and thereby coronary and cerebral perfusion pressure during CPR. This rationale was codified into resuscitation protocols from 1960s experimental models, well before rigorous randomised-trial evidence existed — evidence that has since substantially qualified, without overturning, the original assumption.",
    refs: [26, 25, 53]
  },
  {
    id: "epi_ivio",
    type: "process",
    label: "Epinephrine 1 mg IV/IO",
    sub: "every 3–5 min\n(AHA 2020 / ERC 2021)",
    meaning: "The guideline-standard dose in cardiac arrest is 1 mg IV or IO, repeated every 3–5 minutes, per both AHA 2020 and ERC 2021 advanced life support guidance.",
    rationale: "The PARAMEDIC2 trial — a double-blind RCT of 8,014 out-of-hospital cardiac arrest patients — confirmed that this standard 1 mg dose significantly increases 30-day survival (OR 1.39, 95% CI 1.06–1.82) versus placebo, though without improving the rate of favourable neurological outcome among survivors. Historical high-dose regimens (2–5 mg or 0.1–0.2 mg/kg) conferred no survival benefit over standard dosing and were associated with post-resuscitation myocardial dysfunction, arrhythmia and excess mortality — a now-settled question that is universally reflected in current guidelines, even though case reports of high-dose administration continue to surface in practice. When IV access fails, intraosseous delivery is an accepted alternative, though a systematic review found IO administration associated with lower ROSC rates in some observational analyses, raising unresolved questions about pharmacokinetic equivalence during low-flow states.",
    cautions: [
      "High-dose epinephrine (2–5 mg, or 0.1–0.2 mg/kg) has no survival benefit over the standard 1 mg dose and carries excess harm — this is a settled historical pitfall, not a dosing option.",
      "Intraosseous access is an accepted alternative when IV access cannot be established rapidly, but the evidence base for its pharmacokinetic equivalence to IV is predominantly observational."
    ],
    refs: [3, 12, 13, 32, 33, 27, 28]
  },
  {
    id: "shockable_rhythm",
    type: "decision",
    label: "Shockable rhythm?",
    sub: "(VF / pVT)",
    meaning: "The timing of epinephrine relative to defibrillation is rhythm-dependent, which is why this gate — not present in anaphylaxis or the shock-state lane — asks specifically whether the arrest rhythm is shockable (VF/pVT) before deciding when to give epinephrine.",
    rationale: "Timing evidence shows the two rhythm categories pull in opposite directions: in non-shockable rhythms (PEA/asystole), earlier epinephrine is associated with improved survival, whereas in shockable rhythms (VF/pVT), giving epinephrine before defibrillation may be harmful. This is what current AHA 2020 and ERC 2021 guidance encode — epinephrine as soon as feasible in non-shockable rhythms, but defibrillation must never be delayed for epinephrine in shockable rhythms.",
    refs: [30, 31, 36, 12, 13]
  },
  {
    id: "defib_first",
    type: "terminal",
    label: "Defibrillate first",
    sub: "Epinephrine after 3rd shock",
    meaning: "In VF/pVT, defibrillation takes priority; epinephrine is given after the rhythm has had further shock attempts, not instead of or before prompt defibrillation.",
    rationale: "A systematic review/meta-analysis examining epinephrine timing relative to the first shock found that early epinephrine before shock delivery in VF/pVT was not beneficial — reinforcing that in a shockable rhythm, restoring a perfusing rhythm electrically is the immediate priority.",
    refs: [12, 13, 36]
  },
  {
    id: "epi_asap",
    type: "terminal",
    label: "Epinephrine ASAP",
    sub: "(PEA / asystole)\nEarly timing critical",
    meaning: "In non-shockable rhythms (PEA or asystole), epinephrine should be given as soon as feasible — here, early administration is itself the intervention, since there is no shockable rhythm to prioritise instead.",
    rationale: "Two independent analyses (Panchal et al. and Okubo et al.) found that earlier epinephrine administration is associated with improved survival specifically in non-shockable rhythms, and that delay is harmful in this context — the mechanistic rationale being that, absent a shockable rhythm to treat first, epinephrine's α1-mediated support of coronary and cerebral perfusion pressure is the primary lever available during the arrest.",
    refs: [30, 31, 29]
  },

  // ---------- Panel C: Shock States ----------
  {
    id: "shock_trigger",
    type: "terminal",
    tone: "key",
    label: "SHOCK STATES",
    meaning: "This lane covers epinephrine's role across the three major shock subtypes — septic (distributive), cardiogenic, and obstructive — where, unlike anaphylaxis and cardiac arrest, the risk-benefit balance is sharply different in each subtype and cannot be generalised across them.",
    rationale: "The unifying theme of the underlying review is that epinephrine's risk-benefit calculus is highly indication-specific: haemodynamically appropriate but metabolically costly in septic shock, and a drug of last resort in cardiogenic shock, with obstructive shock requiring the underlying obstruction to be treated rather than papered over with a vasopressor. Clinicians who treat shock as a monolithic class — \"epinephrine is a vasopressor, therefore use it in shock\" — are exposed to the full spectrum of preventable epinephrine-related harm this lane is built to prevent.",
    refs: [39, 15]
  },
  {
    id: "identify_subtype",
    type: "decision",
    label: "Identify shock subtype",
    sub: "(distributive / cardiogenic / obstructive)",
    meaning: "Before any vasopressor decision is made, the shock subtype must be identified, because epinephrine's appropriate role — second-line, last-resort, or actively contraindicated — depends entirely on which subtype is present.",
    rationale: "This triage step is the structural core of the shock-states lane: the same drug, at the same dose, is haemodynamically reasonable second-line therapy in septic shock, a drug reserved for refractory cases as a bridge to mechanical support in cardiogenic shock, and a drug whose tachycardic and afterload effects can actively worsen obstructive shock if given without first addressing the underlying obstruction.",
    refs: [39, 15, 41]
  },
  {
    id: "septic",
    type: "branch",
    label: "Septic",
    meaning: "Distributive (septic) shock — the subtype in which epinephrine has the best-characterised, guideline-endorsed, if strictly second-line, role among the three.",
    rationale: "Noradrenaline is recommended first-line in septic shock by both the 2016 and 2021 Surviving Sepsis Campaign guidelines, reflecting its more favourable haemodynamic profile and lesser propensity for tachycardia and metabolic adverse effects than epinephrine.",
    refs: [39, 15]
  },
  {
    id: "septic_rec",
    type: "terminal",
    label: "NE 1st-line, Epi 2nd-line",
    sub: "(SSC 2021)",
    meaning: "Noradrenaline remains first-line; epinephrine is added or substituted as a guideline-endorsed second-line vasopressor when noradrenaline at high doses fails to maintain target mean arterial pressure.",
    rationale: "Randomised evidence (the Annane et al. CAT trial, Myburgh et al.) found no significant difference in mortality between epinephrine and noradrenaline (or noradrenaline plus dobutamine) in septic shock, and a meta-analysis of seven RCTs (Zhou et al., concordant with the network meta-analysis of Belletti et al.) confirmed equipoise on 28-day mortality (OR 1.13, 95% CI 0.74–1.73). The epinephrine groups in these trials consistently showed higher heart rate, greater lactate concentrations and more frequent tachyarrhythmias — haemodynamic equivalence for the primary mortality endpoint, but a clinically meaningful metabolic cost as a secondary consideration. Vasopressin added to noradrenaline (the VASST trial) is a catecholamine-sparing adjunct that can permit dose reduction and attenuate epinephrine's metabolic footprint when it is in use.",
    refs: [37, 38, 40, 11, 15, 39, 42]
  },
  {
    id: "cardiogenic",
    type: "branch",
    label: "Cardiogenic",
    meaning: "Primary myocardial-failure shock — the subtype in which epinephrine's combined α1 vasopressor and β1 inotropic profile looks pharmacologically well-suited on paper, but where the trial evidence cautions strongly against that conclusion.",
    rationale: "Epinephrine's β1-driven rise in myocardial oxygen consumption worsens demand ischaemia in an already compromised myocardium; its chronotropic effect shortens diastolic filling time and further impairs ventricular function; and at high α1 doses, increased afterload can acutely worsen left ventricular ejection in patients with reduced contractile reserve. These mechanisms coalesce to make epinephrine a potentially hazardous choice in primary cardiogenic shock, particularly after acute MI.",
    refs: [41, 46, 49]
  },
  {
    id: "cardiogenic_rec",
    type: "terminal",
    label: "Epi: LAST RESORT",
    sub: "(OptimaCC)",
    meaning: "Noradrenaline, or noradrenaline plus dobutamine, is the preferred strategy in most contemporary cardiogenic-shock protocols; epinephrine is reserved for refractory cases as a bridge to definitive mechanical circulatory support, with continuous monitoring for arrhythmia and haemodynamic deterioration.",
    rationale: "The OptimaCC randomised trial compared epinephrine with noradrenaline in cardiogenic shock after acute MI and was terminated early, after only 57 enrolments, because of significantly higher rates of refractory shock, ventricular arrhythmias and excess mortality in the epinephrine arm. Finnish registry data (Tarvasmäki et al.) corroborated this in real-world practice: epinephrine use in cardiogenic shock was independently associated with organ injury and higher mortality after propensity adjustment, compared with other vasoactive regimens.",
    refs: [41, 46, 44, 45, 48, 50]
  },
  {
    id: "obstructive",
    type: "branch",
    label: "Obstructive",
    meaning: "Shock from a mechanical obstruction to flow — massive pulmonary embolism, cardiac tamponade or tension pneumothorax — in which catecholamine support is, at best, a bridge to definitive intervention, and epinephrine specifically carries a paradoxical-harm risk.",
    rationale: "In massive PE, epinephrine's tachycardic effect reduces right-ventricular diastolic filling time, while its α1-mediated systemic vasoconstriction may paradoxically worsen RV afterload — the opposite of what the obstructed, afterload-sensitive right ventricle needs. Inadvertent epinephrine use in unrecognised obstructive shock is a documented cause of preventable haemodynamic deterioration.",
    refs: [55, 54]
  },
  {
    id: "obstructive_rec",
    type: "terminal",
    label: "Treat cause first",
    sub: "PE: thrombolysis",
    meaning: "Definitive treatment of the underlying obstruction — thrombolysis for massive PE, pericardiocentesis for tamponade, decompression for tension pneumothorax — takes priority over vasopressor titration; vasopressin, noradrenaline or phenylephrine are the preferred catecholamine choices in this context, not epinephrine.",
    rationale: "Because epinephrine's haemodynamic effects can actively worsen the physiology of obstructive shock (see the Obstructive branch), the evidence-based response is to fix the obstruction rather than to escalate a vasopressor that may be making the underlying problem worse.",
    refs: [55, 54]
  },

  // ---------- Panel D: Always-applicable monitoring & evidence summary ----------
  {
    id: "monitoring_header",
    type: "terminal",
    tone: "key",
    label: "MONITORING — ALL CONTEXTS",
    meaning: "Regardless of which of the three lanes above applies, epinephrine's metabolic and cardiovascular footprint must be actively monitored for — these are not alternative pathways but concurrent safety obligations in every context where epinephrine is used.",
    rationale: "A recurring theme of the underlying review is that epinephrine's adverse-effect profile is frequently under-recognised or misattributed, with real clinical consequences — most importantly, epinephrine-induced hyperlactataemia being mistaken for ongoing shock-related tissue hypoperfusion and driving unnecessary escalation of fluids or vasopressor dose.",
    refs: [16, 7, 10]
  },
  {
    id: "tachyarrhythmia",
    type: "process",
    label: "Tachyarrhythmia",
    sub: "(continuous ECG)",
    meaning: "β1 chronotropy and increased automaticity make tachyarrhythmia — atrial fibrillation, SVT, VT or VF — the most frequent and potentially fatal cardiovascular adverse effect of epinephrine, and can exacerbate dynamic LVOT obstruction in hypertrophic cardiomyopathy.",
    rationale: "Arrhythmogenic potential is exacerbated by hypokalaemia, hypomagnesaemia, myocardial ischaemia and concurrent QT-prolonging agents. Continuous cardiac monitoring is mandatory throughout any epinephrine infusion, and the lowest effective dose should be used; sudden rhythm deterioration should prompt review of dose, electrolytes and myocardial perfusion.",
    refs: [16]
  },
  {
    id: "myocardial_ischaemia",
    type: "process",
    label: "Myocardial ischaemia",
    meaning: "Increased myocardial oxygen demand and, at high α1 activation, coronary vasospasm can produce demand ischaemia — including post-resuscitation myocardial dysfunction resembling stress cardiomyopathy after ROSC.",
    rationale: "Post-resuscitation myocardial dysfunction occurs in a significant proportion of ROSC patients and is attributable in part to the catecholamine surge amplified by resuscitative epinephrine. Targeted temperature management, serial troponin measurement and early echocardiography are the recommended mitigations.",
    refs: [16, 47, 56]
  },
  {
    id: "hyperlactataemia",
    type: "process",
    label: "Hyperlactataemia",
    sub: "(β2-aerobic ≠ hypoxia)",
    meaning: "Hyperlactataemia during epinephrine infusion at therapeutic rates is a near-universal finding, driven by β2-receptor aerobic glycolysis in skeletal muscle — not tissue hypoxia — and is mechanistically distinct from shock-related type A lactic acidosis.",
    rationale: "The failure to contextualise elevated lactate in the setting of an epinephrine infusion is a well-documented pitfall that leads to unnecessary fluid resuscitation, escalation of vasopressor doses, or premature consideration of extracorporeal support. Clinical decision-making should integrate serial lactate trends, clinical perfusion markers, and the temporal relationship between epinephrine initiation and lactate elevation, rather than treating any elevated lactate as proof of ongoing hypoperfusion.",
    refs: [7, 15]
  },
  {
    id: "hyperglycaemia",
    type: "process",
    label: "Hyperglycaemia",
    sub: "(glucose q1–2 h)",
    meaning: "Hepatic glycogenolysis and gluconeogenesis via β-adrenoceptors, combined with α2-mediated suppression of insulin secretion, produce clinically significant hyperglycaemia in 40–70% of epinephrine-infused ICU patients.",
    rationale: "Regular glucose monitoring (every 1–2 hours) and insulin titration are the recommended mitigations; epinephrine should be used with particular caution in patients with uncontrolled diabetic ketoacidosis.",
    refs: [10]
  },
  {
    id: "hypokalaemia",
    type: "process",
    label: "Hypokalaemia",
    sub: "(K⁺ supplementation)",
    meaning: "β2-mediated cellular potassium uptake via Na⁺/K⁺-ATPase activation causes hypokalaemia, an arrhythmogenic risk of particular importance in ischaemic heart disease and in post-cardiac-arrest patients on epinephrine-based vasopressor support.",
    rationale: "This risk is potentiated in patients on digoxin or with hypoxaemia. Electrolyte monitoring and targeted potassium replacement, aiming for a serum potassium of 4.0–4.5 mmol/L, are integral components of epinephrine infusion management.",
    refs: [10]
  },
  {
    id: "extravasation",
    type: "process",
    label: "Extravasation",
    sub: "(phentolamine 5–10 mg SC)",
    meaning: "Epinephrine extravasation from a peripheral IV line causes α1-mediated local tissue ischaemia and, if unrecognised, skin and subcutaneous necrosis — including finger necrosis if inadvertently injected intra-arterially.",
    rationale: "Central venous administration is preferred for prolonged infusions. If extravasation does occur via a peripheral line, subcutaneous phentolamine (5–10 mg in 10 mL normal saline) injected into the affected area within 12 hours effectively reverses the vasoconstriction and prevents necrosis.",
    cautions: [
      "Prefer a central venous line for any prolonged epinephrine infusion.",
      "If extravasation occurs via a peripheral line, give phentolamine 5–10 mg SC into the affected area within 12 hours."
    ],
    refs: [6]
  },
  {
    id: "strengths",
    type: "process",
    label: "STRENGTHS",
    sub: "• Irreplaceable first-line agent in anaphylaxis (WAO / AAAAI / ACAAI)\n• Only agent endorsed without qualification for anaphylaxis\n• Survival benefit in OHCA — PARAMEDIC2 (OR 1.39, 95% CI 1.06–1.82)\n• Haemodynamic equivalence to noradrenaline in septic shock (CAT trial)\n• Broad adrenoceptor profile (α1, α2, β1, β2); versatile across shock phenotypes\n• Short t½ (2–3 min) — precise, rapidly reversible titration",
    meaning: "A summary of epinephrine's evidence-supported strengths across all three clinical contexts covered by this algorithm, drawn together from the underlying review's conclusions.",
    rationale: "These strengths are genuinely context-dependent, not a blanket endorsement: the case for epinephrine as irreplaceable first-line therapy is strongest, and essentially unqualified, in anaphylaxis; its survival benefit in cardiac arrest and its mortality-equivalence to noradrenaline in septic shock are real but each come with their own caveats detailed elsewhere in this tool (neurological outcome in arrest; metabolic cost in septic shock).",
    refs: [3, 4, 5, 37, 38]
  },
  {
    id: "limitations",
    type: "process",
    label: "LIMITATIONS / PITFALLS",
    sub: "• No neurological benefit in cardiac arrest — PARAMEDIC2: CPC 1–2 unchanged\n• Excess mortality in cardiogenic shock — OptimaCC RCT terminated early\n• Hyperlactataemia: β2-aerobic — do NOT misinterpret as tissue hypoperfusion\n• Tachyarrhythmia, ↑MVO₂, hyperglycaemia, hypokalaemia at therapeutic doses\n• Extravasation → α1-mediated necrosis; prefer central venous line\n• Delayed / subcutaneous injection in anaphylaxis → preventable fatality",
    meaning: "A summary of epinephrine's principal documented pitfalls and harms across all three clinical contexts — framed in the underlying review as documented contributors to preventable morbidity and mortality, not rare theoretical possibilities.",
    rationale: "A unifying theme of the underlying review is that these are not reasons to avoid epinephrine where it is indicated, but reasons that its use must be indication-specific, dose-conscious and actively monitored — the same drug, at the same dose, can be life-saving in anaphylaxis and of uncertain-to-harmful net benefit elsewhere.",
    refs: [3, 41, 7, 6, 20, 57]
  }
];
const GLOSSARY = [
  { match: "AHA", full: "American Heart Association", def: "US professional body issuing advanced cardiovascular life support guidelines, most recently updated in 2020." },
  { match: "ERC", full: "European Resuscitation Council", def: "European counterpart to the AHA issuing resuscitation guidelines, most recently updated in 2021." },
  { match: "WAO", full: "World Allergy Organization", def: "International body whose 2020 anaphylaxis guidance underpins first-line IM epinephrine dosing." },
  { match: "AAAAI", full: "American Academy of Allergy, Asthma & Immunology", def: "US allergy/immunology society; co-issued the 2020 anaphylaxis practice parameter with the ACAAI." },
  { match: "ACAAI", full: "American College of Allergy, Asthma and Immunology", def: "US allergy/immunology college; co-issued the 2020 anaphylaxis practice parameter with the AAAAI." },
  { match: "SSC", full: "Surviving Sepsis Campaign", def: "International sepsis guideline initiative; its 2021 guidelines place noradrenaline first-line and epinephrine second-line in septic shock." },
  { match: "NE", full: "noradrenaline (norepinephrine)", def: "First-line vasopressor in septic and cardiogenic shock, predominantly α1-agonist with modest β1 activity." },
  { match: "VF", full: "ventricular fibrillation", def: "A shockable cardiac arrest rhythm; defibrillation, not epinephrine, is the immediate priority." },
  { match: "pVT", full: "pulseless ventricular tachycardia", def: "A shockable cardiac arrest rhythm, managed identically to VF in the algorithm." },
  { match: "PEA", full: "pulseless electrical activity", def: "A non-shockable cardiac arrest rhythm in which early epinephrine (not defibrillation) is the priority." },
  { match: "PE", full: "pulmonary embolism", def: "When massive, a cause of obstructive shock; definitive treatment is thrombolysis, not vasopressor escalation." },
  { match: "IM", full: "intramuscular", def: "Route of epinephrine administration in anaphylaxis (anterolateral thigh)." },
  { match: "IV", full: "intravenous", def: "Route of epinephrine administration in cardiac arrest and shock states, and for refractory anaphylaxis infusion." },
  { match: "IO", full: "intraosseous", def: "Alternative route to IV in cardiac arrest when venous access cannot be rapidly established." },
  { match: "ROSC", full: "return of spontaneous circulation", def: "Restoration of a perfusing rhythm after cardiac arrest; post-ROSC myocardial dysfunction is a recognised epinephrine-related complication." },
  { match: "MVO2", full: "myocardial oxygen consumption", def: "Increased by epinephrine's β1 chronotropic/inotropic effect; the mechanistic driver of its demand-ischaemia risk." },
  { match: "OHCA", full: "out-of-hospital cardiac arrest", def: "The population studied in the PARAMEDIC2 trial of standard-dose epinephrine." },
  { match: "PARAMEDIC2", def: "Double-blind RCT (n=8,014) of IV epinephrine vs placebo in OHCA; showed improved 30-day survival (OR 1.39) but no improvement in favourable neurological outcome." },
  { match: "OptimaCC", def: "RCT comparing epinephrine with noradrenaline in cardiogenic shock after acute MI; stopped early at 57 patients for excess harm in the epinephrine arm." },
  { match: "CAT trial", def: "Annane et al. RCT comparing epinephrine with noradrenaline plus dobutamine in septic shock; found no significant mortality difference." },
  { match: "VASST", def: "Trial of vasopressin added to noradrenaline in septic shock; a catecholamine-sparing strategy that can reduce epinephrine exposure." },
  { match: "biphasic reaction", def: "A recurrence of anaphylactic symptoms after apparent resolution, typically within 1–72 hours, affecting 5–20% of patients — the reason for post-treatment observation." },
  { match: "HCM", full: "hypertrophic cardiomyopathy", def: "A condition in which epinephrine-induced tachyarrhythmia can exacerbate dynamic left ventricular outflow tract obstruction." }
];

const AGENTS = [
  "Epinephrine",
  "Adrenaline",
  "Noradrenaline",
  "Norepinephrine",
  "Phentolamine",
  "Vasopressin",
  "Dobutamine",
  "Phenylephrine"
];
