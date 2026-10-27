var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    var table= await page.locator("//table[@id='taskTable']");
    var rows=await table.locator("tr");//we need to specify tag because for every row it starts with tr
    var rowCount=await rows.count();//It w=will count the no. of rows
    for(var i=0; i < rowCount; i++){
        var row1= await rows.nth(i);
        var col=await row1.locator("th,td");//We need to specify tag table heading and table data
        var output="";
        for(var j=0;j<await col.count();j++){
            output+=await col.nth(j).innerText()+"|";
        }
        console.log(output);
    }

});
