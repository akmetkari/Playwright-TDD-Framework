import {Page} from '@playwright/test';
import { WebCommons } from '../../Commons/ui/web-commons';
import config from "../../config/config.json";
import landingPage from "../page-elements/landing-page-elements.json";

export class landingPageSteps {

    page: Page;
    webCommons : WebCommons;

    constructor(page: Page){
        this.page = page;
        this.webCommons = new WebCommons(page);
    }

    async verifyLandingPageIsDisplayed(){
        await this.webCommons.verifyElementIsVisible(landingPage.LandingPageHeader);
    }

    async verifyLandingPageHeader(expectedText: string){
        await this.webCommons.isTextValueCorrect(landingPage.LandingPageHeader,expectedText);
    }

}