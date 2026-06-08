import fs from "fs";
import path from "path";
import sharp from "sharp";

const folder = "./public";

async function convertImages(dir: string) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await convertImages(fullPath);
      continue;
    }

    if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const output = fullPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(output);

      console.log(`Convertido: ${output}`);
    }
  }
}

convertImages(folder);