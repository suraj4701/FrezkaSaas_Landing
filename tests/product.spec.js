import { test } from '@playwright/test';
import { AdminPanelVerify, AdminWebsiteVerify, CommonLinkVerify, DemoCallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Products Landing Page Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']//a[@class='ct-menu-link'][normalize-space()='Landing Page']").click()
    const trustpilotLinkLocator = page.locator("//a[@href='https://www.trustpilot.com/review/iqonic.design']//img[@decoding='async']");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Products Landing Page Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']//a[@class='ct-menu-link'][normalize-space()='Landing Page']").click()
    const trustpilotLinkLocator = page.locator("//a[@href='https://codecanyon.net/user/iqonicdesign/portfolio']//img[@decoding='async']");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Products Landing Page Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']//a[@class='ct-menu-link'][normalize-space()='Landing Page']").click()
    const envantofrezkaLinkLocator = page.locator("//div[@class='elementor-element elementor-element-d75b109 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button']//div[@class='ekit-btn-wraper']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Products Landing Page View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']//a[@class='ct-menu-link'][normalize-space()='Landing Page']").click()
    const trustpilotLinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/frezka-saas/')][normalize-space()='View Demo']");
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Products Landing Page Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8393']//a[@class='ct-menu-link'][normalize-space()='Landing Page']").click()
    const trustpilotLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']//a[@class='ct-menu-link'][normalize-space()='Super Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']//a[@class='ct-menu-link'][normalize-space()='Super Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']//a[@class='ct-menu-link'][normalize-space()='Super Admin Panel']").click()
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Products SuperAdmin View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']//a[@class='ct-menu-link'][normalize-space()='Super Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']//a[@class='ct-menu-link'][normalize-space()='Super Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Products SuperAdmin Salon Website", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8394']//a[@class='ct-menu-link'][normalize-space()='Super Admin Panel']").click()
    const facebookLinkLocator = page.locator("//a[contains(text(),'salon website’s')]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://frezka-saas.iqonic.design/product/beauty-salon-website/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Products AdminPanel Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']//a[@class='ct-menu-link'][normalize-space()='Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Products AdminPanel Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']//a[@class='ct-menu-link'][normalize-space()='Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Products AdminPanel Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']//a[@class='ct-menu-link'][normalize-space()='Admin Panel']").click()
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Products AdminPanel View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']//a[@class='ct-menu-link'][normalize-space()='Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Products AdminPanel Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-8392']//a[@class='ct-menu-link'][normalize-space()='Admin Panel']").click()
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Products Website Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-10806']//a[@class='ct-menu-link'][normalize-space()='Vendor Specific Website']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Products Website Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-10806']//a[@class='ct-menu-link'][normalize-space()='Vendor Specific Website']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Products Website Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-10806']//a[@class='ct-menu-link'][normalize-space()='Vendor Specific Website']").click()
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Products Website View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-10806']//a[@class='ct-menu-link'][normalize-space()='Vendor Specific Website']").click()
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminWebsiteVerify(page, trustpilotLinkLocator);
})

test("Products Website Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8398']").hover()
    await page.locator("//li[@id='menu-item-10806']//a[@class='ct-menu-link'][normalize-space()='Vendor Specific Website']").click()
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})