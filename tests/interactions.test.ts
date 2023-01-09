import test, { expect } from "@playwright/test";

// test("Interaction with input", async ({ page }) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

//     const txtMessage = page.locator("input#user-message");
//     await txtMessage.scrollIntoViewIfNeeded();
//     console.log(await txtMessage.getAttribute("placeholder"));
//     expect(txtMessage).toHaveAttribute("placeholder", "Please enter your Message");
//     console.log("Before entering data: "+await txtMessage.inputValue());   
//     await txtMessage.type("Hi DJuro");
//     console.log("After entering data: "+await txtMessage.inputValue()); 
// })

// test("Sum", async ({ page }) => {

//     await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
//     const sum1Input = page.locator("#sum1");
//     const sum2Input = page.locator("#sum2");

//     const getValuesBtn = page.locator("//button[normalize-space()='Get values']");

//     let num1 = 121;
//     let num2 = 546;
//     await sum1Input.type(""+num1);
//     await sum2Input.type(""+num2);
//     await getValuesBtn.click();
//     const result = page.locator("//p[@id='addmessage']");
//     console.log(await result.textContent());
//     let expectedResult = num1+num2;
//     expect(result).toHaveText(""+expectedResult);
// })

test("Checkbox", async ({ page }) => {
    
})