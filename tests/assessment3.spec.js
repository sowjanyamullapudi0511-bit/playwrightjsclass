var { test,expect } = require('@playwright/test');
test.describe("Navigation bars", ()=>{
test('Validate login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//div[@class='oxd-topbar-header-title']")).toBeVisible({timeout:10000});
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("Sowjanya");
    await expect(page.locator("//span[text()='Admin']")).toBeVisible();
    await page.waitForTimeout(2000);
    await expect(page.locator("//span[text()='PIM']")).toBeVisible();
    await expect(page.locator("//span[text()='Leave']")).toBeVisible();
    await expect(page.locator("//span[text()='Time']")).toBeVisible();
    await expect(page.locator("//span[text()='Recruitment']")).toBeVisible();
    await page.pause();
})
})
