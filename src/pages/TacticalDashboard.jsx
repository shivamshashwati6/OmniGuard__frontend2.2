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
    <div className="h-screen w-full flex flex-col text-slate-200 font-mono overflow-hidden p-4 gap-4 select-none">
      {/* Top Header - Floating */}
      <header className="h-20 glass-card flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/30 rounded-xl rotate-3 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Shield size={26} className="text-brand-cyan -rotate-3" />
            </div>
            <span className="text-2xl font-black tracking-[0.25em] text-white cyan-glow-text">OMNIGUARD</span>
          </div>
          <div className="h-10 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-2 px-5 py-2 bg-brand-danger/10 border border-brand-danger/30 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <div className="w-2.5 h-2.5 bg-brand-danger rounded-full animate-blink shadow-[0_0_10px_#ef4444]" />
            <span className="text-[11px] font-black text-brand-danger tracking-[0.2em] uppercase">Tactical_Active</span>
          </div>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-1 font-bold">Chronos Protocol</span>
            <span className="text-xl text-brand-cyan font-black leading-none cyan-glow-text font-mono tracking-tighter">{time.toLocaleTimeString()}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.3em] mb-1 font-bold">Operator Node</span>
            <span className="text-xl text-white font-black leading-none tracking-tighter">OG-7729-ALPHA</span>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer shadow-2xl transition-all hover:border-brand-cyan/50 group"
          >
            <User size={26} className="text-slate-400 group-hover:text-brand-cyan transition-colors" />
          </motion.div>
        </div>
      </header>

      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Left Sidebar - Detached Floating */}
        <aside className="w-24 glass-card flex flex-col items-center py-10 gap-12">
          <SidebarIcon icon={<Radar size={28} />} label="RADAR" active />
          <SidebarIcon icon={<Activity size={28} />} label="SURVEIL" />
          <SidebarIcon icon={<Zap size={28} />} label="ARSENAL" />
          <SidebarIcon icon={<Database size={28} />} label="DIAGNOSTIC" />
          <div className="mt-auto">
            <SidebarIcon icon={<Settings size={28} />} label="SETTINGS" />
          </div>
        </aside>

        {/* Center Main Widget - Floating Pane */}
        <main className="flex-1 relative glass-card overflow-hidden group">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{backgroundImage: 'radial-gradient(var(--color-brand-cyan) 0.5px, transparent 0.5px)', backgroundSize: '48px 48px'}} />
          
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-brand-cyan/10 rounded-lg border border-brand-cyan/20">
                  <Globe size={20} className="text-brand-cyan" />
                </div>
                <span className="text-sm uppercase tracking-[0.4em] font-black text-white italic">Global Threat Matrix</span>
              </div>
              <div className="flex items-center gap-10 text-[11px] text-slate-500 font-black">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#06b6d4]" /> LAT: 40.7128° N</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#06b6d4]" /> LNG: 74.0060° W</span>
                <Maximize2 size={16} className="hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/[0.05] to-transparent pointer-events-none" />
              
              {/* Stylized Vector Map */}
              <svg viewBox="0 0 800 400" className="w-full max-w-6xl opacity-40 drop-shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <path d="M150,100 C200,80 300,150 400,120 C500,90 600,180 700,200 L700,300 C600,320 500,250 400,280 C300,310 200,220 100,200 Z" fill="rgba(6,182,212,0.05)" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
                <path d="M50,150 C100,130 200,200 300,170 C400,140 500,230 600,250" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              </svg>

              {/* Pulsing Radar Blips */}
              <RadarBlip x="35%" y="45%" color="brand-danger" label="HOSTILE AI" />
              <RadarBlip x="68%" y="58%" color="brand-warning" label="UNIDENTIFIED" />
              <RadarBlip x="48%" y="22%" color="brand-cyan" label="FRIENDLY SQUAD" />

              {/* Active Target Crosshair */}
              <motion.div 
                animate={{ x: [0, 180, -100, 0], y: [0, -90, 150, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 border border-brand-cyan/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <div className="absolute w-full h-px bg-brand-cyan/30 shadow-[0_0_15px_#06b6d444]" />
                <div className="absolute w-px h-full bg-brand-cyan/30 shadow-[0_0_15px_#06b6d444]" />
                <div className="relative">
                  <Crosshair size={48} className="text-brand-cyan animate-pulse drop-shadow-[0_0_10px_#06b6d4]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-danger rounded-full shadow-[0_0_15px_#ef4444]" />
                </div>
                <div className="absolute -top-12 -right-20 glass-panel-heavy px-4 py-3 text-[10px] whitespace-nowrap border-brand-cyan/40">
                  <div className="text-brand-cyan font-black mb-1 tracking-widest">LOCK_ON: KILO-NINER</div>
                  <div className="grid grid-cols-2 gap-x-4 text-slate-400 font-bold">
                    <span>SPD:</span> <span className="text-white">420 KTS</span>
                    <span>ALT:</span> <span className="text-white">32,000 FT</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Map Scanning Line */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-brand-cyan/15 to-transparent animate-scan" />
            </div>
          </div>
        </main>

        {/* Right Panel Stack */}
        <div className="w-[420px] flex flex-col gap-4">
          {/* Live Alert Feed */}
          <div className="flex-1 glass-card flex flex-col overflow-hidden">
            <div className="px-8 py-5 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.4em] font-black text-white cyan-glow-text italic">LIVE_FEED</span>
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_#06b6d4]" />
                 <AlertTriangle size={18} className="text-brand-warning amber-glow-text" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-5 font-mono text-[11px]">
              {alerts.map(alert => (
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  key={alert.id} 
                  className="group relative border-l-2 border-white/10 pl-5 py-3 hover:bg-white/[0.03] transition-all rounded-r-lg"
                >
                  <div className="text-slate-600 text-[9px] mb-1.5 font-black uppercase tracking-widest">UTC: {time.toLocaleTimeString()}</div>
                  <div className={`${
                    alert.type === 'danger' ? 'text-brand-danger font-black' : 
                    alert.type === 'warning' ? 'text-brand-warning' : 
                    alert.type === 'success' ? 'text-brand-accent' : 
                    'text-brand-cyan'
                  } group-hover:cyan-glow-text transition-all tracking-wide`}>
                    {">"} {alert.text}
                  </div>
                  {alert.type === 'danger' && <div className="absolute left-[-2px] top-0 bottom-0 w-1 bg-brand-danger animate-pulse shadow-[0_0_10px_#ef4444]" />}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Biometric Security */}
          <div className="h-80 glass-card flex flex-col p-6 group">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] uppercase tracking-[0.4em] font-black text-white italic">BIO_AUTH_SYSTEM</span>
              <Lock size={16} className="text-brand-cyan animate-float" />
            </div>
            <div className="flex-1 border border-white/10 rounded-3xl relative overflow-hidden flex items-center justify-center bg-black/40 group-hover:border-brand-cyan/40 transition-all duration-500 shadow-inner">
              <div className="absolute inset-0 bg-brand-cyan/[0.03] animate-pulse" />
              <div className="relative">
                 <User size={120} className="text-white/[0.02] drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
                 <motion.div 
                   animate={{ y: [-80, 80] }}
                   transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                   className="absolute left-[-60px] right-[-60px] h-[3px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent shadow-[0_0_20px_#06b6d4]" 
                 />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[10px] font-black tracking-widest uppercase">
                <span className="text-brand-cyan/90 font-mono animate-pulse">Scanning_Node...</span>
                <span className="text-brand-accent italic shadow-[0_0_10px_#10b98144]">Authorized</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <footer className="h-44 glass-card flex p-8 gap-10">
        <div className="flex-1 border border-white/10 bg-black/30 rounded-3xl p-6 flex flex-col relative overflow-hidden group hover:border-brand-cyan/30 transition-all duration-500 shadow-inner">
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div className="flex items-center gap-4">
               <Cpu size={18} className="text-brand-cyan drop-shadow-[0_0_8px_#06b6d4]" />
               <span className="text-[11px] uppercase tracking-[0.4em] font-black text-white italic">Neural Processing Load</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black text-brand-cyan/60 tracking-widest">
               <Wifi size={14} />
               <span>DOWNLINK_STABLE</span>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-2 px-2 relative z-10">
            {cpuUsage.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                className="flex-1 bg-gradient-to-t from-brand-cyan/50 to-brand-cyan/10 border-t border-brand-cyan/60 relative group rounded-t-sm shadow-[0_0_10px_rgba(6,182,212,0.1)]"
              >
                <div className="absolute inset-0 bg-brand-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-[450px] flex gap-10 px-4">
          <CircularProgress value={78} label="CORE" color="text-brand-primary" />
          <CircularProgress value={42} label="SYNC" color="text-brand-cyan" />
          <CircularProgress value={92} label="DEFENSE" color="text-brand-danger" />
        </div>

        <div className="grid grid-cols-2 gap-4 w-80">
          <StatusToggle label="HVAC_CRITICAL" active />
          <StatusToggle label="SAT_UPLINK" active />
          <StatusToggle label="ENC_COMMS" active />
          <StatusToggle label="AUTO_DEF" />
        </div>
      </footer>
    </div>
  );
};

const SidebarIcon = ({ icon, label, active = false }) => (
  <motion.button 
    whileHover={{ x: 5 }}
    className={`
      group relative w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-500
      ${active ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'text-slate-500 hover:text-white hover:bg-white/5 border border-white/5'}
    `}
  >
    {icon}
    <div className="absolute left-20 px-4 py-3 glass-panel-heavy border-brand-cyan/30 text-[10px] font-black tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 pointer-events-none z-50 italic">
      {label}
    </div>
    {/* Visual Glow */}
    <div className={`absolute inset-0 rounded-2xl transition-all blur-xl ${active ? 'bg-brand-cyan/10' : 'bg-transparent group-hover:bg-white/5'}`} />
  </motion.button>
);

const RadarBlip = ({ x, y, color, label }) => (
  <div className="absolute" style={{ left: x, top: y }}>
    <div className="flex flex-col items-center">
      <div className={`w-4 h-4 bg-${color} rounded-full relative shadow-[0_0_20px_currentColor]`}>
        <div className={`absolute inset-[-8px] border border-${color} rounded-full animate-ping opacity-75`} />
        <div className={`absolute inset-[-18px] border border-${color}/20 rounded-full animate-ping [animation-delay:0.75s]`} />
      </div>
      <div className="mt-4 glass-panel-heavy px-2 py-1 text-[8px] font-black tracking-widest text-white/90 border-white/10 uppercase italic">
        {label}
      </div>
    </div>
  </div>
);

const CircularProgress = ({ value, label, color }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    className="flex-1 flex flex-col items-center justify-center relative cursor-help"
  >
    <svg className="w-24 h-24 transform -rotate-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
      <circle cx="48" cy="48" r="42" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
      <motion.circle 
        cx="48" cy="48" r="42" stroke="currentColor" strokeWidth="4" fill="transparent" 
        strokeDasharray={263.8}
        initial={{ strokeDashoffset: 263.8 }}
        animate={{ strokeDashoffset: 263.8 - (263.8 * value) / 100 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className={`${color} drop-shadow-[0_0_12px_currentColor]`}
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center mb-2">
      <span className="text-lg font-black text-white">{value}%</span>
    </div>
    <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 mt-3 italic uppercase">{label}</span>
  </motion.div>
);

const StatusToggle = ({ label, active = false }) => (
  <motion.div 
    whileHover={{ y: -3, scale: 1.02 }}
    className={`
      p-4 border rounded-2xl flex items-center justify-between transition-all cursor-pointer shadow-2xl
      ${active ? 'bg-brand-cyan/15 border-brand-cyan/40 text-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'bg-white/5 border-white/10 text-slate-500 hover:border-white/20 hover:bg-white/[0.08]'}
    `}
  >
    <span className="text-[10px] font-black tracking-[0.2em] uppercase italic">{label}</span>
    <div className={`w-3 h-3 rounded-full ${active ? 'bg-brand-cyan animate-pulse shadow-[0_0_12px_#06b6d4]' : 'bg-slate-800'}`} />
  </motion.div>
);

export default TacticalDashboard;
