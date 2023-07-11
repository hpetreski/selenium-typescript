/**
 * This file is a root hook plugin that defines the mocha root level hooks that will run on all tests
 * This should be the prefered mechanism for setting root level hooks as it is compatible with the mocha parallel mode
 * https://mochajs.org/#root-level-hooks
 */
import { Builder } from 'selenium-webdriver'

export const mochaHooks = {
    beforeEach: [
        async function () {
            // Starts a new driver on each test globally
            if (this.currentTest === null || this.currentTest === undefined) {
                throw new Error(
                    'Currently running test doesnt contain any data'
                )
            }
            this.currentTest.driver = await new Builder()
                .forBrowser('chrome')
                .build()
            await this.currentTest.driver
                .manage()
                .setTimeouts({ implicit: 500 })
        },
    ],
    afterEach: [
        async function () {
            await this.currentTest.driver.quit()
        },
    ],
}
