"use client";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Briefcase, Mail, Phone, Github, Twitter, Linkedin, Facebook, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const nav = useTranslations("nav");
  const contact = useTranslations("contact");
  const social = useTranslations("social");

  return (
    <section className="pt-28 pb-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Avatar */}
        <div className="animate-scale-in relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary shadow-xl shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Cheikh Abdellahi"
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-start">
          <h1 className="animate-fade-in-up delay-100 text-4xl font-bold mb-1">{t("name")}</h1>
          <p className="animate-fade-in-up delay-200 text-xl text-primary font-semibold mb-3">{t("title")}</p>
          <p className="animate-fade-in-up delay-300 text-muted-foreground mb-4 max-w-xl">{t("description")}</p>

          <div className="animate-fade-in-up delay-400 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><MapPin size={14} />{t("location")}</span>
            <span className="flex items-center gap-1"><Briefcase size={14} />{t("available")}</span>
            <span className="flex items-center gap-1"><Mail size={14} />{contact("email")}</span>
            <span className="flex items-center gap-1"><Phone size={14} />{contact("phone")}</span>
          </div>

          {/* Social + Download */}
          <div className="animate-fade-in-up delay-400 flex flex-wrap justify-center md:justify-start gap-3">
            <a href={`https://github.com/${social("github")}`} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href={`https://twitter.com/${social("twitter")}`} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
              <Twitter size={18} />
            </a>
            <a href={`https://linkedin.com/in/${social("linkedin")}`} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href={`https://facebook.com/${social("facebook")}`} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook size={18} />
            </a>
            <a href="/cv.pdf" download
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              <Download size={16} />
              {nav("download")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}