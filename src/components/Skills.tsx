"use client";
import { useTranslations } from "next-intl";
import { Code2, Server, Database, Shield, Wrench, Cpu } from "lucide-react";

const skillsData = {
  frontend: [
    "Angular",
    "React",
    "Next.js",
    "Flutter",
    "TypeScript",
    "Tailwind CSS",
  ],
  backend: [
    "Spring Boot",
    "Django REST API",
    "Flask API",
    "Strapi CMS",
    "Next.js API Routes",
    "Prisma ORM",
  ],
  database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
  security: [
    "Threat Modeling (STRIDE, OWASP Top 10)",
    "OWASP ZAP",
    "Sécurisation des API",
    "Gestion des vulnérabilités",
    "TryHackMe & Hack The Box",
  ],
  tools: [
    "Git / GitHub / GitLab",
    "VS Code",
    "IntelliJ",
    "Android Studio",
    "Keycloak",
    "Mux Video",
    "Clerk",
    "Neon DB",
    "Vercel",
  ],
  other: [
    "UML / Merise",
    "CCNA",
    "Machine Learning supervisé",
    "Architecture Microservices",
    "i18n / RTL",
  ],
};

const icons: any = {
  frontend: Code2,
  backend: Server,
  database: Database,
  security: Shield,
  tools: Wrench,
  other: Cpu,
};

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
        <Code2 className="text-primary" size={24} />
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {(Object.keys(skillsData) as (keyof typeof skillsData)[]).map(
          (category) => {
            const Icon = icons[category];
            return (
              <div
                key={category}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-sm mb-4 flex items-center gap-2 text-primary">
                  <Icon size={16} />
                  {t(category as any)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData[category].map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full cursor-default transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
