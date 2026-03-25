"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Rocket, Layers, ClipboardList,
  Map, ShieldCheck, Building2, Workflow, Lightbulb,
  Wrench, Users, FolderKanban, ServerCog, ClipboardCheck, Hammer, ArrowLeft
} from "lucide-react";

import { usePhase1Data } from './utils/usePhase1Data';

export default function Phase2Home() {
  const phase1 = usePhase1Data();
  // Simplified state: now only manages the implementation grid view
  const [view] = useState<'implementation'>('implementation');

  const categories = [
    { name: "Land acquisition & due diligence", icon: Map, href: "/phase2/land-acquisition" },
    { name: "Legal & corporate readiness", icon: ShieldCheck, href: "/phase2/legal-readiness" },
    { name: "Facility Design & Construction", icon: Building2, href: "/phase2/facility-design-construction" },
    { name: "Pre-Operations", icon: Workflow, href: "/phase2/pre-operations" },
    { name: "Lean Principles", icon: Lightbulb, href: "/phase2/lean-principles" },
    { name: "Equipment & Tooling", icon: Wrench, href: "/phase2/equipment-tooling" },
    { name: "Manpower", icon: Users, href: "/phase2/manpower" },
    { name: "Change Management", icon: FolderKanban, href: "/phase2/change-management" },
    { name: "Technology Transfer", icon: ServerCog, href: "/phase2/technology-transfer" },
    { name: "Operations setup", icon: ClipboardCheck, href: "/phase2/operations-setup" },
    { name: "Back-office Setup", icon: Rocket, href: "/phase2/back-office-setup" },
    { name: "Go-live & Continuous Improvement", icon: Hammer, href: "/phase2/go-live-improvement" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-slate-100 flex flex-col items-center px-6 pt-16 pb-16 font-sans relative overflow-hidden">

      {/* Persistent Teal Background Glow */}
      <div className="absolute top-[-200px] left-[50%] -translate-x-1/2 w-[900px] h-[900px] opacity-40 blur-[160px] rounded-full pointer-events-none bg-teal-100 transition-colors duration-700"></div>

      <main className="relative z-10 w-full max-w-6xl text-center">
        {/* Navigation / Header */}
        <div className="w-full text-left mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
              Phase 2
            </span>
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Select a category below to begin implementation planning and execution.
          </p>

          {phase1 && (
            <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm overflow-hidden">
              <div className="flex flex-col items-start border-r border-slate-100 pr-6">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Product Line</span>
                <span className="text-slate-700 font-semibold uppercase">{phase1.i3}</span>
              </div>
              <div className="flex flex-col items-start border-r border-slate-100 pr-6">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Scale</span>
                <span className="text-slate-700 font-semibold uppercase">{phase1.i6}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Strategy</span>
                <span className="text-slate-700 font-semibold uppercase">{phase1.i7 === 'phase1' ? 'Phase 1 Core' : phase1.i7}</span>
              </div>
            </div>
          )}
        </div>

        {/* --- IMPLEMENTATION CATEGORIES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8 animate-in slide-in-from-bottom-8 duration-500">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                href={category.href}
                key={index}
                className="group relative bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <Icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <p className="text-slate-800 text-left text-md font-medium leading-tight group-hover:text-teal-700 transition-colors">
                  {category.name}
                </p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
