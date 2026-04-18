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
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3 italic">
             <Navigation className="text-emerald-500" />
             Tactical Navigation
          </h2>
          <p className="text-slate-400 font-medium">Real-time GPS routing to {mockIncident.id}</p>
        </div>
        <div className="flex gap-4">
            <div className="px-5 py-2 bg-white/5 text-white rounded-xl border border-white/10 flex items-center gap-3 shadow-2xl">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
               <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Telemetry: Online</span>
            </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map Column */}
        <div className="lg:col-span-8 bg-slate-950/50 rounded-[2.5rem] border border-slate-800 relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 z-0">
             <TacticalMap incidents={[{ ...mockIncident, lat: 26.1445, lng: 91.7362, status: 'dispatched', severity: 'high' }]} />
          </div>

          {/* Map Overlay HUD */}
          <div className="absolute top-6 left-[72px] z-10 w-full max-w-md">
             <div className="glass-panel p-6 rounded-3xl shadow-2xl flex items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                   <div className="bg-emerald-500 p-4 rounded-2xl text-white shadow-xl shadow-emerald-500/40 shrink-0">
                      <Navigation size={28} />
                   </div>
                   <div className="min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Routing Instruction</p>
                      <p className="font-black text-white text-lg truncate">350m - Turn Right at Beltola Chowk</p>
                   </div>
                </div>
             </div>
          </div>

           {/* Top Right Overlays */}
           <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-4 pointer-events-none">
              {/* Est. Arrival Pop-up */}
              <div className="glass-panel p-5 rounded-2xl shadow-2xl flex flex-col items-end pointer-events-auto min-w-[140px] border-white/10">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Est. Arrival</p>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-3xl font-black leading-none">4</span>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-500">Min</span>
                </div>
              </div>

              {/* Map Registry Pop-up */}
              <div className="glass-panel p-5 rounded-2xl shadow-2xl border-white/10 pointer-events-auto min-w-[140px]">
                <h4 className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Map Registry</h4>
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
        <div className="lg:col-span-4 flex flex-col gap-6">
           <div className="glass-card p-8 flex-1">
              <div className="flex items-center gap-3 mb-8">
                 <Activity className="text-emerald-500" />
                 <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Mission Control</h3>
              </div>

              <div className="space-y-4 mb-10">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Current Sector</p>
                    <p className="font-bold text-white tracking-wide">ALPHA_DENSE_02</p>
                 </div>
                 <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">Assigned Incident</p>
                    <p className="font-black text-white uppercase tracking-tight">{mockIncident.type}</p>
                 </div>
              </div>

              <div className="space-y-3">
                 <p className="text-[10px] font-black text-white uppercase tracking-widest ml-1 mb-4 italic">Update Pulse Status</p>
                 <button className="w-full py-4 bg-blue-600/20 text-blue-400 border border-blue-600/30 font-black rounded-2xl shadow-xl hover:bg-blue-600/30 transition-all active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                    <Radio size={16} />
                    Signal: In Transit
                 </button>
                 <button className="w-full py-4 bg-amber-500/20 text-amber-400 border border-amber-500/30 font-black rounded-2xl shadow-xl hover:bg-amber-500/30 transition-all active:scale-95 uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                    <Activity size={16} />
                    Signal: On Scene
                 </button>
                 <div className="h-6" />
                 <button className="w-full py-5 bg-emerald-500 text-white font-black rounded-[1.5rem] shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg uppercase tracking-tighter">
                    <CheckCircle size={26} />
                    MISSION RESOLVED
                 </button>
                 <button className="w-full py-3 bg-transparent text-rose-500 font-bold rounded-2xl hover:bg-rose-500/10 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-widest opacity-60 hover:opacity-100">
                    <AlertTriangle size={14} />
                    Emergency Override
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
