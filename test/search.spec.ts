import assert from 'assert'
import { Home } from './pageObjects/Home.js'
import { SearchResult } from './pageObjects/SearchResult.js'
import { cookie } from '../data/cookieData.js'
import { BrowserPage } from '../utils/BrowserUtils.js'
import { baseUrl } from 'config/config.js'

describe('Search functionality', function () {
    it('Search for videos', async function () {
        // Disabling the linter complain as we are checking this in the before each step in the hook
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const driver = this.test!.driver
        
        const browserPage = new BrowserPage(driver)
        await browserPage.openApplication(baseUrl)
        await browserPage.addCookieAndRefresh(cookie)

        const pageTitle = await browserPage.getPageTitle()
        assert.equal('YouTube', pageTitle)

        const homePage = new Home(driver)
        await homePage.waitUntilSearchIsVisible()
        await homePage.searchText('Selenium')
        const searchResultPage = new SearchResult(driver)
        const contents = await searchResultPage.getSearchResultElement()
        assert.ok(contents)
    })
})
