import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Activity, 
  Map as MapIcon, 
  Cpu, 
  Radio, 
  AlertTriangle, 
  Zap, 
  Target,
  Globe,
  Terminal,
  Lock,
  Unlock,
  Crosshair,
  Bell
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const TacticalDashboard = () => {
  const [logs, setLogs] = useState([
    { id: 1, time: '21:45:02', msg: 'SYSTEM INITIALIZED', status: 'info' },
    { id: 2, time: '21:45:10', msg: 'PERIMETER SENSORS ACTIVE', status: 'info' },
    { id: 3, time: '21:45:15', msg: 'ENCRYPTED UPLINK ESTABLISHED', status: 'success' },
  ]);

  const [threatLevel, setThreatLevel] = useState(12);
  const [activeAssets, setActiveAssets] = useState(8);

  // Simulate live logs
  useEffect(() => {
    const interval = setInterval(() => {
      const msgs = [
        'SECURE PKI HANDSHAKE COMPLETED',
        'SATELLITE DELTA-4 IN RANGE',
        'ANOMALOUS ACTIVITY DETECTED SECTOR 7',
        'ROUTINE DIAGNOSTICS: 100% PASS',
        'ENCRYPTED FRAGMENT RECEIVED',
      ];
      const newLog = {
        id: Date.now(),
        time: new Date().toLocaleTimeString('en-GB'),
        msg: msgs[Math.floor(Math.random() * msgs.length)],
        status: Math.random() > 0.8 ? 'warning' : 'info'
      };
      setLogs(prev => [newLog, ...prev].slice(0, 15));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bento-grid font-sans relative overflow-hidden">
      <div className="scan-line" />
      
      {/* HEADER SECTION - Span all 12 columns */}
      <header className="col-span-12 row-span-1 tactical-panel flex items-center justify-between px-6 bg-tactical-cyan/5">
        <div className="flex items-center gap-4">
          <Shield className="text-tactical-cyan w-8 h-8 glow-cyan" />
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">
              OMNIGUARD <span className="text-tactical-cyan text-sm align-top ml-1">v2.2</span>
            </h1>
            <p className="mono text-[10px] text-tactical-cyan opacity-60">Strategic Command Level 4</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex flex-col items-end">
            <span className="mono text-tactical-amber">System Status: Optimal</span>
            <div className="flex gap-1 mt-1">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="w-4 h-1 bg-tactical-cyan/40" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 bg-black/40 px-4 py-2 rounded border border-white/5">
             <div className="flex flex-col">
               <span className="mono text-xs opacity-50 text-right">Local Time</span>
               <span className="mono text-lg text-white font-bold">{new Date().toLocaleTimeString()}</span>
             </div>
             <div className="w-[1px] h-8 bg-white/10" />
             <div className="flex flex-col">
               <span className="mono text-xs opacity-50">Uplink</span>
               <span className="mono text-lg text-tactical-cyan">99.8%</span>
             </div>
          </div>
        </div>
      </header>

      {/* LEFT SIDEBAR - Threat Analysis */}
      <aside className="col-span-3 row-span-5 tactical-panel p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-tactical-cyan/20 pb-2">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-tactical-crimson" />
            <h2 className="mono text-sm font-bold">Threat Matrix</h2>
          </div>
          <span className="animate-pulse w-2 h-2 rounded-full bg-tactical-crimson shadow-[0_0_8px_#ff003c]" />
        </div>
        
        <div className="flex-1 flex flex-col justify-around py-4">
          <div className="relative h-40 w-40 mx-auto">
             <div className="absolute inset-0 border-[4px] border-dashed border-tactical-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute inset-4 border border-tactical-cyan/10 rounded-full" />
             <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-4xl font-black text-white mono">{threatLevel}</span>
                <span className="mono text-[10px] opacity-60">Threat Index</span>
             </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="mono text-[10px] opacity-70">Kinetic Risk</span>
              <span className="mono text-xs text-tactical-amber">Low</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
               <motion.div initial={{width: 0}} animate={{width: '24%'}} className="h-full bg-tactical-amber h-full" />
            </div>
            
            <div className="flex justify-between items-end">
              <span className="mono text-[10px] opacity-70">Cyber Intrusion</span>
              <span className="mono text-xs text-tactical-crimson">Elevated</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
               <motion.div initial={{width: 0}} animate={{width: '78%'}} className="h-full bg-tactical-crimson h-full" />
            </div>
          </div>
        </div>
        
        <button className="w-full mt-auto py-3 bg-tactical-crimson/20 border border-tactical-crimson/50 text-tactical-crimson mono text-xs font-bold hover:bg-tactical-crimson hover:text-white transition-all uppercase flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" /> Initiate Defensive Protocol
        </button>
      </aside>

      {/* CENTER - Strategic Map */}
      <main className="col-span-6 row-span-8 tactical-panel relative group">
        <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-2">
           <div className="bg-black/80 backdrop-blur border border-tactical-cyan/30 p-2 mono text-[10px] flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-tactical-cyan animate-pulse" />
             LIVE FEED: GLOBAL SAT-B-9
           </div>
           <div className="bg-black/80 backdrop-blur border border-tactical-cyan/30 p-2 mono text-[10px]">
             COORD: 34.0522° N, 118.2437° W
           </div>
        </div>
        
        <div className="absolute top-4 right-4 z-[1000] flex gap-2">
           <button className="bg-black/80 p-2 border border-tactical-cyan/30 text-tactical-cyan hover:bg-tactical-cyan/20">
             <Crosshair className="w-4 h-4" />
           </button>
           <button className="bg-black/80 p-2 border border-tactical-cyan/30 text-tactical-cyan hover:bg-tactical-cyan/20">
             <Globe className="w-4 h-4" />
           </button>
        </div>

        {/* Placeholder for Map - In a real app we'd use Leaflet here */}
        <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center opacity-80 mix-blend-screen overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />
           <MapContainer 
             center={[20, 0]} 
             zoom={2} 
             scrollWheelZoom={false} 
             className="w-full h-full grayscale invert opacity-40 contrast-125"
             zoomControl={false}
           >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
              <Marker position={[20, 0]}>
                <Popup className="mono">Asset Alpha-1</Popup>
              </Marker>
           </MapContainer>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-[1000] flex justify-between items-end">
           <div className="flex gap-1 h-32 items-end">
             {[40, 70, 50, 90, 60, 45, 80, 55, 30, 85].map((h, i) => (
                <div key={i} className="w-4 bg-tactical-cyan/10 border-t border-tactical-cyan/40 transition-all duration-500" style={{height: `${h}%`}} />
             ))}
           </div>
           <div className="flex flex-col items-end gap-2">
              <span className="mono text-[10px] text-tactical-cyan">Scanning...</span>
              <div className="w-48 h-1 bg-white/5 overflow-hidden">
                <motion.div animate={{x: ['-100%', '100%']}} transition={{repeat: Infinity, duration: 2, ease: 'linear'}} className="w-1/2 h-full bg-tactical-cyan" />
              </div>
           </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR - Asset Grid */}
      <aside className="col-span-3 row-span-8 tactical-panel p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-tactical-cyan/20 pb-2">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-tactical-cyan" />
            <h2 className="mono text-sm font-bold">Active Assets</h2>
          </div>
          <span className="mono text-xs text-tactical-cyan">{activeAssets}/12</span>
        </div>

        <div className="grid grid-cols-2 gap-2 overflow-y-auto pr-1 custom-scrollbar">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="p-3 bg-white/5 border border-white/5 flex flex-col gap-2 group hover:border-tactical-cyan/40 transition-all cursor-crosshair">
                <div className="flex justify-between items-center">
                  <span className="mono text-[10px] text-white/40 italic">#AS-00{i+1}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${i % 3 === 0 ? 'bg-tactical-amber animate-pulse' : 'bg-tactical-cyan'}`} />
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1 px-1.5 bg-black/40 border border-tactical-cyan/20">
                     <Cpu className="w-3 h-3 text-tactical-cyan" />
                  </div>
                  <span className="mono text-[11px] font-bold">X-RESPONDER</span>
                </div>
                <div className="mono text-[9px] opacity-50">
                  LAT: 40.7128<br/>
                  LNG: -74.0060
                </div>
             </div>
           ))}
        </div>

        <div className="mt-auto space-y-4">
           <div className="flex items-center justify-between">
              <span className="mono text-xs opacity-60">Communication Uplink</span>
              <span className="mono text-xs text-tactical-cyan font-bold">STABLE</span>
           </div>
           <div className="flex gap-0.5 h-8 items-center">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="flex-1 bg-tactical-cyan/20 hover:bg-tactical-cyan" style={{height: `${Math.random() * 100}%`}} />
              ))}
           </div>
           <button className="w-full py-2 border border-tactical-cyan shadow-[0_0_10px_rgba(0,243,255,0.2)] text-tactical-cyan mono text-xs font-bold hover:bg-tactical-cyan hover:text-black transition-all">
             DEPLOY REINFORCEMENTS
           </button>
        </div>
      </aside>

      {/* BOTTOM - System Logs & Comms */}
      <footer className="col-span-12 row-span-3 tactical-panel p-4 flex gap-6">
        <div className="w-1/3 flex flex-col gap-2">
          <div className="flex items-center gap-2 border-b border-tactical-cyan/20 pb-2 mb-2">
            <Terminal className="w-4 h-4 text-tactical-cyan" />
            <h2 className="mono text-sm font-bold">System Console</h2>
          </div>
          <div className="flex-1 overflow-y-auto font-mono text-[10px] space-y-1 custom-scrollbar">
            {logs.map((log) => (
              <div key={log.id} className="flex gap-4 opacity-70 hover:opacity-100">
                <span className="text-white/30">[{log.time}]</span>
                <span className={log.status === 'warning' ? 'text-tactical-amber' : log.status === 'success' ? 'text-tactical-cyan' : 'text-slate-400'}>
                   {log.msg}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-2/3 grid grid-cols-4 gap-4">
           <div className="col-span-1 flex flex-col justify-between border-l border-tactical-cyan/10 pl-4">
              <div className="flex flex-col">
                <span className="mono text-[10px] opacity-50 uppercase">Network Load</span>
                <span className="mono text-xl text-white">42.8 GB/s</span>
              </div>
              <div className="w-full h-1 bg-white/5">
                <div className="w-[42%] h-full bg-tactical-cyan shadow-[0_0_5px_#00f3ff]" />
              </div>
              <div className="flex flex-col mt-2">
                <span className="mono text-[10px] opacity-50 uppercase">Encryption Depth</span>
                <span className="mono text-xl text-white">4096-BIT</span>
              </div>
           </div>

           <div className="col-span-2 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                 <h3 className="mono text-xs">Security Protocols</h3>
                 <span className="text-[10px] mono text-tactical-cyan opacity-60 italic">RUNNING 4 NODES</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                 {[
                   { label: 'SENTINEL', icon: Shield, active: true },
                   { label: 'AEGIS', icon: Lock, active: true },
                   { label: 'GHOST', icon: Unlock, active: false },
                   { label: 'VALKYRIE', icon: Activity, active: true },
                 ].map((p, i) => (
                   <div key={i} className={`flex items-center gap-3 p-2 bg-white/5 border ${p.active ? 'border-tactical-cyan/30' : 'border-white/5 opacity-40 grayscale'} transition-all`}>
                      <p.icon className={`w-4 h-4 ${p.active ? 'text-tactical-cyan' : 'text-white/40'}`} />
                      <span className="mono text-xs font-bold">{p.label}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="col-span-1 flex flex-col items-center justify-center p-4 bg-tactical-crimson/10 border border-tactical-crimson/30 relative">
              <AnimatePresence>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-tactical-crimson/5 pointer-events-none"
                />
              </AnimatePresence>
              <Bell className="w-8 h-8 text-tactical-crimson mb-2 glow-crimson" />
              <span className="mono text-[10px] text-tactical-crimson font-black tracking-widest text-center">EMERGENCY BROADCAST ACTIVE</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default TacticalDashboard;
