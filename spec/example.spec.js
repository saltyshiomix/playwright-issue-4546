const { it, expect } = require('@playwright/test');

it('should be dismissed dialogs', async ({ page }) => {
  page.on('dialog', dialog => {
    dialog.dismiss().catch(() => {});
  });

  await page.goto('http://localhost:3000');

  expect(await page.innerText('p')).toBe('Hello World');
})
