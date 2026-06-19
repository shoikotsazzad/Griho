import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import HowItWorks from '../components/HowItWorks';
import GradingSystem from '../components/GradingSystem';
import FractionalInvestment from '../components/FractionalInvestment';
import StatsBar from '../components/StatsBar';
import ForSellers from '../components/ForSellers';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  const location = useLocation();

  // Scroll to the anchored section when navigating here from another page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // Small delay lets React finish rendering all sections first
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <GradingSystem />
      <FractionalInvestment />
      <StatsBar />
      <ForSellers />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
