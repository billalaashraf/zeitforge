import { ServicePage, type ServiceConfig } from "@/components/ServicePage";

const config: ServiceConfig = {
  id: "design",
  n: "01",
  kind: "DESIGN",
  crumbLabel: "SaaS Product Design",
  title: <>SaaS Product <em>Design.</em></>,
  tagline: "End-to-end product design — from a fuzzy problem to a launched, instrumented interface ready for ten times the users.",
  primaryCta: "Brief a project",
  meta: [
    { k: "Timeline",  v: <>8 <em>weeks</em></> },
    { k: "Team",      v: "1 PM · 2 seniors" },
    { k: "Starting",  v: <>From $<em>48K</em></> },
    { k: "Output",    v: "Ship-ready" },
  ],
  sideKicker: "ENGAGEMENT · WHO IT'S FOR",
  sideTitle: "Series A → B SaaS teams who shipped fast and now need the product to grow up.",
  sideBody: "Best fit when you have product-market fit signal, ten or more paying accounts, and a roadmap that suddenly outgrew the original interface. We rebuild the surface, not the team.",
  nextIntake: "Q3 · 2026 · 2 SLOTS LEFT",
  deliverablesTitle: <>Six things land <em>in your repo</em>.</>,
  deliverablesIntro: "Each engagement ships these artifacts as a versioned bundle. We don't bill for revisions — we bill once, fixed, and we ship them all.",
  deliverables: [
    { icon: "research", title: "Research & framing", desc: "Stakeholder interviews, jobs-to-be-done framing, usage telemetry audit.", items: ["6–10 interviews", "Funnel + retention audit", "Opportunity map"] },
    { icon: "arch",     title: "Information architecture", desc: "Object model, navigation graph, permission lattice, empty-state inventory.", items: ["Sitemap + flows", "Object schema", "Permission states"] },
    { icon: "visual",   title: "Visual & brand system", desc: "Color, type, density, motion — calibrated for your customer and your category.", items: ["Token foundations", "Type system", "Brand sketches"] },
    { icon: "components", title: "Component library", desc: "All product surfaces designed against a single token set — built once, used everywhere.", items: ["80–120 components", "States × density × theme", "Figma + storybook"] },
    { icon: "proto",    title: "High-fidelity prototypes", desc: "Click-through prototypes for the top five flows, ready for user-test or stakeholder review.", items: ["5 flow prototypes", "Mobile + desktop", "Loom walkthroughs"] },
    { icon: "handoff",  title: "Engineering handoff", desc: "Annotated specs, motion timings, edge cases, and a paired 90-minute walkthrough per surface.", items: ["Per-screen spec", "Motion reference", "Live handoff session"] },
  ],
  processTitle: <>Four phases, <em>eight weeks.</em></>,
  processIntro: "Each phase ends with a single deliverable, a 30-minute review, and a go/no-go. No stalled threads, no surprise extensions.",
  process: [
    { title: <>Frame.</>, desc: "We talk to your team and ten of your customers. We audit your current product against your top three jobs-to-be-done. We come back with a written framing doc and a sketched opportunity map.", facts: [{ k: "Duration", v: "1 week" }, { k: "Ends in", v: "Framing doc" }, { k: "Review", v: "Tue, 30 min" }] },
    { title: <><em>Architect.</em></>, desc: "Object model, navigation graph, permissions, state inventory. The skeleton your engineers will live inside for two years. Reviewed live with your tech lead.", facts: [{ k: "Duration", v: "2 weeks" }, { k: "Ends in", v: "IA + flows" }, { k: "Review", v: "With tech lead" }] },
    { title: <>Design.</>, desc: "Visual system locked first. Then components, then surfaces. Every screen is built against the token set — never one-offs. Five flow prototypes ship at the end.", facts: [{ k: "Duration", v: "4 weeks" }, { k: "Ends in", v: "Click-through proto" }, { k: "Review", v: "Weekly · Fri" }] },
    { title: <><em>Ship.</em></>, desc: "We sit with your engineers for the handoff. Specs, motion, edge cases, decisions log. We stay 30 days post-handoff for live questions.", facts: [{ k: "Duration", v: "1 week + 30d" }, { k: "Ends in", v: "Live product" }, { k: "Support", v: "30d included" }] },
  ],
  outcomesTitle: <>Measured against your <em>real metrics.</em></>,
  outcomesIntro: "We track these before-and-after for every engagement and publish them in the post-ship report.",
  outcomes: [
    { v: "4.6<em>×</em>", l: "FUNNEL CONVERSION",    d: "Median lift in primary activation conversion 30 days after ship." },
    { v: "-38<em>%</em>", l: "SUPPORT TICKETS",      d: "Reduction in 'how do I…' tickets across redesigned surfaces." },
    { v: "+27",           l: "NPS POINTS",            d: "Net-promoter delta from re-design ship to first post-ship survey." },
    { v: "9.2<em>w</em>", l: "AVERAGE TIME-TO-SHIP", d: "From signed brief to live in production. Median across last 12 engagements." },
  ],
  workTitle: <>Recent design <em>engagements.</em></>,
  workIntro: "A slice of the last twelve months. Full case studies and credentials shared under NDA on the discovery call.",
  work: [
    { tag: "SABBATICA · SAAS", year: "2026 Q1", name: <>Operator <em>console</em></>, desc: "Re-designed the operator console for an AI-ops platform handling 12k models across 8 customers — from a 14-tab dashboard to a single command surface.", metrics: [{ k: "Surfaces", v: "34" }, { k: "Time to ship", v: "8w" }, { k: "NPS Δ", v: "+34" }] },
    { tag: "NORTHWIND · CLINICAL", year: "2025 Q4", name: <>Clinical <em>scheduling</em></>, desc: "Multi-tenant scheduling and dispatch for 14 clinics — booking, on-call rotations, payor workflows. Tablet + desktop with offline-first rendering.", metrics: [{ k: "Surfaces", v: "58" }, { k: "Density", v: "3×" }, { k: "WAU lift", v: "+62%" }] },
    { tag: "CIRCUITLY · DEV TOOLS", year: "2025 Q3", name: <>Pipeline <em>composer</em></>, desc: "Visual pipeline composer for a CI/CD startup — node graph, run history, observability. Replaced YAML files for 80% of common pipelines.", metrics: [{ k: "Surfaces", v: "22" }, { k: "Adoption", v: "81%" }, { k: "Onboarding", v: "-58%" }] },
    { tag: "PRECINCT · FINOPS", year: "2025 Q2", name: <>Cost <em>controls</em></>, desc: "FinOps control plane for a cloud-cost startup — budgets, anomaly alerts, multi-account drill-down. Designed for FP&A, not engineers.", metrics: [{ k: "Surfaces", v: "19" }, { k: "TTV", v: "5 min" }, { k: "Tickets", v: "-41%" }] },
  ],
  engagementTitle: <>Fixed fee, fixed phases — <em>no hourly billing.</em></>,
  engagementIntro: "Three engagement shapes. We pick one with you on the discovery call. Each price is fixed: revisions inside scope are included, scope changes are quoted before they happen.",
  engagement: [
    { name: <>Sprint.</>, tag: "3 WEEKS", price: "$24K", priceUnit: "fixed", dur: "3 weeks · 1 designer + PM", features: ["One critical surface, redesigned end-to-end", "Visual system + 20–30 components", "Click-through prototype", "Engineering handoff + 14-day support", "Best for: a single broken flow, a pricing page, an onboarding redo"] },
    { name: <><em>Full.</em></>, tag: "FLAGSHIP · 8 WEEKS", feat: true, price: "$48K", priceUnit: "fixed", dur: "8 weeks · 1 PM + 2 seniors", features: ["Full product redesign across all primary surfaces", "Object model + IA + permission lattice", "80–120 component library, dark + light", "5 prototypes, weekly review cadence", "30-day post-ship live support", "Best for: a Series-A product that outgrew its first interface"] },
    { name: <>Scale.</>, tag: "14 WEEKS", price: "$84K", priceUnit: "fixed", dur: "14 weeks · embedded team", features: ["Multi-surface product redesign + design system", "Tokens to code parity with your engineering org", "Motion and accessibility audited to AA", "60-day embedded post-ship", "Best for: enterprise SaaS, multi-tenant, multi-locale"] },
  ],
  faqTitle: <>Things <em>we get asked.</em></>,
  faqIntro: "If your question isn't here, ask it on the discovery call — we keep a running list and add new ones quarterly.",
  faq: [
    { q: "Do you work in Figma or your own tooling?", a: "Figma. We deliver a single shared file with libraries, components, and per-surface frames. Your team retains full ownership and we leave the file in their workspace — no vendor lock-in." },
    { q: "What if our engineers want to push back on the design?", a: "Good — that's the point of the live handoff. We design to ship, not to win awards. If a component is hard to build, we either change it or we explain the constraint that made it that way. Either path is fine." },
    { q: "Can you work with our existing brand?", a: "Yes, and we usually do. We don't insist on a rebrand. We'll calibrate the product system to fit your brand voice — but we will push back on anything that hurts readability or accessibility." },
    { q: "What does post-ship support actually look like?", a: "A shared Slack channel, a designer on call for 30 days, and one 90-minute working session per week if you need it. Most clients use about a third of the included hours." },
    { q: "Do you take equity?", a: "Not as primary compensation. We've taken small equity components in two of the last twelve engagements where it made sense for both parties. Our default is cash, fixed-fee." },
  ],
  ctaH: <>Brief us. <em>We&apos;ll tell you the truth.</em></>,
  ctaSub: "A 30-minute call to scope the work. We'll be honest about whether design is your highest-leverage spend right now — or whether it's something else.",
};

export default function Page() {
  return <ServicePage config={config} />;
}
