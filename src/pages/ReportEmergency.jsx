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
    <div className="max-w-2xl mx-auto flex flex-col h-full bg-transparent md:p-4">
      {/* Progress Bar */}
      <div className="bg-[#16191f] p-8 rounded-3xl border border-white/10 mb-8 shadow-2xl">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-black text-white uppercase tracking-widest">Report Emergency</h2>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Step {step} of {totalSteps}</span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            className="h-full bg-emerald-500"
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center md:text-left mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">What is the incident?</h3>
                <p className="text-slate-500 mt-2 text-sm font-mono uppercase tracking-widest">Select the type of emergency you are witnessing.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {incidentTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFormData({ ...formData, type: item.id })
                      handleNext()
                    }}
                    className={`flex flex-col items-center justify-center p-10 rounded-[2.5rem] border transition-all active:scale-95 shadow-xl ${
                      formData.type === item.id 
                        ? 'border-brand-accent bg-brand-accent/10' 
                        : 'border-white/5 bg-[#252a32] hover:border-white/20'
                    }`}
                  >
                    <div className={`p-6 rounded-[1.5rem] mb-5 border ${item.color.replace('bg-', 'bg-opacity-20 bg-').replace('text-', 'text-opacity-90 text-')}`}>
                      <item.icon size={40} />
                    </div>
                    <span className="font-black text-white text-base uppercase tracking-widest">{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Where is it happening?</h3>
                <p className="text-slate-500 mt-2 text-sm font-mono uppercase tracking-widest">Enter the address or use your device's GPS.</p>
              </div>
              
              <div className="bg-[#252a32] p-6 rounded-3xl border border-white/5 shadow-2xl">
                <button 
                  className="w-full py-6 bg-brand-cyan text-slate-900 rounded-2xl font-black text-lg flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all uppercase tracking-widest"
                >
                  <Navigation size={24} fill="currentColor" />
                  Use My Current Location
                </button>
                
                <div className="relative my-10 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <span className="relative px-6 bg-[#252a32] text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Or enter manually</span>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-5 top-5 text-brand-cyan" size={24} />
                  <textarea 
                    rows={3}
                    className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-cyan/30 outline-none text-white text-base font-black tracking-wider placeholder-slate-600 resize-none"
                    placeholder="ENTER STREET, DISTRICT, OR LANDMARKS..."
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button onClick={handleBack} className="p-5 bg-[#252a32] border border-white/10 rounded-2xl text-white hover:bg-white/5 active:scale-95 transition-all shadow-xl">
                  <ChevronLeft size={28} />
                </button>
                <button 
                  disabled={!formData.location}
                  onClick={handleNext} 
                  className="flex-1 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-[0.3em] disabled:opacity-30 flex items-center justify-center gap-3 shadow-2xl"
                >
                  Confirm Location
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Additional Details</h3>
                <p className="text-slate-500 mt-2 text-sm font-mono uppercase tracking-widest">Provide any extra info or photos to help responders.</p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#252a32] p-10 rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-slate-500 hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all cursor-pointer active:scale-95 group shadow-2xl">
                  <div className="p-5 bg-white/5 rounded-full mb-4 group-hover:bg-brand-cyan/10 transition-all border border-white/5">
                    <Camera size={40} className="group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <span className="font-black text-sm uppercase tracking-widest">Add Photos (Optional)</span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] mt-2">Tap to capture sequence</span>
                </div>
 
                <div className="bg-[#252a32] p-4 rounded-3xl border border-white/5 shadow-2xl">
                  <textarea 
                    rows={4}
                    className="w-full p-4 bg-transparent border-none focus:ring-0 outline-none text-white text-base font-black tracking-widest placeholder-slate-700 resize-none"
                    placeholder="DESCRIBE THE SITUATION (E.G., PEOPLE INVOLVED)..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <button onClick={handleBack} className="py-5 bg-[#252a32] border border-white/10 rounded-2xl text-white font-black uppercase tracking-[0.2em] text-xs active:scale-95 transition-all shadow-xl">
                  Back
                </button>
                <button 
                  className="py-5 bg-brand-danger text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(239,68,68,0.4)] flex items-center justify-center gap-3 active:scale-[1.02] transition-all"
                  onClick={() => setStep(4)}
                >
                  <ShieldAlert size={20} />
                  Send SOS
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#16191f] p-12 rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.9)] border border-white/10 flex flex-col items-center text-center space-y-8"
            >
              <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/40">
                <CheckCircle2 size={48} />
              </div>
              <div>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase cyan-glow-text">SOS DISPATCHED</h3>
                <p className="text-slate-500 mt-4 text-sm font-mono uppercase tracking-widest leading-relaxed">
                  Help is on the way to your location. <br/> Responders have been notified of your <strong>{formData.type.toUpperCase()}</strong> report.
                </p>
              </div>
              <div className="w-full bg-white/5 p-8 rounded-3xl border border-white/10 shadow-inner">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Estimated Arrival</p>
                <p className="text-3xl font-black text-white font-mono tracking-tight glow-text-cyan">4 - 7 MINUTES</p>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="text-slate-400 font-bold hover:text-slate-600 underline text-sm"
              >
                Return to Dashboard
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
