const groups = [
  {
    title: "Languages",
    items: ["Java", "Go", "PHP", "Python", "Shell"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "Echo", "gRPC", "Symfony / API Platform", "Hibernate"],
  },
  {
    title: "Architecture",
    items: [
      "Microservices",
      "Event-driven systems",
      "CQRS",
      "Transactional outbox",
      "Circuit breaker",
      "Strangler fig migrations",
    ],
  },
  {
    title: "Cloud & delivery",
    items: [
      "AWS",
      "Azure AKS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "Argo CD",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    title: "Data & messaging",
    items: [
      "MySQL",
      "PostgreSQL",
      "TiDB",
      "MongoDB",
      "Cassandra",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "Amazon SQS",
      "Apache Pinot",
      "Elasticsearch",
      "Databricks",
    ],
  },
  {
    title: "Observability & FinOps",
    items: [
      "OpenTelemetry",
      "Datadog",
      "Grafana",
      "Prometheus",
      "ELK",
      "Micrometer",
      "Zipkin",
      "PagerDuty",
      "CloudZero",
    ],
  },
  {
    title: "AI-assisted engineering",
    items: ["Claude Code", "Cursor", "ChatGPT", "NotebookLM", "n8n workflows"],
  },
  {
    title: "Leadership",
    items: [
      "Org design",
      "Hiring & coaching",
      "OKR planning",
      "Stakeholder management",
      "Incident management",
      "Cost optimisation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="toolkit" className="border-b border-rule py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <p className="eyebrow">Toolkit</p>
        <h2 className="mt-6 text-3xl sm:text-4xl">What I&apos;ve worked with</h2>
        <p className="mt-5 max-w-2xl text-ink-muted">
          Listed without proficiency percentages, because nobody can honestly assign one. These are
          the tools I&apos;ve made production decisions with, and can still be useful in a design
          review about.
        </p>

        <dl className="mt-12 border-t border-rule">
          {groups.map((group) => (
            <div
              key={group.title}
              className="grid gap-2 border-b border-rule py-5 sm:grid-cols-[220px_1fr] sm:gap-10"
            >
              <dt className="eyebrow sm:pt-1.5">{group.title}</dt>
              <dd className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.95rem] text-ink-muted">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
