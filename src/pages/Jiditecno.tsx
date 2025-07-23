import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Plane,
  Globe,
  MapPinIcon,
  Users,
  Award,
  Calendar,
  MessageCircle,
  Briefcase,
  Heart,
  Camera,
  Shield,
  Star,
  Compass
} from "lucide-react";
import jiditecnoHero from "@/assets/jiditecno-hero.jpg";

const Jiditecno = () => {
  const services = [
    {
      icon: Plane,
      title: "Viagens Corporativas",
      description: "Soluções completas para viagens de negócios e eventos empresariais.",
      features: ["Passagens aéreas", "Hospedagem executiva", "Translados VIP"]
    },
    {
      icon: Heart,
      title: "Lua de Mel & Romance", 
      description: "Roteiros exclusivos para casais em momentos especiais.",
      features: ["Destinos românticos", "Hotéis boutique", "Experiências únicas"]
    },
    {
      icon: Users,
      title: "Viagens em Grupo",
      description: "Organização completa para grupos familiares e de amigos.",
      features: ["Roteiros personalizados", "Guias especializados", "Atividades exclusivas"]
    },
    {
      icon: Camera,
      title: "Turismo de Aventura",
      description: "Expedições e aventuras para os mais corajosos.",
      features: ["Ecoturismo", "Esportes radicais", "Trilhas exclusivas"]
    },
    {
      icon: Globe,
      title: "Intercâmbio Cultural",
      description: "Programas educacionais e de intercâmbio internacional.",
      features: ["Cursos de idiomas", "Programas de estudo", "Experiência cultural"]
    },
    {
      icon: Shield,
      title: "Seguro Viagem",
      description: "Proteção completa para suas viagens nacionais e internacionais.",
      features: ["Cobertura médica", "Bagagem extraviada", "Cancelamento"]
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10.000+",
      label: "Viajantes Satisfeitos",
      description: "Clientes que confiaram em nossos serviços"
    },
    {
      icon: Calendar,
      number: "12+",
      label: "Anos de Experiência", 
      description: "No mercado de turismo e viagens"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Destinos",
      description: "Países e cidades em nosso portfólio"
    },
    {
      icon: Award,
      number: "25+",
      label: "Prêmios",
      description: "Reconhecimentos do setor turístico"
    }
  ];

  const destinations = [
    { name: "Europa Clássica", price: "R$ 4.999", image: "🏰", rating: 4.9 },
    { name: "Caribe Tropical", price: "R$ 3.299", image: "🏝️", rating: 4.8 },
    { name: "Ásia Exótica", price: "R$ 5.499", image: "🏯", rating: 4.9 },
    { name: "África Selvagem", price: "R$ 6.299", image: "🦁", rating: 4.7 },
    { name: "Patagônia", price: "R$ 4.199", image: "🏔️", rating: 4.8 },
    { name: "Austrália", price: "R$ 7.999", image: "🦘", rating: 4.9 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2 animate-fade-in">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-400 rounded-lg flex items-center justify-center">
                <Plane className="text-white font-bold text-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">JidiTecno</h1>
                <p className="text-sm text-muted-foreground">Explorando Novos Horizontes</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-foreground hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#destinos" className="text-foreground hover:text-blue-600 transition-colors">
                Destinos 
              </a>
              <a href="#servicos" className="text-foreground hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-foreground hover:text-blue-600 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-blue-600 transition-colors">
                Contato
              </a>
            </nav>

            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white hover:animate-pulse-glow">
              Consulte Agora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Explore o <span className="text-blue-600">Mundo</span> Conosco
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Há mais de 12 anos criando experiências inesquecíveis, 
                conectando pessoas aos destinos dos seus sonhos com segurança e excelência.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-center hover:animate-bounce-subtle">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-foreground">Segurança Total</p>
              </div>
              <div className="text-center hover:animate-bounce-subtle">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-foreground">5 Estrelas</p>
              </div>
              <div className="text-center hover:animate-bounce-subtle">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Compass className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-foreground">Roteiros Únicos</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white hover:animate-pulse-glow">
                <MessageCircle className="w-5 h-5" />
                Consulte Agora
              </Button>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                Ver Destinos
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-2xl transform rotate-6 animate-float"></div>
            <img 
              src={jiditecnoHero} 
              alt="JidiTecno - Agência de viagens e turismo"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-medium hover:shadow-lg transition-all duration-500 hover:scale-105"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border z-20 animate-slide-in-right">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">12+</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Anos de Experiência</p>
                  <p className="text-sm text-muted-foreground">Em turismo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Destinos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra os destinos mais procurados pelos nossos viajantes, 
              com pacotes completos e experiências exclusivas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => {
              const animationDelay = `${index * 0.1}s`;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in overflow-hidden" style={{animationDelay}}>
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {destination.image}
                    <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-card-foreground">
                        {destination.name}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">
                        A partir de {destination.price}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Por pessoa - Aéreo + Hotel + Café da manhã
                      </p>
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:animate-pulse transition-all duration-300">
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
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
              Oferecemos soluções completas em turismo e viagens, 
              desde o planejamento até o retorno da sua jornada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const animationDelay = `${index * 0.1}s`;
              return (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in hover:animate-bounce-subtle" style={{animationDelay}}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-pulse-glow transition-transform duration-300">
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
                          <Star className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-4 hover:animate-pulse transition-all duration-300 border-blue-500 text-blue-600 hover:bg-blue-50">
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
                  Sobre a <span className="text-blue-600">JidiTecno</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fundada em 2012, a JidiTecno nasceu da paixão por conectar pessoas 
                  a experiências únicas ao redor do mundo, sempre priorizando a 
                  segurança, qualidade e satisfação dos nossos clientes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="prose prose-lg text-muted-foreground">
                  <p>
                    Nossa missão é ser mais que uma agência de viagens - somos 
                    criadores de memórias inesquecíveis. Com uma equipe especializada 
                    em destinos nacionais e internacionais, oferecemos consultoria 
                    personalizada para cada tipo de viajante.
                  </p>
                  <p>
                    Acreditamos que viajar é investir em experiências que transformam 
                    vidas. Por isso, cuidamos de cada detalhe da sua jornada, desde 
                    o primeiro contato até o retorno para casa.
                  </p>
                </div>

                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
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
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-blue-600">
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
              Planeje Sua Próxima Viagem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nossa equipe de especialistas está pronta para criar a viagem 
              dos seus sonhos. Entre em contato e descubra as melhores ofertas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">Telefone</h3>
                      <p className="text-blue-600 font-medium">(11) 4444-5555</p>
                      <p className="text-sm text-muted-foreground">Seg-Sex: 9h às 18h | Sáb: 9h às 14h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">WhatsApp</h3>
                      <p className="text-blue-600 font-medium">(11) 99999-7777</p>
                      <p className="text-sm text-muted-foreground">Atendimento personalizado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">E-mail</h3>
                      <p className="text-blue-600 font-medium">viagens@jiditecno.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 2h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">Endereço</h3>
                      <p className="text-blue-600 font-medium">Av. Turismo, 789 - Centro</p>
                      <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">
                  Solicite um Orçamento
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
                    <label className="text-sm font-medium text-card-foreground">Destino Desejado</label>
                    <Input placeholder="Ex: Europa" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Data Preferencial</label>
                    <Input type="date" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Número de Pessoas</label>
                    <Input placeholder="Ex: 2 adultos" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Observações</label>
                  <Textarea 
                    placeholder="Conte-nos sobre a viagem dos seus sonhos..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white hover:animate-pulse-glow">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-400 rounded-lg flex items-center justify-center">
                  <Plane className="text-white font-bold text-lg" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">JidiTecno</h3>
                  <p className="text-sm opacity-90">Explorando Novos Horizontes</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Sua agência de confiança para viagens inesquecíveis pelo mundo todo.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Serviços</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Viagens Corporativas</li>
                <li>Lua de Mel</li>
                <li>Viagens em Grupo</li>
                <li>Turismo de Aventura</li>
                <li>Intercâmbio</li>
                <li>Seguro Viagem</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contato</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 4444-5555</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>(11) 99999-7777</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>viagens@jiditecno.com.br</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Av. Turismo, 789 - São Paulo</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Atendimento</h4>
              <div className="text-sm opacity-80">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 14h</p>
                <p>Domingo: Fechado</p>
                <div className="mt-4">
                  <p className="font-medium text-orange-400">WhatsApp: 24h para emergências</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2024 JidiTecno. Todos os direitos reservados. | CNPJ: 12.345.678/0001-90</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Jiditecno;