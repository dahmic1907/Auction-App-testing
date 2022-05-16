require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class HomePage {

    constructor() { }

    searchBox = By.xpath('//*[@id="root"]/header/div[2]/div/div/div[2]/div/div/input');
    searchBtn = By.xpath('//*[@id="root"]/header/div[2]/div/div/div[2]/div/div/div/button');
    signUpBtn = By.xpath('//*[@id="root"]/header/div[1]/div/div[2]/a[2]');
    signInBtn = By.xpath('//*[@id="root"]/header/div[1]/div/p/a[1]');
    logOutBtn = By.xpath('//*[@id="root"]/header/div[1]/div/div[2]/a');
    loginBtn = By.xpath('//*[@id="root"]/header/div[1]/div/div[2]/a[1]');
    homeIcon = By.className('icon-home');
    homeBtn = By.xpath('//*[@id="root"]/header/div[2]/div/div/div[2]/div/a[1]');
    womenBtn = By.id('1');
    menBtn = By.id('2');
    technologyBtn = By.id('3');
    kidsBtn = By.id('4');
    toolsBtn = By.id('5');
    logoBtn = By.xpath('//*[@id="root"]/header/div[2]/div/div/div/img');
    twitterIcon = By.xpath('//*[@id="root"]/header/div[1]/div/div[1]/button[3]/img');
    facebookIcon = By.xpath('//*[@id="root"]/header/div[1]/div/div[1]/button[1]/img');
    instagramIcon = By.xpath('//*[@id="root"]/header/div[1]/div/div[1]/button[2]/img');
    logo = By.xpath('//*[@id="root"]/header/div[2]/div/div/div[1]/img');
}