

/* Handling windows /switching between tabs 

Sequential approach :


Concurrent approach :
*/

import {chromium, expect, test} from "@playwright/test"

test(`Test to handle multiple pages`, async({page,context})=>{

    await page.goto("https://www.amazon.in/");

    const page_one = await context.newPage();
    await page_one.goto("https://leafground.com/");

    const page_two = await context.newPage();
    await page_two.goto("https://www.google.com/");

    page.waitForTimeout(3000)
//To get the count of the pages inside the context
const allPages = context.pages();
console.log(allPages);
console.log(`No. of opened pages : ${allPages.length}`);

/* const browser = await chromium.launch();
//Create multiple context

const context1 = await browser.newContext();
const context2= await browser.newContext();

//Get all the context
const allCOntexts = browser.contexts();
console.log(`Number of browser context : ${allCOntexts.length}`); */

//To get the title of each page
for(let newPage of allPages){

const Pagetitle = await newPage.title();
console.log(`The title of the page is ${Pagetitle}`);

}

await allPages[0].bringToFront();
await page.waitForTimeout(3000);

})


test.only(`Handling windows using sequential approach`,async({context,page})=>{

await page.goto(`https://leafground.com/window.xhtml`);

const windowPromise = context.waitForEvent('page'); //Promise is pending

await page.waitForTimeout(3000);

await page.getByText("Open",{exact:true}).click();

const newWindow = await windowPromise;

await expect(newWindow).toHaveURL("https://leafground.com/dashboard.xhtml");


})