import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGS = [
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
] as const;

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { i18n } = useTranslation();
  const current = LANGS.find((l) => l.code === i18n.language.split("-")[0]) ?? LANGS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Select language"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-foreground hover:bg-primary/5 transition-colors ${className}`}
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline uppercase">{current.code}</span>
        <span className="sm:hidden">{current.flag}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className={`cursor-pointer gap-2 ${l.code === current.code ? "bg-primary/5 font-semibold" : ""}`}
          >
            <span>{l.flag}</span>
            <span>{l.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
