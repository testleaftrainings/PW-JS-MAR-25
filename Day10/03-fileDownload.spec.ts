import { test } from "@playwright/test";

test(`FileDownload`,async ({page}) => {

    await page.goto(`https://leafground.com/file.xhtml`);
    const filePromise = page.waitForEvent('download')

    await page.getByText(`Download`,{exact:true}).click();

    const fDown = await filePromise;

    await fDown.saveAs(fDown.suggestedFilename());//Filename got from the system
    await fDown.saveAs("Data/t1.png");//We can specify the location andchange the name of the file
    await page.waitForTimeout(3000);
})