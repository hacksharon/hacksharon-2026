"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ size = "text-xl" }: { size?: string }) => (
    <div
        className={`${size} font-mono font-bold tracking-tighter leading-none`}
    >
        <span className="text-brand-teal">HACK</span>
        <span className="text-brand-blue">SHARON</span>
    </div>
);

const Nav = () => (
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

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Links = () => {
    const links = [
        { href: "", name: "Opening Ceremony" },
        { href: "", name: "Example Projects" },
        { href: "", name: "Done Early?" },
        { href: "", name: "Submission Guidelines" },
    ];

    return (
        <section id="links" className="my-24 px-6 relative scroll-mt-32">
            <div className="max-w-2xl mx-auto text-center content-center space-y-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center gap-4"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-mono text-3xl sm:text-5xl font-bold mb-8 text-brand-blue"
                    >
                        Quick Links
                    </motion.h2>

                    {links.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="w-full"
                        >
                            <Link
                                href={item.href}
                                className="block w-full max-w-xl mx-auto glass-card p-6 overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 cursor-pointer font-bold text-xl text-brand-blue hover:text-brand-teal transition-colors"
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Nav />

            <div className="flex-1 pt-12">
                <Links />
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
