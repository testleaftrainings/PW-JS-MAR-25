

import { test } from "@playwright/test";

test(`Handling the dropdown using select tag`, async ({page}) => {

    //Load the URL in the browser

await page.goto(`http://leaftaps.com/opentaps/control/main`);

//locate and fill the data in the username field
await page.locator(`//input[@id='username']`).fill("demoSalesManager");

//locate and fill the data in the password field
await page.locator(`//input[@id='password']`).fill("crmsfa");

await page.waitForTimeout(2000);

//// to click on the login button

await page.locator(`//input[@class='decorativeSubmit']`).click(); 

const title = await page.title();
console.log(title);

await page.locator(`//a[contains(text(),'CRM')]`).click();
await page.waitForTimeout(2000);

await page.locator(`//a[text()='Create Lead']`).click();

await page.locator(`#createLeadForm_companyName`).fill(`Testleaf`);

await page.locator(`#createLeadForm_firstName`).fill(`Ravi`);

await page.locator(`#createLeadForm_lastName`).fill(`R`);

//select the source dropdown
//Locate the dropdown value

await page.selectOption(`#createLeadForm_dataSourceId`,{value:"LEAD_DIRECTMAIL"});
await page.waitForTimeout(2000);

const sourceValue = await page.locator(`#createLeadForm_dataSourceId option:checked`).innerText();
console.log(`The value of source ${sourceValue}`);

//get the value from the dropdown

const dropdown = page.locator(`#createLeadForm_dataSourceId>option`);
const dropDownCount = await dropdown.count();
console.log(`No. of values present in the dropdown ${dropDownCount}`);

for (let index = 0; index < dropDownCount; index++) {
    console.log( await dropdown.nth(index).innerText());  
    }

    await page.selectOption(`#createLeadForm_currencyUomId`,{index:13});
await page.waitForTimeout(2000);

await page.selectOption(`#createLeadForm_generalCountryGeoId`,{label:"India"});
await page.waitForTimeout(2000);

})


//nth -->index = 0,1,2,3 --> [ ,Cold call,Conference,Direct Mail,Employe,.....]