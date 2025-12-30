"use client";
import React from "react";
import { DotIcon, StarsIcon } from "lucide-react";
import { PulsatingButton } from "./ui/pulsating-button";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
const Hero = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 overflow-hidden">
      <BackgroundRippleEffect />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
            <div className="flex my-4 pr-4 pl-1 border border-neutral-200 bg-gradient-to-t from-[#fdfdfd] via-[#f3f2f2] via-80% to-[#f8f5f5] h-6 mt-16 items-center rounded-2xl">
            <AnimatedShinyText className=" flex items-center px-2 py-2"><StarsIcon className="w-4 h-4 text-yellow-400"/><span className="ml-2 text-neutral-600">Available for work</span></AnimatedShinyText>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-[850px]">
            Scaling Global <br />
            <span className="inline-flex items-center">
              Innovation with{" "}
              <span className="ml-4">
                <LayoutTextFlip
                  words={["Design", "Create", "Deploy", "Invent"]}
                />
              </span>
            </span>
          </h1>

          <p className="mt-6 leading-5 font-medium text-neutral-500 max-w-3xl mb-10">
            We empower visionary companies to outpace the market by deploying robust AI models and seamless cloud-native applications designed for infinite scalability.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <PulsatingButton className="bg-gradient-to-b from-white via-neutral-50 to-neutral-200 border border-neutral-300/50 text-neutral-800 font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-md text-lg">
              Get Started
            </PulsatingButton>
            <PulsatingButton className="bg-neutral-900 text-white font-semibold hover:bg-neutral-800 shadow-lg shadow-neutral-200/50 text-lg">
              Contact Us
            </PulsatingButton>
          </div>

          {/* Feature grid with Lucide icons */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-gray-100">
            {[
              { 
                icon: "zap", 
                title: "Light speed booking", 
                desc: "Instant ticket processing" 
              },
              { 
                icon: "ticket", 
                title: "Access to Private Portal", 
                desc: "Exclusive features" 
              },
              { 
                icon: "infinity", 
                title: "Unlimited Ticket Requests", 
                desc: "No restrictions" 
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center text-center p-8 ${
                  index < 2 ? 'border-b md:border-b-0 md:border-r border-gray-100' : ''
                }`}
              >
                <span className="text-3xl mb-3">
                  <DynamicIcon name={feature.icon} className="w-8 h-8" />
                </span>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component to dynamically render Lucide icons
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = React.useMemo(() => {
    return require(`lucide-react`)[name.charAt(0).toUpperCase() + name.slice(1) + "Icon"];
  }, [name]);

  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export default Hero;