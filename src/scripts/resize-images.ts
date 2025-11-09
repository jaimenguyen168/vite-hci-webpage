import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs";

async function resizeImages() {
  console.log("🖼️  Starting image resize...");

  // Create output directories if they don't exist
  const dirs = ["public/logos-resized", "public/images/cover-resized"];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Resize social media logos to 80x80 (2x for 40x40 display)
  const logos = await glob("public/logos/*.{png,webp,jpg,jpeg}");
  for (const logo of logos) {
    const { name, ext } = path.parse(logo);
    const output = `public/logos-resized/${name}${ext}`;

    await sharp(logo)
      .resize(80, 80, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .toFile(output);

    console.log(`✅ Resized ${logo} → ${output}`);
  }

  // Resize ALL cover images to appropriate display sizes
  const largeCoverImages = await glob("public/images/cover/*.*");
  for (const image of largeCoverImages) {
    const { name, ext } = path.parse(image);
    const output = `public/images/cover-resized/${name}${ext}`;

    // Get image metadata to determine best resize dimensions
    const metadata = await sharp(image).metadata();
    console.log(`📏 ${image}: ${metadata.width}x${metadata.height}`);

    // Resize to reasonable web dimensions (max 1200px wide)
    await sharp(image)
      .resize(1200, null, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: 85 })
      .toFile(output);

    console.log(`✅ Resized ${image} → ${output}`);
  }

  console.log("🎉 Image resize complete!");
}

resizeImages().catch(console.error);
