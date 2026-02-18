import { expect, test } from '@playwright/test';
import { AdminPanelVerify, AdminWebsiteVerify, CommonLinkVerify, DemoCallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
const home_url = process.env.HOME_URL;

test("Home Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("Home Envanto link verify", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, trustpilotLinkLocator);
})

test("Home User Website verify", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Home Admin Panel verify", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Home Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Home Super Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[contains(@target,'_blank')][normalize-space()='Super Admin Panel']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://frezka-saas.iqonic.design/product/super-admin-dashboard-for-salon-saas/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//p[contains(text(),'Frezka SaaS offers a complete ecosystem to streaml')]//a[normalize-space()='Admin Panel']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://frezka-saas.iqonic.design/product/salon-management-admin-panel/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Vendor Specific Website", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[@target='_blank'][normalize-space()='Vendor Specific Website']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://frezka-saas.iqonic.design/product/vendor-specific-website/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Landing Page", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[@target='_blank'][normalize-space()='Landing Page']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://frezka-saas.iqonic.design/product/beauty-salon-website/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home View Demo", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-704d08a elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Home View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-4260db4d elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Home View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-d1771cb elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Home View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-530c156 elementor-align-left elementor-widget__width-inherit elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await AdminWebsiteVerify(page, trustpilotLinkLocator);
})

test("Home Book Demo Call 2", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Home Book Demo Call 3", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Still wondering if Frezka SaaS suits your business')]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Home Book Demo Call 4", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Not sure what you need? Let’s walk through it.')]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Home Buy Now", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-6cc5640 elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='buy now']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-3417bab elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='buy now']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 3", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-ad2963a elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='buy now']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-46d761d elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Home View Demo 6", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//div[contains(@class,'elementor-element elementor-element-cd69985 elementor-align-left elementor-widget elementor-widget-elementskit-button')]//a[contains(@class,'whitespace--normal')][normalize-space()='View Demo']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await AdminWebsiteVerify(page, trustpilotLinkLocator);
})

test("Home Book Demo Call 5", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//a[normalize-space()='Talk to a Product Expert']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Home Buy Now 6", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 7", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//a[contains(@class,'ha-comparison-table__btns-item--btn elementor-repeater-item-6734a01')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Service", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://service.iqonic.design/services/frezka-saas-with-laravel-backend/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Buy Now 8", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//a[normalize-space()='Buy Frezka SaaS']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Facebook link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://www.facebook.com/iqonicdesign";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home YouTube link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://www.youtube.com/c/IqonicDesign";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home X Twitter link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[3]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://x.com/iqonicdesign";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Instagram link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[4]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://www.instagram.com/iqonicdesign/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Footer Landing Page", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//span[normalize-space()='Landing Page']");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/product/beauty-salon-website/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/beauty-salon-website/");
});

test("Home Footer Super Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//span[normalize-space()='Super Admin Panel']");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/product/super-admin-dashboard-for-salon-saas/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/super-admin-dashboard-for-salon-saas/");
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//span[normalize-space()='Admin Panel']");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/product/salon-management-admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/salon-management-admin-panel/");
});

test("Home Footer Vendor Specific Website", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//span[normalize-space()='Vendor Specific Website']");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/product/vendor-specific-website/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/vendor-specific-website/");
});

test("Home Footer Doc", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://documentation.iqonic.design/frezka-saas/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://apps.iqonic.design/frezka-saas/faqs";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://iqonic.desky.support/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[2]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/pricing/");
});

test("Home Footer Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[3]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://iqonic.tech/software-development-cost-calculator/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[4]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://iqonic.design/licensing-terms-more/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("Home Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[normalize-space()='Iqonic Design.']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const expectedLink = "https://iqonic.design/";
    await CommonLinkVerify(page, facebookLinkLocator, expectedLink);
})

test("WhyWeDifferent Trustpilot link verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8397']").click();
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]");
    await TrustpilotVerify(page, trustpilotLinkLocator);
})

test("WhyWeDifferent Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-8397']").click();
    const trustpilotLinkLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await DemoCallVerify(page, trustpilotLinkLocator);
})