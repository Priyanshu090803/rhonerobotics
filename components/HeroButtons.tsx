"use client";

import { motion, Variants } from "motion/react";
import { PulsatingButton } from "./ui/pulsating-button";

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
};

export default function HeroButtons() {
    return (
        <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-20 w-full sm:w-auto px-4 sm:px-0"
        >
            <PulsatingButton
                as="a"
                href="#contact"
                className="w-full sm:w-auto bg-gradient-to-b from-white via-neutral-50 to-neutral-200 border border-neutral-300/50 text-neutral-800 font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-md text-base md:text-lg"
            >
                Get Started
            </PulsatingButton>
            <PulsatingButton
                as="a"
                href="#process"
                className="w-full sm:w-auto bg-neutral-900 text-white font-semibold hover:bg-neutral-800 shadow-lg shadow-neutral-200/50 text-base md:text-lg"
            >
                Our Process
            </PulsatingButton>
        </motion.div>
    );
}
