import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HackSharon 2024",
    description: "A beginner-friendly hackathon open to all Sharon students.",
};

export default function Archive2025Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
