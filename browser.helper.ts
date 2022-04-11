require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { Builder, WebDriver } from "selenium-webdriver";
import { LoginPage } from "./pages/login.page";
import { RegistrationPage } from "./pages/registration.page";
import { DriverSetup } from "./web.driver.setup";
const rootURL = 'https://auction-app-1.herokuapp.com';


export class BrowserHelper {

    public driver: WebDriver;
    public driverSetup = new DriverSetup();

    constructor() {
        this.driver = this.driverSetup.driver;
    }

    async goToPage(link: string) {
        return this.driver.get(link);
    }
    async click(elementLocator: any) {
        return (this.driver.findElement(elementLocator).click());
    }

    async getText(elementLocator: any) {

        return (this.driver.findElement(elementLocator).getText());

    }

    async sendKeys(elementLocator: any, inputData: string) {

        await this.driver.findElement(elementLocator).sendKeys(inputData);

    }

    async enterDataAndClick(inputFieldLocator: any, inputData: string, submitLocator: any) {

        await this.driver.findElement(inputFieldLocator).clear();
        await this.driver.findElement(inputFieldLocator).sendKeys(inputData);
        await this.driver.sleep(1000);
        await this.driver.findElement(submitLocator).click();
    
    }

    

    public async signUpToPage(firstName: string, lastName : string, email: string, passwd: string){
        
        const registationPage = new RegistrationPage();
        await this.driver.findElement(registationPage.firstName).sendKeys(firstName);
        await this.driver.sleep(500);
        await this.driver.findElement(registationPage.lastName).sendKeys(lastName);
        await this.driver.sleep(500);
        await this.driver.findElement(registationPage.email).sendKeys(email);
        await this.driver.sleep(500);
        await this.driver.findElement(registationPage.password).sendKeys(passwd);
        await this.driver.sleep(5000);
        await this.driver.findElement(registationPage.submitBtn).click();
        await this.driver.sleep(5000);

    }

    public async loginToPage(email: string, passwd: string) {

        const loginPage = new LoginPage();
        await this.driver.findElement(loginPage.loginEmail).clear();
        await this.driver.findElement(loginPage.loginEmail).sendKeys(email);
        await this.driver.sleep(1000);
        await this.driver.findElement(loginPage.loginPassword).clear();
        await this.driver.findElement(loginPage.loginPassword).sendKeys(passwd);
        await this.driver.sleep(1000);
        await this.driver.findElement(loginPage.submitLoginBtn).click();
        await this.driver.sleep(1000);
        
    }


   }
