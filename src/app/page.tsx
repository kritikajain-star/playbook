import Link from "next/link";
import { PlusCircle, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-slate-50 pt-24 pb-12 px-6 font-sans">
      <main className="flex w-full max-w-5xl flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-light text-slate-800 tracking-tight">
            Business Case Management System
          </h1>
          <p className="text-lg text-slate-500 font-light">
            Create and manage your business case workflows
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Phase 1 Card */}
          <div className="bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 rounded-sm p-12 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[320px]">
            <div className="w-20 h-20 rounded-full bg-[#1e4b5f] flex items-center justify-center mb-6 group-hover:bg-[#153644] transition-colors duration-300 shadow-sm">
              <PlusCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-normal text-slate-800 mb-3">
              Phase 1 - Business Case
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Create and manage business case workflows
            </p>
          </div>

          {/* Phase 2 Card */}
          <Link href="/phase2" className="block outline-none">
            <div className="bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 rounded-sm p-12 flex flex-col items-center justify-center text-center group cursor-pointer min-h-[320px] h-full">
              <div className="w-20 h-20 rounded-full bg-[#1e4b5f] flex items-center justify-center mb-6 group-hover:bg-[#153644] transition-colors duration-300 shadow-sm">
                <Rocket className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-normal text-slate-800 mb-3">
                Phase 2 - Implementation
              </h2>
              <p className="text-slate-500 font-light text-sm">
                Begin implementation planning and execution
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
