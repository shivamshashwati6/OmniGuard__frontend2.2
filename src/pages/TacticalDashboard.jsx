import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Radar, 
  Shield, 
  Activity, 
  Zap, 
  AlertTriangle, 
  Lock, 
  Cpu, 
  Globe, 
  Crosshair,
  Maximize2,
  Database,
  BarChart3,
  Waves,
  Wifi,
  Radio
} from 'lucide-react';

const TacticalDashboard = () => {
  const [cpuUsage, setCpuUsage] = useState([45, 52, 48, 60, 55, 62, 58, 44, 55, 66, 44, 33, 55, 77]);
  const [threatLevel, setThreatLevel] = useState(24);

  useEffect(() => {
    const chartTimer = setInterval(() => {
      setCpuUsage(prev => [...prev.slice(1), Math.floor(Math.random() * 40) + 40]);
      setThreatLevel(prev => Math.max(10, Math.min(95, prev + (Math.random() * 10 - 5))));
    }, 3000);
    return () => clearInterval(chartTimer);
  }, []);

  return (
    <div className="min-h-full w-full grid grid-cols-12 grid-rows-6 gap-6 p-2 font-mono select-none">
      
      {/* Central Tactical Map - Large Floating Unit */}
      <motion.div 
        className="col-span-12 lg:col-span-8 row-span-4 antigravity-panel overflow-hidden group relative animate-float [animation-delay:0.2s]"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{backgroundImage: 'radial-gradient(var(--color-brand-cyan) 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
        
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-brand-cyan/10 rounded-lg border border-brand-cyan/20 animate-pulse">
                <Globe size={18} className="text-brand-cyan" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white cyan-glow-text">GLOBAL_STRAT_MAP</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="px-3 py-1 bg-brand-cyan/5 border border-brand-cyan/20 rounded-md flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                  <span className="text-[9px] text-brand-cyan font-bold">UPLINK_STABLE</span>
               </div>
               <Maximize2 size={16} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex-1 relative flex items-center justify-center p-8">
            {/* Map Placeholder with Tech Overlay */}
            <div className="w-full h-full border border-brand-cyan/10 rounded-3xl relative overflow-hidden bg-black/10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
              
              {/* Pulsing Target Grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] border border-brand-cyan/5 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[400px] h-[400px] border border-brand-cyan/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="absolute w-[300px] h-[300px] border border-brand-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
              </div>

              {/* Radar Sweeper */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 origin-center pointer-events-none"
                style={{ background: 'conic-gradient(from 0deg, rgba(6, 182, 212, 0.1) 0deg, transparent 60deg)' }}
              />

              {/* Data Blips */}
              <TacticalBlip x="25%" y="35%" type="hostile" label="THREAT_detected" />
              <TacticalBlip x="65%" y="25%" type="friendly" label="TEAM_ALPHA" />
              <TacticalBlip x="55%" y="75%" type="warning" label="UNIDENTIFIED" />

              {/* Target Lock UI */}
              <motion.div 
                animate={{ x: [0, 100, -50, 0], y: [0, -50, 80, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-40 h-40 flex items-center justify-center"
              >
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-brand-cyan/20 rounded-lg animate-pulse" />
                  <Crosshair size={48} className="text-brand-cyan/60" />
                  <div className="absolute -top-12 -right-20 antigravity-panel px-4 py-2 border-brand-cyan/30 text-[9px] scale-90">
                    <div className="text-brand-cyan font-black mb-1">LOCK_SIG: K-9</div>
                    <div className="text-slate-400">DIST: 12.4KM</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Threat Level Widget */}
      <motion.div 
        className="col-span-12 lg:col-span-4 row-span-2 antigravity-panel p-6 flex flex-col justify-between animate-float [animation-delay:0.4s]"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-black tracking-[0.3em] uppercase">Sector Threat Analysis</span>
            <span className="text-2xl font-black text-white cyan-glow-text">LEVEL {Math.floor(threatLevel)}%</span>
          </div>
          <AlertTriangle className={threatLevel > 50 ? "text-brand-danger animate-bounce" : "text-brand-cyan"} size={32} />
        </div>
        
        <div className="flex-1 flex items-center justify-center py-4">
          <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div 
              animate={{ width: `${threatLevel}%` }}
              className={`h-full rounded-full ${threatLevel > 70 ? 'bg-brand-danger' : 'bg-brand-cyan'} shadow-[0_0_15px_currentColor]`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-500 uppercase font-black">AI Correlation</span>
            <span className="text-xs text-brand-cyan font-bold">MATCH: 0.992</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-500 uppercase font-black">Risk Vector</span>
            <span className="text-xs text-brand-danger font-bold">CRITICAL</span>
          </div>
        </div>
      </motion.div>

      {/* Neural Link / CPU Load */}
      <motion.div 
        className="col-span-12 lg:col-span-4 row-span-2 antigravity-panel p-6 animate-float [animation-delay:0.6s]"
      >
        <div className="flex items-center gap-3 mb-6">
          <Cpu className="text-brand-cyan animate-pulse" size={20} />
          <span className="text-[10px] font-black tracking-[0.4em] text-white">NEURAL_LOAD_TELEMETRY</span>
        </div>
        
        <div className="flex-1 flex items-end gap-1.5 h-32">
          {cpuUsage.map((val, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              className="flex-1 bg-gradient-to-t from-brand-cyan/40 to-brand-cyan/5 border-t border-brand-cyan/40 rounded-t-sm"
            />
          ))}
        </div>
        
        <div className="mt-4 flex justify-between items-center text-[9px] font-black text-slate-500 uppercase tracking-widest">
          <span>Buffer: Optimized</span>
          <span className="text-brand-cyan">Lat: 0.2ms</span>
        </div>
      </motion.div>

      {/* System Status Grid - Bottom row */}
      <motion.div className="col-span-12 lg:col-span-3 row-span-2 antigravity-panel p-5 animate-float [animation-delay:0.8s]">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={16} className="text-brand-cyan" />
          <span className="text-[9px] font-black tracking-widest text-white uppercase">Defense_Grid</span>
        </div>
        <div className="space-y-3">
          <StatusRow label="PERIMETER_SEC" active />
          <StatusRow label="AUTO_RESPONSE" active />
          <StatusRow label="CYBER_SHIELD" active />
          <StatusRow label="GHOST_PROTOCOL" />
        </div>
      </motion.div>

      <motion.div className="col-span-12 lg:col-span-3 row-span-2 antigravity-panel p-5 animate-float [animation-delay:1s]">
        <div className="flex items-center gap-2 mb-4">
          <Radio size={16} className="text-brand-cyan" />
          <span className="text-[9px] font-black tracking-widest text-white uppercase">Comms_Array</span>
        </div>
        <div className="space-y-4">
           <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[8px] font-black text-slate-500 uppercase">
                 <span>SATELLITE_LINK</span>
                 <span>94%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                 <div className="w-[94%] h-full bg-brand-cyan shadow-[0_0_8px_#06b6d4]" />
              </div>
           </div>
           <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[8px] font-black text-slate-500 uppercase">
                 <span>QUANTUM_ENC</span>
                 <span>ACTIVE</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                 <div className="w-full h-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </div>
           </div>
        </div>
      </motion.div>

      <motion.div className="col-span-12 lg:col-span-6 row-span-2 antigravity-panel p-6 animate-float [animation-delay:1.2s] relative overflow-hidden">
        <div className="absolute right-0 top-0 p-8 opacity-5">
           <BarChart3 size={120} className="text-brand-cyan" />
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Database size={18} className="text-brand-cyan" />
          <span className="text-[10px] font-black tracking-[0.4em] text-white">REACTIVE_DATA_STREAM</span>
        </div>
        <div className="grid grid-cols-3 gap-6 h-full">
           <div className="flex flex-col justify-center border-r border-white/5">
              <span className="text-[8px] text-slate-500 uppercase font-black mb-1">Total_Events</span>
              <span className="text-xl font-black text-white">4,821</span>
           </div>
           <div className="flex flex-col justify-center border-r border-white/5">
              <span className="text-[8px] text-slate-500 uppercase font-black mb-1">Processed</span>
              <span className="text-xl font-black text-brand-cyan">100%</span>
           </div>
           <div className="flex flex-col justify-center">
              <span className="text-[8px] text-slate-500 uppercase font-black mb-1">Avg_Delay</span>
              <span className="text-xl font-black text-white">12ms</span>
           </div>
        </div>
      </motion.div>

    </div>
  );
};

const TacticalBlip = ({ x, y, type, label }) => {
  const colors = {
    hostile: 'text-brand-danger',
    friendly: 'text-emerald-500',
    warning: 'text-brand-warning'
  };
  const bgColors = {
    hostile: 'bg-brand-danger',
    friendly: 'bg-emerald-500',
    warning: 'bg-brand-warning'
  };

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 ${bgColors[type]} rounded-full relative shadow-[0_0_15px_currentColor]`}>
          <div className={`absolute inset-[-6px] border border-current ${colors[type]} rounded-full animate-ping opacity-75`} />
        </div>
        <div className={`mt-2 antigravity-panel px-2 py-0.5 text-[7px] font-black uppercase tracking-tighter text-white border-white/20 whitespace-nowrap`}>
          {label}
        </div>
      </div>
    </div>
  );
};

const StatusRow = ({ label, active = false }) => (
  <div className="flex items-center justify-between group">
    <span className={`text-[9px] font-bold tracking-widest uppercase transition-colors ${active ? 'text-slate-300' : 'text-slate-600'}`}>
      {label}
    </span>
    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${active ? 'bg-brand-cyan shadow-[0_0_8px_#06b6d4] animate-pulse' : 'bg-white/5 border border-white/10'}`} />
  </div>
);

export default TacticalDashboard;

