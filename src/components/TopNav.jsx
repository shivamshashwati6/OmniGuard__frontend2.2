import React from 'react'
import { Bell, Search, User, Zap, Wifi, Clock, ShieldCheck, Menu } from 'lucide-react'

export default function TopNav({ user, toggleSidebar }) {
  return (
    <header className="h-20 antigravity-panel flex items-center justify-between px-6 md:px-10 z-10 sticky top-0 animate-float [animation-delay:1s]">
      <div className="flex items-center gap-4 md:gap-6">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
        >
          <Menu size={24} />
        </button>

        <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
          <Search size={16} className="text-slate-500" />
          <input 
            type="text" 
            placeholder="Search tactical database..." 
            className="bg-transparent border-none text-[10px] font-bold tracking-widest focus:outline-none text-slate-300 placeholder:text-slate-500 w-48 uppercase"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Status Indicators */}
        <div className="hidden lg:flex items-center gap-6 mr-6 border-r border-white/10 pr-6">
          <div className="flex items-center gap-2">
            <Wifi size={14} className="text-brand-cyan" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Network_Stable</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-cyan" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">T-SYNC ACTIVE</span>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-rose-600 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:bg-rose-500 transition-all active:scale-95">
          <Zap size={18} fill="currentColor" />
          Quick SOS
        </button>

        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors group">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white group-hover:animate-ping"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-white/10 ml-2">
          <div className="text-right flex flex-col items-end">
            <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{user?.name || 'Operator ID'}</p>
            <p className="text-[9px] text-brand-cyan font-mono uppercase font-black tracking-widest">{user?.role || 'Guest'} Access</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-cyan transition-all overflow-hidden backdrop-blur-md shadow-xl">
             {user?.role === 'coordinator' ? <ShieldCheck className="text-brand-cyan" size={24} /> : <User className="text-slate-400" size={24} />}
          </div>
        </div>
      </div>
    </header>
  )
}
