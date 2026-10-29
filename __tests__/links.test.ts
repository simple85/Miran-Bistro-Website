import { CONTACT, LINKS } from "@/lib/links";

it("tel: link matches the displayed phone number", () => {
  expect(CONTACT.phoneHref).toBe(`tel:${CONTACT.phone.replace(/\s/g, "")}`);
});

it("external links use https", () => {
  for (const url of [...Object.values(LINKS), CONTACT.mapEmbed]) {
    expect(url).toMatch(/^https:\/\//);
  }
});

it("map embed points at the restaurant address", () => {
  expect(decodeURIComponent(CONTACT.mapEmbed)).toContain(`${CONTACT.street}, ${CONTACT.city}`);
});
