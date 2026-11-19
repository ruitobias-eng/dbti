
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageContext";
import { useTheme } from "@/components/ThemeContext";

export default function Team() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Cargos da equipe
  const roles = [
    "Engenheiro Automação",
    "Engenheiro Computação",
    "Engenheiro Elétrico",
    "Analista Infraestrutura",
  ];

  // Paletas de cores por tema
  const colorsByTheme: Record<string, {
    primary: string;
    bgSection: string;
    bgCard: string;
    borderCard: string;
    textMain: string;
    textSecondary: string;
    glow: string;
  }> = {
    light: {
      primary: "#FACC15",
      bgSection: "bg-white",
      bgCard: "#F3F4F6",
      borderCard: "#E5E7EB",
      textMain: "#000000",
      textSecondary: "#374151",
      glow: "bg-yellow-400/10 blur-3xl",
    },
    dark: {
      primary: "#FACC15",
      bgSection: "bg-black",
      bgCard: "#18181B",
      borderCard: "#27272A",
      textMain: "#FFFFFF",
      textSecondary: "#D1D5DB",
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

        {/* Cards de cargos */}
        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
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
            >
              <Card
                className="h-full transition-all duration-300 group border-2 hover:scale-[1.02]"
                style={{
                  backgroundColor: colors.bgCard,
                  borderColor: colors.borderCard,
                }}
              >
                <CardContent className="p-10 flex items-center justify-center min-h-[180px]">
                  <div className="text-center">

                    {/* Detalhe visual */}
                    <div
                      className="h-1 w-16 mx-auto mb-6"
                      style={{
                        backgroundColor: colors.primary,
                        boxShadow: `0 0 15px ${colors.primary}66`,
                      }}
                    />

                    {/* Cargo */}
                    <h3
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: colors.textMain }}
                    >
                      {role}
                    </h3>

                    {/* Linha inferior */}
                    <div
                      className="h-1 w-10 mx-auto mt-6 opacity-50"
                      style={{
                        backgroundColor: colors.primary,
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
