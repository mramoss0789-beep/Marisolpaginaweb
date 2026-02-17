import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const heroDir = path.resolve('public/images/hero');
const outDir = path.resolve('public/images/hero-webp');

fs.mkdirSync(outDir, { recursive: true });

const svgFiles = fs.readdirSync(heroDir).filter(f => f.endsWith('.svg'));

for (const file of svgFiles) {
    const svgPath = path.join(heroDir, file);
    const svgBuffer = fs.readFileSync(svgPath);
    const outName = file.replace('.svg', '.webp');
    const outPath = path.join(outDir, outName);

    try {
        // Render the full SVG (with all its embedded images, layouts, etc.) to WebP
        // Use a high density for quality, then resize down
        const metadata = await sharp(svgBuffer, { density: 150 }).metadata();

        let pipeline = sharp(svgBuffer, { density: 150 });

        // Cap width at 1200px for side cards, 1920 for hero
        const maxWidth = file === 'hero.svg' ? 1920 : 1200;
        if (metadata.width && metadata.width > maxWidth) {
            pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
        }

        await pipeline.webp({ quality: 85 }).toFile(outPath);

        const outStat = fs.statSync(outPath);
        const inStat = fs.statSync(svgPath);
        const outMeta = await sharp(outPath).metadata();
        console.log(`✅ ${file} (${(inStat.size / 1024 / 1024).toFixed(1)}MB) → ${outName} (${(outStat.size / 1024).toFixed(0)}KB) [${outMeta.width}x${outMeta.height}]`);
    } catch (err) {
        console.error(`❌ ${file}: ${err.message}`);

        // Fallback: if SVG rendering fails, try extracting the largest image
        console.log(`   Trying fallback: extracting largest embedded image...`);
        const svgContent = fs.readFileSync(svgPath, 'utf-8');
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

        if (largestBuffer) {
            const maxWidth = file === 'hero.svg' ? 1920 : 1200;
            await sharp(largestBuffer)
                .resize({ width: maxWidth, withoutEnlargement: true })
                .webp({ quality: 85 })
                .toFile(outPath);

            const outStat = fs.statSync(outPath);
            console.log(`   ✅ Fallback: ${outName} (${(outStat.size / 1024).toFixed(0)}KB)`);
        }
    }
}

console.log('\nDone!');
