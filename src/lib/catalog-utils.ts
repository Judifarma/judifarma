import dynadolXarope from "@/assets/catalog/dynadol-xarope.jpg";
import dynadolComprimido from "@/assets/catalog/dynadol-comprimido.jpg";
import biofloxx500 from "@/assets/catalog/biofloxx-500.jpg";
import enalapril10 from "@/assets/catalog/enalapril-10.jpg";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Bundled fallback images keyed by product slug. Used when the database
// image_url is missing or still pointing to a seed placeholder.
const SLUG_IMAGE_MAP: Record<string, string> = {
  "dynadol-xarope": dynadolXarope,
  "dynadol-comprimido": dynadolComprimido,
  "dynadol-comprimido-500-mg": dynadolComprimido,
  "biofloxx-500": biofloxx500,
  "enalapril-10": enalapril10,
  "enalapril-10-arya": enalapril10,
};

const seedFilenameToSlug: Record<string, string> = {
  "dynadol-xarope.jpg": "dynadol-xarope",
  "dynadol-comprimido.jpg": "dynadol-comprimido",
  "biofloxx-500.jpg": "biofloxx-500",
  "enalapril-10.jpg": "enalapril-10",
};

export const resolveImage = (
  url: string | null | undefined,
  slug?: string | null,
): string | null => {
  if (url && url.startsWith("/seed/")) {
    const file = url.replace("/seed/", "");
    const mapped = seedFilenameToSlug[file];
    if (mapped && SLUG_IMAGE_MAP[mapped]) return SLUG_IMAGE_MAP[mapped];
  }
  if (url && !url.startsWith("/seed/")) return url;
  if (slug && SLUG_IMAGE_MAP[slug]) return SLUG_IMAGE_MAP[slug];
  return null;
};
