import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Phone, Mail, ArrowRight, ChevronLeft } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ClientLogin() {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpSent) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setOtpSent(true);
        alert('Simulated OTP sent to your phone via SMS/WhatsApp: 123456');
      }, 1000);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/dashboard/client');
      }, 1000);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard/client');
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
            <Building2 className="text-primary-black w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Client Portal</h1>
          <p className="text-gray-400 font-light">Access your dashboard to track inquiries and manage projects.</p>
        </div>

        <div className="bg-primary-blue-dark border border-white/10 p-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex border-b border-white/10 mb-8">
            <button 
              onClick={() => setLoginMethod('phone')}
              className={cn(
                "flex-1 pb-4 flex items-center justify-center gap-2 font-medium transition-colors border-b-2",
                loginMethod === 'phone' ? "text-primary-gold border-primary-gold" : "text-gray-500 border-transparent hover:text-gray-300"
              )}
            >
              <Phone className="w-4 h-4" /> Phone OTP
            </button>
            <button 
              onClick={() => setLoginMethod('email')}
              className={cn(
                "flex-1 pb-4 flex items-center justify-center gap-2 font-medium transition-colors border-b-2",
                loginMethod === 'email' ? "text-primary-gold border-primary-gold" : "text-gray-500 border-transparent hover:text-gray-300"
              )}
            >
              <Mail className="w-4 h-4" /> Email & Pass
            </button>
          </div>

          {loginMethod === 'phone' ? (
            <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-6">
              {!otpSent ? (
                <div className="flex flex-col gap-2">
                  <label htmlFor="login-phone" className="text-sm text-gray-300">Registered Phone Number</label>
                  <input 
                    type="tel" 
                    id="login-phone"
                    required
                    className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label htmlFor="otp" className="text-sm text-gray-300">Enter 6-Digit OTP</label>
                  <input 
                    type="text" 
                    id="otp"
                    required
                    maxLength={6}
                    className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors tracking-widest text-center text-lg"
                    placeholder="------"
                  />
                  <button type="button" className="text-xs text-primary-gold text-right hover:underline mt-1">Resend OTP</button>
                </div>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-2 px-8 py-3 bg-primary-gold text-primary-black font-bold hover:bg-primary-gold-light transition-colors flex justify-center items-center gap-2"
              >
                {isSubmitting ? 'Processing...' : !otpSent ? 'Send OTP' : 'Verify & Login'}
                {!isSubmitting && !otpSent && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="login-email" className="text-sm text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  id="login-email"
                  required
                  className="bg-primary-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                  placeholder="name@company.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                 <div className="flex justify-between items-center">
                    <label htmlFor="login-pass" className="text-sm text-gray-300">Password</label>
                    <button type="button" className="text-xs text-gray-500 hover:text-primary-gold transition-colors">Forgot?</button>
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
                {isSubmitting ? 'Authenticating...' : 'Sign In'}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account? <br/>
              <span className="text-white mt-1 block">Accounts are created upon project initiation.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
