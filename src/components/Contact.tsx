"use client";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");
  const social = useTranslations("social");

  return (
    <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
        <Mail className="text-primary" size={24} />
        {t("title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <a href={`mailto:${t("email")}`}
            className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
            <Mail size={18} className="text-primary" />
            {t("email")}
          </a>
          <a href={`tel:${t("phone")}`}
            className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
            <Phone size={18} className="text-primary" />
            {t("phone")}
          </a>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            {t("location")}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-4">Réseaux sociaux</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Github, label: `@${social("github")}`, href: `https://github.com/${social("github")}` },
              { icon: Twitter, label: `@${social("twitter")}`, href: `https://twitter.com/${social("twitter")}` },
              { icon: Linkedin, label: social("linkedin"), href: `https://linkedin.com/in/${social("linkedin")}` },
              { icon: Facebook, label: social("facebook"), href: `https://facebook.com/${social("facebook")}` },
            ].map(({ icon: Icon, label, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-16">
        © {new Date().getFullYear()} Cheikh Abdellahi
      </p>
    </section>
  );
}