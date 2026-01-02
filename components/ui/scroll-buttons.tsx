"use client";
import { ArrowLeft02Icon, ArrowRight02Icon } from 'hugeicons-react';
import { cn } from "@/lib/utils";

interface ScrollButtonsProps {
    onPrev: () => void;
    onNext: () => void;
    prevDisabled?: boolean;
    nextDisabled?: boolean;
    className?: string;
}

export function ScrollButtons({
    onPrev,
    onNext,
    prevDisabled,
    nextDisabled,
    className
}: ScrollButtonsProps) {
    return (
        <div className={cn("flex gap-4", className)}>
            <button
                onClick={onPrev}
                disabled={prevDisabled}
                className=" p-3 md:p-4 rounded-full   border-2 border-neutral-400 text-neutral-400 hover:border-rose-300 hover:text-rose-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                aria-label="Previous item"
            >
                <ArrowLeft02Icon className="w-6 h-6 transition-transform group-active:scale-90" />
            </button>
            <button
                onClick={onNext}
                disabled={nextDisabled}
                className=" p-3 md:p-4 rounded-full   border-2 border-neutral-400 text-neutral-400 hover:border-rose-300 hover:text-rose-300 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                aria-label="Next item"
            >
                <ArrowRight02Icon className="w-6 h-6 transition-transform group-active:scale-90" />
            </button>
        </div>
    );
}
