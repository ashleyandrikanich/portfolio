import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

await page.goto("https://glowsync-nine.vercel.app/", {
  waitUntil: "domcontentloaded",
  timeout: 90_000,
});
await page.waitForTimeout(2500);
await page.screenshot({
  path: path.join(publicDir, "glowsync-preview.png"),
});
console.log("Saved glowsync-preview.png");

const resumeHtml = path.join(publicDir, "resume-preview.html");
await page.goto(`file:///${resumeHtml.replace(/\\/g, "/")}`, {
  waitUntil: "domcontentloaded",
});
await page.pdf({
  path: path.join(publicDir, "Ashley-Andrikanich-Resume.pdf"),
  format: "Letter",
  printBackground: true,
});
console.log("Saved Ashley-Andrikanich-Resume.pdf");

await browser.close();
