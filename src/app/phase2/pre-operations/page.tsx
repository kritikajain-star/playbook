import Link from 'next/link';
import { ArrowLeft, Upload, Activity, ArrowRight } from 'lucide-react';

const zones = [
    { zone: 'Receiving & Quarantine', size: '50–80 m²', purpose: 'Incoming inspection, tagging, oil drain' },
    { zone: 'Disassembly / Assembly Bay', size: '150–250 m²', purpose: 'Pumps, motors, gearboxes' },
    { zone: 'EMS Electrical Bay', size: '120–180 m²', purpose: 'Motor strip, winding removal, assembly' },
    { zone: 'Machining / Fitting Corner', size: '60–100 m²', purpose: 'Light machining, fits, bushings' },
    { zone: 'Testing Bay (Shared PSC/EMS)', size: '120–180 m²', purpose: 'Pump run test / motor no-load test' },
    { zone: 'Spares & Consumables Store', size: '50–80 m²', purpose: 'Controlled storage' },
    { zone: 'Utilities & Compressor Room', size: '30–40 m²', purpose: 'Isolated for noise and heat' },
];

const flowSteps = ['Receiving', 'Disassembly', 'Repair', 'Assembly', 'Test', 'Dispatch'];

export default function PreOperationsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* ── Banner ── */}
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    <Link href="/phase2" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Home
                    </Link>
                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Activity className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-2xl font-semibold tracking-wide">Pre-Operations</h1>
                            </div>
                            <p className="text-white/50 text-sm font-light ml-11">Workshop footprint, functional zoning &amp; layout planning</p>
                        </div>
                        <div className="flex gap-4">
                            {[{ label: 'Target Area', value: '600–900 m²' }, { label: 'Zones', value: '7' }, { label: 'Flow Steps', value: '6' }].map(({ label, value }) => (
                                <div key={label} className="bg-white/10 rounded-lg px-4 py-2.5 text-center min-w-[90px]">
                                    <p className="text-base font-bold">{value}</p>
                                    <p className="text-white/50 text-[10px] uppercase tracking-wider mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base">1. Workshop Footprint &amp; Layout (Small PSC + EMS)</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Target total covered area (minimum): <span className="text-white font-semibold">600–900 m²</span></p>
                    </div>

                    {/* Sub-header */}
                    <div className="px-7 py-4 border-b border-slate-100 bg-slate-50">
                        <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <span className="w-1 h-4 rounded-full bg-[#1e4b5f] inline-block" />
                            1.1 Functional Zoning (Mandatory)
                        </h3>
                    </div>

                    {/* Zones Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-sm">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
                                    <th className="px-6 py-3 font-medium text-left w-2/5">Zone</th>
                                    <th className="px-4 py-3 font-medium text-left">Typical Size</th>
                                    <th className="px-4 py-3 font-medium text-left">Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                {zones.map((row, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors">
                                        <td className="px-6 py-3.5 font-medium text-slate-800">{row.zone}</td>
                                        <td className="px-4 py-3.5">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#1e4b5f]/10 text-[#1e4b5f] whitespace-nowrap">{row.size}</span>
                                        </td>
                                        <td className="px-4 py-3.5 text-slate-500 font-light">{row.purpose}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Layout Rule */}
                    <div className="px-7 py-6 border-t border-slate-100 bg-slate-50/50">
                        <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-2">
                            <span className="w-1 h-4 rounded-full bg-[#1e4b5f] inline-block" />
                            Layout Rule (Minimum)
                        </h3>
                        <p className="text-sm text-slate-500 font-light mb-5">
                            Linear workflow shall be maintained to ensure safe, efficient material and equipment flow:
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                            {flowSteps.map((step, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="bg-[#1e4b5f] text-white text-sm font-medium px-5 py-2 rounded-lg shadow-sm">{step}</div>
                                    {i < flowSteps.length - 1 && <ArrowRight className="w-4 h-4 text-[#1e4b5f]" />}
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-slate-400 font-light mt-5 italic">
                            This layout principle is reinforced by EMS workspace optimisation examples referenced in internal Viva Engage material ("Improving Safety and Efficiency Through 5S").
                        </p>
                    </div>
                </div>

                {/* ── Floor Plan Diagram ── */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            Workshop Floor Plan
                        </h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Reference layout diagram for workshop zoning and equipment placement</p>
                    </div>
                    <div className="p-6">
                        <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
                            <img
                                src="/images/floor-plan.jfif"
                                alt="Workshop Floor Plan – Functional Zoning & Equipment Layout"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <p className="text-xs text-slate-400 font-light mt-3 italic text-center">
                            Figure: Workshop floor plan illustrating functional zones and linear workflow layout.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

