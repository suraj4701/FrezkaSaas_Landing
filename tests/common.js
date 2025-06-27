const { expect } = require('@playwright/test');

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    const iqonicDesignSpanLocator = newPage.locator("//body/div[@id='__next']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/h1[1]/span[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('IQONIC DESIGN');
    return newPage;
}

const EnvantoVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://codecanyon.net/user/iqonicdesign/portfolio");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'iqonicdesign - Portfolio')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('iqonicdesign - Portfolio');
    return newPage;
}

const WebsiteVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka-saas/");
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/frezka-saas/login-page");
    return newPage;
}

const DemoCallVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://tidycal.com/iqonicdesign/frezka-demo-call");
    return newPage;
}

const EnvantoFrezkaVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('Frezka SaaS - Software for Salons and Spa Businesses in Laravel');
    return newPage;
}

module.exports = { TrustpilotVerify, EnvantoVerify, WebsiteVerify, AdminPanelVerify, DemoCallVerify, EnvantoFrezkaVerify };