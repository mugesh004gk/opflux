import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convert() {
  try {
    const pubDir = path.join(__dirname, 'public');
    
    if (fs.existsSync(path.join(pubDir, 'hero-bg.png'))) {
      await sharp(path.join(pubDir, 'hero-bg.png'))
        .webp({ quality: 80 })
        .toFile(path.join(pubDir, 'hero-bg.webp'));
      console.log('Converted hero-bg.webp');
    }

    console.log('Conversion complete!');
  } catch (err) {
    console.error('Error converting images:', err);
  }
}

convert();
