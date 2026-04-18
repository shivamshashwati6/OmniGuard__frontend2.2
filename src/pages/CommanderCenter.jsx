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
    <div className="glass-panel text-white min-h-full p-4 sm:p-8 font-mono relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Terminal Backdrop Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(0deg, var(--color-brand-cyan) 0px, transparent 1px, transparent 3px)'}}></div>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-8 relative z-10">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-brand-cyan/10 border border-brand-cyan/30 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Terminal size={28} className="text-brand-cyan" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-[0.3em] uppercase cyan-glow-text">Commander Control</h2>
            <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-slate-500 mt-1">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#06b6d4]"></div>
              <span>CONNECTED AS: {(user?.email || 'COORDINATOR@OMNIGUARD.IO').toUpperCase()}</span>
              <span className="ml-2 border-l border-white/10 pl-3">UPTIME: 142:09:44</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setLockdownOpen(true)}
            className={`px-6 sm:px-8 py-3 rounded-xl border flex items-center justify-center gap-3 font-black text-[10px] tracking-[0.2em] transition-all active:scale-95 shadow-xl ${
              isLocked ? 'bg-brand-danger text-white border-brand-danger shadow-[0_0_25px_rgba(239,68,68,0.4)]' : 'border-brand-danger/40 text-brand-danger hover:bg-brand-danger/10 backdrop-blur-md'
            }`}
          >
            <Power size={18} />
            {isLocked ? 'ABORT LOCKDOWN' : 'INITIATE LOCKDOWN'}
          </button>
          <button className="px-6 sm:px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 font-black text-[10px] tracking-[0.2em] active:scale-95 transition-all backdrop-blur-md flex items-center justify-center">
            <Radio size={18} className="inline mr-3 text-brand-cyan" />
            MASS BROADCAST
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column: Stats & Log */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Network Load</span>
               <span className="text-xs font-black font-mono">74%</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
               <motion.div initial={{width: 0}} animate={{width: '74%'}} className="h-full bg-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.6)]"></motion.div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex-1 shadow-xl backdrop-blur-md">
             <div className="flex items-center gap-3 mb-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <Activity size={14} className="text-brand-cyan" />
                Live Terminal Log
             </div>
             <div className="text-[10px] space-y-3 overflow-y-auto max-h-[400px] font-mono pr-2">
                {terminalLog.map((log, i) => (
                  <div key={i} className="flex gap-3 leading-relaxed">
                    <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
                    <span className={log.includes('CRITICAL') ? 'text-brand-danger font-black' : 'text-slate-300'}>{log}</span>
                  </div>
                ))}
                <motion.div animate={{opacity: [0, 1]}} transition={{repeat: Infinity, duration: 0.8}} className="w-2 h-3 bg-brand-cyan inline-block shadow-[0_0_8px_#06b6d4]"></motion.div>
             </div>
          </div>
        </div>

        {/* Center Column: Incident Command Overview */}
        <div className="lg:col-span-6 space-y-6">
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden group shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rotate-45 translate-x-16 -translate-y-16"></div>
              <h3 className="font-black flex items-center gap-4 border-b border-white/5 pb-6 mb-8 text-[11px] uppercase tracking-[0.3em] cyan-glow-text">
                 <Shield className="text-brand-cyan" size={24} />
                 COMMAND OVERVIEW
              </h3>
              
              <div className="space-y-4">
                 {responders.map((r) => (
                    <div key={r.id} className="flex flex-col sm:flex-row sm:items-center justify-between border border-white/5 p-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer group hover:border-brand-cyan/30 gap-4">
                       <div className="flex items-center gap-5">
                          <div className="font-mono text-[10px] font-black text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded border border-brand-cyan/20">{r.id}</div>
                          <div>
                             <p className="text-sm font-black text-white group-hover:text-brand-cyan transition-colors uppercase tracking-wider">{r.name}</p>
                             <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1">{r.location}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className={`text-[10px] font-black tracking-widest ${r.status === 'Active' ? 'text-brand-accent' : 'text-brand-warning'}`}>{r.status.toUpperCase()}</div>
                          <div className="w-32 h-1.5 bg-white/5 rounded-full mt-2 border border-white/5 overflow-hidden">
                             <div style={{width: `${r.load}%`}} className={`h-full ${r.load > 80 ? 'bg-brand-danger shadow-[0_0_8px_#ef4444]' : 'bg-brand-accent shadow-[0_0_8px_#10b981]'}`}></div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md text-center group hover:border-brand-cyan/30 transition-all">
                 <Globe size={28} className="mx-auto mb-3 text-slate-600 group-hover:text-brand-cyan transition-colors" />
                 <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Satellite Link</p>
                 <p className="text-xs font-black text-white mt-1 tracking-widest uppercase">SECURE_Alpha_9</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md text-center group hover:border-brand-danger/30 transition-all">
                 <Lock size={28} className="mx-auto mb-3 text-brand-danger shadow-[0_0_10px_#ef444433]" />
                 <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">E-Encryption</p>
                 <p className="text-xs font-black text-white mt-1 tracking-widest uppercase">ACTIVE / 4096-BIT</p>
              </div>
           </div>
        </div>

        {/* Right Column: Operator Access Codes */}
        <div className="lg:col-span-3">
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col shadow-2xl backdrop-blur-md">
              <h3 className="font-black flex items-center gap-4 border-b border-white/5 pb-6 mb-8 text-[11px] uppercase tracking-[0.3em] cyan-glow-text">
                 <Key className="text-brand-cyan" size={24} />
                 ACCESS CODES
              </h3>
              <div className="space-y-8 flex-1">
                 {accessCodes.map((ac) => (
                    <div key={ac.id} className="border-b border-white/5 pb-5 last:border-0 relative group">
                       <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-black text-slate-600 tracking-widest">{ac.id}</span>
                          <span className={`text-[9px] font-black px-3 py-0.5 rounded-full shadow-lg ${
                            ac.status === 'Active' ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30' : 'bg-brand-danger/20 text-brand-danger border border-brand-danger/30'
                          }`}>{ac.status.toUpperCase()}</span>
                       </div>
                       <p className="text-sm font-black text-white uppercase tracking-wider">{ac.operator}</p>
                       <p className="text-[10px] text-slate-500 font-mono mt-1 tracking-widest uppercase">LVL {ac.level} • {ac.code}</p>
                    </div>
                 ))}
              </div>
              <button className="mt-8 w-full py-3 bg-white/5 border border-white/10 text-white font-black text-[10px] hover:bg-white/10 transition-all uppercase tracking-[0.3em] rounded-xl backdrop-blur-md active:scale-95 shadow-xl">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md w-full bg-[#0f172a] border-2 border-rose-500 p-8 shadow-[0_0_50px_rgba(244,63,94,0.3)] text-center"
            >
              <ShieldAlert className="text-rose-500 mx-auto mb-6" size={64} />
              <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">CRITICAL AUTHORIZATION</h4>
              <p className="text-rose-300 text-sm mb-8 leading-relaxed">
                You are about to initiate a **System-Wide Lockdown**. All active credentials will be suspended and all peripheral nodes will disconnect. This action requires Commander Level Override.
              </p>
              
              <div className="flex flex-col gap-3">
                 <button 
                  onClick={toggleLockdown}
                  className="w-full py-4 bg-rose-500 text-white font-black text-lg tracking-widest hover:bg-rose-600 transition-colors uppercase"
                 >
                   Confirm Override
                 </button>
                 <button 
                  onClick={() => setLockdownOpen(false)}
                  className="w-full py-3 bg-transparent border border-emerald-500/20 text-emerald-500/60 font-bold text-sm tracking-widest hover:bg-emerald-500/5 transition-colors uppercase"
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
