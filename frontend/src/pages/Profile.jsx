import React from 'react';
import Container from '../components/common/Container';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          User Profile
        </div>
        <h1 className="text-4xl font-black text-white">Your Profile</h1>
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm shadow-xl max-w-md mx-auto text-left space-y-4">
          <div>
            <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Name</span>
            <span className="text-white font-medium">{user?.name || 'N/A'}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Email</span>
            <span className="text-white font-medium">{user?.email || 'N/A'}</span>
          </div>
          <div>
            <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Role</span>
            <span className="text-emerald-400 font-medium capitalize">{user?.role || 'user'}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
