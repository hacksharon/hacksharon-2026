"use client";

import { Trophy, Medal, Award } from "lucide-react";
import Image from "next/image";

const Logo = ({ size = "text-xl" }: { size?: string }) => (
    <div
        className={`${size} font-mono font-bold tracking-tighter leading-none`}
    >
        <span className="text-brand-teal">HACK</span>
        <span className="text-brand-blue">SHARON</span>
        <span className="text-gray-600 text-[32px] ml-3">2025</span>
    </div>
);

const Header = () => (
    <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                    <Image
                        src="/brandmark.png"
                        alt="HackSharon Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <Logo size="text-2xl sm:text-4xl" />
            </div>
        </div>
    </nav>
);

const Body = () => {
    const winners = [
        {
            rank: "1st Place",
            team: "Code",
            members: [
                "Ronak Jain",
                "Ishaan Gandhi Jaiswal",
                "Vrinda Pardeshi",
                "Pranav Pardeshi",
            ],
            color: "text-yellow-500",
            bg: "bg-yellow-500/10 border-yellow-500/20",
        },
        {
            rank: "2nd Place",
            team: "MZNL",
            members: ["Maya Zaretsky", "Nathalie Li"],
            color: "text-slate-400",
            bg: "bg-slate-400/10 border-slate-400/20",
        },
        {
            rank: "3rd Place",
            team: "Is It Recyclable",
            members: ["Arnav Garg", "Aungshul Saha", "Mihir Shetty"],
            color: "text-amber-700",
            bg: "bg-amber-700/10 border-amber-700/20",
        },
        {
            rank: "Honorable Mention",
            team: "The Cybercoders",
            members: [
                "Anika Yarlagadda",
                "Kinzom Jaiswal",
                "Bennet James",
                "Saanvi Malani",
            ],
            color: "text-slate-700",
            bg: "bg-purple-500/10 border-purple-500/20",
        },
        {
            rank: "Honorable Mention",
            team: "RRC",
            members: ["Rishab Kini", "Carlos Aguilar", "Ruhan Sah"],
            color: "text-slate-700",
            bg: "bg-purple-500/10 border-purple-500/20",
        },
    ];

    return (
        <section id="body" className="my-24 px-6 relative scroll-mt-32">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center">
                    <h2 className="font-mono text-3xl sm:text-5xl font-bold mb-4 text-brand-blue tracking-tight">
                        Theme: Climate Change
                    </h2>
                    <p className="text-slate-600 text-2xl font-display">
                        HackSharon 2025 Winning Teams
                    </p>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    {winners.map((winner, index) => (
                        <div
                            key={index}
                            className={`glass-card p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-transform hover:scale-[1.01] ${winner.bg}`}
                        >
                            <div className="flex-1 min-w-0 w-full">
                                <div className="flex items-center gap-2 mb-2">
                                    {index === 0 ? (
                                        <Trophy
                                            className={winner.color}
                                            size={24}
                                        />
                                    ) : index === 1 || index === 2 ? (
                                        <Medal
                                            className={winner.color}
                                            size={24}
                                        />
                                    ) : (
                                        <Award
                                            className={winner.color}
                                            size={24}
                                        />
                                    )}
                                    <h3
                                        className={`font-mono text-xl sm:text-2xl font-bold ${winner.color}`}
                                    >
                                        {winner.rank}
                                    </h3>
                                </div>
                                <div className="font-mono text-4xl sm:text-5xl text-brand-teal font-bold wrap-break-word leading-tight">
                                    {winner.team}
                                </div>
                            </div>

                            <div className="md:text-right w-full md:w-auto md:min-w-50">
                                <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">
                                    Team Members
                                </h4>
                                <ul className="text-lg sm:text-xl text-slate-700 space-y-1">
                                    {winner.members.map((member, mIndex) => (
                                        <li key={mIndex}>{member}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <div className="flex-1 pt-12">
                <Body />
            </div>

            <section className="text-center w-full mt-auto">
                <p className="text-slate-600 text-sm sm:text-lg py-10 mb-0 border-t border-black/10 font-mono bg-gray-50">
                    made with ❤️ by the HackSharon team <br /> (c) 2026
                    HackSharon
                </p>
            </section>
        </main>
    );
}
