'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, Upload, Calendar, MapPin, Save, X } from 'lucide-react';

const InputRow = ({ 
  item, 
  values, 
  onChange 
}: { 
  item: string; 
  values: any; 
  onChange: (field: string, value: string) => void;
}) => (
  <tr className="border-b border-slate-50 hover:bg-slate-50/70 transition-colors group">
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

const tableData = [
  'a) Verify land ownership status (title deed, encumbrances, disputes).',
  'b) Conduct zoning verification: confirm land classification permits industrial/service-centre use.',
  'c) Check proximity constraints (logistics hubs, highways, restrictions near residential zones).',
  'd) Assessment of geo-political risks (stability, regulatory volatility).',
  'e) Obtain pre-approval from Government Authorities for company incorporation.',
  'f) Complete environmental pre-screening requirements (potential contamination, protected zones).',
  'g) Validate land boundaries through a certified surveyor.',
];

export default function LandAcquisitionPage() {
  const [formData, setFormData] = useState<Record<number, any>>({});
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('land-acquisition-data');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleInputChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    localStorage.setItem('land-acquisition-data', JSON.stringify(formData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleCancel = () => {
    const saved = localStorage.getItem('land-acquisition-data');
    if (saved) {
      setFormData(JSON.parse(saved));
    } else {
      setFormData({});
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
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
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-semibold tracking-wide">Land Acquisition &amp; Due Diligence</h1>
              </div>
              <p className="text-white/50 text-sm font-light ml-11">
                Land identification, legal viability, and zoning compliance
              </p>
            </div>
            <div className="flex gap-4">
              {[{ label: 'Checklist Items', value: '7' }, { label: 'Section', value: '1.1' }].map(({ label, value }) => (
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
            <button key={tab} className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors rounded-t-md text-white/60 hover:text-white hover:bg-white/10`}>
              {i === 0 && <Upload className="w-3.5 h-3.5" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-[#1e4b5f] px-7 py-5 border-b border-slate-100">
            <h2 className="font-semibold text-white text-base">Land Identification &amp; Due Diligence</h2>
            <p className="text-white/60 text-xs mt-0.5 font-light">Objective: Ensure the selected land is legally viable, compliant with zoning rules, and fit for industrial operations.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-sm">
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
              <tbody>
                {tableData.map((item, i) => (
                  <InputRow 
                    key={i} 
                    item={item} 
                    values={formData[i]} 
                    onChange={(field, value) => handleInputChange(i, field, value)}
                  />
                ))}
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

