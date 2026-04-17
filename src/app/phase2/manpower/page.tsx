'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { ArrowLeft, Upload, Users, BookOpen, Award, Share2 } from 'lucide-react';

/* ─────────────────────────────── DATA ─────────────────────────────── */

const coreTeam = [
    {
        group: 'Management & Administration',
        rows: [
            { role: 'Workshop Manager', day1: '1', year2: '1', responsibilities: 'Overall operations, P&L, HSE, customer relations', staffType: 'Expat' as const },
            { role: 'Operations Coordinator / Planner', day1: '1', year2: '1–2', responsibilities: 'Job scheduling, materials, documentation', staffType: 'Local' as const },
            { role: 'QA/QC Inspector', day1: '1', year2: '1–2', responsibilities: 'Inspection, testing, compliance, certification', staffType: 'Expat' as const },
        ],
    },
    {
        group: 'Pump Services (PSC)',
        rows: [
            { role: 'Pump Technician / Supervisor', day1: '1', year2: '1–2', responsibilities: 'Lead pump strip/assembly, technical approvals', staffType: 'Expat' as const },
            { role: 'Pump Technician (Mid-level)', day1: '2–3', year2: '3–4', responsibilities: 'Pump disassembly, repair, assembly, testing', staffType: 'Local' as const },
            { role: 'Machinist / Fitter', day1: '1', year2: '1–2', responsibilities: 'Light machining, fitting, bushing installation', staffType: 'Local' as const },
        ],
    },
    {
        group: 'Electrical Motor Services (EMS)',
        rows: [
            { role: 'Electrical Supervisor / Lead Winder', day1: '1', year2: '1', responsibilities: 'Motor strip, winding design, electrical testing', staffType: 'Expat' as const },
            { role: 'Motor Winder', day1: '1–2', year2: '2–3', responsibilities: 'Coil winding, insertion, connections', staffType: 'Local' as const },
            { role: 'Electrical Technician / Tester', day1: '1', year2: '1–2', responsibilities: 'Electrical testing, balancing, commissioning', staffType: 'Local' as const },
        ],
    },
    {
        group: 'Support Functions',
        rows: [
            { role: 'HSE Officer (shared/part-time initially)', day1: '0.5', year2: '1', responsibilities: 'Safety inspections, training, incident management', staffType: 'Local' as const },
            { role: 'Stores / Materials Coordinator', day1: '1', year2: '1', responsibilities: 'Parts management, inventory, receiving/dispatch', staffType: 'Local' as const },
            { role: 'Helper / General Worker', day1: '2', year2: '2–3', responsibilities: 'Cleaning, material handling, general support', staffType: 'Local' as const },
        ],
    },
];

const recruitmentPoints = [
    { label: 'Local hire priority', detail: 'Recruit technical staff from existing industrial/service sectors in the region' },
    { label: 'Expatriate support (optional)', detail: '1–2 expat technicians for initial setup and knowledge transfer (6–12 months)' },
    { label: 'Apprenticeship program', detail: 'Develop pipeline with local technical schools/institutes' },
    { label: 'Key roles to fill first', detail: 'Workshop Manager, QA/QC Inspector, Senior Technicians (PSC & EMS)' },
    { label: 'Phased hiring', detail: 'Core team (Day-1) → Expand based on order book (Month 3–6)' },
];

const trainingModules = [
    {
        group: 'HSE & Compliance (Mandatory for All)',
        rows: [
            { module: 'Site Safety Induction', audience: 'All staff', duration: '4 hours', delivery: 'Classroom + Site walk', timing: 'Day 1' },
            { module: 'Lifting & Rigging Safety', audience: 'All technicians', duration: '1 day', delivery: 'Practical + certification', timing: 'Week 1' },
            { module: 'Hazardous Materials Handling', audience: 'All technicians', duration: '0.5 day', delivery: 'Classroom', timing: 'Week 1' },
            { module: 'Electrical Safety (Lock-Out/Tag-Out)', audience: 'EMS staff + supervisors', duration: '1 day', delivery: 'Practical + certification', timing: 'Week 2' },
        ],
    },
    {
        group: 'Technical Skills – Pump Services (PSC)',
        rows: [
            { module: 'Centrifugal Pump Fundamentals', audience: 'PSC technicians', duration: '3 days', delivery: 'Classroom + hands-on', timing: 'Week 2–3' },
            { module: 'Pump Disassembly & Inspection', audience: 'PSC technicians', duration: '2 days', delivery: 'Practical workshop', timing: 'Week 3' },
            { module: 'Alignment & Balancing Techniques', audience: 'Senior PSC technicians', duration: '2 days', delivery: 'Equipment training', timing: 'Week 4' },
            { module: 'Hydrostatic Testing & Commissioning', audience: 'PSC technicians + QA', duration: '1 day', delivery: 'Practical + procedures', timing: 'Week 4' },
        ],
    },
    {
        group: 'Technical Skills – Electrical Motor Services (EMS)',
        rows: [
            { module: 'Motor Theory & Construction', audience: 'EMS staff', duration: '2 days', delivery: 'Classroom', timing: 'Week 2' },
            { module: 'Motor Stripping & Insulation Removal', audience: 'EMS winders', duration: '2 days', delivery: 'Practical workshop', timing: 'Week 3' },
            { module: 'Coil Winding & Insertion (LV Motors)', audience: 'EMS winders', duration: '5 days', delivery: 'Hands-on supervised', timing: 'Week 3–4' },
            { module: 'Varnish Application & Baking', audience: 'EMS technicians', duration: '1 day', delivery: 'Practical + procedures', timing: 'Week 4' },
            { module: 'Electrical Testing (Megger, Surge, HiPot)', audience: 'EMS testers + QA', duration: '2 days', delivery: 'Equipment training', timing: 'Week 4–5' },
            { module: 'Motor Balancing & Vibration Analysis', audience: 'Senior EMS technicians', duration: '2 days', delivery: 'Equipment training', timing: 'Week 5' },
        ],
    },
    {
        group: 'Quality & Documentation',
        rows: [
            { module: 'Quality Management System (QMS) Overview', audience: 'All technicians + QA', duration: '0.5 day', delivery: 'Classroom', timing: 'Week 2' },
            { module: 'Job Documentation & Reporting', audience: 'All technicians', duration: '0.5 day', delivery: 'Classroom + ERP demo', timing: 'Week 3' },
            { module: 'Customer Certificate Preparation', audience: 'QA + supervisors', duration: '0.5 day', delivery: 'Workshop review', timing: 'Week 5' },
        ],
    },
];

const governancePoints = [
    { label: 'Competency Assessment', detail: 'Formal assessment after each technical module (pass/fail with remedial training if required)' },
    { label: 'Certification Records', detail: 'Maintain training matrix in HR system + physical certificates in personnel files' },
    { label: 'Refresher Training', detail: 'Annual refresher for HSE modules; biennial for technical competencies' },
    { label: 'On-the-Job Training (OJT)', detail: 'Minimum 4 weeks supervised OJT post-classroom training before independent work' },
    { label: 'External Certifications', detail: 'Pursue industry certifications where applicable (e.g., EASA for EMS, API for pumps)' },
    { label: 'Training Budget', detail: 'Allocate 3–5% of annual payroll for ongoing training and development' },
];

const knowledgeTransferPoints = [
    { label: 'Mentorship Program', detail: 'Pair new hires with experienced technicians from established workshops (4–8 weeks)' },
    { label: 'Job Shadowing', detail: 'Send 2–3 key staff to mature operations for immersive learning (2–4 weeks)' },
    { label: 'Expert Visits', detail: 'Bring in technical specialists for specific training sessions during setup phase' },
    { label: 'Standard Operating Procedures (SOPs)', detail: 'Leverage existing SOP library and customize for local operations' },
    { label: 'Technical Support Network', detail: 'Establish hotline/remote support from regional technical experts during ramp-up' },
];

function SectionCard({ title, subtitle, accent, children }: {
    title: string; subtitle?: string; accent: string; children: React.ReactNode;
}) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className={`px-7 py-5 border-b border-slate-100 ${accent}`}>
                <h2 className="font-semibold text-base text-white tracking-wide">{title}</h2>
                {subtitle && <p className="text-xs text-white/70 mt-0.5 font-light">{subtitle}</p>}
            </div>
            {children}
        </div>
    );
}

function SubHeader({ title }: { title: string }) {
    return (
        <tr className="bg-slate-50">
            <td colSpan={99} className="px-6 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-widest border-y border-slate-100">
                {title}
            </td>
        </tr>
    );
}

function Pill({ value, color }: { value: string; color: string }) {
    return (
        <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold ${color}`}>
            {value}
        </span>
    );
}

function BulletCard({ points, dotColor }: { points: { label: string; detail: string }[]; dotColor: string }) {
    return (
        <div className="grid gap-3 p-6">
            {points.map((pt, i) => (
                <div key={i} className="flex gap-3 items-start">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${dotColor}`} />
                    <p className="text-sm leading-relaxed">
                        <span className="font-medium text-slate-800">{pt.label}:</span>{' '}
                        <span className="text-slate-500 font-light">{pt.detail}</span>
                    </p>
                </div>
            ))}
        </div>
    );
}

/* ─────────────────────────────── PAGE ─────────────────────────────── */

import { usePhase1Data } from '../utils/usePhase1Data';

export default function ManpowerPage() {
    const phase1 = usePhase1Data();

    // ── Logic Layer F: Manpower & Organization ──
    // Determine scale factor based on Intake (I4) and Scale (I6)
    const getScaleFactor = () => {
        let factor = 1.0;
        if (phase1?.i4 === '5m_10m') factor = 1.5;
        if (phase1?.i4 === '10m_20m') factor = 2.5;
        if (phase1?.i4 === 'over_20m') factor = 4.0;

        // Scale adjustment
        if (phase1?.i6 === 'medium') factor *= 1.2;
        if (phase1?.i6 === 'large') factor *= 1.8;
        if (phase1?.i6 === 'coe') factor *= 2.5;

        return factor;
    };

    const scale = getScaleFactor();
    const activePL = phase1?.i3?.toLowerCase() || 'ps'; // Default to ps if not set

    // Helper to scale headcount strings "1" or "2-3"
    const scaleHeadcount = (val: string, s: number) => {
        if (!val.includes('–') && !val.includes('-')) {
            const num = parseFloat(val);
            if (isNaN(num)) return val;
            const scaled = Math.max(1, Math.round(num * s));
            return scaled.toString();
        }
        const [min, max] = val.split(/[–-]/).map(v => parseFloat(v));
        return `${Math.max(1, Math.round(min * s))}–${Math.max(1, Math.round(max * s))}`;
    };

    // Derived core team based on Product Line (I3) and Volume (I4)
    const filteredCoreTeam = [
        coreTeam[0], // Management always included
        ...coreTeam.filter(g => {
            if (g.group.includes('Pump Services') && activePL === 'ps') return true;
            if (g.group.includes('Electrical Motor Services') && activePL === 'ems') return true;
            if (g.group.includes('Turbo Services') && activePL === 'ts') return true;
            return false;
        }),
        coreTeam[3], // Support always included
    ].map(group => ({
        ...group,
        rows: group.rows.map(row => ({
            ...row,
            day1: scaleHeadcount(row.day1, scale),
            year2: scaleHeadcount(row.year2, scale)
        }))
    }));

    // Calculate totals
    const calculateTotal = (isDay1: boolean) => {
        let totalMin = 0;
        let totalMax = 0;
        filteredCoreTeam.forEach(g => {
            g.rows.forEach(r => {
                const val = isDay1 ? r.day1 : r.year2;
                if (val.includes('–') || val.includes('-')) {
                    const [min, max] = val.split(/[–-]/).map(v => parseFloat(v));
                    totalMin += min;
                    totalMax += max;
                } else {
                    const n = parseFloat(val);
                    totalMin += n;
                    totalMax += n;
                }
            });
        });
        return totalMin === totalMax ? totalMin.toString() : `${totalMin}–${totalMax}`;
    };

    const day1Total = calculateTotal(true);
    const year2Total = calculateTotal(false);

    // Filter training modules based on active PL
    const filteredTraining = trainingModules.filter(g => {
        if (g.group.includes('HSE')) return true;
        if (g.group.includes('Quality')) return true;
        if (g.group.includes('Pump Services') && activePL === 'ps') return true;
        if (g.group.includes('Electrical Motor Services') && activePL === 'ems') return true;
        if (g.group.includes('Turbo Services') && activePL === 'ts') return true;
        return false;
    });

    return (
        <div className="min-h-screen bg-slate-50 font-sans">

            {/* ── Top Banner ── */}
            <div className="bg-[#1e4b5f] text-white">
                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
                    {/* Breadcrumb */}
                    <Link
                        href="/phase2"
                        className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-light transition-colors mb-6"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Home
                    </Link>

                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="bg-white/10 p-2 rounded-lg">
                                    <Users className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-2xl font-semibold tracking-wide">Manpower & Organization</h1>
                            </div>
                            <p className="text-white/50 text-sm font-light ml-11 uppercase leading-tight">
                                STAFFING PLAN, TRAINING MATRIX & KNOWLEDGE TRANSFER | {phase1?.i3 || 'CORE'} - {phase1?.i6 || 'SMALL'}
                            </p>
                        </div>

                        {/* Stats strip */}
                        <div className="flex gap-4">
                            {[
                                { label: 'Day-1 Staff', value: day1Total },
                                { label: 'Year 2 Target', value: year2Total },
                                { label: 'Training Modules', value: filteredTraining.flatMap(g => g.rows).length.toString() },
                            ].map(({ label, value }) => (
                                <div key={label} className="bg-white/10 rounded-lg px-4 py-2.5 text-center min-w-[90px]">
                                    <p className="text-lg font-bold">{value}</p>
                                    <p className="text-white/50 text-[10px] uppercase tracking-wider mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Content ── */}
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">

                {/* ── 1. Manpower Required ── */}
                <SectionCard
                    title="1. Manpower Required"
                    subtitle="Core team structure for Day-1 and Year 2 growth"
                    accent="bg-[#1e4b5f]"
                >
                    {/* 1.1 Core Team Table */}
                    <div className="px-7 pt-5 pb-2">
                        <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <span className="w-1 h-4 rounded-full bg-[#1e4b5f] inline-block" />
                            1.1 Core Team Structure  --  {phase1?.i6 || 'small'} Workshop
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px] text-sm">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-y border-slate-100">
                                    <th className="px-6 py-3 font-medium text-left w-1/4">Role / Position</th>
                                    <th className="px-4 py-3 font-medium text-center">Day-1</th>
                                    <th className="px-4 py-3 font-medium text-center">Year 2</th>
                                    <th className="px-4 py-3 font-medium text-left">Key Responsibilities</th>
                                    <th className="px-4 py-3 font-medium text-center">Staff Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCoreTeam.map((group) => (
                                    <Fragment key={group.group}>
                                        <SubHeader title={group.group} />
                                        {group.rows.map((row, i) => (
                                            <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors">
                                                <td className="px-6 py-3.5 text-slate-800 font-light">{row.role}</td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <Pill value={row.day1} color="bg-[#1e4b5f]/10 text-[#1e4b5f]" />
                                                </td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <Pill value={row.year2} color="bg-emerald-50 text-emerald-700" />
                                                </td>
                                                <td className="px-4 py-3.5 text-slate-500 font-light leading-relaxed">{row.responsibilities}</td>
                                                <td className="px-4 py-3.5 text-center">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                                        row.staffType === 'Expat'
                                                            ? 'bg-orange-50 text-orange-700 ring-1 ring-orange-200'
                                                            : 'bg-sky-50 text-sky-700 ring-1 ring-sky-200'
                                                    }`}>
                                                        {row.staffType}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                                {/* Total */}
                                <tr className="bg-[#1e4b5f] text-white text-sm font-medium">
                                    <td className="px-6 py-4">TOTAL</td>
                                    <td className="px-4 py-4 text-center text-base font-bold">{day1Total}</td>
                                    <td className="px-4 py-4 text-center text-base font-bold">{year2Total}</td>
                                    <td className="px-4 py-4 font-light text-white/70">Scalable based on workload ({phase1?.i6 || 'small'} focus)</td>
                                    <td className="px-4 py-4"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* 1.2 Recruitment Strategy */}
                    <div className="px-7 pt-6 pb-2 border-t border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                            <span className="w-1 h-4 rounded-full bg-[#1e4b5f] inline-block" />
                            1.2 Recruitment Strategy (Minimum)
                        </h3>
                    </div>
                    <BulletCard points={recruitmentPoints} dotColor="bg-[#1e4b5f]" />
                </SectionCard>

                {/* ── 2. Training Matrix ── */}
                <SectionCard
                    title="2. Training Matrix"
                    subtitle="Competency development and certification requirements"
                    accent="bg-slate-700"
                >
                    {/* 2.1 — Blue */}
                    <div className="border-b border-slate-100">
                        <div className="flex items-center gap-3 px-7 pt-5 pb-4">
                            <div className="bg-blue-100 p-1.5 rounded-lg">
                                <BookOpen className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-blue-900">2.1 Mandatory Training Requirements</h3>
                                <p className="text-xs text-slate-400 font-light mt-0.5">All modules required before independent operation</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[900px] text-sm">
                                <thead>
                                    <tr className="bg-blue-50 text-blue-700 text-xs uppercase tracking-wider border-y border-blue-100">
                                        <th className="px-6 py-3 font-medium text-left w-1/3">Training Module</th>
                                        <th className="px-4 py-3 font-medium text-left">Target Audience</th>
                                        <th className="px-4 py-3 font-medium text-center">Duration</th>
                                        <th className="px-4 py-3 font-medium text-left">Delivery Method</th>
                                        <th className="px-4 py-3 font-medium text-center">Timing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTraining.map((group) => (
                                        <Fragment key={group.group}>
                                            <tr className="bg-blue-50/60">
                                                <td colSpan={5} className="px-6 py-2 text-xs font-semibold text-blue-800 uppercase tracking-wider border-y border-blue-100/80">
                                                    {group.group}
                                                </td>
                                            </tr>
                                            {group.rows.map((row, i) => (
                                                <tr key={i} className="border-b border-slate-50 hover:bg-blue-50/30 transition-colors">
                                                    <td className="px-6 py-3.5 text-slate-800 font-light">{row.module}</td>
                                                    <td className="px-4 py-3.5 text-slate-500 font-light">{row.audience}</td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <Pill value={row.duration} color="bg-blue-50 text-blue-700" />
                                                    </td>
                                                    <td className="px-4 py-3.5 text-slate-500 font-light">{row.delivery}</td>
                                                    <td className="px-4 py-3.5 text-center">
                                                        <Pill value={row.timing} color="bg-indigo-50 text-indigo-600" />
                                                    </td>
                                                </tr>
                                            ))}
                                        </Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 2.2 — Amber */}
                    <div className="border-b border-slate-100">
                        <div className="flex items-center gap-3 px-7 pt-5 pb-2">
                            <div className="bg-amber-100 p-1.5 rounded-lg">
                                <Award className="w-4 h-4 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-amber-900">2.2 Training Governance &amp; Certification</h3>
                                <p className="text-xs text-slate-400 font-light mt-0.5">Policies and standards for training oversight</p>
                            </div>
                        </div>
                        <div className="bg-amber-50/30 pb-2">
                            <BulletCard points={governancePoints} dotColor="bg-amber-400" />
                        </div>
                    </div>

                    {/* 2.3 — Teal */}
                    <div>
                        <div className="flex items-center gap-3 px-7 pt-5 pb-2">
                            <div className="bg-teal-100 p-1.5 rounded-lg">
                                <Share2 className="w-4 h-4 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-teal-900">2.3 Knowledge Transfer from Existing Operations</h3>
                                <p className="text-xs text-slate-400 font-light mt-0.5">Accelerating ramp-up through institutional knowledge</p>
                            </div>
                        </div>
                        <div className="bg-teal-50/30 pb-2">
                            <BulletCard points={knowledgeTransferPoints} dotColor="bg-teal-500" />
                        </div>
                    </div>
                </SectionCard>

            </div>
        </div>
    );
}

