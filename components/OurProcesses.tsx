"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
    {
        title: "Understand",
        description:
            "We start with a discovery call to understand your goals, challenges, and ideas. We review your current systems and define what success looks like.",
    },
    {
        title: "Plan & Estimate",
        description:
            "We map out features, timeline, and technology — then share a transparent estimate based on scope and complexity. This makes our pricing feel logical and builds trust.",
    },
    {
        title: "Build & Automate",
        description:
            "Our team designs, develops, and integrates everything — web, mobile, cloud, and AI — while sharing progress with you every week. We ensure a professional, technical, and reliable delivery.",
    },
    {
        title: "Launch & Support",
        description:
            "After launch, we monitor performance, fix issues, and keep improving with new updates when you need them. We're here for the long-term, not just for the initial project.",
    },
];

export function OurProcesses() {
    return (
        <div className="w-full bg-white">
            <StickyScroll content={content} />
        </div>
    );
}
