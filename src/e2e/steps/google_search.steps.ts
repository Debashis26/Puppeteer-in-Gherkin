import { Given, Then,When,browser,page } from "../support/puppeteerSupport";

Given('I am on the Google search page', async function () {
  await page.goto('https://www.google.com');
});

When('I search for google.com', async function () {
  if (page) {
    await page.type('input[name="q"]', 'google.com');
    await page.keyboard.press('Enter');
  }
});

Then('I should see search results', async function () {
  if (page) {
    await page.waitForSelector('#search');
  }
  
});
