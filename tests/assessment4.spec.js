var { test,expect } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/',{waitUntil:'domcontentloaded'});
    //await page.waitForTimeout(2000);
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    //await page.waitForTimeout(2000);
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
    await page.locator("//div[text()='Sauce Labs Backpack']").click();
    await expect(page.locator("//button[text()='Back to products']")).toHaveText('Back to products');
    await page.locator("//button[text()='Add to cart']").click();
    await page.locator("//button[text()='Back to products']").click();
    await page.waitForTimeout(2000);
    await page.locator("//a[@class='shopping_cart_link']").click();
    await expect(page.locator("//span[text()='Your Cart']")).toContainText('Your Cart');
    await page.pause();
})