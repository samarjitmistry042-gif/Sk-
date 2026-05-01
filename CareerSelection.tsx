import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';
import { COMPANIES } from '../lib/constants';

export default function CareerSelection() {
  return (
    <div className="flex flex-col bg-primary-black min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-brand font-bold text-white mb-6">Build Your Career With Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Select a division or sub-company to explore career opportunities, browse open positions, and apply to join our growing team of professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANIES.map((company) => (
            <Link
              key={company.id}
              to={`/company/${company.id}/apply`}
              className="bg-primary-blue-dark border border-white/5 p-8 group hover:border-primary-gold/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-32 h-32" />
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-brand font-bold text-white mb-3 group-hover:text-primary-gold transition-colors">{company.name}</h3>
                <p className="text-gray-400 mb-8 flex-grow">{company.shortDescription}</p>
                <div className="flex items-center text-primary-gold text-sm font-semibold uppercase tracking-wider">
                  View Positions & Apply <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
