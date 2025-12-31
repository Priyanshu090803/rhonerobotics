"use client";
import { ArrowLeft02Icon, ArrowRight02Icon } from 'hugeicons-react';
import { cn } from "@/lib/utils";

interface ScrollButtonsProps {
    onPrev: () => void;
    onNext: () => void;
    prevDisabled?: boolean;
    nextDisabled?: boolean;
    className?: boolean;
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
                className="p-4 rounded-full border border-neutral-200 text-neutral-400 hover:border-[#7357bf] hover:text-[#7357bf] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                aria-label="Previous item"
            >
                <ArrowLeft02Icon className="w-6 h-6 transition-transform group-active:scale-90" />
            </button>
            <button
                onClick={onNext}
                disabled={nextDisabled}
                className="p-4 rounded-full border border-neutral-200 text-neutral-400 hover:border-[#7357bf] hover:text-[#7357bf] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
                aria-label="Next item"
            >
                <ArrowRight02Icon className="w-6 h-6 transition-transform group-active:scale-90" />
            </button>
        </div>
    );
}
