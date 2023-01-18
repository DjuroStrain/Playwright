import { expect, test } from "@playwright/test";

test("handling alerts", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    page.on("dialog", async (alert) => {
        //const text = alert.message(); //dohvati tekst iz pop up dialoga
        const text = alert.defaultValue(); //dohvati vrijednost iz inputa
        console.log(text);
        await alert.accept("djuro");
        //await alert.dismiss();
    })
    
    await page.locator("button:has-text('Click me')").nth(2).click();   //ako ima vise elemenata sa vise naziva koristimo nth(index)
    //expect(page.locator("id=confirm-demo")).toContainText("Cancel!");
    expect(page.locator("id=prompt-demo")).toContainText("djuro");
})


test("Bootstrap modal", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("button:has-text('Launch Modal')").nth(0).click();
    await page.locator("button:has-text('Save Changes')").nth(0).click();
})