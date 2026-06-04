import { CaseStudyPage, type CaseConfig } from "@/components/CaseStudyPage";
import { ProjOps } from "@/components/viz";

const config: CaseConfig = {
  crumbLabel: "Operations Dashboard",
  tags: ["Operations", "Internal Platform", "Logistics", "Consolidation"],
  title: <>Seven tools, <em>one operational surface.</em></>,
  summary: "We built a single operations surface for a 220-person logistics business — fleet, finance, and field ops on one canvas — replacing seven disconnected tools and giving every team the same live picture of the operation.",
  meta: [
    { k: "Role",     v: "Platform · Design · Build" },
    { k: "Timeline", v: "12 weeks" },
    { k: "Sector",   v: "Logistics" },
    { k: "Stage",    v: "Established · 220 staff" },
  ],
  demoUrl: "ops.client-logistics.com / control / live",
  HeroViz: ProjOps,
  challengeTitle: <>Seven tools that <em>never talked.</em></>,
  challenge: [
    "A 220-person logistics operation ran on seven separate tools: one for fleet, one for finance, a spreadsheet for field ops, a chat app for dispatch, and three more nobody fully owned. Every team had a different version of the truth.",
    "Reconciling them was a daily, manual, error-prone ritual. Dispatch couldn't see finance holds. Finance couldn't see delivery status. The COO's morning was spent assembling a picture by hand that was already stale by the time it was done.",
  ],
  challengeBullets: [
    <><strong>Seven sources of truth.</strong> Fleet, finance, and field never reconciled.</>,
    <><strong>Manual morning rollup.</strong> Hours spent assembling a stale picture.</>,
    <><strong>No cross-team visibility.</strong> Dispatch blind to finance holds.</>,
    <><strong>640 hours / week of toil.</strong> Across teams, just moving data around.</>,
  ],
  approachTitle: <>One canvas, <em>every team.</em></>,
  approach: [
    { t: "Unified data model", d: "We mapped fleet, finance, and field ops onto a single object graph, so a shipment, a vehicle, and an invoice finally referenced the same underlying truth." },
    { t: "Role-aware control surface", d: "One dashboard, many lenses — dispatch, finance, and field each see the same live operation framed for their decisions, not a generic report." },
    { t: "Live integrations, not exports", d: "We wired the seven legacy systems in as live feeds where they had to stay, and replaced the rest, so the surface is always current — never a nightly export." },
    { t: "Operator-grade reliability", d: "Built for a control room: dense, fast, and resilient, with audit logging and alerting your ops desk actually reads." },
  ],
  galleryTitle: <>A control room <em>on one screen.</em></>,
  shots: [
    { kind: "wide", cap: "Operations control surface · live" },
    { kind: "",     cap: "Fleet + field ops overlay" },
    { kind: "",     cap: "Finance holds + reconciliation" },
  ],
  outcomeTitle: <>Consolidated, <em>visible, fast.</em></>,
  outcomes: [
    { v: "7",              l: "TOOLS REPLACED",     d: "Collapsed into one operational surface across all teams." },
    { v: "+18<em>pp</em>", l: "ON-TIME DELIVERY",   d: "Improvement once dispatch could see the whole operation live." },
    { v: "640<em>h</em>",  l: "TOIL SAVED / WEEK",  d: "Manual reconciliation eliminated across teams." },
    { v: "220",            l: "STAFF ON ONE SURFACE", d: "Fleet, finance, and field, all on the same live picture." },
  ],
  stack: ["Next.js", "TypeScript", "Postgres", "Kafka", "Mapbox", "Grafana", "Docker", "AWS"],
  quote: <>My morning used to be ninety minutes of assembling a spreadsheet. Now I open one screen and the whole operation is <em>just there, live.</em></>,
  quoteInitials: "MV",
  quoteName: "Marcus Vela",
  quoteRole: "COO · LOGISTICS GROUP",
  next: { href: "/work/ai-saas-platform", tag: "AI SAAS", title: <>AI SaaS <em>Platform</em></> },
};

export default function Page() {
  return <CaseStudyPage config={config} />;
}
