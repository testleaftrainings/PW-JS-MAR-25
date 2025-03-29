
import {chromium, firefox, test, webkit } from "@playwright/test";

test(`Test to launch a browser`, async({page}) => {

//Create a browser instance

/* const browser = await chromium.launch({headless:false,channel:'msedge'});

//Create a browser context

const context = await browser.newContext();

//Create a new page

const page = await context.newPage(); */

//Load the url
await page.goto("http://leaftaps.com/opentaps/control/main");

//Get the url of the page

const url = page.url();
console.log(`The url of the page is ${url}`);


})