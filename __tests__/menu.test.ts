import { MENU } from "@/lib/menu";

const items = MENU.flatMap((c) => c.items.map((item) => ({ category: c.id, ...item })));

it("has the five menu categories in order", () => {
  expect(MENU.map((c) => c.id)).toEqual(["doner", "burger", "pizza", "grill", "snacks"]);
});

it("uses unique category ids (they are page anchors)", () => {
  expect(new Set(MENU.map((c) => c.id)).size).toBe(MENU.length);
});

it("every category has a title, tagline and dishes", () => {
  for (const c of MENU) {
    expect(c.title.trim()).not.toBe("");
    expect(c.tagline.trim()).not.toBe("");
    expect(c.items.length).toBeGreaterThan(0);
  }
});

it.each(items.map((i) => [i.category, i.name, i]))("%s / %s is complete and well-formatted", (_c, _n, item) => {
  expect(item.name.trim()).not.toBe("");
  expect(item.description.trim()).not.toBe("");
  expect(item.price).toMatch(/^\d{1,2},\d{2} €$/);
});

it("no dish is listed twice", () => {
  const names = items.map((i) => i.name);
  expect(new Set(names).size).toBe(names.length);
});

it("food photos are served from /food/", () => {
  for (const i of items.filter((x) => x.image)) {
    expect(i.image).toMatch(/^\/food\/[\w.-]+\.(png|webp|avif|jpe?g)$/);
  }
});

// TODO: commit public/food/seitan-doner.png, then empty this list.
// Until then the card falls back to the drawn döner illustration.
export const KNOWN_MISSING_PHOTOS = ["/food/seitan-doner.png"];

it("every referenced food photo exists in public/", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require("node:fs") as typeof import("node:fs");
  const missing = items
    .filter((i) => i.image && !fs.existsSync(`public${i.image}`))
    .map((i) => i.image);
  expect(missing).toEqual(KNOWN_MISSING_PHOTOS);
});
