var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='datepicker']").click();
    while(true){
    var month=await page.locator("//span[@class='ui-datepicker-month']").innerText();
    var year=await page.locator("//span[@class='ui-datepicker-year']").innerText();
    if(month=="December" && year=="2027"){
        break;
    }else{
        await page.locator("//span[text()='Next']").click();

    }
    }
    await page.locator("//a[text()='24']").click();// if we want select date in same month
    await page.pause();
});
