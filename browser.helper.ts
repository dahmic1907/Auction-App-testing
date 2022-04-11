require('selenium-webdriver/chrome');
require('selenium-webdriver/firefox');
require('chromedriver')

import { Builder, WebDriver } from "selenium-webdriver";
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

   }
