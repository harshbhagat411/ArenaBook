import React, { Component } from 'react';
import Container from './Container';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
          <Container>
            <div className="max-w-md mx-auto text-center space-y-6 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur shadow-2xl">
              <div className="w-16 h-16 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto text-2xl">
                ⚠️
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white">Something went wrong.</h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                An unexpected rendering error occurred. Please refresh the page or return later.
              </p>
              <button
                onClick={this.handleRefresh}
                className="w-full py-2.5 text-sm font-semibold rounded-lg bg-red-500 text-slate-950 hover:bg-red-400 transition shadow-lg shadow-red-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Refresh Page
              </button>
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}
