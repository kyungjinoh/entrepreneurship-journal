/**
 * Re-import build logs from the Google Docs HTML export.
 * Preserves wording/order; sets year/status/favorites/additional; fixes cover media.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, unlinkSync } from "node:fs";
import { join, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const HTML = "/Users/kyungjinoh/Downloads/Entrepreneurship Journal/EntrepreneurshipJournal.html";
const IMG_SRC = "/Users/kyungjinoh/Downloads/Entrepreneurship Journal/images";
const MD_DIR = join(ROOT, "src/content/buildlogs");
const IMG_DST = join(ROOT, "public/images");

const META = {
  "Moisture & Extreme Weather Research Project": {
    yearLabel: "2026",
    status: "Shipped",
    featured: true,
    additional: false,
    date: "2026-07-20",
  },
  "School Clicker": {
    yearLabel: "2025-Present",
    status: "In Progress",
    featured: true,
    additional: false,
    date: "2025-01-01",
  },
  "Ironman Helmet": {
    yearLabel: "2026-Present",
    status: "In Progress",
    featured: false,
    additional: false,
    date: "2026-01-13",
  },
  "AI Snake Game Bot": {
    yearLabel: "2026",
    status: "Shipped",
    featured: false,
    additional: false,
    date: "2026-06-08",
    cover: "/images/ai-snake-thumbnail.jpg",
    coverType: "image",
  },
  "Science Snap": {
    yearLabel: "2024-Present",
    status: "In Progress",
    featured: false,
    additional: false,
    date: "2024-01-01",
  },
  MeetingsFor1000: {
    yearLabel: "2025-Present",
    status: "In Progress",
    featured: false,
    additional: false,
    date: "2025-01-01",
  },
  "Orange Peel Candle": {
    yearLabel: "2024",
    status: "Shipped",
    featured: false,
    additional: false,
    date: "2024-06-01",
  },
  "Step Up": {
    yearLabel: "2025-Present",
    status: "In Progress",
    featured: false,
    additional: false,
    date: "2025-01-01",
  },
  "AllerGen AI": {
    yearLabel: "2025",
    status: "Shipped",
    featured: false,
    additional: false,
    date: "2025-06-01",
  },
  "Seed-Based Mask": {
    yearLabel: "2024",
    status: "Shipped",
    featured: false,
    additional: false,
    date: "2024-06-01",
  },
  "Unity Game": {
    yearLabel: "2026",
    status: "Shipped",
    featured: false,
    additional: false,
    date: "2026-03-02",
    cover: "/video/unity-game.mp4",
    coverType: "video",
    skipBodyMedia: ["unity-game.mp4", "unity-game-poster.png"],
  },
  Hackathons: {
    yearLabel: null,
    status: "Shipped",
    featured: false,
    additional: true,
    date: "2025-12-01",
  },
  "What I learned in 2025": {
    yearLabel: null,
    status: "Shipped",
    featured: false,
    additional: true,
    date: "2026-01-11",
    titleOverride: "What I learned in 2025",
    cover: "/images/what-i-learned-2025.jpg",
    coverType: "image",
  },
};

const COMMENT_MEDIA = {
  cmnt1: "/images/snake-demo-1.gif",
  cmnt2: "/images/snake-demo-1.gif",
  cmnt3: "/images/snake-demo-2.gif",
  cmnt4: "/images/snake-demo-3.gif",
  cmnt5: "/video/unity-game.mp4",
};

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rarr;/g, "→")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCharCode(parseInt(n, 16)),
    );
}

function textOf(s) {
  s = s.replace(/<br\s*\/?>/gi, "\n");
  s = s.replace(/<[^>]+>/g, "");
  s = decodeEntities(s);
  return s
    .split("\n")
    .map((ln) => ln.replace(/[ \t]+/g, " ").trim())
    .join("\n")
    .trim();
}

function slugify(title) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") || "post"
  );
}

function yq(s) {
  return `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ").trim()}"`;
}

function cleanHref(href) {
  if (href.includes("google.com/url")) {
    const m = href.match(/[?&]q=([^&]+)/);
    if (m) return decodeURIComponent(m[1]);
  }
  return href;
}

function inlineMd(fragment) {
  fragment = fragment.replace(
    /<a[^>]*href="#(cmnt\d+)"[^>]*>.*?<\/a>/gis,
    (_, cid) => {
      const media = COMMENT_MEDIA[cid];
      if (!media) return "";
      if (media.endsWith(".mp4")) {
        return `\n\n<video class="article-video" src="${media}" controls playsinline preload="metadata" poster="/images/unity-game-poster.png"></video>\n\n`;
      }
      return `\n\n![](${media})\n\n`;
    },
  );
  fragment = fragment.replace(/<a[^>]*href="#cmnt_ref\d+"[^>]*>.*?<\/a>/gis, "");
  fragment = fragment.replace(
    /<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gis,
    (_, href, txt) => {
      const t = textOf(txt) || href;
      return `[${t}](${cleanHref(href)})`;
    },
  );
  fragment = fragment.replace(/<img[^>]*src="(images\/[^"]+)"[^>]*\/?>/gi, (_, src) => {
    return `\n\n![](/images/${basename(src)})\n\n`;
  });
  fragment = fragment.replace(
    /<span[^>]*font-weight:\s*700[^>]*>(.*?)<\/span>/gis,
    "**$1**",
  );
  fragment = fragment.replace(
    /<span[^>]*font-style:\s*italic[^>]*>(.*?)<\/span>/gis,
    "*$1*",
  );
  fragment = fragment.replace(/<\/?span[^>]*>/gi, "");
  fragment = fragment.replace(/<br\s*\/?>/gi, "  \n");
  return textOf(fragment);
}

function listToMd(listHtml, ordered) {
  const items = [...listHtml.matchAll(/<li[^>]*>(.*?)<\/li>/gis)].map((m) =>
    m[1],
  );
  return items
    .map((item, idx) => {
      const txt = inlineMd(item).replace(/\n+/g, " ").trim();
      return ordered ? `${idx + 1}. ${txt}` : `- ${txt}`;
    })
    .join("\n");
}

function htmlToMd(chunkHtml) {
  const mdParts = [];
  const images = [];
  const pattern =
    /(?<img><img\b[^>]*>)|(?<ol><ol\b[^>]*>.*?<\/ol>)|(?<ul><ul\b[^>]*>.*?<\/ul>)|(?<h2><h2\b[^>]*>.*?<\/h2>)|(?<h3><h3\b[^>]*>.*?<\/h3>)|(?<p><p\b[^>]*>.*?<\/p>)/gis;

  let m;
  while ((m = pattern.exec(chunkHtml))) {
    if (m.groups.img) {
      const srcM = m.groups.img.match(/src="(images\/[^"]+)"/);
      if (srcM) {
        const name = basename(srcM[1]);
        images.push(name);
        mdParts.push(`![](/images/${name})`);
      }
    } else if (m.groups.ol) {
      mdParts.push(listToMd(m.groups.ol, true));
    } else if (m.groups.ul) {
      mdParts.push(listToMd(m.groups.ul, false));
    } else if (m.groups.h2) {
      const t = textOf(m.groups.h2.replace(/^<h2[^>]*>|<\/h2>$/gi, ""));
      if (t) mdParts.push(`## ${t}`);
    } else if (m.groups.h3) {
      const t = textOf(m.groups.h3.replace(/^<h3[^>]*>|<\/h3>$/gi, ""));
      if (t) mdParts.push(`### ${t}`);
    } else if (m.groups.p) {
      const attrs = m.groups.p.match(/^<p([^>]*)>/i)?.[1] || "";
      const inner = m.groups.p.replace(/^<p[^>]*>|<\/p>$/gi, "");
      const isTitleish = /(?:c12 title|c5 title|subtitle)/.test(attrs);
      // Title/subtitle rows sometimes wrap the cover image — keep images, skip text.
      if (isTitleish) {
        for (const im of inner.matchAll(/<img[^>]*src="(images\/[^"]+)"[^>]*\/?>/gi)) {
          const name = basename(im[1]);
          images.push(name);
          mdParts.push(`![](/images/${name})`);
        }
        // Also surface comment-linked media if any
        const maybe = inlineMd(inner);
        for (const block of maybe.split(/\n{2,}/)) {
          const b = block.trim();
          if (!b) continue;
          if (b.startsWith("![") || b.startsWith("<video")) mdParts.push(b);
        }
        continue;
      }
      const plain = textOf(inner.replace(/<a[^>]*>.*?<\/a>/gis, ""));
      if (/^(Screen Recording|Untitled design)/.test(plain)) continue;
      const t = inlineMd(inner);
      for (const block of t.split(/\n{2,}/)) {
        const b = block.trim();
        if (!b) continue;
        mdParts.push(b);
        for (const im of b.matchAll(/!\[\]\(\/images\/([^)]+)\)/g)) {
          images.push(im[1]);
        }
      }
    }
  }
  let md = mdParts.join("\n\n");
  md = md.replace(/\n{3,}/g, "\n\n").trim() + "\n";
  return { md, images };
}

const raw = readFileSync(HTML, "utf8");
const bodyM = raw.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyM) throw new Error("No body in HTML");
const body = bodyM[1];

const shorts = [];
for (const m of body.matchAll(
  /<p[^>]*class="[^"]*c12 title[^"]*"[^>]*>(.*?)<\/p>/gis,
)) {
  const t = textOf(m[1]);
  if (t) shorts.push({ start: m.index, end: m.index + m[0].length, short: t });
}

mkdirSync(MD_DIR, { recursive: true });
mkdirSync(IMG_DST, { recursive: true });
for (const f of readdirSync(MD_DIR)) {
  if (f.endsWith(".md")) unlinkSync(join(MD_DIR, f));
}
for (const f of readdirSync(IMG_SRC)) {
  copyFileSync(join(IMG_SRC, f), join(IMG_DST, f));
}

shorts.forEach((item, i) => {
  const end = i + 1 < shorts.length ? shorts[i + 1].start : body.length;
  const chunk = body.slice(item.start, end);
  const meta = META[item.short];
  if (!meta) throw new Error(`Missing META for ${item.short}`);

  let longTitle = "";
  for (const m of chunk.matchAll(
    /<p[^>]*class="[^"]*c5 title[^"]*"[^>]*>(.*?)<\/p>/gis,
  )) {
    const t = textOf(m[1]);
    if (t) {
      longTitle = t;
      break;
    }
  }
  const title = meta.titleOverride || longTitle || item.short;

  const subM = chunk.match(
    /<p[^>]*class="[^"]*subtitle[^"]*"[^>]*>(.*?)<\/p>/is,
  );
  const summary = subM ? textOf(subM[1]) : title;

  let contentStart = 0;
  if (subM) contentStart = subM.index + subM[0].length;
  else {
    const longM = chunk.match(
      /<p[^>]*class="[^"]*c5 title[^"]*"[^>]*>(.*?)<\/p>/is,
    );
    contentStart = longM ? longM.index + longM[0].length : item.end - item.start;
  }

  let { md: mdBody, images } = htmlToMd(chunk.slice(contentStart));

  if (item.short === "What I learned in 2025") {
    mdBody = mdBody.replace(/^January 11, 2026\s*\n+/, "");
    mdBody = mdBody.replace(/\nJanuary 11, 2026\n/g, "\n");
  }

  const coverType = meta.coverType || "image";
  let cover = meta.cover || (images[0] ? `/images/${images[0]}` : null);

  const skipAll = new Set(meta.skipBodyMedia || []);
  if (cover && coverType === "image") {
    const coverName = basename(cover);
    // Remove the first body occurrence of the cover image (shown in the hero figure).
    mdBody = mdBody.replace(
      new RegExp(`!\\[[^\\]]*\\]\\(/images/${coverName}\\)\\s*`),
      "",
    );
  }
  // Thumbnail gif/video must not repeat anywhere in the body.
  for (const name of skipAll) {
    mdBody = mdBody.replace(
      new RegExp(`!\\[[^\\]]*\\]\\(/images/${name.replace(".", "\\.")}\\)\\s*`, "g"),
      "",
    );
    mdBody = mdBody.replace(
      new RegExp(
        `<video[^>]*src="[^"]*${name.replace(".", "\\.")}"[^>]*><\\/video>\\s*`,
        "g",
      ),
      "",
    );
  }
  mdBody = mdBody.replace(
    new RegExp(String.raw`(!\[[^\]]*\]\(/images/([^)]+)\))\s*\n+\1`, "g"),
    "$1",
  );
  // Stray letters left by Google Docs comment anchors (e.g. "d", "D", "Aft").
  mdBody = mdBody.replace(/^(?:d|D|Aft)\s*\n+/m, "");
  mdBody = mdBody.replace(/\n(?:d|D|Aft)\s*\n+(?=!\[|<video|## )/g, "\n\n");
  mdBody = mdBody.replace(/\n{3,}/g, "\n\n").trim() + "\n";

  const titleLead = title.includes(":")
    ? title.split(":")[0].trim()
    : title;

  const tags = item.short
    .match(/[A-Za-z0-9]+/g)
    ?.filter((w) => w.length > 2 && !["the", "and", "for", "with"].includes(w.toLowerCase()))
    .slice(0, 4) || [];

  const fm = [
    "---",
    `title: ${yq(title)}`,
    `titleLead: ${yq(titleLead)}`,
    `date: ${meta.date}`,
    `summary: ${yq(summary)}`,
    `status: "${meta.status}"`,
    `featured: ${meta.featured}`,
    `additional: ${meta.additional}`,
    `order: ${i + 1}`,
  ];
  if (meta.yearLabel) fm.push(`yearLabel: ${yq(meta.yearLabel)}`);
  if (cover) {
    fm.push(`image: ${yq(cover)}`);
    fm.push(`imageAlt: ${yq(item.short)}`);
  } else {
    fm.push(`imageAlt: ${yq(item.short)}`);
  }
  fm.push(`coverType: "${coverType}"`);
  fm.push(`tags: ${JSON.stringify(tags)}`);
  fm.push("---\n");

  const slug = slugify(item.short);
  const out = join(MD_DIR, `${slug}.md`);
  writeFileSync(out, fm.join("\n") + "\n" + mdBody, "utf8");
  console.log(
    `wrote ${slug}.md cover=${cover} type=${coverType} additional=${meta.additional}`,
  );
});

console.log("DONE", shorts.length);
