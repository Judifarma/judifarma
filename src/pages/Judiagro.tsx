import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Wheat,
  Tractor,
  Leaf,
  Users,
  Award,
  Calendar,
  MessageCircle,
  Sprout,
  Sun,
  Droplets,
  Target
} from "lucide-react";
import judiAgroHero from "@/assets/judiagro-hero.jpg";

const Judiagro = () => {
  const services = [
    {
      icon: Wheat,
      title: "Consultoria Agrícola",
      description: "Orientação técnica especializada para otimizar sua produção agrícola.",
      features: ["Análise de solo", "Planejamento de cultivo", "Controle de pragas"]
    },
    {
      icon: Tractor,
      title: "Equipamentos & Máquinas", 
      description: "Venda e locação de equipamentos agrícolas modernos e eficientes.",
      features: ["Tratores", "Colheitadeiras", "Implementos agrícolas"]
    },
    {
      icon: Sprout,
      title: "Sementes & Mudas",
      description: "Sementes certificadas e mudas de alta qualidade para seu plantio.",
      features: ["Sementes híbridas", "Mudas frutíferas", "Garantia de qualidade"]
    },
    {
      icon: Droplets,
      title: "Sistemas de Irrigação",
      description: "Projetos e instalação de sistemas de irrigação eficientes.",
      features: ["Irrigação por gotejamento", "Aspersão", "Automação"]
    },
    {
      icon: Sun,
      title: "Energia Solar Rural",
      description: "Soluções em energia solar para propriedades rurais.",
      features: ["Painéis solares", "Sistemas off-grid", "Economia de energia"]
    },
    {
      icon: Target,
      title: "Precisão Agrícola",
      description: "Tecnologia de ponta para agricultura de precisão.",
      features: ["GPS agrícola", "Drones", "Sensoriamento remoto"]
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Produtores Atendidos",
      description: "Famílias rurais que confiam em nossos serviços"
    },
    {
      icon: Calendar,
      number: "15+",
      label: "Anos no Agronegócio", 
      description: "Experiência no setor agrícola"
    },
    {
      icon: Award,
      number: "10+",
      label: "Certificações",
      description: "Reconhecimento em qualidade e sustentabilidade"
    },
    {
      icon: MapPin,
      number: "5",
      label: "Regiões Atendidas",
      description: "Presença em múltiplas regiões"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                <Wheat className="text-white font-bold text-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">JudiAgro</h1>
                <p className="text-sm text-muted-foreground">Cultivando o Futuro</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-foreground hover:text-green-600 transition-colors">
                Início
              </a>
              <a href="#servicos" className="text-foreground hover:text-green-600 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-foreground hover:text-green-600 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-green-600 transition-colors">
                Contato
              </a>
            </nav>

            <Button className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white hover:animate-pulse-glow">
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Cultivando o <span className="text-green-600">Futuro</span> da Agricultura
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Mais de 15 anos oferecendo soluções completas para o agronegócio, 
                desde consultoria técnica até equipamentos de última geração.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-center hover:animate-bounce-subtle">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-foreground">Sustentabilidade</p>
              </div>
              <div className="text-center hover:animate-bounce-subtle">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Tractor className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-sm font-medium text-foreground">Tecnologia</p>
              </div>
              <div className="text-center hover:animate-bounce-subtle">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-foreground">Parceria</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white hover:animate-pulse-glow">
                <Phone className="w-5 h-5" />
                Fale Conosco
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                Nossos Serviços
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="absolute inset-0 bg-green-500 opacity-10 rounded-2xl transform rotate-6 animate-float"></div>
            <img 
              src={judiAgroHero} 
              alt="JudiAgro - Agricultura moderna e sustentável"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-medium hover:shadow-lg transition-all duration-500 hover:scale-105"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border z-20 animate-slide-in-right">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">15+</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Anos de Experiência</p>
                  <p className="text-sm text-muted-foreground">No agronegócio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas para aumentar a produtividade e 
              sustentabilidade da sua propriedade rural.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const animationDelay = `${index * 0.1}s`;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in hover:animate-bounce-subtle" style={{animationDelay}}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-pulse-glow transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white animate-float" />
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
                          <Leaf className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4 hover:animate-pulse transition-all duration-300 border-green-500 text-green-600 hover:bg-green-50">
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Sobre a <span className="text-green-600">JudiAgro</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fundada em 2009, a JudiAgro nasceu com o propósito de revolucionar 
                  a agricultura através da tecnologia, sustentabilidade e parceria 
                  com produtores rurais.
                </p>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Nossa missão é ser o parceiro estratégico dos produtores rurais, 
                    oferecendo soluções inovadoras que aumentem a produtividade, 
                    reduzam custos e promovam práticas sustentáveis.
                  </p>
                  <p>
                    Com uma equipe de engenheiros agrônomos e técnicos especializados, 
                    estamos sempre na vanguarda das tecnologias agrícolas, garantindo 
                    que nossos clientes tenham acesso às melhores soluções do mercado.
                  </p>
                </div>

                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Conheça Nossa História
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const animationDelay = `${index * 0.1}s`;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-medium transition-all duration-300 border-border bg-card animate-scale-in" style={{animationDelay}}>
                    <CardContent className="space-y-4 p-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex items-center justify-center mx-auto">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-green-600">
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
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para ajudar você a crescer no agronegócio. 
              Entre em contato conosco e descubra como podemos ser seu parceiro.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">Telefone</h3>
                      <p className="text-green-600 font-medium">(11) 2222-3333</p>
                      <p className="text-sm text-muted-foreground">Seg-Sex: 7h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">E-mail</h3>
                      <p className="text-green-600 font-medium">contato@judiagro.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">Endereço</h3>
                      <p className="text-green-600 font-medium">Rod. Agro, 456 - Zona Rural</p>
                      <p className="text-sm text-muted-foreground">Interior - SP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Solicite uma Consultoria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Nome</label>
                    <Input placeholder="Seu nome" />
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
                    <label className="text-sm font-medium text-card-foreground">Propriedade (hectares)</label>
                    <Input placeholder="Ex: 50 ha" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Como podemos ajudar?</label>
                  <Textarea 
                    placeholder="Descreva sua necessidade..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white hover:animate-pulse-glow">
                  Solicitar Consultoria
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
                  <Wheat className="text-white font-bold text-lg" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">JudiAgro</h3>
                  <p className="text-sm opacity-90">Cultivando o Futuro</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Soluções completas para o agronegócio moderno e sustentável.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 2222-3333</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@judiagro.com.br</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Rod. Agro, 456 - Interior - SP</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Horário</h4>
              <div className="text-sm opacity-80">
                <p>Segunda a Sexta: 7h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2024 JudiAgro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Judiagro;