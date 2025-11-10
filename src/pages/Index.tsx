import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Urgency from "@/components/Urgency";
import FAQContact from "@/components/FAQContact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { initScrollAnimations } from "@/utils/scrollAnimations";

const Index = () => {
  useEffect(() => {
    const observer = initScrollAnimations();
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <AboutUs />
        <Products />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Urgency />
        <FAQContact />
        <FinalCTA />
        <Footer />
      </main>
      <WhatsAppButton />
    </>
  );
};

export default Index;
