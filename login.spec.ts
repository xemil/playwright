import { Browser, chromium , Cookie} from 'playwright';


let browser: Browser;

beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});

describe('should run test', () => {
    it('test 1', async () => {
      const browser = await chromium.launch({
        headless: false
      });

      const context = await browser.newContext();
    
      // Open new page
      const page = await context.newPage();
    
      // Go to https://accept-mymedhelp.medhelp.se/ChooseLogin
      await page.goto('https://accept-mymedhelp.medhelp.se/ChooseLogin');
    
      // Click button:has-text("Acceptera cookies")
      await page.click('button:has-text("Acceptera cookies")');
    
      // Click button:has-text("Other login options")
      await page.click('button:has-text("Other login options")');
      // assert.equal(page.url(), 'https://accept-mymedhelp.medhelp.se/Login/OtherLoginOptions');
    
      // Click button:has-text("Username and password")
      await page.click('button:has-text("Username and password")');
      // assert.equal(page.url(), 'https://accept-mymedhelp.medhelp.se/Login');
    
      // Click [placeholder="Username (social security no. or e-mail)"]
      await page.click('[placeholder="Username (social security no. or e-mail)"]');
    
      // Fill [placeholder="Username (social security no. or e-mail)"]
      await page.fill('[placeholder="Username (social security no. or e-mail)"]', 'gunner');
    
      // Click [placeholder="Password"]
      await page.click('[placeholder="Password"]');
    
      // Fill [placeholder="Password"]
      await page.fill('[placeholder="Password"]', 'tolvan');
    
      // Click button:has-text("Login")
      await page.click('button:has-text("Login")');
    
    
      // Click text=Sjuk-/friskanmälan
      await Promise.all([      
        page.waitForNavigation({ url: 'https://accept-mymedhelp.medhelp.se/' }),
        page.click('text=Sjuk-/friskanmälan')
    ]);
        await page.waitForNavigation({ url: 'https://accept-signedin.medhelp.se/absencereporting/en/absencereport/list/search' }),
    
      // Click [placeholder="Search co-worker"]
      await page.click('[placeholder="Search co-worker"]');
    
      // Fill [placeholder="Search co-worker"]
      await page.fill('[placeholder="Search co-worker"]', 'clicker');
    
      // Click :nth-match(button:has-text("ClickerTester LastNameTester - Medhelp ABPerson-nr: 194807262953Anställnings-nr:"), 2)
      await Promise.all([
        page.waitForNavigation(/*{ url: 'https://accept-signedin.medhelp.se/absencereporting/en/absencereport/list/8f17b794-89f2-4cfa-a93c-d03576222265' }*/),
        page.click(':nth-match(button:has-text("ClickerTester LastNameTester - Medhelp ABPerson-nr: 194807262953Anställnings-nr:"), 2)')
      ]);
    
      // Click text=Own SicknessEditDelete >> button
      await page.click('text=Own SicknessEditDelete >> button');
    
      // Click text=Delete
      await page.click('text=Delete');
    
      // Click text=Yes, remove
      await page.click('text=Yes, remove');
    
      // Click div[role="button"]
      await page.click('div[role="button"]');
    
      // Click button:has-text("ClickerTester LastNameTester")
      await Promise.all([
        page.waitForNavigation(/*{ url: 'https://accept-signedin.medhelp.se/absencereporting/en/absencereport/list/search' }*/),
        page.click('button:has-text("ClickerTester LastNameTester")')
      ]);
      await context.close();
    });
});