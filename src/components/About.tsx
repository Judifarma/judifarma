import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Calendar } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50.000+",
      label: "Clientes Atendidos",
      description: "Famílias que confiam em nossos serviços"
    },
    {
      icon: Calendar,
      number: "20+",
      label: "Anos de Experiência", 
      description: "Décadas cuidando da saúde da comunidade"
    },
    {
      icon: Award,
      number: "15+",
      label: "Prêmios & Certificações",
      description: "Reconhecimento pela qualidade dos serviços"
    },
    {
      icon: MapPin,
      number: "3",
      label: "Unidades",
      description: "Localizações estratégicas na cidade"
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
                Fundada em 2004, a JudiFarma nasceu com o propósito de oferecer 
                saúde e bem-estar para toda a família, sempre priorizando a qualidade 
                dos produtos e o atendimento humanizado.
              </p>
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Nossa missão é ser mais que uma farmácia - somos parceiros da sua saúde. 
                  Com uma equipe de farmacêuticos experientes e dedicados, oferecemos não 
                  apenas medicamentos, mas orientação profissional e cuidado personalizado.
                </p>
                <p>
                  Investimos constantemente em tecnologia e capacitação para garantir que 
                  nossos clientes recebam sempre o melhor atendimento, com segurança, 
                  agilidade e confiabilidade em todos os nossos serviços.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Nossos Valores:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Excelência no atendimento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Compromisso com a saúde</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Transparência e ética</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Inovação constante</span>
                  </div>
                </div>
              </div>

              <Button variant="medical" size="lg">
                Conheça Nossa História
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

        {/* Team highlight */}
        <div className="mt-20">
          <div className="bg-gradient-secondary p-12 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nossa Equipe Especializada
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contamos com farmacêuticos registrados no CRF, técnicos especializados 
              e atendentes treinados para oferecer o melhor suporte à sua saúde.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="text-card-foreground font-medium">Dr. João Silva - CRF 12345</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="text-card-foreground font-medium">Dra. Maria Santos - CRF 67890</span>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border border-border">
                <span className="text-card-foreground font-medium">Dr. Carlos Lima - CRF 11223</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;