require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class LoginPage {

    constructor() { }

    submitLoginBtn = By.className('MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1yifu2c');
    loginEmail = By.id('email');
    loginPassword = By.id('password');

}
