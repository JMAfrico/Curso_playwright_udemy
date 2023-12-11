const {test,chromium, expect } = require('@playwright/test');

exports.login_page = class login_page{

    constructor(page){
        this.page = page;
    }

    async email_preencher(email){
        return await page.type("input[placeholder='Email']",email);
    };

    async email(){
        return await page.$("input[placeholder='Email']");
    }

    async senha_preencher(senha){
        return await page.type("input[placeholder='Password']",senha);
    }

    async senha(){
        return await page.$("input[placeholder='Password']");
    }

    async btnLogin_clicar(){
        return await page.click('.btn');
    }

    async btnLogin(){
        return await page.$('.btn');
    }

    async msgerro(){
        return await page.waitForSelector("(//li[normalize-space()='email or password is invalid'])[1]")
    }
}


