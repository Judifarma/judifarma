import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import logoJudifarma from "@/assets/logo-judifarma.png";

const Header = () => {
  return (
    <header className="bg-background shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border">
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>945 490 359</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Viana, Luanda - Angola</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 08h às 16h</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <a href="#inicio" className="flex items-center">
            <img 
              src={logoJudifarma} 
              alt="JudiFarma - Distribuidora Farmacêutica" 
              className="h-20 md:h-28 w-auto"
            />
          </a>

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
              Contacto
            </a>
          </nav>

          <Button variant="medical" size="lg" className="hidden md:inline-flex">
            Fale Connosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
