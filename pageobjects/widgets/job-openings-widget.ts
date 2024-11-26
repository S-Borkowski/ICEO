import {BaseWidget} from "./base-widget";
import {Locator, Page} from "@playwright/test";
import {JobOpeningWidget} from "./job-opening-widget";

export class JobOpeningsWidget extends BaseWidget {
    readonly titleLabel: Locator;

    constructor(page: Page) {
        super(page);

        this.titleLabel = page.getByText("Choose Your Team");
    }

    async clickJobOpeningButton(openingName: string) {
        await this.click(this.page.getByText(openingName));
        return new JobOpeningWidget(this.page);
    }
}