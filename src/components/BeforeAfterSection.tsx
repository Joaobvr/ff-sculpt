import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

const BeforeAfterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    const formSection = document.getElementById("pre-avaliacao");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Placeholder images - in a real scenario these would be actual before/after images
  const placeholders = [
    { id: 1, area: "Abdômen" },
    { id: 2, area: "Flancos" },
    { id: 3, area: "Costas" },
    { id: 4, area: "Braços" },
    { id: 5, area: "Coxas" },
    { id: 6, area: "Papada" },
  ];

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Transformações Reais
          </span>
          <h2 className="heading-section mt-4 mb-6">
            Resultados obtidos com a técnica usada pela Dra. Isabella
          </h2>
          <div className="divider-elegant" />
          <p className="text-elegant mt-6">
            Confira resultados reais obtidos com a técnica FFSculpt. Cada transformação
            representa a união de Método, Tecnologia e Medicina.
          </p>
          <p className="text-sm text-muted-foreground mt-3 italic">
            Ps. Os resultados são reais mas são individuais, não havendo garantias que
            todos terão os mesmos resultados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First slot - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
            className="group relative aspect-[4/3] bg-gradient-to-br from-secondary via-rose to-secondary rounded-2xl overflow-hidden border border-border/50 shadow-soft"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              poster=""
            >
              <source src="/videos/before-after-1.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <p className="text-foreground text-xs font-medium">
                Resultado - Tronco
              </p>
            </div>
          </motion.div>

          {/* Second slot - Before/After Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative aspect-[4/3] bg-gradient-to-br from-secondary via-rose to-secondary rounded-2xl overflow-hidden border border-border/50 shadow-soft"
          >
            <img
              src="/images/before-after-2.png"
              alt="Resultado antes e depois - Abdômen"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <p className="text-foreground text-xs font-medium">
                Resultado - Abdômen
              </p>
            </div>
          </motion.div>

          {/* Third slot - Video Pernas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative aspect-[4/3] bg-gradient-to-br from-secondary via-rose to-secondary rounded-2xl overflow-hidden border border-border/50 shadow-soft"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              poster=""
            >
              <source src="/videos/before-after-3.mp4" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <p className="text-foreground text-xs font-medium">
                Resultado - Pernas
              </p>
            </div>
          </motion.div>

          {/* Fourth slot - Redução de Medidas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative aspect-[3/2] bg-gradient-to-br from-secondary via-rose to-secondary rounded-2xl overflow-hidden border border-border/50 shadow-soft sm:col-span-2 lg:col-span-1"
          >
            <img
              src="/images/before-after-4.jpg"
              alt="Resultado antes e depois - Redução de Medidas"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-3 left-3 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <p className="text-foreground text-xs font-medium">
                Resultado - Redução de Medidas
              </p>
            </div>
          </motion.div>

          {/* Remaining placeholders */}
          {placeholders.slice(4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
              className="group relative aspect-[4/3] bg-gradient-to-br from-secondary via-rose to-secondary rounded-2xl overflow-hidden border border-border/50 shadow-soft"
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-display text-2xl font-medium">
                    {item.id}
                  </span>
                </div>
                <p className="text-foreground font-medium text-center">
                  Resultado - {item.area}
                </p>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Antes e Depois
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-primary-foreground text-sm font-medium px-4 text-center">
                  Imagem ilustrativa - Resultados reais serão adicionados em breve
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={scrollToForm}
            className="btn-accent group inline-flex items-center gap-3"
          >
            Quero Minha Pré-Avaliação
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
