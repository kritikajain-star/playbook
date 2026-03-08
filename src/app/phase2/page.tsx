import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Phase2Page() {
  const categories = [
    { name: "Land acquisition & due diligence", href: "/phase2/land-acquisition" },
    { name: "Legal & corporate readiness", href: "#" },
    { name: "Facility Design & Construction", href: "#" },
    { name: "Pre-Operations", href: "#" },
    { name: "Lean Principles", href: "#" },
    { name: "Equipment & Tooling", href: "#" },
    { name: "Manpower", href: "#" },
    { name: "Change Management", href: "#" },
    { name: "Technology Transfer", href: "#" },
    { name: "Operations setup", href: "#" },
    { name: "Back-office Setup", href: "#" },
    { name: "Go-live & Continuous Improvement", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* Navigation Layer */}
      <div className="w-full max-w-6xl mx-auto px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-[#1e4b5f] hover:text-[#153644] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex w-full max-w-5xl mx-auto flex-col items-center mt-6 px-4">
        {/* Header Block */}
        <div className="bg-[#1e4b5f] text-white px-16 py-8 rounded-sm shadow-md text-center mb-8 inline-block min-w-[320px]">
          <h1 className="text-2xl font-light tracking-wide leading-relaxed">
            Phase – 2<br />Implementation
          </h1>
        </div>

        <p className="text-slate-600 mb-12 font-light">
          Select a category to begin implementation planning
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 w-full">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="block bg-[#1e4b5f] text-white py-[22px] px-6 rounded-sm text-center font-light shadow-sm hover:shadow-md hover:bg-[#153644] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
