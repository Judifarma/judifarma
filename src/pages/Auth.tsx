import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres").max(72),
});

const Auth = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading } = useAuth();
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!loading && user) {
      navigate(isAdmin ? "/admin" : "/", { replace: true });
    }
  }, [user, isAdmin, loading, navigate]);

  const handle = async (mode: "signin" | "signup") => {
    const parsed = schema.safeParse({ email, password });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Conta criada. Pode iniciar sessão.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Sessão iniciada.");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erro desconhecido";
      toast.error(msg.includes("Invalid login") ? "Credenciais inválidas" : msg);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>
        <div className="bg-card border border-border/60 rounded-3xl shadow-elevated p-8">
          <h1 className="text-2xl font-bold mb-1">Área de Gestão</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Aceda à gestão do catálogo JudiFarma.
          </p>

          <Tabs defaultValue="signin">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="signin">Entrar</TabsTrigger>
              <TabsTrigger value="signup">Registar</TabsTrigger>
            </TabsList>

            <div className="space-y-4 mt-6">
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <TabsContent value="signin" className="mt-6">
              <Button
                className="w-full"
                onClick={() => handle("signin")}
                disabled={busy}
              >
                {busy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Entrar
              </Button>
            </TabsContent>
            <TabsContent value="signup" className="mt-6 space-y-3">
              <Button
                className="w-full"
                variant="medical"
                onClick={() => handle("signup")}
                disabled={busy}
              >
                {busy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Criar conta
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                O primeiro registo não recebe automaticamente acesso de admin.
                Após o registo, peça a um administrador para o promover.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
