import { Cookie } from 'interfaces/browser/BrowserInterfaces.js';
import { WebDriver } from 'selenium-webdriver'; 

export class BrowserPage {
  constructor(private driver: WebDriver) {}

  async openApplication(url: string){
    await this.driver.get(url);
  }

  async getPageTitle(){
    return await this.driver.getTitle();
  }

  async addCookieAndRefresh(cookie: Cookie) {
    await this.driver.manage().addCookie(cookie)
    await this.driver.navigate().refresh()
  }
}