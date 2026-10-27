var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await page.pause();
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    await page.locator("//a[@class='shopping_cart_link']").click();
    await page.waitForTimeout(2000);
    await page.locator("//button[@id='remove-sauce-labs-backpack']").click();
    await page.locator("//button[@id='checkout']").click();
    await page.locator("//input[@id='first-name']").fill("sowji");
    await page.locator("//input[@id='last-name']").fill("mullapudi");
    await page.locator("//input[@id='postal-code']").fill("500019");
    await page.locator("//input[@id='continue']").click();
    await page.locator("//button[@id='cancel']").click();
    await page.pause();



});