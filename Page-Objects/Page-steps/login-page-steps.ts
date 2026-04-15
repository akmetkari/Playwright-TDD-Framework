import { Page } from "@playwright/test";
import loginPage from "../page-elements/login-page-elements.json";
import { WebCommons } from "../../Commons/ui/web-commons";
import config from "../../config/config.json";

export class loginPageSteps{

    page: Page;
    webCommons : WebCommons;

    constructor(page: Page){
        this.page = page;
        this.webCommons = new WebCommons(page);
    }
    

    //launch the application
    async launchApplication(){
        await this.webCommons.launchApplication(config.app.url);
    }

    //verify login page is displayed. 
    async verifyLoginPageIsDisplayed(){
        await this.webCommons.verifyElementIsVisible(loginPage.LoginPageHeader);
    }


    //enter username and password
    async enterUsernameAndPassword(username:string, password:string){
        await this.webCommons.typeText(loginPage.usernameInput, username);
        await this.webCommons.typeText(loginPage.passwordInput, password);
    }

    async clickLoginButton(){
        await this.webCommons.clickOnElement(loginPage.LoginButton)    
    }


}