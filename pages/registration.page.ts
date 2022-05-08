require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class RegistrationPage {

    constructor() { }

    firstName = By.id('firstName');
    lastName = By.id('lastName');
    email = By.id('email');
    password = By.id('password');
    submitBtn = By.className('MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1yifu2c');
    errorFirstName = By.xpath('//*[@id="firstName-helper-text"]');
    errorLastName = By.xpath('//*[@id="lastName-helper-text"]');
    errorEmail = By.xpath('//*[@id="email-helper-text"]');
    errorPassword = By.xpath('//*[@id="password-helper-text"]');
    
}
