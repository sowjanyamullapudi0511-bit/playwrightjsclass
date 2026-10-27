const{test,expect}=require('@playwright/test');
test("first class", async({page})=>{
    await page.goto("https://www.facebook.com/login")
  
});