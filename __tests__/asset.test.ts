const load = (basePath?: string) => {
  if (basePath === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
  else process.env.NEXT_PUBLIC_BASE_PATH = basePath;
  let mod!: typeof import("@/lib/asset");
  jest.isolateModules(() => {
    mod = require("@/lib/asset");
  });
  return mod;
};

afterEach(() => delete process.env.NEXT_PUBLIC_BASE_PATH);

it("leaves paths untouched without a base path (local dev, Vercel)", () => {
  expect(load().asset("/logo.svg")).toBe("/logo.svg");
});

it("prefixes the GitHub Pages base path", () => {
  expect(load("/Miran-Bistro-Website").asset("/food/doner.webp")).toBe("/Miran-Bistro-Website/food/doner.webp");
});
