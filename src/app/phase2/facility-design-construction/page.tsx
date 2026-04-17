'use client';

import Link from 'next/link';
import { ArrowLeft, Upload, Construction, Ruler, Zap, HardHat, CheckCircle2 } from 'lucide-react';
import { usePhase1Data } from '../utils/usePhase1Data';

export default function FacilityDesignConstructionPage() {
    const phase1 = usePhase1Data();

    // ── Logic Layer D: Layout & Infrastructure ──
    const getFootprint = () => {
        switch (phase1?.i6) {
            case 'small': return '600 – 800 m²';
            case 'medium': return '1,200 – 1,500 m²';
            case 'large': return '2,500 – 3,000 m²';
            case 'coe': return '> 5,000 m²';
            default: return '800 m² (Baseline)';
        }
    };

    const getCraneSizing = () => {
        const pl = phase1?.i3?.toLowerCase();
        if (pl === 'ems') return phase1?.i6 === 'small' ? '10 Tons' : '30–50 Tons';
        if (pl === 'ps') return '15 Tons';
        if (pl === 'ts') return '25 Tons';
        return '15 Tons';
    };

    const needsGenerator = phase1?.i1 === 'iraq' || phase1?.i1 === 'libya';

    const infrastructureSpecs = [
        { label: 'Total Workshop Footprint', value: getFootprint(), icon: Ruler },
        { label: 'Overhead Crane Capacity', value: getCraneSizing(), icon: Construction },
        { label: 'Power Requirement', value: phase1?.i6 === 'small' ? '250 kVA' : '500–1000 kVA', icon: Zap },
        { label: 'Compressed Air System', value: '10 bar / 50 cfm', icon: Construction },
    ];

    const constructionMilestones = [
        { task: 'Site Handover & Fencing', status: 'Pending', timeline: 'Week 1–2' },
        { task: 'Civil Works: Foundation & Pit digging', status: 'Pending', timeline: 'Week 3–8' },
        { task: 'Steel Internal Structure Installation', status: 'Pending', timeline: 'Week 9–14' },
        { task: 'Cladding & Roofing', status: 'Pending', timeline: 'Week 15–18' },
        { task: 'Electrical & Utility Hookup', status: 'Pending', timeline: 'Week 19–22' },
        { task: 'Internal Fit-out (Offices/Kitchen)', status: 'Pending', timeline: 'Week 20–24' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    <Link href="/phase2" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Home
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-lg">
                            <Construction className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold tracking-wide uppercase">Facility Design & Infrastructure</h1>
                            <p className="text-white/50 text-sm font-light mt-0.5">
                                Workshop design for {phase1?.i3 || 'CORE'} PL | {phase1?.i1 || 'GLOBAL'} Standards
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* 1. Infrastructure Specifications */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6 flex items-center gap-2">
                             Infrastructure Specs
                        </h2>
                        <div className="space-y-5">
                            {infrastructureSpecs.map((spec, i) => {
                                const Icon = spec.icon;
                                return (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1e4b5f]">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">{spec.label}</p>
                                            <p className="text-sm text-slate-700 font-semibold">{spec.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {needsGenerator && (
                            <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-lg flex gap-3 items-start">
                                <Zap className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-xs font-bold text-amber-900 uppercase">Utility Uplift Required</p>
                                    <p className="text-xs text-amber-700 font-light mt-1">Due to local reliability profile ({phase1?.i1}), a 500kVA backup generator is included in specifications.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* 2. Build-out Timeline */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-slate-800 px-7 py-5">
                            <h2 className="font-semibold text-white text-base">Civil Works & Construction Timeline</h2>
                            <p className="text-white/60 text-xs mt-0.5 font-light">Critical path based on {phase1?.i10 || 'standard'} target window</p>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-widest border-b border-slate-100">
                                        <th className="px-6 py-4 text-left">Milestone Task</th>
                                        <th className="px-4 py-4 text-center">Standard Timeline</th>
                                        <th className="px-4 py-4 text-center">Status</th>
                                        <th className="px-6 py-4 text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {constructionMilestones.map((milestone, i) => (
                                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                                                    <span className="text-slate-700 font-medium">{milestone.task}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-center text-slate-500 font-light">{milestone.timeline}</td>
                                            <td className="px-4 py-4 text-center text-slate-400 font-light italic">Pending</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-[10px] uppercase font-bold text-[#1e4b5f] hover:underline">Update</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="p-6 bg-[#1e4b5f] rounded-xl text-white flex items-center justify-between">
                        <div>
                            <p className="text-xs uppercase font-bold tracking-widest opacity-60 mb-1">Estimated Readiness</p>
                            <p className="text-xl font-light">Facility Complete: <span className="font-semibold">6 months Day-0</span></p>
                        </div>
                        <CheckCircle2 className="w-10 h-10 opacity-20" />
                    </div>
                </div>

            </div>
        </div>
    );
}


