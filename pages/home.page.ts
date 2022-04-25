require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class HomePage {

    constructor() { }

    searchBox = By.xpath('//*[@id="root"]/header/div[2]/div/div/div[2]/div/div/input');
    searchBtn = By.xpath('//*[@id="root"]/header/div[2]/div/div/div[2]/div/div/div/button');
    signUpBtn = By.xpath('//*[@id="root"]/header/div[1]/div/p/a[2]');
    signInBtn = By.xpath('//*[@id="root"]/header/div[1]/div/p/a[1]');
    logOutBtn = By.xpath('//*[@id="root"]/header/div[1]/div/div[2]/a');
    loginBtn = By.xpath('//*[@id="root"]/header/div[1]/div/p/a[1]');
    homeIcon = By.className('icon-home');
    womenBtn = By.xpath('//*[@id="1"]');

}
