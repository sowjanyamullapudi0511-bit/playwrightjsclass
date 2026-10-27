const{test,expect}=require('@playwright/test')
var testdata = require('./data/assessment.json')
testdata.forEach((data)=>{
test("validate all text field" +data.name, async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='name']").fill(data.name);
    await page.locator("//input[@id='email']").fill(data.Email);
    await page.locator("//input[@id='phone']").fill(data.phone);
    await page.locator("//textarea[@id='textarea']").fill(data.Address);
    await page.pause();

})
})