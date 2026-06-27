import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Instagram,
  Facebook,
  MessageCircle
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">+</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">JudiFarma</h3>
                <p className="text-xs opacity-60">{t("footer.tagline")}</p>
              </div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              {t("footer.about")}
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Instagram, href: "https://instagram.com/judifarma", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com/judifarma", label: "Facebook" },
                { Icon: MessageCircle, href: "https://wa.me/244945517448", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/15 transition-all duration-300">
                  <Icon className="w-4 h-4 opacity-70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: t("nav.home") },
                { href: "/catalogo", label: t("nav.products") },
                { href: "/sobre", label: t("footer.aboutUs") },
                { href: "/contacto", label: t("nav.contact") },
                { href: "#", label: t("footer.privacy") }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="opacity-50 hover:opacity-100 transition-opacity duration-300 hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">{t("footer.products")}</h4>
            <ul className="space-y-3 text-sm">
              {[
                t("services.items.generics.title"),
                t("services.items.brand.title"),
                t("about.tagDiverse"),
                t("hero.national"),
                t("services.items.cold.title"),
                t("services.items.quality.title"),
              ].map((item, i) => (
                <li key={i} className="opacity-50">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">{t("footer.contact")}</h4>
            <div className="space-y-4 text-sm">
              {[
                { icon: Phone, primary: "+244 945 490 359", secondary: t("contact.hours") },
                { icon: MessageCircle, primary: "+244 945 517 448", secondary: t("contact.whatsapp") },
                { icon: Mail, primary: "judifarma6@gmail.com" },
                { icon: MapPin, primary: "Bairro Sanzala, Viana", secondary: "Luanda - Angola" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-50" />
                  <div>
                    <p className="font-medium opacity-80">{item.primary}</p>
                    {item.secondary && <p className="opacity-40 text-xs">{item.secondary}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="bg-gradient-primary p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-primary-foreground text-sm">{t("footer.ctaTitle")}</p>
                  <p className="text-xs text-primary-foreground/60">{t("footer.ctaSub")}</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-lg rounded-xl px-6">
                <a href="https://wa.me/244945517448" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp: +244 945 517 448
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-50">
            <span>{t("footer.rights")}</span>
            <div className="flex items-center gap-1.5">
              <span>{t("footer.madeWith")}</span>
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              <span>{t("footer.forHealth")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
