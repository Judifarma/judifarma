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
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">+</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">JudiFarma</h3>
                <p className="text-sm opacity-90">Distribuidora Farmacêutica</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-xs">
              Distribuidora farmacêutica de referência em Angola, garantindo o fornecimento 
              eficiente e seguro de medicamentos para farmácias, clínicas e hospitais.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="bg-background/10 border-background/20 text-background hover:bg-background/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-background/10 border-background/20 text-background hover:bg-background/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="bg-background/10 border-background/20 text-background hover:bg-background/20">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" className="opacity-80 hover:opacity-100 transition-opacity">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="opacity-80 hover:opacity-100 transition-opacity">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="opacity-80 hover:opacity-100 transition-opacity">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Produtos</h4>
            <ul className="space-y-3 text-sm">
              <li className="opacity-80">Medicamentos Genéricos</li>
              <li className="opacity-80">Medicamentos de Marca</li>
              <li className="opacity-80">Produtos Farmacêuticos</li>
              <li className="opacity-80">Distribuição Nacional</li>
              <li className="opacity-80">Cadeia de Frio</li>
              <li className="opacity-80">Controle de Qualidade</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                <div>
                  <p className="font-medium">945 490 359</p>
                  <p className="opacity-80">Seg-Sex: 08h às 16h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                <div>
                  <p className="font-medium">945 517 448</p>
                  <p className="opacity-80">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                <div>
                  <p className="font-medium">judifarma6@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                <div>
                  <p className="font-medium">Bairro Sanzala, Viana</p>
                  <p className="opacity-80">Luanda - Angola</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact bar */}
        <div className="border-t border-background/20 py-6">
          <div className="bg-gradient-accent p-6 rounded-xl text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-accent-foreground" />
                <div className="text-left">
                  <p className="font-semibold text-accent-foreground">Solicite uma Cotação</p>
                  <p className="text-sm text-accent-foreground/80">Atendemos farmácias, clínicas e hospitais</p>
                </div>
              </div>
              <Button variant="secondary" size="lg" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp: 945 517 448
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="opacity-80">© 2024 JudiFarma. Todos os direitos reservados. NIF: 5002008459</span>
            </div>
            <div className="flex items-center space-x-2 opacity-80">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>para a saúde de Angola</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
