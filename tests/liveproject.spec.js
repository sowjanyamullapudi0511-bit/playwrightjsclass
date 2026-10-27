var { test,expect} = require('@playwright/test');

test.describe("groupname1", ()=>{

test('Validate Valid Navigation bar', async ({ page }) => {
  
    await page.goto('https://www.ampkart.com/?srsltid=AU7gw4VC_4WrSUbdVQ_4K1pb-V6oNjI8E4Xcf_DLGguPgaeq6RSLnIVH');
    
    await page.locator("//li[@class='shop-nav-tree__item shop-nav-tree__item--top  ']").nth(0).click();
    await page.locator("//li[@class='shop-nav-tree__item shop-nav-tree__item--top  ']").nth(1).click();
    await page.locator("//li[@class='shop-nav-tree__item shop-nav-tree__item--top  ']").nth(2).click();
    await page.locator("//li[@class='shop-nav-tree__item shop-nav-tree__item--top  ']").nth(3).click();
    await page.locator("//button[@class='shop-nav-pill shop-nav-tree__top-trigger']").nth(0).hover();
    await page.locator("//button[@class='shop-nav-pill shop-nav-tree__top-trigger']").nth(1).hover();
    await page.locator("//button[@class='shop-nav-pill shop-nav-tree__top-trigger']").nth(2).hover();
    await page.locator("//li[@class='shop-nav-tree__item shop-nav-tree__item--top  ']").nth(4).click();
    await page.pause();
    
});
})
test.describe("groupname2", ()=>{
    test('Validate Valid login Credentials', async ({ page }) => {
    await page.goto('https://www.ampkart.com/?srsltid=AU7gw4VC_4WrSUbdVQ_4K1pb-V6oNjI8E4Xcf_DLGguPgaeq6RSLnIVH');
    await page.locator("//li[@class='shop-nav-tree__item shop-nav-tree__item--top  ']").nth(4).click();
    await page.getByText('Create an account').click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox',{name:'name'}).fill('Sowjanya');
    await page.getByRole('textbox',{name:'email'}).fill('abc@gmail.com');
    await page.getByRole('textbox',{name:'mobile'}).fill('9347172102');
    await page.locator("//button[text()='Send Signup OTP']").click();
})
})
