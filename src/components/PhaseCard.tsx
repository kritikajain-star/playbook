// src/components/PhaseCard.tsx
import { motion } from 'framer-motion';

export default function PhaseCard({ title, sub, description, icon, dark, onClick }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      onClick={onClick}
      className={`cursor-pointer rounded-[1.5rem] p-12 text-center flex flex-col items-center border h-full transition-all
        ${dark ? 'bg-[#0f172a] text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}
    >
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-inner ${dark ? 'bg-slate-800' : 'bg-[#2a5d77]'}`}>
        <div className="text-white">{icon}</div>
      </div>
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <p className="text-sm opacity-70 mb-2 font-medium tracking-wide uppercase">{sub}</p>
      <p className="text-xs opacity-50 max-w-[200px]">{description}</p>
    </motion.div>
  );
}