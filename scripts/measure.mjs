import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });
const rects = await page.evaluate(() => {
  const q = (s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return { s, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), pos: cs.position, z: cs.zIndex };
  };
  return [".hero", ".hero__bg", ".hero__video", ".hero__inner", ".hero__text"].map(q);
});
console.log(JSON.stringify(rects, null, 2));
await browser.close();
