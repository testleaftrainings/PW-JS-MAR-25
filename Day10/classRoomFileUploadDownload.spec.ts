import {expect, test} from "@playwright/test";
import path from "path";

test.only(`01 File Upload: Herokuapp`, async({ page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    
    await page.locator("input#file-upload").setInputFiles([path.join(__dirname,"./TestLeaf Logo.png")]);
    await page.locator("#file-submit").click();
    await page.waitForTimeout(5000);
    let page_header = await page.locator("//h3[text()='File Uploaded!']").innerText();
    expect(page_header).toEqual("File Uploaded!");

 })

 test(`02 File Download: Herokuapp`, async({ page}) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    let name =await page.locator("//*[@id='content']/div/a").nth(7).innerText();
    
    const [file_Downloader] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("//*[@id='content']/div/a").nth(8).click()
    ])

    expect(file_Downloader.suggestedFilename()).toBe("file-sample_100kB.doc");
    file_Downloader.saveAs(path.join("downloads/"+file_Downloader.suggestedFilename()));
    await page.waitForTimeout(5000);
    // file_Downloader.delete();
 })