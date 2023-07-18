import { By, Builder, until, WebDriver } from 'selenium-webdriver';
import assert from 'assert';

const baseUrl = 'https://www.youtube.com/'
const cookie = {
  name: 'SOCS',
  value: 'CAISEwgDEgk1NDQ1NzU1NzgaAmVuIAEaBgiA_IKlBg',
  domain: '.youtube.com',
  path: '/',
  expiry: 1722434590
}

describe('First script', function () {
  let driver: WebDriver;
  this.timeout(30000)

  before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async () => await driver.quit());

  it('Search for videos', async function () {
    await driver.get(baseUrl);
    await driver.manage().addCookie(cookie)
    await driver.navigate().refresh()
    await driver.manage().setTimeouts({ implicit: 500 });
    
    let title = await driver.getTitle();
    assert.equal("YouTube", title);

    await driver.wait(until.elementLocated(By.name('search_query')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.name('search_query'))), 10000);
  
    let textBox = await driver.findElement(By.name('search_query'));
    let submitButton = await driver.findElement(By.id('search-icon-legacy'));

    await textBox.click()
    await textBox.sendKeys('Selenium');
    await submitButton.click();

    await driver.wait(until.elementLocated(By.id('contents')), 5000);

    let message = await driver.findElement(By.id('contents'));
    assert.ok(message);
  });
});
