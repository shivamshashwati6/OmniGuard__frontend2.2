import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Activity, ShieldAlert, Tent, MapPin, Camera, ChevronRight, ChevronLeft, CheckCircle2, Navigation } from 'lucide-react'

const incidentTypes = [
  { id: 'fire', label: 'Fire', icon: Flame, color: 'bg-rose-100 text-rose-600 border-rose-200' },
  { id: 'medical', label: 'Medical', icon: Activity, color: 'bg-emerald-100 text-emerald-600 border-emerald-200' },
  { id: 'crime', label: 'Crime', icon: ShieldAlert, color: 'bg-blue-100 text-blue-600 border-blue-200' },
  { id: 'natural', label: 'Natural Disaster', icon: Tent, color: 'bg-amber-100 text-amber-600 border-amber-200' },
]

export default function ReportEmergency({ onSuccess }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
    photo: null
  })

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps + 1))
  const handleBack = () => setStep(s => Math.max(s - 1, 1))

  React.useEffect(() => {
    if (step === 4 && onSuccess) {
      const timer = setTimeout(() => {
        onSuccess();
      }, 3000); // Redirect after 3 seconds so they can see the confirmation
      return () => clearTimeout(timer);
    }
  }, [step, onSuccess]);

  return (
    <div className="max-w-2xl mx-auto flex flex-col h-full bg-transparent p-0 md:p-4">
      {/* Progress Bar */}
      <div className="bg-[#16191f] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 mb-6 md:mb-8 shadow-2xl">
        <div className="flex justify-between items-center mb-4 md:mb-5">
          <h2 className="text-lg md:text-xl font-black text-white uppercase tracking-widest" style={{ fontSize: 'var(--text-clamp-h2)', textShadow: '0 0 3px rgba(255, 255, 255, 0.3)' }}>Report Emergency</h2>
          <span className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Step {step}/{totalSteps}</span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            className="h-full bg-brand-accent shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="text-center md:text-left mb-8 md:mb-10">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider" style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.3)' }}>SITUATION_IDENTIFICATION</h3>
                <p className="text-slate-500 mt-2 text-xs md:text-sm font-mono uppercase tracking-widest">Select the critical event type for immediate dispatch.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {incidentTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFormData({ ...formData, type: item.id })
                      handleNext()
                    }}
                    className={`flex items-center md:flex-col justify-start md:justify-center p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border transition-all active:scale-[0.98] shadow-xl group min-h-[80px] md:min-h-0 ${
                      formData.type === item.id 
                        ? 'border-brand-accent bg-brand-accent/10 shadow-[0_0_30px_rgba(16,185,129,0.15)]' 
                        : 'border-white/5 bg-[#252a32] hover:border-white/10'
                    }`}
                  >
                    <div className={`p-4 md:p-6 rounded-xl md:rounded-[1.5rem] mr-5 md:mr-0 md:mb-5 border ${item.color.replace('bg-', 'bg-opacity-20 bg-').replace('text-', 'text-opacity-90 text-')} transition-all group-hover:scale-110`} style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)' }}>
                      <item.icon className="size-6 md:size-10" />
                    </div>
                    <span className="font-black text-white text-sm md:text-base uppercase tracking-[0.2em]">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="mb-8 md:mb-10">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider" style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.3)' }}>LOCATION_TRACKING</h3>
                <p className="text-slate-500 mt-2 text-xs md:text-sm font-mono uppercase tracking-widest">Synchronize coordinates or input manual sector data.</p>
              </div>
              
              <div className="bg-[#252a32] p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 shadow-2xl">
                <button 
                  className="w-full py-5 md:py-6 bg-brand-cyan text-slate-900 rounded-xl md:rounded-2xl font-black text-base md:text-lg flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all uppercase tracking-widest"
                >
                  <Navigation size={22} fill="currentColor" />
                  SYNC_GPS_COORDS
                </button>
                
                <div className="relative my-8 md:my-10 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <span className="relative px-6 bg-[#252a32] text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">MANUAL_OVERRIDE</span>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-5 top-5 text-brand-cyan" size={20} />
                  <textarea 
                    rows={3}
                    className="w-full pl-12 md:pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-brand-cyan/30 outline-none text-white text-sm md:text-base font-black tracking-wider placeholder-slate-600 resize-none"
                    placeholder="INPUT SECTOR OR LANDMARKS..."
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button onClick={handleBack} className="p-5 bg-[#252a32] border border-white/10 rounded-xl md:rounded-2xl text-white hover:bg-white/5 active:scale-95 transition-all shadow-xl">
                  <ChevronLeft size={24} />
                </button>
                <button 
                  disabled={!formData.location}
                  onClick={handleNext} 
                  className="flex-1 py-5 bg-white text-slate-900 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] disabled:opacity-30 flex items-center justify-center gap-3 shadow-2xl active:scale-98 transition-all"
                >
                  Confirm_Sector
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="mb-8 md:mb-10">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider" style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.3)' }}>TACTICAL_INTEL</h3>
                <p className="text-slate-500 mt-2 text-xs md:text-sm font-mono uppercase tracking-widest">Transmit visual logs or additional situational data.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#252a32] p-8 md:p-10 rounded-2xl md:rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-slate-500 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all cursor-pointer active:scale-95 group shadow-2xl">
                  <div className="p-4 md:p-5 bg-white/5 rounded-full mb-4 group-hover:bg-brand-cyan/10 transition-all border border-white/5">
                    <Camera size={32} className="group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <span className="font-black text-[10px] md:text-sm uppercase tracking-widest text-center">ATTACH_VISUAL_FEED</span>
                </div>
 
                <div className="bg-[#252a32] p-4 rounded-2xl md:rounded-3xl border border-white/5 shadow-2xl">
                  <textarea 
                    rows={4}
                    className="w-full p-2 md:p-4 bg-transparent border-none focus:ring-0 outline-none text-white text-sm md:text-base font-black tracking-widest placeholder-slate-700 resize-none"
                    placeholder="SITUATION_LOGS (E.G., CASUALTIES, THREATS)..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8">
                <button onClick={handleBack} className="py-5 bg-[#252a32] border border-white/10 rounded-xl md:rounded-2xl text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs active:scale-95 transition-all shadow-xl">
                  Abort
                </button>
                <button 
                  className="py-5 bg-brand-danger text-white rounded-xl md:rounded-2xl font-black text-[10px] md:text-sm uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 md:gap-3 active:scale-[1.02] transition-all"
                  onClick={() => setStep(4)}
                >
                  <ShieldAlert size={18} />
                  SEND_SOS
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#16191f] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.9)] border border-white/10 flex flex-col items-center text-center space-y-6 md:space-y-8"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-accent/40">
                <CheckCircle2 size={40} className="md:size-[48px]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase mb-4" style={{ textShadow: '0 0 8px rgba(6, 182, 212, 0.6)' }}>DISPATCH_CONFIRMED</h3>
                <p className="text-[#eaeaea] font-black text-xs md:text-sm max-w-lg mx-auto leading-relaxed uppercase tracking-[0.1em] opacity-80">
                  Tactical response initiated for <strong>{formData.type.toUpperCase()}</strong>. Coordinates locked. Maintain secure position.
                </p>
              </div>
              <div className="w-full bg-white/5 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/10 shadow-inner">
                <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">ETA_WINDOW</p>
                <p className="text-2xl md:text-3xl font-black text-white font-mono tracking-tight glow-text-cyan uppercase">3 - 6 MINS</p>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="text-slate-500 font-bold hover:text-white underline text-[10px] uppercase tracking-widest transition-colors"
              >
                Reset_Terminal
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step < 4 && (
        <p className="p-8 text-center text-xs text-slate-400 italic">
          Your precise location and identity will be shared with emergency services.
        </p>
      )}
    </div>
  )
}
