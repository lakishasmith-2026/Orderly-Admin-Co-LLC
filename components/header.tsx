import Link from "next/link";

export function Header() {
  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-foreground">
          Orderly Admin Co LLC
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#capabilities" className="text-muted-foreground hover:text-foreground transition">
            Capabilities
          </Link>
          <Link href="#naics" className="text-muted-foreground hover:text-foreground transition">
            NAICS Codes
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition">
            Contact
          </Link>
        </nav>
        <button className="bg-accent text-accent-foreground px-5 py-2 rounded-2xl text-sm font-medium hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </header>
  );
}
