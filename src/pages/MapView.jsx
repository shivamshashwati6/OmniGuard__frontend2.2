import React from 'react';
import TacticalMap from '../components/TacticalMap';
import { Shield, MapPin, Layers, Radio } from 'lucide-react';

export default function MapView({ incidents }) {
  return (
    <div className="flex flex-col h-full -m-6 md:-m-8 relative"> {/* Added relative for predictable overlay positioning */}
      {/* Map Header Overlay */}
      <div className="absolute top-[10px] left-[52px] z-20 flex flex-row items-stretch gap-4 pointer-events-none">
        <div className="bg-[#1a1f26]/85 backdrop-blur-[8px] p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-brand-cyan/20 flex items-center gap-5 pointer-events-auto transition-all hover:scale-105 h-[90px] min-w-[220px]">
          <div className="bg-brand-cyan/20 p-3 rounded-xl text-brand-cyan border border-brand-cyan/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Shield size={28} />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-[0.2em] leading-none uppercase">TACTICAL_VIEW</h2>
            <p className="text-[10px] font-black font-mono text-brand-accent uppercase tracking-[0.2em] mt-2">Status: Active Monitor</p>
          </div>
        </div>

        <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-800 flex flex-col justify-center gap-2 pointer-events-auto h-[80px] min-w-[180px]">
          <div className="flex items-center gap-3 text-white">
             <Radio size={16} className="text-emerald-500 animate-pulse" />
             <span className="text-[10px] font-bold uppercase tracking-widest">Live Broadcast</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-1 h-1 bg-emerald-500/50 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Map Registry Overlay (Top Right) */}
      <div className="absolute top-[10px] right-[10px] z-20 bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 rounded-2xl pointer-events-none shadow-2xl min-w-[160px]">
        <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Map Registry</h4>
        <div className="space-y-3">
           <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Detected</span>
           </div>
           <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">Team Dispatched</span>
           </div>
        </div>
      </div>

      {/* Map Controls Overlay (Right) */}
      <div className="absolute top-[145px] right-[10px] z-10 flex flex-col gap-4">
        <button className="p-3.5 bg-[#1a1f26]/90 hover:bg-white/10 border border-white/10 rounded-xl shadow-2xl transition-all active:scale-95 group backdrop-blur-md">
          <Layers size={22} className="text-slate-400 group-hover:text-brand-cyan transition-colors" />
        </button>
        <button className="p-3.5 bg-[#1a1f26]/90 hover:bg-white/10 border border-white/10 rounded-xl shadow-2xl transition-all active:scale-95 group backdrop-blur-md">
          <MapPin size={22} className="text-slate-400 group-hover:text-brand-cyan transition-colors" />
        </button>
      </div>

      {/* Full Height Map Container */}
      <div className="flex-1 w-full h-[calc(100vh-8rem)] relative overflow-hidden bg-slate-900">
        <TacticalMap incidents={incidents} />
      </div>

      {/* Legend Footer */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-10 py-4 bg-[#1a1f26]/85 backdrop-blur-[8px] border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center gap-10 z-10">
         <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-brand-danger rounded-full animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.6)]"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">High Threat</span>
         </div>
         <div className="flex items-center gap-3 border-l border-white/10 pl-10">
            <div className="w-3 h-3 bg-brand-warning rounded-full animate-pulse shadow-[0_0_12px_rgba(245,158,11,0.6)]"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Dispatched</span>
         </div>
         <div className="flex items-center gap-3 border-l border-white/10 pl-10">
            <div className="w-3 h-3 bg-brand-accent rounded-full shadow-[0_0_12px_rgba(16,185,129,0.4)]"></div>
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Assets Standby</span>
         </div>
      </div>
    </div>
  );
}
