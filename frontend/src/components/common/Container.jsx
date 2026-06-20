import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full mx-auto px-4 sm:px-6 md:px-8 max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
}
