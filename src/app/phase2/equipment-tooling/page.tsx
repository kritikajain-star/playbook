'use client';

import Link from 'next/link';
import { Fragment, useMemo, useState, useEffect } from 'react';
import { Upload, Settings, FileText, FileSpreadsheet, Save, X, Calendar } from 'lucide-react';

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

/** TS Requirement Table */
const TSRequirementTable = () => (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="bg-slate-50 px-7 py-4 border-b border-slate-200">
            <h3 className="font-bold text-[#1e4b5f] text-center text-lg uppercase tracking-tight">
                Small Steam Turbine Cell Equipment Requirement
            </h3>
            <div className="flex justify-between mt-2 text-xs text-slate-600 font-medium">
                <span>Equipment: Steam turbine / Compressor</span>
                <span>Lifting Capacity: 2t</span>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <th className="px-4 py-2 border-r border-slate-200 w-24">Level</th>
                        <th className="px-4 py-2 border-r border-slate-200 w-1/3">Capability</th>
                        <th className="px-4 py-2 text-left">Machine & Equipment</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    <tr className="border-b border-slate-200">
                        <td className="px-4 py-4 border-r border-slate-200 align-top font-semibold text-center bg-slate-50/30">SST Cell</td>
                        <td className="px-4 py-4 border-r border-slate-200 align-top text-xs leading-relaxed">
                            <p className="font-bold mb-1">Turbine Overhaul</p>
                            <ol className="list-decimal ml-4 space-y-0.5">
                                <li>Disassembly turbine</li>
                                <li>Cleaning of the parts</li>
                                <li>Inspection of the parts</li>
                                <li>Check bearing housing alignment</li>
                                <li>Reassembly</li>
                                <li>Perform 25 psi air test</li>
                                <li>Test run turbine, adjust trip speed, record temp & vibration</li>
                                <li>Provide Report</li>
                            </ol>
                        </td>
                        <td className="p-0 align-top">
                            <ul className="text-xs divide-y divide-slate-100 list-none m-0 p-0">
                                {[
                                    "2 x Floor Mounted Positioning Stands", "Rotor Dismantle stand", "Rotor Assembly stand", 
                                    "Mounting Adapters", "Rotor Stacking Rings", "J Hook", "Governor Hub Hanger", 
                                    "Rotor lifting sleeves", "6 x Alignment arbors", "V blocks", "Fluke Meter 20ma", 
                                    "Taper Gage", "Bearing Heater", "Hand Tooling", "Micrometers 1-4\" OD 12\" ID", 
                                    "Combination squares", "6,8,12\" dial calipers", "24\" Precision Straight edge", 
                                    "6,12 & 24\" Precision scales", "0-1\" dial indicators", "Specialised storage (refrigerator)"
                                ].map((item, idx) => (
                                    <li key={idx} className="px-4 py-1.5">{item}</li>
                                ))}
                                <li className="px-4 py-2 bg-[#1e4b5f]/5 flex justify-between font-bold text-[#1e4b5f]">
                                    <span>Budget</span>
                                    <span>CHF 200,000.00</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                        <td className="px-4 py-4 border-r border-slate-200 align-top font-semibold text-center bg-slate-50/30">Extras</td>
                        <td className="px-4 py-4 border-r border-slate-200 align-top text-xs">
                            <p className="font-bold mb-4">Overspeed Test Stand</p>
                            <p className="font-bold mt-10">Machinery</p>
                        </td>
                        <td className="p-0 align-top">
                            <div className="text-xs divide-y divide-slate-100">
                                <div className="px-4 py-1.5 flex justify-between"><span>Overspeed Stand</span><span>CHF 15,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Bed Plate</span><span>CHF 8,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Lube system</span><span>CHF 12,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Electric Motor with Logic</span><span>CHF 35,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Accumulator</span><span>CHF 20,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between border-t border-slate-300 pt-3"><span>Small Lathe</span><span>CHF 15,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Horizontal Puller Press</span><span>CHF 25,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>2 ton crane</span><span>CHF 25,000.00</span></div>
                                <div className="px-4 py-2 bg-[#1e4b5f]/5 flex justify-between font-bold text-[#1e4b5f]">
                                    <span>Budget</span>
                                    <span>CHF 155,000.00</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="bg-[#1e4b5f] text-white font-bold">
                        <td colSpan={2} className="px-4 py-2 text-right uppercase tracking-wider text-xs border-r border-white/10">Total Requirement Budget</td>
                        <td className="px-4 py-2">
                             <div className="flex justify-between w-full">
                                <span>Total</span>
                                <span>CHF 355,000.00</span>
                             </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
);

/** PS Requirement Table */
const PSRequirementTable = () => (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="bg-slate-50 px-7 py-4 border-b border-slate-200">
            <h3 className="font-bold text-[#1e4b5f] text-center text-lg uppercase tracking-tight">
                R1 Equipment Requirement
            </h3>
            <div className="flex justify-between mt-2 text-xs text-slate-600 font-medium">
                <span>Equipment: OHH Pumps</span>
                <span>Lifting Capacity: 2t</span>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <th className="px-4 py-2 border-r border-slate-200 w-24">Level</th>
                        <th className="px-4 py-2 border-r border-slate-200 w-1/3">Capability</th>
                        <th className="px-4 py-2 text-left">Machine & Equipment</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    <tr className="border-b border-slate-200">
                        <td className="px-4 py-4 border-r border-slate-200 align-top font-semibold text-center bg-slate-50/30">R1 Cell</td>
                        <td className="px-4 py-4 border-r border-slate-200 align-top text-xs leading-relaxed">
                            <p className="font-bold mb-1">Pump Overhaul</p>
                            <ol className="list-alpha ml-4 space-y-0.5">
                                <li>Disassembly the pump</li>
                                <li>Cleaning of the parts</li>
                                <li>Inspection of the parts</li>
                                <li>Change standard wear parts like O-rings, gaskets, Inpro seals, wear rings & bearings</li>
                                <li>Reassembly</li>
                                <li>Report</li>
                            </ol>
                        </td>
                        <td className="p-0 align-top">
                            <div className="text-xs divide-y divide-slate-100">
                                <div className="px-4 py-1.5 flex justify-between"><span>Work Bench with tooling draws</span><span>CHF 6,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Work Table (heavy duty)</span><span>CHF 2,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Hand Tooling</span><span>CHF 2,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Vee blocks with teflon</span><span>CHF 500.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Measuring equipment</span><span>CHF 12,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Spring balancers (zero gravity)</span><span>CHF 1,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Bearing heater</span><span>CHF 2,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Vertical Balancer / CNC Balancer</span><span>CHF 160,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Job bax stand + 6 x job boxes</span><span>CHF 1,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Storage Cabinet</span><span>CHF 400.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Ultrasonic thickness tester</span><span>CHF 6,000.00</span></div>
                                <div className="px-4 py-2 bg-[#1e4b5f]/5 flex justify-between font-bold text-[#1e4b5f]">
                                    <span>Budget (incl CNC)</span>
                                    <span>CHF 242,900.00</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                        <td className="px-4 py-4 border-r border-slate-200 align-top font-semibold text-center bg-slate-50/30">Extras</td>
                        <td className="px-4 py-4 border-r border-slate-200 align-top text-xs">
                            <p className="font-bold">Pump Overhaul Extras</p>
                            <ul className="mt-2 space-y-1 text-[10px] text-slate-500">
                                <li>• Check Engineering values</li>
                                <li>• Labelling of parts, name tags</li>
                                <li>• Replace traditional sandblast</li>
                                <li>• In house full capability</li>
                                <li>• Reverse Engineering</li>
                            </ul>
                        </td>
                        <td className="p-0 align-top">
                            <div className="text-xs divide-y divide-slate-100">
                                <div className="px-4 py-1.5 flex justify-between"><span>3D Scanner</span><span>CHF 35,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Laser Etching</span><span>CHF 40,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Laser Blasting</span><span>CHF 250,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>NDT Equipment</span><span>CHF 60,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Faro CMM</span><span>CHF 90,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>3D Software</span><span>CHF 9,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Crane 2 ton</span><span>CHF 25,000.00</span></div>
                                <div className="px-4 py-2 bg-[#1e4b5f]/5 flex justify-between font-bold text-[#1e4b5f]">
                                    <span>Budget</span>
                                    <span>CHF 509,000.00</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="bg-[#1e4b5f] text-white font-bold">
                        <td colSpan={2} className="px-4 py-2 text-right uppercase tracking-wider text-xs border-r border-white/10">Total Requirement Budget</td>
                        <td className="px-4 py-2">
                             <div className="flex justify-between w-full">
                                <span>Total</span>
                                <span>CHF 751,900.00</span>
                             </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
);

/** EMS Requirement Table */
const EMSRequirementTable = () => (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="bg-slate-50 px-7 py-4 border-b border-slate-200">
            <h3 className="font-bold text-[#1e4b5f] text-center text-lg uppercase tracking-tight">
                EMS Cell Equipment Requirement
            </h3>
            <div className="flex justify-between mt-2 text-xs text-slate-600 font-medium">
                <span>Equipment: &lt;660 volts</span>
                <span>Lifting Capacity: 2t</span>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <th className="px-4 py-2 border-r border-slate-200 w-24">Level</th>
                        <th className="px-4 py-2 border-r border-slate-200 w-1/3">Capability</th>
                        <th className="px-4 py-2 text-left">Machine & Equipment</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700">
                    <tr className="border-b border-slate-200">
                        <td className="px-4 py-4 border-r border-slate-200 align-top font-semibold text-center bg-slate-50/30">EMS Cell</td>
                        <td className="px-4 py-4 border-r border-slate-200 align-top text-xs leading-relaxed">
                            <p className="font-bold mb-1">Motor Overhaul</p>
                            <ol className="list-alpha ml-4 space-y-0.5">
                                <li>Disassembly motor</li>
                                <li>Cleaning of the parts</li>
                                <li>Inspection of the parts</li>
                                <li>Bearing change</li>
                                <li>Reassembly</li>
                                <li>Test Run</li>
                            </ol>
                        </td>
                        <td className="p-0 align-top">
                            <div className="text-xs divide-y divide-slate-100">
                                <div className="px-4 py-1.5 flex justify-between"><span>Work Bench with tooling draws</span><span>CHF 6,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Work Table (heavy duty)</span><span>CHF 2,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Hand Tooling</span><span>CHF 2,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Pullers</span><span>CHF 2,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Measuring equipment</span><span>CHF 6,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Electrical Test equipment</span><span>CHF 10,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Bearing heater</span><span>CHF 2,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Poulan Press</span><span>CHF 25,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Curing Oven</span><span>CHF 65,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Electrical Test Panel</span><span>CHF 60,000.00</span></div>
                                <div className="px-4 py-2 bg-[#1e4b5f]/5 flex justify-between font-bold text-[#1e4b5f]">
                                    <span>Budget</span>
                                    <span>CHF 180,000.00</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                        <td className="px-4 py-4 border-r border-slate-200 align-top font-semibold text-center bg-slate-50/30">Extras</td>
                        <td className="px-4 py-4 border-r border-slate-200 align-top text-xs">
                            <p className="font-bold">Electrical testing</p>
                            <p className="mb-4">Surge Comparison</p>
                            <p className="font-bold">Mechanical</p>
                        </td>
                        <td className="p-0 align-top">
                            <div className="text-xs divide-y divide-slate-100">
                                <div className="px-4 py-1.5 flex justify-between"><span>Baker surge tester</span><span>CHF 45,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Lathe</span><span>CHF 30,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Balance machine</span><span>CHF 70,000.00</span></div>
                                <div className="px-4 py-1.5 flex justify-between"><span>Crane 2 ton</span><span>CHF 25,000.00</span></div>
                                <div className="px-4 py-2 bg-[#1e4b5f]/5 flex justify-between font-bold text-[#1e4b5f]">
                                    <span>Budget</span>
                                    <span>CHF 170,000.00</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="bg-[#1e4b5f] text-white font-bold">
                        <td colSpan={2} className="px-4 py-2 text-right uppercase tracking-wider text-xs border-r border-white/10">Total Requirement Budget</td>
                        <td className="px-4 py-2">
                             <div className="flex justify-between w-full">
                                <span>Total</span>
                                <span>CHF 350,000.00</span>
                             </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
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
    const [scopeDocs, setScopeDocs] = useState<ScopeDoc[]>([]);
    const [toolItems, setToolItems] = useState<ToolItem[]>([]);
    const [selectedScopeByLine, setSelectedScopeByLine] = useState<Record<ProductLine, string>>({
        TS: '',
        PS: '',
        EMS: '',
    });
    const [formData, setFormData] = useState<Record<string, any>>({});
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('equipment-tooling-data');
        if (saved) {
            setFormData(JSON.parse(saved));
        }
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

    const handleSave = () => {
        localStorage.setItem('equipment-tooling-data', JSON.stringify(formData));
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    const handleCancel = () => {
        const saved = localStorage.getItem('equipment-tooling-data');
        if (saved) {
            setFormData(JSON.parse(saved));
        } else {
            setFormData({});
        }
    };

    const availableScopesForActiveLine = useMemo(() => {
        const fromTools = new Set(toolItems.filter(t => t.productLine === activeLine).map(t => t.scope).filter(Boolean));
        const fromDocs = new Set(scopeDocs.filter(d => d.productLine === activeLine).map(d => d.scope).filter(Boolean));
        return Array.from(new Set([...fromTools, ...fromDocs])).sort((a, b) => a.localeCompare(b));
    }, [toolItems, scopeDocs, activeLine]);

    const filteredTools = useMemo(() => {
        const scope = selectedScopeByLine[activeLine];
        return toolItems.filter(t => t.productLine === activeLine && (!scope || t.scope === scope));
    }, [toolItems, activeLine, selectedScopeByLine]);

    const handleUploadPDFs: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        const added: ScopeDoc[] = [];
        for (const f of Array.from(files)) {
            const url = URL.createObjectURL(f);
            const base = f.name.replace(/\.[^/.]+$/, '');
            added.push({ id: crypto.randomUUID(), name: f.name, url, productLine: activeLine, scope: base });
        }
        setScopeDocs(prev => [...prev, ...added]);
        if (!selectedScopeByLine[activeLine] && added[0]?.scope) {
            setSelectedScopeByLine(prev => ({ ...prev, [activeLine]: added[0].scope }));
        }
        e.currentTarget.value = '';
    };

    const handleUploadExcel: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const xlsxMod = await import('xlsx');
            const XLSX = (xlsxMod as any).default ?? xlsxMod;
            const buf = await file.arrayBuffer();
            const wb = XLSX.read(buf, { type: 'array' });
            const ws = wb.Sheets[wb.SheetNames[0]];
            const rows: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' });
            const parsed: ToolItem[] = rows.map((r) => {
                const map: Record<string, any> = {};
                Object.keys(r).forEach((k) => (map[normalizeKey(k)] = r[k]));
                const item: string = String(map['item'] ?? '').trim();
                const plRaw: string = String(map['productline'] ?? map['pl'] ?? '').trim().toUpperCase();
                const scope: string = String(map['scope'] ?? '').trim();
                const productLine = (['TS', 'PS', 'EMS'] as ProductLine[]).includes(plRaw as ProductLine) ? (plRaw as ProductLine) : activeLine;
                if (!item) return null;
                return { id: crypto.randomUUID(), item, productLine, scope } as ToolItem;
            }).filter(Boolean) as ToolItem[];
            setToolItems(parsed);
        } catch (err) {
            console.error('Failed to parse Excel:', err);
        } finally {
            e.currentTarget.value = '';
        }
    };

    const lineCounts = useMemo(() => {
        const byLine: Record<ProductLine, number> = { TS: 0, PS: 0, EMS: 0 };
        for (const t of toolItems) byLine[t.productLine] += 1;
        return byLine;
    }, [toolItems]);

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
                            <p className="text-white/50 text-sm font-light ml-11">Select a product line, attach scope documents, upload a tool list, then choose a work scope.</p>
                        </div>
                        <div className="flex gap-4">
                            {[{ label: 'TS Items', value: lineCounts.TS }, { label: 'PS Items', value: lineCounts.PS }, { label: 'EMS Items', value: lineCounts.EMS }].map(({ label, value }) => (
                                <div key={label} className="bg-white/10 rounded-lg px-4 py-2.5 text-center min-w-[110px]">
                                    <p className="text-lg font-bold">{value}</p>
                                    <p className="text-white/50 text-[10px] uppercase tracking-wider mt-0.5">{label}</p>
                                </div>
                            ))}
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
                {/* 1. Workscope & Documents Section */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                    <div className="bg-[#1e4b5f] px-7 py-5">
                        <h2 className="font-semibold text-white text-base">{activeLine} — Workscope &amp; Documents</h2>
                        <p className="text-white/60 text-xs mt-0.5 font-light">Attach scope PDFs and upload the Excel tool list. Then select a Workscope.</p>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-slate-200 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3"><FileText className="w-4 h-4 text-[#1e4b5f]" /><h3 className="text-sm font-medium text-slate-800">Scope Documents (PDF)</h3></div>
                            <label className="flex items-center justify-between gap-3 border border-dashed border-slate-300 hover:border-[#1e4b5f] rounded-lg px-4 py-3 text-sm cursor-pointer transition-colors">
                                <div className="text-slate-600"><span className="font-medium">Upload PDFs</span><span className="text-slate-400"> — multiple files</span></div>
                                <div className="flex items-center gap-2 text-[#1e4b5f]"><Upload className="w-4 h-4" /> <span className="text-xs">Add</span></div>
                                <input type="file" accept="application/pdf" multiple className="hidden" onChange={handleUploadPDFs} />
                            </label>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3"><FileSpreadsheet className="w-4 h-4 text-[#1e4b5f]" /><h3 className="text-sm font-medium text-slate-800">Tool List (Excel)</h3></div>
                            <label className="flex items-center justify-between gap-3 border border-dashed border-slate-300 hover:border-[#1e4b5f] rounded-lg px-4 py-3 text-sm cursor-pointer transition-colors">
                                <div className="text-slate-600"><span className="font-medium">Upload .xlsx / .xls</span></div>
                                <div className="flex items-center gap-2 text-[#1e4b5f]"><Upload className="w-4 h-4" /> <span className="text-xs">Add</span></div>
                                <input type="file" accept=".xlsx,.xls" className="hidden" onChange={handleUploadExcel} />
                            </label>
                        </div>
                    </div>
                </div>

                {/* 2. DYNAMIC REQUIREMENT TABLES */}
                {activeLine === 'TS' && <TSRequirementTable />}
                {activeLine === 'PS' && <PSRequirementTable />}
                {activeLine === 'EMS' && <EMSRequirementTable />}

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
                                <SubSectionHeader title={`${activeLine}${selectedScopeByLine[activeLine] ? ` — ${selectedScopeByLine[activeLine]}` : ''}`} />
                                {(filteredTools.length ? filteredTools : toolItems.filter(t => t.productLine === activeLine)).map((t) => (
                                    <InputRow 
                                        key={t.id} 
                                        item={t.item} 
                                        values={formData[`${activeLine}-${t.id}`]}
                                        onChange={(field, value) => handleInputChange(`${activeLine}-${t.id}`, field, value)}
                                    />
                                ))}
                                {toolItems.filter(t => t.productLine === activeLine).length === 0 && (
                                    <Fragment>
                                        {[...Array(5)].map((_, index) => (
                                            <InputRow 
                                                key={`${activeLine}-empty-${index}`} 
                                                item={`${activeLine} Workscope Entry ${index + 1}`} 
                                                values={formData[`${activeLine}-empty-${index}`]}
                                                onChange={(field, value) => handleInputChange(`${activeLine}-empty-${index}`, field, value)}
                                            />
                                        ))}
                                    </Fragment>
                                )}
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