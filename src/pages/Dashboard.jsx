import React from 'react'
import { motion } from 'framer-motion'
<<<<<<< HEAD
import { AlertCircle, Users, ShieldAlert, Map as MapIcon, ChevronRight, Clock, MapPin } from 'lucide-react'

const MotionDiv = motion.div

const alerts = [
  { id: 1, title: 'Flash Flood Warning', location: 'Guwahati East', time: '2m ago', priority: 'High' },
  { id: 2, title: 'Medical Emergency', location: 'Dispur Sector 5', time: '12m ago', priority: 'Medium' },
  { id: 3, title: 'Power Grid Failure', location: 'Nagaon Central', time: '24m ago', priority: 'Low' },
  { id: 4, title: 'Structural Damage', location: 'Silchar South', time: '41m ago', priority: 'High' },
  { id: 5, title: 'Rescue Requested', location: 'Jorhat North', time: '1h ago', priority: 'High' },
]

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full gap-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-rose-200 transition-colors"
        >
          <div>
            <p className="text-sm font-medium text-slate-500">Active Incidents</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">12</h3>
            <div className="mt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">3 High Priority</span>
            </div>
          </div>
          <div className="p-4 bg-rose-50 rounded-2xl text-rose-500 group-hover:scale-110 transition-transform">
            <AlertCircle size={24} />
          </div>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-emerald-200 transition-colors"
        >
          <div>
            <p className="text-sm font-medium text-slate-500">Nearby Rescuers</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">48</h3>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Live Tracking Active
            </p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-500 group-hover:scale-110 transition-transform">
            <Users size={24} />
          </div>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-amber-200 transition-colors"
        >
          <div>
            <p className="text-sm font-medium text-slate-500">Current Risk Level</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">Elevated</h3>
            <div className="mt-2 w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
               <div className="w-3/4 h-full bg-amber-500 transition-all duration-1000"></div>
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl text-amber-500 group-hover:scale-110 transition-transform">
            <ShieldAlert size={24} />
          </div>
        </MotionDiv>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-0">
        {/* Central Map Placeholder */}
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
            {/* Stylized Box Placeholder for Map */}
            <div className="relative w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-slate-50 to-slate-50">
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                    style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
               
               {/* Map Decorative Elements */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-24 h-24 bg-white/80 rounded-full border border-slate-200 flex items-center justify-center shadow-xl animate-pulse">
                     <MapIcon size={32} className="text-slate-400" />
                  </div>
                  <p className="mt-4 text-sm font-bold text-slate-400 uppercase tracking-widest">Tactical Map Layer Loading...</p>
               </div>

               {/* Stylized Coordinate Grid */}
               <div className="absolute bottom-6 left-6 font-mono text-[10px] text-slate-400 flex flex-col gap-1">
                  <span>LAT: 26.1445° N</span>
                  <span>LNG: 91.7362° E</span>
               </div>
            </div>
          </div>
          
          {/* Map Controls Floating Overlay */}
          <div className="absolute top-6 right-6 flex flex-col gap-2">
             <button className="w-10 h-10 bg-white border border-slate-200 rounded-xl shadow-lg flex items-center justify-center text-slate-600 hover:text-emerald-500 transition-colors">
                <MapPin size={20} />
             </button>
          </div>
        </MotionDiv>

        {/* Live Alerts Feed */}
        <MotionDiv 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-4 overflow-hidden"
        >
          <div className="flex items-center justify-between px-2">
             <h4 className="font-bold text-slate-900 flex items-center gap-2">
                Live Alerts
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
             </h4>
             <button className="text-xs font-bold text-emerald-600 hover:underline">Clear</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
            {alerts.map((alert, idx) => (
              <MotionDiv
                key={alert.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.1) }}
                className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    alert.priority === 'High' ? 'text-rose-500' : 'text-slate-400'
                  }`}>
                    {alert.priority} PRIORITY
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                    <Clock size={10} />
                    {alert.time}
                  </div>
                </div>
                <h5 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors inline-flex items-center gap-2 w-full">
                  {alert.title}
                  <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
                </h5>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                  <MapPin size={10} />
                  {alert.location}
                </p>
              </MotionDiv>
            ))}
          </div>

          <button className="w-full py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg">
            View Analytics
          </button>
        </MotionDiv>
=======
import { Activity, ShieldAlert, Users, Zap, ArrowUpRight, TrendingUp, Truck, CheckCircle2 } from 'lucide-react'
import TacticalMap from '../components/TacticalMap'

const stats = [
  { label: 'Live Incidents', value: '12', icon: ShieldAlert, color: 'text-red-500', trend: '+2' },
  { label: 'Active Responders', value: '148', icon: Users, color: 'text-brand-primary', trend: 'Stable' },
  { label: 'System Uptime', value: '99.9%', icon: Activity, color: 'text-emerald-500', trend: 'Optimal' },
  { label: 'Protocol Level', value: 'B-3', icon: Zap, color: 'text-amber-500', trend: 'Standard' },
]

export default function Dashboard({ incidents, onUpdateStatus }) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-[0.1em]">Control Overview</h2>
          <p className="text-slate-500 text-sm mt-1 font-mono uppercase tracking-widest text-[10px]">Real-time telemetry and incident reports</p>
        </div>
        <div className="flex gap-3">
           <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Status: Normal</span>
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
            className="bg-brand-card/50 border border-slate-800 p-6 rounded-2xl tactical-glow group hover:border-brand-primary/30 transition-all duration-500"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl bg-slate-900/80 border border-slate-800 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tighter">
                <TrendingUp size={12} className="text-emerald-500" />
                {stat.trend}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
              <h3 className="text-4xl font-black text-white mt-1 font-mono">{stat.value}</h3>
            </div>
            <div className="mt-6 flex items-center justify-between text-[10px] text-slate-600 font-mono">
              <span>SCANNING_FREQ</span>
              <span>2.4GHz</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tactical Map Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Live Tactical Deployment</h3>
          <span className="text-[10px] text-slate-500 font-mono uppercase">Zone: Assam_Guwahati_01</span>
        </div>
        <TacticalMap incidents={incidents} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Incident Feed */}
        <div className="lg:col-span-2 bg-brand-card/50 border border-slate-800 rounded-2xl overflow-hidden self-start">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Priority Incident Feed</h3>
            <div className="flex items-center gap-2">
               <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                 {incidents.length} Active
               </span>
            </div>
          </div>
          <div className="p-0">
             {incidents.length === 0 ? (
               <div className="p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-emerald-500" size={32} />
                  </div>
                  <h4 className="text-white font-bold tracking-widest uppercase text-xs">All Clear</h4>
                  <p className="text-slate-500 text-xs mt-2 font-mono">No pending emergencies detected in current sector.</p>
               </div>
             ) : (
               incidents.map((inc, i) => (
                 <motion.div 
                   key={inc.id}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="p-6 border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors last:border-none group"
                 >
                   <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                         <span className="text-[10px] font-mono text-brand-primary font-bold">14:2{i}</span>
                         <div className="w-[2px] flex-1 bg-slate-800 my-2" />
                         <div className={`w-2 h-2 rounded-full ${inc.status === 'detected' ? 'bg-red-500 animate-pulse' : 'bg-amber-500 animate-pulse'}`} />
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center gap-3 mb-2">
                            <span className={`px-2 py-0.5 rounded text-[8px] font-bold border uppercase ${
                              inc.severity === 'high' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                              inc.severity === 'medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                              'bg-blue-500/10 text-blue-500 border-blue-500/20'
                            }`}>
                              {inc.severity}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{inc.id}</span>
                            <span className="text-[10px] font-mono text-slate-600 ml-auto">{inc.status === 'detected' ? 'UNRECOGNIZED_THREAT' : 'TEAM_EN_ROUTE'}</span>
                         </div>
                         <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{inc.type} - Alpha Sector</h4>
                         <p className="text-xs text-slate-500 mt-1 leading-relaxed">Incident detected at coordinates [{inc.lat.toFixed(4)}, {inc.lng.toFixed(4)}]. Immediate response required.</p>
                         
                         <div className="flex items-center gap-4 mt-6">
                            {inc.status === 'detected' ? (
                              <button 
                                onClick={() => onUpdateStatus(inc.id, 'dispatched')}
                                className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/80 px-4 py-2 rounded-lg text-white font-bold text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-brand-primary/20"
                              >
                                <Truck size={14} /> Dispatch Team
                              </button>
                            ) : (
                              <button 
                                onClick={() => onUpdateStatus(inc.id, 'resolved')}
                                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-white font-bold text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20"
                              >
                                <CheckCircle2 size={14} /> Resolve Case
                              </button>
                            )}
                            <button className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">Details</button>
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
          <div className="bg-brand-card/50 border border-slate-800 rounded-2xl p-6">
             <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Asset Readiness</h3>
             <div className="space-y-6">
                {[
                  { label: 'Ground Units', val: 88, color: 'bg-brand-primary' },
                  { label: 'Aerial Support', val: 42, color: 'bg-emerald-500' },
                  { label: 'Medical Response', val: 65, color: 'bg-amber-500' },
                ].map((asset) => (
                  <div key={asset.label} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{asset.label}</span>
                      <span className="text-xs font-mono font-bold text-white">{asset.val}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
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
>>>>>>> origin/main
      </div>
    </div>
  )
}
