import { test, expect, request} from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ request }) => {
  //await page.goto('https://playwright.dev/');
   //await page.getByRole('link', { name: 'Get started' }).click();
  await request.get('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"><path fill="rgba(0,0,0,0.5)" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>');

  // Click the get started link. await page.getByRole('link', { name: 'Get started' }).click();
 

  // Expects page to have a heading with the name of Installation.
 // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

test('add the first laptop result to the cart and remove it', async ({ page }) => {
  await page.goto('https://www.amazon.in/', { waitUntil: 'domcontentloaded' });

  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('button', { name: 'Go' }).click();

  const firstResult = page.locator('[data-component-type="s-search-result"]').first();
  await expect(firstResult).toBeVisible();
  await firstResult.locator('h2 a').click();

  await page.getByRole('button', { name: /Add to cart/i }).click();
  await page.getByRole('link', { name: /items? in cart/i }).click();

  const cartItem = page.locator('[data-name="Active Items"] .sc-list-item').first();
  await expect(cartItem).toBeVisible();
  await cartItem.getByRole('button', { name: /Delete/i }).click();

  await expect(page.getByText(/Your Amazon Cart is empty/i)).toBeVisible();
});
