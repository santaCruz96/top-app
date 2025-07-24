import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    images: {
        domains: [
            "courses-top.ru",
            "cdn-bucket.hb.bizmrg.com",
            "old-images.hb.ru-msk.vkcs.cloud",
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
