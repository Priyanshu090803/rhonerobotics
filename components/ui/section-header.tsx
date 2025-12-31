"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface SectionHeaderProps extends HTMLMotionProps<"div"> {
    title: string;
    description?: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    children?: React.ReactNode;
    useGradientTitle?: boolean;
}

export function SectionHeader({
    title,
    description,
    className,
    titleClassName,
    descriptionClassName,
    children,
    useGradientTitle = true,
    ...props
}: SectionHeaderProps) {
    return (
        <motion.div
            className={cn("flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8", className)}
            {...props}
        >
            <div className="max-w-3xl">
                <h2 className={cn(
                    "text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 font-jakarta drop-shadow-sm",
                    useGradientTitle ? "text-transparent bg-clip-text bg-linear-to-r from-[#7357bf] to-[#ab96e4]" : "text-gray-900",
                    titleClassName
                )}>
                    {title}
                </h2>
                {description && (
                    <p className={cn(
                        "text-lg md:text-2xl text-neutral-500 font-jakarta leading-relaxed max-w-2xl",
                        descriptionClassName
                    )}>
                        {description}
                    </p>
                )}
            </div>
            {children && (
                <div className="flex gap-4">
                    {children}
                </div>
            )}
        </motion.div>
    );
}
