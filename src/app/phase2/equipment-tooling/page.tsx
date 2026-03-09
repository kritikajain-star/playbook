import Link from 'next/link';
import { Fragment } from 'react';
import { ArrowLeft, Upload, Calendar, Settings } from 'lucide-react';

const InputRow = ({ item }: { item: string }) => (
    <tr className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors">
        <td className="px-6 py-3.5 text-sm text-slate-700 font-light leading-relaxed w-2/5">{item}</td>
        <td className="px-3 py-3">
            <input type="text" placeholder="Enter owner" className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
        </td>
        <td className="px-3 py-3">
            <input type="text" placeholder="Enter team" className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
        </td>
        <td className="px-3 py-3">
            <div className="relative">
                <input type="text" placeholder="mm/dd/yyyy" className="w-full border border-slate-200 rounded-lg px-3 py-1.5 pr-8 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
                <Calendar className="w-3.5 h-3.5 text-slate-300 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
        </td>
        <td className="px-3 py-3">
            <div className="relative">
                <input type="text" placeholder="mm/dd/yyyy" className="w-full border border-slate-200 rounded-lg px-3 py-1.5 pr-8 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
                <Calendar className="w-3.5 h-3.5 text-slate-300 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
        </td>
        <td className="px-3 py-3">
            <input type="text" placeholder="Enter status" className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
        </td>
    </tr>
);

const SubSectionHeader = ({ title }: { title: string }) => (
    <tr className="bg-slate-50">
        <td colSpan={6} className="px-6 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-widest border-y border-slate-100">{title}</td>
    </tr>
);

const TableHead = () => (
    <thead>
        <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
            <th className="px-6 py-3 font-medium text-left w-2/5">Item</th>
            <th className="px-3 py-3 font-medium text-left">Owner</th>
            <th className="px-3 py-3 font-medium text-left">Support Team</th>
            <th className="px-3 py-3 font-medium text-left">Start Date</th>
            <th className="px-3 py-3 font-medium text-left">Target Date</th>
            <th className="px-3 py-3 font-medium text-left">Status</th>
        </tr>
    </thead>
);

const groups = [
    {
        label: 'Pump Services (Small)',
        rows: ['Light lathe (1 m bed)', 'Drill press', 'Hydraulic pullers', 'Portable alignment lasers', 'Hydro test bench (low pressure)', 'Hand tools, torque wrench sets', 'Cleaning machine / wash bay setup'],
    },
    {
        label: 'EMS (Small)',
        rows: ['Coil winding machine (LV)', 'Small electric oven', 'VPI (optional for small, usually absent)', 'Electrical test bench (surge tester, megger, resistance tester)', 'Balancing machine (small rotors)', 'Varnish tanks', 'Motor lifting fixtures'],
    },
];

export default function EquipmentToolingPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* ── Banner ── */}
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    <Link href="/phase2" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Phase 2 – Implementation
                    </Link>
                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Settings className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-2xl font-semibold tracking-wide">Equipment &amp; Tooling</h1>
                            </div>
                            <p className="text-white/50 text-sm font-light ml-11">Master list of all necessary equipment and tooling for operations</p>
                        </div>
                        <div className="flex gap-4">
                            {[{ label: 'PSC Items', value: '7' }, { label: 'EMS Items', value: '7' }, { label: 'Total', value: '14' }].map(({ label, value }) => (
                                <div key={label} className="bg-white/10 rounded-lg px-4 py-2.5 text-center min-w-[90px]">
                                    <p className="text-lg font-bold">{value}</p>
                                    <p className="text-white/50 text-[10px] uppercase tracking-wider mt-0.5">{label}</p>
                                </div>
                            ))}
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

            {/* ── Content ── */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base">Equipment &amp; Tooling – Master List</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Objective: Ensure all necessary equipment and tooling are available and properly configured for operations.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px] text-sm">
                            <TableHead />
                            <tbody>
                                {groups.map((group) => (
                                    <Fragment key={group.label}>
                                        <SubSectionHeader title={group.label} />
                                        {group.rows.map((item, i) => <InputRow key={i} item={item} />)}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
