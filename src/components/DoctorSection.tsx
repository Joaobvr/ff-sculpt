import { useState } from "react";
import { GraduationCap, Heart, Award, UserCheck, Plus, Minus } from "lucide-react";
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

const accordionGroups = [
  {
    title: "Saúde da Mulher",
    items: [
      "Consulta de rotina",
      "Prevenção",
      "Climatério · Menopausa",
      "Síndrome dos Ovários Policísticos",
      "Endometriose",
    ],
  },
  {
    title: "Hormônios e Anticoncepção",
    items: [
      "Reposição Hormonal",
      "Implantes Hormonais",
      "Terapia Injetável",
      "Inserção de DIU",
      "Implanon",
      "Emagrecimento",
    ],
  },
  {
    title: "Estética e Harmonização",
    items: [
      "FFSculpt · Criolipólise",
      "Enzimas Corporais",
      "Estética Íntima e Funcional",
    ],
  },
];

const credChips = [
  "Foco na saúde da mulher",
  "Estética íntima e corporal",
  "Técnica FFSculpt",
  "Tratamento personalizado",
];

const DoctorSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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

            <ul className="mt-6 space-y-2">
              {credChips.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 999,
                      backgroundColor: "var(--champagne-hex)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "0.81rem", color: "var(--text-secondary-hex)" }}>
                    {c}
                  </span>
                </li>
              ))}
            </ul>

            {/* Accordion of all services */}
            <div className="mt-10" style={{ borderTop: "1px solid var(--border-hex)" }}>
              <p className="eyebrow mt-5 mb-2">Todos os atendimentos</p>
              {accordionGroups.map((g, i) => {
                const open = openIdx === i;
                return (
                  <div
                    key={g.title}
                    style={{ borderBottom: "1px solid var(--border-hex)" }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="w-full flex items-center justify-between text-left"
                      style={{ padding: "18px 0", background: "transparent", border: 0 }}
                    >
                      <span style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text-primary-hex)" }}>
                        {g.title}
                      </span>
                      {open ? (
                        <Minus size={18} style={{ color: "var(--champagne-hex)" }} />
                      ) : (
                        <Plus size={18} style={{ color: "var(--champagne-hex)" }} />
                      )}
                    </button>
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: open ? 400 : 0,
                        paddingBottom: open ? 18 : 0,
                        transition: "max-height 0.35s ease, padding-bottom 0.35s ease",
                      }}
                    >
                      <div className="flex flex-wrap gap-[7px]">
                        {g.items.map((it) => (
                          <span
                            key={it}
                            style={{
                              fontSize: "0.74rem",
                              color: "var(--text-secondary-hex)",
                              border: "1px solid var(--border-hex)",
                              borderRadius: 100,
                              padding: "5px 13px",
                              background: "var(--cream-hex)",
                            }}
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorSection;