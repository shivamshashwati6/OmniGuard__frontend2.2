import React from 'react';
import { Activity, Clock, CheckCircle2, ChevronRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CivilianStatus() {
  const requests = [
    { id: 'SOS-9921', type: 'Medical Assistance', status: 'Responder Dispatched', time: '12m ago', priority: 'High', sector: 'Downtown Guwahati' },
    { id: 'SOS-8810', type: 'Fire Assistance', status: 'Resolved', time: '2d ago', priority: 'Critical', sector: 'Beltola Sector' },
  ];

  return (
    <div className="flex flex-col min-h-full gap-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight uppercase tracking-[0.1em] glow-text">Status Tracking</h2>
          <p className="text-secondary text-sm mt-2 font-medium">Real-time lifecycle monitoring of your emergency requests</p>
        </div>
        <div className="flex gap-3">
           <div className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Unit_Sync: Active</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {requests.map((req, i) => (
          <motion.div 
            key={req.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 border-white/10 group hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden"
          >
            {req.status === 'Resolved' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rotate-45 translate-x-16 -translate-y-16 blur-xl"></div>
            )}
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
               <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-110 ${
                    req.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    <Activity size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                       <span className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-widest">{req.id}</span>
                       <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest border ${
                         req.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                       }`}>
                         {req.status}
                       </span>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{req.type}</h3>
                    <p className="text-xs text-secondary mt-1 font-medium">{req.sector}</p>
                  </div>
               </div>

               <div className="flex items-center gap-8 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-10">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Clock size={10} className="text-emerald-500" /> Reported
                     </span>
                     <span className="text-sm font-bold text-white tracking-tight">{req.time}</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <AlertCircle size={10} className="text-emerald-500" /> Impact
                     </span>
                     <span className="text-sm font-bold text-white uppercase tracking-tight">{req.priority}</span>
                  </div>
                  <button className="p-4 bg-white/5 group-hover:bg-emerald-600 group-hover:text-white rounded-2xl transition-all shadow-sm active:scale-95 border border-white/5">
                     <ChevronRight size={20} />
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto glass-panel-heavy p-10 rounded-[3.5rem] text-white relative overflow-hidden group h-64 flex items-center shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
        <div className="relative z-10 flex items-center gap-10">
           <div className="hidden lg:block w-32 h-32 bg-emerald-500/10 rounded-full flex items-center justify-center border-4 border-emerald-500/10 backdrop-blur-3xl shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <ShieldCheck size={64} className="text-emerald-400/30" />
           </div>
           <div>
              <h4 className="text-3xl font-black mb-4 tracking-tighter uppercase italic glow-text">Always Operational</h4>
              <p className="max-w-xl text-secondary text-base leading-relaxed font-medium">
                Our tactical responders are optimized for zero-latency response. Your safety window is monitored by the G-Sector Control Center in real-time.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
