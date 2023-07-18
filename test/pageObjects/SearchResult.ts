import type { Locator, WebDriver, WebElement } from 'selenium-webdriver'
import { By, until } from 'selenium-webdriver'

export class SearchResult {
    private readonly searchContents: Locator = By.id('contents')

    constructor(private readonly driver: WebDriver) {}

    async getSearchResultElement(): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(this.searchContents), 5000)

        return await this.driver.findElement(this.searchContents)
    }
}
