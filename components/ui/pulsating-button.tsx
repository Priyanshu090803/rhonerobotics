"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pulseColor?: string;
    duration?: string;
}

export const PulsatingButton = ({
    className,
    children,
    pulseColor = "#ab96e4",
    duration = "1.5s",
    ...props
}: PulsatingButtonProps) => {
    return (
        <button
            className={cn(
                "relative text-center cursor-pointer flex justify-center items-center px-4 py-2 rounded-lg text-white dark:text-black bg-neutral-900 dark:bg-white",
                className,
            )}
            style={
                {
                    "--pulse-color": pulseColor,
                    "--duration": duration,
                } as React.CSSProperties
            }
            {...props}
        >
            <div className="relative z-10">{children}</div>
            <div className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2 z-0" />
        </button>
    );
};
