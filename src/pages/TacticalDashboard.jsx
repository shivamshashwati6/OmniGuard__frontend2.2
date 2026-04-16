import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  Users, 
  Activity, 
  Zap, 
  Target, 
  Radio, 
  Terminal, 
  Cpu, 
  Crosshair,
  AlertTriangle,
  ChevronRight,
  Clock
} from 'lucide-react';
import TacticalPanel from '../components/TacticalPanel';
import TacticalMap from '../components/TacticalMap';

const MOCK_LOGS = [
  { time: '21:14:02', msg: 'SYSTEM_INITIALIZED: OMNIGURAD_V2.2', type: 'info' },
  { time: '21:14:15', msg: 'UPLINK_ESTABLISHED: SECTOR_7_NODE_4', type: 'info' },
  { time: '21:15:22', msg: 'THREAT_DETECTED: UNKNOWN_SIGNATURE_ALPHA', type: 'danger' },
  { time: '21:16:05', msg: 'RESPONDER_BETA_EN_ROUTE: SECTOR_4', type: 'warning' },
];

export default function TacticalDashboard({ incidents, onUpdateStatus }) {
  const [logs, setLogs] = useState(MOCK_LOGS);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-brand-obsidian text-brand-cyan overflow-hidden selection:bg-brand-cyan/20">
      {/* Scanning Line Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[length:100%_4px]" />
      
      {/* Header */}
      <header className="h-14 border-b border-brand-cyan/20 bg-brand-glass flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center rotate-45">
            <ShieldAlert size={18} className="-rotate-45" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-[0.3em] uppercase relative group">
              OMNIGUARD
              <span className="absolute inset-0 text-brand-crimson opacity-0 group-hover:opacity-100 group-hover:animate-pulse -translate-x-1">OMNIGUARD</span>
              <span className="absolute inset-0 text-brand-cyan opacity-0 group-hover:opacity-100 group-hover:animate-pulse translate-x-1">OMNIGUARD</span>
            </h1>
            <p className="text-[8px] font-mono tracking-widest text-brand-cyan/60 uppercase">Tactical_Command_Interface_v2.2</p>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-mono text-brand-cyan/50 tracking-widest uppercase">Network Status</span>
            <span className="text-xs font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              CONNECTED_LOCAL_GRID
            </span>
          </div>
          <div className="flex flex-col items-end border-l border-brand-cyan/20 pl-8">
            <span className="text-[10px] font-mono text-brand-cyan/50 tracking-widest uppercase">System Time</span>
            <span className="text-xs font-mono font-bold">{time}</span>
          </div>
          <button 
            onClick={() => {
              localStorage.removeItem('omni_user');
              window.location.reload();
            }}
            className="p-2 border border-brand-crimson/30 bg-brand-crimson/5 text-brand-crimson hover:bg-brand-crimson/20 transition-all rounded"
            title="Emergency Logout"
          >
            <Power size={18} />
          </button>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="h-[calc(100vh-3.5rem)] p-2 grid grid-cols-12 grid-rows-6 gap-2">
        
        {/* Left Col: Status & Resources (3 cols) */}
        <div className="col-span-3 row-span-6 flex flex-col gap-2">
          {/* System Performance */}
          <TacticalPanel title="System_Telemetry" className="flex-1">
             <div className="space-y-4">
                {[
                  { label: 'CPU_LOAD', val: 42, icon: Cpu },
                  { label: 'NET_LATENCY', val: 18, color: 'text-brand-cyan' },
                  { label: 'THREAT_LEVEL', val: 65, color: 'text-brand-amber', icon: AlertTriangle },
                ].map((s) => (
                  <div key={s.label} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="flex items-center gap-2">
                        {s.icon && <s.icon size={10} />}
                        {s.label}
                      </span>
                      <span>{s.val}%</span>
                    </div>
                    <div className="h-1 bg-brand-cyan/10 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${s.val}%` }}
                        className={`h-full ${s.color || 'bg-brand-cyan'}`}
                      />
                    </div>
                  </div>
                ))}
             </div>
             
             <div className="mt-6 pt-6 border-t border-brand-cyan/10 grid grid-cols-2 gap-2">
                <div className="p-2 bg-brand-cyan/5 border border-brand-cyan/10">
                   <p className="text-[8px] font-mono text-brand-cyan/50">NODES_ON</p>
                   <p className="text-sm font-mono font-bold">1,248</p>
                </div>
                <div className="p-2 bg-brand-cyan/5 border border-brand-cyan/10">
                   <p className="text-[8px] font-mono text-brand-cyan/50">UPTIME</p>
                   <p className="text-sm font-mono font-bold">14d 2h</p>
                </div>
             </div>
          </TacticalPanel>

          {/* Asset Grid */}
          <TacticalPanel title="Personnel_Log" className="flex-1">
             <div className="space-y-2 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
                {[
                  { id: 'ALPHA-1', status: 'ACTIVE', pos: '26.1N, 91.7E' },
                  { id: 'BETA-4', status: 'STANDBY', pos: '26.2N, 91.6E' },
                  { id: 'GAMMA-7', status: 'ENGAGED', pos: '26.1N, 91.8E' },
                  { id: 'DELTA-2', status: 'OFFLINE', pos: 'N/A' },
                ].map(unit => (
                  <div key={unit.id} className="flex items-center justify-between p-2 bg-brand-cyan/5 border border-brand-cyan/5 hover:border-brand-cyan/20 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${unit.status === 'ENGAGED' ? 'bg-brand-crimson animate-pulse' : unit.status === 'ACTIVE' ? 'bg-brand-cyan' : 'bg-slate-600'}`} />
                        <div>
                          <p className="text-[10px] font-bold font-mono">{unit.id}</p>
                          <p className="text-[8px] font-mono text-brand-cyan/50">{unit.pos}</p>
                        </div>
                     </div>
                     <span className="text-[8px] font-mono px-1 border border-brand-cyan/20 uppercase">{unit.status}</span>
                  </div>
                ))}
             </div>
          </TacticalPanel>

          {/* Quick Controls */}
          <TacticalPanel title="Sector_Protocols" className="h-40" accent="amber">
             <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="p-2 border border-brand-amber/30 bg-brand-amber/5 text-[9px] font-black uppercase tracking-tighter hover:bg-brand-amber/20 transition-all">LOCKDOWN</button>
                <button className="p-2 border border-brand-cyan/30 bg-brand-cyan/5 text-[9px] font-black uppercase tracking-tighter hover:bg-brand-cyan/20 transition-all">DEPLOY_DRONES</button>
                <button className="p-2 border border-brand-cyan/30 bg-brand-cyan/5 text-[9px] font-black uppercase tracking-tighter hover:bg-brand-cyan/20 transition-all">COMMS_PRIORITY</button>
                <button className="p-2 border border-brand-cyan/30 bg-brand-cyan/5 text-[9px] font-black uppercase tracking-tighter hover:bg-brand-cyan/20 transition-all">GRID_REBOOT</button>
             </div>
          </TacticalPanel>
        </div>

        {/* Center Col: Map (6 cols) */}
        <div className="col-span-6 row-span-4 flex flex-col gap-2">
          <TacticalPanel title="Strategic_Mapping_System" className="flex-1 !p-0 overflow-hidden relative">
             <div className="absolute top-4 left-4 z-10 flex gap-2">
                <div className="px-3 py-1 bg-brand-obsidian/80 border border-brand-cyan/30 text-[9px] font-mono flex items-center gap-2 backdrop-blur-md">
                   <Target size={12} className="text-brand-cyan" />
                   LAT: 26.1445
                </div>
                <div className="px-3 py-1 bg-brand-obsidian/80 border border-brand-cyan/30 text-[9px] font-mono flex items-center gap-2 backdrop-blur-md">
                   <Target size={12} className="text-brand-cyan" />
                   LNG: 91.7362
                </div>
             </div>
             <TacticalMap incidents={incidents} />
             
             {/* Map Scanning Effect */}
             <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <motion.div 
                  initial={{ top: '-100%' }}
                  animate={{ top: '100%' }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-full h-[200%] bg-gradient-to-b from-transparent via-brand-cyan/40 to-transparent skew-y-12"
                />
             </div>
          </TacticalPanel>
        </div>

        {/* Right Col: Alerts & Data (3 cols) */}
        <div className="col-span-3 row-span-4 flex flex-col gap-2">
           <TacticalPanel title="High_Priority_Alerts" accent="crimson" className="flex-1">
              <div className="space-y-3">
                 {incidents.filter(i => i.severity === 'high').map(inc => (
                   <motion.div 
                    layout
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    key={inc.id} 
                    className="p-3 bg-brand-crimson/5 border-l-2 border-brand-crimson flex flex-col gap-1"
                   >
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-mono bg-brand-crimson text-white px-1 uppercase">{inc.id}</span>
                        <span className="text-[8px] font-mono text-brand-crimson animate-pulse">CRITICAL_THREAT</span>
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-tight">{inc.type}</h4>
                      <div className="flex justify-between items-center mt-2">
                         <span className="text-[9px] font-mono text-brand-cyan/50">{inc.lat.toFixed(4)}N, {inc.lng.toFixed(4)}E</span>
                         <button 
                          onClick={() => onUpdateStatus(inc.id, 'dispatched')}
                          className="text-[9px] font-black text-brand-crimson hover:underline"
                         >
                           DISPATCH >>
                         </button>
                      </div>
                   </motion.div>
                 ))}
                 {incidents.filter(i => i.severity === 'high').length === 0 && (
                   <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-20">
                      <Target size={40} className="mb-4" />
                      <p className="text-xs font-mono uppercase tracking-widest">No Active Threats</p>
                   </div>
                 )}
              </div>
           </TacticalPanel>

           <TacticalPanel title="Comm_Logs" className="h-48 overflow-hidden">
              <div className="font-mono text-[9px] space-y-1 overflow-y-auto h-[calc(100%-1.5rem)] pr-2 custom-scrollbar">
                 {logs.map((log, i) => (
                   <div key={i} className={`flex gap-2 p-1 border-b border-white/[0.02] ${log.type === 'danger' ? 'text-brand-crimson bg-brand-crimson/5' : log.type === 'warning' ? 'text-brand-amber bg-brand-amber/5' : 'text-brand-cyan/70'}`}>
                      <span className="opacity-40">[{log.time}]</span>
                      <span className="opacity-60">{log.type.toUpperCase()}:</span>
                      <span>{log.msg}</span>
                   </div>
                 ))}
                 <div className="animate-pulse text-brand-cyan mt-1">_ TERMINAL_READY</div>
              </div>
           </TacticalPanel>
        </div>

        {/* Bottom Strip: 2nd half (9 cols) */}
        <div className="col-span-9 row-span-2 grid grid-cols-3 gap-2">
           <TacticalPanel title="Environmental_Data">
              <div className="flex items-center justify-between h-full">
                 <div className="space-y-1">
                    <p className="text-[8px] font-mono text-brand-cyan/50">TEMPERATURE</p>
                    <p className="text-xl font-mono font-bold">24.5°C</p>
                 </div>
                 <div className="space-y-1 text-right">
                    <p className="text-[8px] font-mono text-brand-cyan/50">HUMIDITY</p>
                    <p className="text-xl font-mono font-bold">62%</p>
                 </div>
                 <div className="w-16 h-16 border border-brand-cyan/20 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border-t-2 border-brand-cyan animate-spin duration-[3000ms] rounded-full" />
                    <Radio size={20} className="text-brand-cyan/40" />
                 </div>
              </div>
           </TacticalPanel>
           
           <TacticalPanel title="Active_Deployments">
              <div className="flex flex-col justify-center h-full space-y-3">
                 <div className="flex justify-between items-center text-[10px] font-mono">
                    <span>SECTOR_ALPHA</span>
                    <span className="text-brand-cyan font-bold tracking-[0.2em]">68%</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] font-mono">
                    <span>SECTOR_BETA</span>
                    <span className="text-brand-amber font-bold tracking-[0.2em]">42%</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] font-mono">
                    <span>SECTOR_GAMMA</span>
                    <span className="text-brand-crimson font-bold tracking-[0.2em]">12%</span>
                 </div>
              </div>
           </TacticalPanel>

           <TacticalPanel title="Operational_Notes">
              <div className="p-2 bg-brand-cyan/5 h-full border border-brand-cyan/10">
                 <p className="text-[10px] font-mono leading-relaxed text-brand-cyan/80">
                   ALERT: Grid instability detected in Alpha Sector. Recommend drone reconnaissance for potential blind spots.
                 </p>
              </div>
           </TacticalPanel>
        </div>

      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 243, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 243, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
