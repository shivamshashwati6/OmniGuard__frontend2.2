<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, ChevronRight, Activity, AlertCircle } from 'lucide-react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate validation delay
    setTimeout(() => {
      let role = '';
      
      // Role detection based on email domain or specific email
      if (email === 'coordinator@omniguard.io') {
        role = 'coordinator';
      } else if (email === 'responder@omniguard.io') {
        role = 'responder';
      } else if (email === 'civilian@omniguard.io') {
        role = 'civilian';
      } else if (email.includes('@omniguard.io')) {
        // Fallback or generic logic
        role = 'civilian';
      } else {
        setError('Unauthorized domain. Please use your @omniguard.io credentials.');
        setIsLoading(false);
        return;
      }

      // Basic access code validation (mock)
      if (accessCode.length < 4) {
        setError('Invalid Access Code. Minimum 4 digits required.');
        setIsLoading(false);
        return;
      }

      const userData = {
        email,
        role,
        name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
        isAuthenticated: true
      };

      onLogin(userData);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-3xl shadow-2xl shadow-emerald-500/20 mb-6 rotate-3">
            <Shield size={40} className="text-slate-900" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2">OMNIGUARD</h1>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Advanced Crisis Management</p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500 opacity-50"></div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Secure Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="name@omniguard.io"
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all placeholder:text-slate-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
=======
import React from 'react';
import { Shield, Mail, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Branding Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center mb-8"
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
          <Shield className="w-12 h-12 text-red-500 relative z-10" />
        </div>
        <h1 className="text-4xl tracking-widest text-white font-light">
          <span className="font-bold">OMNI</span>GUARD
        </h1>
        <p className="text-[10px] tracking-[0.3em] text-slate-500 mt-2 font-mono uppercase">
          Crisis Management System
        </p>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-md bg-brand-card/50 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden tactical-glow"
      >
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
              Secure Authentication
            </h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            {/* Operator Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase ml-1">
                Operator Email
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  placeholder="operator@omniguard.io"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all"
>>>>>>> origin/main
                />
              </div>
            </div>

<<<<<<< HEAD
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Access Code</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl py-4 pl-12 pr-4 text-white focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all placeholder:text-slate-600"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
=======
            {/* Access Code */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase ml-1">
                Access Code
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-primary transition-colors">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all"
>>>>>>> origin/main
                />
              </div>
            </div>

<<<<<<< HEAD
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-rose-400 text-xs font-bold bg-rose-400/10 p-4 rounded-xl border border-rose-400/20"
              >
                <AlertCircle size={14} />
                {error}
              </motion.div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-emerald-500 text-slate-900 font-black text-lg rounded-2xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 group active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? (
                <Activity className="animate-spin" size={20} />
              ) : (
                <>
                  AUTHENTICATE
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col items-center gap-4">
            <p className="text-[10px] text-slate-600 font-mono text-center">
              SYSTEM ACCESS IS MONITORED. UNAUTHORIZED ATTEMPTS WILL BE TRACED.
            </p>
            <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              {/* Optional footer info or logos */}
=======
            {/* Authenticate Button */}
            <button 
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white text-xs font-bold tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-brand-primary/20 transition-all active:scale-[0.98] uppercase"
            >
              Authenticate
            </button>
          </form>

          {/* Card Footer */}
          <div className="mt-8 pt-8 border-t border-slate-800 flex justify-center items-center gap-4">
            <div className="flex items-center gap-2 text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Encrypted_Channel
            </div>
            <span className="text-slate-800 text-[8px]">•</span>
            <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              AES-256
            </div>
            <span className="text-slate-800 text-[8px]">•</span>
            <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
              JWT_Auth
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </motion.div>
<<<<<<< HEAD
    </div>
  );
}
=======

      {/* Page Footer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-[10px] tracking-[0.1em] text-slate-600 font-mono uppercase"
      >
        OmniGuard v2.2 • Authorized Personnel Only
      </motion.p>
    </div>
  );
};

export default Login;
>>>>>>> origin/main
