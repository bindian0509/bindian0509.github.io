type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights?: string[];
};

const roles: Role[] = [
  {
    title: "Director, Platform Engineering",
    company: "AssetMark",
    location: "Hyderabad, India — Remote",
    period: "Jul 2026 — Present",
    current: true,
    summary:
      "Leading platform engineering for a US wealth-management technology firm, with ownership of shared services, developer experience and the engineering standards the product teams build on.",
  },
  {
    title: "Senior Engineering Manager, Card Payments",
    company: "Razorpay",
    location: "Bengaluru, India",
    period: "Mar 2025 — Apr 2026",
    summary:
      "Owned two payment platforms — card recurring and e-mandate, and partner pay programmes — running 5–15K TPS and $60–90M in daily volume.",
    highlights: [
      "Led 21 engineers across three pods and influenced roughly 33 more across routing, terminal and cross-border payment domains.",
      "Drove the re-architecture of a legacy PHP API monolith into Go services for card and recurring payments, against the internal security, compliance, reliability, efficiency and delivery bar.",
      "Closed a visibility gap where merchant-impacting failures surfaced 20 minutes late: a Kafka, Spark Streaming and Apache Pinot pipeline brought detection under one second for 40+ high-value merchants.",
      "Shipped Cred Pay and Apple Pay as the year's primary OKRs, and cut logging cost per transaction from ₹0.09 to ₹0.03.",
    ],
  },
  {
    title: "Director, Software Engineering",
    company: "Guidepoint",
    location: "Pune, India",
    period: "Jun 2023 — Feb 2025",
    summary:
      "Ran the India engineering organisation for CRM modernisation, advisor discovery, client portals and AI-assisted products, partnering directly with product leadership in New York.",
    highlights: [
      "Delivered a full PHP 8 migration of the ecosystem in two months, unblocking SOC 2 compliance and continuity for enterprise clients.",
      "Decomposed monolithic systems into services and wired Databricks ETL into the advisor discovery platform.",
      "Designed a federated micro-frontend architecture unifying Advisor Search, Insights 2.0 and the AI co-pilot, with LLM-backed advisor matching.",
      "Owned the org design and stakeholder plan with the CTO that turned the Pune office into a Global Capability Center.",
    ],
  },
  {
    title: "Manager, Engineering",
    company: "Acquia",
    location: "Pune, India — Remote",
    period: "Feb 2021 — Jun 2023",
    summary:
      "Built and led the Cloud Next upgrades and data platform teams across IST and Boston hours, spanning junior through principal engineers.",
    highlights: [
      "Delivered $660K in annual COGS savings by migrating customers from Cloud Classic to Cloud Next on a multi-tenant Aurora MySQL model.",
      "Owned the Acquia Cloud Next roadmap features that shortened enterprise onboarding.",
      "Pushed Kubernetes, Terraform, CI/CD automation and SRE practice across the cloud and digital asset management platforms.",
    ],
  },
  {
    title: "Technical Lead to Engineering Manager",
    company: "MobiKwik",
    location: "Gurugram, India",
    period: "Nov 2016 — Feb 2021",
    summary:
      "Took insurance, lending and travel lines from nothing to production — MVP scope, partner integrations, architecture and delivery.",
    highlights: [
      "Built the insurance cross-sell framework (Stargate) that allowed multiple service bundles in a single transaction.",
      "Led the shift from wallet-only to wallet-as-payment-gateway in line with RBI PPI regulation.",
      "Held 99.90% availability on recharge and bill payments with circuit-breaker isolation, and sub-200ms API latency across Euronet, BillDesk and BillAvenue.",
      "Grew teams from zero to twelve engineers, and lifted recharge GMV from ₹181 Cr to ₹210 Cr a month through a targeted tech-debt programme.",
    ],
  },
  {
    title: "Staff Software Engineer",
    company: "ShopClues",
    location: "Gurugram, India",
    period: "Sep 2015 — Nov 2016",
    summary:
      "Led six engineers across catalogue ingestion, moderation and inventory.",
    highlights: [
      "Raised bulk ingestion from 30K to 100K products a day and cut banned-product enforcement from five days to under 24 hours.",
    ],
  },
  {
    title: "Senior Software Engineer to Lead Engineer",
    company: "InfoEdge — Naukri.com",
    location: "Noida, India",
    period: "Nov 2011 — May 2015",
    summary:
      "Built the Background Check and Priority Applicant platforms, and migrated legacy systems from Symfony 1.x to 2.x.",
    highlights: [
      "Moved the CRM email and SMS pipeline SLA from 3 PM to 11 AM for over a million active users, and introduced Git, Docker and agile practice across the teams.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Comviva Technologies",
    location: "Gurugram, India",
    period: "Dec 2009 — Mar 2011",
    summary:
      "Module developer on PreTUPS, a prepaid top-up platform deployed across 50+ telecom operators, and the on-site point of contact for Vodafone East, West and North migrations.",
  },
];

// `span` is tenure in years; it drives the proportional width of each timeline segment.
const timeline = [
  { company: "Comviva", period: "2009 — 2011", span: 1.25 },
  { company: "InfoEdge", period: "2011 — 2015", span: 3.5 },
  { company: "ShopClues", period: "2015 — 2016", span: 1.2 },
  { company: "MobiKwik", period: "2016 — 2021", span: 4.25 },
  { company: "Acquia", period: "2021 — 2023", span: 2.35 },
  { company: "Guidepoint", period: "2023 — 2025", span: 1.65 },
  { company: "Razorpay", period: "2025 — 2026", span: 1.1 },
  { company: "AssetMark", period: "2026 —", span: 0.6, current: true },
];

const timelineColumns = timeline.map((era) => `minmax(88px, ${era.span}fr)`).join(" ");

export default function Experience() {
  return (
    <section id="experience" className="border-b border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="eyebrow">Experience</p>
        <h2 className="mt-6 text-3xl sm:text-4xl">Sixteen years, seven companies</h2>
        <p className="mt-5 max-w-2xl text-ink-muted">
          Telecom to marketplaces to payments to enterprise SaaS. The scope changed; the habit of
          owning the whole system rather than a slice of it didn&apos;t.
        </p>

        <div className="mt-12 hidden md:block">
          <div
            className="grid gap-px border border-rule bg-rule"
            style={{ gridTemplateColumns: timelineColumns }}
          >
            {timeline.map((era, index) => (
              <div key={era.company} className="bg-paper px-3 pt-3 pb-4">
                <div
                  className="h-1 bg-accent"
                  style={{ opacity: 0.22 + (index / (timeline.length - 1)) * 0.78 }}
                />
                <p
                  className={`mt-3 font-serif text-[0.95rem] leading-tight ${
                    era.current ? "text-accent" : "text-ink"
                  }`}
                >
                  {era.company}
                </p>
                <p className="mt-1 font-mono text-[0.65rem] text-ink-subtle">{era.period}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-ink-subtle">
            Segment width is proportional to time in role
          </p>
        </div>

        <ol className="mt-12 border-t border-rule">
          {roles.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="grid gap-3 border-b border-rule py-8 md:grid-cols-[190px_1fr] md:gap-10"
            >
              <div className="md:pt-1">
                <p className="font-mono text-xs tracking-wide text-ink">{role.period}</p>
                <p className="mt-1 text-sm text-ink-subtle">{role.location}</p>
                {role.current && (
                  <p className="mt-2 inline-block bg-accent-soft px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-accent">
                    Current
                  </p>
                )}
              </div>

              <div>
                <h3 className="text-2xl">{role.title}</h3>
                <p className="mt-1 text-accent">{role.company}</p>
                <p className="mt-3 text-ink-muted">{role.summary}</p>

                {role.highlights && (
                  <ul className="mt-4 space-y-2.5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-5 text-[0.95rem] text-ink-muted before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-3 before:bg-rule-strong"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-2 sm:grid-cols-[190px_1fr] sm:gap-10">
          <p className="eyebrow sm:pt-1">Education</p>
          <div>
            <p className="text-ink">B.Tech, Computer Engineering — Jamia Millia Islamia, New Delhi</p>
            <p className="mt-1 text-sm text-ink-subtle">2005 — 2009 · First Division</p>
          </div>
        </div>
      </div>
    </section>
  );
}
