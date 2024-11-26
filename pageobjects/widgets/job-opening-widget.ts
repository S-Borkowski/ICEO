import {BaseWidget} from "./base-widget";
import {Locator, Page} from "@playwright/test";

export class JobOpeningWidget extends BaseWidget {
    readonly applyNowButton: Locator;

    constructor(page: Page) {
        super(page);

        this.applyNowButton = page.getByRole("button", {name: "Apply now"});
    }
}