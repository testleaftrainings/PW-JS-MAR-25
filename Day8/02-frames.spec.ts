

import { test } from "@playwright/test";

test(`Handling frames`,async({page})=>{

    await page.goto(`https://www.oneindia.com/`)
//to get the frames
 const allFrames = page.frames();
// console.log(allFrames);

 //To get the count of frames

 const frameCount = allFrames.length;
 console.log(`The total number of frames is ${frameCount}`);

 for(let frametitle of allFrames){
    const title = await  frametitle.title();
    console.log(`The title of the frames are ${title}`);   

 }
 await page.waitForTimeout(3000);


})