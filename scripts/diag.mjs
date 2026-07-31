import { chromium } from "playwright";
const browser = await chromium.launch();
for (const width of [1440, 1024, 768, 390]) {
const page = await browser.newPage({ viewport: { width, height: 900 } });
await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });
const info = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const overflowers = [];
  document.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.right > vw + 0.5 || r.left < -0.5) {
      overflowers.push({
        tag: el.tagName.toLowerCase(),
        cls: el.className?.toString?.().slice(0, 40),
        left: Math.round(r.left),
        right: Math.round(r.right),
        w: Math.round(r.width),
      });
    }
  });
  const hero = document.querySelector(".hero").getBoundingClientRect();
  const nav = document.querySelector(".nav").getBoundingClientRect();
  return {
    innerWidth: window.innerWidth,
    clientWidth: vw,
    scrollWidth: document.documentElement.scrollWidth,
    horizontalOverflow: document.documentElement.scrollWidth - vw,
    heroTop: Math.round(hero.top),
    navTop: Math.round(nav.top),
    navHeight: Math.round(nav.height),
    overflowerCount: overflowers.length,
    overflowers: overflowers.slice(0, 4),
  };
});
console.log(`--- width ${width} ---`);
console.log(JSON.stringify(info, null, 2));
await page.close();
}
await browser.close();
