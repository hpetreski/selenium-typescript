import { By, Locator, WebDriver, until } from 'selenium-webdriver';

export class SearchResult{
    private searchContents: Locator = By.id('contents')
    
    constructor(private driver: WebDriver){}

    async getSearchResultElement(){
        await this.driver.wait(until.elementLocated(this.searchContents), 5000);

        return await this.driver.findElement(this.searchContents);
    }
}