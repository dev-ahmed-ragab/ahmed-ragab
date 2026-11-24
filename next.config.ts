import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ["@vercel/analytics", "@vercel/speed-insights"],
  transpilePackages: [
    "framer-motion",
    "motion-dom",
    "motion-utils",
    "lottie-react",
    "lottie-web",
  ],
};

export default withNextIntl(nextConfig);
