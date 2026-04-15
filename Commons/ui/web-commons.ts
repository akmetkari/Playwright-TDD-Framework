import {expect,Page,Locator} from "@playwright/test";

export class WebCommons 
{
    page: Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    
//launch application
async launchApplication(url:string)
{
    await this.page.goto(url);

}


//common method to generate web element from the string locator
element (selectors: string):Locator 
{
    return this.page.locator(selectors);
}

//common method to click on the web element
async clickOnElement(selectors: string)
{
    await this.scrollToElement(selectors);
    await this.element(selectors).click();
}

//common method to verify the element is visible
async verifyElementIsVisible(selectors: string)
{
    await expect(this.element(selectors)).toBeVisible();
}


//common method to type text in the web element
async typeText(selectors: string, text: string) {
    await this.clearTextBox(selectors);
    await this.element(selectors).fill(text);
}


//right click on the web element
async rightClickonElement(Selectors: string)
{
    await this.element(Selectors).click({button: 'right'}); 
}

//common method to scroll into view if needed
async scrollToElement(selectors:string)
{
    await this.element(selectors).scrollIntoViewIfNeeded();
}


//common method to double click on the webelement
async doubleClickElement(selectors:string)
{
    await this.element(selectors).dblclick();
}

//common method to hover over element 
async hoverOverElement(selectors:string)
{
   await this.scrollToElement(selectors);
   await this.element(selectors).hover();
}

//common method to force click on the element
async forceClickOnElement(selectors:string)
{
    await this.element(selectors).click({force:true});
}

//common method to click and hold the element 
async clickAndHoldElement(selectors:string)
{
    await this.scrollToElement(selectors);
    const elementHandle = await this.element(selectors).elementHandle();
    if(elementHandle)
    {
        await elementHandle.hover();
        await this.page.mouse.down();
    }
}

//common method to clear text box
async clearTextBox(selectors:string)
{
    await this.scrollToElement(selectors);
    await this.element(selectors).clear();
}

//common method to select the option from drop-down
async selectoption(selectors:string,option:string)
{
    await this.scrollToElement(selectors);
    await this.element(selectors).selectOption(option);
}

//common method to check the checkbox
async checkBox(selectors:string)
{
    await this.scrollToElement(selectors);
    const checked = await this.element(selectors).isChecked();
    if(!checked)
    {
        await this.element(selectors).check();
    }
}

//common method to check the radio button. 
async checkRadioButton (selectors:string)
{
    this.scrollToElement(selectors);
    this.element(selectors).check();
}

//common method to extract the text from the element 
async getText(selectors:string):Promise<string| null>
{
    await this.scrollToElement(selectors);
    return await this.element(selectors).textContent();
}

//common method to upload a file. 
async uploadFile(selectors:string, filePath: string)
{
    await this.scrollToElement(selectors);
    await this.element(selectors).setInputFiles(filePath);
}

//common method to verify the text value of the element. 
async isTextValueCorrect(selectors:string,expectedString:string)
{
    await expect(this.element(selectors)).toHaveText(expectedString);
}

}