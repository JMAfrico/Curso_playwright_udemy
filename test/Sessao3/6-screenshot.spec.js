const { test, expect, chromium } = require('@playwright/test');

test('Fazer login screenshot', async ({ page }) => {
  await page.goto('https://react-redux.realworld.io/#/login?_k=2twsvy');

    const txtEmail = await page.$("input[placeholder='Email']");
    await txtEmail.fill("joaozeras@hotmail.com");
    await page.screenshot({path:'6-email.png',fullPage:true})

    const txtSenha = await page.$("input[placeholder='Password']");
    await txtSenha.fill("123456789");
    await page.screenshot({path:'6-senha.png',fullPage:true})

    const btnSignInClasse = await page.$('.btn');
    await btnSignInClasse.click();
    await page.waitForSelector("(//li[normalize-space()='email or password is invalid'])[1]")
    await page.screenshot({path:'6-msg.png',fullPage:true})

    await page.locator("(//li[normalize-space()='email or password is invalid'])[1]").screenshot({ path: '6-printelemento.png' });

    await page.pdf({path:'pagina.pdf'})
  })