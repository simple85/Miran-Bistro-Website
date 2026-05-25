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
    tagline: "Slow-roasted on the vertical grill, carved fresh to order.",
    items: [
      {
        name: "Döner im Brot",
        description:
          "Crispy fladenbrot loaded with carved döner, fresh salad and our house sauces.",
        price: "6,50 €",
        art: "doner",
        popular: true,
      },
      {
        name: "Dürüm Döner",
        description:
          "Thin lavash wrap rolled with tender döner, salad and a swipe of garlic & chilli sauce.",
        price: "7,50 €",
        art: "durum",
        popular: true,
      },
      {
        name: "Döner Teller Menü",
        description:
          "Generous plate of döner with rice or fries, fresh salad and bread. Comes as a menu.",
        price: "14,00 €",
        art: "donerplate",
      },
      {
        name: "Dürüm Falafel",
        description:
          "Crispy chickpea falafel wrapped with hummus, salad and herb sauce. Fully vegetarian.",
        price: "7,00 €",
        art: "falafel",
        veggie: true,
      },
    ],
  },
  {
    id: "burger",
    title: "Burger",
    tagline: "Smashed beef patties, toasted buns, melted goodness.",
    items: [
      {
        name: "Hamburger Menü",
        description:
          "Juicy grilled beef patty, fresh salad and sauce in a toasted bun. Served with fries.",
        price: "11,00 €",
        art: "burger",
      },
      {
        name: "Cheeseburger Menü",
        description:
          "Our hamburger crowned with melted cheese, served as a menu with golden fries.",
        price: "12,00 €",
        art: "burger",
        popular: true,
      },
      {
        name: "Chicken Burger",
        description:
          "Crispy chicken fillet, salad and creamy sauce in a soft toasted bun.",
        price: "8,50 €",
        art: "burger",
      },
      {
        name: "Double Beef Burger",
        description:
          "Two stacked beef patties, double cheese, onions and house sauce for the hungry.",
        price: "10,50 €",
        art: "burger",
        spicy: true,
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    tagline: "Stone-baked, bubbling cheese, made the way it should be.",
    items: [
      {
        name: "Pizza Margherita",
        description:
          "Classic tomato sauce, plenty of mozzarella and fresh basil on a thin crust.",
        price: "7,50 €",
        art: "pizza",
        veggie: true,
      },
      {
        name: "Pizza Salami",
        description:
          "Tomato, mozzarella and a generous layer of spicy salami, baked until golden.",
        price: "8,50 €",
        art: "pizza",
        popular: true,
      },
      {
        name: "Pizza Funghi",
        description:
          "Tomato, mozzarella and fresh mushrooms — simple and satisfying.",
        price: "8,00 €",
        art: "pizza",
        veggie: true,
      },
      {
        name: "Pizza Miran Spezial",
        description:
          "The house favourite: döner meat, peppers, onions, corn and extra cheese.",
        price: "10,50 €",
        art: "pizza",
        spicy: true,
      },
    ],
  },
  {
    id: "grill",
    title: "Vom Grill",
    tagline: "Charcoal-kissed Turkish classics, fired to order.",
    items: [
      {
        name: "Lahmacun",
        description:
          "Thin Turkish flatbread topped with seasoned minced meat, herbs and a squeeze of lemon.",
        price: "5,00 €",
        art: "lahmacun",
        popular: true,
      },
      {
        name: "Pide Hackfleisch",
        description:
          "Boat-shaped Turkish pide baked with spiced minced meat and melted cheese.",
        price: "9,00 €",
        art: "pide",
      },
      {
        name: "Köfte Teller",
        description:
          "Grilled Turkish meatballs with rice or fries, fresh salad and bread.",
        price: "12,50 €",
        art: "kofte",
      },
      {
        name: "Currywurst Menü",
        description:
          "Sliced sausage in our spiced curry sauce, served with crispy fries as a menu.",
        price: "8,00 €",
        art: "currywurst",
      },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Beilagen",
    tagline: "Crispy, golden, impossible to share.",
    items: [
      {
        name: "Pommes Frites",
        description:
          "Golden, crispy fries served with ketchup and mayo. The perfect sidekick.",
        price: "3,50 €",
        art: "fries",
        veggie: true,
        popular: true,
      },
      {
        name: "Chicken Nuggets",
        description:
          "Crunchy chicken nuggets with a dip of your choice and a side of fries.",
        price: "6,50 €",
        art: "nuggets",
      },
      {
        name: "Chicken Wings",
        description:
          "Marinated, grilled chicken wings with a smoky, slightly spicy glaze.",
        price: "7,00 €",
        art: "wings",
        spicy: true,
      },
      {
        name: "Falafel Portion",
        description:
          "Six crispy chickpea falafel with hummus and fresh herb dip. Vegetarian.",
        price: "5,50 €",
        art: "falafel",
        veggie: true,
      },
    ],
  },
  {
    id: "salads",
    title: "Salate",
    tagline: "Crisp, fresh and made the same morning.",
    items: [
      {
        name: "Bauernsalat",
        description:
          "Tomato, cucumber, peppers, onions and olives with a zesty house dressing.",
        price: "6,00 €",
        art: "salad",
        veggie: true,
      },
      {
        name: "Hähnchensalat",
        description:
          "Fresh mixed salad topped with warm grilled chicken strips and dressing.",
        price: "8,50 €",
        art: "salad",
        popular: true,
      },
    ],
  },
];
