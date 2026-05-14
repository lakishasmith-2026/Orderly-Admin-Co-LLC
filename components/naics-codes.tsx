const naicsCodes = [
  { code: "561110", description: "Office Administrative Services" },
  { code: "561410", description: "Document Preparation Services" },
  { code: "541611", description: "Administrative Management Consulting" },
  { code: "518210", description: "Data Processing Services" },
];

export function NaicsCodes() {
  return (
    <section id="naics" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">NAICS Codes</h2>
        <p className="text-muted-foreground">
          Core classifications aligned with administrative operations and
          support services.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {naicsCodes.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl border border-border p-6 flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="text-2xl font-bold">{item.code}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
