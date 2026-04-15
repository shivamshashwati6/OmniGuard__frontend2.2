import React from 'react'
<<<<<<< HEAD
import { Bell, Search, User, Zap } from 'lucide-react'

export default function TopNav({ user }) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10 glass">
      <div className="flex items-center flex-1 max-w-2xl gap-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search districts, assets, or incidents..."
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-emerald-500/50 transition-all outline-none text-sm"
          />
        </div>
        
        <div className="hidden lg:flex flex-col items-start border-l border-slate-200 pl-8">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Status</span>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
             <span className="text-sm font-bold text-slate-700">GUWAHATI_HQ / STANDBY</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 bg-rose-500 text-white px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider sos-glow hover:bg-rose-600 transition-colors">
          <Zap size={18} fill="currentColor" />
          Quick SOS
        </button>

        <div className="flex items-center gap-4 border-l border-slate-200 pl-6 text-slate-600">
          <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
          </button>
          
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-none">{user?.name || 'Guest User'}</p>
              <p className="text-[10px] text-emerald-500 font-mono">{user?.email || 'unauthenticated'}</p>
            </div>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border-2 border-slate-200 group-hover:border-emerald-500 transition-colors overflow-hidden">
              <User size={24} className="text-slate-400" />
=======
import { Bell, Search, ShieldCheck, Wifi, Clock } from 'lucide-react'

export default function TopNav() {
  return (
    <header className="h-20 bg-brand-bg/80 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-8 z-10 sticky top-0">
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-xl">
          <Search size={16} className="text-slate-500" />
          <input 
            type="text" 
            placeholder="Search tactical database..." 
            className="bg-transparent border-none text-xs focus:outline-none text-slate-300 placeholder:text-slate-600 w-48"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Status Indicators */}
        <div className="hidden lg:flex items-center gap-6 mr-6 border-r border-slate-800 pr-6">
          <div className="flex items-center gap-2">
            <Wifi size={14} className="text-emerald-500" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Network_Stable</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-primary" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">T-UTC 22:16</span>
          </div>
        </div>

        <button className="relative p-2 text-slate-400 hover:text-white transition-colors group">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-bg group-hover:animate-ping"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-800 ml-2">
          <div className="text-right flex flex-col items-end">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Cmdr. Shashwat</p>
            <p className="text-[9px] text-brand-primary font-mono uppercase">Level 5 Access</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-blue-800 p-[1px]">
            <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center overflow-hidden">
               <ShieldCheck className="w-6 h-6 text-brand-primary/50" />
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
