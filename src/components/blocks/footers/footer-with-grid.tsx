"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Linkedin, Twitter, Github, Dribbble, Mail, Phone, MapPin } from "lucide-react";

export function FooterWithGrid() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="border-b border-neutral-200 pb-8 dark:border-neutral-700">
          <div className="mb-10 max-w-xl">
            <Logo className="justify-start" />
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              Web Development & Digital Solutions
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Transforming ideas into powerful digital experiences with cutting-edge web development, AI integration, and innovative automation solutions.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 border-b border-neutral-200 pb-10 pt-10 md:grid-cols-4 dark:border-neutral-700">
          <div>
            <h3 className="mb-4 text-sm font-bold text-black dark:text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-black dark:text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {COMPANY.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-black dark:text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {RESOURCES.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-black dark:text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <Link
                  href="mailto:hello@quantumleaps.dev"
                  className="text-sm text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
                >
                  hello@quantumleaps.dev
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <Link
                  href="tel:+15551234567"
                  className="text-sm text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
                >
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © 2024 EzeStack. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
            >
              <Dribbble className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SERVICES = [
  { title: "Web Development", href: "/services/web-development" },
  { title: "Landing Pages", href: "/services/landing-pages" },
  { title: "AI Integration", href: "/services/ai-integration" },
  { title: "Automation", href: "/services/automation" },
  { title: "Portfolio Design", href: "/services/portfolio-design" },
];

const COMPANY = [
  { title: "About Us", href: "/about" },
  { title: "Our Team", href: "/team" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
];

const RESOURCES = [
  { title: "Documentation", href: "/docs" },
  { title: "Support", href: "/support" },
  { title: "FAQs", href: "/faq" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
];

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-shrink-0 items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100",
        className
      )}
    >
      <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-emerald-600 bg-emerald-600 text-sm text-white antialiased md:h-6 md:w-6">
        <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-emerald-500/20 blur-xl" />
        <div className="relative z-20 text-sm font-bold text-white">
          Q
        </div>
      </div>
      <div
        className={cn(
          "flex items-center gap-2 font-sans text-xl text-black dark:text-white"
        )}
      >
        EzeStack
      </div>
    </Link>
  );
};