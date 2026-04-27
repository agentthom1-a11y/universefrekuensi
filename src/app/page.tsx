import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Manifesto from "@/components/Manifesto";
import News from "@/components/News";
import LeadMagnet from "@/components/LeadMagnet";
import AudioLeadMagnet from "@/components/AudioLeadMagnet";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Manifesto />
      <News />
      <LeadMagnet />
      <AudioLeadMagnet />
      <Footer />
    </main>
  );
}
