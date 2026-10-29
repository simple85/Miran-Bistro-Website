import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/components/Navbar";
import { LINKS } from "@/lib/links";

let pathname = "/";
jest.mock("next/navigation", () => ({ usePathname: () => pathname }));

beforeEach(() => {
  pathname = "/";
});

it("links to all pages", () => {
  render(<Navbar />);

  for (const [label, href] of [
    ["Start", "/"],
    ["Spezialitäten", "/menu"],
    ["Über uns", "/about"],
    ["Kontakt", "/contact"],
  ]) {
    expect(screen.getAllByRole("link", { name: label })[0]).toHaveAttribute("href", href);
  }
});

it("order button opens the ordering site in a new tab", () => {
  render(<Navbar />);

  const order = screen.getAllByRole("link", { name: "Jetzt Bestellen" })[0];
  expect(order).toHaveAttribute("href", LINKS.order);
  expect(order).toHaveAttribute("target", "_blank");
  expect(order).toHaveAttribute("rel", expect.stringContaining("noopener"));
});

it("highlights the current page", () => {
  pathname = "/menu";
  render(<Navbar />);

  const desktop = screen.getAllByRole("list")[0];
  expect(within(desktop).getByRole("link", { name: "Spezialitäten" })).toHaveClass("text-ember-400");
  expect(within(desktop).getByRole("link", { name: "Kontakt" })).not.toHaveClass("text-ember-400");
});

it("toggles the mobile menu", async () => {
  render(<Navbar />);
  const toggle = screen.getByRole("button", { name: "Toggle menu" });

  expect(toggle).toHaveAttribute("aria-expanded", "false");
  await userEvent.setup().click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  await userEvent.setup().click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});
