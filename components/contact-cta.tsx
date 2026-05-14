export function ContactCta() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Support Your Team</h2>

        <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Whether you need administrative operations support, project
          coordination, data management, or documentation assistance, Orderly
          Admin Co LLC is ready to help.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:lakishasmith@orderlyadminco.com?subject=Capability%20Statement%20Request"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
          >
            Request Capability Statement
          </a>
          <a
            href="mailto:lakishasmith@orderlyadminco.com?subject=Consultation%20Request"
            className="border border-primary-foreground px-6 py-3 rounded-2xl font-medium hover:bg-primary-foreground hover:text-primary transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
