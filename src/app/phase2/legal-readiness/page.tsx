import Link from 'next/link';
import { Fragment } from 'react';
import { ArrowLeft, Upload, Calendar, Gavel } from 'lucide-react';

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

const sections12 = [
    'a) Gather and review all required documentation from all shareholders',
    'b) Submission of the full application documentation to relevant Authorities',
    'c) Completion and submission of all required KYC forms including clarifications',
    'd) Engage a law firm to get a legal opinion on the tailored MoA',
    'e) Obtain pre-approval from Government Authorities for company incorporation',
    'f) Submit the amended MoA and the legal opinion to relevant govt authorities and get approval',
    'g) Execute the final MoA & AoA',
    'h) Secure HQ approval and submit the latest requested UBO (Ultimate Beneficial Owner) documentation',
    'i) Receive corporate documents (certificate of incorporation, register of members, attested MoA/AoA)',
];

const sections13 = [
    {
        sub: '1.3.1 Legal assessment on optimal presence (branch vs. legal entity)',
        rows: [
            'a) Engage a law firm for structuring',
            'b) Receive the assessment and circulate internally for feedback and comments',
            'c) Make an internal decision on the preferred local structure (branch vs. entity)',
        ],
    },
    {
        sub: '1.3.2 Country specific – operating company registration',
        rows: [
            'a) The step-by-step registration process will be confirmed once the local structure is approved',
            'b) Prepare the required incorporation documentation',
            'c) Submit the complete application package to the local regulatory authorities',
            'd) Obtain approval from the competent authorities',
            'e) Shareholding agreement signing',
            'f) Receive the corporate documents (certificate of formation, license etc.)',
        ],
    },
    {
        sub: '1.3.3 Insurance',
        rows: [
            'a) Assessment of the required insurance policies',
            'b) Addition of the local entity to Sulzer global insurance programme',
            'c) Arrangement of local policies',
        ],
    },
    {
        sub: '1.3.4 Licenses & Permits (could vary from country to country)',
        rows: [
            'a) Freezone operating licenses & industrial permits',
            'b) Import/export permissions (parts, tools & temporary import of customer equipment)',
        ],
    },
    {
        sub: '1.3.5 Ethics & Compliance (wherever applicable)',
        rows: [
            'a) Appointment of an International Trade Control Officer',
            'b) Appointment of a Compliance officer',
            'c) Initial Training on Sulzer Code of Business Conduct',
        ],
    },
    {
        sub: '1.3.6 Contracts',
        rows: [
            'a) Create new purchase agreement template (as per Sulzer standard one)',
            'b) Create new sales agreement template (as per Sulzer standard one)',
            'c) Deliver contract risk & legal awareness training',
        ],
    },
];

export default function LegalReadinessPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* ── Banner ── */}
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    <Link href="/" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Home
                    </Link>
                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Gavel className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-2xl font-semibold tracking-wide">Legal &amp; Corporate Readiness</h1>
                            </div>
                            <p className="text-white/50 text-sm font-light ml-11">Holding company setup, local entity registration &amp; compliance</p>
                        </div>
                        <div className="flex gap-4">
                            {[{ label: 'Sections', value: '2' }, { label: 'Sub-sections', value: '6' }, { label: 'Action Items', value: '24' }].map(({ label, value }) => (
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
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

                {/* Section 1.2 */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base">1.2 Country Specific Holding Company (for Joint Ventures)</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Objective: Complete all legal, regulatory, and corporate steps required to establish the holding company.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px] text-sm">
                            <TableHead />
                            <tbody>{sections12.map((item, i) => <InputRow key={i} item={item} />)}</tbody>
                        </table>
                    </div>
                </div>

                {/* Section 1.3 */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base">1.3 Local Entity Setup</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Objective: Ensure full legal establishment, registration, and compliance readiness for the local branch/entity.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1000px] text-sm">
                            <TableHead />
                            <tbody>
                                {sections13.map((group) => (
                                    <Fragment key={group.sub}>
                                        <SubSectionHeader title={group.sub} />
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
