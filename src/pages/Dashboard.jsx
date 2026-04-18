import React from 'react'
import { motion } from 'framer-motion'
import { Activity, ShieldAlert, Users, Zap, TrendingUp, Truck, CheckCircle2 } from 'lucide-react'
import TacticalMap from '../components/TacticalMap'

const stats = [
  { label: 'Live Incidents', value: '12', icon: ShieldAlert, color: 'text-red-500', trend: '+2' },
  { label: 'Active Responders', value: '148', icon: Users, color: 'text-emerald-500', trend: 'Stable' },
  { label: 'System Uptime', value: '99.9%', icon: Activity, color: 'text-emerald-500', trend: 'Optimal' },
  { label: 'Protocol Level', value: 'B-3', icon: Zap, color: 'text-amber-500', trend: 'Standard' },
]

export default function Dashboard({ incidents, onUpdateStatus }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white tracking-[0.2em] uppercase cyan-glow-text">Control Overview</h2>
          <p className="text-slate-500 text-[10px] mt-1 font-mono uppercase tracking-[0.4em]">Real-time telemetry and incident reports</p>
        </div>
        <div className="flex gap-3">
           <div className="px-5 py-2 glass-panel border-white/10 rounded-xl flex items-center gap-3 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest">Global Status: Normal</span>
           </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-5 sm:p-6 rounded-2xl group hover:border-brand-cyan/50 hover:bg-white/[0.08] transition-all duration-500"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 ${stat.color} group-hover:scale-110 transition-transform shadow-lg`}>
                <stat.icon size={24} className="sm:w-[26px] sm:h-[26px]" />
              </div>
              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tighter">
                <TrendingUp size={10} sm:size={12} className="text-emerald-500" />
                {stat.trend}
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <p className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{stat.label}</p>
              <h3 className="text-3xl sm:text-4xl font-black text-white mt-1 font-mono tracking-tighter">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Incident Feed */}
        <div className="lg:col-span-2 glass-panel rounded-2xl overflow-hidden self-start">
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] cyan-glow-text">Priority Incident Feed</h3>
            <div className="flex items-center gap-2">
               <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-widest">
                 {incidents.length} Active
               </span>
            </div>
          </div>
          <div className="p-0">
              {incidents.length === 0 ? (
                <div className="p-16 flex flex-col items-center justify-center text-center">
                   <div className="w-20 h-20 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                     <CheckCircle2 className="text-brand-cyan" size={40} />
                   </div>
                   <h4 className="text-white font-black tracking-[0.3em] uppercase text-sm">Sector Secured</h4>
                   <p className="text-slate-500 text-xs mt-3 font-mono leading-relaxed max-w-xs">Zero anomalies detected. All systems operating within optimal parameters.</p>
                </div>
              ) : (
               incidents.map((inc, i) => (
                  <motion.div 
                    key={inc.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 border-b border-white/5 hover:bg-white/[0.03] transition-all last:border-none group"
                  >
                    <div className="flex gap-8">
                       <div className="flex flex-col items-center">
                          <span className="text-[10px] font-mono text-brand-cyan font-black tracking-widest">14:2{i}</span>
                          <div className="w-px flex-1 bg-white/5 my-3" />
                          <div className={`w-2.5 h-2.5 rounded-full ${inc.status === 'detected' ? 'bg-brand-danger animate-pulse shadow-[0_0_10px_#ef4444]' : 'bg-brand-warning animate-pulse shadow-[0_0_10px_#f59e0b]'}`} />
                       </div>
                       <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                             <span className={`px-3 py-1 rounded-full text-[9px] font-black border uppercase tracking-widest ${
                               inc.severity === 'high' ? 'bg-brand-danger/20 text-brand-danger border-brand-danger/30' : 
                               inc.severity === 'medium' ? 'bg-brand-warning/20 text-brand-warning border-brand-warning/30' : 
                               'bg-brand-primary/20 text-brand-primary border-brand-primary/30'
                             }`}>
                               {inc.severity}_PRIORITY
                             </span>
                             <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">{inc.id}</span>
                             <span className="text-[10px] font-mono text-brand-cyan ml-auto font-black tracking-widest">{inc.status === 'detected' ? 'THREAT_LIVE' : 'RESPONSE_ACTIVE'}</span>
                          </div>
                          <h4 className="text-base font-black text-white group-hover:text-brand-cyan transition-colors uppercase tracking-wider">{inc.type} - Alpha Sector</h4>
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed font-mono">Incident detected at coordinates [{inc.lat.toFixed(4)}, {inc.lng.toFixed(4)}]. Immediate response sequence initiated.</p>
                     <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-4 mt-8">
                        {inc.status === 'detected' ? (
                          <button 
                            onClick={() => onUpdateStatus(inc.id, 'dispatched')}
                            className="flex items-center justify-center gap-3 bg-brand-cyan text-slate-900 px-6 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
                          >
                            <Truck size={16} /> Dispatch Sequence
                          </button>
                        ) : (
                          <button 
                            onClick={() => onUpdateStatus(inc.id, 'resolved')}
                            className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 hover:bg-white/20 px-6 py-3.5 rounded-xl text-white font-black text-[10px] uppercase tracking-[0.2em] transition-all backdrop-blur-md active:scale-95"
                          >
                            <CheckCircle2 size={16} className="text-brand-accent" /> Secure Perimeter
                          </button>
                        )}
                        <button className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-[0.2em] transition-all py-2 text-center">Telemetry Details</button>
                      </div>
                      </div>
                   </div>
                 </motion.div>
               ))
             )}
          </div>
        </div>

        {/* Status Widget */}
        <div className="space-y-6">
          <div className="glass-panel p-8 rounded-2xl shadow-2xl min-w-[320px]">
             <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em] mb-8 cyan-glow-text">Asset Readiness</h3>
             <div className="space-y-8">
                {[
                   { label: 'Ground Units', val: 88, color: 'bg-brand-cyan', shadow: 'shadow-[0_0_10px_rgba(6,182,212,0.5)]' },
                   { label: 'Aerial Support', val: 42, color: 'bg-brand-primary', shadow: 'shadow-[0_0_10px_rgba(59,130,246,0.5)]' },
                   { label: 'Medical Response', val: 65, color: 'bg-brand-accent', shadow: 'shadow-[0_0_10px_rgba(16,185,129,0.5)]' },
                ].map((asset) => (
                  <div key={asset.label} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{asset.label}</span>
                      <span className="text-xs font-mono font-black text-white tracking-widest">{asset.val}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${asset.val}%` }}
                        className={`h-full rounded-full ${asset.color} ${asset.shadow} transition-all duration-1000`}
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
