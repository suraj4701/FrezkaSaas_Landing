import { test } from '@playwright/test';
import { AdminPanelVerify, AdminWebsiteVerify, CommonLinkVerify, DemoCallVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Explore Now Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Explore Now View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-b82f459 elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Explore Now View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-e240889 elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Explore Now View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-7d0e7c4 elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Explore Now View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const trustpilotLinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/frezka-saas/salon-admin')]");
    await AdminWebsiteVerify(page, trustpilotLinkLocator);
})

test("Explore Now Contact Us", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]").click()
    const support = page.locator("//a[normalize-space()='Contact Us']")
    const expectedLink = "https://iqonic.tech/contact-us/";
    await CommonLinkVerify(page, support, expectedLink);
})