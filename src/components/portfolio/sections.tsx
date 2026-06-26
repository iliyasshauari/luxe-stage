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
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

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
          <SectionLabel icon={Sparkles}>Open to one-year apprenticeship · 2025</SectionLabel>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <Reveal delay={0.05}>
              <h1 className="text-5xl md:text-7xl leading-[1.02] font-normal">
                <span className="text-foreground">Finance discipline.</span>
                <br />
                <span className="text-gradient italic">Data intuition.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                MSc Data Management & AI for Business — bridging financial audit rigor with the
                analytical power of modern data tools. Building decision systems that turn numbers
                into strategy.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant hover:shadow-glow transition-all"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:translate-y-[-2px] transition-all"
                >
                  Contact me
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

          {/* Portrait card */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--electric)]/30 to-[var(--emerald-accent)]/30 blur-2xl" />
              <div className="relative glass rounded-[2rem] p-3 shadow-elegant">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-gradient-to-br from-[var(--navy)] to-[var(--electric)] flex items-end p-6 overflow-hidden">
                  <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                  <div className="relative text-white">
                    <div className="text-xs uppercase tracking-[0.2em] opacity-80">Portfolio</div>
                    <div className="mt-1 text-2xl font-medium" style={{ fontFamily: "var(--font-display)" }}>
                      Finance × Data
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-3 text-center">
                  {[
                    { label: "Internships", value: "3+" },
                    { label: "Tools", value: "10+" },
                    { label: "Languages", value: "3" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-secondary/60 p-3">
                      <div className="text-lg font-semibold">{s.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
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
        <Reveal><SectionLabel icon={Sparkles}>About</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-6xl font-normal leading-[1.05]">
            From balance sheets <span className="text-gradient italic">to intelligent systems.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-10 text-lg leading-relaxed text-muted-foreground">
          <Reveal delay={0.1}>
            <p>
              My journey began in classrooms in Tangier, in front of accounting ledgers and audit
              workpapers. Numbers fascinated me — not as figures, but as the language a company
              uses to describe itself. At INSEEC Grande École, I deepened that fluency through
              corporate finance, audit, and management control.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Today I am extending that foundation with the MSc <span className="text-foreground font-medium">Data Management & AI for Business</span> —
              learning to interrogate data with the same rigor I once reserved for trial balances.
              My ambition: become a consultant who designs the bridge between finance teams and the
              models that augment them.
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
    year: "2025 — Now",
    title: "MSc Finance, Audit & Contrôle · Data Management & AI",
    place: "INSEEC Grande École — Paris",
    body: "Financial Audit · Internal Control · Corporate Finance · Management Control · Accounting · Data for Business.",
    highlight: true,
  },
  {
    year: "2022 — 2025",
    title: "Bachelor — Finance",
    place: "INSEEC Grande École — Bordeaux / London",
    body: "International curriculum across two campuses with a focus on corporate finance fundamentals.",
  },
  {
    year: "2020 — 2022",
    title: "Preparatory Classes",
    place: "Esprit Classes Prépa — Tangier",
    body: "Intensive analytical and quantitative training preparing for top business school admissions.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal><SectionLabel icon={GraduationCap}>Education</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-5xl font-normal">A focused academic trajectory.</h2>
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
    role: "Audit & Accounting Intern",
    company: "Expertise El Garti",
    location: "Tangier",
    icon: ShieldCheck,
    bullets: [
      "Audit procedures across customer & supplier cycles",
      "Treasury analysis and bank reconciliations",
      "Preparation of working papers & financial controls",
    ],
  },
  {
    role: "Accounting Intern",
    company: "Maghreb Tadbir",
    location: "Tangier",
    icon: Building2,
    bullets: [
      "Daily accounting entries and ledger maintenance",
      "Customer and supplier account management",
      "Bank reconciliations and month-end support",
    ],
  },
  {
    role: "Banking Intern",
    company: "Attijariwafa Bank",
    location: "Tangier",
    icon: Briefcase,
    bullets: [
      "Customer service and front-desk operations",
      "Administrative banking operations",
      "Client file verification and compliance support",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Briefcase}>Experience</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-5xl font-normal">Field-tested in finance & audit.</h2>
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
      ["Financial Audit", 90],
      ["Internal Control", 85],
      ["Budget Control", 80],
      ["Financial Analysis", 88],
      ["Business Performance", 78],
    ] as [string, number][],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    items: [
      ["Excel — Advanced", 95],
      ["Power BI", 82],
      ["Python", 70],
      ["VBA", 75],
      ["Statistics", 72],
      ["Data Visualization", 80],
    ] as [string, number][],
  },
  {
    title: "ERP & Tools",
    icon: Database,
    items: ["Oracle", "Sage", "CEGID", "Salesforce"],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    items: [
      "Analytical Thinking",
      "Attention to Detail",
      "Organization",
      "Reliability",
      "Communication",
      "Problem Solving",
    ],
  },
];

const languages = [
  ["French", "C2", 100],
  ["English", "C1", 85],
  ["Arabic", "Native", 100],
] as [string, string, number][];

function Bar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full rounded-full bg-gradient-to-r from-[var(--navy)] to-[var(--electric)]"
      />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Code2}>Capabilities</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-5xl font-normal">A dual toolkit.</h2>
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
              <h3 className="text-lg font-medium" style={{ fontFamily: "var(--font-sans)" }}>Languages</h3>
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
  { value: 5, suffix: "+", label: "Years of study" },
  { value: 3, suffix: "", label: "Internships" },
  { value: 4, suffix: "", label: "Business domains" },
  { value: 10, suffix: "+", label: "Financial tools" },
  { value: 2, suffix: "", label: "Programming languages" },
];

export function Achievements() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Award}>By the numbers</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-5xl font-normal">Quantified momentum.</h2>
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
  { icon: BarChart3, title: "Business Intelligence", body: "Building dashboards that translate financial signals into board-level clarity." },
  { icon: LineChart, title: "Data Analytics", body: "From raw ledgers to predictive insight — operationalizing analysis at scale." },
  { icon: Brain, title: "Machine Learning for Business", body: "Applying ML to forecasting, risk scoring, and audit anomaly detection." },
  { icon: Database, title: "Financial Data", body: "Modeling clean, governed pipelines from ERPs to analytics layers." },
  { icon: Target, title: "Decision Making", body: "Connecting models to the strategic questions that actually move companies." },
  { icon: Sparkles, title: "Digital Transformation", body: "Helping finance functions adopt AI without losing rigor or trust." },
];

export function Goals() {
  return (
    <section id="goals" className="py-28 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal><SectionLabel icon={Target}>Vision</SectionLabel></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-4xl md:text-6xl font-normal leading-tight">
            The next chapter: <span className="text-gradient italic">finance, augmented.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Six directions shaping the work I want to do as a consultant in the intersection of
            finance and artificial intelligence.
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
                Let's build the <span className="text-gradient italic">next step</span> together.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                Actively seeking a one-year apprenticeship starting September 2025 in Finance,
                Audit, BI or Data Analytics. Open to conversations.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[var(--electric)]" /> your.email@example.com</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[var(--electric)]" /> +33 6 00 00 00 00</li>
                <li className="flex items-center gap-3"><Linkedin className="h-4 w-4 text-[var(--electric)]" /> linkedin.com/in/your-handle</li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--electric)]" /> Paris, France</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! This is a demo form."); }}
              className="glass rounded-3xl p-7 shadow-elegant"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Name</span>
                  <input required className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Company</span>
                  <input className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors" />
                </label>
              </div>
              <label className="block mt-4">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Email</span>
                <input required type="email" className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors" />
              </label>
              <label className="block mt-4">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Message</span>
                <textarea required rows={4} className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-3.5 py-2.5 text-sm focus:outline-none focus:border-[var(--electric)] transition-colors resize-none" />
              </label>
              <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3.5 text-sm font-medium text-[var(--primary-foreground)] shadow-elegant hover:shadow-glow transition-all">
                Send message <ArrowRight className="h-4 w-4" />
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
          <span>Portfolio · Finance × Data & AI</span>
        </div>
        <div>© {new Date().getFullYear()} — Crafted with intent.</div>
      </div>
    </footer>
  );
}