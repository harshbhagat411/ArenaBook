import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageLoader from '../components/common/PageLoader';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden opacity-25 z-0">
        <div className="absolute top-[-200px] left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500 blur-[100px]"></div>
        <div className="absolute top-[-100px] right-1/4 w-[300px] h-[300px] rounded-full bg-teal-600 blur-[100px]"></div>
      </div>

      {/* Header/Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 py-10 flex flex-col justify-center">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
