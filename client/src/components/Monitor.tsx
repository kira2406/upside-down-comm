import React from 'react';

interface MonitorProps {
  message: string;
  label?: string;
}

const Monitor: React.FC<MonitorProps> = ({ message, label = "Signal" }) => {
  return (
    <div className="bg-black border-4 border-gray-700 rounded-xl shadow-2xl relative overflow-hidden w-full max-w-2xl
      p-2 
      lg:p-6">
      {/* Glare Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
      
      <p className="text-gray-400 text-xs font-mono mb-2 uppercase tracking-widest">{label}:</p>
      
      <div className="font-mono text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] break-all
        min-h-[1rem] text-md tracking-widest
        lg:min-h-[3rem] lg:text-3xl lg:tracking-[0.2em]">
        {message}
        <span className="animate-pulse text-red-500">_</span>
      </div>
    </div>
  );
};

export default Monitor;