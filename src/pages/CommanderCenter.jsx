import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, ShieldAlert, Users, Terminal, Key, Lock, Radio, Activity, Globe, Power, CornerDownRight } from 'lucide-react'

const responders = [
  { id: 'R-101', name: 'Alpha Squad', status: 'On Route', location: 'Guwahati NW', load: 85 },
  { id: 'R-204', name: 'Med-Response Delta', status: 'Active', location: 'Dispur Center', load: 42 },
  { id: 'R-089', name: 'Fire Engine 12', status: 'Standby', location: 'Nagaon HQ', load: 0 },
  { id: 'R-312', name: 'Civil Guard Unit', status: 'Active', location: 'Jorhat North', load: 100 },
]

const accessCodes = [
  { id: 'OP-449', operator: 'S. Singh', code: '••••-••••', level: 4, status: 'Active' },
  { id: 'OP-122', operator: 'A. Baruah', code: '••••-••••', level: 3, status: 'Restricted' },
  { id: 'OP-982', operator: 'M. Ahmed', code: '••••-••••', level: 5, status: 'Active' },
  { id: 'OP-301', operator: 'K. Datta', code: '••••-••••', level: 2, status: 'Revoked' },
]

export default function CommanderCenter({ user }) {
  const [lockdownOpen, setLockdownOpen] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const [terminalLog, setTerminalLog] = useState([
    `> AUTHENTICATED: ${user?.email || 'coordinator@omniguard.io'}`,
    '> ENCRYPTION: AES-256 ACTIVE',
    '> SYSTEM READY'
  ])

  const toggleLockdown = () => {
    setIsLocked(!isLocked)
    setLockdownOpen(false)
    setTerminalLog(prev => [...prev, isLocked ? '> SYSTEM UNLOCKED - ALL NODES ONLINE' : '> CRITICAL: SYSTEM-WIDE LOCKDOWN INITIATED'])
  }

  return (
    <div className="glass-panel-heavy !bg-black/40 min-h-full p-6 font-mono border border-emerald-500/20 rounded-[2rem] relative overflow-hidden backdrop-blur-2xl">
      {/* Terminal Backdrop Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(0deg, #10b981 0px, transparent 1px, transparent 4px)'}}></div>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Terminal size={24} className="text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-[0.2em] uppercase text-white glow-text">Commander Control Center</h2>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
              <span className="tracking-widest">CONNECTED_AS: {(user?.email || 'COORDINATOR@OMNIGUARD.IO').toUpperCase()}</span>
              <span className="ml-2 border-l border-white/10 pl-2 tracking-widest">UPTIME: 142:09:44</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => setLockdownOpen(true)}
            className={`px-6 py-2 border flex items-center gap-2 font-bold text-xs tracking-tighter transition-all active:scale-95 ${
              isLocked ? 'bg-rose-500 text-white border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]' : 'border-rose-500/50 text-rose-500 hover:bg-rose-500/10'
            }`}
          >
            <Power size={16} />
            {isLocked ? 'ABORT LOCKDOWN' : 'INITIATE LOCKDOWN'}
          </button>
          <button className="px-6 py-2 border border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/10 font-bold text-xs tracking-tighter active:scale-95 transition-all">
            <Radio size={16} className="inline mr-2" />
            MASS BROADCAST
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column: Stats & Log */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
               <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Network Load</span>
               <span className="text-xs font-bold text-emerald-400">74%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
               <motion.div initial={{width: 0}} animate={{width: '74%'}} className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></motion.div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 backdrop-blur-md">
             <div className="flex items-center gap-2 mb-4 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                <Activity size={12} className="text-emerald-500" />
                Live Terminal Log
             </div>
             <div className="text-[10px] space-y-2 overflow-y-auto max-h-[300px] font-mono">
                {terminalLog.map((log, i) => (
                   <div key={i} className="flex gap-2">
                     <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                     <span className={log.includes('CRITICAL') ? 'text-rose-400 font-bold' : 'text-emerald-400/80'}>{log}</span>
                   </div>
                ))}
                <motion.div animate={{opacity: [0, 1]}} transition={{repeat: Infinity, duration: 0.8}} className="w-2 h-3 bg-emerald-500 inline-block"></motion.div>
             </div>
          </div>
        </div>

        {/* Center Column: Incident Command Overview */}
        <div className="lg:col-span-6 space-y-6">
           <div className="glass-panel border-white/10 p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rotate-45 translate-x-16 -translate-y-16 blur-xl"></div>
              <h3 className="font-black text-[10px] flex items-center gap-3 border-b border-white/5 pb-4 mb-6 uppercase tracking-[0.2em] text-white">
                 <Shield className="text-emerald-400" size={20} />
                 Incident Command Overview
              </h3>
              
              <div className="space-y-4">
                 {responders.map((r) => (
                   <div key={r.id} className="flex items-center justify-between border border-white/5 p-3 hover:bg-white/5 transition-all cursor-pointer group rounded-xl">
                      <div className="flex items-center gap-3">
                         <div className="font-mono text-[9px] text-emerald-400 font-bold bg-white/5 px-2 py-0.5 rounded uppercase tracking-widest">{r.id}</div>
                         <div>
                            <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{r.name}</p>
                            <p className="text-[9px] text-slate-500 uppercase tracking-widest">{r.location}</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className={`text-[9px] font-black tracking-widest ${r.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'}`}>{r.status.toUpperCase()}</div>
                         <div className="w-24 h-1 bg-white/5 rounded-full mt-1 overflow-hidden">
                            <div style={{width: `${r.load}%`}} className={`h-full ${r.load > 80 ? 'bg-rose-500' : 'bg-emerald-500'} shadow-[0_0_8px_currentColor] shadow-opacity-40`}></div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-md">
                 <Globe size={24} className="mx-auto mb-2 text-emerald-400/40" />
                 <p className="text-[9px] text-slate-500 uppercase tracking-widest">Satellite Link</p>
                 <p className="text-xs font-bold text-white tracking-tight uppercase">Secure_Alpha_9</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-md">
                 <Lock size={24} className="mx-auto mb-2 text-rose-500/50" />
                 <p className="text-[9px] text-slate-500 uppercase tracking-widest">Encryption</p>
                 <p className="text-xs font-bold text-rose-400 tracking-tight uppercase">Active / 4096-Bit</p>
              </div>
           </div>
        </div>

        {/* Right Column: Operator Access Codes */}
        <div className="lg:col-span-3">
           <div className="glass-panel border-white/10 p-6 h-full flex flex-col">
              <h3 className="font-black text-[10px] flex items-center gap-3 border-b border-white/5 pb-4 mb-6 uppercase tracking-[0.2em] text-white">
                 <Key className="text-emerald-400" size={20} />
                 Operator Access
              </h3>
              <div className="space-y-6 flex-1">
                 {accessCodes.map((ac) => (
                   <div key={ac.id} className="border-b border-white/5 pb-4 last:border-0 relative group">
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{ac.id}</span>
                         <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${
                           ac.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                         }`}>{ac.status.toUpperCase()}</span>
                      </div>
                      <p className="text-sm font-bold text-white tracking-tight">{ac.operator}</p>
                      <p className="text-[10px] text-slate-600 font-mono tracking-tighter">LVL {ac.level} • {ac.code}</p>
                   </div>
                 ))}
              </div>
              <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 text-emerald-400 font-black text-[9px] hover:bg-white/10 transition-all uppercase tracking-[0.2em] rounded-xl">
                 Generate Tokens
              </button>
           </div>
        </div>
      </div>

      {/* Lockdown Confirmation Modal */}
      <AnimatePresence>
        {lockdownOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md w-full glass-panel-heavy border-2 border-rose-500/50 p-10 shadow-[0_0_100px_rgba(244,63,94,0.3)] text-center rounded-[3rem]"
            >
              <div className="w-24 h-24 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                <ShieldAlert className="text-rose-500 animate-pulse" size={48} />
              </div>
              <h4 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter glow-text-rose">Critical Authorization</h4>
              <p className="text-secondary text-sm mb-10 leading-relaxed font-medium">
                You are about to initiate a **System-Wide Lockdown**. All active credentials will be suspended and all peripheral nodes will disconnect. This action requires Commander Level Override.
              </p>
              
              <div className="flex flex-col gap-4">
                 <button 
                  onClick={toggleLockdown}
                  className="w-full py-5 bg-rose-600 text-white font-black text-xl tracking-[0.1em] hover:bg-rose-500 transition-all uppercase rounded-2xl shadow-[0_0_20px_rgba(225,29,72,0.4)] active:scale-95"
                 >
                   Confirm Override
                 </button>
                 <button 
                  onClick={() => setLockdownOpen(false)}
                  className="w-full py-4 bg-white/5 border border-white/10 text-slate-400 font-black text-xs tracking-[0.2em] hover:bg-white/10 transition-all uppercase rounded-2xl"
                 >
                   Aborted Initiation
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
