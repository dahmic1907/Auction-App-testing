require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { BrowserHelper } from "./browser.helper";
import { GetPageLocators } from "./page.objects";

const rootURL = 'https://auction-app-1.herokuapp.com/';



let browser = new BrowserHelper();
let pageLocators = new GetPageLocators();


describe('Smoke tests for Auction Application', () => {

  describe('Tests - home page', () => {

    it('Check Search option by inserting Monitor item', async () => {

      await browser.goToPage(rootURL);
      await browser.driver.sleep(1000);
      expect(await browser.isEnabled(pageLocators.getHomePage().searchBtn));
      await browser.enterDataAndClick(pageLocators.getHomePage().searchBox, "Monitor", pageLocators.getHomePage().searchBtn);
      expect(await browser.getText(pageLocators.getSearchPage().searchMessage)).toEqual("Search result for Monitor");
      await browser.click(pageLocators.getSearchPage().productUrl);
      expect(await browser.getText(pageLocators.getSearchPage().productTitle)).toContain("Monitor");

    });

    it('Check sign up and sign out option', async () => {

      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().signUpBtn);
      await browser.signUpToPage('User', 'User', 'newuser1@user.com', '12345678');
      await browser.loginToPage('newuser1@user.com', '12345678');
      await browser.click(pageLocators.getHomePage().logOutBtn);
      expect(await browser.isEnabled(pageLocators.getHomePage().loginBtn)).toBeTruthy;

    });

    it('User is able to log in to their account and then place a bid for the product', async () => {

      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().loginBtn);
      await browser.loginToPage('user@user3.com', '12345678');
      await browser.driver.sleep(1000);
      await browser.click(pageLocators.getHomePage().womenBtn);
      await browser.click(pageLocators.getShopPage().productUrl);
      await browser.enterDataAndClick(pageLocators.getShopPage().placeBidFld, '82', pageLocators.getShopPage().placeBidBtn);
      expect(await browser.getText(pageLocators.getShopPage().message)).toEqual("Congrats! You are the highest bidder!");

    });

  });

  afterAll(() => {
    browser.driver.quit();
  });

});
