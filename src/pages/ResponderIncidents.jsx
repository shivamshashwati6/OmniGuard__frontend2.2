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
          <h2 className="text-3xl font-black text-white uppercase tracking-[0.2em] cyan-glow-text">Active Assignments</h2>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.4em]">Prioritized emergency queue for your unit</p>
        </div>
        <div className="flex items-center gap-3 glass-panel px-5 py-2.5 rounded-2xl shadow-xl">
          <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
          <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.2em]">DUTY ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeIncidents.map((incident) => (
          <motion.div
            key={incident.id}
            whileHover={{ scale: 1.02, translateY: -5 }}
            className={`p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border transition-all glass-panel ${
              incident.priority === 'Critical' ? 'bg-brand-danger/5 border-brand-danger/20' : 'bg-white/5 border-white/10'
            } shadow-2xl relative overflow-hidden group`}
          >
            {incident.priority === 'Critical' && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rotate-45 translate-x-16 -translate-y-16"></div>
            )}
            
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-black font-mono bg-white/10 text-brand-cyan px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/10 backdrop-blur-md">
                {incident.id}
              </span>
              <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl ${
                incident.priority === 'Critical' ? 'bg-brand-danger text-white' : 'bg-brand-warning text-slate-900'
              }`}>
                {incident.priority}
              </span>
            </div>

            <h3 className="font-black text-white text-2xl mb-3 uppercase tracking-wider">{incident.type}</h3>
            <p className="text-slate-400 flex items-center gap-3 mb-10 font-mono text-[10px] uppercase tracking-[0.2em]">
              <MapPin size={18} className="text-brand-cyan" /> {incident.location}
            </p>

            <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between pt-8 border-t border-white/5 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-brand-cyan shadow-xl">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Est. Range</p>
                  <p className="text-sm font-black text-white tracking-widest">{incident.distance} away</p>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/maps')}
                className="flex items-center justify-center gap-3 bg-brand-cyan text-slate-900 px-6 py-4 rounded-2xl font-black text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all active:scale-95 group tracking-[0.2em]"
              >
                ENGAGE
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto glass-panel-heavy p-10 rounded-[2.5rem] text-white relative overflow-hidden group max-w-lg">
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/10 rounded-full blur-[40px] translate-x-10 -translate-y-10"></div>
        <div className="flex items-center gap-5 mb-5 relative z-10">
          <div className="p-3 bg-brand-cyan/20 rounded-2xl text-brand-cyan border border-brand-cyan/30 shadow-2xl">
            <ShieldCheck size={28} />
          </div>
          <h4 className="font-black text-xl uppercase tracking-[0.2em] italic cyan-glow-text">Safety Protocol Delta</h4>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed mb-8 relative z-10 font-mono uppercase tracking-widest">
          Automated risk assessment confirms high density in Beltola. Maintain active sync with dispatcher. Secondary units are on standby.
        </p>
        <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black rounded-2xl text-[10px] uppercase tracking-[0.3em] transition-all relative z-10 shadow-2xl backdrop-blur-md active:scale-95">
          REQUEST BACKUP SEQUENCE
        </button>
      </div>
    </div>
  );
}
