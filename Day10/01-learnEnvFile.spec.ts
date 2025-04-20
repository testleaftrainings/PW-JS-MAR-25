
import { test } from "@playwright/test";
import dotenv from "dotenv";

//dotenv.config()

//dotenv.config({path:"Data/prod.env"})//setting path to read your .env file

const filetoRead = process.env.filename||'qa'//if you don't have a fileName here by deafult it will read your 'qa'

dotenv.config({path:`Data/${filetoRead}.env`})


test(`Learn to read env`, async ({page}) => {

    console.log(process.env.LF_Username);// process is from node.jswhich connects to your system process
    //Task manager process that is present in your system

    const uname = process.env.LF_Username as string //type assertion from typescript
    const pwd = process.env.LF_Password as string

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.fill(`#username`,uname);
    await page.fill(`#password`,pwd);
    await page.click(".decorativeSubmit");
    

})