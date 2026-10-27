const { test, expect } = require('@playwright/test');
const{LoginPage} = require('../tests/pages/loginpage');
test("Validate login credentials", async({page})=>{
    var loginobj=new LoginPage(page);
    await loginobj.navigation();
    await loginobj.enterusername("Admin");
    await loginobj.enterpassword("admin123");
    await loginobj.login();
    await expect(loginobj.dashboard).toBeVisible();
    await page.pause();
});
test("Validate invalid credentials", async({page})=>{
    var loginobj=new LoginPage(page);
    await loginobj.navigation();
    await loginobj.enterusername("Admin343");
    await loginobj.enterpassword("admin123");
    await loginobj.login();
    await expect(loginobj.invalidmsg).toBeVisible();
    await page.pause();
})
