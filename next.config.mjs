/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow using SVG logos/illustrations through next/image safely.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
