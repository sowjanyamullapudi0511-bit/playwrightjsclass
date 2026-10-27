/*const { test,expect } = require('@playwright/test');
test.beforeAll(async()=>{
    console.log("Execute before all");
});
test.afterAll(async()=>{
    console.log("Execute after all");
});
test.beforeEach(async()=>{
    console.log("Execute before each");
});
test.afterEach(async()=>{
    console.log("Execute after each");
});

test("test1", async({page})=>{
    console.log("test1");
})
test("test2", async({page})=>{
    console.log("test2");
})*/
//Orange HRM site
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
});
test("test1", async({page})=>{
  await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
});
test("test2", async({page})=>{
    await page.locator("//span[text()='PIM']").click();
    await page.waitForTimeout(2000);
  await expect(page.locator("//h6[text()='PIM']")).toBeVisible();
});