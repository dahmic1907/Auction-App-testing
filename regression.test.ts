require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { until } from "selenium-webdriver";
import { BrowserHelper } from "./browser.helper";
import { GetPageLocators } from "./page.objects";

const { By } = require('selenium-webdriver');
const rootURL = 'https://auction-app-1.herokuapp.com/';



let browser = new BrowserHelper();
let pageLocators = new GetPageLocators();


describe('Regression test for Auction Application', () => {

    describe('Search option', () => {

        it('Check Search option by inserting Shirt item', async () => {

            await browser.goToPage(rootURL);
            await browser.driver.sleep(2000);
            expect(await browser.isEnabled(pageLocators.getHomePage().searchBtn)).toBeTruthy;
            await browser.enterDataAndClick(pageLocators.getHomePage().searchBox, "Shirt", pageLocators.getHomePage().searchBtn);
            expect(await browser.getText(pageLocators.getSearchPage().searchMessage)).toEqual("Search result for Shirt");
            await browser.click(pageLocators.getSearchPage().productUrl);
            expect(await browser.getText(pageLocators.getSearchPage().productTitle)).toContain("Shirt");

        });

        it('Check Search option by inserting Shirt item', async () => {

            await browser.driver.sleep(2000);
            expect(await browser.isEnabled(pageLocators.getHomePage().homeBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().homeBtn);
            expect(await browser.isEnabled(pageLocators.getHomePage().searchBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().searchBtn);
            expect(await browser.isEnabled(pageLocators.getShopPage().moreBtn)).toBeTruthy;

        });

        it('Check Search option by inserting Shirt jens', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().homeBtn);
            expect(await browser.isEnabled(pageLocators.getHomePage().searchBtn)).toBeTruthy;
            await browser.enterDataAndClick(pageLocators.getHomePage().searchBox, "jens", pageLocators.getHomePage().searchBtn);
            expect(await browser.getText(pageLocators.getSearchPage().searchMessage)).toEqual("Search result for jens");
            expect(await browser.getText(pageLocators.getSearchPage().noProduct)).toEqual("No products match desired filters");

        });

    });

    describe('Home page - left column section', () => {

        it('Redirecting to the Women page by clicking the Women button', async () => {

            await browser.driver.sleep(5000);
            await browser.click(pageLocators.getHomePage().logo);
            expect(await browser.isEnabled(pageLocators.getHomePage().womenBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().womenBtn);
            await browser.driver.sleep(5000);
            expect(await browser.getText(pageLocators.getShopPage().shopPlaceholder)).toContain('Women');

        });

        it('Redirecting to the Men page by clicking the Men button', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().logo);
            expect(await browser.isEnabled(pageLocators.getHomePage().menBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().menBtn);
            await browser.driver.sleep(500);
            expect(await browser.getText(pageLocators.getShopPage().shopPlaceholder)).toContain('Men');

        });

        it('Redirecting to the Technology page by clicking the Technology button', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().logo);
            expect(await browser.isEnabled(pageLocators.getHomePage().technologyBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().technologyBtn);
            await browser.driver.sleep(500);
            expect(await browser.getText(pageLocators.getShopPage().shopPlaceholder)).toContain('Technology');

        });

        it('Redirecting to the Kids page by clicking the Kids button', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().logo);
            expect(await browser.isEnabled(pageLocators.getHomePage().kidsBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().kidsBtn);
            await browser.driver.sleep(500);
            expect(await browser.getText(pageLocators.getShopPage().shopPlaceholder)).toContain('Kids');

        });

        it('Redirecting to the Tools page by clicking the Tools button', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().logo);
            expect(await browser.isEnabled(pageLocators.getHomePage().toolsBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().toolsBtn);
            await browser.driver.sleep(500);
            expect(await browser.getText(pageLocators.getShopPage().shopPlaceholder)).toContain('Tools');

        });

    });

    describe('Login option', () => {

        it('User is not able to log in with bad password', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getLoginPage().loginBtn);
            expect(await browser.isEnabled(pageLocators.getLoginPage().loginBtn)).toBeTruthy;
            await browser.loginToPage('user@user3.com', '12345678910');
            expect(await browser.getText(pageLocators.getLoginPage().errorPassword)).toEqual('Please check if you entered correct password');

        });

        it('User is not able to log in with incorrect email', async () => {

            await browser.driver.sleep(2000);
            expect(await browser.isEnabled(pageLocators.getHomePage().logoBtn)).toBeTruthy;
            await browser.click(pageLocators.getHomePage().logoBtn);
            await browser.click(pageLocators.getLoginPage().loginBtn);
            expect(await browser.isEnabled(pageLocators.getLoginPage().loginBtn)).toBeTruthy;
            await browser.loginToPage('user@user32.com', '12345678');
            expect(await browser.getText(pageLocators.getLoginPage().errorEmail)).toEqual('Please check if you entered correct email');

        });

    });
    
    describe('Sign up option', () => {

        it('Check sign up option when user does not enter requested data', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().signUpBtn);
            await browser.signUpToPage('', '', '', '');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorFirstName)).toEqual('Please enter your first name');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorLastName)).toEqual('Please enter your last name');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorEmail)).toEqual('Please enter a valid email');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorPassword)).toEqual('Password must contain at least 8 characters');

        });

        it('Check sign up option when user enters bad first name and last name', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().signUpBtn);
            await browser.signUpToPage(' ', ' ', 'user23@user.com', 'useruser');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorFirstName)).toEqual('First name is required');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorLastName)).toEqual('Last name is required');

        });

        it('Check sign up option when user enters bad password', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().logoBtn);
            await browser.click(pageLocators.getHomePage().signUpBtn);
            await browser.signUpToPage('user', 'user', 'user23@user.com', '1234');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorPassword)).toEqual('Password must contain at least 8 characters');

        });

        it('Check sign up option with the email address already used', async () => {

            await browser.driver.sleep(2000);
            await browser.click(pageLocators.getHomePage().logoBtn);
            await browser.click(pageLocators.getHomePage().signUpBtn);
            await browser.signUpToPage('user', 'user', 'user@user3.com', '12345678');
            expect(await browser.getText(pageLocators.getRegistrationPage().errorEmail)).toEqual('User with email user@user3.com already exists');

        });

    });

    describe('Home page -  header section', () => {

        it('Redirecting to the Facebook page by clicking the Facebook icon', async () => {

            await browser.driver.sleep(2000);
            const originalWindow = await browser.driver.getWindowHandle();
            await browser.click(pageLocators.getHomePage().facebookIcon);
            const windows = await browser.driver.getAllWindowHandles();
            windows.forEach(async (handle: any) => {
                if (handle !== originalWindow) {
                    await browser.driver.switchTo().window(handle);
                }
            });
            await browser.driver.sleep(5000);
            let FacebookGroup = await browser.driver.wait(until.elementLocated(By.className('a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5'))).isDisplayed;
            expect(FacebookGroup).toBeTruthy();
            await browser.driver.sleep(500);
            await browser.driver.close();
            await browser.driver.switchTo().window(originalWindow);

        });

        it('Redirecting to the Twitter page by clicking the Twitter icon', async () => {

            await browser.driver.sleep(2000);
            const originalWindow = await browser.driver.getWindowHandle();
            await browser.click(pageLocators.getHomePage().twitterIcon);
            const windows = await browser.driver.getAllWindowHandles();
            windows.forEach(async (handle: any) => {
                if (handle !== originalWindow) {
                    await browser.driver.switchTo().window(handle);
                }
            });
            await browser.driver.sleep(5000);
            let twitterProf = await browser.driver.wait(until.elementLocated(By.className('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0'))).isDisplayed;
            expect(twitterProf).toBeTruthy();
            await browser.driver.sleep(500);
            await browser.driver.close();
            await browser.driver.switchTo().window(originalWindow);

        });

        it('Redirecting to the Instagram page by clicking the Instagram icon', async () => {

            await browser.driver.sleep(2000);
            const originalWindow = await browser.driver.getWindowHandle();
            await browser.click(pageLocators.getHomePage().instagramIcon);
            const windows = await browser.driver.getAllWindowHandles();
            windows.forEach(async (handle: any) => {
                if (handle !== originalWindow) {
                    await browser.driver.switchTo().window(handle);
                }
            });
            await browser.driver.sleep(5000);
            let instagramLogo = await browser.driver.wait(until.elementLocated(By.className('s4Iyt'))).isDisplayed;
            expect(instagramLogo).toBeTruthy();
            await browser.driver.sleep(500);
            await browser.driver.close();
            await browser.driver.switchTo().window(originalWindow);

        });

    });

    afterAll(() => {
        browser.driver.quit();
    });

});
