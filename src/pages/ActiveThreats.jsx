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
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase cyan-glow-text">Active Threat Center</h2>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.4em] mt-1">Categorized regional hazards and escalation levels</p>
        </div>
        <button className="flex items-center gap-3 bg-brand-danger text-white px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-105 transition-all">
          <ShieldAlert size={18} />
          New Assessment
        </button>
      </div>

      <div className="bg-[#1a1f26] rounded-2xl border border-[#2d333b] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 border-b border-[#2d333b]">
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Threat ID</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Hazard Type</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Status</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Risk Level</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Detected</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2d333b]">
              {threats.map((threat) => (
                <tr key={threat.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-5">
                     <span className="font-mono text-xs font-black text-slate-500 group-hover:text-brand-cyan transition-colors">{threat.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl border ${
                        threat.risk === 'Extreme' ? 'bg-brand-danger/20 text-brand-danger border-brand-danger/30' : 
                        threat.risk === 'Major' ? 'bg-brand-warning/20 text-brand-warning border-brand-warning/30' : 
                        'bg-brand-primary/20 text-brand-primary border-brand-primary/30'
                      }`}>
                        <AlertCircle size={18} />
                      </div>
                      <span className="font-black text-[#e1e1e1] uppercase tracking-wider text-sm">{threat.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs text-slate-400 font-bold flex items-center gap-2 uppercase tracking-widest">
                      <MapPin size={14} className="text-brand-cyan" />
                      {threat.district}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_#10b981]"></span>
                      {threat.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                      threat.risk === 'Extreme' ? 'text-brand-danger cyan-glow-text' : 
                      threat.risk === 'Major' ? 'text-brand-warning' : 'text-brand-primary'
                    }`}>
                      {threat.risk}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-2 tracking-widest uppercase">
                      <Clock size={14} />
                      {threat.time}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="touch-target p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-500 hover:text-brand-cyan hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all active:scale-95">
                      <Zap size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden divide-y divide-[#2d333b]">
          {threats.map((threat) => (
            <div key={threat.id} className="p-6 space-y-4 hover:bg-white/[0.02] transition-colors group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${
                    threat.risk === 'Extreme' ? 'bg-brand-danger/20 text-brand-danger border-brand-danger/30' : 
                    threat.risk === 'Major' ? 'bg-brand-warning/20 text-brand-warning border-brand-warning/30' : 
                    'bg-brand-primary/20 text-brand-primary border-brand-primary/30'
                  }`}>
                    <AlertCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#e1e1e1] uppercase tracking-wider text-sm">{threat.type}</h4>
                    <span className="font-mono text-[10px] font-black text-slate-500">{threat.id}</span>
                  </div>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                  threat.risk === 'Extreme' ? 'text-brand-danger' : 
                  threat.risk === 'Major' ? 'text-brand-warning' : 'text-brand-primary'
                }`}>
                  {threat.risk}
                </span>
              </div>
              
              <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-brand-cyan" />
                  {threat.district}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={12} />
                  {threat.time}
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_#10b981]"></span>
                  {threat.status}
                </span>
                <button className="touch-target p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-500 hover:text-brand-cyan active:scale-95">
                  <Zap size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1a1f26] p-8 rounded-2xl border border-[#2d333b] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rotate-45 translate-x-16 -translate-y-16"></div>
          <h3 className="font-black text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-3 border-b border-white/5 pb-5 cyan-glow-text">
            <ShieldAlert className="text-brand-cyan" size={24} />
            Evacuation Protocols
          </h3>
          <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.2em] mb-8 leading-relaxed">Standard operating procedures for immediate regional threat escalation.</p>
          <div className="space-y-5">
            <div className="p-5 bg-white/5 border border-white/10 rounded-xl border-l-4 border-l-brand-danger shadow-xl backdrop-blur-md">
              <h4 className="font-black text-xs text-white uppercase tracking-widest">Level 4 Red Alert</h4>
              <p className="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest leading-relaxed">Full state mobilization and mandatory evacuation of low-lying flood zones.</p>
            </div>
            <div className="p-5 bg-white/5 border border-white/10 rounded-xl border-l-4 border-l-brand-warning shadow-xl backdrop-blur-md">
              <h4 className="font-black text-xs text-white uppercase tracking-widest">Level 3 Orange Alert</h4>
              <p className="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest leading-relaxed">Regional responder standby and pre-emptive resource distribution.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#1a1f26] p-8 rounded-2xl border border-[#2d333b] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rotate-45 translate-x-16 -translate-y-16"></div>
          <h3 className="font-black text-white uppercase tracking-[0.3em] mb-10 border-b border-white/5 pb-5 cyan-glow-text">Atmospheric Analysis</h3>
          <div className="h-52 flex items-end justify-between gap-3 px-2">
             {[45, 60, 35, 80, 55, 90, 75, 40].map((h, i) => (
               <div key={i} className="flex-1 bg-white/5 rounded-t-xl relative group transition-all hover:bg-brand-cyan/10 border border-white/5">
                 <div style={{height: `${h}%`}} className="bg-brand-cyan/20 rounded-t-xl group-hover:bg-brand-cyan group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-500"></div>
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-brand-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 tracking-widest">{h}%</div>
               </div>
             ))}
          </div>
          <div className="flex justify-between mt-6 text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] font-mono">
            <span>GUW</span>
            <span>JOR</span>
            <span>SIL</span>
            <span>TIN</span>
          </div>
        </div>
      </div>
    </div>
  )
}
