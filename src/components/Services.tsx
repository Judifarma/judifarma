import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Pill, 
  Truck, 
  Warehouse, 
  Thermometer, 
  Clock, 
  ShieldCheck,
  Package,
  ClipboardCheck
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Medicamentos Genéricos",
      description: "Distribuição de medicamentos genéricos de qualidade certificada para farmácias, clínicas e hospitais.",
      features: ["Produtos certificados", "Preços competitivos", "Stock permanente"]
    },
    {
      icon: Package,
      title: "Medicamentos de Marca",
      description: "Portfólio completo de medicamentos de marca com garantia de procedência e qualidade.",
      features: ["Marcas reconhecidas", "Garantia de origem", "Variedade de produtos"]
    },
    {
      icon: Truck,
      title: "Distribuição Rápida",
      description: "Entrega em Luanda em 2-3 horas e distribuição nacional com logística eficiente.",
      features: ["Entrega em 2-3h em Luanda", "Cobertura nacional", "Rastreamento de entregas"]
    },
    {
      icon: Thermometer,
      title: "Cadeia de Frio Controlada",
      description: "Monitoramento rigoroso de temperatura para garantir a integridade dos medicamentos.",
      features: ["Monitoramento contínuo", "Controle de temperatura", "Conformidade regulatória"]
    },
    {
      icon: Warehouse,
      title: "Armazéns Próprios",
      description: "Infraestrutura de armazenamento moderna com condições ideais para todos os tipos de medicamentos.",
      features: ["Armazéns certificados", "Controle de validade", "Gestão de stock eficiente"]
    },
    {
      icon: ClipboardCheck,
      title: "Controle de Qualidade",
      description: "Certificação em Boas Práticas de Distribuição (BPD/GDP) e política de qualidade documentada.",
      features: ["Certificação BPD/GDP", "Política de qualidade", "Rastreabilidade total"]
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
            Garantimos o fornecimento eficiente e seguro de medicamentos, com distribuição 
            rápida e qualidade certificada em toda Angola.
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <Clock className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              Precisa de Medicamentos com Urgência?
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Entrega rápida em Luanda em 2-3 horas. Entre em contacto connosco agora!
            </p>
            <Button variant="secondary" size="lg">
              WhatsApp: 945 517 448
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
