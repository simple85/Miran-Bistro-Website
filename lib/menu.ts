export type FoodArt =
  | "doner"
  | "durum"
  | "donerplate"
  | "burger"
  | "pizza"
  | "fries"
  | "lahmacun"
  | "pide"
  | "currywurst"
  | "falafel"
  | "kofte"
  | "nuggets"
  | "salad"
  | "wings";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  art: FoodArt;
  image?: string;
  /** CSS scale applied to the photo (use for source images with extra padding around the food). */
  imageZoom?: number;
  popular?: boolean;
  veggie?: boolean;
  spicy?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  tagline: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "doner",
    title: "Döner & Dürüm",
    tagline: "Langsam am Drehspieß gegart, frisch auf Bestellung geschnitten.",
    items: [
      {
        name: "Döner im Brot",
        description:
          "Knuspriges Fladenbrot, gefüllt mit frisch geschnittenem Döner, Salat und unseren hausgemachten Saucen.",
        price: "6,50 €",
        art: "doner",
        popular: true,
      },
      {
        name: "Dürüm Döner",
        description:
          "Dünnes Yufka‑Brot, gerollt mit zartem Döner, Salat und einem Klecks Knoblauch‑ & Chilisauce.",
        price: "7,50 €",
        art: "durum",
        popular: true,
      },
      {
        name: "Döner Teller Menü",
        description:
          "Großzügiger Teller Döner mit Reis oder Pommes, frischem Salat und Brot. Als Menü serviert.",
        price: "14,00 €",
        art: "donerplate",
      },
      {
        name: "Dürüm Falafel",
        description:
          "Knusprige Kichererbsen‑Falafel im Wrap mit Hummus, Salat und Kräutersauce. Vegetarisch.",
        price: "7,00 €",
        art: "falafel",
        image: "/food/durum-falafel-solo-2.png",
        veggie: true,
      },
    ],
  },
  {
    id: "burger",
    title: "Burger",
    tagline: "Saftige Rindfleisch‑Patties, getoastete Buns, geschmolzener Genuss.",
    items: [
      {
        name: "Hamburger Menü",
        description:
          "Saftiges gegrilltes Rindfleisch‑Patty, frischer Salat und Sauce im getoasteten Bun. Mit Pommes.",
        price: "11,00 €",
        art: "burger",
        image: "/food/hamburger.webp",
        imageZoom: 1.7,
      },
      {
        name: "Cheeseburger Menü",
        description:
          "Unser Hamburger gekrönt mit geschmolzenem Käse, als Menü mit goldenen Pommes serviert.",
        price: "12,00 €",
        art: "burger",
        image: "/food/cheeseburger.png",
        popular: true,
      },
      {
        name: "Chicken Burger",
        description:
          "Knuspriges Hähnchenfilet, Salat und cremige Sauce in einem weichen, getoasteten Bun.",
        price: "8,50 €",
        art: "burger",
        image: "/food/chickenburger.png",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    tagline: "Aus dem Steinofen, blubbernder Käse, genau wie sie sein soll.",
    items: [
      {
        name: "Pizza Margherita",
        description:
          "Klassische Tomatensauce, reichlich Mozzarella und frisches Basilikum auf dünnem Boden.",
        price: "7,50 €",
        art: "pizza",
        image: "/food/pizza-magherita.png",
        veggie: true,
      },
      {
        name: "Pizza Salami",
        description:
          "Tomate, Mozzarella und eine großzügige Lage würzige Salami, goldgelb gebacken.",
        price: "8,50 €",
        art: "pizza",
        image: "/food/pizza-salami.webp",
        popular: true,
      },
      {
        name: "Pizza Funghi",
        description:
          "Tomate, Mozzarella und frische Champignons – einfach und befriedigend.",
        price: "8,00 €",
        art: "pizza",
        image: "/food/pizza-funghi.png",
        veggie: true,
      },
      {
        name: "Pizza Miran Spezial",
        description:
          "Der Hausfavorit: Dönerfleisch, Paprika, Zwiebeln, Mais und extra Käse.",
        price: "10,50 €",
        art: "pizza",
        image: "/food/pizza-miran-special.avif",
        spicy: true,
      },
    ],
  },
  {
    id: "grill",
    title: "Vom Grill",
    tagline: "Türkische Klassiker mit Holzkohle‑Aroma, frisch zubereitet.",
    items: [
      {
        name: "Lahmacun",
        description:
          "Dünnes türkisches Fladenbrot mit gewürztem Hackfleisch, Kräutern und einem Spritzer Zitrone.",
        price: "5,00 €",
        art: "lahmacun",
        popular: true,
      },
      {
        name: "Pide mit Hackfleisch",
        description:
          "Schiffchenförmiges türkisches Pide, gebacken mit gewürztem Hackfleisch und geschmolzenem Käse.",
        price: "9,00 €",
        art: "pide",
        imageZoom: 0.85,
      },
      {
        name: "Köfte Teller",
        description:
          "Gegrillte türkische Hackbällchen mit Reis oder Pommes, frischem Salat und Brot.",
        price: "12,50 €",
        art: "kofte",
      },
      {
        name: "Currywurst Menü",
        description:
          "Wurst in unserer würzigen Currysauce, als Menü mit knusprigen Pommes serviert.",
        price: "8,00 €",
        art: "currywurst",
        imageZoom: 0.85,
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Beilagen",
    tagline: "Knusprig, golden, unmöglich zu teilen.",
    items: [
      {
        name: "Pommes Frites",
        description:
          "Goldene, knusprige Pommes mit Ketchup und Mayo. Der perfekte Begleiter.",
        price: "3,50 €",
        art: "fries",
        veggie: true,
        popular: true,
      },
      {
        name: "Chicken Nuggets",
        description:
          "Knusprige Hähnchen‑Nuggets mit einem Dip nach Wahl und einer Portion Pommes.",
        price: "6,50 €",
        art: "nuggets",
        imageZoom: 0.85,
      },
      {
        name: "Chicken Wings",
        description:
          "Marinierte, gegrillte Hähnchenflügel mit einer rauchigen, leicht scharfen Glasur.",
        price: "7,00 €",
        art: "wings",
        imageZoom: 0.85,
        spicy: true,
      },
      {
        name: "Falafel Portion",
        description:
          "Sechs knusprige Kichererbsen‑Falafel mit Hummus und frischem Kräuterdip. Vegetarisch.",
        price: "5,50 €",
        art: "falafel",
        veggie: true,
      },
    ],
  },
];
