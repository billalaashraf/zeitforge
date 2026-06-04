import { CaseStudyPage, type CaseConfig } from "@/components/CaseStudyPage";
import { ProjClinic } from "@/components/viz";

const config: CaseConfig = {
  crumbLabel: "Clinic Pulse",
  tags: ["Healthcare", "Dashboard", "Automation", "Multi-site"],
  title: <>One dashboard for <em>fourteen clinics.</em></>,
  summary: "We replaced a fragile spreadsheet-and-paper stack with a unified operations dashboard that automates scheduling, no-show recovery, and revenue ops across fourteen clinic sites — and gave fifteen hundred hours a month back to staff.",
  meta: [
    { k: "Role",     v: "Product · Design · Build" },
    { k: "Timeline", v: "8 weeks" },
    { k: "Sector",   v: "Healthcare · Clinics" },
    { k: "Stage",    v: "Growth-stage" },
  ],
  demoUrl: "app.clinicpulse.health / operations / today",
  HeroViz: ProjClinic,
  challengeTitle: <>Fourteen sites, <em>fourteen spreadsheets.</em></>,
  challenge: [
    "The client ran fourteen clinics on a patchwork of spreadsheets, a legacy booking tool, and a lot of phone calls. Each site operated as an island. Head office couldn't see today's schedule without emailing fourteen managers.",
    "No-shows were bleeding revenue, staff were drowning in manual reconciliation, and there was no single source of truth for who was booked where. They needed one operational surface — fast, dense, and trusted by front-desk staff who'd been burned by software before.",
  ],
  challengeBullets: [
    <><strong>No central view.</strong> Head office reconstructed each day from emails.</>,
    <><strong>22% no-show rate.</strong> No automated reminders or recovery flow.</>,
    <><strong>Manual revenue ops.</strong> Payor reconciliation done by hand, per site.</>,
    <><strong>Staff distrust.</strong> The last tool was so slow they went back to paper.</>,
  ],
  approachTitle: <>Density first. <em>Speed always.</em></>,
  approach: [
    { t: "Unified scheduling surface", d: "One calendar across all fourteen sites, with on-call rotations, room allocation, and provider availability resolved in a single view dense enough for a front desk." },
    { t: "Automated no-show recovery", d: "A reminder + reschedule engine over SMS and email that fills cancelled slots from a waitlist before they go cold." },
    { t: "Revenue-ops automation", d: "Payor workflows and reconciliation automated per site, with exceptions surfaced to head office instead of buried in spreadsheets." },
    { t: "Offline-first, tablet-ready", d: "Built to stay responsive on clinic tablets with spotty wifi — front-desk actions never block on the network." },
  ],
  galleryTitle: <>Built for the <em>front desk.</em></>,
  shots: [
    { kind: "wide", cap: "Operations dashboard · all sites, today" },
    { kind: "",     cap: "Multi-site scheduling grid" },
    { kind: "",     cap: "No-show recovery · waitlist fill" },
  ],
  outcomeTitle: <>Hours back, <em>revenue saved.</em></>,
  outcomes: [
    { v: "71<em>%</em>",  l: "OPS AUTOMATED",  d: "Of scheduling and reconciliation tasks now run without manual touch." },
    { v: "−62<em>%</em>", l: "NO-SHOW RATE",   d: "Down from 22% to 8% after automated recovery went live." },
    { v: "1,420",         l: "HOURS SAVED / MO", d: "Staff time returned across all fourteen sites, every month." },
    { v: "14",            l: "SITES UNIFIED",  d: "On one operational surface, with head-office visibility." },
  ],
  stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Twilio", "Stripe", "Render", "Sentry"],
  quote: <>For the first time in five years I can open one screen and see every clinic, today, live. It paid for itself in <em>recovered no-shows alone.</em></>,
  quoteInitials: "DA",
  quoteName: "Dr. Amara Okonkwo",
  quoteRole: "MEDICAL DIRECTOR · CLINIC GROUP",
  next: { href: "/work/ecommerce-growth", tag: "E-COMMERCE", title: <>E-commerce <em>Growth Engine</em></> },
};

export default function Page() {
  return <CaseStudyPage config={config} />;
}
