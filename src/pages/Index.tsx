import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechniqueSection from "@/components/TechniqueSection";
import DoctorSection from "@/components/DoctorSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useFadeUp } from "@/hooks/use-fade-up";

const Index = () => {
  useFadeUp();
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BeforeAfterSection />
      <TechniqueSection />
      <DoctorSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
