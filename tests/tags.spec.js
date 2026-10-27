var { test,expect} = require('@playwright/test');
test('working on tags 1',{tag:'@smoke1'}, async ({ page }) => {

    console.log("Smoke1");

});
test('working on tags 2',{tag:'@smoke2'}, async ({ page }) => {

    console.log("Smoke2");

});
test('working on tags 3',{tag:'@regression'}, async ({ page }) => {

    console.log("Regression1");

});
test('working on tags 4',{tag:'@regression2'}, async ({ page }) => {

    console.log("Regression2");

});
test('working on tags 5',{tag:'@retesting'}, async ({ page }) => {

    console.log("tag retesting");

});
test('working on tags 6',{tag:'@sanity'}, async ({ page }) => {

    console.log("Sanity test");

});