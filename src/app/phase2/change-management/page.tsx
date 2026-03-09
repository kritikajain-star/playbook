import Link from 'next/link';
import { ArrowLeft, Upload, RefreshCcw } from 'lucide-react';

export default function ChangeManagementPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    <Link href="/phase2" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Phase 2 – Implementation
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-lg">
                            <RefreshCcw className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold tracking-wide">Change Management</h1>
                            <p className="text-white/50 text-sm font-light mt-0.5">Transition planning, stakeholder engagement &amp; communication strategy</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 flex gap-1 border-t border-white/10 pt-1">
                    {['MMR', 'Permits', 'Licenses', 'Environmental Checks'].map((tab, i) => (
                        <button key={tab} className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors rounded-t-md ${i === 0 ? 'bg-slate-50 text-[#1e4b5f]' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>
                            {i === 0 && <Upload className="w-3.5 h-3.5" />}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="bg-[#1e4b5f] px-7 py-5 rounded-t-xl">
                        <h2 className="font-semibold text-white text-base">Change Management</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Content for this section will be added here.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center py-24 text-center px-8">
                        <div className="bg-slate-100 rounded-full p-5 mb-4">
                            <RefreshCcw className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-slate-600 font-medium mb-1">Content Coming Soon</h3>
                        <p className="text-slate-400 text-sm font-light max-w-sm">Transition planning, stakeholder communications and change readiness assessments will be added here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
