import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Truck, MapPin, ShieldCheck } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Truck,
      number: "2-3h",
      label: "Tempo de Entrega",
      description: "Entrega rápida em Luanda"
    },
    {
      icon: ShieldCheck,
      number: "BPD",
      label: "Certificação",
      description: "Boas Práticas de Distribuição"
    },
    {
      icon: Award,
      number: "100%",
      label: "Qualidade Garantida",
      description: "Produtos certificados e rastreados"
    },
    {
      icon: MapPin,
      number: "Nacional",
      label: "Cobertura",
      description: "Distribuição em Luanda e todo o país"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Sobre a <span className="text-primary">JudiFarma</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Fundada em 26 de Setembro de 2024, a JudiFarma é uma distribuidora farmacêutica 
                dedicada ao fornecimento eficiente e seguro de medicamentos, contribuindo para a 
                melhoria da saúde da população angolana.
              </p>
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Missão:</strong> Garantir o fornecimento eficiente e seguro de medicamentos, 
                  contribuindo para a melhoria da saúde da população.
                </p>
                <p>
                  <strong className="text-foreground">Visão:</strong> Ser uma distribuidora farmacêutica de referência em Angola, 
                  reconhecida pela qualidade, confiança e eficiência logística.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Nossos Diferenciais:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Distribuição rápida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Produtos de qualidade garantida</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Atendimento próximo ao cliente</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Cadeia de frio controlada</span>
                  </div>
                </div>
              </div>

              <Button variant="medical" size="lg">
                Solicitar Cotação
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-medium transition-all duration-300 border-border bg-card">
                  <CardContent className="space-y-4 p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-primary">
                        {stat.number}
                      </h3>
                      <p className="font-semibold text-card-foreground">
                        {stat.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Products highlight */}
        <div className="mt-20">
          <div className="bg-gradient-secondary p-12 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nosso Portfólio de Produtos
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Trabalhamos com uma ampla gama de produtos farmacêuticos para atender 
              farmácias, clínicas e hospitais em toda Angola.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="text-card-foreground font-medium">Medicamentos Genéricos</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="text-card-foreground font-medium">Medicamentos de Marca</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="text-card-foreground font-medium">Produtos Farmacêuticos Diversos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
