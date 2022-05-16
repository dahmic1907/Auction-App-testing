require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class LoginPage {

    constructor() { }

    submitLoginBtn = By.className('MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1yifu2c');
    loginEmail = By.id('email');
    loginPassword = By.id('password');
    errorPassword = By.xpath('//*[@id="password-helper-text"]');
    errorEmail = By.xpath('//*[@id="email-helper-text"]');
    loginBtn = By.xpath('//*[@id="root"]/header/div[1]/div/div[2]/a[1]');
    loginHomeBtn = By.xpath('//*[@id="root"]/header/div[1]/div/p/a[1]');
}
