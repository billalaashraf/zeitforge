import { ServicePage, type ServiceConfig } from "@/components/ServicePage";

const config: ServiceConfig = {
  id: "mvp",
  n: "02",
  kind: "BUILD",
  crumbLabel: "MVP Development",
  title: <>MVP <em>Development.</em></>,
  tagline: "Whiteboard to launched product in eight weeks. One sprint. One team. One accountable senior engineer on the codebase the whole way.",
  primaryCta: "Brief a build",
  meta: [
    { k: "Timeline", v: <>8 <em>weeks</em></> },
    { k: "Team",     v: "1 PM · 1 designer · 2 eng" },
    { k: "Price",    v: <>$<em>98K</em></> },
    { k: "Output",   v: "Live in prod" },
  ],
  sideKicker: "ENGAGEMENT · WHO IT'S FOR",
  sideTitle: "Founders who have a contract, a customer, or a conviction — and need it in a paying customer's hands in 60 days.",
  sideBody: "Best fit for v1s that need to feel like v3s on day one. Not a hack-week prototype, not a five-figure freelance build — a senior team accountable to the launch.",
  nextIntake: "Q3 · 2026 · 1 SLOT LEFT",
  deliverablesTitle: <>What gets delivered, <em>literally.</em></>,
  deliverablesIntro: "These are artifacts checked into your GitHub on day 56. Everything is yours — no vendor accounts, no proprietary frameworks.",
  deliverables: [
    { icon: "proto",   title: "Production application", desc: "Web app on your stack of choice — Next.js + Postgres by default, Rails or Django on request.", items: ["Auth + accounts", "Billing wired", "Mobile responsive"] },
    { icon: "infra",   title: "Cloud infrastructure", desc: "Provisioned on your AWS, Vercel, Render or GCP — we don't run it, you do.", items: ["IaC committed", "Staging + prod", "Secrets vault"] },
    { icon: "code",    title: "CI/CD pipeline", desc: "Branch-deploy previews, prod gates, observability baked in from commit one.", items: ["GitHub Actions", "Preview URLs", "Auto-rollback"] },
    { icon: "monitor", title: "Observability stack", desc: "Logs, traces, error reporting, uptime — wired to a channel you already read.", items: ["Sentry + Axiom", "Status page", "Slack/email alerts"] },
    { icon: "ops",     title: "Admin / ops console", desc: "Internal tooling for the operator who runs the product — refunds, impersonation, audit log.", items: ["Impersonation", "Audit log", "Bulk actions"] },
    { icon: "doc",     title: "Runbook + trained operator", desc: "A written runbook for the five most common operational events, and a 90-minute training session with your operator.", items: ["Top-5 runbooks", "Training session", "30-day on-call"] },
  ],
  processTitle: <>Eight weeks, <em>five gates.</em></>,
  processIntro: "Each gate has a working artifact and a 45-minute review. Miss a gate and we re-plan with you — we don't quietly slip dates.",
  process: [
    { title: <>Spec.</>, desc: "Two days. We turn your problem into a written PRD, a wireframe set, and a list of explicit non-goals. You sign it, we build to it.", facts: [{ k: "Duration", v: "Week 1" }, { k: "Artifact", v: "Signed PRD" }, { k: "Review", v: "Fri, 45 min" }] },
    { title: <><em>Foundation.</em></>, desc: "Auth, database, deploy pipeline, observability. Boring infrastructure that's done once so the rest of the build moves fast.", facts: [{ k: "Duration", v: "Week 2" }, { k: "Artifact", v: "Empty app, live" }, { k: "Review", v: "Demo URL" }] },
    { title: <>Build.</>, desc: "Four-week core build sprint. Daily deploys to staging, weekly demos to you, a working product growing visibly every Friday.", facts: [{ k: "Duration", v: "Weeks 3–6" }, { k: "Artifact", v: "Working app" }, { k: "Cadence", v: "Weekly Fri demo" }] },
    { title: <>Polish &amp; <em>ship.</em></>, desc: "One week of nothing but polish, performance, copy, edge cases, and dogfooding. The week that turns a v1 into one that feels lived-in.", facts: [{ k: "Duration", v: "Week 7" }, { k: "Artifact", v: "Production build" }, { k: "Cadence", v: "Daily dogfood" }] },
    { title: <>Handoff.</>, desc: "Operator trained, runbook written, on-call rotation handed over. We stay for 30 days as backup, then we step out cleanly.", facts: [{ k: "Duration", v: "Week 8 + 30d" }, { k: "Artifact", v: "Trained operator" }, { k: "Support", v: "30d included" }] },
  ],
  outcomesTitle: <>Live products, <em>not slide decks.</em></>,
  outcomesIntro: "Aggregated across the last fourteen MVP engagements. We track these because we get asked the same question on every discovery call.",
  outcomes: [
    { v: "56<em>d</em>",   l: "AVERAGE TIME TO LIVE",  d: "From signed contract to first paying customer transaction in production." },
    { v: "100<em>%</em>",  l: "ON-FIXED-PRICE",        d: "Twelve of twelve recent engagements shipped at or under the agreed fixed fee." },
    { v: "4 / 5",          l: "RETAINED AS OPERATORS", d: "Of clients who chose to keep us on retainer for ops after the eight-week build closed." },
    { v: "99.6<em>%</em>", l: "POST-SHIP UPTIME",      d: "30-day rolling uptime average across MVPs we've launched in the last year." },
  ],
  workTitle: <>Recent build <em>engagements.</em></>,
  workIntro: "Hand-picked from the last fourteen. Full architecture diagrams and code structure shared under NDA on the discovery call.",
  work: [
    { tag: "FINLEY · FINTECH", year: "2026 Q1", name: <>Consumer <em>credit app</em></>, desc: "Underwriting + onboarding for a consumer-credit start-up. KYC, Plaid wiring, decisioning engine, customer portal. Live in 54 days.", metrics: [{ k: "Time to live", v: "54d" }, { k: "Day-1 users", v: "320" }, { k: "Uptime", v: "99.9%" }] },
    { tag: "WAYPOINT · LOGISTICS", year: "2025 Q4", name: <>Dispatch <em>console</em></>, desc: "Dispatch and routing console for a last-mile logistics operator — 12 drivers, 240 stops/day, real-time radar with route re-org.", metrics: [{ k: "Time to live", v: "61d" }, { k: "Drivers live", v: "12" }, { k: "Stops/day", v: "240" }] },
    { tag: "PARALLEL · HORIZONTAL", year: "2025 Q3", name: <>Workspace <em>for editors</em></>, desc: "Collaborative editing workspace for an editorial agency — multi-cursor, comments, version history, role-based exports.", metrics: [{ k: "Time to live", v: "58d" }, { k: "Concurrent users", v: "40" }, { k: "Files / week", v: "1.2K" }] },
    { tag: "LEDGER · B2B SAAS", year: "2025 Q2", name: <>Compliance <em>platform</em></>, desc: "SOC 2 evidence-collection platform for SaaS companies — integrations with AWS, GitHub, Okta, Stripe, evidence vault.", metrics: [{ k: "Time to live", v: "63d" }, { k: "Integrations", v: "14" }, { k: "Day-1 customers", v: "7" }] },
  ],
  engagementTitle: <>One shape, <em>three sizes.</em></>,
  engagementIntro: "Every MVP build is a fixed-fee, fixed-scope engagement. We pick the size with you based on the surface area of the product, not the duration.",
  engagement: [
    { name: <>Lite.</>, tag: "4 WEEKS", price: "$48K", priceUnit: "fixed", dur: "4 weeks · 1 senior + designer", features: ["Single primary workflow, end-to-end", "Auth + billing + ops console", "Vercel or Render hosting", "14-day post-ship support", "Best for: a v0 that needs to be in a customer's hands fast"] },
    { name: <><em>Full MVP.</em></>, tag: "FLAGSHIP · 8 WEEKS", feat: true, price: "$98K", priceUnit: "fixed", dur: "8 weeks · 1 PM + designer + 2 eng", features: ["Full v1 product with 5–8 primary surfaces", "Auth, billing, ops console, integrations", "Production infrastructure on your cloud", "Operator training + runbook", "30-day post-ship on-call", "Best for: a first version with paying customers on day one"] },
    { name: <>Plus.</>, tag: "12 WEEKS", price: "$148K", priceUnit: "fixed", dur: "12 weeks · expanded team", features: ["Larger v1 with multi-role surfaces", "Mobile + web + admin console", "Custom integrations (3rd-party APIs)", "60-day post-ship retainer", "Best for: regulated, multi-stakeholder products"] },
  ],
  faqTitle: <>Common <em>questions.</em></>,
  faqIntro: "If yours isn't here, mention it on the call. We update this list every quarter from the last batch of discovery calls.",
  faq: [
    { q: "What stack do you build on?", a: "Default is Next.js + Postgres on Vercel. We've shipped Rails, Django, and Phoenix MVPs when the client's existing team is on those. We never pick a stack you'd have to hire around." },
    { q: "What happens after week 8?", a: "You own the code, the infrastructure, and the operator runbook. Five of every six clients retain us at a smaller monthly rate for ongoing ops; the others step into running it themselves. Both outcomes are clean." },
    { q: "Can we hire one of your engineers full-time after?", a: "Usually no — our seniors are long-term studio. We will recruit and onboard your first or second in-house engineer as part of the engagement if that's part of the brief." },
    { q: "How do you handle scope creep?", a: "We don't accept it inside the eight weeks. Things you want that weren't in the signed spec become a v1.1 — quoted separately, never quietly absorbed. This is the single biggest reason we ship on time." },
    { q: "What if we don't have a PRD?", a: "That's normal. Week one of the engagement is us writing the PRD with you. If you have anything from notebooks, Slack threads, or napkins — we'll work from that. If you have nothing, we'll start with interviews." },
  ],
  ctaH: <>Got a build in mind? <em>Brief us.</em></>,
  ctaSub: "30 minutes on a call. We'll tell you if eight weeks is achievable, what the trade-offs are, and what we'd cut to make it.",
};

export default function Page() {
  return <ServicePage config={config} />;
}
