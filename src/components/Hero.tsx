import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("pre-avaliacao");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      <div className="relative container-wide section-padding">
        <div className="flex items-center justify-center min-h-[80vh] md:min-h-[85vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 max-w-2xl text-center"
          >
            <h1 className="heading-hero text-balance">
              Redefina suas curvas com segurança, eficiência, sem cortes e sem cicatrizes com o{" "}
              <span className="text-accent">Método FFSculpt.</span>
            </h1>

            <p className="text-elegant max-w-xl">
              Dra. Isabella Tovar é uma das médicas do Brasil que oferece a metodologia não invasiva que vem obtendo resultados incríveis na eliminação de gordura localizada, redução de medidas, tratamento de lipedema e retração de pele: o método FF Sculpt.
            </p>

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
