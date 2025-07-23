import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(11) 9999-8888</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Rua da Saúde, 123 - São Paulo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 8h-20h | Sáb: 8h-18h</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">+</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">JudiFarma</h1>
              <p className="text-sm text-muted-foreground">Sua Saúde em Primeiro Lugar</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <Button variant="medical" size="lg" className="hidden md:inline-flex">
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;