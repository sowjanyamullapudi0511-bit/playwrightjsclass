const{test,expect}=require('@playwright/test')
test.beforeEach(async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(4000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
});
test("validate admin page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Admin']").click();
    await expect(page.locator("//h6[text()='Admin']")).toBeVisible();
});
test("validate PIM page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='PIM']").click();
    await expect(page.locator("//h6[text()='PIM']")).toBeVisible();
});
test("validate leave page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Leave']").click();
    await expect(page.locator("//h6[text()='Leave']")).toBeVisible();
});
test("validate time page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Time']").click();
    await expect(page.locator("//h6[text()='Time']")).toBeVisible();
});
test("validate Recruitment page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Recruitment']").click();
    await expect(page.locator("//h6[text()='Recruitment']")).toBeVisible();
});
test("validate My Info page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='My Info']").click();
    await expect(page.locator("//h6[text()='My Info']")).toBeVisible();
});
test("validate Performance page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Performance']").click();
    await expect(page.locator("//h6[text()='Performance']")).toBeVisible();
});
test("validate Dashboard page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Dashboard']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
});
test("validate Directory page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Directory']").click();
    await expect(page.locator("//h6[text()='Directory']")).toBeVisible();
});
test("validate Maintenance page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Maintenance']").click();
    await expect(page.locator("//h6[text()='Maintenance']")).toBeVisible();
});
test("validate Claim page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Claim']").click();
    await expect(page.locator("//h6[text()='Claim']")).toBeVisible();
});
test("validate Buzz page",async({page})=>{
    await page.waitForTimeout(40000);
    await page.locator("//span[text()='Buzz']").click();
    await expect(page.locator("//h6[text()='Buzz']")).toBeVisible();
});
test.afterAll(async({page})=>{
 console.log("Test cases Completed");
})