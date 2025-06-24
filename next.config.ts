import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    devIndicators: false,
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
