"use client";
import React, { useState } from "react";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export function ContactFormGridWithDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2 bg-white font-[var(--font-sans)]">
      <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
        <div className="flex items-start justify-start">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <Mail className="h-6 w-6 text-accent" />
          </FeatureIconContainer>
        </div>
        <h2 className="mt-9 bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-left text-xl font-bold text-transparent md:text-3xl lg:text-5xl">
          Start Your Project
        </h2>
        <p className="mt-8 max-w-lg text-center text-base text-muted-foreground md:text-left">
          Ready to take the quantum leap? Let's discuss your vision.
        </p>

        <div className="mt-10 w-full max-w-md space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">EzeStack</h3>
            
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                123 Innovation Drive<br />
                Tech City, TC 12345
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                hello@ezestack.dev
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9AM - 6PM EST
              </p>
            </div>
          </div>
        </div>

        <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
          <Pin className="top-0 right-1" />

          <Image
            src="/world.svg"
            width={500}
            height={500}
            alt="world map"
            className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
          />
        </div>
      </div>
      
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-secondary to-muted p-4 sm:p-10">
        <Grid size={20} />
        <form onSubmit={handleSubmit} className="relative z-20 w-full space-y-4">
          <div className="w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-foreground"
              htmlFor="name"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={cn(
                "h-10 w-full rounded-md border bg-background pl-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-accent focus:border-accent",
                errors.name ? "border-destructive" : "border-border"
              )}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-destructive" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-foreground"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className={cn(
                "h-10 w-full rounded-md border bg-background pl-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-accent focus:border-accent",
                errors.email ? "border-destructive" : "border-border"
              )}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-foreground"
              htmlFor="company"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company"
              className="h-10 w-full rounded-md border border-border bg-background pl-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-accent focus:border-accent"
            />
          </div>

          <div className="w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-foreground"
              htmlFor="service"
            >
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="h-10 w-full rounded-md border border-border bg-background pl-4 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="landing-pages">Landing Pages</option>
              <option value="ai-integration">AI Integration</option>
              <option value="automation">Automation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-foreground"
              htmlFor="budget"
            >
              Project Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="h-10 w-full rounded-md border border-border bg-background pl-4 text-sm text-foreground outline-none transition-colors focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">Select budget range</option>
              <option value="under-10k">Under $10k</option>
              <option value="10k-25k">$10k - $25k</option>
              <option value="25k-50k">$25k - $50k</option>
              <option value="50k-plus">$50k+</option>
            </select>
          </div>

          <div className="w-full">
            <label
              className="mb-2 inline-block text-sm font-medium text-foreground"
              htmlFor="message"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project..."
              className={cn(
                "w-full rounded-md border bg-background pt-4 pl-4 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:ring-2 focus:ring-accent focus:border-accent resize-none",
                errors.message ? "border-destructive" : "border-border"
              )}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              required
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-destructive" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <button 
            type="submit"
            className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const Pin = ({ className }: { className?: string }) => {
  return (
    <motion.div
      style={{ transform: "translateZ(1px)" }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-secondary px-2 py-1 text-xs font-normal text-foreground">
          We are here
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent/0 via-accent/90 to-accent/0 transition-opacity duration-500"></span>
        </div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-accent/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-accent/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-accent/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-accent blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-accent" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-accent blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-accent/70" />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-secondary to-muted p-[4px]",
        className
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-background",
          className
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-muted-foreground opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-accent/70 to-transparent"></div>
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  // Use a fixed pattern to avoid hydration errors
  const p = pattern ?? [
    [7, 1],
    [8, 2],
    [9, 3],
    [10, 4],
    [11, 5],
  ];
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-muted-foreground/30 to-muted-foreground/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-muted-foreground/20 stroke-muted-foreground/20 mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}