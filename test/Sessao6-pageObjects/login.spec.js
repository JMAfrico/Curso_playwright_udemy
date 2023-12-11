const { test, expect, chromium } = require('@playwright/test');
const login_page = require('../pageObjects/login_page');

test('Tentativa de login invalida', async ({ page }) => {
  const login = new login_page();

  await page.goto('https://react-redux.realworld.io/#/login?_k=2twsvy');

  const txtEmail = await login.email();
  txtEmail.fill("joaozeras@hotmail.com");

  const txtSenha = await login.senha();
  await txtSenha.fill("123456789");

  const btnSignInClasse = await login.btnLogin();
  await btnSignInClasse.click();

  const msginvalid = await login.msgerro();
  expect(msginvalid).toBe('email or password is invalid');

})