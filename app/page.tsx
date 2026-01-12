import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { TrustBar } from '@/components/sections/TrustBar';
import { PainPoints } from '@/components/sections/PainPoints';
import { Solution } from '@/components/sections/Solution';
import { PricingTabs } from '@/components/sections/PricingTabs';
import { GLMPromo } from '@/components/sections/GLMPromo';
import { WhyUs } from '@/components/sections/WhyUs';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <PainPoints />
      <Solution />
      <PricingTabs />
      <GLMPromo />
      <WhyUs />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
