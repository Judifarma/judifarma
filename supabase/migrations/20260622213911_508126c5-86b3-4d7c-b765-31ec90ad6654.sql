
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can read their own roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can read all roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
  ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Shared updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Categories
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.categories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.categories TO authenticated;
GRANT ALL ON public.categories TO service_role;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are readable by everyone"
  ON public.categories FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Admins manage categories"
  ON public.categories FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_categories_updated
  BEFORE UPDATE ON public.categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Products
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
  short_description TEXT NOT NULL DEFAULT '',
  composition TEXT NOT NULL DEFAULT '',
  presentation TEXT NOT NULL DEFAULT '',
  indications TEXT[] NOT NULL DEFAULT '{}',
  highlights TEXT[] NOT NULL DEFAULT '{}',
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.products TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Active products are readable by everyone"
  ON public.products FOR SELECT TO anon, authenticated
  USING (is_active OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage products"
  ON public.products FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_products_updated
  BEFORE UPDATE ON public.products
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed categories + products
INSERT INTO public.categories (name, slug, sort_order) VALUES
  ('Analgésicos', 'analgesicos', 1),
  ('Antibióticos', 'antibioticos', 2),
  ('Cardiovasculares', 'cardiovasculares', 3);

INSERT INTO public.products (name, slug, category_id, short_description, composition, presentation, indications, highlights, image_url, sort_order)
SELECT
  v.name, v.slug,
  (SELECT id FROM public.categories WHERE slug = v.cat_slug),
  v.short_description, v.composition, v.presentation,
  v.indications, v.highlights, v.image_url, v.sort_order
FROM (VALUES
  (
    'Dynadol Xarope', 'dynadol-xarope', 'analgesicos',
    'Alívio rápido de dores leves a moderadas e febre. Formulação pediátrica com sabor agradável.',
    'Cada 5 ml contém 120 mg de paracetamol.',
    'Frasco de 100 ml.',
    ARRAY['Dor de cabeça','Febres leves e moderadas','Dores musculares','Sintomas de gripe e constipação'],
    ARRAY['Dosagem pediátrica precisa','Volume conveniente de 100 ml','Embalagem segura e prática'],
    '/seed/dynadol-xarope.jpg', 1
  ),
  (
    'Dynadol Comprimido 500 mg', 'dynadol-comprimido', 'analgesicos',
    'Paracetamol em comprimidos para alívio eficaz de dores leves a moderadas no dia a dia.',
    'Paracetamol 500 mg por comprimido.',
    'Blisters em caixa de 20 comprimidos.',
    ARRAY['Dor de cabeça','Dor de dente','Resfriado e gripe','Dor nas articulações','Cólicas menstruais'],
    ARRAY['Ação rápida e confiável','Eficácia clinicamente comprovada','Fácil administração'],
    '/seed/dynadol-comprimido.jpg', 2
  ),
  (
    'Biofloxx 500', 'biofloxx-500', 'antibioticos',
    'Antibiótico de amplo espectro da família das quinolonas para infecções bacterianas.',
    'Cloridrato de Ciprofloxacina 500 mg (equivalente à substância ativa).',
    'Caixa com blisters de comprimidos revestidos.',
    ARRAY['Infecções respiratórias (sinusite, pneumonia)','Infecções urinárias','Infecções gastrointestinais','Infecções ósseas e articulares','Outras infecções bacterianas graves'],
    ARRAY['Largo espectro de ação','Indicado para uso hospitalar e ambulatório','Origem certificada'],
    '/seed/biofloxx-500.jpg', 3
  ),
  (
    'Enalapril 10 Arya', 'enalapril-10-arya', 'cardiovasculares',
    'Essencial no controle da hipertensão arterial, promovendo saúde cardiovascular a longo prazo.',
    'Maleato de Enalapril 10,0 mg por comprimido.',
    'Cartucho com 28 comprimidos.',
    ARRAY['Hipertensão arterial','Insuficiência cardíaca','Prevenção cardiovascular contínua'],
    ARRAY['Dose precisa e consistente','Tratamento de longa duração','Confiável e amplamente prescrito'],
    '/seed/enalapril-10.jpg', 4
  )
) AS v(name, slug, cat_slug, short_description, composition, presentation, indications, highlights, image_url, sort_order);
