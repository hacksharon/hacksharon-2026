import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HackSharon Go",
    description: "A beginner-friendly hackathon open to all Sharon students.",
};

export default function GoLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
