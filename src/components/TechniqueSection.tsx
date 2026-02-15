import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ShieldCheck, FlaskConical, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Técnica Patenteada",
    description:
      "Método exclusivo desenvolvido no Brasil, com protocolo protegido por patente nacional.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Superiores",
    description:
      "Eficiência e segurança comprovada com resultados visíveis já nas primeiras semanas.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Médica",
    description:
      "Procedimento não invasivo baseado em tecnologia exaustivamente testada e aprovada por agências reguladoras.",
  },
  {
    icon: FlaskConical,
    title: "Resultados Duradouros",
    description:
      "O método FFSculpt tem começo, meio e fim. Os resultados são duradouros e não dependem de recorrência.",
  },
];

const TechniqueSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Método Exclusivo
          </span>
          <h2 className="heading-section mt-4 mb-6">
            O que é a técnica FFSculpt?
          </h2>
          <div className="divider-elegant" />
          <p className="text-elegant mt-6">
            A técnica FFSculpt é única no Brasil. Uma metodologia patenteada que oferece
            resultados empolgantes na eliminação de gordura localizada, redução de medidas,
            tratamento de lipedema e retração de pele. Além de ser aplicado na região íntima
            com finalidade estética e funcional.
          </p>
          <p className="text-elegant mt-4">
            FFSculpt combina uma avaliação médica detalhada, uma preparação do seu corpo
            e do seu tecido adiposo e a aplicação de uma técnica detalhada de crioterapia.
          </p>
          <p className="text-elegant mt-4">
            O tratamento induz a apoptose (uma auto destruição programada) das células de
            gordura e induzem a atividade de células que produzem as fibras (inclusive o colágeno).
          </p>
          <p className="text-elegant mt-4">
            Com isso pode eliminar gordura localizada e promover a firmeza da pele.
          </p>
          <p className="text-elegant mt-4">
            E isso ocorre sem cortes e sem cicatrizes, por um processo feito pelo seu próprio
            corpo a partir da ativação gerada pelo FF Sculpt.
          </p>
          <p className="text-elegant mt-4">
            Trata-se de uma metodologia segura com técnicas não invasivas amplamente
            testadas e validadas pela ciência.
          </p>
          <p className="text-elegant mt-4">
            Realizado com total segurança sob avaliação e indicação médica, equipe
            treinada e supervisionada por médicos credenciados para garantir melhores
            resultados e total segurança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elegant text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-5 bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 md:p-8 bg-primary/5 rounded-2xl border border-primary/10"
        >
          <p className="text-center text-foreground leading-relaxed">
            <span className="font-semibold text-accent">Alta demanda nacional:</span>{" "}
            A exclusividade da técnica e os resultados comprovados geraram uma procura
            crescente em todo o Brasil.
          </p>
          <p className="text-center text-foreground leading-relaxed mt-2">
            Em Goiânia, a Dra. Isabella é uma das apenas{" "}
            <span className="font-semibold">três médicas credenciadas</span> para
            realizar este procedimento.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechniqueSection;
