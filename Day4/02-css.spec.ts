
import { test } from "@playwright/test";

test(`learn about Xpath`, async ({page}) => {

    //Load the URL in the browser

await page.goto(`http://leaftaps.com/opentaps/control/main`);

//locate and fill the data in the username field
await page.locator(`#username`).fill("demoSalesManager");

//locate and fill the data in the password field
await page.locator(`#password`).fill("crmsfa");

await page.waitForTimeout(2000);

//// to click on the login button

await page.locator(`.decorativeSubmit`).click(); 

const title = await page.title();
console.log(title);

await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.waitForTimeout(2000);




})