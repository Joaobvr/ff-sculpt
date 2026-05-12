import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Award, UserCheck } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const credentials = [
  {
    icon: GraduationCap,
    title: "Foco na Saúde da Mulher",
    description: "Médica com pós-graduação em Ginecologia e Obstetrícia (não especialista)",
  },
  {
    icon: Heart,
    title: "Estética íntima e corporal",
    description: "Experiência consolidada em estética íntima feminina e corporal",
  },
  {
    icon: Award,
    title: "Tratamento Exclusivo",
    description: "Uma das poucas médicas do Brasil que dominam a técnica FFSculpt",
  },
  {
    icon: UserCheck,
    title: "Tratamento integral",
    description: "Tratamento personalizado avaliando a necessidade do paciente e com indicação individual",
  },
];

const DoctorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-hero">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/50 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={doctorImage}
                  alt="Dra. Isabella Rodrigues Tovar"
                  className="w-full aspect-[3/4] object-cover object-center scale-[0.9]"
                />
              </div>
              
              {/* Name Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-xl shadow-medium border border-border/50"
              >
                <p className="font-display font-semibold text-foreground text-center">
                  Dra. Isabella Rodrigues Tovar
                </p>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  Saúde, Beleza e Vitalidade
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Sua médica
              </span>
              <h2 className="heading-section mt-4">
                Por que fazer com a Dra. Isabella?
              </h2>
              <div className="divider-elegant !mx-0 !my-6" />
              <p className="text-elegant">
                Combinando formação médica rigorosa com sensibilidade para as necessidades
                femininas, a Dra. Isabella oferece uma experiência de tratamento que vai
                além da estética — cuidando de você de forma integral.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 bg-card/50 rounded-xl border border-border/30"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {credential.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {credential.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 bg-card/50 rounded-xl border border-border/30"
            >
              <p className="text-muted-foreground mb-4">
                A Dra. Isabella oferece um cuidado integral à mulher em todas as suas fases.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {[
                  "Consulta de rotina",
                  "Prevenção",
                  "Climatério/Menopausa",
                  "Síndrome dos ovários policísticos",
                  "Endometriose",
                  "Emagrecimento",
                  "Inserção de DIU",
                  "Inserção de Implanon",
                  "Reposição Hormonal",
                  "Implantes Hormonais",
                  "Terapia Injetável",
                  "Harmonização corporal: FFSCULPT e enzimas",
                  "Tratamento íntimo: estético e funcional",
                ].map((service) => (
                  <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
