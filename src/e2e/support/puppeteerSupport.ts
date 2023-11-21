import { Before, After, Given, Then, When } from "@cucumber/cucumber";
import { Browser, Page, launch } from "puppeteer";

let browser: Browser;
let page: Page;

Before(async () => {
  browser = await launch({
    headless: false,
    args: ["--start-maximized"],
    slowMo: 30,
  });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});

export { Before, After, Given, Then, When, browser, page, launch };
