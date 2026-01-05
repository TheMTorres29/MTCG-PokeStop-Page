import pngToIco from 'png-to-ico';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const projectRoot = resolve(__dirname, '..');
  const publicDir = resolve(projectRoot, 'public');
  const inputs = [
    resolve(publicDir, 'icon-180.png'),
    resolve(publicDir, 'icon-192.png'),
    resolve(publicDir, 'icon-512.png'),
  ];

  try {
    const icoBuffer = await pngToIco(inputs);
    const outPath = resolve(publicDir, 'favicon.ico');
    await writeFile(outPath, icoBuffer);
    console.log(`Created: ${outPath}`);
  } catch (err) {
    console.error('Failed to generate favicon.ico:', err);
    process.exitCode = 1;
  }
}

main();
