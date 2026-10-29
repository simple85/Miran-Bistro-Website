import { expect, test } from "@playwright/test";

// see KNOWN_MISSING_PHOTOS in __tests__/menu.test.ts
const KNOWN_MISSING = ["/food/seitan-doner.png"];

const pages = [
  { path: "/", heading: /Miran|Döner|Grill/i },
  { path: "/menu/", heading: /.+/ },
  { path: "/about/", heading: /.+/ },
  { path: "/contact/", heading: /.+/ },
];

for (const { path, heading } of pages) {
  test(`${path} renders without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() !== "error") return;
      const url = m.location().url;
      if (KNOWN_MISSING.some((p) => url.endsWith(p))) return;
      errors.push(`${m.text()} ${url}`);
    });

    const res = await page.goto(path);

    expect(res?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    await expect(page).toHaveTitle(/Miran Bistro/);
    expect(errors.filter((e) => !/maps\.google|google\.com/.test(e))).toEqual([]);
  });
}

test("menu page lists every category", async ({ page }) => {
  await page.goto("/menu/");

  for (const id of ["doner", "burger", "pizza", "grill", "snacks"]) {
    await expect(page.locator(`section#${id}`)).toBeAttached();
  }
  await expect(page.getByRole("heading", { name: "Seitan Döner" })).toBeAttached();
});

test("contact page has a callable phone number and the address", async ({ page }) => {
  await page.goto("/contact/");

  await expect(page.locator('a[href="tel:+491729342712"]').first()).toBeVisible();
  await expect(page.getByText("Langhansstraße 61").first()).toBeVisible();
});

test("order buttons open the online ordering site", async ({ page }) => {
  await page.goto("/");

  const order = page.locator('a[href="https://miranbistro.jetzt-bestellen.com/"]').first();
  await expect(order).toHaveAttribute("target", "_blank");
});

test("navigation between pages", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) await page.getByRole("button", { name: "Toggle menu" }).click();

  await page.getByRole("link", { name: "Kontakt" }).filter({ visible: true }).first().click();

  await expect(page).toHaveURL(/\/contact\/$/);
});

test("all images load", async ({ page }) => {
  await page.goto("/menu/");
  await page.waitForLoadState("networkidle");

  const broken = await page.locator("img").evaluateAll((imgs) =>
    (imgs as HTMLImageElement[]).filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src),
  );
  expect(broken).toEqual([]);
});
