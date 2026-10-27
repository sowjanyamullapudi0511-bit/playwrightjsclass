# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> Valid credentialsAdmin
- Location: tests\datadriven.spec.js:5:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | const{test,expect}=require('@playwright/test')
  2  | 
  3  | var testdata=require('../tests/data/logindata.json')
  4  | testdata.forEach((data)=>{
  5  |     test("Valid credentials" +data.username, async function({page}){
  6  |         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  7  |     
  8  |     await page.locator("//input[@name='username']").fill(data.username);
  9  |     await page.locator("//input[@name='password']").fill(data.password);
> 10 |     await page.waitForTimeout(2000);
     |                ^ Error: page.waitForTimeout: Test ended.
  11 |     await page.locator("//button[@type='submit']").click();
  12 |     })
  13 | 
  14 | })
  15 | 
  16 | 
```