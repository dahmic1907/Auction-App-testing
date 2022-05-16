require('selenium-webdriver/chrome');

const { By, Key } = require('selenium-webdriver');


export class ShopPage {

    constructor() { }

    productTitle = By.css('h3');
    productUrl = By.xpath('//*[@id="root"]/div/div[1]/div/div/div/div[2]/div/div[3]/div[1]/div/div/a');
    placeBidFld = By.className('MuiOutlinedInput-input MuiInputBase-input css-1x5jdmq');
    placeBidBtn = By.xpath('//*[@id="root"]/div/div[1]/div/div[2]/div[2]/div/div/div[2]/button');
    message = By.xpath('//*[@id="root"]/div/div[1]/div/div[2]/div/div/div/div/div/p[2]');
    moreBtn = By.className('MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1yifu2c');
    shopPlaceholder = By.xpath('//*[@id="root"]/div/div[1]/div/div/div/div[2]/div/div[1]/div[1]/div/div[1]/h5');

}