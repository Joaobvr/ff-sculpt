import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Sparkles, Calendar } from "lucide-react";

const UrgencySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-primary/5">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-card rounded-3xl p-8 md:p-12 border border-accent/20 shadow-elegant overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
              <Clock className="w-8 h-8 text-accent" />
            </div>

            <h2 className="heading-section text-center mb-6">
              Aviso Importante
            </h2>

            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/30">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Alta Demanda Confirmada
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Devido à exclusividade da técnica e aos resultados superiores, a
                    procura pelo procedimento tem sido intensa em todo o Brasil.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/30">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Pré-Agendamentos Abertos
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A nova máquina está chegando e já estamos aceitando pré-agendamentos
                    para garantir sua vaga prioritária.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center p-4 bg-accent/5 rounded-xl border border-accent/20"
              >
                <p className="font-display text-lg text-foreground font-medium">
                  ⚡ Vagas Limitadas
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Garanta sua pré-avaliação agora e seja uma das primeiras a experimentar
                  essa tecnologia em Goiânia.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
