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
          <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-[0.1em] glow-text">Control Overview</h2>
          <p className="text-secondary text-sm mt-1 font-mono uppercase tracking-widest text-[10px]">Real-time telemetry and incident reports</p>
        </div>
        <div className="flex gap-3">
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Status: Normal</span>
           </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 border-white/10 group hover:border-emerald-500/50 transition-all duration-500"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${stat.color} group-hover:scale-110 transition-transform shadow-[0_0_15px_currentColor] shadow-opacity-10`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tighter">
                <TrendingUp size={12} className="text-emerald-500" />
                {stat.trend}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
              <h3 className="text-4xl font-black text-white mt-1 font-mono tracking-tighter">{stat.value}</h3>
            </div>
            <div className="mt-6 flex items-center justify-between text-[9px] text-slate-500 font-mono font-bold">
              <span>SCANNING_FREQ</span>
              <span className="text-emerald-400">2.4GHz</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Incident Feed */}
        <div className="lg:col-span-2 glass-panel border-white/10 overflow-hidden self-start">
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Priority Incident Feed</h3>
            <div className="flex items-center gap-2">
               <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                 {incidents.length} Active
               </span>
            </div>
          </div>
          <div className="p-0">
             {incidents.length === 0 ? (
                <div className="p-12 flex flex-col items-center justify-center text-center">
                   <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                     <CheckCircle2 className="text-emerald-400" size={32} />
                   </div>
                   <h4 className="text-white font-black tracking-widest uppercase text-xs">All Clear</h4>
                   <p className="text-secondary text-xs mt-2 font-mono">No pending emergencies detected in current sector.</p>
                </div>
             ) : (
               incidents.map((inc, i) => (
                 <motion.div 
                   key={inc.id}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="p-6 border-b border-white/5 hover:bg-white/5 transition-colors last:border-none group"
                 >
                   <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                         <span className="text-[10px] font-mono text-emerald-400 font-bold">14:2{i}</span>
                         <div className="w-[1px] flex-1 bg-white/5 my-2" />
                         <div className={`w-1.5 h-1.5 rounded-full ${inc.status === 'detected' ? 'bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]' : 'bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]'}`} />
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-2">
                            <span className={`px-2 py-0.5 rounded text-[8px] font-black border uppercase tracking-wider ${
                              inc.severity === 'high' ? 'bg-rose-500/20 text-rose-400 border-rose-500/30' : 
                              inc.severity === 'medium' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 
                              'bg-blue-500/20 text-blue-400 border-blue-500/30'
                            }`}>
                              {inc.severity}
                            </span>
                            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{inc.id}</span>
                            <span className="text-[9px] font-mono text-slate-400 ml-auto tracking-tighter opacity-50">{inc.status === 'detected' ? 'UNRECOGNIZED_THREAT' : 'TEAM_EN_ROUTE'}</span>
                         </div>
                         <h4 className="text-sm font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{inc.type} - Alpha Sector</h4>
                         <p className="text-xs text-secondary mt-1 leading-relaxed">Incident detected at coordinates [{inc.lat.toFixed(4)}, {inc.lng.toFixed(4)}]. Immediate response required.</p>
                         
                         <div className="flex items-center gap-4 mt-6">
                            {inc.status === 'detected' ? (
                              <button 
                                onClick={() => onUpdateStatus(inc.id, 'dispatched')}
                                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg text-white font-black text-[9px] uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20"
                              >
                                <Truck size={14} /> Dispatch Team
                              </button>
                            ) : (
                              <button 
                                onClick={() => onUpdateStatus(inc.id, 'resolved')}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-lg text-white font-black text-[9px] uppercase tracking-widest transition-all shadow-lg"
                              >
                                <CheckCircle2 size={14} /> Resolve Case
                              </button>
                            )}
                            <button className="text-[9px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Details</button>
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
          <div className="glass-panel border-white/10 p-6">
             <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-6">Asset Readiness</h3>
             <div className="space-y-6">
                {[
                  { label: 'Ground Units', val: 88, color: 'bg-emerald-500 shadow-[0_0_10px_#10b981]' },
                  { label: 'Aerial Support', val: 42, color: 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' },
                  { label: 'Medical Response', val: 65, color: 'bg-amber-500 shadow-[0_0_10px_#f59e0b]' },
                ].map((asset) => (
                  <div key={asset.label} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{asset.label}</span>
                      <span className="text-xs font-mono font-bold text-white">{asset.val}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${asset.val}%` }}
                        className={`h-full rounded-full ${asset.color}`}
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
