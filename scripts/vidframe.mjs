import { chromium } from "playwright";

const outDir =
  "/Users/kyungjinoh/.cursor/projects/Users-kyungjinoh-Desktop-Coding-Entrepreneurship-Journal/assets";
const vids = ["cand-a", "cand-b"];

const browser = await chromium.launch();
for (const v of vids) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.setContent(
    `<body style="margin:0;background:#000">
       <video id="v" src="http://localhost:4321/video/${v}.mp4" muted style="width:1280px;height:720px;object-fit:cover"></video>
     </body>`
  );
  await page.evaluate(async () => {
    const v = document.getElementById("v");
    await v.play().catch(() => {});
    v.currentTime = 2;
    await new Promise((r) => setTimeout(r, 800));
    v.pause();
  });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${outDir}/vidframe-${v}.png` });
  console.log(`frame: vidframe-${v}.png`);
  await page.close();
}
await browser.close();
