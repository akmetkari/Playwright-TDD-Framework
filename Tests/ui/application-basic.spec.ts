import { test, expect, TestInfo } from '@playwright/test';
import { cookiesPageSteps } from '../../Page-Objects/Page-steps/cookies-page-steps';
import { landingPageSteps } from '../../Page-Objects/Page-steps/landing-page-steps';

import data from "../../TestData/data.json";
import { loginPageSteps } from '../../Page-Objects/Page-steps/login-page-steps';

let loginPage: loginPageSteps;
let cookiesPage: cookiesPageSteps;
let landingPage: landingPageSteps;
let testData: any;

test.describe('cookies page tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new loginPageSteps(page);
        cookiesPage = new cookiesPageSteps(page);
        landingPage = new landingPageSteps(page);
    });


    test('Test case 1:Verify cookies pop up is displayed accepted and with valid input login is success',
        async ({ }, testInfo: TestInfo) => {
            testData = data[testInfo.title as keyof typeof data];
            await loginPage.launchApplication();
            await cookiesPage.verifyCookiesPageIsDisplayed();
            await cookiesPage.verifyCookiesPageHeader(testData["expectedHeader"]);
            await cookiesPage.clickAcceptAllButton();

            await loginPage.enterUsernameAndPassword(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);
            await loginPage.clickLoginButton();

            await landingPage.verifyLandingPageHeader(testData["expectedLandingPageText"]);

        });

});    