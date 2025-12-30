"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
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

const CaseStudies = () => {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white" id="case-studies">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#7357bf] to-[#ab96e4] mb-8 font-jakarta drop-shadow-sm">
                            Case Studies
                        </h2>
                        <p className="text-lg md:text-2xl text-neutral-500 font-jakarta leading-relaxed max-w-2xl">
                            A selection of projects where we automated workflows and delivered measurable results.
                        </p>
                    </div>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="relative group/container">
                    <div className="flex overflow-x-auto pb-12 gap-8 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="min-w-[90vw] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-start group"
                            >
                                <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 flex flex-col h-full hover:border-[#7357bf]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7357bf]/5">
                                    {/* Image Container */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={study.image}
                                            alt={study.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                                        <div className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 transform transition-transform duration-500 group-hover:rotate-45">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-neutral-900 mb-1 font-jakarta">
                                                    {study.title}
                                                </h3>
                                                <p className="text-sm font-semibold text-[#7357bf] font-jakarta">
                                                    {study.category}
                                                </p>
                                            </div>
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                                            </div>
                                        </div>

                                        <div className="space-y-4 mb-8">
                                            <div className="flex items-center gap-3">
                                                <span className="w-2 h-2 rounded-full bg-[#7357bf]" />
                                                <p className="text-sm font-bold text-neutral-800 font-jakarta">
                                                    {study.tagline}
                                                </p>
                                            </div>
                                            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 font-jakarta">
                                                {study.description}
                                            </p>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-100">
                                                {study.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-tighter font-bold text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded-md">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scroll Indicators Area */}
                    <div className="flex items-center gap-3 mt-4">
                        <div className="h-1 flex-grow bg-neutral-100 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#7357bf]"
                                initial={{ width: "20%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>
                        <p className="text-xs font-bold text-neutral-400 font-jakarta uppercase tracking-widest">
                            Scroll to explore
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
