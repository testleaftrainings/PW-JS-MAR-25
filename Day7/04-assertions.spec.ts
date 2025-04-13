

import{expect, test} from "@playwright/test"

test(`Test to assert the text box`,async ({page}) => {
    
    await page.goto(`https://leafground.com/input.xhtml`);
    const typeName = page.getByPlaceholder("Babu Manickam");
    //to check the text box is enabled 
    await expect(typeName).toBeEnabled({timeout:10000});
    //Enter the value
    await typeName.fill("Ravi");
    await page.waitForTimeout(3000);

    const disabledTexctBox = page.getByPlaceholder("Disabled");
    await expect(disabledTexctBox).toBeDisabled();
    //Enter the value
  /*   await disabledTexctBox.fill("Ravi");
    await page.waitForTimeout(3000); */

    //
})

test(`Assertion using hard assert`, async ({page}) => {

    await page.goto(`https://leafground.com/input.xhtml`);

    const appendTextBox = page.locator(`//input[@value='Chennai']`)
    await expect(appendTextBox).toBeDisabled();
    await appendTextBox.fill("India");
    await page.waitForTimeout(3000)
})

test.only(`Assertion using soft assert`, async ({page}) => {

    await page.goto(`https://leafground.com/input.xhtml`);

    const appendTextBox = page.locator(`//input[@value='Chennai']`)
    await expect.soft(appendTextBox).toBeDisabled();
    await appendTextBox.fill("India");
    await page.waitForTimeout(3000)
})
