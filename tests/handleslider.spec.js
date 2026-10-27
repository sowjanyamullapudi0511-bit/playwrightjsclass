var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//span[@class='ui-slider-handle ui-corner-all ui-state-default']").nth(1).click();
    for(var i=0;i<=25;i++){//25 times we are clicking from keyboard
        await page.keyboard.press("ArrowRight");
    }
    await page.pause();
});