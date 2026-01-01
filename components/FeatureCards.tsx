"use client";

import { motion, Variants } from "motion/react";
import DynamicIcon from "./ui/dynamic-icon";
const features = [
    {
        icon: "BarChart3",
        title: "Built for Scale",
        desc: "Your systems grow without breaking - from MVP to millions of users.",
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: "Bot",
        title: "AI-Driven Growth",
        desc: "Automate repetitive work, cut operational costs, and unlock time for your team to focus on strategy and innovation.",
        color: "text-green-600",
        bgColor: "bg-green-50"
    },
    {
        icon: "Handshake",
        title: "Partner, Not Vendor",
        desc: "We collaborate like an internal team - strategy, execution, and ongoing support.",
        color: "text-purple-600",
        bgColor: "bg-purple-50"
    }
];

const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 1,
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const cardVariants: Variants = {
    hidden: (i: number) => ({
        x: i === 1 ? 100 : -100,
        opacity: 0
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: (i: number) => ({
        x: i === 0 ? -20 : i === 1 ? 20 : 0,
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    }),
};

export default function FeatureCards() {
    return (
        <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.2 }}
            className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-gray-100"
        >
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    className={`flex flex-col items-center text-center p-6 md:p-8 ${index < 2 ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''
                        }`}
                >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.bgColor} ${feature.color}`}>
                        <DynamicIcon name={feature.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-500">{feature.desc}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}
