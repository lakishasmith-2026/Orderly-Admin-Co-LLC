export function Hero() {
  const companyInfo = [
    { label: "Business Type", value: "LLC" },
    { label: "Business Classification", value: "Small Business" },
    { label: "SAM Registration", value: "Active" },
    { label: "Texas Vendor Registration", value: "Active" },
    { label: "Focus Area", value: "GovCon Support" },
  ];

  return (
    <section className="bg-card">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
            Administrative Operations Support
          </p>
          <h1 className="text-5xl font-bold leading-tight mb-6 text-balance">
            Organized Operations,
            <br />
            Professional Support
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            Orderly Admin Co LLC provides responsive administrative operations,
            data management, and project coordination support for government
            contractors, agencies, and project teams.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-2xl text-sm font-medium shadow hover:opacity-90 transition">
              Request Capability Statement
            </button>
            <button className="border border-border px-6 py-3 rounded-2xl text-sm font-medium hover:bg-secondary transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="bg-secondary rounded-3xl p-10 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Company Snapshot</h2>
          <div className="space-y-4 text-secondary-foreground">
            {companyInfo.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-border pb-2"
              >
                <span>{item.label}</span>
                <span className="font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
