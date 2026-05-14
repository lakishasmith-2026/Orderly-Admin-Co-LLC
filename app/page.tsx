import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CoreCapabilities } from "@/components/core-capabilities";
import { WhyChooseUs } from "@/components/why-choose-us";
import { NaicsCodes } from "@/components/naics-codes";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <CoreCapabilities />
        <WhyChooseUs />
        <NaicsCodes />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
