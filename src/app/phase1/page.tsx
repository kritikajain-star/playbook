"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Upload, FileText } from "lucide-react";

export default function Phase1LogicMap() {
  const [formData, setFormData] = useState({
    i1: "",
    i2: "",
    i3: "",
    i4: "",
    i5: "",
    i6: "small",  // System-derived, not user-selectable
    i7: "",
    i8: "",
    i9: "",
  });

  const [whiteSpotFile, setWhiteSpotFile] = useState<File | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setWhiteSpotFile(file);
      setUploadedFileName(file.name);
    }
  };

  const handleRemoveFile = () => {
    setWhiteSpotFile(null);
    setUploadedFileName("");
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
      label: "2. City",
      options: [
        { value: "", label: "Select City..." },
        { value: "basra", label: "Basra" },
        { value: "baghdad", label: "Baghdad" },
        { value: "kirkuk", label: "Kirkuk" },

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
      id: "i7",
      label: "6.. Implementation Phasing Strategy",
      options: [
        { value: "", label: "Select Strategy..." },
        { value: "phase1", label: "Phase 1 only (Core services)" },
        { value: "phase1_2", label: "Phase 1 + Phase 2 (Planned expansion)" },
        { value: "full_day1", label: "Full scope Day-1" },
      ],
    },
    {
      id: "i8",
      label: "7. Local Capability vs Import Dependency",
      options: [
        { value: "", label: "Select Capability Mix..." },
        { value: "high_local", label: "High local capability" },
        { value: "medium", label: "Medium – mixed sourcing" },
        { value: "low_local", label: "Low – heavy import reliance" },
      ],
    },
    {
      id: "i9",
      label: "8. Target Go-Live Timeline",
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

            {/* System-Derived: Service Center Scale */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="mb-4">
                <h2 className="text-lg font-medium text-slate-800 mb-2">
                  System-Derived Inputs
                </h2>
                <p className="text-slate-500 text-sm">
                  These values are automatically determined based on your selections above.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-700">Service Center Scale</p>
                    <p className="text-xs text-slate-400 mt-0.5">Derived from order intake, job volume, and product line selections</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 ring-1 ring-teal-200">
                      {formData.i6 === 'small' && 'Small'}
                      {formData.i6 === 'medium' && 'Medium'}
                      {formData.i6 === 'large' && 'Large'}
                      {formData.i6 === 'coe' && 'Center of Excellence (CoE)'}
                      {!formData.i6 && 'Pending'}
                    </span>

                  </div>
                </div>
              </div>
            </div>

            {/* White Spot Analysis Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-slate-800 mb-2">
                  White Spot Analysis
                </h2>
                <p className="text-slate-500 text-sm">
                  Upload the White Spot Analysis report from your external program.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 p-8 hover:border-teal-400 hover:bg-teal-50/30 transition-all duration-200">
                <div className="flex flex-col items-center justify-center">
                  {!whiteSpotFile ? (
                    <>
                      <div className="mb-4 p-3 bg-teal-100 rounded-lg">
                        <Upload className="w-6 h-6 text-teal-600" />
                      </div>
                      <label
                        htmlFor="white-spot-upload"
                        className="cursor-pointer text-center"
                      >
                        <p className="text-sm font-medium text-slate-800">
                          Drop your file here or{" "}
                          <span className="text-teal-600 hover:text-teal-700">
                            click to browse
                          </span>
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Supported formats: PDF, Excel, CSV, Word
                        </p>
                      </label>
                      <input
                        id="white-spot-upload"
                        type="file"
                        onChange={handleFileUpload}
                        accept=".pdf,.xlsx,.xls,.csv,.doc,.docx"
                        className="hidden"
                      />
                    </>
                  ) : (
                    <div className="w-full">
                      <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-teal-100 rounded-lg">
                            <FileText className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-800">
                              {uploadedFileName}
                            </p>
                            <p className="text-xs text-slate-500">
                              {(whiteSpotFile?.size || 0) > 1024 * 1024
                                ? `${((whiteSpotFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB`
                                : `${((whiteSpotFile?.size || 0) / 1024).toFixed(2)} KB`}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={handleRemoveFile}
                          className="px-3 py-2 text-sm text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                      <label
                        htmlFor="white-spot-upload"
                        className="mt-3 inline-flex text-sm text-teal-600 hover:text-teal-700 cursor-pointer"
                      >
                        Choose different file
                      </label>
                      <input
                        id="white-spot-upload"
                        type="file"
                        onChange={handleFileUpload}
                        accept=".pdf,.xlsx,.xls,.csv,.doc,.docx"
                        className="hidden"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Save Configuration Button */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                onClick={() => {
                  const data = {
                    logicMap: formData,
                    whiteSpotAnalysis: uploadedFileName || "No file uploaded",
                    uploadedAt: new Date().toISOString(),
                  };
                  localStorage.setItem('phase1-logic-map', JSON.stringify(data));
                  alert("Configuration and White Spot Analysis saved successfully!");
                }}
              >
                <Save className="w-5 h-5 mr-2" />
                Save Configuration & Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

