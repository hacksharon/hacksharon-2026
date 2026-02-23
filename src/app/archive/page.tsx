"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => (
    <section className="relative pt-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
            >
                <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter">
                    <span className="text-brand-teal">HACK</span>
                    <span className="text-brand-blue">SHARON</span>
                    <div className="mt-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-600 font-display tracking-tighter">
                        Archive
                    </div>
                </h1>
            </motion.div>
        </div>
    </section>
);

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Archive = () => {
    const years = [2025, 2024];

    return (
        <section id="links" className="my-24 px-6 relative scroll-mt-32">
            <div className="max-w-2xl mx-auto text-center content-center space-y-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-4 gap-10 max-w-4xl mx-auto justify-items-center text-3xl font-display font-semibold text-brand-blue"
                >
                    {years.map((year, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="col-span-1 flex w-fit"
                        >
                            <Link href={`/archive/${year}`} className="group">
                                <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-brand-blue after:transition-all after:duration-300 group-hover:after:w-full">
                                    {year}
                                </span>
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
            <Hero />
            <Archive />

            <section className="text-center w-full mt-auto">
                <p className="text-slate-600 text-sm sm:text-lg py-10 mb-0 border-t border-black/10 font-mono bg-gray-50">
                    made with ❤️ by the HackSharon team <br /> (c) 2026
                    HackSharon
                </p>
            </section>
        </main>
    );
}
