'use client';

import Link from 'next/link';
import { Fragment, useMemo, useState, useEffect } from 'react';
import { Settings, Save, X, Calendar } from 'lucide-react';
import { TSRequirementTable } from './components/TSRequirementTable';
import { PSRequirementTable } from './components/PSRequirementTable';
import { EMSRequirementTable } from './components/EMSRequirementTable';

type ProductLine = 'TS' | 'PS' | 'EMS';

type ScopeDoc = {
    id: string;
    name: string;
    url: string;
    productLine: ProductLine;
    scope: string;
};

type ToolItem = {
    id: string;
    item: string;
    productLine: ProductLine;
    scope: string;
};

// Requirement tables imported from components/

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

const SubSectionHeader = ({ title }: { title: string }) => (
    <tr className="bg-slate-50">
        <td
            colSpan={5}
            className="px-6 py-2.5 text-xs font-semibold text-slate-500 uppercase tracking-widest border-y border-slate-100"
        >
            {title}
        </td>
    </tr>
);

const InputRow = ({
    item,
    values,
    onChange
}: {
    item: string;
    values: any;
    onChange: (field: string, value: string) => void;
}) => (
    <tr className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors">
        <td className="px-6 py-3.5 text-sm text-slate-700 font-light leading-relaxed w-2/5">{item}</td>
        <td className="px-3 py-3">
            <input
                type="text"
                placeholder="Enter owner"
                value={values?.owner || ''}
                onChange={(e) => onChange('owner', e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
        </td>
        <td className="px-3 py-3">
            <input
                type="text"
                placeholder="Enter team"
                value={values?.supportTeam || ''}
                onChange={(e) => onChange('supportTeam', e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
        </td>
        <td className="px-3 py-3">
            <div className="relative">
                <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    value={values?.startDate || ''}
                    onChange={(e) => onChange('startDate', e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 pr-8 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
                <Calendar className="w-3.5 h-3.5 text-slate-300 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
        </td>
        <td className="px-3 py-3">
            <div className="relative">
                <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    value={values?.targetDate || ''}
                    onChange={(e) => onChange('targetDate', e.target.value)}
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 pr-8 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
                <Calendar className="w-3.5 h-3.5 text-slate-300 absolute right-2.5 top-2.5 pointer-events-none" />
            </div>
        </td>
        <td className="px-3 py-3">
            <input
                type="text"
                placeholder="Enter status"
                value={values?.status || ''}
                onChange={(e) => onChange('status', e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 font-light placeholder:text-slate-300 transition-all" />
        </td>
    </tr>
);

const normalizeKey = (k: string) => k.trim().toLowerCase().replace(/\s+/g, '');

export default function EquipmentToolingPage() {
    const [activeLine, setActiveLine] = useState<ProductLine>('TS');
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [requirementPrices, setRequirementPrices] = useState<Record<ProductLine, any>>({
        TS: [
            {
                level: 'TS Cell',
                capability: 'Small Steam Turbine Cell Equipment Requirement\nEquipment: Steam turbine / Compressor\nLifting Capacity: 2t',
                items: [
                    { name: 'Overspeed Stand', price: 0 },
                    { name: 'Bed Plate', price: 0 },
                    { name: 'Lube System', price: 0 },
                    { name: 'Electric Motor', price: 0 },
                    { name: 'Accumulator', price: 0 },
                    { name: 'Small Lathe', price: 0 },
                    { name: 'Horizontal Puller Press', price: 0 },
                    { name: 'Crane 2 ton', price: 0 },
                ]
            },
            {
                level: 'Extras',
                capability: 'Additional tools and equipment specific to TS requirements.',
                items: []
            }
        ],
        PS: [
            {
                level: 'R1 Cell',
                capability: 'Pump Overhaul\na. Disassembly the pump\nb. Cleaning of the parts\nc. Inspection of the parts\nd. Change standard wear parts\ne. Reassembly\nf. Report',
                items: [
                    { name: 'Work Bench with tooling draws', price: 0 },
                    { name: 'Work Table (heavy duty)', price: 0 },
                    { name: 'Hand Tooling', price: 0 },
                    { name: 'Vee blocks with teflon', price: 0 },
                    { name: 'Measuring equipment', price: 0 },
                    { name: 'Spring balancers (zero gravity)', price: 0 },
                    { name: 'Bearing heater', price: 0 },
                    { name: 'Vertical Balancer / CNC Balancer', price: 0 },
                    { name: 'Job bax stand + 6 x job boxes', price: 0 },
                    { name: 'Storage Cabinet', price: 0 },
                    { name: 'Ultrasonic thickness tester', price: 0 },
                ]
            },
            {
                level: 'Extras',
                capability: 'Pump Overhaul Extras\n• Check Engineering values\n• Labelling of parts, name tags\n• Replace traditional sandblast\n• In house full capability\n• Reverse Engineering',
                items: [
                    { name: '3D Scanner', price: 0 },
                    { name: 'Laser Etching', price: 0 },
                    { name: 'Laser Blasting', price: 0 },
                    { name: 'NDT Equipment', price: 0 },
                    { name: 'Faro CMM', price: 0 },
                    { name: '3D Software', price: 0 },
                    { name: 'Crane 2 ton', price: 0 },
                ]
            }
        ],
        EMS: [
            {
                level: 'EMS Cell',
                capability: 'Motor Overhaul\n1. Disassembly motor\n2. Cleaning of the parts\n3. Inspection of the parts\n4. Bearing change\n5. Reassembly\n6. Test Run',
                items: [
                    { name: 'Work Bench with tooling draws', price: 0 },
                    { name: 'Work Table (heavy duty)', price: 0 },
                    { name: 'Hand Tooling', price: 0 },
                    { name: 'Pullers', price: 0 },
                    { name: 'Measuring equipment', price: 0 },
                    { name: 'Electrical Test equipment', price: 0 },
                    { name: 'Bearing heater', price: 0 },
                    { name: 'Poulan Press', price: 0 },
                    { name: 'Curing Oven', price: 0 },
                    { name: 'Electrical Test Panel', price: 0 },
                ]
            },
            {
                level: 'Extras',
                capability: 'Electrical testing\nSurge Comparison\nMechanical',
                items: [
                    { name: 'Baker surge tester', price: 0 },
                    { name: 'Lathe', price: 0 },
                    { name: 'Balance machine', price: 0 },
                    { name: 'Crane 2 ton', price: 0 },
                ]
            }
        ],
    });
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const savedForm = localStorage.getItem('equipment-tooling-data');
        if (savedForm) setFormData(JSON.parse(savedForm));

        const savedPrices = localStorage.getItem('equipment-tooling-prices');
        if (savedPrices) setRequirementPrices(JSON.parse(savedPrices));
    }, []);

    const handleInputChange = (key: string, field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                [field]: value
            }
        }));
    };

    const handlePriceChange = (line: ProductLine, updated: any[]) => {
        setRequirementPrices(prev => ({
            ...prev,
            [line]: updated
        }));
    };

    const handleSave = () => {
        localStorage.setItem('equipment-tooling-data', JSON.stringify(formData));
        localStorage.setItem('equipment-tooling-prices', JSON.stringify(requirementPrices));
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    const handleCancel = () => {
        const savedForm = localStorage.getItem('equipment-tooling-data');
        if (savedForm) setFormData(JSON.parse(savedForm));
        else setFormData({});

        const savedPrices = localStorage.getItem('equipment-tooling-prices');
        if (savedPrices) setRequirementPrices(JSON.parse(savedPrices));
        else {
            setRequirementPrices({
                TS: [
                    {
                        level: 'TS Cell',
                        capability: 'Small Steam Turbine Cell Equipment Requirement\nEquipment: Steam turbine / Compressor\nLifting Capacity: 2t',
                        items: [
                            { name: 'Overspeed Stand', price: 15000 },
                            { name: 'Bed Plate', price: 8000 },
                            { name: 'Lube System', price: 12000 },
                            { name: 'Electric Motor', price: 35000 },
                            { name: 'Accumulator', price: 20000 },
                            { name: 'Small Lathe', price: 15000 },
                            { name: 'Horizontal Puller Press', price: 25000 },
                            { name: 'Crane 2 ton', price: 25000 },
                        ]
                    },
                    {
                        level: 'Extras',
                        capability: 'Additional tools and equipment specific to TS requirements.',
                        items: []
                    }
                ],
                PS: [
                    {
                        level: 'R1 Cell',
                        capability: 'Pump Overhaul\na. Disassembly the pump\nb. Cleaning of the parts\nc. Inspection of the parts\nd. Change standard wear parts\ne. Reassembly\nf. Report',
                        items: [
                            { name: 'Work Bench with tooling draws', price: 2000 },
                            { name: 'Work Table (heavy duty)', price: 3000 },
                            { name: 'Hand Tooling', price: 5000 },
                            { name: 'Vee blocks with teflon', price: 1500 },
                            { name: 'Measuring equipment', price: 12000 },
                            { name: 'Spring balancers (zero gravity)', price: 8000 },
                            { name: 'Bearing heater', price: 4500 },
                            { name: 'Vertical Balancer / CNC Balancer', price: 115000 },
                            { name: 'Job bax stand + 6 x job boxes', price: 6500 },
                            { name: 'Storage Cabinet', price: 4500 },
                            { name: 'Ultrasonic thickness tester', price: 12000 },
                        ]
                    },
                    {
                        level: 'Extras',
                        capability: 'Pump Overhaul Extras\n• Check Engineering values\n• Labelling of parts, name tags\n• Replace traditional sandblast\n• In house full capability\n• Reverse Engineering',
                        items: [
                            { name: '3D Scanner', price: 35000 },
                            { name: 'Laser Etching', price: 40000 },
                            { name: 'Laser Blasting', price: 250000 },
                            { name: 'NDT Equipment', price: 60000 },
                            { name: 'Faro CMM', price: 90000 },
                            { name: '3D Software', price: 9000 },
                            { name: 'Crane 2 ton', price: 25000 },
                        ]
                    }
                ],
                EMS: [
                    {
                        level: 'EMS Cell',
                        capability: 'Motor Overhaul\n1. Disassembly motor\n2. Cleaning of the parts\n3. Inspection of the parts\n4. Bearing change\n5. Reassembly\n6. Test Run',
                        items: [
                            { name: 'Work Bench with tooling draws', price: 2000 },
                            { name: 'Work Table (heavy duty)', price: 3000 },
                            { name: 'Hand Tooling', price: 5000 },
                            { name: 'Pullers', price: 4000 },
                            { name: 'Measuring equipment', price: 12000 },
                            { name: 'Electrical Test equipment', price: 25000 },
                            { name: 'Bearing heater', price: 4500 },
                            { name: 'Poulan Press', price: 15000 },
                            { name: 'Curing Oven', price: 45000 },
                            { name: 'Electrical Test Panel', price: 35000 },
                        ]
                    },
                    {
                        level: 'Extras',
                        capability: 'Electrical testing\nSurge Comparison\nMechanical',
                        items: [
                            { name: 'Baker surge tester', price: 45000 },
                            { name: 'Lathe', price: 30000 },
                            { name: 'Balance machine', price: 70000 },
                            { name: 'Crane 2 ton', price: 25000 },
                        ]
                    }
                ],
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-20">
            <div className="bg-[#1e4b5f] text-white">

                <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">

                    <div className="flex items-end justify-between flex-wrap gap-4 mt-6">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <div className="bg-white/10 p-2 rounded-lg"><Settings className="w-5 h-5 text-white" /></div>
                                <h1 className="text-2xl font-semibold tracking-wide">Equipment &amp; Tooling</h1>
                            </div>
                            <p className="text-white/50 text-sm font-light ml-11">Select a product line and manage equipment requirements and tool lists.</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 flex gap-1 border-t border-white/10 pt-1">
                    {(['TS', 'PS', 'EMS'] as ProductLine[]).map((tab) => (
                        <button key={tab} onClick={() => setActiveLine(tab)} className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors rounded-t-md ${activeLine === tab ? 'bg-slate-50 text-[#1e4b5f]' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>{tab}</button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">


                {/* 2. DYNAMIC REQUIREMENT TABLES */}
                {activeLine === 'TS' && <TSRequirementTable prices={requirementPrices.TS} onChange={(updated) => handlePriceChange('TS', updated)} />}
                {activeLine === 'PS' && <PSRequirementTable prices={requirementPrices.PS} onChange={(updated) => handlePriceChange('PS', updated)} />}
                {activeLine === 'EMS' && <EMSRequirementTable prices={requirementPrices.EMS} onChange={(updated) => handlePriceChange('EMS', updated)} />}

                {/* 3. Required Tools Section */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-slate-900">
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base">{activeLine} — Required Tools</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Fill in owner, team, status, and set dates.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1150px] text-sm">
                            <TableHead />
                            <tbody className="divide-y divide-slate-100">
                                <SubSectionHeader title={`${activeLine} Workscope`} />
                                <Fragment>
                                    {[...Array(10)].map((_, index) => (
                                        <InputRow
                                            key={`${activeLine}-empty-${index}`}
                                            item={`${activeLine} Workscope Entry ${index + 1}`}
                                            values={formData[`${activeLine}-empty-${index}`]}
                                            onChange={(field, value) => handleInputChange(`${activeLine}-empty-${index}`, field, value)}
                                        />
                                    ))}
                                </Fragment>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* ── Action Buttons ── */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-4 z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
                <div className="max-w-7xl mx-auto flex justify-end gap-3">
                    <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        <X className="w-4 h-4" />
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-[#1e4b5f] hover:bg-[#1a4254] rounded-lg transition-all shadow-sm active:scale-95"
                    >
                        <Save className="w-4 h-4" />
                        {isSaved ? 'Saved!' : 'Save Progress'}
                    </button>
                </div>
            </div>
        </div>
    );
}