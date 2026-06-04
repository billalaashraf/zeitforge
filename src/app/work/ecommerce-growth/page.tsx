import { CaseStudyPage, type CaseConfig } from "@/components/CaseStudyPage";
import { ProjEcom } from "@/components/viz";

const config: CaseConfig = {
  crumbLabel: "E-commerce Growth Engine",
  tags: ["E-commerce", "Growth", "Conversion", "Experimentation"],
  title: <>A growth engine that <em>compounded 2.4× in 90 days.</em></>,
  summary: "We designed and shipped an end-to-end growth engine — funnel instrumentation, an experimentation platform, and dynamic pricing — that compounded revenue 2.4× in a single quarter without a dollar more of ad spend.",
  meta: [
    { k: "Role",     v: "Growth · Design · Build" },
    { k: "Timeline", v: "10 weeks" },
    { k: "Sector",   v: "DTC · E-commerce" },
    { k: "Stage",    v: "Scaling" },
  ],
  demoUrl: "app.client-shop.com / growth / experiments",
  HeroViz: ProjEcom,
  challengeTitle: <>Traffic up. <em>Revenue flat.</em></>,
  challenge: [
    "The client was spending more on acquisition every month and watching conversion stay stubbornly flat. They had analytics — pageviews and sessions — but no instrumented funnel, so nobody could say where money was actually leaking.",
    "Every pricing and merchandising decision was a guess made in a meeting. There was no way to run an experiment, no way to measure its lift, and no way to compound the wins. They were buying traffic and pouring it into a leaky bucket.",
  ],
  challengeBullets: [
    <><strong>No funnel telemetry.</strong> Vanity metrics, no step-by-step drop-off.</>,
    <><strong>No experimentation.</strong> Changes shipped sitewide on opinion.</>,
    <><strong>Static pricing.</strong> One price for every customer, every cohort.</>,
    <><strong>Rising CAC.</strong> More ad spend chasing the same conversion rate.</>,
  ],
  approachTitle: <>Instrument, experiment, <em>compound.</em></>,
  approach: [
    { t: "Full-funnel instrumentation", d: "We tagged every step from landing to checkout, so drop-off became visible per cohort, per device, per source — the leak map the team never had." },
    { t: "Experimentation platform", d: "A homegrown A/B engine with statistically-sound stopping rules, so the team could ship five tests a week and trust the results." },
    { t: "Dynamic pricing & merchandising", d: "Cohort-aware pricing and merchandising rules wired to the experiment engine — every change measured against revenue, not clicks." },
    { t: "A compounding cadence", d: "We didn't ship one big redesign. We shipped a weekly rhythm of small, measured wins that stacked across the quarter." },
  ],
  galleryTitle: <>The growth <em>command surface.</em></>,
  shots: [
    { kind: "wide", cap: "Funnel analytics · cohort drop-off" },
    { kind: "",     cap: "Experiment dashboard · live tests" },
    { kind: "",     cap: "Dynamic pricing rules" },
  ],
  outcomeTitle: <>Revenue, <em>compounded.</em></>,
  outcomes: [
    { v: "2.4<em>×</em>",  l: "REVENUE",          d: "Compounded over a single 90-day quarter, no extra ad spend." },
    { v: "+38<em>%</em>",  l: "CONVERSION RATE",  d: "Sitewide CVR lift from funnel fixes and tested changes." },
    { v: "+22<em>%</em>",  l: "AVERAGE ORDER VALUE", d: "From cohort-aware merchandising and pricing." },
    { v: "5 / wk",         l: "EXPERIMENTS SHIPPED", d: "Sustained testing cadence the team kept after handoff." },
  ],
  stack: ["Next.js", "TypeScript", "Segment", "BigQuery", "Stripe", "Statsig-style A/B", "Vercel"],
  quote: <>They didn&apos;t sell us a redesign. They built us a <em>machine for finding wins</em> — and taught us to run it after they left.</>,
  quoteInitials: "JT",
  quoteName: "Jordan Tan",
  quoteRole: "HEAD OF GROWTH · DTC BRAND",
  next: { href: "/work/operations-dashboard", tag: "OPERATIONS", title: <>Operations <em>Dashboard</em></> },
};

export default function Page() {
  return <CaseStudyPage config={config} />;
}
