'use client';

import Link from 'next/link';
import { ArrowLeft, Upload, Cog, Share2, Package, Shield, FileText, Settings, ArrowRight, Truck } from 'lucide-react';
import { usePhase1Data } from '../utils/usePhase1Data';

export default function OperationsSetupPage() {
    const phase1 = usePhase1Data();

    // ── Logic Layer B: Technical Scope Definition ──
    const getServiceScope = () => {
        const pl = phase1?.i3?.toLowerCase();
        if (pl === 'ps') return ['Centrifugal Repair', 'Hydrotesting', 'Seal Overhaul', 'Field Services'];
        if (pl === 'ems') return ['LV/MV Rewinding', 'VPI Insulation', 'Dynamic Balancing', 'Core Testing'];
        if (pl === 'ts') return ['Blade Replacement', 'Rotor Balancing', 'Casing NDT', 'Auxiliary Repair'];
        return ['Standard Repair', 'Inspection', 'Reporting'];
    };

    // ── Logic Layer H: Supply Chain ──
    const isImportDependent = phase1?.i8?.includes('import');
    const isLowLocalCap = phase1?.i8?.includes('low');

    const supplyChainActions = [
        { label: 'Vendor Master Setup', detail: 'Onboard standard Sulzer global suppliers' },
        { label: 'Inventory Baseline', detail: 'Critical spares stocking for Day-1 set' },
    ];

    if (isImportDependent) {
        supplyChainActions.push({ label: 'Logistics Buffer', detail: 'Apply 30-day clearing buffer to lead times' });
    }
    if (isLowLocalCap) {
        supplyChainActions.push({ label: 'Subcontract Manager', detail: 'Dedicated role for external specialized shops' });
    }

    const readinessTasks = [
        { task: 'ERP System Go-Live', status: 'In Progress', icon: Settings },
        { task: 'Workshop SOP Localization', status: 'Pending', icon: FileText },
        { task: 'Spare Parts Bin Location mapping', status: 'Pending', icon: Package },
        { task: 'Permit-to-Work (PTW) System Demo', status: 'Pending', icon: Shield },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Home
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-2.5 rounded-xl">
                            <Cog className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold tracking-wide uppercase">Operations Setup</h1>
                            <p className="text-white/50 text-xs font-light mt-0.5 tracking-wider">
                                WORKFLOWS & SUPPLY CHAIN | {phase1?.i9?.toUpperCase() || 'STANDALONE'} MODEL
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 flex gap-1 border-t border-white/10 pt-1">
                    {['SOPs', 'Workflows', 'Supply Chain', 'ERP Setup'].map((tab, i) => (
                        <button key={tab} className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors rounded-t-md text-white/60 hover:text-white hover:bg-white/10`}>
                            {i === 0 && <Settings className="w-3.5 h-3.5" />}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* 1. Service Scope (Logic B) */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FileText className="w-16 h-16" />
                            </div>
                            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-6">Approved Service Scope</h2>
                            <div className="space-y-3">
                                {getServiceScope().map((s, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-sm font-medium text-slate-700">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Supply Chain Strategy (Logic H) */}
                        <div className="bg-slate-800 rounded-2xl p-6 text-white">
                            <h2 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Truck className="w-4 h-4" />
                                Supply Chain Strategy
                            </h2>
                            <div className="space-y-4">
                                {supplyChainActions.map((action, i) => (
                                    <div key={i} className="border-l-2 border-emerald-500 pl-4 py-1">
                                        <p className="text-sm font-semibold mb-0.5">{action.label}</p>
                                        <p className="text-[10px] text-white/40 font-light leading-relaxed tracking-wide">{action.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. Operational Readiness Roadmap */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
                            <div className="px-7 py-5 border-b border-slate-100">
                                <h2 className="font-semibold text-slate-800 text-base">Operational Readiness Roadmap</h2>
                                <p className="text-slate-400 text-xs mt-0.5 font-light">Process and systems deployment timeline</p>
                            </div>
                            
                            <div className="p-7">
                                <div className="grid gap-6">
                                    {readinessTasks.map((task, i) => (
                                        <div key={i} className="flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#1e4b5f] group-hover:text-white transition-colors">
                                                    <task.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-700">{task.task}</p>
                                                    <p className="text-xs text-slate-400 font-light italic">Status: {task.status}</p>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-200" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 p-6 bg-slate-50 border border-dashed border-slate-200 rounded-2xl text-center">
                                    <h3 className="text-sm font-bold text-slate-800 mb-1 italic uppercase tracking-wider">Next Major Milestone</h3>
                                    <p className="text-xs text-slate-500 font-light uppercase">Full System Simulation - 3 Weeks before Go-Live</p>
                                </div>
                            </div>
                        </div>

                        {/* Knowledge Sharing */}
                        <div className="p-6 bg-[#1e4b5f] rounded-2xl text-white flex items-center justify-between shadow-lg shadow-[#1e4b5f]/10">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-xl">
                                    <Share2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">Global Knowledge Sharing</p>
                                    <p className="text-[10px] opacity-60 font-light uppercase tracking-widest mt-0.5 italic">
                                        Auto-connected to regional Service center network
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}


