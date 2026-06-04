import { ServicePage, type ServiceConfig } from "@/components/ServicePage";

const config: ServiceConfig = {
  id: "uiux",
  n: "03",
  kind: "SYSTEMS",
  crumbLabel: "UI/UX & Design Systems",
  title: <>Systems <em>that hold.</em></>,
  tagline: "Design systems and interfaces that scale with the org — component libraries, motion, accessibility, dark + light pairs. Built once, used everywhere.",
  primaryCta: "Audit my system",
  meta: [
    { k: "Timeline", v: <>6–12 <em>weeks</em></> },
    { k: "Team",     v: "1 systems · 1 engineer" },
    { k: "Starting", v: <>From $<em>36K</em></> },
    { k: "Output",   v: "Figma + code parity" },
  ],
  sideKicker: "ENGAGEMENT · WHO IT'S FOR",
  sideTitle: "Product orgs at 10–50 engineers where the design has outgrown the documentation.",
  sideBody: "Best fit when you have three or more products on the same brand, two or more designers in the org, and a backlog of 'we keep re-designing the button.' We replace the ad-hoc with the canonical.",
  nextIntake: "Q3 · 2026 · 2 SLOTS OPEN",
  deliverablesTitle: <>What you actually <em>get to use.</em></>,
  deliverablesIntro: "We don't ship slide decks. Every artifact below is a live system — a Figma library, a Storybook, a token JSON, a Markdown doc — that your team uses on Monday morning.",
  deliverables: [
    { icon: "tokens",     title: "Token foundations", desc: "Color, spacing, radius, type, motion, elevation — the math your whole system is built from.", items: ["Primitive + semantic tiers", "Theme switching ready", "Tokens-Studio compatible"] },
    { icon: "components", title: "Component primitives", desc: "Button, input, select, dialog, tooltip, table — every interactive element your product needs, audited and built.", items: ["~30 primitives", "Headless + styled", "React + framework-agnostic"] },
    { icon: "arch",       title: "Application patterns", desc: "Multi-component layouts: page shells, data tables, side-panels, command-K, empty states.", items: ["~20 patterns", "With usage rules", "Built from primitives only"] },
    { icon: "motion",     title: "Motion principles", desc: "A defined set of motion tokens — durations, easings, transitions — applied consistently across the system.", items: ["12 motion tokens", "Reduced-motion paths", "Spring + tween library"] },
    { icon: "dark",       title: "Dark + light pair", desc: "Every component, every state, every pattern — designed and shipped in both modes from day one.", items: ["Auto-pair tokens", "Contrast preserved", "One source, two surfaces"] },
    { icon: "a11y",       title: "Accessibility coverage", desc: "AA-audited across every primitive — keyboard, focus, screen reader, color contrast, motion preference.", items: ["WCAG AA pass", "Auto-test in CI", "Manual SR audit"] },
  ],
  processTitle: <>Audit · build · <em>document · ship.</em></>,
  processIntro: "Most design systems fail in the documentation, not the design. We build the docs at the same speed as the components, and ship them paired.",
  process: [
    { title: <>Audit.</>, desc: "Two weeks of forensics. We map every component used across your products, count their variants, score their consistency, and present a written gap report. You see exactly what's broken.", facts: [{ k: "Duration", v: "2 weeks" }, { k: "Artifact", v: "Audit + gap report" }, { k: "Output", v: "Coverage matrix" }] },
    { title: <><em>System architecture.</em></>, desc: "Token tiers, component hierarchy, naming conventions, theming strategy. Decisions that lock in for years. Reviewed live with your design + eng leads.", facts: [{ k: "Duration", v: "1 week" }, { k: "Artifact", v: "Architecture doc" }, { k: "Review", v: "With both leads" }] },
    { title: <>Build &amp; <em>document.</em></>, desc: "Primitives first, then patterns. Every component shipped with usage rules, accessibility notes, and code samples. Figma and Storybook stay in lock-step.", facts: [{ k: "Duration", v: "6–8 weeks" }, { k: "Artifact", v: "Live system" }, { k: "Cadence", v: "Weekly Fri demo" }] },
    { title: <>Adopt.</>, desc: "We don't just ship the system, we land it. Refactor one product surface together, run two internal workshops, and stay 30 days on Slack for migration questions.", facts: [{ k: "Duration", v: "1 week + 30d" }, { k: "Artifact", v: "First refactor" }, { k: "Support", v: "Workshops + Slack" }] },
  ],
  outcomesTitle: <>What changes <em>after adoption.</em></>,
  outcomesIntro: "Numbers from the last six design-system engagements, measured 90 days after handoff. We publish them all in the post-ship report.",
  outcomes: [
    { v: "3.4<em>×</em>",      l: "DESIGN VELOCITY",    d: "New product surfaces shipped in the quarter after adoption vs. the quarter before." },
    { v: "-72<em>%</em>",      l: "DESIGN DEBT CLOSED", d: "Variant explosion shrunk after components moved to the canonical system." },
    { v: "AA · 100<em>%</em>", l: "A11Y COVERAGE",      d: "Of primitives passing WCAG AA on automated and manual audit after ship." },
    { v: "94<em>%</em>",       l: "COMPONENT REUSE",    d: "Of new product code now consuming system components rather than one-offs." },
  ],
  workTitle: <>Systems we&apos;ve <em>built recently.</em></>,
  workIntro: "Three of the last six. Full token sets, naming conventions, and architecture diagrams shared under NDA on the discovery call.",
  work: [
    { tag: "VECTOR · DEV TOOLS", year: "2026 Q1", name: <>Vector <em>design system</em></>, desc: "Token foundations and 38 components for a developer-tools company shipping three products on the same brand. Migrated 240 ad-hoc components into 38 canonical ones.", metrics: [{ k: "Components", v: "38" }, { k: "Variants", v: "-72%" }, { k: "Velocity", v: "3.4×" }] },
    { tag: "MERIDIAN · HEALTH", year: "2025 Q4", name: <>Clinical <em>UI kit</em></>, desc: "HIPAA-aware UI kit for a clinical platform — dense data tables, medication grids, large-touch tablet patterns. Built in light only; dark followed as v2.", metrics: [{ k: "Patterns", v: "22" }, { k: "A11y", v: "100% AA" }, { k: "Touch", v: "≥44px" }] },
    { tag: "GLASSWORK · FINOPS", year: "2025 Q3", name: <>Glasswork <em>tokens</em></>, desc: "Token system + theming engine for a multi-tenant FinOps platform with white-label theming. One token foundation, fourteen client themes.", metrics: [{ k: "Tokens", v: "312" }, { k: "Themes", v: "14" }, { k: "Bundle Δ", v: "-38KB" }] },
    { tag: "LATERAL · WORKSPACE", year: "2025 Q2", name: <>Workspace <em>primitives</em></>, desc: "Headless primitive library for a collaborative editor — multi-cursor coordination, comments, file-system shells. Built framework-agnostic, ships in React and Solid.", metrics: [{ k: "Primitives", v: "28" }, { k: "Frameworks", v: "3" }, { k: "Tests", v: "94%" }] },
  ],
  engagementTitle: <>Three shapes, <em>fixed fee each.</em></>,
  engagementIntro: "We size the engagement to your existing surface area. Auditing first is free as part of the discovery call — that's how we pick a shape.",
  engagement: [
    { name: <>Audit.</>, tag: "3 WEEKS", price: "$18K", priceUnit: "fixed", dur: "3 weeks · 1 systems lead", features: ["Full forensic audit of your current surfaces", "Component inventory + coverage matrix", "Written gap report with prioritized fixes", "90-minute findings session with your team", "Best for: knowing what's actually broken before you build"] },
    { name: <><em>Build.</em></>, tag: "FLAGSHIP · 8 WEEKS", feat: true, price: "$54K", priceUnit: "fixed", dur: "8 weeks · 1 designer + 1 engineer", features: ["Token foundations, ~30 primitives, ~20 patterns", "Dark + light pair, AA accessible", "Figma library + Storybook + Markdown docs", "One internal workshop, one refactored surface", "30-day post-ship Slack support", "Best for: a 10–50 person product org, three+ products"] },
    { name: <>System+.</>, tag: "12 WEEKS", price: "$92K", priceUnit: "fixed", dur: "12 weeks · embedded team", features: ["Token system + multi-theme engine", "Framework-agnostic primitive layer", "Motion + a11y + i18n audit and bring-up", "Two refactored surfaces, three workshops", "60-day embedded post-ship retainer", "Best for: white-label products, multi-locale, enterprise"] },
  ],
  faqTitle: <>System <em>questions.</em></>,
  faqIntro: "What we get asked most often. The honest answer to a question we haven't heard yet, on the discovery call.",
  faq: [
    { q: "Can you work on top of an existing system (Material, Radix, shadcn)?", a: "Yes — and we usually do. Building from a sound base like Radix or shadcn primitives is faster and safer than starting from scratch. We add the token tier, your patterns, your motion, and your docs on top." },
    { q: "Do you ship the system to npm or internal package registry?", a: "We can ship to either. Default is your internal Verdaccio or GitHub Packages — we don't push to public registries unless that's part of your strategy." },
    { q: "What does adoption actually look like 6 months later?", a: "Honestly: mixed. Systems that have a dedicated owner inside the org thrive. Systems that don't drift back toward one-offs within a quarter. We're upfront about this on the call — and we'll only take the engagement if there's an owner or you let us help recruit one." },
    { q: "Can you integrate with Tokens Studio / Figma Tokens?", a: "Yes, and we recommend it. Our token format exports to Tokens Studio, Style Dictionary, or raw JSON / CSS — whichever your engineers consume." },
    { q: "How do you handle dark mode if our product is light-only today?", a: "We can do dark-first, dark-only, or design-for-pair. Dark-first is the most honest path: if a token works in dark, it almost always works in light. Most clients pair after ship as a v1.1." },
  ],
  ctaH: <>Audit first. <em>Build if it&apos;s worth it.</em></>,
  ctaSub: "30 minutes on a call. We'll look at your current product, your team shape, and tell you whether a system is the right investment now — or what to fix first.",
};

export default function Page() {
  return <ServicePage config={config} />;
}
