const { test, expect, chromium } = require('@playwright/test');

test('Multiplepages', async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  await page.goto('https://react-redux.realworld.io/#/login?_k=2twsvy');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('a[target="_blank"]')
  ])
      console.log(await page.title())
      console.log(await newPage.title())

  })