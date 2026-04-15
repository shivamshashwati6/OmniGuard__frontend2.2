import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, ShieldAlert, LogOut, Activity, Zap, MapPin, User, Terminal } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

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
        </div>
        
        <button 
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
