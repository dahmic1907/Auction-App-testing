require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class SearchPage{
    
    constructor() { }

    searchMessage = By.xpath('//*[@id="root"]/div/div[1]/div/div[1]/div/div/span[3]/a'); 
    productTitle = By.css('h3');
    productUrl = By.xpath('//*[@id="root"]/div/div[1]/div/div[2]/div/div[2]/div/div[2]/div[1]/div/div/a');
    noProduct = By.xpath('//*[@id="root"]/div/div[1]/div/div[2]/div/div[2]/div/div[3]/h3');
    
}
