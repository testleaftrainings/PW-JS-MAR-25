


import { test } from "@playwright/test";

test.use({storageState:"Data/st_login.json"})//cookies data until your lead creation
/* page.goto(`http://leaftaps.com/opentaps/control/login`)
await page.fill("#username",'demoSalesManager');
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
await page.click("text=CRM/SFA") // until lead create page */

test(`Using info to Home Page`,async ({page}) => {
 await page.goto("http://leaftaps.com/crmsfa/control/main")

 await page.getByText("Leads",{exact:true}).click(); // Continue from your lead creation page 
    //await page.click(".decorativeSubmit")
})