var { test,expect} = require('@playwright/test');

test.describe("groupname1", ()=>{

test('Validate Valid login Credentials', async ({ page }) => {
  
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//div[@class='oxd-topbar-header-title']")).toBeVisible({timeout:10000});

});
});
//await page.waitForTimeout(2000);
test.describe("groupname2", ()=>{

test('Validate invalid login Credentials', async ({ page }) => {
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("//input[@name='username']").fill("Admin45");
    await page.locator("//input[@name='password']").fill("admin123");
    
    await page.locator("//button[@type='submit']").click();
    await expect(page.getByText("Invalid Credentials")).toBeVisible();
});
});