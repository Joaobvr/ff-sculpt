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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >

            {/* Headline */}
            <h1 className="heading-hero text-balance text-center lg:text-left">
              Redefina suas curvas com segurança, eficiência, sem cortes e sem cicatrizes com o{" "}
              <span className="text-accent">Método FFSculpt.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-elegant max-w-xl">
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

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={heroImage}
                alt="Tratamento de criolipólise em ambiente premium"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-medium border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Credenciamento Exclusivo</p>
                  <p className="text-xs text-muted-foreground">Uma das 3 médicas em Goiânia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
