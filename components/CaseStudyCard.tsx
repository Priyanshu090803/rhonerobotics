import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [showDescription, setShowDescription] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-[85vw] md:w-96 snap-start shrink-0 group relative"
        >
            <div className="bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 flex flex-col h-[400px] md:h-[500px] transition-all duration-500 hover:border-neutral-700">
                <AnimatePresence mode="wait">
                    {!showDescription ? (
                        <motion.div
                            key="image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative flex-1 overflow-hidden"
                        >
                            <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex-1 p-4 md:p-8 flex flex-col justify-end space-y-4 md:space-y-6 overflow-y-auto min-h-0"
                        >
                            <div className="space-y-2 ">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-rose-600" />
                                    <h4 className="text-lg font-bold text-white font-jakarta">
                                        {study.tagline}
                                    </h4>
                                </div>
                                <p className="text-neutral-100 text-sm text-base leading-relaxed font-jakarta">
                                    {study.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {study.tags.map(tag => (
                                    <span key={tag} className="text-[8px] md:text-[11px] uppercase tracking-widest font-bold text-neutral-500 bg-neutral-800/50 border border-neutral-700/50 px-3 py-1.5 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="py-3 px-4 bg-neutral-900/90 backdrop-blur-sm border-t border-neutral-800 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-0.5 font-jakarta">
                            {study.title}
                        </h3>
                        <p className="text-xs font-bold text-rose-700  uppercase tracking-wider font-jakarta mt-2">
                            {study.category}
                        </p>
                    </div>

                    <button
                        onClick={() => setShowDescription(!showDescription)}
                        className="p-2 transition-colors hover:bg-neutral-800 rounded-lg group/btn"
                    >
                        <div className="grid grid-cols-2 gap-1.5 p-1">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1 h-1 rounded-full transition-colors ${showDescription ? 'bg-rose-300' : 'bg-neutral-500 group-hover/btn:bg-white'}`}
                                />
                            ))}
                        </div>
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
