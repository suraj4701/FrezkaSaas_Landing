import { expect, test } from '@playwright/test';
import { AdminPanelVerify, DemoCallVerify, EnvantoFrezkaVerify, EnvantoVerify, TrustpilotVerify, WebsiteVerify } from './common';
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

test("Home View Demo", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Home Super Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/super-admin-dashboard-for-salon-saas/");
})

test("Home Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]/a[2]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/salon-management-admin-panel/");
})

test("Home Website", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/p[1]/a[3]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/beauty-salon-website/");
})

test("Home View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/a[1]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Home View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[1]/div[1]/a[1]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await WebsiteVerify(page, trustpilotLinkLocator);
})

test("Home View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[5]/div[1]/div[1]/div[1]/a[1]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, trustpilotLinkLocator);
})

test("Home Book Demo Call 2", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Home Buy Now", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 2", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 3", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Book Demo Call 3", async ({ page }) => {
    await page.goto(home_url);
    const trustpilotLinkLocator = page.locator("//a[normalize-space()='Talk to a Product Expert']");
    await trustpilotLinkLocator.scrollIntoViewIfNeeded();
    await DemoCallVerify(page, trustpilotLinkLocator);
})

test("Home Buy Now 4", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//a[contains(@class,'whitespace--normal')][normalize-space()='Buy Now']");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Now 5", async ({ page }) => {
    await page.goto(home_url);
    const envantofrezkaLinkLocator = page.locator("//a[contains(@class,'ha-comparison-table__btns-item--btn elementor-repeater-item-6734a01')]");
    await envantofrezkaLinkLocator.scrollIntoViewIfNeeded();
    await EnvantoFrezkaVerify(page, envantofrezkaLinkLocator);
})

test("Home Buy Service", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/frezka-saas-with-laravel-backend/");
})

test("Home Facebook link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("Home YouTube link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/c/IqonicDesign");
})

test("Home X Twitter link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[3]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Home Instagram link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/ul[1]/li[4]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://www.instagram.com/iqonicdesign/");
})

test("Home Footer Super Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/product/super-admin-dashboard-for-salon-saas/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/super-admin-dashboard-for-salon-saas/");
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/product/salon-management-admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/salon-management-admin-panel/");
});

test("Home Footer Website", async ({ page }) => {
    await page.goto(home_url);
    const learnbtnLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await learnbtnLinkLocator.scrollIntoViewIfNeeded();
    await learnbtnLinkLocator.click();
    await page.waitForURL("https://frezka-saas.iqonic.design/product/beauty-salon-website/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://frezka-saas.iqonic.design/product/beauty-salon-website/");
});

test("Home Footer Doc", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://documentation.iqonic.design/frezka-saas/");
})

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka-saas/faqs");
})

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
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
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/cost-calculator/");
})

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[4]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://iqonic.design/licensing-terms-more/");
})

test("Home Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[normalize-space()='Iqonic Design.']");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    const urlObject = new URL(newPageUrl);
    const urlWithoutQueryParams = urlObject.origin + urlObject.pathname;
    expect(urlWithoutQueryParams).toBe("https://iqonic.design/");
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