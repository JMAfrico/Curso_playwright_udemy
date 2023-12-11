const { test, expect, chromium } = require('@playwright/test');

test('Fazer login', async ({ page }) => {
  await page.goto('https://react-redux.realworld.io/#/login?_k=2twsvy');

    const txtEmail = await page.$("input[placeholder='Email']");
    await txtEmail.fill("joaozeras@hotmail.com");
    //await page.fill("input[placeholder='Email']","joaozeras@hotmail.com");

    const txtSenha = await page.$("input[placeholder='Password']");
    await txtSenha.fill("123456789");

    //Vai até o elemento especificado e da um TAB
    //await txtSenha.press("input[placeholder='Password']",'Tab')
    //await page.fill("input[placeholder='Password']","123456789");

    const btnSignInClasse = await page.$('.btn');
    await btnSignInClasse.click();
    
  })