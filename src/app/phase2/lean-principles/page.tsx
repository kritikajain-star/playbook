import Link from 'next/link';
import { ArrowLeft, Zap, GitBranch, BarChart3, Layout, Lightbulb, ArrowRight } from 'lucide-react';

const floorLayoutSteps = [
    'Select a small team of key stakeholders (maximum 8 people).',
    'Draw a scaled map of the building, include fixed infrastructure (overhead cranes, compressor rooms).',
    'Cut out scaled-size equipment pieces.',
    'Layout the equipment that promotes the best type of work flow (flow should be in one direction).',
    'Review equipment location for required infrastructure (Utilities, Building Constraints).',
    'Document the new work flow process.',
    'Using the VSM template, create a Future State Value Stream Map (no data will be available for the new Product Line — request data from Product Line Center of Excellence). The future state will assist in eliminating bottlenecks and waiting time.',
    'Ensure the team has complete buy-in.',
];

export default function LeanPrinciplesPage() {
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
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-2xl font-semibold tracking-wide">Lean Principles</h1>
                            </div>
                            <p className="text-white/50 text-sm font-light ml-11">Process flow analysis, value stream mapping &amp; layout optimisation</p>
                        </div>
                        <div className="flex gap-4">
                            {[
                                { label: 'Sections', value: '3' },
                                { label: 'Layout Steps', value: '8' },
                                { label: 'Lean Tools', value: '3' },
                            ].map(({ label, value }) => (
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

                {/* ── 4.0 Overview Card ── */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base">4.0 Lean Principles — Overview</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Current State → Future State gap analysis using Lean tools</p>
                    </div>
                    <div className="px-7 py-6 space-y-4">
                        <p className="text-sm text-slate-600 leading-relaxed font-light">
                            With a Product Line flow concept <span className="font-medium text-slate-800">(Future State)</span> in mind we need to develop a gap list from the Current State to Future State.
                            The gap list will be the base document needed to identify the activities / costs / resources for implementation of the new Product Line.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed font-light">
                            To understand the Current State, a holistic view of the whole Service Center is required — the secret here is to <span className="font-medium text-slate-800">take a step out of the business and look in</span>.
                            The collection of real data on how activities are performed <span className="italic text-slate-500">(not how you think it should be)</span> needs to be documented.
                            This is the baseline on how future improvements are measured.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed font-light">
                            Not understanding current work flows and poor planning of equipment location can impact the performance of the ESC by creating interrupted work flow, bottle necks, generating waste and poor efficiencies.
                        </p>

                        {/* Highlight callout */}
                        <div className="bg-teal-50 border border-teal-200 rounded-lg px-5 py-4 flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-teal-800 font-medium leading-relaxed">
                                Using Lean tools will avoid costly mistakes and ensure it&apos;s right first time.
                            </p>
                        </div>

                        {/* Gap Analysis Flow */}
                        <div className="pt-2">
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-3">Transformation Flow</p>
                            <div className="flex flex-wrap items-center gap-2">
                                {['Current State', 'Gap Analysis', 'Activity Planning', 'Resource & Cost Identification', 'Future State'].map((step, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="bg-[#1e4b5f] text-white text-sm font-medium px-5 py-2 rounded-lg shadow-sm">{step}</div>
                                        {i < 4 && <ArrowRight className="w-4 h-4 text-[#1e4b5f]" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reference Diagram */}
                        <div className="pt-2">
                            <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
                                <img
                                    src="/images/Picture1.png"
                                    alt="Lean Principles Overview – Current to Future State"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-xs text-slate-400 font-light mt-2 italic text-center">
                                Figure 4.0: Lean Principles — Current State to Future State transformation overview
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── 4.1 Process Flow (Spaghetti Diagram) ── */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5 flex items-center gap-3">
                        <GitBranch className="w-5 h-5 text-white/80" />
                        <div>
                            <h2 className="font-semibold text-white text-base">4.1 Process Flow (Spaghetti Diagram)</h2>
                            <p className="text-white/60 text-xs mt-0.5 font-light">Visual representation of item/activity flow through the process</p>
                        </div>
                    </div>

                    {/* Definition note */}
                    <div className="px-7 py-5 bg-blue-50/60 border-b border-blue-100">
                        <div className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mt-0.5">Note</span>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                A <span className="font-medium text-slate-800">spaghetti diagram</span> is a visual representation using a continuous flow line tracing the path of an item or activity through a process.
                                The continuous flow line enables process teams to identify redundancies in the work flow and opportunities to expedite process flow.
                            </p>
                        </div>
                    </div>

                    <div className="px-7 py-6 space-y-4">
                        <p className="text-sm text-slate-600 leading-relaxed font-light">
                            Using the floor plan of the Service Center, follow a project from <span className="font-medium text-slate-800">start to finish</span>.
                        </p>

                        <div className="bg-slate-50 rounded-lg border border-slate-200 p-5">
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-3">At each process point, note:</p>
                            <div className="grid gap-2">
                                {[
                                    'Activities performed at each station',
                                    'Where the project moves back and forth',
                                    'Each cross-over point',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#1e4b5f] flex-shrink-0" />
                                        <p className="text-sm text-slate-700 font-light">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-xs text-slate-400 font-light italic">
                            Understanding the flow can show opportunities for improvements to be incorporated into the future state.
                        </p>

                        {/* Reference Diagram */}
                        <div className="pt-2">
                            <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
                                <img
                                    src="/images/Picture2.png"
                                    alt="Spaghetti Diagram – Process Flow Example"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-xs text-slate-400 font-light mt-2 italic text-center">
                                Figure 4.1: Spaghetti diagram showing process flow through the service center
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── 4.2 Value Stream Mapping ── */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5 flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-white/80" />
                        <div>
                            <h2 className="font-semibold text-white text-base">4.2 Value Stream Mapping</h2>
                            <p className="text-white/60 text-xs mt-0.5 font-light">Lean management tool for analysing current and designing future state</p>
                        </div>
                    </div>

                    {/* Definition note */}
                    <div className="px-7 py-5 bg-blue-50/60 border-b border-blue-100">
                        <div className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 mt-0.5">Note</span>
                            <p className="text-sm text-slate-600 leading-relaxed font-light">
                                <span className="font-medium text-slate-800">Value stream mapping</span> is a lean management tool for analysing the current state and designing a future state for the series of events
                                that take a product or service from its beginning through to the customer.
                            </p>
                        </div>
                    </div>

                    <div className="px-7 py-6 space-y-5">
                        <p className="text-sm text-slate-600 leading-relaxed font-light">
                            A simple way to create a Value Stream Map is to use the process points from the Process Flow:
                        </p>

                        <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 space-y-3">
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">How to create a VSM:</p>
                            {[
                                'With sticky notes, place them in a straight line representing each process step.',
                                'Draw lines underneath to indicate production time and waiting time.',
                                'On completion, add up the total production time and the total waiting time.',
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1e4b5f] text-white text-xs font-bold flex-shrink-0">{i + 1}</span>
                                    <p className="text-sm text-slate-700 font-light leading-relaxed pt-0.5">{step}</p>
                                </div>
                            ))}
                        </div>

                        {/* VSM visual hint */}
                        <div className="bg-amber-50 border border-amber-200 rounded-lg px-5 py-4 flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-amber-800 font-light leading-relaxed">
                                The VSM will clearly highlight the ratio of <span className="font-medium">value-adding production time</span> vs <span className="font-medium">non-value-adding waiting time</span>,
                                exposing the biggest improvement opportunities.
                            </p>
                        </div>

                        {/* Reference Diagram */}
                        <div className="pt-2">
                            <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
                                <img
                                    src="/images/Picture3.jpg"
                                    alt="Value Stream Mapping Example"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-xs text-slate-400 font-light mt-2 italic text-center">
                                Figure 4.2: Value Stream Map — production time vs waiting time analysis
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── 4.3 Creating New Enhanced Service Floor Layout ── */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-[#1e4b5f] px-7 py-5 flex items-center gap-3">
                        <Layout className="w-5 h-5 text-white/80" />
                        <div>
                            <h2 className="font-semibold text-white text-base">4.3 Creating New Enhanced Service Floor Layout</h2>
                            <p className="text-white/60 text-xs mt-0.5 font-light">Equipment layout optimisation for optimal workflow</p>
                        </div>
                    </div>

                    <div className="px-7 py-6 space-y-5">
                        <p className="text-sm text-slate-600 leading-relaxed font-light">
                            Equipment layout will depend on the scenario decided — <span className="font-medium text-slate-800">Product Line Cell</span>,{' '}
                            <span className="font-medium text-slate-800">Mixed Product Flow</span>, or{' '}
                            <span className="font-medium text-slate-800">Single Product Flow</span>.
                        </p>

                        {/* Considerations */}
                        <div className="bg-slate-50 rounded-lg border border-slate-200 p-5">
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-3">Key Considerations</p>
                            <div className="grid sm:grid-cols-2 gap-2">
                                {[
                                    'Floor space requirements',
                                    'Workspace under craneage / not under craneage',
                                    'New equipment, related infrastructure & location',
                                    'Utilities & building constraints',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#1e4b5f] flex-shrink-0" />
                                        <p className="text-sm text-slate-700 font-light">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step-by-step */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 flex items-center gap-2 mb-4">
                                <span className="w-1 h-4 rounded-full bg-[#1e4b5f] inline-block" />
                                How To — Step by Step
                            </h3>
                            <div className="space-y-3">
                                {floorLayoutSteps.map((step, i) => (
                                    <div key={i} className="flex items-start gap-4 bg-slate-50 rounded-lg border border-slate-100 px-5 py-3.5 hover:border-slate-200 transition-colors">
                                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#1e4b5f] text-white text-xs font-bold flex-shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <p className="text-sm text-slate-700 font-light leading-relaxed pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reference Diagram */}
                        <div className="pt-2">
                            <div className="rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
                                <img
                                    src="/images/Picture4.jpg"
                                    alt="Enhanced Service Floor Layout Example"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <p className="text-xs text-slate-400 font-light mt-2 italic text-center">
                                Figure 4.3: Enhanced service center floor layout with optimised equipment placement
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
