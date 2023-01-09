import test, { chromium } from "@playwright/test";

test("Login test demo", async() => {

    const browser = await chromium.launch({
        headless:false,
        
    });  //pokretanje preglednika
    const context = await browser.newContext();   //daje novi context preglednika
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
    await page.click("'Login'");    //await page.click("text=Login");

    await page.fill("//input[@id='input-email']", "durobelacic1@gmail.com");
    await page.fill("input[name='password']", "Alpha0851!");
    await page.click("input[value='Login']");

    await page.waitForTimeout(5000);

    const newContext = await browser.newContext();  //novi prozor preglednika bez informacija o prijašnoj prijavi

    const newPage = await newContext.newPage();
    newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

    await page.waitForTimeout(3000);

})