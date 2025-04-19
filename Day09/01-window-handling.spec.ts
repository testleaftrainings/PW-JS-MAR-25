
import { test } from "@playwright/test";

test(`Event Launch different context with tabs`,async ({browser}) => {

  const context = await browser.newContext();
  const page = await context.newPage()
  await page.goto("http://amazon.in");
  const page1=await context.newPage();
  page1.goto("http://flipkart.com");


  const context2= await browser.newContext();
  const page3 = await context2.newPage();
  await page3.goto("http://snapdeal.com");
  
})

test(`Handling tabs sequential way`, async ({context,page}) => {
  
  await page.goto(`https://www.amazon.in/`);

  const searchBox= page.locator(`//input[@id="twotabsearchtextbox"]`);
  await searchBox.fill("Phones");
  await searchBox.press('Enter');

  const newPage =context.waitForEvent('page');

  await page.locator(`(//span[contains(text(),'Apple iPhone')])[1]`).click();

  const childPage = await newPage;
  await page.waitForLoadState('load');
  console.log(await childPage.title());
    
  console.log(await page.title());  

  const prices = await childPage.locator(".a-price-whole").allInnerTexts();
  console.log(prices);

  await page.bringToFront();
  await page.locator(`//a[text()="Today's Deals"]`).click();
  await page.close();
  
})

test.only(`Handling multiple windows using concurrent way`,async ({context,page}) => {
  
  await page.goto(`https://leafground.com/window.xhtml`);

/*   //concurrent pages:
const [firstPage, secondPage] = await Promise.all([
context.waitForEvent('page'),
context.waitForEvent('page'),
page.getByText(`Open Multiple`,{exact:true}).click()
])
   */

 const [multiplePage] =await Promise.all([
  context.waitForEvent('page'), page.getByText(`Open Multiple`,{exact:true}).click()

  ]);
const allPages = multiplePage.context().pages();
console.log(allPages.length);
await allPages[0].waitForLoadState();
const title = await allPages[0].title();
console.log(title);


for(let page of allPages){
console.log(page.url());
console.log(await page.title());
}

})