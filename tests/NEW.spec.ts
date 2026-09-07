import {request, test, expect} from '@playwright/test';

test.only('example test', async ({ request }) => {
  const response = await request.get('https://playwright.dev/');
  console.log(await response.text());
  await expect.soft(response).toBeOK();
  const response2 = await request.get('https://playwright.dev/docs/intro');
 console.log(await response2.text());
  await expect.soft(response2).toBeOK(); 
  await page.waitfortimeout(2000);
});
