import React from 'react'
import { AlertCircle, MapPin, ShieldAlert, Zap, Clock } from 'lucide-react'

const threats = [
  { id: 'T-8822', type: 'Severe Flood', district: 'Lakhimpur', status: 'Expanding', risk: 'Extreme', time: '14m ago' },
  { id: 'T-8823', type: 'Landslide', district: 'Karbi Anglong', status: 'Critical', risk: 'Major', time: '2h 15m ago' },
  { id: 'T-8824', type: 'Seismic Activity', district: 'Dhemaji', status: 'Monitoring', risk: 'Moderate', time: '5h 30m ago' },
  { id: 'T-8825', type: 'Forest Fire', district: 'Kaziranga Buffer', status: 'Contained', risk: 'Elevated', time: '8h ago' },
]

export default function ActiveThreats() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase cyan-glow-text">Active Threat Center</h2>
          <p className="text-slate-500 text-[10px] mt-2 font-mono uppercase tracking-[0.4em]">Categorized regional hazards and escalation levels</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-500 text-slate-900 px-4 py-2 rounded-xl font-bold text-sm">
          <ShieldAlert size={18} />
          New Assessment
        </button>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/5">
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Threat ID</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Hazard Type</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Status</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Risk Level</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Detected</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
              <tr key={threat.id} className="hover:bg-white/[0.03] transition-all group">
                <td className="px-6 py-5">
                   <span className="font-mono text-[11px] font-black text-slate-500 group-hover:text-brand-cyan tracking-widest">{threat.id}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl backdrop-blur-md border ${
                      threat.risk === 'Extreme' ? 'bg-brand-danger/20 text-brand-danger border-brand-danger/30' : 
                      threat.risk === 'Major' ? 'bg-brand-warning/20 text-brand-warning border-brand-warning/30' : 'bg-brand-primary/20 text-brand-primary border-brand-primary/30'
                    }`}>
                      <AlertCircle size={18} />
                    </div>
                    <span className="font-black text-white uppercase tracking-wider text-sm">{threat.type}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-[11px] text-slate-400 flex items-center gap-2 font-black uppercase tracking-widest">
                    <MapPin size={14} className="text-brand-cyan" />
                    {threat.district}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    {threat.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                    threat.risk === 'Extreme' ? 'text-brand-danger shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 
                    threat.risk === 'Major' ? 'text-brand-warning' : 'text-brand-primary'
                  }`}>
                    {threat.risk}_LVL
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-[10px] text-slate-500 flex items-center gap-2 font-black tracking-widest uppercase">
                    <Clock size={14} className="text-brand-cyan" />
                    {threat.time}
                  </span>
                </td>
                <td className="px-6 py-5 text-center">
                  <button className="p-2.5 hover:bg-white/10 rounded-xl text-slate-500 hover:text-white transition-all backdrop-blur-md border border-transparent hover:border-white/10 active:scale-90">
                    <Zap size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel-heavy p-8 rounded-2xl text-white">
          <h3 className="font-black mb-6 flex items-center gap-3 text-lg uppercase tracking-wider italic cyan-glow-text">
            <ShieldAlert className="text-brand-cyan" size={24} />
            Evacuation Protocols
          </h3>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-8">Standard operating procedures for immediate regional threat escalation.</p>
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-brand-danger backdrop-blur-md border border-white/5">
              <h4 className="font-black text-[11px] uppercase tracking-widest text-white">Level 4 Red Alert</h4>
              <p className="text-[10px] text-slate-500 mt-2 font-mono leading-relaxed">Full state mobilization and mandatory evacuation of low-lying flood zones.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-brand-warning backdrop-blur-md border border-white/5">
              <h4 className="font-black text-[11px] uppercase tracking-widest text-white">Level 3 Orange Alert</h4>
              <p className="text-[10px] text-slate-500 mt-2 font-mono leading-relaxed">Regional responder standby and pre-emptive resource distribution.</p>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-2xl">
          <h3 className="font-black mb-8 text-white text-[11px] uppercase tracking-[0.3em] cyan-glow-text">Atmospheric Analysis</h3>
          <div className="h-48 flex items-end justify-between gap-3 px-2">
             {[45, 60, 35, 80, 55, 90, 75, 40].map((h, i) => (
               <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group transition-all hover:bg-brand-cyan/10 border border-white/5">
                 <motion.div 
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   className="bg-brand-cyan/20 rounded-t-lg group-hover:bg-brand-cyan transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                 />
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-brand-cyan opacity-0 group-hover:opacity-100 transition-all">{h}%</div>
               </div>
             ))}
          </div>
          <div className="flex justify-between mt-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
            <span>Guwahati</span>
            <span>Jorhat</span>
            <span>Silchar</span>
            <span>Tinsukia</span>
          </div>
        </div>
      </div>
    </div>
  )
}
