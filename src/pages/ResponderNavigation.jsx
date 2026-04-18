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
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3 glow-text">
             <Navigation className="text-emerald-400" />
             Tactical Navigation
          </h2>
          <p className="text-secondary font-medium">Real-time GPS routing to {mockIncident.id}</p>
        </div>
        <div className="flex gap-4">
           <div className="px-5 py-2 bg-white/5 text-white rounded-xl border border-white/10 flex items-center gap-3 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Telemetry: Online</span>
           </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map Column */}
        <div className="lg:col-span-8 bg-black/20 rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 z-0">
             <TacticalMap incidents={[{ ...mockIncident, lat: 26.1445, lng: 91.7362, status: 'dispatched', severity: 'high' }]} />
          </div>

          {/* Map Overlay HUD */}
          <div className="absolute top-6 left-[72px] z-10 w-full max-w-md">
             <div className="glass-panel-heavy p-6 flex items-center justify-between gap-6 border-white/10">
                <div className="flex items-center gap-5">
                   <div className="bg-emerald-600 p-4 rounded-2xl text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0">
                      <Navigation size={28} />
                   </div>
                   <div className="min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Routing Instruction</p>
                      <p className="font-black text-white text-lg truncate tracking-tight">350m - Turn Right at Beltola Chowk</p>
                   </div>
                </div>
             </div>
          </div>

           {/* Top Right Overlays */}
           <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-4 pointer-events-none">
               {/* Est. Arrival Pop-up */}
               <div className="glass-panel-heavy p-5 border-white/10 flex flex-col items-end pointer-events-auto min-w-[140px]">
                 <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Est. Arrival</p>
                 <div className="flex items-baseline gap-1 text-white">
                   <span className="text-3xl font-black leading-none tracking-tighter glow-text">4</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Min</span>
                 </div>
               </div>

               {/* Map Registry Pop-up */}
               <div className="glass-panel-heavy p-5 border-white/10 pointer-events-auto min-w-[140px]">
                 <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">Map Registry</h4>
                 <div className="space-y-3">
                    <div className="flex items-center justify-end gap-3 text-right">
                       <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Detected</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
                    </div>
                    <div className="flex items-center justify-end gap-3 text-right">
                       <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Team Dispatched</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                    </div>
                 </div>
               </div>
           </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-4 flex flex-col gap-6">
           <div className="glass-panel-heavy border-white/10 p-8 flex-1">
              <div className="flex items-center gap-3 mb-8">
                 <Activity className="text-emerald-400" />
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Mission Control</h3>
              </div>

              <div className="space-y-4 mb-10">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Current Sector</p>
                    <p className="font-bold text-white tracking-tight">ALPHA_DENSE_02</p>
                 </div>
                 <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Assigned Incident</p>
                    <p className="font-black text-white uppercase tracking-tight">{mockIncident.type}</p>
                 </div>
              </div>

              <div className="space-y-3">
                 <p className="text-[10px] font-black text-white uppercase tracking-widest ml-1 mb-4">Update Pulse Status</p>
                 <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all active:scale-95 uppercase tracking-widest text-[10px] flex items-center justify-center gap-3">
                    <Radio size={16} />
                    Signal: In Transit
                 </button>
                 <button className="w-full py-4 bg-amber-600 text-white font-black rounded-2xl shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:bg-amber-500 transition-all active:scale-95 uppercase tracking-widest text-[10px] flex items-center justify-center gap-3">
                    <Activity size={16} />
                    Signal: On Scene
                 </button>
                 <div className="h-6" />
                 <button className="w-full py-5 bg-emerald-600 text-white font-black rounded-[1.5rem] shadow-[0_0_30px_rgba(5,150,105,0.4)] hover:bg-emerald-500 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg uppercase tracking-tighter">
                    <CheckCircle size={26} />
                    Mission Resolved
                 </button>
                 <button className="w-full py-3 bg-transparent text-rose-500 font-bold rounded-2xl hover:bg-rose-500/10 transition-all flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100">
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
