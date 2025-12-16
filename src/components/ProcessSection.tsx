import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, MessageCircle, Stethoscope, Snowflake, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Pré-avaliação Online",
    description:
      "Preencha nosso formulário detalhado para que possamos entender suas necessidades e objetivos.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Contato pelo WhatsApp",
    description:
      "Nossa equipe entrará em contato para esclarecer dúvidas e agendar sua consulta.",
  },
  {
    number: "03",
    icon: Stethoscope,
    title: "Consulta e Mensuração",
    description:
      "Avaliação presencial completa com medidas, análise de gordura e planejamento personalizado.",
  },
  {
    number: "04",
    icon: Snowflake,
    title: "Sessão de Criolipólise",
    description:
      "Procedimento realizado com metodologia exclusiva, conforto e total segurança médica.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Acompanhamento",
    description:
      "Suporte contínuo para potencializar seus resultados e garantir sua satisfação.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Jornada Simplificada
          </span>
          <h2 className="heading-section mt-4 mb-6">
            Como funciona o processo?
          </h2>
          <div className="divider-elegant" />
          <p className="text-elegant mt-6">
            Desenvolvemos um processo simples e acolhedor para que você tenha a melhor
            experiência, do primeiro contato até os resultados finais.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card-elegant text-center h-full">
                  {/* Number Badge */}
                  <div className="relative z-10 w-12 h-12 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center shadow-elegant">
                    <span className="text-accent-foreground font-display font-bold text-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 bg-secondary rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
