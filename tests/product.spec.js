import { test } from '@playwright/test';
import { AdminPanelVerify, AdminWebsiteVerify, CommonLinkVerify, DemoCallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Products", () => {
    test.describe("Landing Page", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(home_url);
            await page.locator("//li[@id='menu-item-8398']").hover();
            await page.locator("//li[@id='menu-item-8393']//a[@class='ct-menu-link'][normalize-space()='Landing Page']").click();
        });

        test("Trustpilot link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//a[@href='https://www.trustpilot.com/review/iqonic.design']//img[@decoding='async']");
            await TrustpilotVerify(page, trustpilotLinkLocator);
        });

        test("Envanto link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//a[@href='https://codecanyon.net/user/iqonicdesign/portfolio']//img[@decoding='async']");
            await EnvantoVerify(page, trustpilotLinkLocator);
        });

        test("Buy Now", async ({ page }) => {
            const envantofrezkaLinkLocator = page.locator("//div[@class='elementor-element elementor-element-d75b109 elementor-align-left elementor-widget__width-auto elementor-widget elementor-widget-elementskit-button']//div[@class='ekit-btn-wraper']");
            await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
            await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
        });

        test("View Demo", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//a[contains(@href,'https://apps.iqonic.design/frezka-saas/')][normalize-space()='View Demo']");
            await WebsiteVerify(page, trustpilotLinkLocator);
        });

        test("Book Demo Call", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//a[normalize-space()='Book a quick call.']");
            await DemoCallVerify(page, trustpilotLinkLocator);
        });
    });

    test.describe("SuperAdmin", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(home_url);
            await page.locator("//li[@id='menu-item-8398']").hover();
            await page.locator("//li[@id='menu-item-8394']//a[@class='ct-menu-link'][normalize-space()='Super Admin Panel']").click();
        });

        test("Trustpilot link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, trustpilotLinkLocator);
        });

        test("Envanto link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
            await EnvantoVerify(page, trustpilotLinkLocator);
        });

        test("Buy Now", async ({ page }) => {
            const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
            await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
        });

        test("View Demo", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, trustpilotLinkLocator);
        });

        test("Book Demo Call", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
            await DemoCallVerify(page, trustpilotLinkLocator);
        });

        test("Salon Website", async ({ page }) => {
            const facebookLinkLocator = page.locator("//a[contains(text(),'salon website’s')]");
            await facebookLinkLocator.scrollIntoViewIfNeeded();
            const expectedLink = "https://frezka-saas.iqonic.design/product/beauty-salon-website/";
            await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
        });
    });

    test.describe("AdminPanel", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(home_url);
            await page.locator("//li[@id='menu-item-8398']").hover();
            await page.locator("//li[@id='menu-item-8392']//a[@class='ct-menu-link'][normalize-space()='Admin Panel']").click();
        });

        test("Trustpilot link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, trustpilotLinkLocator);
        });

        test("Envanto link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
            await EnvantoVerify(page, trustpilotLinkLocator);
        });

        test("Buy Now", async ({ page }) => {
            const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
            await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
        });

        test("View Demo", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(page, trustpilotLinkLocator);
        });

        test("Book Demo Call", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
            await DemoCallVerify(page, trustpilotLinkLocator);
        });
    });

    test.describe("Website", () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(home_url);
            await page.locator("//li[@id='menu-item-8398']").hover();
            await page.locator("//li[@id='menu-item-10806']//a[@class='ct-menu-link'][normalize-space()='Vendor Specific Website']").click();
        });

        test("Trustpilot link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, trustpilotLinkLocator);
        });

        test("Envanto link verify", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
            await EnvantoVerify(page, trustpilotLinkLocator);
        });

        test("Buy Now", async ({ page }) => {
            const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
            await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
            await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
        });

        test("View Demo", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await AdminWebsiteVerify(page, trustpilotLinkLocator);
        });

        test("Book Demo Call", async ({ page }) => {
            const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
            await DemoCallVerify(page, trustpilotLinkLocator);
        });
    });
});