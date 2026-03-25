'use client';

import { Plus } from 'lucide-react';

import { Phase1Data } from '../../utils/usePhase1Data';

/** TS Requirement Table */
export const TSRequirementTable = ({ prices, onChange, phase1 }: { 
    prices: any[]; 
    onChange: (updated: any[]) => void;
    phase1: Phase1Data | null;
}) => {
    // Ensure we have data
    const tableData = Array.isArray(prices) ? prices : [];

    const isDeferred = (sectionLevel: string) => {
        return sectionLevel === 'Extras' && phase1?.i7 === 'phase1';
    };

    const calculateTotal = () => {
        return tableData.reduce((total, section) => {
            const sectionTotal = section.items.reduce((sTotal: number, item: any) => sTotal + Number(item.price || 0), 0);
            return total + sectionTotal;
        }, 0);
    };

    const handleUpdateItem = (sectionIdx: number, itemIdx: number, field: string, value: any) => {
        const newData = [...tableData];
        const newItems = [...newData[sectionIdx].items];
        newItems[itemIdx] = { ...newItems[itemIdx], [field]: field === 'price' ? Number(value) : value };
        newData[sectionIdx] = { ...newData[sectionIdx], items: newItems };
        onChange(newData);
    };

    const handleAddItem = (sectionIdx: number) => {
        const newData = [...tableData];
        newData[sectionIdx].items.push({ name: '', price: 0 });
        onChange(newData);
    };

    const formatCHF = (n: number) => `CHF ${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
            <div className="bg-[#1e4b5f]/5 px-7 py-4 border-b border-slate-200">
                <h3 className="font-bold text-[#1e4b5f] text-center text-lg uppercase tracking-tight">
                    Small Steam Turbine Cell Equipment Requirement
                </h3>
                <div className="flex justify-between mt-2 text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                    <span>Equipment: Steam turbine / Compressor</span>
                    <span>Lifting Capacity: 2t</span>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                    <thead>
                        <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                            <th className="px-4 py-3 border-r border-slate-200 w-28 uppercase tracking-wider text-[11px]">Level</th>
                            <th className="px-4 py-3 border-r border-slate-200 w-1/3 uppercase tracking-wider text-[11px]">Capability</th>
                            <th className="px-4 py-3 text-left uppercase tracking-wider text-[11px]">Machine & Equipment</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-700">
                        {tableData.map((section, sectionIdx) => (
                            <tr key={sectionIdx} className="border-b border-slate-200 last:border-0">
                                <td className="px-4 py-4 border-r border-slate-200 align-top font-semibold text-center bg-slate-50/30">
                                    <div className="p-1 font-semibold text-center uppercase text-[10px] tracking-wider text-slate-400">
                                        {section.level}
                                    </div>
                                </td>
                                <td className="px-4 py-4 border-r border-slate-200 align-top text-xs leading-relaxed">
                                    <div className="p-1 leading-relaxed whitespace-pre-wrap font-light text-slate-600">
                                        {section.capability}
                                    </div>
                                </td>
                                <td className="p-0 align-top">
                                    <div className="text-xs divide-y divide-slate-100">
                                        {section.items.map((item: any, itemIdx: number) => (
                                            <div key={itemIdx} className={`px-4 py-2.5 flex justify-between items-center gap-3 group hover:bg-slate-50/50 transition-colors ${isDeferred(section.level) ? 'opacity-60 bg-slate-50/50' : ''}`}>
                                                <div className="flex-1 flex items-center gap-3">
                                                    {section.level === 'Extras' ? (
                                                        <input 
                                                            type="text"
                                                            value={item.name}
                                                            onChange={(e) => handleUpdateItem(sectionIdx, itemIdx, 'name', e.target.value)}
                                                            placeholder="Enter new tool name"
                                                            className="flex-1 bg-transparent border-none focus:ring-0 p-0 font-light text-slate-700 placeholder:text-slate-300"
                                                        />
                                                    ) : (
                                                        <span className="font-light text-slate-700">{item.name}</span>
                                                    )}
                                                    {isDeferred(section.level) && (
                                                        <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-[9px] font-bold rounded uppercase tracking-wider">
                                                            Deferred / Phase 2
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        type="number"
                                                        value={item.price}
                                                        onChange={(e) => handleUpdateItem(sectionIdx, itemIdx, 'price', e.target.value)}
                                                        className="w-24 text-right bg-transparent border border-slate-200 focus:border-[#1e4b5f] focus:ring-1 focus:ring-[#1e4b5f]/20 p-1.5 rounded-md font-medium appearance-none transition-all"
                                                        placeholder="0.00"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        {section.level === 'Extras' && !isDeferred(section.level) && (
                                            <button 
                                                onClick={() => handleAddItem(sectionIdx)}
                                                className="w-full py-2 bg-slate-50 hover:bg-[#1e4b5f]/10 text-[#1e4b5f] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-t border-slate-100 transition-all"
                                            >
                                                <Plus className="w-3 h-3" />
                                                Add Tool
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="bg-[#1e4b5f] text-white font-bold">
                            <td colSpan={2} className="px-6 py-3 text-right uppercase tracking-[0.2em] text-[11px] border-r border-white/10 shadow-inner">Total Requirement Budget</td>
                            <td className="px-6 py-3">
                                <div className="flex justify-between w-full items-center">
                                    <span className="text-white/60 text-[10px] uppercase font-light tracking-widest">Grand Total</span>
                                    <span className="text-lg">{formatCHF(calculateTotal())}</span>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};
