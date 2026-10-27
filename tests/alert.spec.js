var { test } = require('@playwright/test');

test('Click on Ok', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    page.on('dialog',async dialog=>{
    await page.waitForTimeout(2000);
    await dialog.accept();
    })
    await page.locator("//button[@id='alertBtn']").click();
});
test('Click on cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
    await page.waitForTimeout(2000);
    await dialog.dismiss();
    })
    await page.locator("//button[@id='confirmBtn']").click();
});
test('prompt message', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
    await page.waitForTimeout(2000);
    await dialog.accept("sowji");
    await page.pause();
    })
    await page.locator("//button[@id='promptBtn']").click();
    //await page.pause();
});