import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Manifesto from "@/components/Manifesto";
import News from "@/components/News";
import LeadMagnet from "@/components/LeadMagnet";
import AudioLeadMagnet from "@/components/AudioLeadMagnet";
import AetherProduct from "@/components/AetherProduct";
import StoicAI from "@/components/StoicAI";
import Footer from "@/components/Footer";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: Props) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang as Locale);

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-accent selection:text-brand-dark">
      <Navbar dict={dict.nav} />
      <Hero dict={dict.hero} />
      <Stats dict={dict.stats} />
      <Services dict={dict.services} />
      <Manifesto dict={dict.manifesto} />
      <News dict={dict.news} />
      <StoicAI dict={dict.stoicAI} lang={resolvedParams.lang} />
      <LeadMagnet dict={dict.leadMagnet} />
      <AudioLeadMagnet dict={dict.audioLeadMagnet} />
      <AetherProduct dict={dict.aetherProduct} />
      <Footer dict={dict.footer} />
    </main>
  );
}
