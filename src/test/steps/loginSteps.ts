import {Given,When,Then} from "@cucumber/cucumber";
import {chromium, Browser, Page} from '@playwright/test';

let browser: Browser;
let page: Page; 

Given('the user is on the warehouse login page', async function () {
  browser = await chromium.launch({headless: false});
  page = await browser.newPage();

  await this.page.goto("https://www.thewarehouse.co.nz/");
  await this.page.click('//span[@data-test-id="login-show"]');
  await this.page.waitForSelector('#login-form-email', { timeout: 10000 });

});

  When('the user enters a valid {string} and {string}', async function (username, password) {
   
    await page.fill('#login-form-email',username);
    await page.fill('#login-form-password',password);

  });

  When('the user clicks on the login button', async function () {
   await page.click('//button[text()="Sign In"]'); 
  });

  Then('the user is logged in successfully', async function () {
    await page.waitForURL('**/account?registration=false'); 
    const currentUrl = page.url();
    if (!currentUrl.includes('account')) {
      throw new Error('Login failed');
    } 
    await browser.close();
  });

