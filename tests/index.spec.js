import { test, expect } from '@playwright/test';

test('page title should be shown', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(await page.locator(".page-title")).toContainText("Welcome to")
});
