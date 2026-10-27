var { test } = require('@playwright/test');

test('first class', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // To upload any files, first we need to create one folder called files under tests or playwrightJsClas
    //Then go to file manager copy the documents or PDF's to desktop playwright folder under tests->files and paste it
    //We can see whatever PDF's or docs are added under tests->files
    //single upload
    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/files/BSNL Internet Statement  APR-2.pdf");
    //To upload multiple files we have to use array. All the files should be seperated by comma
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["tests/files/BSNL Internet Statement  APR-2.pdf","tests/files/Sowjanya_JavaScript_Assessments.docx"]);
    await page.pause();
});