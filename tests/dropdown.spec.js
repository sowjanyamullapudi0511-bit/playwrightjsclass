var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //if we want to select option with the help of value
    await page.locator("//select[@id='country']").selectOption("France");
    //await page.pause();
    //if we want to select option with the help of index
    await page.locator("//select[@id='country']"). selectOption({index:2});
    await page.pause();
    //if we want to select element with the help of visible tesxt
    await page.locator("//select[@id='country']"). selectOption({label:"India"});
    //await page.pause();
});