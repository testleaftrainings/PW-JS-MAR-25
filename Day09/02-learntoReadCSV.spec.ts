import {test} from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";

const loginData = parse(fs.readFileSync("Data/loginCredentials.csv"),{
    columns : true, //to set the first row of the csv file as header information
    skip_empty_lines:true,
    from_line:2
})

//loginData is stored as an array of data from csv [row1][row2]

for( let data of loginData){
test(`Learn to read CSV data ${data.TCID}`, async ({page}) => {
    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.fill("//input[@id='username']",data.Username);
    await page.fill("//input[@id='password']",data.password);
    await page.waitForTimeout(3000);
    await page.locator(".decorativeSubmit").click();    
})
}