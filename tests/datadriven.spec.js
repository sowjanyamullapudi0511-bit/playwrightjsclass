const{test,expect}=require('@playwright/test')

var testdata=require('../tests/data/logindata.json')
testdata.forEach((data)=>{
    test("Valid credentials" +data.username, async function({page}){
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("//input[@name='username']").fill(data.username);
    await page.locator("//input[@name='password']").fill(data.password);
    await page.waitForTimeout(2000);
    await page.locator("//button[@type='submit']").click();
    })

})

