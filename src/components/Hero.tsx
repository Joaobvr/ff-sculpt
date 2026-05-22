import heroBg from "@/assets/hero-bg.png";

const scrollToForm = () => {
  if (typeof (window as any).fbq === "function") {
    (window as any).fbq("track", "Lead");
  }
  document.getElementById("pre-avaliacao")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <section className="relative bg-cream pt-16">
      <div className="flex flex-col md:flex-row min-h-[100vh]">
        {/* Content */}
        <div className="flex-1 flex items-center" style={{ padding: "36px 28px 60px" }}>
          <div className="max-w-xl mx-auto md:mx-0 md:px-0 md:py-20 md:pl-16 lg:pl-24">
            <span className="eyebrow mb-3">Método FFSculpt · Goiânia</span>
            <h1 className="heading-hero mt-3">
              Redefina suas curvas com segurança, eficiência, sem cortes e sem cicatrizes
              com o <em>Método FFSculpt.</em>
            </h1>
            <div className="hairline" />
            <p className="text-elegant mb-7 max-w-lg">
              Dra. Isabella Tovar é uma das médicas do Brasil que oferece a metodologia
              não invasiva que vem obtendo resultados incríveis na eliminação de gordura
              localizada, redução de medidas, tratamento de lipedema e retração de pele:
              o método FF Sculpt.
            </p>
            <button onClick={scrollToForm} className="btn-primary">
              Quero minha pré-avaliação
            </button>
            <p className="text-tertiary-ink" style={{ fontSize: "0.72rem", marginTop: 22 }}>
              Avaliação médica · Sem cortes · Sem cicatrizes
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="relative md:flex-none md:basis-[45%] md:h-screen">
          <img
            src={heroBg}
            alt="Dra. Isabella Tovar"
            className="w-full h-[60vh] md:h-screen object-cover"
            style={{ objectPosition: "center top" }}
          />
          {/* Mobile gradient */}
          <div
            className="absolute inset-x-0 bottom-0 h-[45%] md:hidden pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--cream-hex), transparent)",
            }}
          />
          <div className="name-badge">
            <div className="name">Dra. Isabella Rodrigues Tovar</div>
            <div className="crm">CRM-GO 27286</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;