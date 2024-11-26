import {expect, Locator, Page} from "@playwright/test";
import {BaseWidget} from "./base-widget";
import {JobOpeningsWidget} from "./job-openings-widget";

export class CareersWidget extends BaseWidget {
    private readonly menuLabel: Locator;
    private readonly jobOpeningsButton: Locator;
    private readonly allJobsButton: Locator;

    constructor(page: Page) {
        super(page);

        this.menuLabel = page.getByText("Career menu");
        this.jobOpeningsButton = page.getByText("Job openings");
        this.allJobsButton = page.getByText("All jobs");
    }

    async menuLabelExists() {
        await expect(this.menuLabel).toBeVisible();
    }

    async clickJobOpeningsButton() {
        await this.click(this.jobOpeningsButton);
    }

    async clickAllJobsButton() {
        await this.click(this.allJobsButton);
        return new JobOpeningsWidget(this.page);
    }
}
