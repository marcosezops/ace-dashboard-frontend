import { test, expect, BrowserContext, Page } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test user credentials
const testUser = {
  email: 'admin@fake.email',
  password: 'abc123'
};

// API URL - separate from frontend URL for environments where backend is on different domain
const apiURL = process.env.API_URL || process.env.BASE_URL || 'http://localhost:3000';

// Parallelism config - how many pages to open simultaneously
const PARALLEL_PAGES = 4;

// Helper function to take screenshot with error handling
async function takeScreenshot(page: Page, testName: string) {
  try {
    const screenshotPath = path.join(__dirname, 'screenshots', `${testName}-${Date.now()}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved: ${screenshotPath}`);
    return screenshotPath;
  } catch (error) {
    console.error(`Failed to take screenshot for ${testName}:`, error);
    return null;
  }
}

// Helper function to login
async function login(page: Page) {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Fill login form
  await page.fill('input[type="email"]', testUser.email);
  await page.fill('input[type="password"]', testUser.password);
  
  // Click login button
  await page.click('button[type="submit"]');
  
  // Wait for login to complete
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
}

test.describe('Demo Page Regression Tests', () => {
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
  });

  test.afterAll(async () => {
    await context.close();
  });

  test('Demo page loads correctly', async () => {
    await login(page);
    
    // Navigate to demo page
    await page.goto('/demo');
    await page.waitForLoadState('networkidle');
    
    // Take screenshot
    const screenshotPath = await takeScreenshot(page, 'demo-page-load');
    
    // Verify page title or main heading
    await expect(page.locator('h1, h2, [data-testid="demo-title"], .demo-title')).toBeVisible();
    
    // Verify demo page specific elements
    await expect(page.locator('body')).toContainText('Demo');
    
    console.log(`Demo page loaded successfully. Screenshot: ${screenshotPath}`);
  });

  test('Demo page navigation from menu', async () => {
    await login(page);
    
    // Click on Demo Menu in sidebar
    await page.click('text=Demo Menu');
    await page.waitForLoadState('networkidle');
    
    // Take screenshot
    const screenshotPath = await takeScreenshot(page, 'demo-page-menu-navigation');
    
    // Verify we're on the demo page
    await expect(page).toHaveURL(/.*\/demo/);
    await expect(page.locator('body')).toContainText('Demo');
    
    console.log(`Demo page navigation successful. Screenshot: ${screenshotPath}`);
  });

  test('Demo page responsive design', async () => {
    await login(page);
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/demo');
    await page.waitForLoadState('networkidle');
    
    const mobileScreenshot = await takeScreenshot(page, 'demo-page-mobile');
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    const desktopScreenshot = await takeScreenshot(page, 'demo-page-desktop');
    
    // Verify page is responsive (basic check)
    await expect(page.locator('body')).toBeVisible();
    
    console.log(`Demo page responsive test completed. Mobile: ${mobileScreenshot}, Desktop: ${desktopScreenshot}`);
  });

  test('Demo page accessibility', async () => {
    await login(page);
    
    await page.goto('/demo');
    await page.waitForLoadState('networkidle');
    
    // Check for proper heading structure
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);
    
    // Check for alt text on images
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
    
    // Take accessibility screenshot
    const screenshotPath = await takeScreenshot(page, 'demo-page-accessibility');
    
    console.log(`Demo page accessibility check completed. Screenshot: ${screenshotPath}`);
  });
});