import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-8xl font-black bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-white">Page Not Found</h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          The arena you are looking for does not exist or has been moved. Use the navigation bar above or click below to head home.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-block px-6 py-2.5 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Container>
  );
}
