"use client";
import { useState, useRef, useEffect, useCallback } from 'react';
import { ScrollButtons } from './ui/scroll-buttons';
import { CaseStudyCard, CaseStudy } from './CaseStudyCard';

const caseStudies: CaseStudy[] = [
    {
        title: "Instastyles",
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
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    const checkScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Use a small buffer to handle rounding errors
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

        const firstChild = scrollRef.current.children[0] as HTMLElement;
        if (firstChild) {
            const cardWidth = firstChild.offsetWidth;
            const gap = 32; // gap-8
            const index = Math.round(scrollLeft / (cardWidth + gap));
            setActiveIndex(index);
        }
    }, [setActiveIndex]);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll);
            const timer = setTimeout(checkScroll, 100);
            return () => {
                scrollContainer.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
                clearTimeout(timer);
            };
        }
    }, [checkScroll]);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;

        const firstChild = scrollRef.current.children[0] as HTMLElement;
        if (!firstChild) return;

        const cardWidth = firstChild.offsetWidth;
        const gap = 32;
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);

        scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    };

    const scrollNext = () => scroll('right');
    const scrollPrev = () => scroll('left');

    return (    
        <section className="py-12 md:py-24 px-4 md:px-12 lg:px-20 bg-[#0a0a0a] overflow-x-hidden rounded-2xl" id="case-studies">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 font-jakarta text-white">
                            Case Studies
                        </h2>
                        <p className="text-lg md:text-2xl text-neutral-400 font-jakarta leading-relaxed max-w-2xl">
                            A selection of projects where we automated workflows and delivered measurable results.
                        </p>
                    </div>

                    <ScrollButtons
                        onPrev={scrollPrev}
                        onNext={scrollNext}
                        prevDisabled={!canScrollLeft}
                        nextDisabled={!canScrollRight}
                        className="text-white border-neutral-800 hover:border-rose-600 hover:text-rose-600"
                    />
                </div>

                <div className="relative group/container">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto pb-12 gap-6 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
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
