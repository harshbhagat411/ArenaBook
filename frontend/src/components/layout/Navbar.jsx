import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate('/login');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  // Dynamically add authenticated links
  if (isAuthenticated) {
    navLinks.push(
      { path: '/bookings', label: 'Bookings' },
      { path: '/profile', label: 'Profile' }
    );
  }

  const authLinks = [
    { path: '/login', label: 'Login' },
    { path: '/register', label: 'Register', primary: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="ArenaBook Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-slate-950 shadow-md shadow-emerald-500/10">
              A
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              ArenaBook
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition duration-200 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1 ${
                    isActive ? 'text-emerald-400' : 'text-slate-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Auth/Logout Links */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm font-medium text-slate-400">
                  Hi, {user?.name || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-semibold rounded-lg border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              authLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={
                    link.primary
                      ? 'px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white'
                      : 'text-sm font-medium text-slate-400 hover:text-emerald-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1'
                  }
                >
                  {link.label}
                </Link>
              ))
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur px-6 py-6 space-y-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-base font-medium transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded py-1 px-2 ${
                  isActive ? 'text-emerald-400' : 'text-slate-400'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <hr className="border-slate-900" />
        <div className="flex flex-col gap-4">
          {isAuthenticated ? (
            <>
              <div className="text-sm font-medium text-slate-400 px-2">
                Logged in as: <span className="text-white">{user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full py-2.5 text-center text-sm font-semibold rounded-lg border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            authLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={
                  link.primary
                    ? 'w-full py-2.5 text-center text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white'
                    : 'w-full py-2.5 text-center text-sm font-medium text-slate-400 hover:text-emerald-400 transition border border-slate-800 rounded-lg hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500'
                }
              >
                {link.label}
              </Link>
            ))
          )}
        </div>
      </div>
    </header>
  );
}
