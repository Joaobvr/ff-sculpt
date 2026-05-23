import { useState } from "react";
import { GraduationCap, Heart, Award, UserCheck } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const pillars = [
  {
    icon: GraduationCap,
    title: "Foco na saúde da mulher",
    text: "Médica com pós-graduação em Ginecologia e Obstetrícia (não especialista).",
  },
  {
    icon: Heart,
    title: "Estética íntima e corporal",
    text: "Experiência consolidada em estética íntima feminina e corporal.",
  },
  {
    icon: Award,
    title: "Tratamento exclusivo",
    text: "Uma das poucas médicas do Brasil que dominam a técnica FFSculpt.",
  },
  {
    icon: UserCheck,
    title: "Tratamento integral",
    text: "Avaliação individual e indicação personalizada para cada paciente.",
  },
];

const allServices = [
  "Foco na saúde da mulher",
  "Estética íntima e corporal",
  "Técnica FFSculpt",
  "Tratamento personalizado",
  "Consulta de rotina",
  "Prevenção",
  "Climatério · Menopausa",
  "Síndrome dos Ovários Policísticos",
  "Endometriose",
  "Emagrecimento",
  "Inserção de DIU",
  "Implanon",
  "Reposição Hormonal",
  "Implantes Hormonais",
  "Terapia Injetável",
  "FFSculpt · Criolipólise",
  "Enzimas Corporais",
  "Estética Íntima e Funcional",
];

const DoctorSection = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Pillars */}
      <section className="section-padding bg-champagne-light">
        <div className="container-wide">
          <div className="max-w-2xl fade-up">
            <span className="eyebrow">Quatro pilares</span>
            <h2 className="heading-section mt-3">
              Por que tratar com a <em>Dra. Isabella</em>?
            </h2>
            <div className="hairline" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[14px] lg:gap-[18px] mt-10">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="card-soft card-soft-hover fade-up"
                style={{ padding: "22px 18px" }}
              >
                <p.icon
                  strokeWidth={1.2}
                  style={{
                    width: 32,
                    height: 32,
                    color: "var(--champagne-hex)",
                    marginBottom: 14,
                  }}
                />
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    marginBottom: 7,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.77rem", color: "var(--text-secondary-hex)", lineHeight: 1.65 }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor profile + accordion */}
      <section className="section-padding bg-cream">
        <div className="container-wide grid md:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <div
            className="relative fade-up overflow-hidden"
            style={{
              borderRadius: 16,
              aspectRatio: "3 / 4",
            }}
          >
            <img
              src={doctorImage}
              alt="Dra. Isabella Rodrigues Tovar"
              className="w-full h-full"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
            <div className="name-badge">
              <div className="name">Dra. Isabella Rodrigues Tovar</div>
              <div className="crm">CRM-GO 27286</div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-up">
            <span className="eyebrow">Sua médica</span>
            <h2 className="heading-section mt-3">
              Cuidado integral, com olhar <em>feminino</em>.
            </h2>
            <div className="hairline" />
            <p className="text-elegant">
              Combinando formação médica rigorosa com sensibilidade para as necessidades
              femininas, a Dra. Isabella oferece uma experiência de tratamento que vai
              além da estética — cuidando de você de forma integral.
            </p>

            <div style={{ marginTop: 32 }}>
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  border: 0,
                  padding: 0,
                  paddingBottom: 4,
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--champagne-hex)",
                  borderBottom: "1px solid var(--champagne-line-hex)",
                }}
              >
                Todos os atendimentos
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: servicesOpen ? 600 : 0,
                  paddingTop: servicesOpen ? 20 : 0,
                  paddingBottom: servicesOpen ? 20 : 0,
                  transition: "max-height 0.4s ease, padding 0.4s ease",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {allServices.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: "0.74rem",
                        color: "var(--text-secondary-hex)",
                        border: "1px solid var(--border-hex)",
                        borderRadius: 100,
                        padding: "5px 14px",
                        background: "var(--warm-white-hex)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorSection;