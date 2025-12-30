// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll } from "motion/react";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";
// import { Button } from "./moving-border";

// export const StickyScroll = ({
//   content,
// }: {
//   content: {
//     title: string;
//     description: string;
//   }[];
//   contentClassName?: string;
// }) => {
//   const [activeCard, setActiveCard] = React.useState(0);
//   const ref = useRef<any>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: isMobile ? ["start 0.6", "end start"] : ["start 0.5", "end start"],
//   });
//   const cardLength = content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = content.map((_, index) => index / cardLength);
//     const closestBreakpointIndex = cardsBreakpoints.reduce(
//       (acc, breakpoint, index) => {
//         const distance = Math.abs(latest - breakpoint);
//         if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
//           return index;
//         }
//         return acc;
//       },
//       0,
//     );
//     setActiveCard(closestBreakpointIndex);
//   });

//   return (
//     <div
//       className="relative w-full bg-transparent py-12 md:py-20"
//       ref={ref}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-10">
//         <div className="lg:sticky lg:top-32 h-fit lg:w-1/3 mb-10 lg:mb-0 space-y-6">
//           <div className="flex items-center gap-2">
//             <span className="text-indigo-600 font-mono text-sm tracking-widest">// Process</span>
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold leading-tight">
//             <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#d7c8ff] via-[#6a579d] via-70% to-[#6349a1]">Our Process</span>
//           </h2>
//           <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
//             From automation to advanced analytics, we bring your vision to life with custom AI.
//           </p>
//           <Button className=" bg-gradient-to-t from-[#a999dc] text-xl text-neutral-50 font-semibold via-[#796ba5] via-70% to-[#cbbcf0] border-neutral-400 shadow cursor-pointer ">
//             Contact Us
//           </Button>
//         </div>

//         {/* Right Scrolling Cards */}
//         <div className="lg:w-2/3 space-y-4 md:space-y-6">
//           {content.map((item, index) => (
//             <motion.div
//               key={item.title + index}
//               initial={{ opacity: isMobile ? 0.6 : 0.3 }}
//               animate={{
//                 opacity: activeCard === index ? 1 : (isMobile ? 0.6 : 0.3),
//                 scale: isMobile ? 1 : (activeCard === index ? 1 : 0.98),
//               }}
//               className={cn(
//                 "p-8 md:p-12 rounded-[2rem] border transition-all duration-500",
//                 activeCard === index
//                   ? "bg-slate-50/50 border-slate-100 shadow-xl shadow-slate-200/50"
//                   : "bg-transparent border-transparent"
//               )}
//             >
//               <div className="flex justify-between items-start mb-8">
//                 <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#d7c8ff] via-[#6a579d] via-70% to-[#6349a1]">
//                   {String(index + 1).padStart(2, "0")}.
//                 </span>
//                 <div className="flex gap-1">
//                   {[...Array(content.length)].map((_, i) => (
//                     <div
//                       key={i}
//                       className={cn(
//                         "w-1.5 h-4 rounded-full transition-colors duration-300",
//                         activeCard === index && i <= index ? "bg-purple-800" : "bg-slate-200"
//                       )}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//           <div className="h-20 md:h-40" />
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./moving-border";
// Removed the animated button import causing the "glitter" on entry
// import { Button } from "./moving-border";

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
  const ref = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Ensures responsive checks run correctly
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    // Adjusts trigger points slightly for mobile vs desktop viewports
    offset: isMobile ? ["start 0.7", "end start"] : ["start 0.5", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
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
  });

  return (
    <div
      className="relative w-full bg-transparent py-12 md:py-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-10">
        {/* Sticky Left Side */}
        <div className="lg:sticky lg:top-32 h-fit lg:w-1/3 mb-10 lg:mb-0 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-indigo-600 font-mono text-sm tracking-widest">// Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#d7c8ff] via-[#6a579d] via-70% to-[#6349a1]">Our Process</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
            From automation to advanced analytics, we bring your vision to life with custom AI.
          </p>

          {/* REPLACEMENT: Standard static button instead of animated border button */}
            <Button className=" bg-gradient-to-t from-[#a999dc] text-xl text-neutral-50 font-semibold via-[#796ba5] via-70% to-[#cbbcf0] border-neutral-400 shadow cursor-pointer ">
           Contact Us
            </Button>

        </div>

        {/* Right Scrolling Cards */}
        <div className="lg:w-2/3 space-y-4 md:space-y-6">
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              // Mobile responsiveness: Cleaner opacity transitions, disabled scaling
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                // We disable scale on mobile for a cleaner, higher performance feel
                scale: isMobile ? 1 : (activeCard === index ? 1 : 0.98),
              }}
              transition={{ duration: 0.5 }}
              className={cn(
                "p-8 md:p-12 rounded-[2rem] border transition-colors duration-500",
                activeCard === index
                  ? "bg-slate-50/50 border-slate-100 shadow-xl shadow-slate-200/50"
                  : "bg-transparent border-transparent"
              )}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#d7c8ff] via-[#6a579d] via-70% to-[#6349a1]">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {/* Progress dots */}
                <div className="flex gap-1">
                  {[...Array(content.length)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-1.5 h-4 rounded-full transition-colors duration-300",
                        activeCard === index && i <= index ? "bg-purple-800" : "bg-slate-200"
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