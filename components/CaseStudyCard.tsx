"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface CaseStudy {
    title: string;
    category: string;
    tagline: string;
    description: string;
    image: string;
    tags: string[];
    stat: string;
}

interface CaseStudyCardProps {
    study: CaseStudy;
    index: number;
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-[90vw] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] snap-start group"
        >
            <div className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-100 flex flex-col h-full hover:border-[#7357bf]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7357bf]/5">
                <div className="relative h-72 overflow-hidden">
                    <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-900/40 to-transparent" />
                    <div className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 transform transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>

                <div className="p-8 flex flex-col grow">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-1 font-jakarta">
                                {study.title}
                            </h3>
                            <p className="text-sm font-semibold text-[#7357bf] font-jakarta">
                                {study.category}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-1 opacity-20">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-1 h-1 rounded-full bg-neutral-900" />
                            ))}
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
    );
}
