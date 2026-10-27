var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const frame=await page.frameLocator("//iframe")

});