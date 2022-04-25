import { HomePage } from "./pages/home.page";
import { LoginPage } from "./pages/login.page";
import { RegistrationPage } from "./pages/registration.page";
import { SearchPage } from "./pages/search.page";
import { ShopPage } from "./pages/shop.page";

export class GetPageLocators {

    constructor() {
    }

    public getHomePage() {
        return new HomePage();
    }
    public getLoginPage() {
        return new LoginPage();
    }

    public getSearchPage() {
        return new SearchPage();
    }

    public getRegistrationPage() {
        return new RegistrationPage();
    }

    public getShopPage() {
        return new ShopPage();
    }
    
}
