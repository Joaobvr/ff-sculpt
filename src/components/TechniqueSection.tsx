import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
            O efeito disso é a redução da gordura subcutânea e a reestruturação da derme, gerando menos gordura e pele mais firme e vistosa.
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
            Realizado de forma personalizada, sob avaliação e indicação médica, equipe
            treinada e supervisionada por médicos credenciados para garantir melhores
            resultados e total segurança.
          </p>
        </motion.div>

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
