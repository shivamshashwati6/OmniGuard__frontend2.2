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
        <button className="flex items-center gap-3 bg-brand-cyan text-slate-900 px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all active:scale-95">
          <ShieldAlert size={18} />
          New Assessment
        </button>
      </div>

      <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.03] border-b border-white/5">
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Threat ID</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Hazard Type</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Status</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Risk Level</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Detected</th>
              <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {threats.map((threat) => (
              <tr key={threat.id} className="hover:bg-white/[0.03] transition-all group">
                <td className="px-6 py-5">
                  <span className="font-mono text-[11px] font-black text-slate-500 group-hover:text-brand-cyan tracking-widest transition-colors">{threat.id}</span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl backdrop-blur-md border ${
                      threat.risk === 'Extreme' ? 'bg-brand-danger/20 text-brand-danger border-brand-danger/30 shadow-[0_0_10px_#ef444433]' : 
                      threat.risk === 'Major' ? 'bg-brand-warning/20 text-brand-warning border-brand-warning/30 shadow-[0_0_10px_#f59e0b33]' : 
                      'bg-brand-primary/20 text-brand-primary border-brand-primary/30 shadow-[0_0_10px_#3b82f633]'
                    }`}>
                      <AlertCircle size={18} />
                    </div>
                    <span className="font-black text-white text-sm tracking-wider group-hover:text-brand-cyan transition-colors">{threat.type}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={14} className="text-brand-cyan" />
                    {threat.district}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-slate-400 uppercase tracking-widest backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_#10b981]"></span>
                    {threat.status}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                    threat.risk === 'Extreme' ? 'bg-brand-danger/10 text-brand-danger border-brand-danger/30' : 
                    threat.risk === 'Major' ? 'bg-brand-warning/10 text-brand-warning border-brand-warning/30' : 
                    'bg-brand-primary/10 text-brand-primary border-brand-primary/30'
                  }`}>
                    {threat.risk}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-brand-cyan" />
                    {threat.time}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <button className="p-2.5 hover:bg-white/10 border border-transparent hover:border-white/10 rounded-xl text-slate-500 hover:text-brand-cyan transition-all backdrop-blur-md">
                    <Zap size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel-heavy p-8 rounded-2xl text-white shadow-2xl">
          <h3 className="text-[11px] font-black mb-6 flex items-center gap-3 uppercase tracking-[0.3em] cyan-glow-text">
            <ShieldAlert className="text-brand-cyan" size={24} />
            Evacuation Protocols
          </h3>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.3em] mb-8 leading-relaxed">Standard operating procedures for immediate regional threat escalation.</p>
          <div className="space-y-6">
            <div className="p-5 bg-white/5 border border-white/5 rounded-2xl border-l-4 border-l-brand-danger backdrop-blur-md shadow-xl">
              <h4 className="font-black text-sm uppercase tracking-wider text-brand-danger">Level 4 Red Alert</h4>
              <p className="text-[10px] text-slate-400 font-mono mt-2 leading-relaxed uppercase tracking-widest">Full state mobilization and mandatory evacuation of low-lying flood zones.</p>
            </div>
            <div className="p-5 bg-white/5 border border-white/5 rounded-2xl border-l-4 border-l-brand-warning backdrop-blur-md shadow-xl">
              <h4 className="font-black text-sm uppercase tracking-wider text-brand-warning">Level 3 Orange Alert</h4>
              <p className="text-[10px] text-slate-400 font-mono mt-2 leading-relaxed uppercase tracking-widest">Regional responder standby and pre-emptive resource distribution.</p>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl">
          <h3 className="text-[11px] font-black mb-8 text-white uppercase tracking-[0.3em] cyan-glow-text">Atmospheric Analysis</h3>
          <div className="h-52 flex items-end justify-between gap-3 px-2">
             {[45, 60, 35, 80, 55, 90, 75, 40].map((h, i) => (
               <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group transition-all hover:bg-white/10 border border-white/5">
                 <motion.div 
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   className="bg-brand-cyan/20 rounded-t-lg group-hover:bg-brand-cyan/60 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                 ></motion.div>
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black font-mono text-brand-cyan opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">{h}%</div>
               </div>
             ))}
          </div>
          <div className="flex justify-between mt-8 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] font-mono">
            <span>Guwahati_Node</span>
            <span>Jorhat_Node</span>
            <span>Silchar_Node</span>
            <span>Tinsukia_Node</span>
          </div>
        </div>
      </div>
    </div>
  )
}
