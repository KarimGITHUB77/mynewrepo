import {request, test, expect} from '@playwright/test';

test('example test', async ({ request }) => {
  const response = await request.get('https://playwright.dev/');
  console.log(await response.text());
  await expect(response).toBeOK();
  const response2 = await request.get('https://playwright.dev/docs/intro');
 console.log(await response2.text());
  await expect(response2).toBeOK(); 
});
