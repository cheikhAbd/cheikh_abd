"use client";
import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const t = useTranslations("education");
  const items = t.raw("items") as any[];

  return (
    <section id="education" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 animate-fade-in-left">
        <GraduationCap className="text-primary" size={24} />
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-sm mb-1">{item.degree}</h3>
            <p className="text-primary text-sm font-medium">{item.school}</p>
            <p className="text-muted-foreground text-xs">{item.location}</p>
            <span className="inline-block mt-2 text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}