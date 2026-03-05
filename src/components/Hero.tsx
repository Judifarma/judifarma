import { Button } from "@/components/ui/button";
import { Shield, Clock, Truck, Phone } from "lucide-react";
import heroImage from "@/assets/judifarma-main.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center bg-gradient-secondary">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Sua <span className="text-primary">Distribuidora Farmacêutica</span> de Confiança
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Distribuição rápida de medicamentos genéricos, de marca e produtos farmacêuticos 
              para farmácias, clínicas e hospitais em toda Angola.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-4 animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="text-center hover:animate-bounce-subtle">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Qualidade Garantida</p>
            </div>
            <div className="text-center hover:animate-bounce-subtle">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2 hover:animate-pulse-glow transition-all duration-300">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">Entrega em 2-3h</p>
            </div>
            <div className="text-center hover:animate-bounce-subtle">
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-2 hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Distribuição Nacional</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button variant="medical" size="lg" className="flex items-center gap-2 hover:animate-pulse-glow">
              <Phone className="w-5 h-5" />
              Solicitar Cotação
            </Button>
            <Button variant="outline" size="lg">
              Conheça Nosso Portfólio
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-scale-in" style={{animationDelay: '0.3s'}}>
          <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl transform rotate-6 animate-float"></div>
          <img 
            src={heroImage} 
            alt="JudiFarma - Distribuidora Farmacêutica em Angola"
            className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-medium hover:shadow-lg transition-all duration-500 hover:scale-105"
          />
          
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border z-20 animate-slide-in-right hover:animate-bounce-subtle">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">BPD</span>
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Certificação BPD</p>
                <p className="text-sm text-muted-foreground">Boas Práticas de Distribuição</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
