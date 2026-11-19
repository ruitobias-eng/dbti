
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageContext";
import { useTheme } from "@/components/ThemeContext";

export default function Team() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Especialidades da equipe
  const members = [
    {
      role: "Engenheiro Automação",
      area: "Automação Industrial | CLPs | SCADA | Indústria 4.0",
      description:
        "Atuação em soluções de automação industrial, desenvolvimento e integração de sistemas de controle, programação de CLPs, supervisórios SCADA e redes industriais. Foco em otimização de processos, eficiência operacional e integração de tecnologias para ambientes industriais inteligentes.",
    },
    {
      role: "Engenheiro Computação",
      area: "Engenharia | Inovação Tecnológica | BI",
      description:
        "Especialista em soluções tecnológicas para engenharia de computação, IoT e sistemas embarcados, com sólida experiência em integração de sistemas, engenharia de computação e análise de dados aplicada ao setor financeiro. Combinando expertise técnica e visão estratégica, atua na interseção entre tecnologia e finanças, entregando projetos com eficiência e inovação.",
    },
    {
      role: "Engenheiro Elétrico",
      area: "Engenharia Elétrica | Sistemas Elétricos | Automação",
      description:
        "Atuação em projetos de engenharia elétrica, desenvolvimento e integração de sistemas elétricos, instalações, comandos e painéis de controle. Foco em segurança, confiabilidade, eficiência energética e soluções tecnológicas aplicadas a ambientes industriais e corporativos.",
    },
    {
      role: "Analista Infraestrutura",
      area: "TI | Infraestrutura | Cloud | Cibersegurança",
      description:
        "Atuação em tecnologia da informação e infraestrutura de TI, administração de servidores, redes, ambientes em nuvem, bancos de dados e segurança da informação. Foco em disponibilidade, desempenho, continuidade operacional e proteção dos ambientes tecnológicos.",
    },
  ];

  // Paletas de cores por tema
  const colorsByTheme: Record<string, {
    primary: string;
    bgSection: string;
    bgCard: string;
    borderCard: string;
    textMain: string;
    textSecondary: string;
    accentText: string;
    glow: string;
  }> = {
    light: {
      primary: "#FACC15",
      bgSection: "bg-white",
      bgCard: "#F3F4F6",
      borderCard: "#E5E7EB",
      textMain: "#000000",
      textSecondary: "#374151",
      accentText: "#EAB308",
      glow: "bg-yellow-400/10 blur-3xl",
    },
    dark: {
      primary: "#FACC15",
      bgSection: "bg-black",
      bgCard: "#18181B",
      borderCard: "#27272A",
      textMain: "#FFFFFF",
      textSecondary: "#D1D5DB",
      accentText: "#FDE047",
      glow: "bg-yellow-500/10 blur-3xl",
    },
  };

  const colors = colorsByTheme[theme] || colorsByTheme.light;

  return (
    <section
      id="equipe"
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${colors.bgSection}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 48%, ${colors.primary} 49%, ${colors.primary} 51%, transparent 52%)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div
              className="px-6 py-2 border-2 rounded-full bg-opacity-20"
              style={{
                backgroundColor: `${colors.primary}33`,
                borderColor: colors.primary,
              }}
            >
              <span
                className="font-bold text-sm tracking-wider"
                style={{ color: colors.primary }}
              >
                {t.team.badge}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span style={{ color: colors.textMain }}>
              {t.team.title}{" "}
            </span>
            <span style={{ color: colors.primary }}>
              {t.team.titleHighlight}
            </span>
          </h2>

          <div
            className="h-1 w-48 mx-auto mb-6"
            style={{
              background: `linear-gradient(to right, transparent, ${colors.primary}, transparent)`,
            }}
          />

          <p
            className="text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {t.team.description}
          </p>
        </motion.div>

        {/* Cards da equipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {members.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className="h-full transition-all duration-300 group border-2 hover:scale-[1.01]"
                style={{
                  backgroundColor: colors.bgCard,
                  borderColor: colors.borderCard,
                }}
              >
                <CardContent className="p-8 md:p-10">

                  {/* Cabeçalho do card */}
                  <div className="flex items-start gap-6 mb-8">

                    {/* Elemento visual amarelo */}
                    <div className="relative flex-shrink-0">
                      <div
                        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center relative z-10"
                        style={{
                          backgroundColor: colors.primary,
                          boxShadow: `0 0 25px ${colors.primary}55`,
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-full border-[5px]"
                          style={{
                            borderColor: "#000000",
                          }}
                        />
                      </div>

                      <div
                        className={`absolute inset-0 rounded-2xl ${colors.glow} scale-95`}
                      />
                    </div>

                    {/* Cargo e especialidade */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-3"
                        style={{ color: colors.textMain }}
                      >
                        {member.role}
                      </h3>

                      <p
                        className="font-semibold text-sm md:text-base leading-relaxed mb-4"
                        style={{ color: colors.primary }}
                      >
                        {member.area}
                      </p>

                      <div
                        className="h-1 w-16"
                        style={{
                          backgroundColor: colors.primary,
                        }}
                      />
                    </div>
                  </div>

                  {/* Descrição profissional */}
                  <p
                    className="leading-relaxed text-base md:text-lg"
                    style={{ color: colors.textSecondary }}
                  >
                    {member.description}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
