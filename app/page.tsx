import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TickerSection from './components/TickerSection';
import SimulatorSection from './components/SimulatorSection';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import AreasSection from './components/AreasSection';
import AuthoritySection from './components/AuthoritySection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TickerSection />
        <SimulatorSection />
        <PainSection />
        <SolutionSection />
        <AreasSection />
        <AuthoritySection />
        <TestimonialsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
