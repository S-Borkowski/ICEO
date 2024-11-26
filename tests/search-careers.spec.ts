import { test, expect } from '@playwright/test';
import {MainPage} from "../pageobjects/main-page";

test('Search Careers', async ({ page }) => {
   const mainPage = new MainPage(page);
   await mainPage.initialize();
   let careersWidget = await mainPage.clickCareersButton();
   let jobOpeningsWidget = await careersWidget.clickAllJobsButton();
   await expect(jobOpeningsWidget.titleLabel).toBeVisible();

   let jobOpeningWidget = await jobOpeningsWidget.clickJobOpeningButton("Senior QA Engineer");
   await expect(jobOpeningWidget.applyNowButton).toBeVisible()
});
