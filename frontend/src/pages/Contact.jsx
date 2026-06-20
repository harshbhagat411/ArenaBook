import React from 'react';
import Container from '../components/common/Container';

export default function Contact() {
  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Get in Touch
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">Contact</h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
          Questions or inquiries? Connect with the ArenaBook support team.
        </p>
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm max-w-sm mx-auto shadow-xl">
          <h3 className="text-white font-bold text-lg mb-2">Coming Soon</h3>
          <p className="text-slate-400 text-sm">
            Contact forms and support channels will be live shortly.
          </p>
        </div>
      </div>
    </Container>
  );
}
