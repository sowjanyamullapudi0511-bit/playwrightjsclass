var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://www.medimention.com/');
    //scroll till particular element in web page
    /*const element=await page.locator("//span[text()='Need blood in a hurry?']");
    await element.scrollIntoViewIfNeeded();
    await page.pause();*/
    //scroll bottom of page
    await page.evaluate(()=>{
        window.scrollTo({
            top:document.body.scrollHeight,
            behavior:"smooth"
        })
    })
    await page.waitForTimeout(2000);
    //scroll top of page
    await page.evaluate(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
    await page.pause();
});