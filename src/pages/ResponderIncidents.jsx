import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const activeIncidents = [
  { id: 'INC-772', type: 'Medical Emergency', status: 'Dispatched', priority: 'High', location: 'Bhetapara, Guwahati', distance: '1.2km' },
  { id: 'INC-801', type: 'Fire Alert', status: 'On Site', priority: 'Critical', location: 'Beltola Market', distance: '3.5km' },
];

export default function ResponderIncidents() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full gap-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Active Assignments</h2>
          <p className="text-secondary font-medium">Prioritized emergency queue for your unit</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Duty Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeIncidents.map((incident) => (
          <motion.div
            key={incident.id}
            whileHover={{ scale: 1.01, translateY: -4 }}
            className={`p-6 rounded-[2.5rem] border transition-all glass-card relative overflow-hidden group ${
              incident.priority === 'Critical' ? 'border-rose-500/30' : 'border-white/10'
            }`}
          >
            {incident.priority === 'Critical' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rotate-45 translate-x-16 -translate-y-16 blur-xl"></div>
            )}
            
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black font-mono bg-white/10 text-emerald-400 border border-white/5 px-3 py-1 rounded-full uppercase tracking-widest">
                {incident.id}
              </span>
              <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                incident.priority === 'Critical' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}>
                {incident.priority}
              </span>
            </div>

            <h3 className="font-black text-white text-2xl mb-2 uppercase tracking-tighter">{incident.type}</h3>
            <p className="text-secondary flex items-center gap-2 mb-8 font-medium">
              <MapPin size={18} className="text-emerald-500/50" /> {incident.location}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-slate-400">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Est. Distance</p>
                  <p className="text-sm font-bold text-white tracking-tight">{incident.distance} away</p>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/maps')}
                className="flex items-center gap-2 bg-emerald-600 text-white pl-6 pr-4 py-3 rounded-2xl font-black text-[10px] shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:bg-emerald-500 transition-all active:scale-95 group uppercase tracking-widest"
              >
                View Details
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto max-w-md glass-panel-heavy p-8 rounded-[3rem] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] translate-x-10 -translate-y-10"></div>
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <ShieldCheck size={24} />
          </div>
          <h4 className="font-black text-lg uppercase tracking-tight">Safety Protocol Delta</h4>
        </div>
        <p className="text-sm text-secondary leading-relaxed mb-6 relative z-10 font-medium">
          Automated risk assessment confirms high density in Beltola. Maintain active sync with dispatcher. Secondary units are on standby.
        </p>
        <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.2em] transition-all relative z-10 shadow-2xl backdrop-blur-md">
          REQUEST BACKUP
        </button>
      </div>
    </div>
  );
}
