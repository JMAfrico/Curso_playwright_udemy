// @ts-check
const { test, expect, chromium } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/*const {chromium} = require('playwright');

(async()=>{
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://todomvc.com/examples/react');
  await page.screenshot({path:'todo.png'});
  await browser.close();
})*/

