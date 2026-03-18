"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function Phase1LogicMap() {
  const [formData, setFormData] = useState({
    i1: "",
    i2: "",
    i3: "",
    i4: "",
    i5: "",
    i6: "",
    i7: "",
    i8: "",
    i9: "",
    i10: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: "i1",
      label: "I1. Country of Implementation",
      options: [
        { value: "", label: "Select Country..." },
        { value: "united_states", label: "United States" },
        { value: "germany", label: "Germany" },
        { value: "japan", label: "Japan" },
        { value: "mexico", label: "Mexico" },
        { value: "india", label: "India" },
      ],
    },
    {
      id: "i2",
      label: "I2. City / Industrial Zone",
      options: [
        { value: "", label: "Select Zone Type..." },
        { value: "tier1", label: "Tier 1 City" },
        { value: "tier2", label: "Tier 2 City" },
        { value: "tech_park", label: "Technology Park" },
        { value: "sez", label: "Special Economic Zone (SEZ)" },
        { value: "brownfield", label: "Brownfield Site" },
      ],
    },
    {
      id: "i3",
      label: "I3. Product Line(s)",
      options: [
        { value: "", label: "Select Product Line..." },
        { value: "hardware", label: "Hardware Assembly" },
        { value: "software", label: "Software Development" },
        { value: "packaging", label: "Packaging" },
        { value: "logistics", label: "Logistics Services" },
        { value: "mixed", label: "Mixed Manufacturing" },
      ],
    },
    {
      id: "i4",
      label: "I4. Expected Annual Order Intake (Value)",
      options: [
        { value: "", label: "Select Order Intake..." },
        { value: "under_1m", label: "Less than $1M" },
        { value: "1m_10m", label: "$1M - $10M" },
        { value: "10m_50m", label: "$10M - $50M" },
        { value: "50m_100m", label: "$50M - $100M" },
        { value: "over_100m", label: "Over $100M" },
      ],
    },
    {
      id: "i5",
      label: "I5. Expected Annual Job Volume",
      options: [
        { value: "", label: "Select Job Volume..." },
        { value: "under_1k", label: "< 1,000 units" },
        { value: "1k_10k", label: "1,000 - 10,000 units" },
        { value: "10k_50k", label: "10,000 - 50,000 units" },
        { value: "50k_100k", label: "50,000 - 100,000 units" },
        { value: "over_100k", label: "> 100,000 units" },
      ],
    },
    {
      id: "i6",
      label: "I6. Service Center Scale",
      options: [
        { value: "", label: "Select Scale..." },
        { value: "small", label: "Small (Local)" },
        { value: "medium", label: "Medium (Regional)" },
        { value: "large", label: "Large (National)" },
        { value: "very_large", label: "Very Large (Continental)" },
        { value: "global", label: "Global Hub" },
      ],
    },
    {
      id: "i7",
      label: "I7. Implementation Phasing Strategy",
      options: [
        { value: "", label: "Select Strategy..." },
        { value: "big_bang", label: "Big Bang" },
        { value: "phased_function", label: "Phased (By Function)" },
        { value: "phased_region", label: "Phased (By Region)" },
        { value: "pilot_scale", label: "Pilot-then-Scale" },
        { value: "parallel", label: "Parallel Run" },
      ],
    },
    {
      id: "i8",
      label: "I8. Local Capability vs Import Dependency",
      options: [
        { value: "", label: "Select Capability Mix..." },
        { value: "fully_local", label: "Fully Local" },
        { value: "high_local", label: "High Local (Low Import)" },
        { value: "balanced", label: "Balanced" },
        { value: "high_import", label: "High Import (Low Local)" },
        { value: "fully_imported", label: "Fully Imported" },
      ],
    },
    {
      id: "i9",
      label: "I9. Operating Model",
      options: [
        { value: "", label: "Select Operating Model..." },
        { value: "captive", label: "Captive Center" },
        { value: "jv", label: "Joint Venture" },
        { value: "outsourced", label: "Outsourced (BPO)" },
        { value: "bot", label: "Build-Operate-Transfer (BOT)" },
        { value: "franchise", label: "Franchise" },
      ],
    },
    {
      id: "i10",
      label: "I10. Target Go-Live Timeline",
      options: [
        { value: "", label: "Select Timeline..." },
        { value: "0_3", label: "0-3 Months" },
        { value: "3_6", label: "3-6 Months" },
        { value: "6_12", label: "6-12 Months" },
        { value: "12_18", label: "12-18 Months" },
        { value: "18_plus", label: "18+ Months" },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Persistent Teal Background Glow */}
      <div className="absolute top-[-200px] left-[50%] -translate-x-1/2 w-[900px] h-[900px] opacity-40 blur-[160px] rounded-full pointer-events-none bg-teal-100 transition-colors duration-700"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Navigation / Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="flex items-center text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </Link>
        </div>

        {/* Form Container Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-bottom-8 duration-500">

          {/* Card Header */}
          <div className="bg-slate-800 px-8 py-6 border-b border-slate-700">
            <h1 className="text-2xl font-semibold text-white">
              Logic Map – Implementation Phase
            </h1>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-lg font-medium text-slate-800 mb-2">
                LEVEL 1: Primary Driver Inputs
              </h2>
              <p className="text-slate-500 text-sm">
                These are the only user-selectable dropdowns.
              </p>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {inputs.map((input) => (
                <div key={input.id} className="flex flex-col">
                  <label
                    htmlFor={input.id}
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    {input.label}
                  </label>
                  <select
                    id={input.id}
                    name={input.id}
                    value={formData[input.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-slate-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-lg border bg-slate-50 hover:bg-white transition-colors cursor-pointer text-slate-800 shadow-sm appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: `right 0.5rem center`,
                      backgroundRepeat: `no-repeat`,
                      backgroundSize: `1.5em 1.5em`,
                    }}
                  >
                    {input.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Save Configuration Button */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                onClick={() => {
                  alert("Configuration saved successfully!");
                }}
              >
                <Save className="w-5 h-5 mr-2" />
                Save Logic Map Inputs
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
