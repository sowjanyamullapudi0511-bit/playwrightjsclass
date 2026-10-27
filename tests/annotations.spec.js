const{test,expect}=require('@playwright/test')
test("Validate login page",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(4000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
});
/*test.only("validate admin page",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.waitForTimeout(4000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Admin']").click();
    console.log("admin page");
});*/
test.skip("validate PIM page",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.waitForTimeout(4000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='PIM']").click();
    console.log("PIM page");
});
test.fail("validate leave page",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.waitForTimeout(4000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Leave']").click();
    console.log("Leave page");
});
test.fixme("validate Time page",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.waitForTimeout(4000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Time']").click();
    console.log("Time page");
});