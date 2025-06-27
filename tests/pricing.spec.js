import { expect, test } from '@playwright/test';
import { AdminPanelVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

// test("Pricing Buy Now", async ({ page }) => {
//     await page.goto(home_url);
//     await page.locator("//li[@id='menu-item-8395']").click()
//     const envantofrezkaLinkLocator = page.locator("/html[1]/body[1]/div[2]/main[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
//     await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
//     await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
// })