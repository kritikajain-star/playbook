import Link from 'next/link';
import { ArrowLeft, Upload, Calendar } from 'lucide-react';

export default function LandAcquisitionPage() {
  const tableData = [
    "a) Verify land ownership status (title deed, encumbrances, disputes).",
    "b) Conduct zoning verification: confirm land classification permits industrial/service-centre use.",
    "c) Check proximity constraints (logistics hubs, highways, restrictions near residential zones).",
    "d) Assessment of geo-political risks (stability, regulatory volatility).",
    "e) Obtain pre-approval from Government Authorities for company incorporation",
    "f) Complete environmental pre-screening requirements (potential contamination, protected zones).",
    "g) Validate land boundaries through a certified surveyor."
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Navigation Layer */}
      <div className="w-full mx-auto px-6 pt-8 max-w-7xl">
        <Link 
          href="/phase2" 
          className="inline-flex items-center text-[#1e4b5f] hover:text-[#153644] font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Phase 2
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex w-full mx-auto flex-col items-center mt-6 px-4 max-w-7xl">
        {/* Header Block */}
        <div className="bg-[#1e4b5f] text-white px-16 py-8 rounded-sm shadow-md text-center mb-8 inline-block min-w-[320px]">
          <h1 className="text-2xl font-light tracking-wide">
            Land acquisition & due diligence
          </h1>
        </div>

        <p className="text-slate-600 mb-12 font-light">
          Complete all sections for this category
        </p>

        {/* Content Container */}
        <div className="w-full">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button className="flex items-center bg-[#1e4b5f] text-white px-6 py-2.5 rounded-sm text-sm font-medium shadow-sm hover:bg-[#153644] transition-colors">
              <Upload className="w-4 h-4 mr-2" />
              MMR
            </button>
            <button className="bg-[#1e4b5f] text-white px-6 py-2.5 rounded-sm text-sm font-medium shadow-sm hover:bg-[#153644] transition-colors">
              Permits
            </button>
            <button className="bg-[#1e4b5f] text-white px-6 py-2.5 rounded-sm text-sm font-medium shadow-sm hover:bg-[#153644] transition-colors">
              Licenses
            </button>
            <button className="bg-[#1e4b5f] text-white px-6 py-2.5 rounded-sm text-sm font-medium shadow-sm hover:bg-[#153644] transition-colors">
              Environmental Checks
            </button>
          </div>

          {/* Table Container */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden min-w-[900px]">
            {/* Table Header Section */}
            <div className="bg-[#d2e8db] px-6 py-3 border-b border-slate-200">
              <h2 className="text-[#1a3d2c] font-medium text-base">Land Identification & Due Diligence</h2>
            </div>
            <div className="px-6 py-3 border-b border-slate-200 bg-white">
              <p className="text-sm text-slate-800 italic font-light">
                Objective: Ensure the selected land is legally viable, compliant with zoning rules, and fit for industrial operations.
              </p>
            </div>

            {/* Actual Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-white border-b border-slate-200 text-sm text-slate-700">
                    <th className="px-6 py-4 font-medium w-1/3">Item</th>
                    <th className="px-4 py-4 font-medium">Owner</th>
                    <th className="px-4 py-4 font-medium">Support team</th>
                    <th className="px-4 py-4 font-medium">Start date</th>
                    <th className="px-4 py-4 font-medium">Target date</th>
                    <th className="px-4 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-800">
                  {tableData.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-3 font-light leading-snug">{item}</td>
                      <td className="px-4 py-3">
                        <input 
                          type="text" 
                          placeholder="Enter owner" 
                          className="w-full border border-slate-200 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 font-light"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input 
                          type="text" 
                          placeholder="Enter team" 
                          className="w-full border border-slate-200 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 font-light"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="mm/dd/yyyy" 
                            className="w-full border border-slate-200 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 font-light pr-9"
                          />
                          <Calendar className="w-4 h-4 text-slate-400 absolute right-2.5 top-2" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="mm/dd/yyyy" 
                            className="w-full border border-slate-200 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 font-light pr-9"
                          />
                          <Calendar className="w-4 h-4 text-slate-400 absolute right-2.5 top-2" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <input 
                          type="text" 
                          placeholder="Enter status" 
                          className="w-full border border-slate-200 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 font-light"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
