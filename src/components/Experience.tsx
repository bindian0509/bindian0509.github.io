const experiences = [
  {
    title: "Senior Engineering Manager",
    subtitle: "Cards Recurring & E-Mandate, Cards Growth",
    company: "Razorpay",
    location: "Bengaluru",
    period: "Mar 2025 – Present",
    type: "current",
    highlights: [
      "Leading 21 engineers across 3 pods, influencing 33 engineers in payments org",
      "Owning systems processing 15K TPS and ₹600-900 Cr daily card volume",
      "Reduced transaction latency from 10 seconds to 2 seconds post re-architecture",
      "Delivered Cred Pay and Apple Pay integrations as primary OKRs",
      "Achieved 99.9% effective uptime for card payment flows",
      "Reduced logging costs from 9p to 3p per transaction",
    ],
  },
  {
    title: "Director, Software Engineering",
    subtitle: "India Engineering Pods",
    company: "Guidepoint Global",
    location: "New York (Remote Pune)",
    period: "Jun 2023 – Feb 2025",
    highlights: [
      "Led CRM modernization, advisor platforms, and client-facing portals",
      "Delivered PHP 8 migration of entire ecosystem in 2 months for SOC2 compliance",
      "Decomposed monolithic systems into microservices with Databricks ETL",
      "Designed federated micro-frontend architecture for AI Co-pilot platform",
    ],
  },
  {
    title: "Engineering Manager",
    subtitle: "Cloud Data & ACN Upgrades",
    company: "Acquia",
    location: "Boston (Remote India)",
    period: "Feb 2021 – Jun 2023",
    highlights: [
      "Built high-performing team from freshers to senior SDEs and SDETs",
      "Delivered $660K annual COGS savings through cloud migration",
      "Championed Kubernetes, Terraform, CI/CD automation across platforms",
      "Accelerated enterprise customer onboarding and adoption",
    ],
  },
  {
    title: "Tech Lead & Engineering Manager",
    subtitle: "Travel & Financial Services",
    company: "MobiKwik",
    location: "Gurgaon",
    period: "Nov 2016 – Feb 2021",
    highlights: [
      "Architected Hotels, Bus Tickets, Cabs, Bike Rentals, Insurance products",
      "Built teams from 0 to 12 engineers; hired 40+ engineers since 2016",
      "Led transformation to wallet-as-payment-gateway (RBI PPI compliance)",
      "Improved GMV from ₹181 Cr/month to ₹210 Cr/month via Bug-a-thon",
      "Achieved API latency under 200ms for recharge payments",
    ],
  },
  {
    title: "Staff Software Engineer",
    subtitle: "Technical Lead Manager — Catalogue",
    company: "ShopClues",
    location: "Gurgaon",
    period: "Sep 2015 – Nov 2016",
    highlights: [
      "Led 6 engineers owning catalogue, moderation, and inventory systems",
      "Increased bulk ingestion from 30K to 100K products/day",
      "Reduced banned-product enforcement SLA from 5 days to 24 hours",
    ],
  },
  {
    title: "Senior → Lead Engineer",
    subtitle: "Platform Engineering",
    company: "InfoEdge (Naukri.com)",
    location: "Noida",
    period: "Nov 2011 – May 2015",
    highlights: [
      "Built Naukri Background Check and Priority Applicant platforms",
      "Migrated from Symfony 1.x to 2.x across the platform",
      "Optimized email/SMS pipelines: SLA improved 3PM → 11AM for 1M+ users",
      "Introduced Git and Agile practices across engineering teams",
    ],
  },
  {
    title: "Software Engineer",
    subtitle: "PreTUPS™ Platform",
    company: "Comviva Technologies",
    location: "Gurgaon",
    period: "Dec 2009 – Mar 2011",
    highlights: [
      "Sole developer for prepaid top-up system across 50+ global telecom clients",
      "SPOC for Vodafone East, West, and North regions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-[#161b22]/50">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[#58a6ff] font-mono text-sm md:text-base mb-3 tracking-wider">02. Experience</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0f6fc]">
              Where I&apos;ve Worked
            </h2>
          </div>

          {/* Timeline - Alternating Layout */}
          <div className="relative">
            {/* Timeline Line - Center on desktop, left on mobile */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#58a6ff] via-[#a371f7] to-[#3fb950]" />

            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative mb-8 md:mb-10">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#58a6ff] border-4 border-[#0d1117] -translate-x-1/2 z-10 top-8" />

                  {/* Desktop: Alternating layout */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-12">
                    {/* Left side */}
                    <div className={isLeft ? "pr-8" : ""}>
                      {isLeft && (
                        <ExperienceCard exp={exp} align="right" />
                      )}
                    </div>

                    {/* Right side */}
                    <div className={!isLeft ? "pl-8" : ""}>
                      {!isLeft && (
                        <ExperienceCard exp={exp} align="left" />
                      )}
                    </div>
                  </div>

                  {/* Mobile: Single column */}
                  <div className="md:hidden ml-14">
                    <ExperienceCard exp={exp} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, align }: { exp: typeof experiences[0]; align: "left" | "right" }) {
  return (
    <div
      className={`bg-[#21262d] border border-[#30363d] rounded-xl p-6 md:p-8 card-hover ${
        exp.type === "current" ? "border-[#58a6ff] shadow-lg shadow-[#58a6ff]/10" : ""
      } ${align === "right" ? "text-right" : "text-left"}`}
    >
      {exp.type === "current" && (
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 bg-[#58a6ff]/20 text-[#58a6ff] text-xs font-semibold rounded-full mb-4 ${align === "right" ? "flex-row-reverse" : ""}`}>
          <span className="w-2 h-2 bg-[#58a6ff] rounded-full animate-pulse" />
          Current Role
        </span>
      )}

      <h3 className="text-xl md:text-2xl font-bold text-[#f0f6fc] mb-2">
        {exp.title}
      </h3>
      <p className="text-[#a371f7] text-sm md:text-base font-medium mb-3">{exp.subtitle}</p>

      <div className={`flex flex-wrap items-center gap-2 text-sm text-[#8b949e] mb-5 ${align === "right" ? "justify-end" : "justify-start"}`}>
        <span className="font-semibold text-[#58a6ff]">{exp.company}</span>
        <span>•</span>
        <span>{exp.location}</span>
        <span>•</span>
        <span>{exp.period}</span>
      </div>

      <ul className="space-y-3">
        {exp.highlights.map((highlight, hIndex) => (
          <li key={hIndex} className={`flex items-start gap-3 text-[#8b949e] text-sm md:text-base ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
            <span className="text-[#3fb950] mt-1.5 flex-shrink-0">▹</span>
            <span className="leading-relaxed">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
