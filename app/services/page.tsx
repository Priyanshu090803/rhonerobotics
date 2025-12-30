import React from 'react';
import { ServiceCard } from '@/components/ServiceCard';
import { 
  Workflow, 
  Rocket, 
  Smartphone, 
  Bot, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            We combine cutting-edge technology with strategic thinking to deliver 
            solutions that drive growth and efficiency for your business.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Automated Workflows (Spans 2 columns) */}
          <ServiceCard
            title="Automated Workflows"
            description="Streamline your business operations with intelligent automation. We build custom workflows that eliminate repetitive tasks, reduce errors, and free up your team to focus on high-value strategic work."
            icon={Workflow}
            className="md:col-span-2"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          />

          {/* 2. MVP Development */}
          <ServiceCard
            title="MVP Development"
            description="Launch your product idea fast. We build robust Minimum Viable Products that allow you to test the market and validate your hypothesis without unnecessary overhead."
            icon={Rocket}
          />

          {/* 3. Mobile App Development */}
          <ServiceCard
            title="Mobile App Development"
            description="Create engaging native and cross-platform mobile experiences. Our team builds intuitive apps that users love, optimized for performance and scalability on iOS and Android."
            icon={Smartphone}
          />

          {/* 4. AI Automations (Spans 2 columns) */}
          <ServiceCard
            title="AI Automations"
            description="Harness the power of Artificial Intelligence to optimize your processes. From smart chatbots to predictive analytics, we integrate AI solutions that give you a competitive edge."
            icon={Bot}
            className="md:col-span-2"
            imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
          />

          {/* 5. Generative AI */}
          <ServiceCard
            title="Generative AI"
            description="Unlock new creative possibilities with GenAI. We implement custom LLM solutions for content generation, code assistance, and personalized user experiences."
            icon={Sparkles}
            className="md:col-span-3 lg:col-span-3 bg-gradient-to-br from-white to-blue-50/50"
          />

        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-2xl font-semibold hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/20"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
