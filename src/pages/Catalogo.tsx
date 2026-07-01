import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Search,
  MessageCircle,
  X,
  CheckCircle2,
  FlaskConical,
  Loader2,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { resolveImage } from "@/lib/catalog-utils";
import dynadolHero from "@/assets/dynadol-hero.jpeg.asset.json";

const WA_BASE = "https://wa.me/244945517448";

type Category = { id: string; name: string; slug: string; sort_order: number };
type Product = {
  id: string;
  name: string;
  slug: string;
  category_id: string | null;
  short_description: string;
  composition: string;
  presentation: string;
  indications: string[];
  highlights: string[];
  image_url: string | null;
};

const buildQuote = (p: Product) =>
  `${WA_BASE}?text=${encodeURIComponent(
    `Olá JudiFarma, gostaria de uma cotação para: ${p.name}${
      p.presentation ? ` (${p.presentation})` : ""
    }.`,
  )}`;

const Catalogo = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (max-width: 768px)");
    const update = () => setIsCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const lightMotion = prefersReducedMotion || isCoarsePointer;

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState<string | "all">("all");
  const [active, setActive] = useState<Product | null>(null);

  useEffect(() => {
    (async () => {
      const [p, c] = await Promise.all([
        supabase
          .from("products")
          .select(
            "id, name, slug, category_id, short_description, composition, presentation, indications, highlights, image_url",
          )
          .eq("is_active", true)
          .order("sort_order"),
        supabase.from("categories").select("*").order("sort_order"),
      ]);
      setProducts(p.data ?? []);
      setCategories(c.data ?? []);
      setLoading(false);
    })();
  }, []);

  const catName = (id: string | null) =>
    categories.find((c) => c.id === id)?.name ?? "";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = categoryId === "all" || p.category_id === categoryId;
      const matchesQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.short_description.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, categoryId, products]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Fancy Dynadol Hero */}
      <section className="relative overflow-hidden pt-40 lg:pt-48 pb-16 lg:pb-24 bg-white">
        {/* Decorative ambient — static, no continuous animation (cheap paint, no jank) */}
        <div className="absolute -top-20 -left-20 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-0 animate-fade-in" style={{ animationDuration: "1.2s", animationFillMode: "forwards" }} />
        <div className="absolute -bottom-32 right-0 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-3xl pointer-events-none opacity-0 animate-fade-in" style={{ animationDuration: "1.2s", animationDelay: "0.2s", animationFillMode: "forwards" }} />


        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            {/* Text column */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
              }}
              className="lg:col-span-5 space-y-7"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-xs font-semibold tracking-[0.18em] uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Produto em destaque
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="font-bold leading-[0.95] tracking-tight text-foreground text-5xl md:text-6xl lg:text-7xl"
              >
                Dynadol
                <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground italic">
                  Comprimido & Xarope
                </span>
              </motion.h1>

              <motion.div
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  show: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
                }}
                style={{ originX: 0 }}
                className="h-px w-24 bg-gradient-to-r from-primary to-transparent"
              />

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-base md:text-lg text-foreground/75 leading-relaxed"
              >
                Uma formulação de <span className="font-semibold text-foreground">paracetamol</span> acessível,
                segura e eficaz, com ação <span className="text-primary font-semibold">analgésica</span> e{" "}
                <span className="text-primary font-semibold">antipirética</span>, que proporciona alívio para
                dores leves a moderadas e febre — dores de cabeça, dor de dente, resfriado, gripe, dores
                articulares ou cólicas menstruais.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="grid sm:grid-cols-2 gap-3 pt-2"
              >
                <div className="rounded-2xl border border-border/60 bg-card/70 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Comprimidos
                  </div>
                  <div className="text-sm text-foreground/80">
                    Crianças <span className="font-semibold">+6 anos</span> e adultos
                  </div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/70 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Xarope
                  </div>
                  <div className="text-sm text-foreground/80">
                    Crianças de <span className="font-semibold">1 a 6 anos</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:shadow-elevated transition-all duration-500 px-7 py-6 rounded-xl"
                >
                  <a
                    href={`${WA_BASE}?text=${encodeURIComponent(
                      "Olá JudiFarma, gostaria de uma cotação para Dynadol (Comprimido / Xarope).",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicitar cotação
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-foreground/15 hover:bg-foreground/5 px-7 py-6 rounded-xl"
                >
                  <a href="#catalogo">Ver todos os produtos</a>
                </Button>
              </motion.div>

              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { duration: 0.8 } },
                }}
                className="text-xs text-muted-foreground/80 leading-relaxed pt-2 max-w-md border-l-2 border-primary/40 pl-3"
              >
                Dosagens superiores às recomendadas na bula podem causar danos. Não utilize continuamente por
                mais de 10 dias sem consultar seu médico.
              </motion.p>
            </motion.div>

            {/* Image column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative transform-gpu"
            >
              {/* Halo: static on mobile / reduced-motion, gentle pulse on desktop */}
              <motion.div
                aria-hidden
                animate={lightMotion ? undefined : { scale: [1, 1.03, 1], opacity: [0.75, 1, 0.75] }}
                transition={lightMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: lightMotion ? "auto" : "transform, opacity" }}
                className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-[2.5rem] blur-3xl pointer-events-none transform-gpu"
              />
              <motion.div
                animate={lightMotion ? undefined : { y: [0, -8, 0] }}
                transition={lightMotion ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{ willChange: lightMotion ? "auto" : "transform" }}
                className="relative rounded-[2rem] overflow-hidden shadow-elevated ring-1 ring-foreground/5 transform-gpu"
              >
                <img
                  src={dynadolHero.url}
                  alt="Família feliz com produtos Dynadol — comprimidos e xarope"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                {/* Shimmer sweep — desktop only, one-shot */}
                {!lightMotion && (
                  <motion.div
                    aria-hidden
                    initial={{ x: "-120%" }}
                    animate={{ x: "120%" }}
                    transition={{ duration: 2.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ willChange: "transform" }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none transform-gpu"
                  />
                )}
                {/* Floating accent badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="hidden md:flex absolute top-6 left-6 items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-soft"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">
                    Para toda a família
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="catalogo" className="pt-20 pb-12 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-5 leading-tight">
              Catálogo de <span className="text-gradient">Produtos</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Distribuímos medicamentos de qualidade certificada para farmácias,
              clínicas e hospitais em toda Angola. Explore o portfólio e solicite
              cotação directa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between"
          >
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Pesquisar por nome, indicação ou composição..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-11 h-12 rounded-xl bg-card border-border/60"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryId("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  categoryId === "all"
                    ? "bg-gradient-primary text-primary-foreground shadow-soft"
                    : "bg-card text-foreground/70 hover:text-primary hover:bg-primary/5 border border-border/60"
                }`}
              >
                Todos
              </button>
              {categories.map((c) => {
                const isActive = categoryId === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setCategoryId(c.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-primary text-primary-foreground shadow-soft"
                        : "bg-card text-foreground/70 hover:text-primary hover:bg-primary/5 border border-border/60"
                    }`}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              Nenhum produto encontrado.
            </div>
          ) : (
            <div className="space-y-24 lg:space-y-32">
              {filtered.map((p, i) => {
                const img = resolveImage(p.image_url, p.slug);
                const reverse = i % 2 === 1;
                return (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className={`grid lg:grid-cols-12 gap-10 lg:gap-6 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                      {/* Text column */}
                      <div className="lg:col-span-5 space-y-6">
                        {p.category_id && (
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            {catName(p.category_id)}
                          </div>
                        )}

                        <h2 className="font-bold leading-[0.95] tracking-tight text-foreground text-4xl md:text-5xl lg:text-6xl">
                          {p.name}
                        </h2>

                        <div style={{ transformOrigin: "left" }} className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />

                        <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                          {p.short_description}
                        </p>

                        {(p.composition || p.presentation) && (
                          <div className="grid sm:grid-cols-2 gap-3 pt-2">
                            {p.composition && (
                              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30">
                                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                                  Composição
                                </div>
                                <div className="text-sm text-foreground/80">{p.composition}</div>
                              </div>
                            )}
                            {p.presentation && (
                              <div className="rounded-2xl border border-border/60 bg-card/70 p-4 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30">
                                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                                  Apresentação
                                </div>
                                <div className="text-sm text-foreground/80">{p.presentation}</div>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <Button
                            asChild
                            size="lg"
                            className="bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:shadow-elevated transition-all duration-500 px-7 py-6 rounded-xl"
                          >
                            <a href={buildQuote(p)} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="w-5 h-5 mr-2" />
                              Solicitar cotação
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={() => setActive(p)}
                            className="border-foreground/15 hover:bg-foreground/5 px-7 py-6 rounded-xl"
                          >
                            Ver detalhes
                          </Button>
                        </div>
                      </div>

                      {/* Image column */}
                      <div className="lg:col-span-7 relative transform-gpu">
                        <div
                          aria-hidden
                          className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-[2.5rem] blur-3xl pointer-events-none"
                        />
                        <button
                          onClick={() => setActive(p)}
                          aria-label={`Ver detalhes de ${p.name}`}
                          className="group relative rounded-[2rem] overflow-hidden shadow-elevated ring-1 ring-foreground/5 transform-gpu w-full block"
                        >
                          {img ? (
                            <img
                              src={img}
                              alt={p.name}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                            />
                          ) : (
                            <div className="aspect-[4/3] bg-muted/40 flex items-center justify-center">
                              <Package className="w-16 h-16 text-muted-foreground/40" />
                            </div>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>


      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-y-auto shadow-elevated"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="grid md:grid-cols-2">
                <div className="bg-muted/30 overflow-hidden flex items-center justify-center p-6 md:p-8 md:min-h-[560px]">
                  {resolveImage(active.image_url, active.slug) ? (
                    <img
                      src={resolveImage(active.image_url, active.slug)!}
                      alt={active.name}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  ) : (
                    <Package className="w-16 h-16 text-muted-foreground/40" />
                  )}
                </div>
                <div className="p-7 md:p-10">
                  {active.category_id && (
                    <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                      {catName(active.category_id)}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {active.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {active.short_description}
                  </p>

                  <div className="space-y-5 mb-7">
                    {(active.composition || active.presentation) && (
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="flex items-start gap-2.5">
                          <FlaskConical className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-1">
                              Composição
                            </p>
                            {active.composition && (
                              <p className="text-sm text-foreground">
                                {active.composition}
                              </p>
                            )}
                            {active.presentation && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {active.presentation}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {active.indications.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-3">
                          Indicações
                        </p>
                        <ul className="space-y-2">
                          {active.indications.map((ind) => (
                            <li
                              key={ind}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              {ind}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {active.highlights.length > 0 && (
                      <div>
                        <p className="text-xs uppercase tracking-wider text-foreground/60 font-semibold mb-3">
                          Destaques
                        </p>
                        <ul className="space-y-2">
                          {active.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2.5 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Button asChild variant="medical" size="lg" className="w-full">
                    <a
                      href={buildQuote(active)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar cotação via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Catalogo;
