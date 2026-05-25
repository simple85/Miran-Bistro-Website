// Prefix for static assets referenced via plain <img>/<link>, which Next.js
// does NOT rewrite with basePath. next/link and next/image handle basePath
// automatically, so only use this for raw asset URLs.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
