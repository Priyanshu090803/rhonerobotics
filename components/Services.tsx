"use client";
import * as motion from 'motion/react-client';
import { ServiceCard } from './ServiceCard';
import {
  Workflow,
  Rocket,
  Smartphone,
  Bot,
  Sparkles,
  Layout
} from 'lucide-react';

const SERVICES_DATA = [
  {
    title: "Automated Workflows",
    description: "Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams.",
    icon: Workflow,
    className: "lg:col-span-2",
    imageSrc: "https://media.istockphoto.com/id/2216242240/photo/businessman-pointing-at-diagram-document-digital-transformation-technology-iot-internet-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jx5oxPnsn5Sp7FxKzLp2Q4tzvSux3r8aapTh1jcmdhI="
  },
  {
    title: "MVP Development",
    description: "Rapidly prototype and launch your minimum viable product to test market fit with real users.",
    icon: Rocket,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences on any device.",
    icon: Smartphone,
  },
  {
    title: "AI Automations",
    description: "Deploy intelligent agents that adapt quickly, learn fast, and scale with your business needs.",
    icon: Bot,
    className: "lg:col-span-2",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
  {
    title: "Generative AI Solutions",
    description: "Leverage the latest in Large Language Models to create content, write code, and solve complex problems automatically.",
    icon: Sparkles,
    className: "lg:col-span-2 bg-white",
    imageSrc: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: "Website Development",
    description: "High-performance, responsive websites built with modern technologies to convert visitors into customers.",
    icon: Layout,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const Services = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 rounded-2xl" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#060606] via-[#302f30] via-70% to-[#090909] mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            Comprehensive digital solutions tailored to accelerate your growth.
            From MVP to Enterprise AI, we build what matters.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};