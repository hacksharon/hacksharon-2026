"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Users, Trophy, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
                <Logo size="text-2xl md:text-4xl" />
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
                href="https://forms.gle/N5n6Pxi755HQ8DzRA"
                className="py-2 px-6 md:py-2.5 md:px-7 md:text-md rounded-full bg-brand-teal text-white font-semibold flex items-center justify-center gap-2 hover:bg-brand-teal-hover transition-all shadow-md shadow-teal-500/30 hover:scale-105 active:scale-95"
                target="_blank"
            >
                Register
            </Link>
        </div>
    </nav>
);

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Target: March 24, 2026 at 12:00 PM
        const targetDate = new Date("2026-03-24T12:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
        >
            {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-18 h-9 sm:w-18 sm:h-9 md:w-24 md:h-12 rounded-2xl">
                        <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue">
                            {String(item.value).padStart(2, "0")}
                        </span>
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-teal mt-2 uppercase font-mono tracking-widest">
                        {item.label}
                    </span>
                </div>
            ))}
        </motion.div>
    );
};

const Hero = () => (
    <section className="relative pt-58 pb-20 md:pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/30 bg-brand-teal/5 text-brand-blue text-xs font-mono mb-8"
            >
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                REGISTRATION IS OPEN!
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6"
            >
                <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter">
                    <span className="text-brand-teal">HACK</span>
                    <span className="text-brand-blue">SHARON</span>
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl text-brand-blue/80 max-w-lg mx-auto mb-2 leading-relaxed font-mono font-bold"
            >
                MARCH 24, 2026
            </motion.p>

            <Countdown />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex m-7 flex-col sm:flex-row gap-4 justify-center"
            >
                <Link
                    href="https://forms.gle/N5n6Pxi755HQ8DzRA"
                    className="h-12 px-8 rounded-lg bg-brand-teal text-white font-bold flex items-center justify-center gap-2 hover:bg-brand-teal-hover transition-all shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 hover:-translate-y-1"
                    target="_blank"
                >
                    Register Now <ArrowRight size={18} />
                </Link>
                <Link
                    href="/sponsors"
                    className="h-12 px-8 rounded-lg border border-slate-200 flex items-center justify-center gap-2 hover:border-brand-teal text-slate-700 hover:text-brand-teal bg-white transition-colors font-medium"
                    target="_blank"
                >
                    Sponsor Us
                </Link>
            </motion.div>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="my-24 px-6 relative scroll-mt-32">
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
                        prizes from our sponsors and organizers!
                    </p>
                </motion.div>
            </div>
        </div>
    </section>
);

const Schedule = () => (
    <section id="schedule" className="my-24 px-6 relative scroll-mt-32">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-mono text-3xl sm:text-5xl font-bold mb-12 text-brand-blue">
                Schedule
            </h2>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-3xl items-center justify-center mx-auto max-w-xl"
            >
                <table className="mx-auto">
                    <thead>
                        <tr className="text-center border-b border-slate-500/50 text-lg font-mono text-brand-blue">
                            <th className="py-2 px-8">Time</th>
                            <th className="py-2 px-8">Activity</th>
                        </tr>
                    </thead>
                    <tbody className="font-medium text-slate-600">
                        <tr>
                            <td className="py-3 px-8 pt-5">11:45 - 12:05 PM</td>
                            <td className="py-3 px-8 pt-5">
                                Arrival & Check-In
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-8">12:05 - 12:30 PM</td>
                            <td className="py-3 px-8">Opening Ceremony</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-8">12:30 - 4:00 PM</td>
                            <td className="py-3 px-8">Start Hacking!</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-8">4:00 - 5:30 PM</td>
                            <td className="py-3 px-8">
                                Activity, Food, and Judging
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 px-8">5:30 - 6:00 PM</td>
                            <td className="py-3 px-8">Awards Ceremony</td>
                        </tr>
                    </tbody>
                </table>
            </motion.div>
        </div>
    </section>
);

const FAQItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={false}
            className="glass-card p-8 overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
            >
                <span className="font-bold text-xl text-brand-blue group-hover:text-brand-teal transition-colors">
                    {question}
                </span>
                <span
                    className={`shrink-0 text-brand-teal transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="text-slate-600 text-md leading-relaxed border-t border-slate-100 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const questions = [
        {
            q: "What is a hackathon?",
            a: "A hackathon is a social coding event where students collaborate to create a new project from scratch. HackSharon is an afternoon-long hackathon for middle and high school students.",
        },
        {
            q: "How much experience do I need to attend?",
            a: "None at all! We will have mentors available to help you, whether you're writing your first line of code or are an experienced developer.",
        },
        {
            q: "How do teams work?",
            a: "You can work in teams of up to 4 students. Alternatively, you can work individually or be randomly assigned to a team with other individuals.",
        },
        {
            q: "When and where is HackSharon?",
            a: "HackSharon 2026 will be held at Sharon High School on Tuesday, March 24, from 12 PM to 6 PM.",
        },
        {
            q: "Who is eligible to attend?",
            a: "HackSharon is open to all grade 6–12 students attending either Sharon High School or Sharon Middle School.",
        },
        {
            q: "Does HackSharon cost money?",
            a: "No! HackSharon is completely free to attend. We provide food, merch, and prizes at no cost to you thanks to our sponsors.",
        },
        {
            q: "What will I eat?",
            a: "We will be serving free pizza along with plenty of snacks and drinks throughout the event.",
        },
        {
            q: "I have more questions!",
            a: "Feel free to reach out to us at shshackathon@gmail.com with any other questions you might have.",
        },
    ];

    return (
        <section id="faq" className="my-24 px-6 relative scroll-mt-32">
            <div className="max-w-2xl mx-auto">
                <h2 className="font-mono text-3xl sm:text-5xl font-bold mb-12 text-center text-brand-blue">
                    FAQ
                </h2>
                <div className="flex flex-col gap-4">
                    {questions.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.q}
                            answer={item.a}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Sponsors = () => (
    <section id="sponsors" className="my-24 px-6 relative scroll-mt-32">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-mono text-3xl sm:text-5xl font-bold mb-12 text-brand-blue">
                Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Link
                    href="https://www.costco.com"
                    className="content-center"
                    target="_blank"
                >
                    <Image
                        src="/sponsors/costco.png"
                        alt="Costco"
                        width={600}
                        height={300}
                        className="object-contain mx-auto p-8"
                    />
                </Link>
                <Link
                    href="https://www.traderjoes.com/home"
                    className="content-center"
                    target="_blank"
                >
                    <Image
                        src="/sponsors/trader-joes.png"
                        alt="Trader Joes"
                        width={250}
                        height={250}
                        className="object-contain mx-auto p-8"
                    />
                </Link>
            </div>
        </div>
    </section>
);

const Resources = () => (
    <section id="resources" className="my-24 px-6 relative scroll-mt-32">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mono text-3xl sm:text-5xl font-bold mb-12 text-brand-blue">
                Resources
            </h2>
            <div className="glass-card p-8 overflow-hidden rounded-2xl flex flex-col gap-1 mb-8">
                <h3 className="text-3xl font-bold font-mono text-brand-blue mb-3">
                    General
                </h3>
                <Link
                    href="https://www.freecodecamp.org/"
                    className="font-mono text-2xl hover:underline text-slate-600"
                    target="_blank"
                >
                    Free Code Camp
                </Link>
                <Link
                    href="https://www.codecademy.com/"
                    className="font-mono text-2xl hover:underline text-slate-600"
                    target="_blank"
                >
                    Codecademy
                </Link>
                <Link
                    href="https://docs.github.com/en/get-started/start-your-journey"
                    className="font-mono text-2xl hover:underline text-slate-600"
                    target="_blank"
                >
                    GitHub Docs
                </Link>
                <Link
                    href="https://www.w3schools.com/"
                    className="font-mono text-2xl hover:underline text-slate-600"
                    target="_blank"
                >
                    W3Schools
                </Link>
                <Link
                    href="https://code.org/en-US/students"
                    className="font-mono text-2xl hover:underline text-slate-600"
                    target="_blank"
                >
                    Code.org
                </Link>
            </div>
            <div className="glass-card p-8 overflow-hidden rounded-2xl flex flex-col gap-1 mb-8">
                <h3 className="text-3xl font-bold font-mono text-brand-blue mb-3">
                    Web Development
                </h3>
            </div>
            <div className="glass-card p-8 overflow-hidden rounded-2xl flex flex-col gap-1 mb-8">
                <h3 className="text-3xl font-bold font-mono text-brand-blue mb-3">
                    Game Development
                </h3>
            </div>
            <div className="glass-card p-8 overflow-hidden rounded-2xl flex flex-col gap-1 mb-8">
                <h3 className="text-3xl font-bold font-mono text-brand-blue mb-3">
                    Scratch
                </h3>
            </div>
        </div>
    </section>
);

export default function Home() {
    return (
        <main className="min-h-screen">
            <Nav />
            <Hero />
            <About />
            <Schedule />
            <FAQ />
            <Sponsors />
            <Resources />

            <section className="text-center">
                <p className="text-slate-600 text-sm sm:text-lg py-10 mb-0 border-t-black/10 border-t font-mono bg-gray-50">
                    made with ❤️ by the HackSharon team <br></br> (c) 2026
                    HackSharon
                </p>
            </section>
        </main>
    );
}
