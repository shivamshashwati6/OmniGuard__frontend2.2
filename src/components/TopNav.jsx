import React from 'react'
import { Bell, Search, User, Zap, Wifi, Clock, ShieldCheck, Menu } from 'lucide-react'

export default function TopNav({ user, toggleSidebar }) {
  return (
    <header className="h-16 md:h-20 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-3 md:px-8 z-10 sticky top-0">
      <div className="flex items-center gap-2 md:gap-6">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white lg:hidden"
        >
          <Menu size={20} className="md:size-[24px]" />
        </button>

        <div className="hidden lg:flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
          <Search size={14} className="text-slate-500" />
          <input 
            type="text" 
            placeholder="Search tactical database..." 
            className="bg-transparent border-none text-[9px] font-bold tracking-widest focus:outline-none text-slate-300 placeholder:text-slate-500 w-40 uppercase"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Status Indicators */}
        <div className="hidden xl:flex items-center gap-6 mr-6 border-r border-white/10 pr-6">
          <div className="flex items-center gap-2">
            <Wifi size={14} className="text-brand-cyan" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Net_Ok</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-cyan" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Sync_Ok</span>
          </div>
        </div>

        <button className="flex items-center gap-1.5 md:gap-2 bg-brand-danger text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-black text-[9px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-rose-500 transition-all active:scale-95">
          <Zap size={14} className="md:size-[18px]" fill="currentColor" />
          SOS
        </button>

        <button className="relative p-2 text-slate-500 hover:text-white transition-colors group">
          <Bell size={18} className="md:size-[20px]" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white group-hover:animate-ping"></span>
        </button>

        <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-white/10 ml-1 md:ml-2">
          <div className="text-right hidden sm:flex flex-col items-end">
            <p className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-wider">{user?.name?.split(' ')[0] || 'OP'}</p>
            <p className="text-[8px] text-brand-cyan font-mono uppercase font-black tracking-tighter">LVL_{user?.role?.slice(0,3).toUpperCase() || 'GST'}</p>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:border-brand-cyan transition-all overflow-hidden backdrop-blur-md shadow-lg">
             {user?.role === 'coordinator' ? <ShieldCheck className="text-brand-cyan" size={20} /> : <User className="text-slate-400" size={20} />}
          </div>
        </div>
      </div>
    </header>
  )
}
