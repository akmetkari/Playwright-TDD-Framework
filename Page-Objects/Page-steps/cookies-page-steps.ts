import { test } from '@playwright/test';
import {Page} from '@playwright/test';
import  CookiesPage  from '../page-elements/cookies-page-elements.json';
import { WebCommons } from '../../Commons/ui/web-commons';

export class cookiesPageSteps 
{
    page: Page;
    webCommons: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.webCommons = new WebCommons(page);
    }

    //verify cookies page is displayed. 
    async verifyCookiesPageIsDisplayed() {
        await this.webCommons.verifyElementIsVisible(CookiesPage.cookiesHeader);
    }

    //verify the content of the cookies page
    async verifyCookiesPageContent(expectedText: string) {
        await this.webCommons.verifyElementIsVisible(CookiesPage.cookiesText);
        
        const actualContent = await this.webCommons.getText(CookiesPage.cookiesText);

        if (actualContent !== expectedText) {
            throw new Error(`Expected text: "${expectedText}", but got: "${actualContent}"`);
        }
    } 

    //verify the header of the cookies page
    async verifyCookiesPageHeader(expectedHeader: string) {
        await this.webCommons.verifyElementIsVisible(CookiesPage.cookiesHeader);
        const actualHeader = await this.webCommons.getText(CookiesPage.cookiesHeader);

        if (actualHeader !== expectedHeader) {
            throw new Error(`Expected header: "${expectedHeader}", but got: "${actualHeader}"`);
        }
    }

    //click on accept all button
    async clickAcceptAllButton() {
        await this.webCommons.clickOnElement(CookiesPage.AllowAllButton);
    }

   

}
 

