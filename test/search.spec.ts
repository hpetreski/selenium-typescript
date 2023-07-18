import { Builder, WebDriver } from 'selenium-webdriver';
import assert from 'assert';
import { Home } from './pageObjects/Home.js';
import { SearchResult } from './pageObjects/SearchResult.js';
import { cookie } from '../data/cookieData.js';
import { BrowserPage } from '../utils/BrowserUtils.js';

const baseUrl = 'https://www.youtube.com/'

describe('Search functionality', function () {
  let driver: WebDriver;
  this.timeout(30000)

  beforeEach(async function () {
    //Should be started on each test globally
    driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({ implicit: 500 });
  });

  afterEach(async function (){
    await driver.quit()
  })

  it('Search for videos', async function () {
    //Need to figure out how the cookies can be handled better
    const browserPage = new BrowserPage(driver);
    await browserPage.openApplication(baseUrl);
    await browserPage.addCookieAndRefresh(cookie)
    
    const pageTitle = await browserPage.getPageTitle()
    assert.equal("YouTube", pageTitle);

    const homePage = new Home(driver)
    await homePage.waitUntilSearchIsVisible();
    await homePage.searchText('Selenium')
    const searchResultPage = new SearchResult(driver)
    const contents = await searchResultPage.getContentsElement()
    assert.ok(contents);
  });
});
