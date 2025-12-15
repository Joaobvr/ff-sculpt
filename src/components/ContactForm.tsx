import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const regions = [
  "Abdômen",
  "Flancos (Pneuzinhos)",
  "Costas",
  "Braços",
  "Coxas (Interna/Externa)",
  "Papada",
  "Culote",
  "Outro",
];

const scheduleOptions = [
  "Manhã (8h - 12h)",
  "Tarde (12h - 18h)",
  "Noite (18h - 21h)",
  "Flexível",
];

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    telefone: "",
    regiao: "",
    historico: "",
    comorbidades: "",
    objetivo: "",
    horario: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const whatsappMessage = encodeURIComponent(
        `Olá! Acabei de preencher minha pré-avaliação para o FFSculpt com a Dra. Isabella. Quero agendar minha sessão.\n\nNome: ${formData.nome}\nIdade: ${formData.idade}\nTelefone: ${formData.telefone}\nRegião: ${formData.regiao}\nObjetivo: ${formData.objetivo}`
      );
      const whatsappUrl = `https://wa.me/5562996093076?text=${whatsappMessage}`;

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Pré-avaliação enviada!",
        description: "Redirecionando para o WhatsApp...",
      });

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="pre-avaliacao" ref={ref} className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="heading-section mb-4">Pré-avaliação Enviada!</h2>
            <p className="text-elegant max-w-md mx-auto">
              Obrigada pelo seu interesse! Você será redirecionada para o WhatsApp
              para finalizar o agendamento com nossa equipe.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="pre-avaliacao" ref={ref} className="section-padding bg-card">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Próximo Passo
          </span>
          <h2 className="heading-section mt-4 mb-6">
            Formulário de Pré-Avaliação
          </h2>
          <div className="divider-elegant" />
          <p className="text-elegant mt-6 max-w-2xl mx-auto">
            Preencha o formulário abaixo para que possamos entender seu caso e
            preparar uma avaliação personalizada. Após o envio, você será
            direcionada ao WhatsApp para agendar sua consulta.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gradient-card rounded-2xl p-6 md:p-10 border border-border/50 shadow-medium"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="space-y-2">
              <label htmlFor="nome" className="block text-sm font-medium text-foreground">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Idade */}
            <div className="space-y-2">
              <label htmlFor="idade" className="block text-sm font-medium text-foreground">
                Idade *
              </label>
              <input
                type="number"
                id="idade"
                name="idade"
                required
                min="18"
                max="100"
                value={formData.idade}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                placeholder="Sua idade"
              />
            </div>

            {/* Telefone */}
            <div className="space-y-2">
              <label htmlFor="telefone" className="block text-sm font-medium text-foreground">
                Telefone/WhatsApp *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                placeholder="(62) 99999-9999"
              />
            </div>

            {/* Região */}
            <div className="space-y-2">
              <label htmlFor="regiao" className="block text-sm font-medium text-foreground">
                Região a Tratar *
              </label>
              <select
                id="regiao"
                name="regiao"
                required
                value={formData.regiao}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground"
              >
                <option value="">Selecione uma região</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Histórico */}
            <div className="space-y-2">
              <label htmlFor="historico" className="block text-sm font-medium text-foreground">
                Já fez criolipólise antes?
              </label>
              <select
                id="historico"
                name="historico"
                value={formData.historico}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground"
              >
                <option value="">Selecione</option>
                <option value="nao">Nunca fiz</option>
                <option value="sim-uma">Sim, uma vez</option>
                <option value="sim-varias">Sim, mais de uma vez</option>
              </select>
            </div>

            {/* Horário */}
            <div className="space-y-2">
              <label htmlFor="horario" className="block text-sm font-medium text-foreground">
                Melhor Horário *
              </label>
              <select
                id="horario"
                name="horario"
                required
                value={formData.horario}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground"
              >
                <option value="">Selecione um horário</option>
                {scheduleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Comorbidades */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="comorbidades" className="block text-sm font-medium text-foreground">
                Possui alguma condição de saúde relevante?
              </label>
              <input
                type="text"
                id="comorbidades"
                name="comorbidades"
                value={formData.comorbidades}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                placeholder="Ex: diabetes, problemas circulatórios, etc."
              />
            </div>

            {/* Objetivo */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="objetivo" className="block text-sm font-medium text-foreground">
                Qual seu principal objetivo? *
              </label>
              <textarea
                id="objetivo"
                name="objetivo"
                required
                rows={3}
                value={formData.objetivo}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground resize-none"
                placeholder="Descreva brevemente o que você espera alcançar com o tratamento..."
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-accent group inline-flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Pré-Avaliação
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              Ao enviar, você será redirecionada ao WhatsApp para finalizar o agendamento.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
