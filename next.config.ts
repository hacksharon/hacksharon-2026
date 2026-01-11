import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/judging",
                destination: "https://hacksharon-judging.vercel.app/judging*",
            },
            {
                source: "/judging/:path*",
                destination:
                    "https://hacksharon-judging.vercel.app/judging/:path*",
            },
        ];
    },
    /* config options here */
    reactCompiler: true,
};

export default nextConfig;
