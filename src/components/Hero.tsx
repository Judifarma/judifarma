import { Button } from "@/components/ui/button";
import { Shield, Clock, Truck, Phone, ArrowRight } from "lucide-react";
import teamImage2 from "@/assets/team-2.jpg";
import teamImage3 from "@/assets/team-3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const heroImages = [teamImage2, teamImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
                Sua{" "}
                <span className="text-gradient">Distribuidora Farmacêutica</span>{" "}
                de Confiança
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg leading-relaxed">
                Distribuição rápida de medicamentos genéricos, de marca e produtos farmacêuticos
                para farmácias, clínicas e hospitais em toda Angola.
              </p>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-2 sm:gap-4"
            >
              {[
                { icon: Shield, label: "Qualidade Garantida", color: "from-primary to-primary/60" },
                { icon: Truck, label: "Entrega em 2-3h", color: "from-accent to-accent/60" },
                { icon: Clock, label: "Distribuição Nacional", color: "from-secondary to-secondary/60" },
              ].map((item, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-primary-foreground/80">{item.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:shadow-elevated transition-all duration-500 text-base px-8 py-6 rounded-xl group">
                <a href="#contato">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Cotação
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-foreground border-white hover:bg-white/90 text-base px-8 py-6 rounded-xl">
                <a href="#servicos">Conheça Nosso Portfólio</a>
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse-glow" />
            <div className="relative overflow-hidden rounded-3xl shadow-elevated h-[300px] sm:h-[450px] md:h-[550px]">
              {heroImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="JudiFarma - Distribuidora Farmacêutica em Angola"
                  animate={{ opacity: currentImage === i ? 1 : 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ zIndex: currentImage === i ? 2 : 1 }}
                />
              ))}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-foreground/30 via-transparent to-transparent z-10" />
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentImage ? "bg-white w-6" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 left-0 sm:-bottom-6 sm:-left-6 glass p-3 sm:p-5 rounded-2xl shadow-elevated z-20 max-w-[200px] sm:max-w-none"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-accent-foreground font-bold text-sm">BPD</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Certificação BPD</p>
                  <p className="text-sm text-muted-foreground">Boas Práticas de Distribuição</p>
                </div>
              </div>
            </motion.div>

            {/* Stats floating card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-2 right-0 sm:-top-4 sm:-right-4 glass p-3 sm:p-4 rounded-2xl shadow-elevated z-20"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">2-3h</p>
                <p className="text-xs text-muted-foreground font-medium">Entrega em Luanda</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
