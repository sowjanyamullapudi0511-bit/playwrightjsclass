var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.pause();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    //await page.pause();
    await page.locator("//span[text()='My Info']").click();
    await page.locator("//input[@name='firstName']").fill("sowjanya");
    await page.locator("//input[@name='middleName']").fill("naga");
    await page.locator("//input[@name='lastName']").fill("mullapudi");
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("46275117");
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(2).fill("123456789");
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(3).fill("4323134");
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("46275117");
    await page.locator("//button[@type='submit']").nth(1).click();
    //await page.locator("//div[text()='-- Select --']").selectOption("Indian");
    await page.pause();
});