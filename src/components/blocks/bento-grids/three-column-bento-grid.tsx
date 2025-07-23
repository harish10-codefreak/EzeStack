"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import { Code, Globe, User, Building, Brain, Zap } from "lucide-react";

export function ThreeColumnBentoGrid() {
  const services = [
    {
      title: "Web Application Development",
      description: "Custom web apps built with modern frameworks and scalable architecture",
      icon: Code,
    },
    {
      title: "Landing Pages", 
      description: "High-converting landing pages optimized for your business goals",
      icon: Globe,
    },
    {
      title: "Personal Portfolios",
      description: "Showcase your work with elegant, responsive portfolio sites",
      icon: User,
    },
    {
      title: "Business Portfolios",
      description: "Professional corporate websites that establish credibility",
      icon: Building,
    },
    {
      title: "AI Integration",
      description: "Integrate AI capabilities to automate and enhance your workflows",
      icon: Brain,
    },
    {
      title: "Automation & Integration",
      description: "Streamline operations with custom automation solutions",
      icon: Zap,
    },
  ];

  return (
    <div className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8 bg-white">
      <h2 className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-foreground md:text-4xl">
        Our Services
      </h2>
      <p className="mt-4 max-w-lg text-sm text-muted-foreground font-[var(--font-body)]">
        Comprehensive digital solutions tailored to your needs
      </p>
      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

const ServiceCard = ({ service }: { service: any }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-accent/20"
    >
      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="font-[var(--font-heading)] text-sm font-medium tracking-tight text-card-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground font-[var(--font-body)] leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};