const { test, expect, chromium } = require('@playwright/test');
const exp = require('constants');

test('Fazer login assertion', async ({ page }) => {

  await page.goto('https://react-redux.realworld.io/#/login?_k=2twsvy');

    const txtEmail = await page.$("input[placeholder='Email']");
    await txtEmail.fill("joaozeras@hotmail.com");

    const txtSenha = await page.$("input[placeholder='Password']");
    await txtSenha.fill("123456789");

    const btnSignInClasse = await page.$('.btn');
    await btnSignInClasse.click();
    await page.waitForTimeout(6000)


    //Captura o texto do elemento e valido se o elemento tem exatamente aquele texto
    const msginvalid = await page.innerText("(//li[normalize-space()='email or password is invalid'])[1]");
    expect(msginvalid).toBe('email or password is invalid');

    //timeout explicito
    await page.waitForTimeout(2000)

    //timeout implicito, espera o elemento(parametros dizem se visivel,clicavel,etc. Olhar na doc)
    await page.waitForSelector("(//li[normalize-space()='email or password is invalid'])[1]")

    //timeout antes de um evento
    await btnSignInClasse.click({timeout:30000});

    //abre uma nova aba
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('a[target="_blank"]')
    ])

    //espera o carregamento total da pagina
    await page.waitForLoadState();
  })