import { useEffect, useState } from "react";
import { Loader2, Plus, Pencil, Trash2, Upload, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { supabase } from "@/integrations/supabase/client";
import { slugify, resolveImage } from "@/lib/catalog-utils";

type Category = { id: string; name: string };
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
  is_active: boolean;
  sort_order: number;
};

const emptyForm = {
  name: "",
  category_id: null as string | null,
  short_description: "",
  composition: "",
  presentation: "",
  indications: "",
  highlights: "",
  image_url: null as string | null,
  is_active: true,
  sort_order: 0,
};

const SIGNED_URL_TTL = 60 * 60 * 24 * 365; // 1 year

const ProductsManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    setLoading(true);
    const [p, c] = await Promise.all([
      supabase.from("products").select("*").order("sort_order"),
      supabase.from("categories").select("id, name").order("sort_order"),
    ]);
    if (p.error) toast.error(p.error.message);
    if (c.error) toast.error(c.error.message);
    setProducts(p.data ?? []);
    setCategories(c.data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const openNew = () => {
    setEditing(null);
    setForm({ ...emptyForm, sort_order: products.length + 1 });
    setDialogOpen(true);
  };

  const openEdit = (p: Product) => {
    setEditing(p);
    setForm({
      name: p.name,
      category_id: p.category_id,
      short_description: p.short_description,
      composition: p.composition,
      presentation: p.presentation,
      indications: p.indications.join("\n"),
      highlights: p.highlights.join("\n"),
      image_url: p.image_url,
      is_active: p.is_active,
      sort_order: p.sort_order,
    });
    setDialogOpen(true);
  };

  const uploadImage = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("product-images")
        .upload(path, file, { cacheControl: "31536000", upsert: false });
      if (upErr) throw upErr;
      const { data, error: signErr } = await supabase.storage
        .from("product-images")
        .createSignedUrl(path, SIGNED_URL_TTL);
      if (signErr) throw signErr;
      setForm((f) => ({ ...f, image_url: data.signedUrl }));
      toast.success("Imagem carregada");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao carregar imagem");
    } finally {
      setUploading(false);
    }
  };

  const save = async () => {
    if (!form.name.trim()) {
      toast.error("Nome é obrigatório");
      return;
    }
    setBusy(true);
    const payload = {
      name: form.name.trim(),
      slug: slugify(form.name),
      category_id: form.category_id,
      short_description: form.short_description.trim(),
      composition: form.composition.trim(),
      presentation: form.presentation.trim(),
      indications: form.indications
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      highlights: form.highlights
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      image_url: form.image_url,
      is_active: form.is_active,
      sort_order: form.sort_order,
    };
    const { error } = editing
      ? await supabase.from("products").update(payload).eq("id", editing.id)
      : await supabase.from("products").insert(payload);
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(editing ? "Produto atualizado" : "Produto criado");
    setDialogOpen(false);
    load();
  };

  const remove = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from("products").delete().eq("id", deleteId);
    if (error) toast.error(error.message);
    else {
      toast.success("Produto removido");
      load();
    }
    setDeleteId(null);
  };

  const toggleActive = async (p: Product) => {
    const { error } = await supabase
      .from("products")
      .update({ is_active: !p.is_active })
      .eq("id", p.id);
    if (error) toast.error(error.message);
    else load();
  };

  const catName = (id: string | null) =>
    categories.find((c) => c.id === id)?.name ?? "—";

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-bold">Produtos</h2>
          <p className="text-sm text-muted-foreground">
            Crie, edite, ative/oculte e elimine produtos do catálogo.
          </p>
        </div>
        <Button onClick={openNew}>
          <Plus className="w-4 h-4 mr-1.5" /> Novo produto
        </Button>
      </div>

      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-10 flex justify-center">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <div className="p-10 text-center text-muted-foreground text-sm">
            Sem produtos. Crie o primeiro.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="text-left p-3 w-16">Foto</th>
                  <th className="text-left p-3">Nome</th>
                  <th className="text-left p-3 hidden md:table-cell">Categoria</th>
                  <th className="text-left p-3 w-20">Ordem</th>
                  <th className="text-left p-3 w-20">Estado</th>
                  <th className="text-right p-3 w-32">Ações</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => {
                  const img = resolveImage(p.image_url);
                  return (
                    <tr key={p.id} className="border-t border-border/60">
                      <td className="p-3">
                        <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex items-center justify-center text-xs text-muted-foreground">
                          {img ? (
                            <img
                              src={img}
                              alt={p.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            "—"
                          )}
                        </div>
                      </td>
                      <td className="p-3 font-medium">{p.name}</td>
                      <td className="p-3 text-muted-foreground hidden md:table-cell">
                        {catName(p.category_id)}
                      </td>
                      <td className="p-3">{p.sort_order}</td>
                      <td className="p-3">
                        <button
                          onClick={() => toggleActive(p)}
                          className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                            p.is_active
                              ? "bg-accent/15 text-accent-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {p.is_active ? (
                            <Eye className="w-3 h-3" />
                          ) : (
                            <EyeOff className="w-3 h-3" />
                          )}
                          {p.is_active ? "Ativo" : "Oculto"}
                        </button>
                      </td>
                      <td className="p-3 text-right space-x-1">
                        <Button size="icon" variant="ghost" onClick={() => openEdit(p)}>
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => setDeleteId(p.id)}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Editar produto" : "Novo produto"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Nome *</Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Categoria</Label>
                <Select
                  value={form.category_id ?? "none"}
                  onValueChange={(v) =>
                    setForm({ ...form, category_id: v === "none" ? null : v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sem categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Sem categoria</SelectItem>
                    {categories.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>Descrição curta</Label>
              <Textarea
                rows={2}
                value={form.short_description}
                onChange={(e) =>
                  setForm({ ...form, short_description: e.target.value })
                }
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Composição</Label>
                <Textarea
                  rows={2}
                  value={form.composition}
                  onChange={(e) => setForm({ ...form, composition: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Apresentação</Label>
                <Textarea
                  rows={2}
                  value={form.presentation}
                  onChange={(e) =>
                    setForm({ ...form, presentation: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Indicações (uma por linha)</Label>
                <Textarea
                  rows={5}
                  value={form.indications}
                  onChange={(e) => setForm({ ...form, indications: e.target.value })}
                  placeholder="Dor de cabeça&#10;Febre"
                />
              </div>
              <div className="space-y-1.5">
                <Label>Destaques (um por linha)</Label>
                <Textarea
                  rows={5}
                  value={form.highlights}
                  onChange={(e) => setForm({ ...form, highlights: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Imagem do produto</Label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-xl bg-muted overflow-hidden flex items-center justify-center text-xs text-muted-foreground">
                  {resolveImage(form.image_url) ? (
                    <img
                      src={resolveImage(form.image_url)!}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    "Sem imagem"
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/70 cursor-pointer text-sm">
                    {uploading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Upload className="w-4 h-4" />
                    )}
                    Carregar imagem
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) uploadImage(file);
                        e.target.value = "";
                      }}
                    />
                  </label>
                  {form.image_url && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setForm({ ...form, image_url: null })}
                    >
                      Remover imagem
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Ordem</Label>
                <Input
                  type="number"
                  value={form.sort_order}
                  onChange={(e) =>
                    setForm({ ...form, sort_order: Number(e.target.value) || 0 })
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label>Visível no site</Label>
                <div className="flex items-center gap-3 h-10">
                  <Switch
                    checked={form.is_active}
                    onCheckedChange={(v) => setForm({ ...form, is_active: v })}
                  />
                  <span className="text-sm text-muted-foreground">
                    {form.is_active ? "Ativo" : "Oculto"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="ghost" onClick={() => setDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={save} disabled={busy}>
              {busy && <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />}
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={(o) => !o && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Eliminar produto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={remove}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProductsManager;
