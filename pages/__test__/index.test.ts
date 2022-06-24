import { test, expect } from "@playwright/test";

test("the user should be able to see all experiences", async ({ page }) => {
  await page.goto("/");
  expect(page.locator(".title")).toHaveText("Hello");
  await page.pause();
});
