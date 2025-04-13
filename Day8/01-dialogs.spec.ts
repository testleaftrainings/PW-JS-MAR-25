import {test } from "@playwright/test";

test(`Test to Handle your alerts`, async ({page}) => {

    await page.goto(`https://leafground.com/alert.xhtml`);

    //Simple dialog
    await page.locator(`text=Show`).first().click();
    await page.waitForTimeout(3000);

    //Confirm dialog
    await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(3000);

    //Prompt dialog
    await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(3000);
})

test.only(`Test to Handle your alerts using page.on event listener`, async ({page}) => {

       //Event listeners

    await page.goto(`https://leafground.com/alert.xhtml`);

    //Event Listener
    page.on('dialog', async(dialog) => {

        const message = dialog.message();
        console.log(`The message says ${message}`);   
        
        const type = dialog.type();
        console.log(`The type pf the alert is ${type}`);

        if(type==='confirm'){
            await dialog.accept();

        }else if(type==='prompt'){
            await dialog.accept("Testleaf");

        }else   
         dialog.dismiss(); 
    })

       //Simple dialog
    await page.locator(`text=Show`).first().click();
    await page.waitForTimeout(3000);

    //Confirm dialog
    await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator("//span[text()='Show']").click();
    await page.waitForTimeout(3000);

    //Prompt dialog
    await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator("button").filter({hasText:"Show"}).click();
    await page.waitForTimeout(3000);
})


test(`Test to Handle your alerts using page.once event listener`, async ({page}) => {

    //Event listeners

 await page.goto(`https://leafground.com/alert.xhtml`);

 //Event Listener
 page.once('dialog', async(dialog) => {

     const message = dialog.message();
     console.log(`The message says ${message}`);   
     
     const type = dialog.type();
     console.log(`The type pf the alert is ${type}`);

     if(type==='confirm'){
         await dialog.accept();

     }else if(type==='prompt'){
         await dialog.accept("Testleaf");

     }else   
      dialog.dismiss(); 
 })

    //Simple dialog
 await page.locator(`text=Show`).first().click();
 await page.waitForTimeout(3000);

 //Confirm dialog
 await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator("//span[text()='Show']").click();
 await page.waitForTimeout(3000);

 //Prompt dialog
 await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator("button").filter({hasText:"Show"}).click();
 await page.waitForTimeout(3000);
})