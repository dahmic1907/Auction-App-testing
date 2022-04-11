require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class ShopPage{
    
    constructor() { }

    //#region  Locators

    productTitle = By.css('h3');
    productUrl = By.xpath('//*[@id="root"]/div/div[1]/div/div/div/div[2]/div/div[3]/div[1]/div/div/a');
    placeBidFld = By.className('MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq');
    placeBidBtn = By.xpath('//*[@id="root"]/div/div[1]/div/div[2]/div[2]/div/div/div[2]/button');
    message = By.xpath('//*[@id="root"]/div/div[1]/div/div[2]/div/div/div/div/div');

    //#endregion Locators

}
