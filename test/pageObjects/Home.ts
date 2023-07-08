import { By, Locator, WebDriver, until } from 'selenium-webdriver';

export class Home{
    private searchInput: Locator = By.name('search_query')
    private searchButton: Locator = By.id('search-icon-legacy')
    
    constructor(private driver: WebDriver){}

    async waitUntilSearchIsVisible(){
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.searchInput)), 10000);
    }

    async searchText(text: string){
        let searchBox = await this.driver.findElement(this.searchInput);
        let searchButton = await this.driver.findElement(this.searchButton);
    
        await searchBox.click()
        await searchBox.sendKeys(text);
        await searchButton.click();
    }
}