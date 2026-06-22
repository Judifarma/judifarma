export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const resolveImage = (url: string | null | undefined): string | null => {
  if (!url) return null;
  // Seeded placeholders that don't exist on disk – treat as missing.
  if (url.startsWith("/seed/")) return null;
  return url;
};
