import { Given, Then, When, browser, page } from "../support/puppeteerSupport";

Given("I am on the Google search page", async function () {
  if (page) {
    await page.setViewport({ width: 1360, height: 1080 });
    await page.goto("https://www.google.com");
  }
});

When('I search for "debashisbadajena"', async function () {
  if (page) {
    const searchSelector = 'textarea[title="Search"]';
    await page.waitForSelector(searchSelector);
    await page.click(searchSelector, { clickCount: 1 });
    await page.type(searchSelector, "debashis badajena");
    // await page.type(searchSelector, "");
    await page.keyboard.press("Enter");
  }
});

Then("I should see search results", async function () {
  if (page) {
    await page.waitForSelector("h3");
    const searchResults = await page.$$("h3");

    if (searchResults.length <0) {
      throw new Error("No search results found");
    }
  }
});

