import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, LogOut, Package, Tags, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import ProductsManager from "@/components/admin/ProductsManager";
import CategoriesManager from "@/components/admin/CategoriesManager";

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("products");

  useEffect(() => {
    if (!loading && !user) navigate("/auth", { replace: true });
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) return null;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md text-center space-y-4">
          <h1 className="text-2xl font-bold">Sem acesso</h1>
          <p className="text-muted-foreground">
            A sua conta ({user.email}) não tem permissões de administrador. Peça a
            um admin existente para o promover na tabela <code>user_roles</code>.
          </p>
          <div className="flex gap-2 justify-center">
            <Button asChild variant="outline">
              <Link to="/">Voltar ao site</Link>
            </Button>
            <Button variant="ghost" onClick={() => signOut()}>
              Terminar sessão
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-white border-b border-border/60 sticky top-0 z-30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" /> Site
            </Link>
            <div>
              <h1 className="font-bold text-lg">Gestão do Catálogo</h1>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => signOut()}>
            <LogOut className="w-4 h-4 mr-1.5" /> Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="products">
              <Package className="w-4 h-4 mr-1.5" /> Produtos
            </TabsTrigger>
            <TabsTrigger value="categories">
              <Tags className="w-4 h-4 mr-1.5" /> Categorias
            </TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-6">
            <ProductsManager />
          </TabsContent>
          <TabsContent value="categories" className="mt-6">
            <CategoriesManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
