import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, ArrowRight, Lock, ChevronLeft } from 'lucide-react';

export default function EmployeeLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard/employee');
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-primary-black min-h-[calc(100vh-theme(spacing.24))] pt-12 md:pt-24 pb-24 items-center justify-center">
      <div className="container mx-auto px-6 max-w-md">
        
        <Link to="/login" className="inline-flex items-center text-primary-gold hover:text-white transition-colors mb-6 text-sm font-semibold uppercase tracking-wider relative -top-4 md:-top-12">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Portals
        </Link>
        
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-primary-gold flex items-center justify-center rounded-sm clip-diagonal mb-6">
            <Lock className="text-primary-black w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Employee Portal</h1>
          <p className="text-gray-400 font-light">Secure access for internal staff and operations.</p>
        </div>

        <div className="bg-primary-blue-dark border border-white/10 p-8 shadow-2xl relative overflow-hidden">
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="employee-id" className="text-sm text-gray-300">Employee ID or Email</label>
              <input 
                type="text" 
                id="employee-id"
                required
                className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                placeholder="EMP-XXXX"
              />
            </div>
            <div className="flex flex-col gap-2">
               <div className="flex justify-between items-center">
                  <label htmlFor="login-pass" className="text-sm text-gray-300">Password</label>
                  <button type="button" className="text-xs text-gray-500 hover:text-primary-gold transition-colors">Forgot Password?</button>
               </div>
              <input 
                type="password" 
                id="login-pass"
                required
                className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-2 px-8 py-3 bg-primary-gold text-primary-black font-bold hover:bg-primary-gold-light transition-colors flex justify-center items-center gap-2"
            >
              {isSubmitting ? 'Authenticating...' : 'Secure SignIn'}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">
              Only authorized personnel can access this portal.<br/>
              <span className="text-white mt-1 block">Contact IT Support if you lost access.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
