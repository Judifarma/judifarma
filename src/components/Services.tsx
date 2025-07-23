import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pill, 
  Stethoscope, 
  Heart, 
  Users, 
  Clock, 
  ShieldCheck,
  Thermometer,
  Baby
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Medicamentos Especiais",
      description: "Medicamentos controlados, genéricos e de marca com garantia de qualidade e procedência.",
      features: ["Receituário digital", "Controle de estoque", "Orientação farmacêutica"]
    },
    {
      icon: Stethoscope,
      title: "Consultas Farmacêuticas", 
      description: "Atendimento personalizado com nossos farmacêuticos qualificados para orientação sobre medicamentos.",
      features: ["Orientação posológica", "Interações medicamentosas", "Acompanhamento terapêutico"]
    },
    {
      icon: Heart,
      title: "Saúde & Bem-estar",
      description: "Produtos e serviços para cuidar da sua saúde e qualidade de vida.",
      features: ["Suplementos vitamínicos", "Produtos naturais", "Cosméticos farmacêuticos"]
    },
    {
      icon: Thermometer,
      title: "Aferição de Pressão",
      description: "Serviço gratuito de aferição de pressão arterial com equipamentos calibrados.",
      features: ["Equipamentos certificados", "Atendimento profissional", "Histórico de medições"]
    },
    {
      icon: Baby,
      title: "Infantil & Materno",
      description: "Linha completa de produtos para bebês, crianças e gestantes.",
      features: ["Fórmulas infantis", "Fraldas e higiene", "Produtos para gestantes"]
    },
    {
      icon: Users,
      title: "Programas de Fidelidade",
      description: "Descontos especiais e benefícios exclusivos para nossos clientes.",
      features: ["Cartão fidelidade", "Descontos progressivos", "Promoções exclusivas"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços farmacêuticos para cuidar 
            da sua saúde com excelência e dedicação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const animationDelay = `${index * 0.1}s`;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in hover:animate-bounce-subtle" style={{animationDelay}}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-pulse-glow transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground animate-float" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ShieldCheck className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4 hover:animate-pulse transition-all duration-300">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <Clock className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              Atendimento de Emergência
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Precisou de medicamentos urgentes? Entre em contato conosco 24 horas por dia.
            </p>
            <Button variant="secondary" size="lg">
              WhatsApp 24h: (11) 99999-8888
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;