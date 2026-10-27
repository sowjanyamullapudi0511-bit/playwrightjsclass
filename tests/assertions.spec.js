const { test, expect } = require('@playwright/test');

test('Validate valid credentials', async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
});
test('Validate invalid credentials', async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("//input[@name='username']").fill("Admin23");
    await page.locator("//input[@name='password']").fill("admin3");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
});