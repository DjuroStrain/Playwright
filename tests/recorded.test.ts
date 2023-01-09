import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('durobelacic1@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Alpha0851!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByRole('group', { name: 'Your Personal Details' }).locator('div').filter({ hasText: 'First Name' }).locator('div').click();
  await page.getByPlaceholder('First Name').fill('Djuro');
  await page.getByRole('button', { name: 'Continue' }).click();
  //await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
  await page.locator('#widget-navbar-217834').getByRole('link', { name: 'Logout' }).click();
}); 