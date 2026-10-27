var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='name']").fill("Sowjanya");
    await page.locator("//input[@id='email']").fill("abc@gmail.com");
    await page.locator("//input[@id='phone']").fill("9865333455");
    await page.locator("//textarea[@id='textarea']").fill("3-28/2, Kkamma vari street");
    var listRadioBox = await page.locator("//input[@type='radio' and @class='form-check-input']");
    console.log(await listRadioBox.count());

    for (var i = 0; i < await listRadioBox.count(); i++) {
        await listRadioBox.nth(i).click();
        await page.waitForTimeout(1000);
    }

    var listCheckbox = await page.locator("//input[@type='checkbox' and @class='form-check-input']");
    console.log(await listCheckbox.count());

    for (var i = 0; i < await listCheckbox.count(); i++) {
        await listCheckbox.nth(i).click();
        await page.waitForTimeout(1000);
        //await listCheckbox.nth(i).click().toBeUnchecked();
    }
});