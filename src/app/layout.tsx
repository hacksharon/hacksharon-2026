import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-space-mono",
});

export const metadata: Metadata = {
    title: "HackSharon 2026",
    description: "Build the future.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
        >
            <body className="font-sans antialiased bg-[#fafafa] text-slate-900">
                {children}
            </body>
        </html>
    );
}
