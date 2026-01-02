"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./moving-border";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile ? ["start 0.8", "end 0.2"] : ["start 0.5", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) {
      // More stable range-based detection for vertical stacking on mobile
      const index = Math.min(
        Math.floor(latest * cardLength - 0.1),
        cardLength - 1
      );
      setActiveCard(index);
    } else {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0,
      );
      setActiveCard(closestBreakpointIndex);
    }
  });

  return (
    <div
      className="relative w-full bg-gradient-to-tr from-[#e8e8e8] via-[#ffffff] via-50% to-[#ffffff] py-12 md:py-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start gap-10 relative">
        <div className=" lg:sticky top-24 md:top-32 h-fit lg:w-1/3 mb-10 lg:mb-0 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-neutral-600 font-mono text-sm tracking-widest">{"// Process"}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-transparent z-10 bg-clip-text bg-gradient-to-t from-[#090909] via-[#333333] via-70% to-[#121111]">Our Process</span>
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed max-w-sm">
            From automation to advanced analytics, we bring your vision to life with custom AI.
          </p>

          <a href="#contact">
            <Button className=" bg-gradient-to-b from-[#ffffff] text-xl text-neutral-900 font-bold via-[#dfdfdf] via-70% to-[#e7e6e6] border-neutral-300 shadow cursor-pointer ">
              Contact Us
            </Button>
          </a>

        </div>

        <div className="lg:w-2/3 space-y-4 md:space-y-6 ">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              initial={{ opacity: 0.5 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.5,
                scale: isMobile ? 1 : (activeCard === index ? 1 : 0.98),
              }}
              transition={{ duration: 0.5 }}
              className={cn(
                "p-8 md:p-12 rounded-[2rem] border   transition-colors duration-500",
                activeCard === index
                  ? " bg-gradient-to-b from-[#ffffff] via-[#f3f3f3] via-70% to-[#fbfbfb] border-neutral-100 shadow-xl shadow-[#e5e4e4]"
                  : "bg-transparent border-transparent"
              )}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#272727] via-[#757575] via-80% to-[#1d1c1c]">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {/* Progress dots */}
                <div className="flex gap-1">
                  {[...Array(content.length)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-1.5 h-4 rounded-full transition-colors duration-300",
                        activeCard === index && i <= index ? "bg-[#141414]" : "bg-slate-200"
                      )}
                    />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
          <div className="h-20 md:h-40" />
        </div>
      </div>
    </div>
  );
};