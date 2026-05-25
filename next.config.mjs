// Base path is injected by the GitHub Pages workflow (e.g. "/miran-bistro-website").
// Left empty for local dev and root-domain hosts like Vercel.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out so it can be served by GitHub Pages.
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    // Static export can't use the image optimizer.
    unoptimized: true,
    // Allow using SVG logos/illustrations through next/image safely.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
