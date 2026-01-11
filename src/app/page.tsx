"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Code2, Cpu, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- UI COMPONENTS ---

const Logo = ({ size = "text-xl" }: { size?: string }) => (
    <div
        className={`${size} font-[family-name:var(--font-space-mono)] font-bold tracking-tighter leading-none`}
    >
        <span className="text-[#2299b8]">HACK</span>
        {/* No text shadow needed now - dark blue on white is perfect */}
        <span className="text-[#14395c]">SHARON</span>
    </div>
);

const Nav = () => (
    <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                    <Image
                        src="/brandmark.png"
                        alt="HackSharon Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* 2. The Text Logo */}
                <Logo size="text-xl md:text-2xl" />
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                <Link
                    href="#about"
                    className="hover:text-[#2299b8] transition-colors"
                >
                    Mission
                </Link>
                <Link
                    href="#schedule"
                    className="hover:text-[#2299b8] transition-colors"
                >
                    Timeline
                </Link>
                <Link
                    href="#sponsors"
                    className="hover:text-[#2299b8] transition-colors"
                >
                    Partners
                </Link>
            </div>
            <Link
                href="/judging"
                className="group relative px-6 py-2 rounded-full bg-[#14395c] text-white text-sm font-bold overflow-hidden shadow-lg shadow-blue-900/20"
            >
                <div className="absolute inset-0 bg-[#2299b8] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Join the Waitlist</span>
            </Link>
        </div>
    </nav>
);

const Hero = () => (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Subtle Gradient Blob behind text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-50 to-transparent blur-3xl -z-10 rounded-full opacity-80" />

        <div className="max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2299b8]/30 bg-[#2299b8]/5 text-[#14395c] text-xs font-mono mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-[#2299b8] animate-pulse" />
                REGISTRATION OPENING SOON
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
            >
                <h1 className="font-[family-name:var(--font-space-mono)] text-6xl md:text-9xl font-bold leading-none tracking-tighter text-[#14395c]">
                    <span className="text-[#2299b8]">HACK</span>
                    <br className="md:hidden" />
                    SHARON
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
                An afternoon-long hackathon hosted by students, <br />
                for{" "}
                <span className="text-[#2299b8] font-bold">
                    grade 6&ndash;12 students
                </span>{" "}
                across Massachusetts.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <Link
                    href="/judging"
                    className="h-12 px-8 rounded-lg bg-[#2299b8] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#1a7a94] transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 hover:-translate-y-1"
                >
                    Register Now <ArrowRight size={18} />
                </Link>
                <button className="h-12 px-8 rounded-lg border border-slate-200 hover:border-[#2299b8] text-slate-700 hover:text-[#2299b8] bg-white transition-colors font-medium">
                    Sponsor Us
                </button>
            </motion.div>
        </div>
    </section>
);

const BentoGrid = () => (
    <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-space)] text-3xl md:text-5xl font-bold mb-12 text-center text-[#14395c]">
                Why <span className="text-[#2299b8]">HackSharon</span>?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Large Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:opacity-10 transition-opacity text-[#14395c]">
                        <Cpu size={120} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[#14395c]">
                        High-Performance Environment
                    </h3>
                    <p className="text-slate-600 max-w-md">
                        We provide the infrastructure; you provide the code.
                        Blazing fast Wi-Fi, mentorship from industry pros, and
                        enough caffeine to kill a horse.
                    </p>
                </motion.div>

                {/* Tall Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="md:row-span-2 glass-card p-8 rounded-3xl flex flex-col justify-end bg-gradient-to-b from-blue-50 to-white"
                >
                    <Trophy className="mb-6 text-[#2299b8]" size={40} />
                    <h3 className="text-2xl font-bold mb-2 text-[#14395c]">
                        Tons of Prizes!
                    </h3>
                    <p className="text-slate-600">
                        From MacBooks to cloud credits, win big for your big
                        ideas.
                    </p>
                </motion.div>

                {/* Small Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 rounded-3xl"
                >
                    <Code2 className="mb-4 text-[#2299b8]" size={32} />
                    <h3 className="text-xl font-bold text-[#14395c]">
                        Beginner Friendly
                    </h3>
                    <p className="text-slate-600 text-sm mt-2">
                        Never coded? We have experienced mentors and tutorials
                        to help.
                    </p>
                </motion.div>

                {/* Small Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 rounded-3xl"
                >
                    <MapPin className="mb-4 text-emerald-500" size={32} />
                    <h3 className="text-xl font-bold text-[#14395c]">
                        Sharon, MA
                    </h3>
                    <p className="text-slate-600 text-sm mt-2">
                        Easy access via Commuter Rail.
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
);

export default function Home() {
    return (
        <main className="min-h-screen">
            <Nav />
            <Hero />
            <BentoGrid />

            <section className="py-24 text-center">
                <p className="text-slate-400 text-sm font-mono">
                    More sections (Schedule, FAQ) coming soon...
                </p>
            </section>
        </main>
    );
}
