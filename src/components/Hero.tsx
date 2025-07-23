import { Button } from "@/components/ui/button";
import { Shield, Clock, Heart, Phone } from "lucide-react";
import heroImage from "@/assets/pharmacy-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center bg-gradient-secondary">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Sua <span className="text-primary">Farmácia</span> de Confiança
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Mais de 20 anos cuidando da sua saúde com medicamentos de qualidade, 
              atendimento personalizado e os melhores preços da região.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Medicamentos Certificados</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">Atendimento Rápido</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">Cuidado Personalizado</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="medical" size="lg" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Fale Conosco Agora
            </Button>
            <Button variant="outline" size="lg">
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl transform rotate-6"></div>
          <img 
            src={heroImage} 
            alt="Farmácia JudiFarma - Exterior moderno e limpo"
            className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-medium"
          />
          
          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border z-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold">20+</span>
              </div>
              <div>
                <p className="font-semibold text-card-foreground">Anos de Experiência</p>
                <p className="text-sm text-muted-foreground">Cuidando da sua saúde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;