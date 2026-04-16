import React from 'react';
import { motion } from 'framer-motion';

const TacticalPanel = ({ title, children, className = '', accent = 'cyan' }) => {
  const accentColors = {
    cyan: 'border-brand-cyan/30 text-brand-cyan',
    amber: 'border-brand-amber/30 text-brand-amber',
    crimson: 'border-brand-crimson/30 text-brand-crimson',
  };

  const glowColors = {
    cyan: 'shadow-[0_0_15px_rgba(0,243,255,0.1)]',
    amber: 'shadow-[0_0_15px_rgba(255,170,0,0.1)]',
    crimson: 'shadow-[0_0_15px_rgba(255,0,60,0.1)]',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`tactical-panel ${glowColors[accent]} ${className} group`}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-${accent}/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-brand-cyan/10 bg-brand-cyan/5">
          <h3 className={`text-xs font-bold tracking-widest uppercase flex items-center gap-2 ${accentColors[accent]}`}>
            <span className={`w-1.5 h-1.5 rounded-full bg-brand-${accent} animate-pulse`} />
            {title}
          </h3>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-brand-cyan/30" />
            <div className="w-1 h-3 bg-brand-cyan/50" />
          </div>
        </div>
      )}
      
      <div className="p-4 h-full">
        {children}
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-cyan/50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-cyan/50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-cyan/50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-cyan/50" />
    </motion.div>
  );
};

export default TacticalPanel;
