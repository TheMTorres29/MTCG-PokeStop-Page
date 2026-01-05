import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function main() {
  const projectRoot = resolve(__dirname, '..');
  const publicDir = resolve(projectRoot, 'public');
  const src = resolve(publicDir, 'icon-512.png');

  const sizes = [180, 167, 152, 120, 76, 60];

  await ensureDir(publicDir);

  for (const size of sizes) {
    const file = resolve(publicDir, `apple-touch-icon-${size}x${size}.png`);
    await sharp(src)
      .resize(size, size)
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(file);
    console.log(`Wrote ${file}`);
  }

  // Also write the generic apple-touch-icon.png as 180x180
  const generic = resolve(publicDir, 'apple-touch-icon.png');
  await sharp(src)
    .resize(180, 180)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(generic);
  console.log(`Wrote ${generic}`);
}

main().catch((err) => {
  console.error('Failed generating apple icons:', err);
  process.exit(1);
});
