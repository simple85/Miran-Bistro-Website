import { render, screen } from "@testing-library/react";
import MenuCard from "@/components/MenuCard";
import type { MenuItem } from "@/lib/menu";

const item = (overrides: Partial<MenuItem> = {}): MenuItem => ({
  name: "Döner im Brot",
  description: "Frisch vom Spieß mit Salat und Soße",
  price: "6,50 €",
  art: "doner",
  ...overrides,
});

it("shows name and description", () => {
  render(<MenuCard item={item()} />);

  expect(screen.getByRole("heading", { name: "Döner im Brot" })).toBeInTheDocument();
  expect(screen.getByText("Frisch vom Spieß mit Salat und Soße")).toBeInTheDocument();
});

it("renders no badges for a plain dish", () => {
  render(<MenuCard item={item()} />);

  for (const tag of ["Beliebt", "Vegan", "Vegetarisch", "Scharf"]) {
    expect(screen.queryByText(tag)).not.toBeInTheDocument();
  }
});

it("shows popular, spicy and vegetarian badges", () => {
  render(<MenuCard item={item({ popular: true, spicy: true, veggie: true })} />);

  expect(screen.getByText("Beliebt")).toBeInTheDocument();
  expect(screen.getByText("Scharf")).toBeInTheDocument();
  expect(screen.getByText("Vegetarisch")).toBeInTheDocument();
});

it("shows only Vegan when a dish is both vegan and vegetarian", () => {
  render(<MenuCard item={item({ art: "falafel", vegan: true, veggie: true })} />);

  expect(screen.getByText("Vegan")).toBeInTheDocument();
  expect(screen.queryByText("Vegetarisch")).not.toBeInTheDocument();
});
