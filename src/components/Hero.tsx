import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-treatment.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("pre-avaliacao");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide section-padding">
        <div className="flex items-center justify-center min-h-[85vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-3xl text-center mx-auto"
          >

            {/* Headline */}
            <h1 className="heading-hero text-balance">
              Redefina suas curvas com segurança, eficiência, sem cortes e sem cicatrizes com o{" "}
              <span className="text-accent">Método FFSculpt.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-elegant max-w-xl mx-auto">
              Dra. Isabella Tovar é uma das médicas do Brasil que oferece a metodologia não invasiva que vem obtendo resultados incríveis na eliminação de gordura localizada, redução de medidas, tratamento de lipedema e retração de pele: o método FF Sculpt.
            </p>

            {/* Trust Indicators */}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button
                onClick={scrollToForm}
                className="btn-accent group inline-flex items-center gap-3"
              >
                Quero Minha Pré-Avaliação
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
