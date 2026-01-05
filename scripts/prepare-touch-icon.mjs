import { copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const projectRoot = resolve(__dirname, '..');
  const publicDir = resolve(projectRoot, 'public');
  const src = resolve(publicDir, 'icon-180.png');
  const dest = resolve(publicDir, 'apple-touch-icon-180x180.png');
  try {
    await copyFile(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
  } catch (err) {
    console.error('Failed to prepare apple touch icon:', err);
    process.exitCode = 1;
  }
}

main();
