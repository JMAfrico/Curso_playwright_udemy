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

    //valida se foi definida um html para esse elemento
    const html = await page.innerHTML('.nav.navbar-nav.pull-xs-right');
    expect(html).toBeDefined();

    //verifica se o valor retornado da tag é maior que 5
    const popularTagsCount = await page.$$eval('.tag-default', el => el.lenght)
    expect(popularTagsCount).toBeGreaterThanOrEqual(5);

    //verifica se o valor retornado da tag é menor que 30
    expect(popularTagsCount).toBeLessThanOrEqual(30);

    //verifica se o valor retornado da tag é igual a 20
    expect(popularTagsCount).toEqual(20);

    //validar um trecho de texto do html
    const htmltxt = await page.innerHTML('.nav.navbar-nav.pull-xs-right');
    expect(htmltxt).toMatch('Your Feed')
    expect(htmltxt).not.toMatch('Teste')

    //validar o título da pagina
    const title = await page.title();
    expect(title).toBe('Conduit');

    //validar url da pagina
    const url = await page.url();
    expect(url).toContain('editor')

    //voltar para a pagina anterior
    await page.goBack()

    //navegar para a próxima pagina
    await page.goForward()

    //navegar para a próxima pagina
    await page.goForward()

    //atualizar pagina
    await page.reload()

    //atualizar pagina
    await page.reload()

    //timeout explicito
    await page.waitForTimeout(2000)
  })