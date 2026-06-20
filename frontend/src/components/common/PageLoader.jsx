import React from 'react';

export default function PageLoader() {
  return (
    <div className="w-full flex items-center justify-center py-20 min-h-[400px]">
      <div className="flex flex-col items-center gap-4">
        {/* Loading Spinner */}
        <div className="w-12 h-12 rounded-full border-4 border-slate-900 border-t-emerald-500 animate-spin shadow-lg"></div>
        <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase animate-pulse">
          Loading Arena...
        </p>
      </div>
    </div>
  );
}
