import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5174/');
  await page.screenshot({ path: 'public/screenshot.png', fullPage: true });
  console.log('Screenshot saved to screenshot.png');
  
  // Extract some basic DOM information for the review
  const html = await page.content();
  console.log('HTML extraction complete.');
  
  await browser.close();
})();
