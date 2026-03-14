"use client";
import { useTranslations } from "next-intl";
import { Languages } from "lucide-react";

const levelMap: Record<string, number> = {
  "Langue maternelle": 100, "Native language": 100, "اللغة الأم": 100,
  "Intermédiaire avancé": 75, "Upper intermediate": 75, "متوسط متقدم": 75,
  "Intermédiaire": 55, "Intermediate": 55, "متوسط": 55,
};

export default function LanguagesSection() {
  const t = useTranslations("languages");
  const items = t.raw("items") as { name: string; level: string }[];

  return (
    <section id="languages" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
        <Languages className="text-primary" size={24} />
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold">{item.name}</span>
              <span className="text-xs text-muted-foreground">{item.level}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-700"
                style={{ width: `${levelMap[item.level] ?? 50}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}