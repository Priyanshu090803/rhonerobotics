"use client";
import { motion, Variants } from 'motion/react';
import { MapPin, Send, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 0.2
            }
        }
    };

    return (
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-neutral-50 overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 font-jakarta text-neutral-900"
                        >
                            Let&apos;s Talk!
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="lg:max-w-md lg:text-right"
                    >
                        <p className="text-lg font-medium text-neutral-500 font-jakarta leading-relaxed">
                            Send us a message and we will get back to you within 24 hours to arrange a call!
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-8"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm transition-all hover:shadow-xl hover:shadow-neutral-200/50 group h-[300px] flex flex-col justify-between"
                        >
                            <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-900 transition-colors group-hover:bg-rose-50 group-hover:text-rose-700">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-jakarta">Office:</h3>
                                <p className="text-neutral-500 text-lg font-jakarta">100 Georgi S. Rakovski Street, Sofia, Bulgaria</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                variants={fadeInUp}
                                className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm transition-all hover:shadow-xl hover:shadow-neutral-200/50 group h-[260px] flex flex-col justify-between"
                            >
                                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-900 transition-colors group-hover:bg-rose-50 group-hover:text-rose-700">
                                    <Send className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-jakarta">Chat to sales</h3>
                                    <p className="text-neutral-500 text-lg font-jakarta">support@genesy.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm transition-all hover:shadow-xl hover:shadow-neutral-200/50 group h-[260px] flex flex-col justify-between"
                            >
                                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-900 transition-colors group-hover:bg-red-50 group-hover:text-rose-700">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-jakarta">Call Us</h3>
                                    <p className="text-neutral-500 text-lg font-jakarta">+359-888-7798</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-neutral-100 shadow-sm"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-6">
                                {[
                                    { label: "Name", type: "text", placeholder: "Your name" },
                                    { label: "Email", type: "email", placeholder: "Enter Your Email" }
                                ].map((field, idx) => (
                                    <div key={idx} className="flex flex-col gap-4">
                                        <label className="text-sm font-bold text-neutral-400 uppercase tracking-wider ml-1">{field.label}</label>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600/50 transition-all font-jakarta"
                                        />
                                    </div>
                                ))}
                                <div className="flex flex-col gap-4">
                                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-wider ml-1">More for you</label>
                                    <textarea
                                        rows={5}
                                        placeholder="More about your project"
                                        className="w-full bg-neutral-50 border border-neutral-100 rounded-2xl px-6 py-4 text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-rose-600/20 focus:border-rose-600/50 transition-all font-jakarta resize-none"
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-t border border-neutral-600 from-[#626161] via-[#030303] to-[#1a1919] shadow-lg shadow-rose-100 hover:bg-neutral-800 text-white rounded-2xl px-8 py-5 flex items-center justify-center gap-3 transition-all duration-300 group hover:shadow-rose-600/20 cursor-pointer"
                            >
                                <span className="text-lg font-bold font-jakarta">Send an inquiry</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;