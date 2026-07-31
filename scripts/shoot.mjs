import { chromium } from "playwright";

const base = "http://localhost:4321";
const outDir = "/Users/kyungjinoh/.cursor/projects/Users-kyungjinoh-Desktop-Coding-Entrepreneurship-Journal/assets";

const shots = [
  { name: "home-desktop", url: "/", width: 1440, height: 1000, full: true },
  { name: "home-mobile", url: "/", width: 390, height: 844, full: true },
  { name: "home-tablet", url: "/", width: 820, height: 1180, full: false },
  { name: "log-desktop", url: "/log/shipping-v1/", width: 1440, height: 1000, full: true },
];

const browser = await chromium.launch();
for (const s of shots) {
  const page = await browser.newPage({
    viewport: { width: s.width, height: s.height },
    // Headless can't decode H.264; reduced-motion holds the poster frame so the
    // hero composition (scrim, text, avatar) is visible for QA.
    reducedMotion: "reduce",
  });
  await page.goto(base + s.url, { waitUntil: "networkidle" });
  // Scroll through the page to trigger lazy-loaded imagery, then return to top.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/qa-${s.name}.png`, fullPage: s.full });
  console.log(`shot: qa-${s.name}.png`);
  await page.close();
}
await browser.close();
