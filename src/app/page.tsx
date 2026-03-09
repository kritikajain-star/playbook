"use client";

import Link from "next/link";
import { PlusCircle, Rocket, Layers, ClipboardList } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-slate-100 flex flex-col items-center px-6 pt-24 pb-16 font-sans relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute top-[-200px] left-[50%] -translate-x-1/2 w-[900px] h-[900px] bg-indigo-100 opacity-40 blur-[160px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-6xl text-center">
        <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
            Business Case Management System
          </span>
        </h1>

        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
          A unified platform to build, manage, and execute business case workflows.
        </p>

        {/* Decorative icons floating */}
        <div className="absolute left-10 top-10 opacity-20 hidden sm:block">
          <Layers size={48} />
        </div>
        <div className="absolute right-10 top-32 opacity-20 hidden sm:block">
          <ClipboardList size={48} />
        </div>

        {/* Cards Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {/* Card 1 */}
          <div className="group relative bg-white/80 backdrop-blur-xl rounded-xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer hover:-translate-y-1">
            {/* Icon circle */}
            <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-indigo-700 transition-colors">
              <PlusCircle className="w-10 h-10 text-white" strokeWidth={1.3} />
            </div>

            <h2 className="text-3xl font-semibold text-slate-800 mb-3">
              Phase 1 — Business Case
            </h2>

            <p className="text-slate-600 font-light text-sm max-w-xs mx-auto">
              Create, collaborate, and refine your business case documentation seamlessly.
            </p>

            {/* glow hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-xl"></div>
          </div>

          {/* Card 2 */}
          <Link href="/phase2" className="block">
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-10 cursor-pointer">
              <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-teal-700 transition-colors">
                <Rocket className="w-10 h-10 text-white" strokeWidth={1.3} />
              </div>

              <h2 className="text-3xl font-semibold text-slate-800 mb-3">
                Phase 2 — Implementation
              </h2>

              <p className="text-slate-600 font-light text-sm max-w-xs mx-auto">
                Plan, track, and accelerate implementation with structured workflows.
              </p>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-teal-200 to-teal-100 rounded-xl"></div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}