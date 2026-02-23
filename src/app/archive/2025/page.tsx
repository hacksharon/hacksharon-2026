"use client";

import { List } from "lucide-react";
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
    return (
        <section id="body" className="my-24 px-6 relative scroll-mt-32">
            <div className="max-w-6xl mx-auto text-center content-center space-y-6">
                <h2 className="font-mono text-3xl sm:text-5xl font-bold mb-12 text-brand-blue tracking-tight">
                    Theme: Climate Change
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                    <div className="col-span-1">
                        <h3 className="font-mono text-2xl sm:text-3xl text-brand-blue font-bold mb-3">
                            1st Place
                        </h3>
                        <div className="font-mono text-5xl sm:text-6xl text-brand-teal font-bold mb-3">
                            Code
                        </div>
                        <div className="text-1xl sm:text-2xl text-slate-700">
                            Ronak Jain <br />
                            Ishaan Gandhi Jaiswal <br />
                            Vrinda Pardeshi <br />
                            Pranav Pardeshi
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-mono text-2xl sm:text-3xl text-brand-blue font-bold mb-3">
                            2nd Place
                        </h3>
                        <div className="font-mono text-5xl sm:text-6xl text-brand-teal font-bold mb-3">
                            MZNL
                        </div>
                        <div className="text-1xl sm:text-2xl text-slate-700">
                            Maya Zaretsky <br />
                            Nathalie Li
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h3 className="font-mono text-2xl sm:text-3xl text-brand-blue font-bold mb-3">
                            3rd Place
                        </h3>
                        <div className="font-mono text-5xl sm:text-6xl text-brand-teal font-bold mb-3">
                            Is It Recyclable
                        </div>
                        <div className="text-1xl sm:text-2xl text-slate-700">
                            Arnav Garg <br />
                            Aungshul Saha <br />
                            Mihir Shetty
                        </div>
                    </div>
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
