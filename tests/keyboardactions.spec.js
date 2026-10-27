//It means how to press keyboard buttons
/*var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='name']").fill("Sowjanya");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V");
    await page.pause();
    
 //Delete
 //Escape
 //Arrow UP
 //Arrow Down
 //Arrow left   
 //Home
 //End
 //Control+Alt
 //Shift
 //page up
 //Alt
 //Backspace
});*/
//mouse actions
var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='name']").fill("Sowjanya");
    await page.locator("//button[@name='start']").click();   //Single click
    //await page.pause();
    await page.locator("//button[text()='Copy Text']").dblclick(); //double click
    await page.waitForTimeout(2000);
    await page.locator("//button[text()='Point Me']").hover(); //hover
    //await page.pause();
    //Drag & Drop-- For these we have to select both drag location and drop location
    await page.locator("//p[text()='Drag me to my target']").dragTo(page.locator("//p[text()='Drop here']"));
    await page.pause();

});
