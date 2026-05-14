const benefits = [
  "Responsive administrative support partner",
  "Accurate documentation and records support",
  "Flexible subcontracting support capacity",
  "Professional communication and workflow coordination",
  "Government contracting readiness",
];

const certifications = [
  { title: "SAM", subtitle: "Registered" },
  { title: "TX", subtitle: "Vendor Registered" },
  { title: "SB", subtitle: "Small Business" },
  { title: "WOSB", subtitle: "Woman-Owned" },
];

export function WhyChooseUs() {
  return (
    <section className="bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">
              Why Prime Contractors & Agencies Choose Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Orderly Admin Co LLC provides organized, responsive, and
              detail-oriented support services for project-heavy environments
              where documentation, coordination, and operational efficiency
              matter.
            </p>

            <div className="space-y-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-secondary rounded-3xl p-8 text-center shadow-sm"
              >
                <h3 className="text-4xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
