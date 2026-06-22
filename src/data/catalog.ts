import dynadolXarope from "@/assets/catalog/dynadol-xarope.jpg";
import dynadolComprimido from "@/assets/catalog/dynadol-comprimido.jpg";
import biofloxx500 from "@/assets/catalog/biofloxx-500.jpg";
import enalapril10 from "@/assets/catalog/enalapril-10.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Analgésicos" | "Antibióticos" | "Cardiovasculares";
  shortDescription: string;
  composition: string;
  presentation: string;
  indications: string[];
  highlights: string[];
  image: string;
};

export const categories = ["Todos", "Analgésicos", "Antibióticos", "Cardiovasculares"] as const;

export const products: Product[] = [
  {
    id: "dynadol-xarope",
    name: "Dynadol Xarope",
    category: "Analgésicos",
    shortDescription:
      "Alívio rápido de dores leves a moderadas e febre. Formulação pediátrica com sabor agradável.",
    composition: "Cada 5 ml contém 120 mg de paracetamol.",
    presentation: "Frasco de 100 ml.",
    indications: [
      "Dor de cabeça",
      "Febres leves e moderadas",
      "Dores musculares",
      "Sintomas de gripe e constipação",
    ],
    highlights: [
      "Dosagem pediátrica precisa",
      "Volume conveniente de 100 ml",
      "Embalagem segura e prática",
    ],
    image: dynadolXarope,
  },
  {
    id: "dynadol-comprimido",
    name: "Dynadol Comprimido 500 mg",
    category: "Analgésicos",
    shortDescription:
      "Paracetamol em comprimidos para alívio eficaz de dores leves a moderadas no dia a dia.",
    composition: "Paracetamol 500 mg por comprimido.",
    presentation: "Blisters em caixa de 20 comprimidos.",
    indications: [
      "Dor de cabeça",
      "Dor de dente",
      "Resfriado e gripe",
      "Dor nas articulações",
      "Cólicas menstruais",
    ],
    highlights: [
      "Ação rápida e confiável",
      "Eficácia clinicamente comprovada",
      "Fácil administração",
    ],
    image: dynadolComprimido,
  },
  {
    id: "biofloxx-500",
    name: "Biofloxx 500",
    category: "Antibióticos",
    shortDescription:
      "Antibiótico de amplo espectro da família das quinolonas para infecções bacterianas.",
    composition: "Cloridrato de Ciprofloxacina 500 mg (equivalente à substância ativa).",
    presentation: "Caixa com blisters de comprimidos revestidos.",
    indications: [
      "Infecções respiratórias (sinusite, pneumonia)",
      "Infecções urinárias",
      "Infecções gastrointestinais",
      "Infecções ósseas e articulares",
      "Outras infecções bacterianas graves",
    ],
    highlights: [
      "Largo espectro de ação",
      "Indicado para uso hospitalar e ambulatório",
      "Origem certificada",
    ],
    image: biofloxx500,
  },
  {
    id: "enalapril-10-arya",
    name: "Enalapril 10 Arya",
    category: "Cardiovasculares",
    shortDescription:
      "Essencial no controle da hipertensão arterial, promovendo saúde cardiovascular a longo prazo.",
    composition: "Maleato de Enalapril 10,0 mg por comprimido.",
    presentation: "Cartucho com 28 comprimidos.",
    indications: [
      "Hipertensão arterial",
      "Insuficiência cardíaca",
      "Prevenção cardiovascular contínua",
    ],
    highlights: [
      "Dose precisa e consistente",
      "Tratamento de longa duração",
      "Confiável e amplamente prescrito",
    ],
    image: enalapril10,
  },
];
