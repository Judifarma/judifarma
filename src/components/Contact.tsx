import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Instagram,
  Facebook
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: "945 490 359",
      description: "Seg-Sex: 08h às 16h"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "945 517 448",
      description: "Envie a sua mensagem"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: "judifarma6@gmail.com",
      description: "Respondemos o mais breve possível"
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: "Bairro Sanzala, Município de Viana",
      description: "Província de Luanda, Angola"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Entre em Contacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite uma cotação ou entre em contacto connosco. Estamos prontos para 
            atender farmácias, clínicas e hospitais em toda Angola.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-card-foreground">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Media */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Siga-nos nas redes sociais para novidades e actualizações:
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Pedido de Cotação */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Solicitar Cotação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Nome / Empresa</label>
                    <Input placeholder="Nome da sua empresa ou instituição" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Telefone</label>
                    <Input placeholder="9XX XXX XXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Tipo de Instituição</label>
                    <Input placeholder="Farmácia, Clínica, Hospital..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Descrição do Pedido</label>
                  <Textarea 
                    placeholder="Descreva os medicamentos ou produtos que necessita..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button variant="medical" size="lg" className="w-full">
                  Enviar Pedido de Cotação
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">
            Nossa Localização
          </h3>
          <div className="max-w-xl mx-auto">
            <Card className="hover:shadow-medium transition-all duration-300 border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Sede - Viana, Luanda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Bairro Sanzala, sentido Cemitério de Viana, antes das Bombas da Sonangalp
                  </p>
                  <p className="text-muted-foreground">
                    Município de Viana, Província de Luanda
                  </p>
                  <div className="flex items-center space-x-2 text-primary">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">945 490 359</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Seg-Sex: 08h às 16h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <div className="bg-gradient-accent p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              Precisa de Medicamentos com Urgência?
            </h3>
            <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
              Entre em contacto connosco pelo WhatsApp ou ligue directamente 
              para solicitar uma entrega rápida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: 945 517 448
              </Button>
              <Button variant="outline" size="lg" className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/20">
                <Phone className="w-5 h-5 mr-2" />
                Ligar: 945 490 359
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
