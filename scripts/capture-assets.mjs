import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const PORT = 3456;
const baseUrl = `http://127.0.0.1:${PORT}`;

function waitForServer(url, timeoutMs = 120_000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const poll = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        /* server still starting */
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error(`Server did not start within ${timeoutMs}ms`));
        return;
      }
      setTimeout(poll, 400);
    };
    poll();
  });
}

function startNextServer() {
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["next", "start", "-p", String(PORT)], {
      cwd: root,
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, NODE_ENV: "production" },
    });

    child.on("error", reject);

    resolve({
      child,
      stop: () => {
        child.kill("SIGTERM");
      },
    });
  });
}

console.log("Building portfolio for PDF export…");
execSync("npm run build", { cwd: root, stdio: "inherit" });

const server = await startNextServer();
try {
  await waitForServer(baseUrl);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

  try {
    await page.goto("https://glow-sync.vercel.app/", {
      waitUntil: "domcontentloaded",
      timeout: 90_000,
    });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: path.join(publicDir, "glowsync-preview.png"),
    });
    console.log("Saved glowsync-preview.png");
  } catch (err) {
    console.warn("GlowSync screenshot skipped:", err.message);
  }

  await page.emulateMedia({ media: "print" });
  await page.goto(`${baseUrl}/print/resume`, {
    waitUntil: "networkidle",
    timeout: 60_000,
  });

  const docHeight = await page.evaluate(
    () => document.documentElement.scrollHeight
  );
  await page.setViewportSize({
    width: 816,
    height: Math.max(docHeight + 40, 1056),
  });
  await page.waitForTimeout(300);

  const resumePdf = path.join(publicDir, "Ashley-Andrikanich-Resume.pdf");
  await page.pdf({
    path: resumePdf,
    format: "Letter",
    printBackground: true,
    margin: { top: "0.45in", right: "0.45in", bottom: "0.45in", left: "0.45in" },
  });
  console.log(
    "Saved Ashley-Andrikanich-Resume.pdf (site preview). For Word-matching PDF run: npm run export-resume-pdf"
  );

  await browser.close();
} finally {
  server.stop();
}
