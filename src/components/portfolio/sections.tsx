/* eslint-disable prettier/prettier */
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Sparkles,
  TrendingUp,
  BarChart3,
  Brain,
  Database,
  LineChart,
  Target,
  ShieldCheck,
  Building2,
  Briefcase,
  GraduationCap,
  Code2,
  Languages,
  Award,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
} as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-[var(--electric)]" />
      {children}
    </div>
  );
}

/* ───────────────────────────── HERO ───────────────────────────── */

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 bg-hero-gradient">
      {/* Floating orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[var(--electric)] opacity-20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-[var(--emerald-accent)] opacity-15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
                  <SectionLabel icon={Sparkles}>Disponible immédiatement pour un stage de fin d’études .</SectionLabel>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <Reveal delay={0.05}>
              <h1 className="text-5xl md:text-7xl leading-[1.02] font-normal">
                              
                <br />
                              <span className="text-gradient italic">Finance, Audit et Contrôle.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                              Étudiante en dernière année de Master Finance,
                              Audit et Contrôle de gestion, je recherche un stage
                              de 4 mois afin de mettre à profit mes compétences en finance,
                              audit et contrôle de gestion, tout en développant mon expertise
                              en analyse de données.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                    href="/Boukhayar_Nada_Stage.pdf"
                    download="Boukhayar Nada CV.pdf"
                    className="group inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant hover:shadow-glow transition-all"
                 >
                    <Download className="h-4 w-4" />
                    Télécharger le CV
                              </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:translate-y-[-2px] transition-all"
                >
                  Me contacter
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--electric)]" /> Paris, France</div>
                <div className="flex items-center gap-2"><Languages className="h-4 w-4 text-[var(--electric)]" /> FR · EN · AR</div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--electric)]" /> INSEEC Grande École</div>
              </div>
            </Reveal>
          </div>

                  {/* Certifications Card */}
                  <Reveal delay={0.2}>
                      <div className="relative mx-auto max-w-sm">
                          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--electric)]/30 to-[var(--emerald-accent)]/30 blur-2xl" />

                          <div className="relative glass rounded-[2rem] p-8 shadow-elegant flex flex-col">

                              <div className="text-center">
                                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--electric)]">
                                      Certifications
                                  </p>

                                  <h3
                                      className="mt-3 text-3xl font-semibold text-foreground"
                                      style={{ fontFamily: "var(--font-display)" }}
                                  >
                                      Professional Credentials
                                  </h3>

                                  <p className="mt-2 text-sm text-muted-foreground">
                                      Certifications internationales validant mes compétences en anglais professionnel et en VBA.
                                  </p>
                              </div>

                              <div className="mt-8 space-y-5">

                                  {/* TOEIC */}
                                  <a
                                      href="https://www.etsglobal.org/fr/en/digital-score-report/42BA841718F5E43708895B5B4AE1BEA36D3452C4D3790A00354858B964E65388bmg2aU8xS3Bic0tzQXVZNGpLeEp3QXpWVFpldjJ6RnZCUW5IL1pPRWlHTWJqVkZY?utm_campaign=sharing_dsr&utm_medium=qr-code&utm_source=dsr"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block rounded-2xl border border-border bg-background/40 p-5 transition-all hover:border-[var(--electric)] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                  >
                                      <div className="flex items-center justify-between">
                                          <span className="text-lg font-semibold">
                                              🇬🇧 TOEIC
                                          </span>

                                          <span className="rounded-full bg-[var(--electric)]/15 px-3 py-1 text-sm font-semibold text-[var(--electric)]">
                                              885 / 990
                                          </span>
                                      </div>

                                      <p className="mt-2 text-sm text-muted-foreground">
                                          Listening & Reading
                                      </p>

                                      <p className="mt-1 text-xs text-muted-foreground">
                                          ETS Global • Valide jusqu'en mai 2028
                                      </p>

                                      <p className="mt-3 text-xs font-medium text-[var(--electric)]">
                                          Voir le certificat →
                                      </p>
                                  </a>

                                  {/* TOSA */}
                             <a
                              href="https://www.tosa.org/FR/Index?param=Q0lzNUZkTUw5RnREcXNtb3ZEY21jN1hNN1BhL0IyWDgvQ05zak9YU1dNTFp1TkZoSTdTRnNoZzdVeW9jbUl6VzlBZnJJNGI1THZBU2ZHRWVSNFM0MWc9PTo65Qzd5pXzf3tZAqadDYayFg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-2xl border border-border bg-background/40 p-5 transition-all hover:border-[var(--emerald-accent)] hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold">
                                  💻 TOSA VBA
                                </span>

                                <span className="rounded-full bg-[var(--emerald-accent)]/15 px-3 py-1 text-sm font-semibold text-[var(--emerald-accent)]">
                                  950 / 1000
                                </span>
                              </div>

                              <p className="mt-2 text-sm text-muted-foreground">
                                Isograd
                              </p>

                              <p className="mt-1 text-xs text-muted-foreground">
                                Valide jusqu'en juin 2029
                              </p>

                              <p className="mt-3 text-xs font-medium text-[var(--emerald-accent)]">
                                Voir le certificat →
                              </p>
                            </a>

                              </div>

                              <div className="mt-auto pt-8">
                                  
                              </div>

                          </div>
                      </div>
                  </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── ABOUT ───────────────────────────── */

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal><SectionLabel icon={Sparkles}>À propos</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-6xl font-normal leading-[1.05]">
                      Des chiffres à  <span className="text-gradient italic">la performance..</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-10 text-lg leading-relaxed text-muted-foreground">
          <Reveal delay={0.1}>
            <p>
                          Au cours de mon parcours académique et de mes expériences en cabinet d’expertise comptable ainsi qu’en banque, j’ai développé de solides compétences en audit financier, contrôle de gestion, comptabilité, contrôle interne et analyse financière. J’ai notamment participé à l’analyse des états financiers, à la vérification des pièces comptables, aux tests d’audit, au suivi budgétaire, à l’analyse des écarts et à l’élaboration de tableaux de bord. Ces expériences m’ont permis de renforcer ma rigueur, mon esprit d’analyse, mon sens de l’organisation et ma capacité à identifier les anomalies et les leviers d’amélioration.

            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
                          

                          La maîtrise d’outils tels qu’Excel, Power BI, Python ainsi que des ERP comme SAP, Oracle, Sage et Quadra me permet d’exploiter efficacement les données financières et de contribuer au pilotage de la performance. Curieuse, motivée et appréciant le travail en équipe, je souhaite évoluer dans un environnement stimulant où je pourrai mettre mes compétences au service de missions d’audit, de finance et de contrôle de gestion à forte valeur ajoutée.

            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── EDUCATION ──────────────────────────── */

const education = [
 
  {
    year: "2023 — 2026",
    title: "Master — Finance",
    place: "INSEEC Grande École — Bordeaux / London",
    body: "Cursus international sur deux campus, centré sur les fondamentaux de la finance d'entreprise.",
  },
  {
    year: "2021 — 2023",
    title: "Classes préparatoires",
    place: "Esprit Classes Prépa — Tanger",
    body: "Formation analytique et quantitative intensive en vue de l'admission aux grandes écoles de commerce.",
  },
  {
   year: "2020 — 2021",
    title: "Bac science economique",
    place: "Lixus — Larache",
  
    },
];

export function Education() {
  return (
    <section id="education" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal><SectionLabel icon={GraduationCap}>Formation</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-5xl font-normal">Une trajectoire académique exigeante.</h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className={`md:[direction:ltr] pl-12 md:pl-0 ${i % 2 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--electric)] font-medium">{e.year}</div>
                    <h3 className="mt-2 text-xl font-medium text-foreground" style={{ fontFamily: "var(--font-sans)" }}>{e.title}</h3>
                    <div className="mt-1 text-sm text-muted-foreground">{e.place}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.body}</p>
                  </div>
                  <div aria-hidden />
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 h-3 w-3 rounded-full bg-background border-2 border-[var(--electric)] shadow-glow" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── EXPERIENCE ──────────────────────────── */

const experience = [
  {
    role: "Stagiaire en Audit et Contrôle de gestion",
    company: "Expertise El Garti",
    location: "Tanger",
    icon: ShieldCheck,
    bullets: [
      "Participation au suivi budgétaire et à l’analyse des écarts entre les prévisions et les réalisations",
      "Élaboration et suivi de tableaux de bord financiers",
      "Collecte et traitement de données pour appuyer le pilotage de la performance",
    ],
  },
  {
      role: "Stagiaire en Audit financier",
    company: "Maghreb Tadbir",
    location: "Tanger",
    icon: Building2,
    bullets: [
      "Participation aux missions d’audit et aux tests de contrôle des données comptables",
      "Analyse des états financiers et vérification de la fiabilité des informations comptables",
      "Identification des anomalies et des axes d’amélioration",
    ],
  },
  {
      role: "Stagiaire en Audit interne bancaire",
    company: "Attijariwafa Bank",
    location: "Tanger",
    icon: Briefcase,
    bullets: [
      "Participation aux procédures de contrôle interne et à l’évaluation des risques opérationnels",
      "Vérification des documents financiers et revue des dossiers clients",
      "Identification des anomalies et contribution à la préparation des recommandations d’audit",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Briefcase}>Expérience</SectionLabel></Reveal>
        <Reveal delay={0.05}>
                  <h2 className="mt-6 text-4xl md:text-5xl font-normal">Une expérience concrète en finance, audit et contrôle de gestion.</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {experience.map((x, i) => (
            <Reveal key={x.company} delay={i * 0.1}>
              <article className="group h-full rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl bg-[var(--navy)] text-[var(--primary-foreground)] flex items-center justify-center">
                    <x.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{x.location}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-sans)" }}>{x.role}</h3>
                <div className="text-sm text-[var(--electric)]">{x.company}</div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex gap-2 leading-relaxed">
                      <span className="mt-2 inline-block h-1 w-1 rounded-full bg-[var(--electric)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── SKILLS ──────────────────────────── */

const skillGroups = [
  {
    title: "Finance",
    icon: TrendingUp,
    items: [
      ["Audit financier", 90],
      ["Contrôle interne", 85],
      ["Contrôle budgétaire", 80],
      ["Analyse financière", 88],
      ["Performance de l'entreprise", 78],
    ] as [string, number][],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    items: [
      ["Excel — Avancé", 95],
      ["Power BI", 82],
      ["Python", 70],
      ["VBA", 75],
      ["Statistiques", 72],
      ["Visualisation de données", 80],
    ] as [string, number][],
  },
  {
    title: "ERP & Outils",
    icon: Database,
    items: ["Oracle", "Sage", "CEGID", "Salesforce"],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    items: [
      "Esprit analytique",
      "Souci du détail",
      "Sens de l'organisation",
      "Fiabilité",
      "Communication",
      "Résolution de problèmes",
    ],
  },
];

const languages = [
  ["Français", "C2", 100],
  ["Anglais", "C2", 100],
  ["Arabe", "Langue maternelle", 100],
] as [string, string, number][];

function Bar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="h-full rounded-full bg-gradient-to-r from-[var(--navy)] to-[var(--electric)]"
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Code2}>Compétences</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-5xl font-normal">Une double expertise.</h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {skillGroups.slice(0, 2).map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1}>
              <div className="h-full rounded-3xl glass p-7">
                <div className="flex items-center gap-3">
                  <g.icon className="h-5 w-5 text-[var(--electric)]" />
                  <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-sans)" }}>{g.title}</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {(g.items as [string, number][]).map(([name, v]) => (
                    <div key={name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-foreground">{name}</span>
                        <span className="text-muted-foreground tabular-nums">{v}%</span>
                      </div>
                      <Bar value={v} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {skillGroups.slice(2).map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.1}>
              <div className="h-full rounded-3xl glass p-7">
                <div className="flex items-center gap-3">
                  <g.icon className="h-5 w-5 text-[var(--electric)]" />
                  <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-sans)" }}>{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(g.items as string[]).map((s) => (
                    <span key={s} className="rounded-full bg-background border border-border px-3.5 py-1.5 text-xs font-medium hover:border-[var(--electric)] transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Languages */}
        <Reveal delay={0.1}>
          <div className="mt-5 rounded-3xl glass p-7">
            <div className="flex items-center gap-3">
              <Languages className="h-5 w-5 text-[var(--electric)]" />
              <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-sans)" }}>Langues</h3>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {languages.map(([name, lvl, v]) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground">{name}</span>
                    <span className="text-muted-foreground">{lvl}</span>
                  </div>
                  <Bar value={v} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────── ACHIEVEMENTS ─────────────────────────── */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1.4, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 5, suffix: "+", label: "Années d'études" },
  { value: 3, suffix: "", label: "Stages" },
  { value: 4, suffix: "", label: "Domaines métier" },
  { value: 10, suffix: "+", label: "Outils financiers" },
  { value: 2, suffix: "", label: "Langages de programmation" },
];

export function Achievements() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Award}>En chiffres</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-5xl font-normal">Une dynamique mesurée.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="rounded-3xl glass p-6 text-center hover:-translate-y-1 hover:shadow-elegant transition-all">
                <div className="text-5xl font-normal text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CAREER GOALS ─────────────────────────── */

const goals = [
  {
    icon: BarChart3, title: "Audit financier", body: "Analyser les comptes, vérifier la fiabilité des informations financières et identifier les éventuelles anomalies." },
  { icon: LineChart, title: "Contrôle de gestion", body: "Suivre les budgets, analyser les écarts et proposer des actions permettant d’améliorer la performance." },
  { icon: Brain, title: "Analyse financière", body: "Étudier les états financiers et les principaux indicateurs afin d’évaluer la situation et la rentabilité d’une entreprise." },
  { icon: Database, title: "Contrôle interne", body: "Participer à l’évaluation des procédures, à l’identification des risques et à la sécurisation des opérations." },
  { icon: Target, title: "Reporting et tableaux de bord", body: "Transformer les données financières en indicateurs clairs pour faciliter le suivi et la prise de décision." },
  { icon: Sparkles, title: "Optimisation de la performance", body: "Identifier les leviers d’amélioration, de réduction des coûts et d’efficacité au sein des organisations." },
];

export function Goals() {
  return (
    <section id="goals" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Target}>Vision</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-6xl font-normal leading-tight">
                      Le prochain chapitre : <span className="text-gradient italic">piloter la performance financière.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                      Six domaines qui représentent les missions dans lesquelles je souhaite développer mon expertise,
                      à la croisée de la finance, de l’audit et du contrôle de gestion.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="group h-full rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[var(--navy)] to-[var(--electric)] text-white flex items-center justify-center">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium" style={{ fontFamily: "var(--font-sans)" }}>{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-hero-gradient" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal><SectionLabel icon={Mail}>Contact</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl md:text-6xl font-normal leading-[1.05]">
                Construisons la <span className="text-gradient italic">prochaine étape</span> ensemble.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                Activement à la recherche d'un stage à partir de juillet 2026
                en Finance, Audit et contrôle. Ouverte à tout échange.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--electric)]" /> boukhayarnada@gmail.com</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--electric)]" /> +33 7 65 16 46 58</li>
                              <li className="flex items-center gap-3">
                                  <Linkedin className="h-4 w-4 text-[var(--electric)]" />
                                  <a
                                      href="https://www.linkedin.com/in/nada-boukhayar-12252a261"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-[var(--electric)] transition-colors underline"
                                  >
                                      linkedin.com/in/nada-boukhayar-12252a261
                                  </a>
                              </li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--electric)]" /> Paris, France</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
             <form
                          action="https://formspree.io/f/mykqwdyq"
                          method="POST"
                          className="glass rounded-3xl p-7 shadow-elegant"
             >
            
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Nom</span>
                                  <input
                                      name="name"
                                      required
                                      className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors"
                                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Entreprise</span>
                                  <input
                                      name="company"
                                      className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors"
                                  />
                </label>
              </div>
              <label className="block mt-4">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</span>
                              <input
                                  name="email"
                                  type="email"
                                  required
                                  className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors"
                              />
              </label>
              <label className="block mt-4">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Message</span>
                              <textarea
                                  name="message"
                                  rows={4}
                                  required
                                  className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors resize-none"
                              />
              </label>
              <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant hover:shadow-glow transition-all">
                Envoyer le message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--electric)]" />
          <span>Nada Boukhayar · Finance × Audit</span>
        </div>
        <div>© {new Date().getFullYear()} </div>
      </div>
    </footer>
  );
}