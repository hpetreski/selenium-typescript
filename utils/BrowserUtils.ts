/**
 * This file specifies common browser related functions structured with the page object model
 */
import type { Cookie } from 'interfaces/browser/BrowserInterfaces.js'
import type { WebDriver } from 'selenium-webdriver'

export class BrowserPage {
    constructor(private readonly driver: WebDriver) {}

    async openApplication(url: string): Promise<void> {
        await this.driver.get(url)
    }

    async getPageTitle(): Promise<string> {
        return await this.driver.getTitle()
    }

    async addCookieAndRefresh(cookie: Cookie): Promise<void> {
        await this.driver.manage().addCookie(cookie)
        await this.driver.navigate().refresh()
    }
}
