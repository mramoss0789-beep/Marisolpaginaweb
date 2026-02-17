/**
 * analyze-svgs.mjs
 *
 * For every SVG in the hero/ directory, find ALL base64-embedded images,
 * decode each one, and report:
 *   - decoded byte size
 *   - image format (from sharp metadata)
 *   - pixel dimensions (width x height)
 */

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const HERO_DIR = new URL(
  "../public/images/hero/",
  import.meta.url
).pathname;

// Matches data URIs like  data:image/png;base64,AAAA...
const BASE64_RE = /data:([^;]+);base64,([A-Za-z0-9+/=\s]+)/g;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function analyzeFile(filePath, fileName) {
  const svg = await readFile(filePath, "utf-8");

  // Collect every base64 hit
  const matches = [];
  let m;
  while ((m = BASE64_RE.exec(svg)) !== null) {
    matches.push({ mimeType: m[1], data: m[2] });
  }

  console.log(`\n${"=".repeat(70)}`);
  console.log(`FILE: ${fileName}`);
  console.log(`${"=".repeat(70)}`);
  console.log(`  SVG file size on disk: ${formatBytes(Buffer.byteLength(svg, "utf-8"))}`);
  console.log(`  Embedded base64 images found: ${matches.length}`);

  if (matches.length === 0) {
    console.log("  (no embedded images)");
    return;
  }

  for (let i = 0; i < matches.length; i++) {
    const { mimeType, data } = matches[i];
    // Strip any whitespace that might be in the base64 stream
    const clean = data.replace(/\s/g, "");
    const buf = Buffer.from(clean, "base64");

    console.log(`\n  --- Image #${i + 1} ---`);
    console.log(`    MIME type    : ${mimeType}`);
    console.log(`    Decoded size : ${formatBytes(buf.length)}`);

    try {
      const meta = await sharp(buf).metadata();
      console.log(`    Format       : ${meta.format}`);
      console.log(`    Dimensions   : ${meta.width} x ${meta.height}`);
      if (meta.channels) console.log(`    Channels     : ${meta.channels}`);
      if (meta.hasAlpha !== undefined) console.log(`    Has alpha    : ${meta.hasAlpha}`);
    } catch (err) {
      console.log(`    (could not read metadata: ${err.message})`);
    }
  }
}

// ---- main ----
const files = (await readdir(HERO_DIR))
  .filter((f) => f.endsWith(".svg"))
  .sort((a, b) => {
    // Natural sort: hero.svg first, then numeric
    if (a === "hero.svg") return -1;
    if (b === "hero.svg") return 1;
    return parseInt(a) - parseInt(b);
  });

console.log(`Found ${files.length} SVG files in ${HERO_DIR}\n`);

for (const file of files) {
  await analyzeFile(join(HERO_DIR, file), file);
}

console.log(`\n${"=".repeat(70)}`);
console.log("Done.");
