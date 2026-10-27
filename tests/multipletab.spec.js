var { test } = require('@playwright/test');

test('Validate multiple tabs', async ({ browser}) => {
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.facebook.com/');
    console.log(await page.title());
    const [newpage]=await Promise.all(
        [context.waitForEvent('page'),await page.locator("//a[text()='Meta Store']").click()]
    )
    await page.waitForTimeout(2000);
    console.log(await newpage.title());
    console.log(await page.title());
    await page.pause();
})