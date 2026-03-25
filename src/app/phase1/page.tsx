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
      label: "1. Country of Implementation",
      options: [
        { value: "", label: "Select Country..." },
        { value: "iraq", label: "Iraq" },
        { value: "kuwait", label: "Kuwait" },
        { value: "uae", label: "UAE" },
        { value: "oman", label: "Oman" },
        { value: "bahrain", label: "Bahrain" },
        { value: "libya", label: "Libya" },
        { value: "other", label: "Other (Region-specific)" },
      ],
    },
    {
      id: "i2",
      label: "2. City / Industrial Zone",
      options: [
        { value: "", label: "Select Zone Type..." },
        { value: "basra", label: "Basra" },
        { value: "rumaila", label: "Rumaila" },
        { value: "mina_al_ahmadi", label: "Mina Al Ahmadi" },
        { value: "sohar", label: "Sohar" },
      ],
    },
    {
      id: "i3",
      label: "3. Product Line(s) to be Implemented",
      options: [
        { value: "", label: "Select Product Line..." },
        { value: "ps", label: "Pump Services (PS)" },
        { value: "ts", label: "Turbo Services (TS)" },
        { value: "ems", label: "Electromechanical Services (EMS)" },
      ],
    },
    {
      id: "i4",
      label: "4. Expected Annual Order Intake (Value)",
      options: [
        { value: "", label: "Select Order Intake..." },
        { value: "under_5m", label: "< USD 5m" },
        { value: "5m_10m", label: "USD 5–10m" },
        { value: "10m_20m", label: "USD 10–20m" },
        { value: "over_20m", label: "> USD 20m" },
      ],
    },
    {
      id: "i5",
      label: "5. Expected Annual Job Volume",
      options: [
        { value: "", label: "Select Job Volume..." },
        { value: "under_100", label: "< 100 jobs/year" },
        { value: "100_300", label: "100–300 jobs/year" },
        { value: "300_600", label: "300–600 jobs/year" },
        { value: "over_600", label: "> 600 jobs/year" },
      ],
    },
    {
      id: "i6",
      label: "6. Service Center Scale",
      options: [
        { value: "", label: "Select Scale..." },
        { value: "small", label: "Small" },
        { value: "medium", label: "Medium" },
        { value: "large", label: "Large" },
        { value: "coe", label: "Center of Excellence (CoE)" },
      ],
    },
    {
      id: "i7",
      label: "7. Implementation Phasing Strategy",
      options: [
        { value: "", label: "Select Strategy..." },
        { value: "phase1", label: "Phase 1 only (Core services)" },
        { value: "phase1_2", label: "Phase 1 + Phase 2 (Planned expansion)" },
        { value: "full_day1", label: "Full scope Day-1" },
      ],
    },
    {
      id: "i8",
      label: "8. Local Capability vs Import Dependency",
      options: [
        { value: "", label: "Select Capability Mix..." },
        { value: "high_local", label: "High local capability" },
        { value: "medium", label: "Medium – mixed sourcing" },
        { value: "low_local", label: "Low – heavy import reliance" },
      ],
    },
    {
      id: "i9",
      label: "9. Operating Model",
      options: [
        { value: "", label: "Select Operating Model..." },
        { value: "standalone", label: "Stand-alone Service Center" },
        { value: "hub_spoke", label: "Hub-and-Spoke (linked to regional hub)" },
        { value: "satellite", label: "Satellite / Light SC" },
      ],
    },
    {
      id: "i10",
      label: "10. Target Go-Live Timeline",
      options: [
        { value: "", label: "Select Timeline..." },
        { value: "under_6m", label: "< 6 months" },
        { value: "6_9m", label: "6–9 months" },
        { value: "9_12m", label: "9–12 months" },
        { value: "over_12m", label: "> 12 months" },
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
                  console.log("Form Data:", formData);
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

