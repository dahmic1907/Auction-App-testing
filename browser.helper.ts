require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { Builder, until, WebDriver } from "selenium-webdriver";
import { LoginPage } from "./pages/login.page";
import { RegistrationPage } from "./pages/registration.page";
import { DriverSetup } from "./web.driver.setup";

export class BrowserHelper {

    public driver: WebDriver;
    public driverSetup = new DriverSetup();

    constructor() {
        this.driver = this.driverSetup.driver;
    }

    async goToPage(link: string) {
        try {
            return this.driver.get(link);
        } catch (excepion) {

            console.log("Exception message is: " + excepion);
        }

    }
    async click(elementLocator: any) {
        try {
            return (await this.driver.wait(until.elementLocated(elementLocator))).click();

        } catch (excepion) {
            console.log("Element locator is " + elementLocator + ",\nException message is: " + excepion);
        }
    }

    async getText(elementLocator: any) {
        try {
            return (await this.driver.wait(until.elementLocated(elementLocator))).getText();

        } catch (excepion) {
            console.log("Element locator is " + elementLocator + "\nException message is: " + excepion);
        }
    }

    async sendKeys(elementLocator: any, inputData: string) {
        try {
            (await this.driver.wait(until.elementLocated(elementLocator))).sendKeys(inputData);

        } catch (excepion) {
            console.log("Element locator is " + elementLocator + "\nException message is: " + excepion);
        }
    }

    async isEnabled(elementLocator: any) {
        try {
            return (await this.driver.wait(until.elementLocated(elementLocator))).isEnabled();

        } catch (excepion) {
            console.log("Element locator is " + elementLocator + "\nException message is: " + excepion);
        }
    }

    async enterDataAndClick(inputFieldLocator: any, inputData: string, submitLocator: any) {
        try {
            await this.driver.wait(until.elementLocated(inputFieldLocator)).clear();
            await this.driver.wait(until.elementLocated(inputFieldLocator)).sendKeys(inputData);
            await this.driver.wait(until.elementLocated(submitLocator)).click();
        } catch (excepion) {
            console.log("Exception message is: " + excepion);
        }
    }

    public async signUpToPage(firstName: string, lastName: string, email: string, passwd: string) {
        try {
            const registationPage = new RegistrationPage();
            await this.driver.wait(until.elementLocated(registationPage.firstName)).sendKeys(firstName);
            await this.driver.wait(until.elementLocated(registationPage.lastName)).sendKeys(lastName);
            await this.driver.wait(until.elementLocated(registationPage.email)).sendKeys(email);
            await this.driver.wait(until.elementLocated(registationPage.password)).sendKeys(passwd);
            await this.driver.wait(until.elementLocated(registationPage.submitBtn)).click();
        } catch (excepion) {
            console.log("Exception message is: " + excepion);
        }
    }

    public async loginToPage(email: string, passwd: string) {
        try {
            const loginPage = new LoginPage();
            await this.driver.wait(until.elementLocated(loginPage.loginEmail)).clear();
            await this.driver.wait(until.elementLocated(loginPage.loginEmail)).sendKeys(email);
            await this.driver.wait(until.elementLocated(loginPage.loginPassword)).clear();
            await this.driver.wait(until.elementLocated(loginPage.loginPassword)).sendKeys(passwd);
            await this.driver.wait(until.elementLocated(loginPage.submitLoginBtn)).click();
        } catch (excepion) {
            console.log("Exception message is: " + excepion);
        }
    }

}
