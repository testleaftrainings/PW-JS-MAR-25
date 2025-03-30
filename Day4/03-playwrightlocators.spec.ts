
import { test } from "@playwright/test";

test(`SalesForce Login`, async ({page}) => {

    await page.goto(`https://login.salesforce.com/?locale=in`);

    //loacte and fill the username 
    //#username
    await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);

    //to enter the password
    await page.locator(`#password`).fill(`Ravitest#1432`);

    await page.locator(`#Login`).click();

    await page.getByTitle("App Launcher",{exact:true}).click();

    await page.getByRole("button",{name:"View All"}).click();

    //Search apps or items...
    await page.getByPlaceholder("Search apps or items...").fill("Service");


})