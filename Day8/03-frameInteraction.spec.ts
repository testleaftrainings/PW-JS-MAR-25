
import { test } from "@playwright/test";

test(`Test to interact with the frames`,async({page})=>{

    await page.goto(`https://leafground.com/frame.xhtml`)
    //Interact with the iframe using url

  /*   const frameURL = page.frame({url:"https://leafground.com/default.xhtml"});
    frameURL?.locator("#Click").click();
   // frameURL?.click("#Click")
   await page.waitForTimeout(3000); */


   //using index
   const frameIndex = page.frames();
   await frameIndex[4].click("button#Click");
   await page.waitForTimeout(3000);
})

test.only(`Test to interact with the iframes using frameLocator`,async({page})=>{

    await page.goto(`https://leafground.com/frame.xhtml`);

    //Using framelocator
   /*  const frameLoc = page.frameLocator("(//iframe)[1]");
    frameLoc.locator('#Click').click(); */

   
    //Chaining
    //await page.frameLocator("iframe").first().locator(#Click).click()
    
    //Interact with nested frames
/* 
    const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
    const frame_one=card.frameLocator("iframe");
    const frame_two=frame_one.frameLocator("iframe");
    await frame_two.locator("#Click").click();

    await page.waitForTimeout(3000); */


//Interact with name of your frame
    const frameName = await page.frame({ name: 'frame2' }); // or id
await frameName?.locator('#Click').click();

})