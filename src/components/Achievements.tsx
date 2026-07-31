const outcomes = [
  {
    metric: "< 1s",
    title: "Failure detection on payment flows",
    context:
      "Merchant-impacting issues used to surface 20 minutes late. A Kafka → Spark Streaming → Apache Pinot pipeline brought it under a second for 40+ high-value merchants.",
    where: "Razorpay",
  },
  {
    metric: "$660K",
    title: "Annual COGS removed",
    context:
      "Migrating customers from Cloud Classic to Cloud Next on a multi-tenant Aurora MySQL model, without a customer-visible cutover event.",
    where: "Acquia",
  },
  {
    metric: "₹0.09 → ₹0.03",
    title: "Logging cost per transaction",
    context:
      "An org-wide tech-debt and FinOps programme that made observability spend proportional to the value of what was being observed.",
    where: "Razorpay",
  },
  {
    metric: "2 months",
    title: "Full PHP 8 migration",
    context:
      "The entire product ecosystem moved in a single quarter, unblocking SOC 2 compliance and continuity for enterprise clients.",
    where: "Guidepoint",
  },
  {
    metric: "99.90%",
    title: "Availability on recharge and bill payments",
    context:
      "Circuit-breaker isolation across Euronet, BillDesk and BillAvenue as official BBPOUs, holding sub-200ms API latency.",
    where: "MobiKwik",
  },
  {
    metric: "₹181 → ₹210 Cr",
    title: "Monthly recharge GMV",
    context:
      "Earned by fixing the top operational pain points rather than adding features — a tech-debt initiative with a revenue line attached.",
    where: "MobiKwik",
  },
  {
    metric: "30K → 100K",
    title: "Products ingested per day",
    context:
      "Catalogue ingestion rebuilt on REST services, with banned-product enforcement cut from five days to under 24 hours.",
    where: "ShopClues",
  },
  {
    metric: "40+",
    title: "Engineers hired since 2016",
    context:
      "Across juniors to principals, in-house and contract, in India and the US — including two teams taken from zero to twelve.",
    where: "Across roles",
  },
];

const delivered = [
  "Cred Pay",
  "Apple Pay",
  "Google Pay",
  "RBI PPI compliance",
  "SOC 2 readiness",
  "PCI-DSS environments",
];

export default function Achievements() {
  return (
    <section id="outcomes" className="border-b border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="eyebrow">Outcomes</p>
        <h2 className="mt-6 text-3xl sm:text-4xl">Numbers I&apos;m accountable for</h2>
        <p className="mt-5 max-w-2xl text-ink-muted">
          Every line below had a cost centre, an owner and a date. They are the results I&apos;d bring
          up in a reference call.
        </p>

        <ul className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <li key={outcome.title} className="bg-paper p-6 sm:p-7">
              <p className="font-serif text-3xl text-accent">{outcome.metric}</p>
              <h3 className="mt-3 text-lg">{outcome.title}</h3>
              <p className="mt-2 text-[0.95rem] text-ink-muted">{outcome.context}</p>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-ink-subtle">
                {outcome.where}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-10">
          <p className="eyebrow sm:pt-1.5">Also shipped</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-ink-muted">
            {delivered.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
