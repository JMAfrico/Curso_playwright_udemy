const { test, expect, chromium } = require('@playwright/test');

test('Fazer logins', async ({ page }) => {
  await page.goto('https://react-redux.realworld.io/#/login?_k=2twsvy');

    //Retorna o texto do elemento usando função
    const btnSignIn1 = await page.$eval('.btn',el => el.innerText);
    console.log("Texto do botão com funcao:" + btnSignIn1)

    //Retorna o texto do elemento usando textContent
    const btnSignIn2 = await page.textContent('.btn');
    console.log('Texto do botão com textContent:' + btnSignIn2);

    //Retorna o texto do elemento usando innerText
    const btnSignIn3 = await page.innerText('.navbar-brand');
    console.log('Texto do botão com innerText:' + btnSignIn3);

    //Retorna o HTML até ali
    const btnSignIn4 = await page.innerHTML('.nav.navbar-nav.pull-xs-right');
    console.log('Texto do botão com innerHTML:' + btnSignIn4);

    //Retornar o atributo especificado,passo o elemento e o atributo que quero dele
    const navbarbrand = await page.getAttribute('.navbar-brand', 'href');
    console.log('Atributo:' + navbarbrand);
    
  })