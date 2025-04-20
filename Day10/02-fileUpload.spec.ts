
import { test } from "@playwright/test";

test(`FileUpload`,async({page})=>{

    /* await page.goto("https://leafground.com/file.xhtml");

    const uploadFile = page.locator(`//span[text()="Choose"]/following-sibling::input`).first()
await uploadFile.setInputFiles("Data/learningFileUpload.txt");
await page.waitForTimeout(6000); */

await page.goto("https://the-internet.herokuapp.com/upload");

await page.locator("#file-upload").setInputFiles("Data/learningFileUpload.txt");
await page.waitForTimeout(6000);

})

test(`Multiple FileUpload`, async ({page}) => {

    await page.goto(`https://leafground.com/file.xhtml`);
    const MultipleUpload = page.locator(`//span[text()="Choose"]/following-sibling::input`).last();
    await MultipleUpload.setInputFiles(["Data/myFile379.png","Data/TestLeaf Logo.png"]);
    await page.waitForTimeout(6000);

})

test.only(`FileUpload with no type="file" attribute`,async({page})=>{
await page.goto(`https://the-internet.herokuapp.com/upload`);

const filePromise = page.waitForEvent(`filechooser`);//since we will not be able to interact with desktop window we are going for event listener
page.locator(`#drag-drop-upload`).click();//you cannot see type="file"
const fileUpload = await filePromise;

await fileUpload.setFiles("Data/TestLeaf Logo.png");
await page.waitForTimeout(6000);

})
