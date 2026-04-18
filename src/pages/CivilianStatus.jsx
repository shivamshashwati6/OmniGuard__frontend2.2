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
          <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase cyan-glow-text">Status Tracking</h2>
          <p className="text-slate-500 text-[10px] mt-2 font-mono uppercase tracking-[0.4em]">Real-time lifecycle monitoring of your emergency requests</p>
        </div>
        <div className="flex gap-3">
           <div className="px-6 py-2.5 glass-panel border-white/10 rounded-2xl flex items-center gap-3 shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest leading-none">Unit_Sync: Active</span>
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
            className="glass-panel p-8 rounded-[2rem] group hover:border-brand-cyan/50 hover:bg-white/[0.08] transition-all duration-500 relative overflow-hidden"
          >
            {req.status === 'Resolved' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rotate-45 translate-x-16 -translate-y-16"></div>
            )}
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-6">
                   <div className={`w-16 h-16 rounded-[1.2rem] flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110 backdrop-blur-md border ${
                     req.status === 'Resolved' ? 'bg-brand-accent/20 text-brand-accent border-brand-accent/30' : 'bg-brand-warning/20 text-brand-warning border-brand-warning/30'
                   }`}>
                     <Activity size={32} />
                   </div>
                   <div>
                    <div className="flex items-center gap-4 mb-2">
                       <span className="text-[10px] font-black font-mono text-slate-500 uppercase tracking-widest">{req.id}</span>
                       <span className={`text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-xl ${
                         req.status === 'Resolved' ? 'bg-brand-accent text-slate-900' : 'bg-brand-warning text-slate-900'
                       }`}>
                         {req.status}
                       </span>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider">{req.type}</h3>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase tracking-widest">{req.sector}</p>
                  </div>
               </div>

                <div className="flex items-center gap-10 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-10">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                         <Clock size={12} className="text-brand-cyan" /> Reported
                      </span>
                      <span className="text-sm font-black text-white uppercase tracking-widest">{req.time}</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                         <AlertCircle size={12} className="text-brand-cyan" /> Impact
                      </span>
                      <span className="text-sm font-black text-white uppercase tracking-widest">{req.priority}</span>
                   </div>
                   <button className="p-4 bg-white/5 hover:bg-brand-cyan hover:text-slate-900 rounded-2xl transition-all shadow-xl backdrop-blur-md border border-white/10 active:scale-95">
                      <ChevronRight size={20} />
                   </button>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto glass-panel-heavy p-12 rounded-[2.5rem] text-white relative overflow-hidden group h-64 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10 flex items-center gap-12">
           <div className="hidden lg:block w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-3xl shadow-2xl">
              <ShieldCheck size={64} className="text-brand-cyan/40" />
           </div>
           <div>
              <h4 className="text-3xl font-black mb-4 tracking-tighter uppercase italic cyan-glow-text">Always Operational</h4>
              <p className="max-w-xl text-slate-400 text-sm leading-relaxed font-mono uppercase tracking-widest">
                Our tactical responders are optimized for zero-latency response. Your safety window is monitored by the G-Sector Control Center in real-time.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
