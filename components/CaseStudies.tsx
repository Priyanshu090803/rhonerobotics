"use client";
import { useState, useRef, useEffect, useCallback } from 'react';
import { SectionHeader } from './ui/section-header';
import { ScrollButtons } from './ui/scroll-buttons';
import { CaseStudyCard, CaseStudy } from './CaseStudyCard';

const caseStudies: CaseStudy[] = [
    {
        title: "Intastyles",
        category: "Apparel Tech",
        tagline: "Photoshop-Led Cloth Revolution",
        description: "A revolutionary cloth dripping system integrated with Photoshop, enabling high-fidelity visualization for the modern clothing industry.",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop",
        tags: ["Photoshop", "Next.js", "Cloth Physics"],
        stat: "High-Fidelity Rendering"
    },
    {
        title: "Gen AI Cloth Morph",
        category: "Artificial Intelligence",
        tagline: "Automating the Drip",
        description: "An AI-powered product that leverages Generative AI to automate cloth dripping effects, streamlining creative workflows.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        tags: ["Gen AI", "Stable Diffusion", "Python"],
        stat: "AI-Driven Automation"
    },
    {
        title: "Enterprise AI Suite",
        category: "Full Stack Solutions",
        tagline: "Scalable Infrastructure",
        description: "Comprehensive digital transformation projects spanning AI, Web/Mobile development, and advanced Cloud automations.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tags: ["Cloud", "Automations", "Full Stack"],
        stat: "Enterprise Mobility"
    },
    {
        title: "Workflow Engine",
        category: "Software (SaaS)",
        tagline: "Process Optimization",
        description: "Deploying intelligent agents and automated workflows to increase core business efficiency by over 40%.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["Workflow", "AI Agents", "SaaS"],
        stat: "40% Efficiency Boost"
    }
];

export default function CaseStudies() {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll <= 0) return;

        const scrollFraction = scrollLeft / maxScroll;
        const newIndex = Math.round(scrollFraction * (caseStudies.length - 1));

        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    }, [activeIndex]);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
            window.addEventListener('resize', handleScroll);
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleScroll);
            }
        };
    }, [handleScroll]);

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;

        const { scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        const safeIndex = Math.max(0, Math.min(index, caseStudies.length - 1));
        const targetScroll = (safeIndex / (caseStudies.length - 1)) * maxScroll;

        scrollRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    const scrollNext = () => scrollToIndex(activeIndex + 1);
    const scrollPrev = () => scrollToIndex(activeIndex - 1);

    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white" id="case-studies">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title="Case Studies"
                    description="A selection of projects where we automated workflows and delivered measurable results."
                >
                    <ScrollButtons
                        onPrev={scrollPrev}
                        onNext={scrollNext}
                        prevDisabled={activeIndex === 0}
                        nextDisabled={activeIndex === caseStudies.length - 1}
                    />
                </SectionHeader>

                <div className="relative group/container">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden pb-12 gap-8 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
                    >
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard key={index} study={study} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
