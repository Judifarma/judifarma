import { Button } from "@/components/ui/button";
import {
  Pill,
  Truck,
  Warehouse,
  Thermometer,
  Clock,
  ShieldCheck,
  Package,
  ClipboardCheck,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Medicamentos Genéricos",
      description: "Distribuição de medicamentos genéricos de qualidade certificada para farmácias, clínicas e hospitais.",
      features: ["Produtos certificados", "Preços competitivos", "Stock permanente"],
      gradient: "from-primary/10 to-primary/5",
      iconBg: "from-primary to-primary/70"
    },
    {
      icon: Package,
      title: "Medicamentos de Marca",
      description: "Portfólio completo de medicamentos de marca com garantia de procedência e qualidade.",
      features: ["Marcas reconhecidas", "Garantia de origem", "Variedade de produtos"],
      gradient: "from-accent/10 to-accent/5",
      iconBg: "from-accent to-accent/70"
    },
    {
      icon: Truck,
      title: "Distribuição Rápida",
      description: "Entrega em Luanda em 2-3 horas e distribuição nacional com logística eficiente.",
      features: ["Entrega em 2-3h em Luanda", "Cobertura nacional", "Rastreamento de entregas"],
      gradient: "from-secondary/10 to-secondary/5",
      iconBg: "from-secondary to-secondary/70"
    },
    {
      icon: Thermometer,
      title: "Cadeia de Frio Controlada",
      description: "Monitoramento rigoroso de temperatura para garantir a integridade dos medicamentos.",
      features: ["Monitoramento contínuo", "Controle de temperatura", "Conformidade regulatória"],
      gradient: "from-primary/10 to-accent/5",
      iconBg: "from-primary to-accent/70"
    },
    {
      icon: Warehouse,
      title: "Armazéns Próprios",
      description: "Infraestrutura de armazenamento moderna com condições ideais para todos os tipos de medicamentos.",
      features: ["Armazéns certificados", "Controle de validade", "Gestão de stock eficiente"],
      gradient: "from-accent/10 to-secondary/5",
      iconBg: "from-accent to-secondary/70"
    },
    {
      icon: ClipboardCheck,
      title: "Controle de Qualidade",
      description: "Certificação em Boas Práticas de Distribuição (BPD/GDP) e política de qualidade documentada.",
      features: ["Certificação BPD/GDP", "Política de qualidade", "Rastreabilidade total"],
      gradient: "from-secondary/10 to-primary/5",
      iconBg: "from-secondary to-primary/70"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            O que oferecemos
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-5">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Garantimos o fornecimento eficiente e seguro de medicamentos, com distribuição
            rápida e qualidade certificada em toda Angola.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium group p-7"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-accent mr-2.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full justify-between text-primary hover:bg-primary/5 group/btn">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-6 sm:p-10 md:p-14 text-center">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                Precisa de Medicamentos com Urgência?
              </h3>
              <p className="text-primary-foreground/70 mb-8 text-lg">
                Entrega rápida em Luanda em 2-3 horas. Entre em contacto connosco agora!
              </p>
              <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-elevated text-base px-8 py-6 rounded-xl">
                WhatsApp: 945 517 448
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
