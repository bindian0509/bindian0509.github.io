const practice = [
  {
    title: "Platform engineering",
    body: "Shared services, API-first contracts and event-driven backbones that several product teams depend on. The platform is a product; developer experience and extensibility count as much as the feature that shipped this quarter.",
  },
  {
    title: "Payments and regulated systems",
    body: "Card, recurring and e-mandate flows under PCI-DSS and RBI PPI constraints. Idempotency, reconciliation, partner failover and the operational discipline that keeps a payment platform honest at 15K TPS.",
  },
  {
    title: "Cloud-native and FinOps",
    body: "Kubernetes, Terraform and CI/CD on AWS and Azure, with cost treated as a first-class metric — including $660K of annual COGS removed at Acquia and per-transaction logging cost cut by two-thirds at Razorpay.",
  },
  {
    title: "Real-time data",
    body: "Kafka, Spark Streaming and Apache Pinot for operational analytics, plus Databricks pipelines for discovery products. Built for people who need to answer a question before the incident bridge fills up.",
  },
  {
    title: "Org design and GCC build-out",
    body: "Multi-pod organisations of 20–30 engineers, hiring across levels, and turning an offshore office into a Global Capability Center with genuine ownership rather than ticket execution.",
  },
  {
    title: "AI-assisted delivery",
    body: "Claude Code, Cursor and n8n adopted as team practice rather than a pilot — code review, refactoring, documentation and test generation — alongside LLM features shipped into production.",
  },
];

export default function About() {
  return (
    <section id="profile" className="border-b border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="eyebrow">Profile</p>

        <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <h2 className="text-3xl sm:text-4xl">What I actually do</h2>
            <p className="mt-5 text-ink-muted">
              Six areas cover most of my work. The through-line is the same in each: make the
              expensive decisions early, keep the boring things reliable, and give engineers a
              system they can reason about.
            </p>
            <p className="mt-5 text-ink-muted">
              I stay close to the code — architecture reviews, design docs, the occasional
              production trace — because leadership decisions get worse the further you drift from
              the thing you&apos;re deciding about.
            </p>
          </div>

          <dl className="border-t border-rule">
            {practice.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[auto_1fr] sm:gap-6"
              >
                <dt className="font-mono text-xs text-ink-subtle sm:pt-1">
                  {String(index + 1).padStart(2, "0")}
                </dt>
                <dd>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-ink-muted">{item.body}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
