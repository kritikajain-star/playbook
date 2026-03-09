"use client";

import Link from "next/link";
import { categories } from "@/data/constants";
import { ArrowLeft, FolderKanban, Building2, Rocket, Wrench, Users, ShieldCheck, Map, Hammer, Lightbulb, Workflow, ClipboardCheck, ServerCog } from "lucide-react";

export default function Phase2Page() {
  const categories = [
    { name: "Land acquisition & due diligence", href: "/phase2/land-acquisition", icon: Map },
    { name: "Legal & corporate readiness", href: "/phase2/legal-readiness", icon: ShieldCheck },
    { name: "Facility Design & Construction", href: "/phase2/facility-design-construction", icon: Building2 },
    { name: "Pre-Operations", href: "/phase2/pre-operations", icon: Workflow },
    { name: "Lean Principles", href: "/phase2/lean-principles", icon: Lightbulb },
    { name: "Equipment & Tooling", href: "/phase2/equipment-tooling", icon: Wrench },
    { name: "Manpower", href: "/phase2/manpower", icon: Users },
    { name: "Change Management", href: "/phase2/change-management", icon: FolderKanban },
    { name: "Technology Transfer", href: "/phase2/technology-transfer", icon: ServerCog },
    { name: "Operations setup", href: "/phase2/operations-setup", icon: ClipboardCheck },
    { name: "Back-office Setup", href: "/phase2/back-office-setup", icon: Rocket },
    { name: "Go-live & Continuous Improvement", href: "/phase2/go-live-improvement", icon: Hammer },
  ];

  return (
    <div className="min-h-screen font-sans relative bg-gradient-to-b from-white via-slate-50 to-slate-100 pb-16 overflow-hidden">

      {/* Soft glow background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-teal-100 opacity-40 blur-[160px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <main className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center mt-10 px-6">
        <div className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white px-16 py-8 rounded-xl shadow-xl text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-light leading-relaxed tracking-wide">
            Phase 2 — Implementation
          </h1>
        </div>

        <p className="text-slate-600 font-light mb-12 text-center">
          Select a category to begin implementation planning
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                href={category.href}
                className="group relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-4"
              >
                {/* Icon container */}
                <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg group-hover:bg-indigo-700 transition-colors">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.4} />
                </div>

                {/* Text */}
                <div>
                  <p className="text-slate-800 text-lg font-medium leading-snug">
                    {category.name}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-indigo-200 to-teal-100 rounded-xl"></div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}