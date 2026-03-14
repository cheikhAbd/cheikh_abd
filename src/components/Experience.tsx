"use client";
import { useTranslations } from "next-intl";
import { Briefcase, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Experience() {
  const t = useTranslations("experience");
  const items = t.raw("items") as any[];
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 animate-fade-in-left">
        <Briefcase className="text-primary" size={24} />
        {t("title")}
      </h2>
      <div className="relative border-s border-border ps-8 space-y-10">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            className="relative opacity-0 translate-y-6 transition-all duration-500"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="absolute -inset-s-[2.15rem] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background transition-transform hover:scale-125" />
            <div className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-base">{item.role}</h3>
                  <p className="text-primary text-sm font-medium">{item.company}</p>
                  <p className="text-muted-foreground text-xs">{item.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full whitespace-nowrap">
                    {item.period}
                  </span>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-primary hover:opacity-70 transition-opacity">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}