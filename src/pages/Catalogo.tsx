import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((p, i) => {
                const img = resolveImage(p.image_url, p.slug);
                return (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="card-premium group overflow-hidden flex flex-col"
                  >
                    <button
                      onClick={() => setActive(p)}
                      className="relative aspect-[4/3] overflow-hidden bg-muted/40 flex items-center justify-center"
                      aria-label={`Ver detalhes de ${p.name}`}
                    >
                      {img ? (
                        <img
                          src={img}
                          alt={p.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <Package className="w-12 h-12 text-muted-foreground/40" />
                      )}
                    </button>
                    <div className="p-6 flex flex-col flex-1">
                      {p.category_id && (
                        <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                          {catName(p.category_id)}
                        </p>
                      )}
                      <h3 className="text-xl font-bold text-card-foreground mb-2">
                        {p.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                        {p.short_description}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          onClick={() => setActive(p)}
                          className="flex-1 hover:bg-primary/5 text-primary"
                        >
                          Detalhes
                        </Button>
                        <Button asChild variant="medical" className="flex-1">
                          <a
                            href={buildQuote(p)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4 mr-1.5" />
                            Cotação
                          </a>
                        </Button>
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
              className="relative bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elevated"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto bg-muted/30 overflow-hidden flex items-center justify-center">
                  {resolveImage(active.image_url) ? (
                    <img
                      src={resolveImage(active.image_url)!}
                      alt={active.name}
                      className="w-full h-full object-cover"
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
