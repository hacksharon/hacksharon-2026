import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/judging",
                destination: "https://hacksharon-judging.vercel.app/judging",
            },
            {
                source: "/judging/:path*",
                destination:
                    "https://hacksharon-judging.vercel.app/judging/:path*",
            },
            {
                source: "/register",
                destination: "https://hacksharon-register.vercel.app/register",
            },
            {
                source: "/register/:path*",
                destination:
                    "https://hacksharon-register.vercel.app/register/:path*",
            },
        ];
    },
    /* config options here */
    reactCompiler: true,
};

export default nextConfig;
