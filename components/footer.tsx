export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-primary-foreground font-semibold text-lg mb-2">
            Orderly Admin Co LLC
          </h3>
          <p className="max-w-md text-sm leading-relaxed">
            Administrative Operations, Data Management, Records Management, and
            Project Support Services for Government and Commercial Clients.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p>Phone: 313-623-5568</p>
          <p>Email: lakishasmith@orderlyadminco.com</p>
          <p>Texas, United States</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 max-w-7xl mx-auto px-6 py-6">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Orderly Admin Co LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
