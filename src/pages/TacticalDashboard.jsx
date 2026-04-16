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
  ChevronRight,
  Wifi,
  Database
} from 'lucide-react';

const TacticalDashboard = () => {
  const [time, setTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState([45, 52, 48, 60, 55, 62, 58]);
  const [alerts, setAlerts] = useState([
    { id: 1, text: "SIGNAL DETECTED: SECTOR 7G", type: "warning" },
    { id: 2, text: "UPLINK ESTABLISHED: OMNI-SAT-4", type: "info" },
    { id: 3, text: "ENCRYPTION HANDSHAKE COMPLETE", type: "success" },
    { id: 4, text: "ANOMALY IN PERIMETER B-12", type: "danger" },
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
    <div className="h-screen w-full flex flex-col bg-brand-bg text-slate-300 font-mono overflow-hidden select-none">
      {/* Top Header */}
      <header className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-brand-card/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary/20 flex items-center justify-center border border-brand-primary/40 rotate-45">
              <Shield size={18} className="text-brand-primary -rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] text-white">OMNIGUARD</span>
          </div>
          <div className="h-4 w-px bg-white/20 mx-2" />
          <div className="flex items-center gap-2 px-3 py-1 bg-brand-danger/10 border border-brand-danger/30 rounded-sm">
            <div className="w-2 h-2 bg-brand-danger rounded-full animate-blink" />
            <span className="text-[10px] font-bold text-brand-danger tracking-tighter">LIVE STATUS</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">System Time</span>
            <span className="text-sm text-brand-cyan font-bold leading-none">{time.toLocaleTimeString()}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">Operator ID</span>
            <span className="text-sm text-white font-bold leading-none">OG-7729-ALPHA</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center overflow-hidden">
            <User size={20} className="text-slate-400" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-16 border-r border-white/10 flex flex-col items-center py-6 gap-8 bg-brand-card/40">
          <SidebarIcon icon={<Radar size={22} />} label="Radar" active />
          <SidebarIcon icon={<Activity size={22} />} label="Surveil" />
          <SidebarIcon icon={<Zap size={22} />} label="Arsenal" />
          <SidebarIcon icon={<Database size={22} />} label="Diag" />
          <div className="mt-auto">
            <SidebarIcon icon={<Settings size={22} />} label="Setup" />
          </div>
        </aside>

        {/* Center Main Widget */}
        <main className="flex-1 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#050811_100%)] p-4">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}} />
          
          <div className="relative h-full border border-white/5 rounded-lg overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-brand-primary" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Global Threat Tracking</span>
              </div>
              <div className="flex items-center gap-4 text-[9px] text-slate-500">
                <span>LAT: 40.7128° N</span>
                <span>LNG: 74.0060° W</span>
              </div>
            </div>

            <div className="flex-1 p-8 relative flex items-center justify-center">
              {/* Stylized Vector Map (SVG Placeholder for actual complex map) */}
              <svg viewBox="0 0 800 400" className="w-full max-w-4xl opacity-40">
                <path d="M150,100 C200,80 300,150 400,120 C500,90 600,180 700,200 L700,300 C600,320 500,250 400,280 C300,310 200,220 100,200 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50,150 C100,130 200,200 300,170 C400,140 500,230 600,250" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>

              {/* Pulsing Radar Blips */}
              <RadarBlip x="30%" y="40%" color="brand-danger" />
              <RadarBlip x="65%" y="60%" color="brand-warning" />
              <RadarBlip x="45%" y="25%" color="brand-cyan" />

              {/* Active Target Crosshair */}
              <motion.div 
                animate={{ x: [0, 100, -50, 0], y: [0, -50, 80, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 border border-brand-primary/40 rounded-full flex items-center justify-center"
              >
                <div className="absolute w-full h-px bg-brand-primary/40" />
                <div className="absolute w-px h-full bg-brand-primary/40" />
                <Crosshair size={32} className="text-brand-primary animate-pulse" />
                <div className="absolute -top-6 -right-12 bg-brand-primary/20 border border-brand-primary/40 px-2 py-1 text-[8px] whitespace-nowrap">
                  TARGET: KILO-NINER<br/>SPD: 420 KTS
                </div>
              </motion.div>
            </div>
            
            {/* Map Scanning Line */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent animate-scan" />
            </div>
          </div>
        </main>

        {/* Right Panel */}
        <div className="w-80 border-l border-white/10 flex flex-col bg-brand-card/40 overflow-hidden">
          {/* Live Alert Feed */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest font-bold">Live Alert Feed</span>
              <AlertTriangle size={12} className="text-brand-warning" />
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-[10px]">
              {alerts.map(alert => (
                <div key={alert.id} className="group border-l-2 border-slate-700 pl-3 py-1 hover:border-brand-primary transition-colors">
                  <span className="text-slate-500 block mb-1">[{new Date().toLocaleTimeString()}]</span>
                  <span className={`${
                    alert.type === 'danger' ? 'text-brand-danger' : 
                    alert.type === 'warning' ? 'text-brand-warning' : 
                    alert.type === 'success' ? 'text-brand-accent' : 
                    'text-brand-cyan'
                  } group-hover:brightness-125`}>
                    {alert.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Biometric Scanner */}
          <div className="h-64 border-t border-white/10 flex flex-col p-4 bg-black/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-widest font-bold">Biometric Security</span>
              <Lock size={12} className="text-brand-cyan" />
            </div>
            <div className="flex-1 border border-brand-cyan/20 rounded relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-brand-cyan/5 animate-pulse" />
              <div className="relative">
                 <User size={80} className="text-brand-cyan/30" />
                 <motion.div 
                   animate={{ y: [-40, 40] }}
                   transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                   className="absolute left-[-20px] right-[-20px] h-0.5 bg-brand-cyan shadow-[0_0_10px_#06b6d4]" 
                 />
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[8px] text-brand-cyan/60">
                <span>DNA MATCH: 99.9%</span>
                <span>STATUS: AUTHENTICATED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      <footer className="h-32 border-t border-white/10 bg-brand-card/80 backdrop-blur-md flex p-4 gap-6">
        {/* Animated Telemetry Charts */}
        <div className="flex-1 border border-white/5 bg-black/20 rounded p-2 flex flex-col">
          <div className="flex justify-between items-center mb-2 px-2">
            <span className="text-[9px] uppercase tracking-widest text-slate-500">System Telemetry</span>
            <span className="text-[9px] text-brand-cyan">UPLINK ACTIVE</span>
          </div>
          <div className="flex-1 flex items-end gap-1 px-1">
            {cpuUsage.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${val}%` }}
                className="flex-1 bg-brand-primary/30 border-t border-brand-primary/50 relative group"
              >
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Circular Gauges */}
        <div className="w-80 flex gap-4">
          <CircularProgress value={78} label="CPU" color="text-brand-primary" />
          <CircularProgress value={42} label="NET" color="text-brand-cyan" />
          <CircularProgress value={92} label="SHLD" color="text-brand-danger" />
        </div>

        {/* Environmental Status Toggles */}
        <div className="grid grid-cols-2 gap-2 w-64">
          <StatusToggle label="HVAC" active />
          <StatusToggle label="PWR" active />
          <StatusToggle label="COMM" active />
          <StatusToggle label="EXT" />
        </div>
      </footer>
    </div>
  );
};

const SidebarIcon = ({ icon, label, active = false }) => (
  <button className={`
    group relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300
    ${active ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'text-slate-500 hover:text-white hover:bg-white/5'}
  `}>
    {icon}
    <div className="absolute left-14 px-2 py-1 bg-brand-card border border-white/10 text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
      {label}
    </div>
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 rounded-lg bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-all blur-md" />
  </button>
);

const RadarBlip = ({ x, y, color }) => (
  <div className="absolute" style={{ left: x, top: y }}>
    <div className={`w-3 h-3 bg-${color} rounded-full relative`}>
      <div className={`absolute inset-[-4px] border border-${color} rounded-full animate-ping`} />
      <div className={`absolute inset-[-12px] border border-${color}/30 rounded-full animate-ping [animation-delay:0.5s]`} />
    </div>
  </div>
);

const CircularProgress = ({ value, label, color }) => (
  <div className="flex-1 flex flex-col items-center justify-center relative">
    <svg className="w-16 h-16 transform -rotate-90">
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
      <motion.circle 
        cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="transparent" 
        strokeDasharray={175.9}
        strokeDashoffset={175.9 - (175.9 * value) / 100}
        className={color}
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center mt-[-4px]">
      <span className="text-xs font-bold">{value}%</span>
    </div>
    <span className="text-[8px] uppercase tracking-widest text-slate-500 mt-1">{label}</span>
  </div>
);

const StatusToggle = ({ label, active = false }) => (
  <div className={`
    p-2 border rounded flex items-center justify-between transition-colors
    ${active ? 'bg-brand-accent/10 border-brand-accent/40 text-brand-accent' : 'bg-white/5 border-white/10 text-slate-500'}
  `}>
    <span className="text-[9px] font-bold">{label}</span>
    <div className={`w-2 h-2 rounded-full ${active ? 'bg-brand-accent animate-pulse' : 'bg-slate-700'}`} />
  </div>
);

export default TacticalDashboard;
