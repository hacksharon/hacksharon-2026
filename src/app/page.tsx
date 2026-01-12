"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Users, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// --- UI COMPONENTS ---

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
        <div className="max-w-7xl mx-auto px-6 h-16 sm:h-24 flex items-center justify-between">
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
                <Logo size="text-2xl sm:text-4xl md:text-4xl" />
            </div>

            <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
                <Link
                    href="#about"
                    className="hover:text-brand-teal transition-colors"
                >
                    About
                </Link>
                <Link
                    href="#schedule"
                    className="hover:text-brand-teal transition-colors"
                >
                    Schedule
                </Link>
                <Link
                    href="#faq"
                    className="hover:text-brand-teal transition-colors"
                >
                    FAQ
                </Link>
                <Link
                    href="#sponsors"
                    className="hover:text-brand-teal transition-colors"
                >
                    Partners
                </Link>
                <Link
                    href="#resources"
                    className="hover:text-brand-teal transition-colors"
                >
                    Resources
                </Link>
            </div>
            <Link
                href="/register"
                className="group relative px-6 py-2 rounded-full bg-brand-blue text-white text-sm font-bold overflow-hidden shadow-lg shadow-blue-900/20"
            >
                <div className="absolute inset-0 text-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Register</span>
            </Link>
        </div>
    </nav>
);

const Hero = () => (
    <section className="relative pt-58 pb-20 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/30 bg-brand-teal/5 text-brand-blue text-xs font-mono mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                REGISTRATION OPENING SOON
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
            >
                <h1 className="font-mono text-5xl sm:text-8xl lg:text-9xl font-bold leading-none tracking-tighter">
                    <span className="text-brand-teal">HACK</span>
                    <span className="text-brand-blue">SHARON</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-md md:text-xl text-slate-600 max-w-lg mx-auto mb-10 leading-relaxed"
            >
                An afternoon-long hackathon hosted by students, for{" "}
                <span className="text-brand-teal font-bold">
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
                    href="/register"
                    className="h-12 px-8 rounded-lg bg-brand-teal text-white font-bold flex items-center justify-center gap-2 hover:bg-[#1a7a94] transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 hover:-translate-y-1"
                >
                    Register Now <ArrowRight size={18} />
                </Link>
                <Link
                    href="/sponsors"
                    className="h-12 px-8 rounded-lg border border-slate-200 flex items-center justify-center gap-2 hover:border-brand-teal text-slate-700 hover:text-brand-teal bg-white transition-colors font-medium"
                >
                    Sponsor Us
                </Link>
            </motion.div>
        </div>
    </section>
);

const BentoGrid = () => (
    <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-mono text-3xl sm:text-5xl font-bold mb-12 text-center text-brand-blue">
                Why <span className="text-brand-teal">HackSharon</span>?
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-md mx-auto xl:max-w-none">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card col-span-1 p-8 rounded-3xl"
                >
                    <Code2 className="mb-4 text-emerald-500" size={32} />
                    <h3 className="text-xl font-bold text-brand-blue">
                        Learn!
                    </h3>
                    <p className="text-slate-600 text-md mt-2">
                        We have experienced mentors and tutorials to help
                        everyone, from first-time coders to experienced devs.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card col-span-1 p-8 rounded-3xl"
                >
                    <Users className="mb-4 text-emerald-500" size={32} />
                    <h3 className="text-xl font-bold text-brand-blue">
                        Build!
                    </h3>
                    <p className="text-slate-600 text-md mt-2">
                        Collaborate and problem-solve with your peers to design
                        innovative solutions for real-world issues.
                    </p>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card col-span-1 p-8 rounded-3xl"
                >
                    <Trophy className="mb-4 text-emerald-500" size={32} />
                    <h3 className="text-xl font-bold text-brand-blue">Win!</h3>
                    <p className="text-slate-600 text-md mt-2">
                        The best projects will earn trophies and other exciting
                        prizes from our sponsors and organizers, from merch to
                        tech!
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
