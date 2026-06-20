import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/40 py-12 text-slate-400">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <Link 
              to="/" 
              className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 w-fit"
            >
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-xs shadow-md shadow-emerald-500/10">
                A
              </div>
              <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                ArenaBook
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Book sports venues effortlessly. Discover the best turfs, coordinate schedules, and play your favorite sports.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <nav className="flex flex-col gap-2.5 text-sm" aria-label="Footer Quick Links">
              <Link to="/" className="hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded w-fit">
                Home
              </Link>
              <Link to="/about" className="hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded w-fit">
                About
              </Link>
              <Link to="/contact" className="hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded w-fit">
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Legal</h3>
            <nav className="flex flex-col gap-2.5 text-sm" aria-label="Footer Legal Links">
              <Link to="/privacy-policy" className="hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded w-fit">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded w-fit">
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} ArenaBook. All Rights Reserved.</p>
          <p>Designed for athletic excellence.</p>
        </div>
      </Container>
    </footer>
  );
}
