import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/uploads/*', { eager: true });

const byFilename = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  byFilename.set(path.split('/').pop()!, mod.default);
}

export function uploadImage(filename: string): ImageMetadata {
  const img = byFilename.get(filename);
  if (!img) throw new Error(`Unknown upload image: ${filename}`);
  return img;
}
