import { test } from '@playwright/test';
import { DemoCallVerify, EnvantoFrezkaVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Feature", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-8396']").click()
    });

    test("Buy Now", async ({ page }) => {
        const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
        await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
    });

    test("View Demo", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await trustpilotLinkLocator.scrollIntoViewIfNeeded();
        await WebsiteVerify(page, trustpilotLinkLocator);
    });

    test("Trustpilot link verify", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, trustpilotLinkLocator);
    });

    test("Book Demo Call", async ({ page }) => {
        const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await DemoCallVerify(page, trustpilotLinkLocator);
    });
});