"use client";
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import * as motion from 'motion/react-client';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc?: string;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const;

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  className
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "group relative overflow-hidden bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md ",
        imageSrc ? "flex flex-col lg:flex-row gap-6 md:gap-8 items-center" : "flex flex-col items-start justify-between min-h-[280px]",
        className
      )}
    >
      {imageSrc && (
        <div className="w-full lg:w-1/2 h-48 md:h-64 relative rounded-2xl overflow-hidden bg-gray-50 shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}

      <div className={cn("flex flex-col items-start", imageSrc ? "w-full lg:w-1/2" : "w-full")}>
        <div className="mb-4 md:mb-6 p-3 bg-neutral-900 rounded-xl shadow-lg shadow-neutral-900/10 transition-transform duration-300">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};