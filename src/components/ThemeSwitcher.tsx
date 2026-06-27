import { Sun, Moon, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme, type Theme } from "@/hooks/useTheme";

const OPTIONS: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

const ThemeSwitcher = ({ className = "" }: { className?: string }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const ActiveIcon = resolvedTheme === "dark" ? Moon : Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Select theme"
        className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-primary/5 transition-colors ${className}`}
      >
        <ActiveIcon className="w-4 h-4 text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {OPTIONS.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className={`cursor-pointer gap-2 ${value === theme ? "bg-primary/5 font-semibold" : ""}`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
