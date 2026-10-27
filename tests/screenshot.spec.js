var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //How to take screenshot for entire window 
    //Here we dont need to create any seperate folder automatically folder will be created when we specify the path
    // We can see screenshots under playwright-report->screen
    await page.waitForTimeout(2000);
    await page.screenshot({path:"screen/orangehrm.png"});
    //How to take screenshot for any specific element
    //Here if the path name is different seperate folder will be created under playwright-report->screeeen
    await page.locator("//div[@class='orangehrm-login-slot']").screenshot({path: "screeeen/orangehrmlogin.png"});
    //If we run test again and again, old screenshot will be overwritten.For that we will use timestamp to make every screenshot unique
    //Here timestamp means current date and time. Ex:09/01/2026 12:31:45
    //it will convert toISOString() means convert date/time in standard format
    //javascript converts it to UTC time. For Ex:india is UTC+5:30, 12:31:45PM IST converts to UTC
    //replace(/[:.]/g,'-') means will replace with :. to -, g means replace all occurences
    //Main purpose of timestamp is to give every screenshot unique file name
    var timestamp= new Date().toISOString().replace(/[:.]/g,'-');
    await page.screenshot({path:"screen/orangehrm"+timestamp+".png"});
    await page.waitForTimeout(2000);
    await page.locator("//div[@class='orangehrm-login-slot']").screenshot({path: "screeeen/orangehrmlogin"+timestamp+".png"});
});