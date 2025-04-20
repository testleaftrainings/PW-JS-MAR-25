
import { chromium, test } from "@playwright/test";

test(`Test to verify the application behavioue in different locations`,async () => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext({

geolocation:{
    latitude: 32.824633,
    longitude: -117.4374368
    },
permissions:[`geolocation`]
})

const page = await context.newPage()

    await page.goto(`https://www.google.com/maps`);
    await page.click("#sVuEFc");
    await page.waitForTimeout(10000)

})