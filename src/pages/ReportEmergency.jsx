import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Activity, ShieldAlert, Tent, MapPin, Camera, ChevronRight, ChevronLeft, CheckCircle2, Navigation } from 'lucide-react'

const incidentTypes = [
  { id: 'fire', label: 'Fire', icon: Flame, color: 'bg-rose-500/20 text-rose-400 border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.2)]' },
  { id: 'medical', label: 'Medical', icon: Activity, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]' },
  { id: 'crime', label: 'Crime', icon: ShieldAlert, color: 'bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]' },
  { id: 'natural', label: 'Natural Disaster', icon: Tent, color: 'bg-amber-500/20 text-amber-400 border-amber-500/30 shadow-[0_0_15_rgba(245,158,11,0.2)]' },
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
      <div className="bg-white/5 p-6 rounded-3xl border border-white/10 mb-6 backdrop-blur-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white tracking-tight">Report Emergency</h2>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Step {step} of {totalSteps}</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
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
              <div className="text-center md:text-left mb-8">
                <h3 className="text-2xl font-bold text-white tracking-tight">What is the incident?</h3>
                <p className="text-slate-400 mt-2 text-lg">Select the type of emergency you are witnessing.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {incidentTypes.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFormData({ ...formData, type: item.id })
                      handleNext()
                    }}
                    className={`flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all active:scale-95 ${
                      formData.type === item.id 
                        ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                        : 'border-white/5 bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className={`p-5 rounded-2xl mb-4 ${item.color}`}>
                      <item.icon size={36} />
                    </div>
                    <span className="font-bold text-white text-lg tracking-tight">{item.label}</span>
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
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white tracking-tight">Where is it happening?</h3>
                <p className="text-slate-400 mt-2">Enter the address or use your device's GPS.</p>
              </div>
              
              <div className="bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md">
                <button 
                  className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(5,150,105,0.4)] active:scale-95 transition-all hover:bg-emerald-500 hover:scale-[1.02]"
                >
                  <Navigation size={24} fill="currentColor" />
                  Use My Current Location
                </button>
                
                <div className="relative my-8 text-center">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                  <span className="relative px-4 bg-[#020617] text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Or enter manually</span>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-emerald-500/50" size={20} />
                  <textarea 
                    rows={3}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/5 rounded-2xl focus:ring-2 focus:ring-emerald-500/50 outline-none text-lg font-medium resize-none text-white placeholder:text-slate-600 transition-all"
                    placeholder="Enter street, district, or landmarks..."
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={handleBack} className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl text-slate-400 hover:text-white active:scale-95 transition-all">
                  <ChevronLeft size={24} />
                </button>
                <button 
                  disabled={!formData.location}
                  onClick={handleNext} 
                  className="flex-1 py-5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-2xl font-black text-lg disabled:opacity-30 flex items-center justify-center gap-2 hover:bg-emerald-500/30 transition-all active:scale-95"
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
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white tracking-tight">Additional Details</h3>
                <p className="text-slate-400 mt-2">Provide any extra info or photos to help responders.</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 p-8 rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-slate-500 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-pointer active:scale-95 group backdrop-blur-md">
                  <div className="p-4 bg-white/5 rounded-full mb-3 group-hover:bg-emerald-500/10 transition-colors">
                    <Camera size={32} className="group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                  </div>
                  <span className="font-bold tracking-tight">Add Photos (Optional)</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] mt-1">Tap to capture</span>
                </div>

                <div className="bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-md">
                  <textarea 
                    rows={4}
                    className="w-full p-4 bg-transparent border-none focus:ring-0 outline-none text-lg font-medium resize-none text-white placeholder:text-slate-600"
                    placeholder="Describe the situation (e.g., number of people involved)..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <button onClick={handleBack} className="py-5 bg-white/5 border border-white/10 rounded-2xl text-slate-400 font-bold hover:text-white hover:bg-white/10 active:scale-95 transition-all">
                  Back
                </button>
                <button 
                  className="py-5 bg-rose-600 text-white rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(225,29,72,0.4)] flex items-center justify-center gap-2 active:scale-95 transition-all hover:bg-rose-500"
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
              className="bg-white/5 p-12 rounded-[3rem] border border-white/10 flex flex-col items-center text-center space-y-6 backdrop-blur-xl shadow-2xl"
            >
              <div className="w-24 h-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                <CheckCircle2 size={48} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-white tracking-tight">SOS DISPATCHED</h3>
                <p className="text-slate-400 mt-3 text-lg font-medium leading-relaxed">
                  Help is on the way to your location. <br/> Responders have been notified of your <strong>{formData.type.toUpperCase()}</strong> report.
                </p>
              </div>
              <div className="w-full bg-white/5 p-6 rounded-3xl border border-white/5">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Estimated Arrival</p>
                <p className="text-2xl font-bold text-emerald-400 font-mono tracking-tight shadow-emerald-500/20 drop-shadow-md">4 - 7 MINUTES</p>
              </div>
              <button 
                onClick={() => setStep(1)}
                className="text-slate-500 font-bold hover:text-white transition-colors text-sm uppercase tracking-widest"
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
