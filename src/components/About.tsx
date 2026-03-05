import { Button } from "@/components/ui/button";
import { Award, Truck, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: Truck, number: "2-3h", label: "Tempo de Entrega", description: "Entrega rápida em Luanda" },
    { icon: ShieldCheck, number: "BPD", label: "Certificação", description: "Boas Práticas de Distribuição" },
    { icon: Award, number: "100%", label: "Qualidade Garantida", description: "Produtos certificados e rastreados" },
    { icon: MapPin, number: "Nacional", label: "Cobertura", description: "Distribuição em Luanda e todo o país" }
  ];

  const differentials = [
    "Distribuição rápida",
    "Produtos de qualidade garantida",
    "Atendimento próximo ao cliente",
    "Cadeia de frio controlada"
  ];

  return (
    <section id="sobre" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Quem somos
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                Sobre a <span className="text-gradient">JudiFarma</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundada em 26 de Setembro de 2024, a JudiFarma é uma distribuidora farmacêutica
                dedicada ao fornecimento eficiente e seguro de medicamentos, contribuindo para a
                melhoria da saúde da população angolana.
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Missão:</strong> Garantir o fornecimento eficiente e seguro de medicamentos,
                    contribuindo para a melhoria da saúde da população.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-accent/5 border border-accent/10">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Visão:</strong> Ser uma distribuidora farmacêutica de referência em Angola,
                    reconhecida pela qualidade, confiança e eficiência logística.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-foreground">Nossos Diferenciais</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {differentials.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-card transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button size="lg" className="bg-gradient-primary text-primary-foreground border-0 shadow-soft hover:shadow-glow transition-all duration-500 text-base px-8 py-6 rounded-xl group">
                Solicitar Cotação
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="card-premium text-center p-7 group"
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-gradient mb-1">
                    {stat.number}
                  </h3>
                  <p className="font-semibold text-card-foreground text-sm">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Products highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl p-12 text-center bg-card border border-border/50 shadow-card">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nosso Portfólio de Produtos
              </h3>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Trabalhamos com uma ampla gama de produtos farmacêuticos para atender
                farmácias, clínicas e hospitais em toda Angola.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Medicamentos Genéricos", "Medicamentos de Marca", "Produtos Farmacêuticos Diversos"].map((product, i) => (
                  <div key={i} className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all duration-500 hover:scale-105 cursor-default">
                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
