"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import AnimatedHeader from "./AnimatedHeader";
import HeroButtons from "./HeroButtons";
import FeatureCards from "./FeatureCards";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            when: "afterChildren",
        },
    },
};

export default function HeroContent() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="flex flex-col items-center text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="hero-content"
            >
                <AnimatedHeader />
                <HeroButtons />
                <FeatureCards />
            </motion.div>
        </AnimatePresence>
    );
}
