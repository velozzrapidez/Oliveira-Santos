const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');
const files = fs.readdirSync(dir);

async function optimize() {
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const input = path.join(dir, file);
      const output = path.join(dir, file.replace(/\.(png|jpe?g)$/i, '.webp'));
      
      console.log(`Optimizing ${file}...`);
      await sharp(input)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true }) // resize to max 1920x1080
        .webp({ quality: 80 })
        .toFile(output);
      console.log(`Done: ${output}`);
    }
  }
}

optimize().catch(console.error);
