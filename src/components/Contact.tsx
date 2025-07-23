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
  Navigation,
  Instagram,
  Facebook
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone Principal",
      details: "(11) 3333-4444",
      description: "Seg-Sex: 8h às 20h | Sáb: 8h às 18h"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp 24h",
      details: "(11) 99999-8888",
      description: "Atendimento de emergência disponível"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: "contato@judifarma.com.br",
      description: "Respondemos em até 2 horas úteis"
    },
    {
      icon: MapPin,
      title: "Endereço Principal",
      details: "Rua da Saúde, 123 - Centro",
      description: "São Paulo - SP, CEP: 01234-567"
    }
  ];

  const locations = [
    {
      name: "Unidade Centro",
      address: "Rua da Saúde, 123 - Centro",
      phone: "(11) 3333-4444",
      hours: "Seg-Sex: 8h-20h | Sáb: 8h-18h"
    },
    {
      name: "Unidade Jardins",
      address: "Av. Paulista, 456 - Jardins", 
      phone: "(11) 3333-5555",
      hours: "Seg-Sex: 8h-20h | Sáb: 8h-18h"
    },
    {
      name: "Unidade Vila Madalena",
      address: "Rua Harmonia, 789 - Vila Madalena",
      phone: "(11) 3333-6666", 
      hours: "Seg-Dom: 8h-22h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos sempre prontos para atendê-lo. Entre em contato conosco através 
            de qualquer um dos canais abaixo ou visite uma de nossas unidades.
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
                  Siga-nos nas redes sociais para dicas de saúde e promoções especiais:
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

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Nome Completo</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">E-mail</label>
                    <Input type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Telefone</label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Assunto</label>
                    <Input placeholder="Como podemos ajudar?" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Mensagem</label>
                  <Textarea 
                    placeholder="Descreva sua dúvida ou solicitação..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button variant="medical" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Locations */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground text-center">
            Nossas Unidades
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      {location.address}
                    </p>
                    <div className="flex items-center space-x-2 text-primary">
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{location.hours}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Navigation className="w-4 h-4 mr-2" />
                    Como Chegar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Call to Action */}
        <div className="mt-16">
          <div className="bg-gradient-accent p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-accent-foreground mb-4">
              Precisa de Atendimento Urgente?
            </h3>
            <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
              Nossa equipe está disponível 24 horas para emergências. 
              Entre em contato através do nosso WhatsApp ou ligue para nossa central.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: (11) 99999-8888
              </Button>
              <Button variant="outline" size="lg" className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground hover:bg-accent-foreground/20">
                <Phone className="w-5 h-5 mr-2" />
                Ligar: (11) 3333-4444
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;