import { expect, test } from '@playwright/test';
import { AdminPanelVerify, DemoCallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Products SuperAdmin Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']").click()
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Products SuperAdmin View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']").click()
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Salon Website", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']").click()
    const facebookLinkLocator = page.locator("//a[contains(text(),'salon website’s')]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/beauty-salon-website/");
})

test("Products AdminPanel Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Products AdminPanel Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Products AdminPanel Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']").click()
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Products AdminPanel View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Products AdminPanel Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']").click()
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Products Website Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Products Website Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Products Website Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']").click()
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Products Website View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Products Website Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']").click()
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})