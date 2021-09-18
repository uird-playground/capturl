puppeteer = require("puppeteer");

async function capturl(url, options) {
  let width = options.width || 1920;
  let height = options.height || 1080;

  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-web-security",
      "--disable-site-isolation-trials",
      "--disable-features=IsolateOrigins",
      `--window-size=${width},${height}`,
    ],
    defaultViewport: {
      width: width,
      height: height,
    },
    headless: true,
    devtools: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36"
  );
  page.setBypassCSP(true);
  await page.goto(url);
  await new Promise((r) => setTimeout(r, 2000));
  const image = await page.screenshot({ fullPage: true });
  await browser.close();
  if (options.encoding == "base64") return image.toString("base64");
  return image;
}

module.exports = capturl;
