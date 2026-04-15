import React from 'react'
<<<<<<< HEAD
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, ShieldAlert, LogOut, Activity, Zap, MapPin, User, Terminal } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
=======
import { LayoutDashboard, ShieldAlert, LogOut, Terminal, Zap, MapPin, User, ShieldCheck } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
>>>>>>> origin/main

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

<<<<<<< HEAD
const menuItems = {
  civilian: [
    { id: 'sos', icon: Zap, label: 'Report Emergency', path: '/sos' },
    { id: 'status', icon: Activity, label: 'Status Tracking', path: '/status' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ],
  responder: [
    { id: 'incidents', icon: ShieldAlert, label: 'Active Incidents', path: '/incidents' },
    { id: 'maps', icon: MapPin, label: 'Navigation Map', path: '/maps' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ],
  coordinator: [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { id: 'command', icon: Terminal, label: 'Command Center', path: '/coordinator' },
    { id: 'maps', icon: MapPin, label: 'Asset Map', path: '/maps' },
    { id: 'alerts', icon: ShieldAlert, label: 'Alert Center', path: '/alerts' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ]
}

export default function Sidebar({ user, onLogout }) {
  const navigate = useNavigate();
  const role = user?.role || 'civilian';
  const items = menuItems[role] || menuItems.civilian;

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-full z-20">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Activity size={20} className="text-slate-900" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight">OMNIGUARD</h1>
          <p className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">{role} mode</p>
        </div>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
        {items.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
              isActive 
                ? "bg-emerald-500 text-slate-900 font-medium" 
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} className={cn(
                  isActive ? "text-slate-900" : "text-slate-500 group-hover:text-emerald-400"
                )} />
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 p-3 rounded-xl mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 uppercase">System Status</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          </div>
          <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-emerald-500"></div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2 font-mono">ENCRYPTED LINK ACTIVE</p>
=======
const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Control Center' },
  { id: 'sos', icon: Zap, label: 'Emergency SOS' },
  { id: 'maps', icon: MapPin, label: 'Tactical Map' },
  { id: 'alerts', icon: ShieldAlert, label: 'Active Threats' },
  { id: 'profile', icon: User, label: 'Operator ID' },
]

export default function Sidebar({ activeTab, setActiveTab, onLogout }) {
  return (
    <aside className="w-64 bg-brand-card border-r border-slate-800 flex flex-col h-full z-20 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary/50 blur-[2px]" />
      
      <div className="p-6 flex flex-col items-center border-b border-slate-800/50">
        <div className="relative mb-3">
          <div className="absolute inset-0 bg-red-500/20 blur-lg rounded-full" />
          <ShieldCheck className="w-8 h-8 text-red-500 relative z-10" />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-base tracking-[0.2em] text-white">OMNIGUARD</h1>
          <p className="text-[8px] text-brand-primary font-mono tracking-[0.4em] uppercase mt-1">Operational v2.2</p>
        </div>
      </div>

      <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest px-4 mb-2">Main Terminal</p>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
              activeTab === item.id 
                ? "bg-brand-primary/10 text-brand-primary border border-brand-primary/20 shadow-[0_0_15px_rgba(37,99,235,0.1)]" 
                : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
            )}
          >
            {activeTab === item.id && (
              <motion.div 
                layoutId="activeTab"
                className="absolute left-0 w-1 h-6 bg-brand-primary rounded-r-full"
              />
            )}
            <item.icon size={18} className={cn(
              "transition-transform duration-300 group-hover:scale-110",
              activeTab === item.id ? "text-brand-primary" : "text-slate-600 group-hover:text-brand-primary/70"
            )} />
            <span className="text-xs font-semibold tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 space-y-4">
        {/* System Health Card */}
        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-brand-primary" />
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Sys_Health</span>
            </div>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[8px] font-mono text-slate-500 uppercase">
              <span>Encryption</span>
              <span>Active</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[94%] h-full bg-brand-primary shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
            </div>
          </div>
>>>>>>> origin/main
        </div>
        
        <button 
          onClick={onLogout}
<<<<<<< HEAD
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
=======
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-500 hover:text-rose-400 hover:bg-rose-400/5 rounded-xl transition-all duration-300 group"
        >
          <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Terminate Session</span>
>>>>>>> origin/main
        </button>
      </div>
    </aside>
  )
}
