import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HackSharon Archive",
    description: "A beginner-friendly hackathon open to all Sharon students.",
};

export default function ArchiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
