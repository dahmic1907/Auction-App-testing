require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { BrowserHelper } from "./browser.helper";
import { GetPageLocators } from "./page.objects";

const rootURL = 'http://auction.racun.ninja/';



let browser = new BrowserHelper();
let pageLocators = new GetPageLocators();


describe('Smoke tests for Auction Application', () => {

  describe('Tests - home page', () => {

    it('Check Search option by inserting Shoes item', async () => {

      await browser.goToPage(rootURL);
      await browser.driver.sleep(1000);
      expect(await browser.isEnabled(pageLocators.getHomePage().searchBtn)).toBeTruthy;
      await browser.enterDataAndClick(pageLocators.getHomePage().searchBox, "Shoes", pageLocators.getHomePage().searchBtn);
      expect(await browser.getText(pageLocators.getSearchPage().searchMessage)).toEqual("Search result for Shoes");
      await browser.click(pageLocators.getSearchPage().productUrl);
      expect(await browser.getText(pageLocators.getSearchPage().productTitle)).toContain("Shoes");

    });

    it('User is able to log in to their account and then place a bid for the product', async () => {

      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getLoginPage().loginBtn);
      await browser.loginToPage('user@user3.com', '12345678');
      await browser.driver.sleep(500);
      await browser.enterDataAndClick(pageLocators.getShopPage().placeBidFld, '992', pageLocators.getShopPage().placeBidBtn);
      expect(await browser.getText(pageLocators.getShopPage().message)).toEqual("Congrats! You are the highest bidder!");
      await browser.click(pageLocators.getHomePage().logOutBtn);

    });

    
    it('Check sign up and sign out option', async () => {

      var email;
      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().signUpBtn);
      await browser.signUpToPage('User', 'User', email = generateRendomEmail(), '12345678');
      await browser.driver.sleep(5000);
      await browser.loginToPage(email, '12345678');
      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().logOutBtn);
      expect(await browser.isEnabled(pageLocators.getLoginPage().loginBtn)).toBeTruthy;
      
    });

  });

  afterAll(() => {
    browser.driver.quit();
  });

});
//helper function
   function generateRendomEmail() {
        var chars = 'abcdefghijklmnopqrstuvwxyz123';
        var string = 'user';
        for (var ii = 0; ii < 5; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return (string + '@gmail.com');
    }
