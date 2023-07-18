import assert from "assert";
import { Home } from "./pageObjects/Home.js";
import { SearchResult } from "./pageObjects/SearchResult.js";
import { cookie } from "../data/cookieData.js";
import { BrowserPage } from "../utils/BrowserUtils.js";

const baseUrl = "https://www.youtube.com/";

describe("Search functionality", function () {
  it("Search for videos", async function () {
    // Error handling needs to be improved
    const driver = this.test
      ? this.test.driver
      : (() => {
          throw new Error("Driver was not initialized correctly");
        })();
    const browserPage = new BrowserPage(driver);
    await browserPage.openApplication(baseUrl);
    await browserPage.addCookieAndRefresh(cookie);

    const pageTitle = await browserPage.getPageTitle();
    assert.equal("YouTube", pageTitle);

    const homePage = new Home(driver);
    await homePage.waitUntilSearchIsVisible();
    await homePage.searchText("Selenium");
    const searchResultPage = new SearchResult(driver);
    const contents = await searchResultPage.getSearchResultElement();
    assert.ok(contents);
  });
});
