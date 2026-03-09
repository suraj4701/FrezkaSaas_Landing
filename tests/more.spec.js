import { test } from '@playwright/test';
import { CommonLinkVerify, DemoCallVerify, EnvantoFrezkaVerify } from './common';
const home_url = process.env.HOME_URL;

test("Pricing Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8395']").click()
    const envantofrezkaLinkLocator = page.locator("(//a[@class='ha-comparison-table__btns-item--btn elementor-repeater-item-6734a01'])[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Pricing Buy Service", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8395']").click()
    const facebookLinkLocator = page.locator("//a[@class='ha-comparison-table__btns-item--btn elementor-repeater-item-54bdfe2']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://service.iqonic.design/services/frezka-saas-with-laravel-backend/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("GetHelp Document", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8399']").hover()
    const support = page.locator("//li[@id='menu-item-8400']")
    const expectedLink = "https://documentation.iqonic.design/frezka-saas/";
    await CommonLinkVerify(page, support, expectedLink);
})

test("GetHelp Support", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8399']").hover()
    const support = page.locator("//li[@id='menu-item-8401']")
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, support, expectedLink);
})

test("Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const support = page.locator("//li[@id='menu-item-8402']")
    const expectedLink = "https://iqonic.tech/";
    await CommonLinkVerify(page, support, expectedLink);
})

test("Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//li[@id='menu-item-9716']");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Buy Now", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//div[contains(@data-items,'primary')]//a[contains(@aria-label,'Buy Now')][normalize-space()='Buy Now']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})