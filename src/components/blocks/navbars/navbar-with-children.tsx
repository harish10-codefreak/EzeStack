"use client";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function NavbarWithChildren() {
  return (
    <nav className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
      <div className="font-bold text-lg">Logo</div>
      <div className="flex gap-6">
        <div className="group relative">
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg min-w-[180px] z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Web Development</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Interface Design</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">SEO</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Branding</a>
          </div>
        </div>
        <div className="group relative">
          <a href="#" className="hover:text-blue-600 transition">Products</a>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg min-w-[180px] z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Algochurn</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tailwind Master Kit</a>
          </div>
        </div>
        <div className="group relative">
          <a href="#" className="hover:text-blue-600 transition">Pricing</a>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg min-w-[180px] z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Hobby</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Individual</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Team</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
