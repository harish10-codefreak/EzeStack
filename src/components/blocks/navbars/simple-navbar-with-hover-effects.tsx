"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function SimpleNavbarWithHoverEffects() {
  return (
    <nav className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
      <div className="font-bold text-lg">Logo</div>
      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-600 transition">Work</a>
        <a href="#" className="hover:text-blue-600 transition">Services</a>
        <a href="#" className="hover:text-blue-600 transition">Pricing</a>
        <a href="#" className="hover:text-blue-600 transition">Contact</a>
      </div>
      <button className="md:hidden p-2 rounded hover:bg-gray-100">
        <span className="sr-only">Open menu</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </nav>
  );
}
