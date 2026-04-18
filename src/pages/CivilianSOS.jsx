import React from 'react';
import ReportEmergency from './ReportEmergency';
import { ShieldCheck, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CivilianSOS() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/status');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-4xl w-full">
         <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-brand-accent rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl shadow-brand-accent/30 mb-6 rotate-3">
               <ShieldCheck size={32} className="text-white md:size-[40px]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-[-0.05em] uppercase leading-tight" style={{ color: '#ff3131', textShadow: '0 0 12px rgba(255, 49, 49, 0.6)', fontSize: 'var(--text-clamp-h1)' }}>
               EMERGENCY_SOS_LINK
            </h1>
            <p className="text-[#eaeaea] font-black text-[10px] md:text-sm max-w-lg mx-auto leading-relaxed uppercase tracking-[0.1em] opacity-80" style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.3)' }}>
               Automated high-priority routing is active. Your report will be immediately dispatched to the nearest tactical response unit.
            </p>
         </div>

         <div className="bg-[#16191f] border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-6 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-brand-accent via-emerald-400 to-brand-accent/80"></div>
            <ReportEmergency onSuccess={handleSuccess} />
         </div>

         <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 px-4 md:px-10 text-slate-500">
            <div className="flex items-center gap-2">
               <Info size={12} className="md:size-[14px]" />
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none">GPS_LATENCY: 1.2ms</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></div>
            <div className="flex items-center gap-2">
               <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none">SIGNAL: OPTIMAL</span>
            </div>
         </div>
      </div>
    </div>
  );
}
