import React from 'react';

const RotateOverlay: React.FC = () => {
  return (
    <div 
      className="
        fixed inset-0 z-[100] bg-black text-white 
        flex flex-col items-center justify-center p-10 text-center
        flex landscape:hidden lg:hidden
      "
    >
      <div className="mb-8 animate-spin-slow-pause">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-red-500"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold font-terminal uppercase tracking-widest text-red-500 mb-4">
        Turn it Upside Down
      </h2>
      
      <p className="text-gray-400 font-sans">
        For the best experience, please rotate your device to landscape mode.
      </p>

    </div>
  );
};

export default RotateOverlay;