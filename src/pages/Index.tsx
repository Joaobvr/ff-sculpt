import Hero from "@/components/Hero";
import TechniqueSection from "@/components/TechniqueSection";
import DoctorSection from "@/components/DoctorSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProcessSection from "@/components/ProcessSection";
import UrgencySection from "@/components/UrgencySection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <BeforeAfterSection />
      <TechniqueSection />
      <DoctorSection />
      <ProcessSection />
      <UrgencySection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
