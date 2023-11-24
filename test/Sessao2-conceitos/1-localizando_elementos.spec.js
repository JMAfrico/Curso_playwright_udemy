const { test, expect, chromium } = require('@playwright/test');

test('Clique no botão', async ({ page }) => {

  //page goto envia um comando para abrir a pagina
  await page.goto('https://react-redux.realworld.io/#/login?_k=2twsvy');

  /*
    1)crio uma constante para o botão
    2)chamo a tag await para esperar
    3)chamo a page(parametro da função) para mandar o comando de ação que quero na pagina
    4)$ significa a pesquisa pelo elemento
    5)dentro dos parenteses coloco o elemento (classe,xpath,id)
    6)const btnSignIn = await page.$('.btn')
  */

    //HTML atributo - classe. 
    const btnSignInClasse = await page.$('.btn');

    //XPath - classe. 
    const btnSignInXpath = await page.$("//button[@class='btn btn-lg btn-primary pull-xs-right']");

    //Texto. 
    const btnSignInText = await page.$("//button[text()='Sign in']");

    //CSS selector
    const btnSignInCSSSelector = await page.$('button');

    //Contexto de texto
    const btnSignInTextContext = await page.$('text="Sign in"');

    //Navegando entre os elementos(element Handler)
    //vou encontrar o form e o botão dentro do form
    const form = await page.$('css=form')
    const btnSignInform = await form.$('text="Sign in"');

    //clica no botão
    btnSignInform.click();

    //Buscando multiplos elementos iguais(array de elementos)
    const input = await page.$$('.form-control');
    await input[0].click();
    await input[1].click();

});