import { test, expect } from '@playwright/test';

const EXPECTED_MENU_ROUTES = [
  'analytics',
  'logs', 
  'monitoring'
];

test.describe('Menu Navigation Visual Validation', () => {
  test('should display all expected menu items', async ({ page }) => {
    await page.goto('/');
    
    const menuItems = await page.locator('[data-testid="sidebar"] a').allTextContents();
    
    for (const route of EXPECTED_MENU_ROUTES) {
      const menuText = route.charAt(0).toUpperCase() + route.slice(1);
      expect(menuItems).toContain(menuText);
    }
  });

  test('should navigate to monitoring page', async ({ page }) => {
    await page.goto('/');
    
    await page.click('text=Monitoring');
    await expect(page).toHaveURL('/monitoring');
    
    const monitoringTitle = await page.locator('h1').first().textContent();
    expect(monitoringTitle).toContain('Monitoring');
  });
});