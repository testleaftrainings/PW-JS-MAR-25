

import { expect, test } from "@playwright/test";

test(`Test to assert the webelement and then wait`, async ({page}) => {

    await page.goto(`https://leafground.com/waits.xhtml`);

    const buttonToClick = page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button").filter({hasText:"Click"});
    await buttonToClick.click();

    await expect(page.locator(".card").filter({hasText:"Wait for Visibility"})
    .getByRole("button").filter({hasText:"I am here"})).toBeVisible({timeout:10000})

    
  
})