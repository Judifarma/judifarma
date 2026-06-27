import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useTranslation } from "react-i18next";
import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";

const ctaImages = [product1, product2, product3];

const Services = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ctaImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const serviceKeys = ["generics", "brand", "delivery", "cold", "warehouse", "quality"] as const;
  const serviceMeta = {
    generics: { icon: Pill, iconBg: "from-primary to-primary/70" },
    brand: { icon: Package, iconBg: "from-accent to-accent/70" },
    delivery: { icon: Truck, iconBg: "from-secondary to-secondary/70" },
    cold: { icon: Thermometer, iconBg: "from-primary to-accent/70" },
    warehouse: { icon: Warehouse, iconBg: "from-accent to-secondary/70" },
    quality: { icon: ClipboardCheck, iconBg: "from-secondary to-primary/70" },
  } as const;
  const services = serviceKeys.map((k) => ({
    icon: serviceMeta[k].icon,
    iconBg: serviceMeta[k].iconBg,
    title: t(`services.items.${k}.title`),
    description: t(`services.items.${k}.description`),
    features: [
      t(`services.items.${k}.f1`),
      t(`services.items.${k}.f2`),
      t(`services.items.${k}.f3`),
    ],
  }));

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
                <Button asChild variant="ghost" className="w-full justify-between text-primary hover:bg-primary/5 group/btn">
                  <Link to="/catalogo">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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
          <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-14 text-center">
            {/* Slideshow background */}
            {ctaImages.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: currentSlide === i ? 1 : 0 }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[hsl(220,60%,10%)]/95" />
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
              <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-elevated text-base px-8 py-6 rounded-xl">
                <a href="https://wa.me/244945517448" target="_blank" rel="noopener noreferrer">WhatsApp: +244 945 517 448</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
