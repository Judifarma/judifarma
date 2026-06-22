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
  Facebook,
  Send,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const SOCIAL_LINKS = {
  instagram: "https://instagram.com/judifarma",
  facebook: "https://facebook.com/judifarma",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Preencha pelo menos o nome e a descrição do pedido.");
      return;
    }
    const text = `*Pedido de Cotação - JudiFarma*%0A%0A*Nome/Empresa:* ${form.name}%0A*E-mail:* ${form.email}%0A*Telefone:* ${form.phone}%0A*Tipo de Instituição:* ${form.type}%0A%0A*Descrição:*%0A${form.message}`;
    window.open(`https://wa.me/244945517448?text=${text}`, "_blank");
    toast.success("A abrir o WhatsApp com o seu pedido...");
  };

  const contactInfo = [
    { icon: Phone, title: "Telefone", details: "+244 945 490 359", description: "Seg-Sex: 08h às 16h", gradient: "from-primary to-primary/70", link: "tel:+244945490359" },
    { icon: MessageCircle, title: "WhatsApp", details: "+244 945 517 448", description: "Envie a sua mensagem", gradient: "from-accent to-accent/70", link: "https://wa.me/244945517448?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" },
    { icon: Mail, title: "E-mail", details: "judifarma6@gmail.com", description: "Respondemos o mais breve possível", gradient: "from-secondary to-secondary/70", link: "mailto:judifarma6@gmail.com" },
    { icon: MapPin, title: "Endereço", details: "Bairro Sanzala, Município de Viana", description: "Província de Luanda, Angola", gradient: "from-primary to-accent/70", link: "https://maps.google.com/?q=Bairro+Sanzala+Viana+Luanda" }
  ];

  return (
    <section id="contato" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Fale connosco
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-5">
            Entre em Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Solicite uma cotação ou entre em contacto connosco. Estamos prontos para
            atender farmácias, clínicas e hospitais em toda Angola.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 space-y-4"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-premium p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-card-foreground text-sm">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-primary font-semibold">{info.details}</p>
                      )}
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Media */}
            <div className="card-premium p-5">
              <h4 className="font-bold text-card-foreground text-sm mb-3">Redes Sociais</h4>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
                  { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="card-premium p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-1">Solicitar Cotação</h3>
                <p className="text-sm text-muted-foreground">Preencha o formulário e entraremos em contacto.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground">Nome / Empresa</label>
                    <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nome da sua empresa ou instituição" className="rounded-xl border-border/50 focus:border-primary/50 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground">E-mail</label>
                    <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="seu@email.com" className="rounded-xl border-border/50 focus:border-primary/50 h-12" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground">Telefone</label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="9XX XXX XXX" className="rounded-xl border-border/50 focus:border-primary/50 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-card-foreground">Tipo de Instituição</label>
                    <Input value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} placeholder="Farmácia, Clínica, Hospital..." className="rounded-xl border-border/50 focus:border-primary/50 h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-card-foreground">Descrição do Pedido</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Descreva os medicamentos ou produtos que necessita..."
                    className="min-h-[130px] rounded-xl border-border/50 focus:border-primary/50"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground border-0 shadow-soft hover:shadow-glow transition-all duration-500 text-base py-6 rounded-xl group">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Pedido de Cotação
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto mb-20"
        >
          <div className="card-premium p-7 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg">
              <MapPin className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground mb-2">Sede - Viana, Luanda</h3>
            <p className="text-muted-foreground mb-1">Bairro Sanzala, sentido Cemitério de Viana, antes das Bombas da Sonangalp</p>
            <p className="text-muted-foreground mb-4">Município de Viana, Província de Luanda</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary" /> +244 945 490 359</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> Seg-Sex: 08h às 16h</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-6 sm:p-10 md:p-14 text-center">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Precisa de Medicamentos com Urgência?
              </h3>
              <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto text-lg">
                Entre em contacto connosco pelo WhatsApp ou ligue directamente para solicitar uma entrega rápida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 shadow-elevated text-base px-8 py-6 rounded-xl">
                  <a href="https://wa.me/244945517448?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp: +244 945 517 448
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white text-foreground border-white hover:bg-white/90 text-base px-8 py-6 rounded-xl">
                  <a href="tel:+244945490359">
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar: +244 945 490 359
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
