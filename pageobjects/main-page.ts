import {BasePage} from "./base-page";
import {Locator, Page} from "@playwright/test";
import {CareersWidget} from "./widgets/careers-widget";

export class MainPage extends BasePage {
    private readonly careersButton: Locator;

    constructor(page: Page) {
        super(page);

        this.careersButton = page.getByRole("link", {name: "Careers"});
    }

    async initialize() {
        await this.page.goto('/');
    }

    async clickCareersButton() {
        await this.click(this.careersButton);
        return new CareersWidget(this.page);
    }
}
