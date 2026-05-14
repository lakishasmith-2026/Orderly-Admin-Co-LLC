const capabilities = [
  {
    title: "Administrative Support",
    desc: "Operational coordination, scheduling, communication support, and workflow assistance.",
  },
  {
    title: "Data Management",
    desc: "Data entry, spreadsheet management, database updates, and information organization.",
  },
  {
    title: "Records Management",
    desc: "Document organization, records tracking, file management, and document control support.",
  },
  {
    title: "Project Support",
    desc: "Project coordination, reporting support, deliverable tracking, and administrative project assistance.",
  },
];

export function CoreCapabilities() {
  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Professional operational support services designed to help project
          teams, agencies, and contractors streamline administrative workflows
          and documentation processes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((service, index) => (
          <div
            key={index}
            className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
