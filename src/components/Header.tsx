import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Menu, X } from "lucide-react";
import logoJudifarma from "@/assets/logo-judifarma.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Produtos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contacto" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
      scrolled ? "shadow-medium py-2" : "py-3"
    }`}>
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <AnimatePresence>
          {!scrolled && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="hidden md:flex items-center justify-between py-2 text-xs border-b border-border/30 overflow-hidden"
            >
              <div className="flex items-center gap-6 text-foreground/60">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>+244 945 490 359</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Viana, Luanda - Angola</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Seg-Sex: 08h às 16h</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-2">
          <a href="#inicio" className="flex items-center relative z-10">
            <img
              src={logoJudifarma}
              alt="JudiFarma - Distribuidora Farmacêutica"
              className={`w-auto transition-all duration-500 ${scrolled ? "h-10 md:h-12" : "h-12 md:h-16"}`}
            />
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary rounded-full transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="medical" size="lg" className="hidden md:inline-flex shadow-soft hover:shadow-glow transition-all duration-500">
              <a href="https://wa.me/244945517448?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">Fale Connosco</a>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-1 pb-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors font-medium"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button asChild variant="medical" size="lg" className="mt-2">
                  <a href="https://wa.me/244945517448?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>Fale Connosco</a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
