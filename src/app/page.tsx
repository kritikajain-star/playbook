"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-slate-100 flex flex-col items-center justify-center px-6 py-16 font-sans relative overflow-hidden">
      {/* Persistent Teal Background Glow */}
      <div className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[900px] h-[900px] opacity-40 blur-[160px] rounded-full pointer-events-none bg-teal-100 transition-colors duration-700"></div>

      <main className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center mt-[-8vh]">
        {/* Header Section */}
        <div className="mb-14">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6">
            <span className="text-slate-800">
              Business Case Management System
            </span>
          </h1>
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto block mb-8">
            Create and manage your business case workflows
          </p>
        </div>

        {/* Phase Selection Cards */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl mx-auto animate-in slide-in-from-bottom-8 duration-500 justify-center">
          
          {/* Phase 1 Card */}
          <Link
            href="/phase1"
            className="group relative bg-white/100 border border-slate-800 hover:border-teal-600 p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-6 min-h-[280px] flex-1 max-w-[400px]"
          >
            <div className="w-20 h-20 rounded-full bg-[#1a4a5e] flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-700 transition-all duration-300">
              <Plus className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-center mt-2">
              <h2 className="text-xl font-medium text-slate-800 group-hover:text-teal-700 transition-colors mb-2">
                Phase 1 - Business Case
              </h2>
              <p className="text-slate-500 text-sm">
                Create and manage business case workflows
              </p>
            </div>
          </Link>

          {/* Phase 2 Card */}
          <Link
            href="/phase2"
            className="group relative bg-white/100 border border-slate-800 hover:border-teal-600 p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-6 min-h-[280px] flex-1 max-w-[400px]"
          >
            <div className="w-20 h-20 rounded-full bg-[#1a4a5e] flex items-center justify-center group-hover:scale-105 group-hover:bg-teal-700 transition-all duration-300">
              <Rocket className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-center mt-2">
               <h2 className="text-xl font-medium text-slate-800 group-hover:text-teal-700 transition-colors mb-2">
                Phase 2 - Implementation
              </h2>
              <p className="text-slate-500 text-sm">
                Begin implementation planning and execution
              </p>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}