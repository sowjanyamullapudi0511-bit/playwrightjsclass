var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/mouse-event/');
    await page.locator("//button[text()='Right Click Me']").click({button:"right"});
    await page.pause();
});