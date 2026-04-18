import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ShieldAlert, LogOut, Activity, Zap, MapPin, User, Terminal, ShieldCheck } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { motion, AnimatePresence } from 'framer-motion'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const menuItems = {
  civilian: [
    { id: 'sos', icon: Zap, label: 'SOS', path: '/sos' },
    { id: 'status', icon: Activity, label: 'Status', path: '/status' },
    { id: 'profile', icon: User, label: 'ID', path: '/profile' },
  ],
  responder: [
    { id: 'incidents', icon: ShieldAlert, label: 'Incidents', path: '/incidents' },
    { id: 'maps', icon: MapPin, label: 'Map', path: '/maps' },
    { id: 'profile', icon: User, label: 'ID', path: '/profile' },
  ],
  coordinator: [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Center', path: '/dashboard' },
    { id: 'maps', icon: MapPin, label: 'Map', path: '/maps' },
    { id: 'alerts', icon: ShieldAlert, label: 'Threats', path: '/alerts' },
    { id: 'profile', icon: User, label: 'ID', path: '/profile' },
  ]
}

export default function Sidebar({ user, onLogout, isOpen, setIsOpen }) {
  const role = user?.role || 'civilian';
  const items = menuItems[role] || menuItems.civilian;

  return (
    <>
      {/* MOBILE BOTTOM TAB BAR */}
      <nav className="bottom-nav-container">
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center gap-1 transition-all duration-300 relative",
              isActive ? "text-brand-cyan" : "text-slate-500"
            )}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div 
                    layoutId="activeTabMobile"
                    className="absolute -top-4 w-12 h-1 bg-brand-cyan rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                  />
                )}
                <item.icon size={24} className={cn(
                  "transition-transform duration-300",
                  isActive ? "scale-110" : "scale-100"
                )} />
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
        <button 
          onClick={onLogout}
          className="flex flex-col items-center justify-center gap-1 text-slate-500 hover:text-rose-500 transition-colors"
        >
          <LogOut size={24} />
          <span className="text-[10px] font-black uppercase tracking-widest">Exit</span>
        </button>
      </nav>

      {/* DESKTOP SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <aside className={cn(
        "fixed left-0 top-0 h-full glass-panel border-r border-white/10 flex flex-col z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl overflow-hidden rounded-none hidden lg:flex",
        isOpen ? "w-64" : "w-20"
      )}>
        <div className={cn(
          "p-6 flex flex-col items-center border-b border-white/5 transition-all duration-500",
          !isOpen && "p-4"
        )}>
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-brand-cyan/10 blur-lg rounded-full" />
            <ShieldCheck className="w-8 h-8 text-brand-cyan relative z-10" />
          </div>
          <div className={cn(
            "text-center transition-all duration-500 overflow-hidden",
            isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
          )}>
            <h1 className="font-bold text-base tracking-[0.2em] text-white uppercase cyan-glow-text whitespace-nowrap">OMNIGUARD</h1>
            <p className="text-[8px] text-brand-cyan font-mono tracking-[0.4em] uppercase mt-1">Operational {role}</p>
          </div>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
          <p className={cn(
            "text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-2 transition-opacity duration-500",
            !isOpen && "opacity-0 h-0 overflow-hidden"
          )}>
            Terminal_Net
          </p>
          {items.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden active:scale-95",
                isActive 
                  ? "bg-brand-cyan/10 text-white border border-brand-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]" 
                  : "text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/10 border border-transparent",
                !isOpen && "justify-center px-0"
              )}
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 w-1 h-6 bg-brand-cyan rounded-r-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    />
                  )}
                  <item.icon size={18} className={cn(
                    "transition-transform duration-300 group-hover:scale-110 shrink-0",
                    isActive ? "text-brand-cyan" : "text-slate-400 group-hover:text-brand-cyan/70"
                  )} />
                  <span className={cn(
                    "text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-500",
                    !isOpen && "opacity-0 w-0"
                  )}>
                    {item.label}
                  </span>
                  
                  {!isOpen && (
                    <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all z-50 whitespace-nowrap translate-x-[-10px] group-hover:translate-x-0 shadow-2xl">
                      {item.label}
                    </div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 space-y-4 border-t border-white/5">
          <div className={cn(
            "bg-white/5 border border-white/10 p-4 rounded-xl transition-all duration-500 backdrop-blur-md",
            !isOpen && "p-2 flex flex-col items-center"
          )}>
            <div className={cn(
              "flex items-center justify-between mb-3 w-full",
              !isOpen && "flex-col gap-2 mb-0"
            )}>
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-brand-cyan" />
                <span className={cn(
                  "text-[9px] text-slate-500 font-black uppercase tracking-widest",
                  !isOpen && "hidden"
                )}>HEALTH</span>
              </div>
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
            </div>
            {isOpen && (
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[94%] h-full bg-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
              </div>
            )}
          </div>
          
          <button 
            onClick={onLogout}
            className={cn(
              "flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all duration-300 group active:scale-95",
              !isOpen && "justify-center px-0"
            )}
          >
            <LogOut size={18} className={cn(
              "transition-transform",
              isOpen ? "group-hover:-translate-x-1" : "group-hover:scale-110"
            )} />
            <span className={cn(
              "text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-500",
              !isOpen && "opacity-0 w-0 h-0"
            )}>
              Terminal_Exit
            </span>
          </button>
        </div>
      </aside>
    </>
  )
}
