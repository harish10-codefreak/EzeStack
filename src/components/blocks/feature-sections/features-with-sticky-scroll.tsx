"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Target, Code, Palette, Headphones } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: "Strategic Planning",
    description:
      "We start with deep discovery to understand your goals and challenges",
    content: (
      <div className="bg-gradient-to-br from-background to-secondary rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="h-2 bg-accent rounded-full mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="h-2 bg-muted rounded-full mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Modern Development",
    description:
      "Using cutting-edge technologies and best practices for scalable solutions",
    content: (
      <div className="bg-gradient-to-br from-background to-secondary rounded-lg p-8 shadow-lg">
        <div className="bg-charcoal rounded-lg p-6 text-white font-mono">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-accent">{'<Component>'}</div>
            <div className="pl-4 text-gray-300">{'// Modern React code'}</div>
            <div className="pl-4 text-blue-300">{'return <div>Hello</div>'}</div>
            <div className="text-accent">{'</Component>'}</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <Palette className="h-8 w-8 text-accent" />,
    title: "User-Centric Design",
    description:
      "Creating intuitive interfaces that delight users and drive conversions",
    content: (
      <div className="bg-gradient-to-br from-background to-secondary rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="w-20 h-6 bg-accent rounded"></div>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-10 bg-accent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <Headphones className="h-8 w-8 text-accent" />,
    title: "Continuous Support",
    description:
      "Ongoing maintenance and optimization to ensure peak performance",
    content: (
      <div className="bg-gradient-to-br from-background to-secondary rounded-lg p-8 shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-2"></div>
            <div className="text-sm font-medium">99.9%</div>
            <div className="text-xs text-muted-foreground">Uptime</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-2"></div>
            <div className="text-sm font-medium">24/7</div>
            <div className="text-xs text-muted-foreground">Support</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <div className="w-6 h-6 bg-accent rounded-full mx-auto mb-2"></div>
            <div className="text-sm font-medium">Fast</div>
            <div className="text-xs text-muted-foreground">Response</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function FeaturesWithStickyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = ["#ffffff", "#f9fafb", "#f3f4f6"];

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = features.map(
      (_, index) => index / features.length
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{ background: gradient }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="relative mx-auto h-full w-full max-w-7xl pt-20 md:pt-40 bg-background"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <h2 className="mt-4 text-lg font-bold text-primary font-[var(--font-heading)] md:text-2xl lg:text-4xl">
          Our Approach
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground font-[var(--font-body)] md:text-base">
          How we deliver exceptional results
        </p>
      </div>
      <StickyScroll content={features} />
    </motion.div>
  );
}

export const StickyScroll = ({
  content,
}: {
  content: { title: string; description: string; icon?: React.ReactNode }[];
}) => {
  return (
    <div className="py-4 md:py-20">
      <motion.div className="relative mx-auto hidden h-full max-w-7xl flex-col justify-between p-10 lg:flex">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="relative mx-auto flex max-w-7xl flex-col justify-between p-10 lg:hidden">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0]
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-40 grid grid-cols-2 gap-8"
    >
      <div className="w-full">
        <motion.div
          style={{ y: translate, opacity: index === 0 ? opacityContent : 1 }}
          className=""
        >
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block max-w-md text-left text-2xl font-bold text-primary font-[var(--font-heading)] lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="font-regular mt-2 max-w-sm text-lg text-muted-foreground font-[var(--font-body)]">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{ y: translateContent, opacity: opacity }}
        className="h-full w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-10 flex flex-col md:flex-row md:gap-20"
    >
      <motion.div
        key={item.title + index}
        className="mb-8 w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
      <div className="w-full">
        <motion.div className="mb-6">
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block text-left text-2xl font-bold text-primary font-[var(--font-heading)] lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="mt-2 max-w-sm text-sm font-bold text-muted-foreground font-[var(--font-body)] md:text-base">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};