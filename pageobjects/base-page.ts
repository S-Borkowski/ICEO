import {Locator, Page} from "@playwright/test";

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator) {
        await locator.click();
    }
}