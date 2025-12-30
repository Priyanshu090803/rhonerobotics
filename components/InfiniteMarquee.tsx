import React from 'react';
import * as motion from 'motion/react-client';
import { cn } from '@/lib/utils';
import { 
  Rocket, 
  Zap, 
  Globe,  
  Layout, 
  Smartphone, 
  Code2, 
  Cpu, 
  Database 
} from 'lucide-react';

const ITEMS = [
  { icon: Rocket, label: "Growth Strategy" },
  { icon: Zap, label: "Fast Performance" },
  { icon: Globe, label: "Global Reach" },
  { icon: Layout, label: "UI/UX Design" },
  { icon: Smartphone, label: "Mobile First" },
  { icon: Code2, label: "Clean Code" },
  { icon: Cpu, label: "AI Integration" },
  { icon: Database, label: "Scalable Data" },
];

interface InfiniteMarqueeProps {
  className?: string;
  speed?: number; // Duration in seconds
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ 
  className,
  speed = 30 
}) => {
  return (
    <div className={cn("w-full overflow-hidden   bg-white py-10 border-y border-gray-100", className)}>
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex flex-shrink-0 gap-12 py-4 pr-12"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: speed,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ willChange: "transform" }}
          >
            {/* First copy of items */}
            {ITEMS.map((item, idx) => (
              <div key={`first-${idx}`} className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <item.icon className="w-6 h-6" />
                <span className="text-lg font-semibold whitespace-nowrap">{item.label}</span>
              </div>
            ))}
            
            {/* Second copy of items for seamless loop */}
            {ITEMS.map((item, idx) => (
              <div key={`second-${idx}`} className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <item.icon className="w-6 h-6" />
                <span className="text-lg font-semibold whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          
             {ITEMS.map((item, idx) => (
              <div key={`third-${idx}`} className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <item.icon className="w-6 h-6" />
                <span className="text-lg font-semibold whitespace-nowrap">{item.label}</span>
              </div>
            ))}
            {ITEMS.map((item, idx) => (
              <div key={`fourth-${idx}`} className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
                <item.icon className="w-6 h-6" />
                <span className="text-lg font-semibold whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
