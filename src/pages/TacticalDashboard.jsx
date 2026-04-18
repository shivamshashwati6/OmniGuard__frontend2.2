import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radar, 
  Shield, 
  Settings, 
  Activity, 
  Zap, 
  AlertTriangle, 
  Lock, 
  Cpu, 
  Globe, 
  Crosshair,
  User,
  Clock as ClockIcon,
  Wifi,
  Database,
  Maximize2
} from 'lucide-react';

const TacticalDashboard = () => {
  const [time, setTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState([45, 52, 48, 60, 55, 62, 58, 44, 55, 66, 44, 33, 55, 77]);
  const [alerts, setAlerts] = useState([
    { id: 1, text: "SIGNAL DETECTED: SECTOR 7G", type: "warning" },
    { id: 2, text: "UPLINK ESTABLISHED: OMNI-SAT-4", type: "info" },
    { id: 3, text: "ENCRYPTION HANDSHAKE COMPLETE", type: "success" },
    { id: 4, text: "ANOMALY IN PERIMETER B-12", type: "danger" },
    { id: 5, text: "CORE TEMPERATURE STABLE: 34°C", type: "info" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const chartTimer = setInterval(() => {
      setCpuUsage(prev => [...prev.slice(1), Math.floor(Math.random() * 40) + 40]);
    }, 3000);
    return () => {
      clearInterval(timer);
      clearInterval(chartTimer);
    };
  }, []);

  return (
    <div className="min-h-screen lg:h-screen w-full flex flex-col volumetric-bg text-slate-300 font-mono overflow-x-hidden p-2 md:p-4 gap-4 select-none pb-24 lg:pb-4">
      {/* Top Header - Floating */}
      <header className="h-auto py-4 md:h-16 glass-panel flex flex-col md:flex-row items-center justify-between px-4 md:px-8 z-50 gap-4">
        <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/30 rounded-lg rotate-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Shield size={18} className="text-brand-cyan -rotate-3" />
            </div>
            <span className="text-lg md:text-2xl font-black tracking-[0.2em] text-white cyan-glow-text uppercase whitespace-nowrap" style={{ fontSize: 'var(--text-clamp-h2)' }}>OMNIGUARD</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-brand-danger/10 border border-brand-danger/20 rounded-full">
            <div className="w-2 h-2 bg-brand-danger rounded-full animate-blink shadow-[0_0_10px_#ef4444]" />
            <span className="text-[9px] md:text-[11px] font-black text-brand-danger tracking-widest uppercase">LIVE OPS</span>
          </div>
        </div>

        <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-10 border-t border-white/5 pt-4 md:pt-0 md:border-t-0">
          <div className="flex flex-col items-start md:items-end">
            <span className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-[0.2em]">Chronos Protocol</span>
            <span className="text-sm md:text-lg text-brand-cyan font-bold leading-none cyan-glow-text">{time.toLocaleTimeString()}</span>
          </div>
          <div className="flex flex-col items-start md:items-end hidden sm:flex">
            <span className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-[0.2em]">Node</span>
            <span className="text-sm md:text-lg text-white font-bold leading-none">OG-7729-A</span>
          </div>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-brand-cyan/10 border border-white/10 flex items-center justify-center cursor-pointer shadow-lg active:bg-brand-cyan/20"
          >
            <User size={20} className="text-brand-cyan" />
          </motion.div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden">
        {/* Left Sidebar - Detached Floating (Hidden on Mobile) */}
        <aside className="hidden lg:flex w-20 glass-panel flex-col items-center py-8 gap-10">
          <SidebarIcon icon={<Radar size={24} />} label="RADAR" active />
          <SidebarIcon icon={<Activity size={24} />} label="SURVEIL" />
          <SidebarIcon icon={<Zap size={24} />} label="ARSENAL" />
          <SidebarIcon icon={<Database size={24} />} label="DIAGNOSTIC" />
          <div className="mt-auto">
            <SidebarIcon icon={<Settings size={24} />} label="SETTINGS" />
          </div>
        </aside>

        {/* Center Main Widget - Floating Pane */}
        <main className="flex-1 relative glass-panel overflow-hidden group mobile-edge-to-edge md:mx-0 min-h-[400px] lg:min-h-0">
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{backgroundImage: 'radial-gradient(var(--color-brand-cyan) 0.5px, transparent 0.5px)', backgroundSize: '40px 40px'}} />
          
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/5 bg-white/[0.02] z-20">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-brand-cyan/10 rounded border border-brand-cyan/20">
                  <Globe size={14} className="text-brand-cyan" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-300">Tactical HUD View</span>
              </div>
              <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[10px] text-slate-500 font-bold">
                <span className="hidden sm:inline">LAT: 40.71° N</span>
                <span className="hidden sm:inline">LNG: 74.00° W</span>
                <Maximize2 size={14} className="hover:text-white cursor-pointer transition-colors active:scale-90" />
              </div>
            </div>

            <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/[0.03] to-transparent pointer-events-none" />
              
              {/* Stylized Vector Map */}
              <svg viewBox="0 0 800 400" className="w-full h-full max-w-5xl opacity-40 drop-shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <path d="M150,100 C200,80 300,150 400,120 C500,90 600,180 700,200 L700,300 C600,320 500,250 400,280 C300,310 200,220 100,200 Z" fill="rgba(6,182,212,0.05)" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M50,150 C100,130 200,200 300,170 C400,140 500,230 600,250" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                <circle cx="400" cy="200" r="150" fill="none" stroke="var(--color-brand-cyan)" strokeWidth="0.2" opacity="0.3" />
              </svg>

              {/* Pulsing Radar Blips */}
              <RadarBlip x="35%" y="45%" color="brand-danger" label="HOSTILE AI" />
              <RadarBlip x="68%" y="58%" color="brand-warning" label="UNIDENTIFIED" />
              <RadarBlip x="48%" y="22%" color="brand-cyan" label="FRIENDLY SQUAD" />

              {/* Active Target Crosshair */}
              <motion.div 
                animate={{ x: [0, 100, -50, 0], y: [0, -40, 60, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 md:w-32 md:h-32 border border-brand-cyan/20 rounded-full flex items-center justify-center pointer-events-none"
              >
                <div className="absolute w-full h-px bg-brand-cyan/20" />
                <div className="absolute w-px h-full bg-brand-cyan/20" />
                <div className="relative">
                  <Crosshair size={32} className="text-brand-cyan animate-pulse" />
                </div>
                {/* Collapsible Tooltip for Crosshair on small screens */}
                <div className="absolute -top-12 md:-top-10 -right-20 md:-right-16 glass-panel-heavy px-2 py-1.5 md:px-3 md:py-2 text-[8px] md:text-[9px] whitespace-nowrap border-brand-cyan/30 scale-75 md:scale-100">
                  <div className="text-brand-cyan font-black mb-1 uppercase">LOCK: KILO-N</div>
                  <div className="grid grid-cols-2 gap-x-2 text-slate-400 font-bold">
                    <span>SPD:</span> <span className="text-white">420</span>
                    <span>ALT:</span> <span className="text-white">32K</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Map Scanning Line */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="w-full h-1/4 bg-gradient-to-b from-transparent via-brand-cyan/10 to-transparent animate-scan" />
            </div>
          </div>
        </main>

        {/* Right Panel Stack */}
        <div className="w-full lg:w-96 flex flex-col md:flex-row lg:flex-col gap-4">
          {/* Live Alert Feed */}
          <div className="flex-1 min-h-[250px] glass-panel flex flex-col overflow-hidden">
            <div className="px-6 py-3 md:py-4 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white cyan-glow-text">LIVE ALERTS</span>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                 <AlertTriangle size={14} className="text-brand-warning amber-glow-text" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-[9px] md:text-[10px]">
              {alerts.map(alert => (
                <motion.div 
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  key={alert.id} 
                  className="group relative border-l-2 border-white/10 pl-3 py-2 hover:bg-white/[0.02] transition-all active:bg-white/5"
                >
                  <div className="text-slate-500 text-[8px] mb-0.5 font-bold uppercase">TIME: {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}</div>
                  <div className={`${
                    alert.type === 'danger' ? 'text-brand-danger font-black' : 
                    alert.type === 'warning' ? 'text-brand-warning' : 
                    alert.type === 'success' ? 'text-brand-accent font-bold' : 
                    'text-brand-cyan'
                  } transition-all uppercase leading-tight tracking-tighter`}>
                    {">"} {alert.text}
                  </div>
                  {alert.type === 'danger' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-danger animate-pulse shadow-[0_0_10px_#ef4444]" />}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Biometric Security (Small on mobile) */}
          <div className="h-auto md:h-auto lg:h-72 glass-panel flex flex-col p-4 md:p-5 group flex-1 md:flex-none md:w-64 lg:w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white">SECURE_LINK</span>
              <Lock size={14} className="text-brand-cyan" />
            </div>
            <div className="flex-1 min-h-[120px] border border-white/5 rounded-2xl relative overflow-hidden flex items-center justify-center bg-black/20 group-hover:border-brand-cyan/30 transition-colors active:bg-brand-cyan/5">
              <div className="absolute inset-0 bg-brand-cyan/[0.02] animate-pulse" />
              <div className="relative">
                 <User size={60} className="md:size-80 lg:size-100 text-white/5 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
                 <motion.div 
                   animate={{ y: [-40, 40] }}
                   transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                   className="absolute left-[-20px] right-[-20px] h-0.5 bg-gradient-to-r from-transparent via-brand-cyan to-transparent shadow-[0_0_10px_#06b6d4]" 
                 />
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[8px] font-black">
                <span className="text-brand-cyan/80 uppercase">IDENTIFYING...</span>
                <span className="text-brand-accent uppercase">SECURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <footer className="h-auto lg:h-44 glass-panel flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row p-4 md:p-6 gap-6 md:gap-8">
        {/* Animated Telemetry Charts */}
        <div className="flex-1 min-h-[120px] border border-white/5 bg-black/20 rounded-2xl p-4 flex flex-col relative overflow-hidden active:bg-black/40 transition-colors">
          <div className="flex justify-between items-center mb-4 relative z-10">
            <div className="flex items-center gap-3">
               <Cpu size={14} className="text-brand-cyan" />
               <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white">System_Load</span>
            </div>
            <div className="flex items-center gap-2 text-[8px] font-black text-brand-cyan/60 uppercase">
               <Wifi size={12} />
               <span>Linked</span>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-1 px-1 relative z-10">
            {cpuUsage.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                className="flex-1 bg-gradient-to-t from-brand-cyan/40 to-brand-cyan/10 border-t border-brand-cyan/40 relative group rounded-t-[1px]"
              >
                <div className="absolute inset-0 bg-brand-cyan/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-cyan/[0.05] to-transparent pointer-events-none" />
        </div>

        {/* Circular Gauges */}
        <div className="w-full lg:w-96 flex gap-4 md:gap-6 items-center justify-center">
          <CircularProgress value={78} label="CORE" color="text-brand-primary" />
          <CircularProgress value={42} label="SYNC" color="text-brand-cyan" />
          <CircularProgress value={92} label="DEFENSE" color="text-brand-danger" />
        </div>

        {/* Status Toggles Grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 w-full lg:w-72">
          <StatusToggle label="HVAC_SYS" active />
          <StatusToggle label="NET_PRO" active />
          <StatusToggle label="ENC_COM" active />
          <StatusToggle label="XTR_DRV" />
        </div>
      </footer>
    </div>
  );
};

const SidebarIcon = ({ icon, label, active = false }) => (
  <motion.button 
    whileTap={{ scale: 0.9 }}
    className={`
      group relative w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300
      ${active ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-[0_0_20px_rgba(6,182,212,0.3)]' : 'text-slate-500 hover:text-white hover:bg-white/5 border border-transparent'}
    `}
  >
    {icon}
    <div className="absolute left-16 px-3 py-1.5 glass-panel-heavy border-brand-cyan/20 text-[9px] font-black tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 pointer-events-none z-50 uppercase">
      {label}
    </div>
    <div className={`absolute inset-0 rounded-2xl transition-all blur-lg ${active ? 'bg-brand-cyan/10' : 'bg-transparent group-hover:bg-white/5'}`} />
  </motion.button>
);

const RadarBlip = ({ x, y, color, label }) => (
  <div className="absolute" style={{ left: x, top: y }}>
    <div className="flex flex-col items-center">
      <div className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-${color} rounded-full relative shadow-[0_0_15px_currentColor]`}>
        <div className={`absolute inset-[-4px] md:inset-[-6px] border border-${color} rounded-full animate-ping opacity-75`} />
      </div>
      <div className="mt-2 glass-panel-heavy px-1 py-0.5 text-[6px] md:text-[7px] font-black tracking-tighter text-white/80 border-white/10 uppercase">
        {label}
      </div>
    </div>
  </div>
);

const CircularProgress = ({ value, label, color }) => (
  <motion.div 
    whileTap={{ scale: 0.95 }}
    className="flex-1 flex flex-col items-center justify-center relative cursor-help"
  >
    <svg className="w-14 h-14 md:w-20 md:h-20 transform -rotate-90">
      <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5 md:hidden" />
      <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/5 hidden md:block" />
      
      {/* Mobile progress */}
      <motion.circle 
        cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="2" fill="transparent" 
        strokeDasharray={150.7}
        initial={{ strokeDashoffset: 150.7 }}
        animate={{ strokeDashoffset: 150.7 - (150.7 * value) / 100 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={`${color} drop-shadow-[0_0_5px_currentColor] md:hidden`}
      />
      {/* Desktop progress */}
      <motion.circle 
        cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="3" fill="transparent" 
        strokeDasharray={213.6}
        initial={{ strokeDashoffset: 213.6 }}
        animate={{ strokeDashoffset: 213.6 - (213.6 * value) / 100 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className={`${color} drop-shadow-[0_0_8px_currentColor] hidden md:block`}
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center mb-1">
      <span className="text-[10px] md:text-sm font-black text-white">{value}%</span>
    </div>
    <span className="text-[7px] md:text-[9px] font-black tracking-widest text-slate-500 mt-2 uppercase">{label}</span>
  </motion.div>
);

const StatusToggle = ({ label, active = false }) => (
  <motion.div 
    whileTap={{ scale: 0.98 }}
    className={`
      p-2 md:p-3 border rounded-xl flex items-center justify-between transition-all cursor-pointer shadow-lg
      ${active ? 'bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan' : 'bg-white/[0.02] border-white/5 text-slate-500 hover:border-white/20'}
    `}
  >
    <span className="text-[8px] md:text-[9px] font-black tracking-widest uppercase">{label}</span>
    <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${active ? 'bg-brand-cyan animate-pulse shadow-[0_0_8px_#06b6d4]' : 'bg-slate-700'}`} />
  </motion.div>
);

export default TacticalDashboard;
