const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Java", level: 95 },
      { name: "Go", level: 85 },
      { name: "PHP", level: 90 },
      { name: "Python", level: 75 },
      { name: "Shell", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    icon: "🏗️",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Hibernate", level: 90 },
      { name: "Echo (Go)", level: 80 },
      { name: "Symfony", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 90 },
      { name: "Cassandra", level: 75 },
      { name: "Elasticsearch", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Terraform", level: 80 },
      { name: "Jenkins", level: 85 },
      { name: "GitHub Actions", level: 85 },
    ],
  },
  {
    title: "Messaging",
    icon: "📨",
    skills: [
      { name: "Kafka", level: 90 },
      { name: "RabbitMQ", level: 85 },
      { name: "Amazon SQS", level: 80 },
    ],
  },
  {
    title: "Observability",
    icon: "📊",
    skills: [
      { name: "Datadog", level: 85 },
      { name: "Grafana", level: 85 },
      { name: "Prometheus", level: 80 },
      { name: "ELK Stack", level: 85 },
      { name: "OpenTelemetry", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#58a6ff] font-mono text-sm md:text-base mb-3 tracking-wider">03. Skills</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f0f6fc]">
            Tech Stack
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 md:p-8 card-hover"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg md:text-xl font-bold text-[#f0f6fc]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex}>
                    <div className="flex justify-between text-sm md:text-base mb-2">
                      <span className="text-[#8b949e] font-medium">{skill.name}</span>
                      <span className="text-[#58a6ff] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-[#21262d] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#58a6ff] to-[#a371f7] transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
