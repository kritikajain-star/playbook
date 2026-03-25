'use client';

import Link from 'next/link';
import { ArrowLeft, Upload, PlayCircle, ShieldCheck, Gauge, RefreshCcw, CheckCircle2, AlertTriangle, Target, Clock } from 'lucide-react';
import { usePhase1Data } from '../utils/usePhase1Data';

export default function GoLiveImprovementPage() {
    const phase1 = usePhase1Data();

    const isFastTrack = phase1?.i10 === 'fast_track';
    const isHighRisk = phase1?.i1 === 'iraq' || phase1?.i1 === 'libya';
    const isPhase1Only = phase1?.i7 === 'phase1';

    const readinessGates = [
        { task: 'Operational Staff Fully Trained & Certified', category: 'Manpower', critical: true },
        { task: 'Workshop Utilities & Machinery Commissioned', category: 'Infrastructure', critical: true },
        { task: 'Local Legal Entity & Tax ID Active', category: 'Legal', critical: true },
        { task: 'IT Systems / ERP Connection established', category: 'Back-office', critical: false },
        { task: 'HSE Audit & Permit to Work system live', category: 'HSE', critical: true },
    ];

    // Dynamic Injection based on logic map
    if (isHighRisk) {
        readinessGates.push({ task: 'Security PSD & Site Assessment Passed', category: 'Security', critical: true });
    }
    if (isPhase1Only) {
        readinessGates.push({ task: 'Phase 1 Scope specific QMS certification', category: 'Quality', critical: true });
    }

    const kpis = [
        { label: 'Utilization', target: phase1?.i6 === 'small' ? '80%' : '65%', desc: 'Bay occupancy rate' },
        { label: 'Turnaround Time', target: '4-6 weeks', desc: 'Average job completion' },
        { label: 'HSE Incident Rate', target: '0', desc: 'Zero harm goal' },
        { label: 'First Pass Yield', target: '>98%', desc: 'QC acceptance rate' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Home
                    </Link>
                    <div className="flex items-center justify-between flex-wrap gap-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <PlayCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-semibold tracking-wide uppercase">Go-Live Readiness</h1>
                                <p className="text-white/50 text-sm font-light mt-0.5">
                                    Execution Strategy: <span className="text-white font-medium">{isFastTrack ? 'FAST TRACK' : 'STANDARD'}</span> | 
                                    Scale: <span className="text-white font-medium capitalize">{phase1?.i6 || 'Small'}</span>
                                </p>
                            </div>
                        </div>

                        {isFastTrack && (
                            <div className="px-4 py-2 bg-amber-500/20 rounded-xl border border-amber-500/30 flex items-center gap-3">
                                <Clock className="w-4 h-4 text-amber-400" />
                                <span className="text-xs font-bold text-amber-50 uppercase tracking-wider">Compression Logic Active</span>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="max-w-7xl mx-auto px-6 flex gap-1 border-t border-white/10 pt-1">
                    {['Readiness Checklist', 'KPI Setup', 'Hypercare', 'Feedback Loop'].map((tab, i) => (
                        <button key={tab} className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors rounded-t-md text-white/60 hover:text-white hover:bg-white/10`}>
                            {i === 0 && <ShieldCheck className="w-3.5 h-3.5" />}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* 1. Readiness checklist - Centerpiece */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-7 py-5 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h2 className="font-semibold text-slate-800 text-base">Go-Live Readiness Gates</h2>
                                <p className="text-slate-400 text-xs mt-0.5 font-light">Mandatory items required before workshop opening</p>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider mb-1">Overall Progress</span>
                                <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="w-1/3 h-full bg-[#1e4b5f]" />
                                </div>
                            </div>
                        </div>

                        <div className="divide-y divide-slate-50">
                            {readinessGates.map((gate, i) => (
                                <div key={i} className="px-7 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors group">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1.5 w-4 h-4 rounded-full border-2 border-slate-200 group-hover:border-[#1e4b5f] flex-shrink-0" />
                                        <div>
                                            <p className="text-sm text-slate-700 font-medium">{gate.task}</p>
                                            <div className="flex items-center gap-3 mt-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                <span>Category: {gate.category}</span>
                                                {gate.critical && (
                                                    <span className="flex items-center gap-1 text-red-500">
                                                        <AlertTriangle className="w-2.5 h-2.5" />
                                                        CRITICAL PATH
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-[10px] font-bold uppercase text-[#1e4b5f] opacity-0 group-hover:opacity-100 transition-opacity">Complete</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar: Dashboard & KPIs */}
                <div className="lg:col-span-4 space-y-6">
                    
                    {/* Launch Status Card */}
                    <div className="bg-[#1e4b5f] rounded-xl p-6 text-white text-center shadow-lg shadow-[#1e4b5f]/20">
                        <PlayCircle className="w-12 h-12 mx-auto opacity-20 mb-4 text-emerald-400" />
                        <h3 className="text-lg font-light mb-1">Estimated Launch</h3>
                        <p className="text-4xl font-bold mb-6 italic tracking-tight">T-minus 122 <span className="text-base font-light opacity-60 ml-1">Days</span></p>
                        <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-xl text-sm font-bold shadow-md">
                            VIEW FULL SCHEDULE
                        </button>
                    </div>

                    {/* KPIs */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-6 flex items-center gap-2">
                             <Target className="w-4 h-4 text-[#1e4b5f]" />
                             Post-Launch KPIs
                        </h2>
                        <div className="space-y-6">
                            {kpis.map((kpi, i) => (
                                <div key={i}>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="text-xs font-medium text-slate-500">{kpi.label}</span>
                                        <span className="text-sm font-bold text-slate-800">{kpi.target}</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-light">{kpi.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Continuous Improvement */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
                                <RefreshCcw className="w-4 h-4" />
                            </div>
                            <h2 className="text-sm font-bold text-slate-800">Improvement Cycle</h2>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-light mb-4">
                            Post-go-live "Hypercare" period lasts 12 weeks. Feedback loops from customers and mechanics analyzed every 4 weeks.
                        </p>
                        <div className="p-3 bg-indigo-50/50 rounded-lg text-xs text-indigo-700 font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Standard SOP Review active
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}


