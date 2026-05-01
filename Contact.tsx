import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone, Building2, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAILS, COMPANY_PHONE } from '../lib/constants';
import { cn } from '../lib/utils';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    type: 'Project Inquiry',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check for query parameters to pre-fill the form (like "Careers at SK Construction")
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');
    if (subject) {
      if (subject.toLowerCase().includes('job') || subject.toLowerCase().includes('career')) {
        setFormData(prev => ({ ...prev, type: 'Job Application', details: `Re: ${subject}\n\n` }));
      } else {
        setFormData(prev => ({ ...prev, type: 'Project Inquiry' }));
      }
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Simulate WhatsApp Integration Greeting
      const whatsappMsg = `Thank you for contacting SK Real Estate Construction. Our team will connect with you shortly regarding your ${formData.type}.`;
      alert(`WhatsApp Simulated Notification to ${formData.phone}:\n\n${whatsappMsg}\n\nIntroduction: We are Real Estate Construction, providing premium commercial real estate & infrastructure solutions in West Bengal.`);
      
    }, 1500);
  };

  return (
    <div className="flex flex-col bg-primary-black min-h-screen pt-12 md:pt-24 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Partner With Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Whether you are looking to build a commercial empire or build your career with us, our doors are open. Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-primary-blue-dark border border-white/10 p-8 rounded-sm">
              <h3 className="text-xl font-serif font-bold text-primary-gold mb-6">Corporate Office</h3>
              
              <div className="flex flex-col gap-6">
                <a 
                  href="https://maps.app.goo.gl/randomPlace" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-primary-black rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary-gold transition-colors">
                    <MapPin className="w-5 h-5 text-primary-gold" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-white mb-1">Headquarters</span>
                    <span className="text-sm text-gray-400 leading-relaxed block">{COMPANY_ADDRESS}</span>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_EMAILS}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-primary-black rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary-gold transition-colors">
                    <Mail className="w-5 h-5 text-primary-gold" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-white mb-1">Email Us</span>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors">{COMPANY_EMAILS}</span>
                  </div>
                </a>

                <a 
                  href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-primary-black rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary-gold transition-colors">
                    <Phone className="w-5 h-5 text-primary-gold" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-white mb-1">Call Us</span>
                    <span className="text-sm text-gray-400 hover:text-white transition-colors">{COMPANY_PHONE}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Simulated WhatsApp Box */}
            <div className="bg-[#128C7E]/10 border border-[#128C7E]/30 p-6 rounded-sm flex items-start gap-4">
              <MessageCircle className="w-8 h-8 text-[#25D366] shrink-0" />
              <div>
                <h4 className="text-white font-semibold mb-1">Instant WhatsApp Support</h4>
                <p className="text-sm text-gray-400 font-light mb-3">Submit your inquiry and receive immediate confirmation via WhatsApp.</p>
                <div className="text-xs bg-[#128C7E]/20 text-[#25D366] px-2 py-1 rounded inline-block border border-[#128C7E]/30">Automated Integration Active</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-primary-black border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Building2 className="w-32 h-32" />
               </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center z-10 relative">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">Inquiry Submitted</h3>
                  <p className="text-gray-400 mb-8 max-w-md">
                    Thank you, {formData.name}. We have received your {formData.type.toLowerCase()}. Check your WhatsApp for a confirmation message.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-primary-blue-dark border border-white/20 text-white hover:bg-white/5 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm text-gray-300 font-medium">Full Name <span className="text-primary-gold">*</span></label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-primary-blue-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="companyName" className="text-sm text-gray-300 font-medium">Company Name (Optional)</label>
                      <input 
                        type="text" 
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="bg-primary-blue-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm text-gray-300 font-medium">Email Address <span className="text-primary-gold">*</span></label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-primary-blue-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm text-gray-300 font-medium">Phone Number (WhatsApp) <span className="text-primary-gold">*</span></label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-primary-blue-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="type" className="text-sm text-gray-300 font-medium">Inquiry Type <span className="text-primary-gold">*</span></label>
                    <select 
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="bg-primary-blue-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors appearance-none"
                    >
                      <option value="Project Inquiry">Project Inquiry (Commercial/Industrial)</option>
                      <option value="Appointment">Request Appointment</option>
                      <option value="Job Application">Job Application (Fresher/Experienced)</option>
                      <option value="General Support">General Support</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="details" className="text-sm text-gray-300 font-medium">
                      {formData.type === 'Job Application' ? 'Cover Letter / Position Details' : 'Project Requirements / Message'} <span className="text-primary-gold">*</span>
                    </label>
                    <textarea 
                      id="details"
                      name="details"
                      required
                      rows={5}
                      value={formData.details}
                      onChange={handleChange}
                      className="bg-primary-blue-dark border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors resize-none"
                      placeholder="Please provide details here..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={cn(
                      "mt-4 px-8 py-4 font-bold text-lg flex items-center justify-center gap-3 transition-colors",
                      isSubmitting 
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
                        : "bg-primary-gold text-primary-black hover:bg-primary-gold-light"
                    )}
                  >
                    {isSubmitting ? 'Processing...' : 'Submit Request'}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    By submitting this form, you agree to receive communications from Real Estate Construction.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="container mx-auto px-6 md:px-12 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Frequently Asked Questions</h3>
        </div>
        
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <div className="bg-primary-blue-dark border border-white/5 p-6 rounded-sm">
            <h4 className="text-white font-bold text-lg mb-2">Do you take residential projects?</h4>
            <p className="text-gray-400">While our primary focus is commercial and industrial infrastructure, our SK Real Estate Developer division manages high-end luxury residential complexes and townships.</p>
          </div>
          <div className="bg-primary-blue-dark border border-white/5 p-6 rounded-sm">
            <h4 className="text-white font-bold text-lg mb-2">How can I apply for a job?</h4>
            <p className="text-gray-400">You can visit the specific division's page under 'Businesses' and click on 'Apply for Jobs', or use the contact form above, selecting 'Job Application' as the inquiry type.</p>
          </div>
          <div className="bg-primary-blue-dark border border-white/5 p-6 rounded-sm">
            <h4 className="text-white font-bold text-lg mb-2">What locations do you serve?</h4>
            <p className="text-gray-400">We primarily operate across West Bengal and eastern India, but SK Enterprise handles large-scale logistics and supply projects nationally.</p>
          </div>
          <div className="bg-primary-blue-dark border border-white/5 p-6 rounded-sm">
            <h4 className="text-white font-bold text-lg mb-2">How long does it take to get a project estimate?</h4>
            <p className="text-gray-400">Once you submit an initial inquiry, our team will contact you within 24-48 business hours to schedule an appointment. Estimates are provided after a detailed project briefing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
