import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const heroDir = path.resolve('public/images/hero');
const outDir = path.resolve('public/images/hero-webp');

fs.mkdirSync(outDir, { recursive: true });

const svgFiles = fs.readdirSync(heroDir).filter(f => f.endsWith('.svg'));

for (const file of svgFiles) {
    const svgContent = fs.readFileSync(path.join(heroDir, file), 'utf-8');

    // Find all base64 embedded images
    const regex = /data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+/=]+)/g;
    let match;
    let largestBuffer = null;
    let largestSize = 0;

    while ((match = regex.exec(svgContent)) !== null) {
        const buf = Buffer.from(match[2], 'base64');
        if (buf.length > largestSize) {
            largestSize = buf.length;
            largestBuffer = buf;
        }
    }

    if (!largestBuffer) {
        console.log(`⚠️  ${file}: No embedded images found, skipping`);
        continue;
    }

    const outName = file.replace('.svg', '.webp');
    const outPath = path.join(outDir, outName);

    const metadata = await sharp(largestBuffer).metadata();

    // For mobile optimization: resize images wider than 1920px
    let pipeline = sharp(largestBuffer);
    if (metadata.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
    }

    await pipeline.webp({ quality: 80 }).toFile(outPath);

    const outStat = fs.statSync(outPath);
    console.log(`✅ ${file} (${(largestSize / 1024 / 1024).toFixed(1)}MB embedded) → ${outName} (${(outStat.size / 1024).toFixed(0)}KB) [${metadata.width}x${metadata.height}]`);
}

console.log('\nDone! All hero images converted to WebP.');
