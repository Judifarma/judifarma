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

const Footer = () => {
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
                <p className="text-xs opacity-60">Distribuidora Farmacêutica</p>
              </div>
            </div>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Distribuidora farmacêutica de referência em Angola, garantindo o fornecimento
              eficiente e seguro de medicamentos.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/15 transition-all duration-300">
                  <Icon className="w-4 h-4 opacity-70" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#servicos", label: "Nossos Serviços" },
                { href: "#sobre", label: "Sobre Nós" },
                { href: "#contato", label: "Contacto" },
                { href: "#", label: "Política de Privacidade" }
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
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">Produtos</h4>
            <ul className="space-y-3 text-sm">
              {["Medicamentos Genéricos", "Medicamentos de Marca", "Produtos Farmacêuticos", "Distribuição Nacional", "Cadeia de Frio", "Controle de Qualidade"].map((item, i) => (
                <li key={i} className="opacity-50">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider opacity-80">Contacto</h4>
            <div className="space-y-4 text-sm">
              {[
                { icon: Phone, primary: "945 490 359", secondary: "Seg-Sex: 08h às 16h" },
                { icon: MessageCircle, primary: "945 517 448", secondary: "WhatsApp" },
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
                  <p className="font-bold text-primary-foreground text-sm">Solicite uma Cotação</p>
                  <p className="text-xs text-primary-foreground/60">Atendemos farmácias, clínicas e hospitais</p>
                </div>
              </div>
              <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-lg rounded-xl px-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp: 945 517 448
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-50">
            <span>© 2024 JudiFarma. Todos os direitos reservados. NIF: 5002008459</span>
            <div className="flex items-center gap-1.5">
              <span>Feito com</span>
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              <span>para a saúde de Angola</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
