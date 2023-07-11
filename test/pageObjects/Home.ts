import type { Locator, WebDriver } from 'selenium-webdriver'
import { By, until } from 'selenium-webdriver'

export class Home {
    private readonly searchInput: Locator = By.name('search_query')
    private readonly searchButton: Locator = By.id('search-icon-legacy')

    constructor(private readonly driver: WebDriver) {}

    async waitUntilSearchIsVisible(): Promise<void> {
        await this.driver.wait(
            until.elementIsVisible(this.driver.findElement(this.searchInput)),
            10000
        )
    }

    async searchText(text: string): Promise<void> {
        const searchBox = await this.driver.findElement(this.searchInput)
        const searchButton = await this.driver.findElement(this.searchButton)

        await searchBox.click()
        await searchBox.sendKeys(text)
        await searchButton.click()
    }
}
