import { expect, test } from '@playwright/test';
import { AdminPanelVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Explore Now View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Explore Now View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Explore Now View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Explore Now Contact Us", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const support = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        support.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/contact-us/");
})