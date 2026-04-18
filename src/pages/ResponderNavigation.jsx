import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, CheckCircle, AlertTriangle, MapPin, Radio, Activity } from 'lucide-react';
import TacticalMap from '../components/TacticalMap';

export default function ResponderNavigation() {
  const mockIncident = { id: 'INC-772', type: 'Medical Emergency', location: 'Bhetapara, Guwahati' };

  return (
    <div className="flex flex-col h-full gap-6">
       <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-black text-white tracking-[0.2em] flex items-center gap-4 uppercase cyan-glow-text">
             <Navigation className="text-brand-cyan" size={32} />
             Tactical Navigation
          </h2>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.4em] mt-2">Real-time GPS routing to {mockIncident.id}</p>
        </div>
        <div className="flex gap-4">
           <div className="px-6 py-2.5 bg-white/5 backdrop-blur-md text-white rounded-xl border border-white/10 flex items-center gap-4 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_#10b981]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent">Telemetry: Online</span>
           </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Map Column */}
        <div className="lg:col-span-8 bg-slate-900 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 z-0">
             <TacticalMap incidents={[{ ...mockIncident, lat: 26.1445, lng: 91.7362, status: 'dispatched', severity: 'high' }]} />
          </div>

          {/* Map Overlay HUD */}
          <div className="absolute top-6 left-[72px] z-10 w-full max-w-lg">
             <div className="bg-[#1a1f26]/85 backdrop-blur-[8px] p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 flex items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                   <div className="bg-brand-cyan/20 p-5 rounded-2xl text-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-brand-cyan/30 shrink-0">
                      <Navigation size={32} />
                   </div>
                   <div className="min-w-0">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Routing Instruction</p>
                      <p className="font-black text-white text-xl truncate tracking-tight mt-1">350m - Turn Right at Beltola Chowk</p>
                   </div>
                </div>
             </div>
          </div>

           {/* Top Right Overlays */}
           <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-4 pointer-events-none">
              {/* Est. Arrival Pop-up */}
              <div className="bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-800 flex flex-col items-end pointer-events-auto min-w-[140px]">
                <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Est. Arrival</p>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-3xl font-black leading-none">4</span>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-500">Min</span>
                </div>
              </div>

              {/* Map Registry Pop-up */}
              <div className="bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-800 pointer-events-auto min-w-[140px]">
                <h4 className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Map Registry</h4>
                <div className="space-y-3">
                   <div className="flex items-center justify-end gap-3 text-right">
                      <span className="text-[9px] text-slate-300 font-bold uppercase tracking-wider">Detected</span>
                      <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
                   </div>
                   <div className="flex items-center justify-end gap-3 text-right">
                      <span className="text-[9px] text-slate-300 font-bold uppercase tracking-wider">Team Dispatched</span>
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                   </div>
                </div>
              </div>
           </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-4 flex flex-col gap-8">
           <div className="glass-panel p-10 rounded-[2.5rem] shadow-2xl flex-1 border border-white/10">
              <div className="flex items-center gap-4 mb-10">
                 <Activity className="text-brand-cyan" size={24} />
                 <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">Mission Control</h3>
              </div>

              <div className="space-y-5 mb-12">
                 <div className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Current Sector</p>
                    <p className="font-black text-white tracking-widest text-sm">ALPHA_DENSE_02</p>
                 </div>
                 <div className="p-5 bg-brand-cyan/10 rounded-2xl border border-brand-cyan/20 backdrop-blur-md shadow-xl">
                    <p className="text-[10px] font-black text-brand-cyan uppercase tracking-widest mb-1">Assigned Incident</p>
                    <p className="font-black text-white uppercase tracking-widest text-sm">{mockIncident.type}</p>
                 </div>
              </div>

              <div className="space-y-4">
                 <p className="text-[10px] font-black text-white uppercase tracking-[0.3em] ml-2 mb-6 cyan-glow-text">Update Pulse Status</p>
                 <button className="w-full py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all active:scale-95 uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 shadow-xl">
                    <Radio size={18} className="text-brand-cyan" />
                    Signal: In Transit
                 </button>
                 <button className="w-full py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all active:scale-95 uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 shadow-xl">
                    <Activity size={18} className="text-brand-warning" />
                    Signal: On Scene
                 </button>
                 <div className="h-8" />
                 <button className="w-full py-6 bg-brand-cyan text-slate-900 font-black rounded-[1.8rem] shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-4 text-xl uppercase tracking-widest">
                    <CheckCircle size={32} />
                    RESOLVED
                 </button>
                 <button className="w-full py-4 bg-transparent text-brand-danger font-black rounded-2xl hover:bg-brand-danger/10 transition-all flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.3em] opacity-60 hover:opacity-100 mt-4">
                    <AlertTriangle size={16} />
                    Emergency Override
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
