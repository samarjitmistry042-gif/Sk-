import { Link } from "react-router-dom";
import {
  ChevronRight,
  HardHat,
  Building,
  Briefcase,
  Key,
  Coffee,
} from "lucide-react";
import { COMPANIES } from "../lib/constants";

function getIconForCompany(id: string) {
  switch (id) {
    case "sk-industrial-plaza":
      return <Building className="w-8 h-8" />;
    case "sk-construction":
      return <HardHat className="w-8 h-8" />;
    case "sk-enterprise":
      return <Briefcase className="w-8 h-8" />;
    case "sk-real-estate-developer":
      return <Key className="w-8 h-8" />;
    case "sk-international-hotel-and-resort":
      return <Coffee className="w-8 h-8" />;
    default:
      return <Building className="w-8 h-8" />;
  }
}

export default function Divisions() {
  return (
    <div className="flex flex-col bg-primary-black min-h-screen pt-12 md:pt-24 pb-24">
      {/* Header */}
      <div className="bg-primary-blue-dark py-20 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Main Divisions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg font-light">
            Specialized expertise across diverse sectors of real estate,
            construction, and premium hospitality.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPANIES.map((company) => (
            <Link
              key={company.id}
              to={`/company/${company.id}`}
              className="group relative bg-primary-blue-dark border border-white/5 p-8 transition-all duration-300 hover:border-primary-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] block overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500">
                {getIconForCompany(company.id)}
              </div>

              <div className="text-primary-gold mb-6">
                {getIconForCompany(company.id)}
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-primary-gold transition-colors">
                {company.name}
              </h4>
              <p className="text-gray-400 mb-6 font-light">
                {company.shortDescription}
              </p>
              <div className="flex items-center text-primary-gold text-sm font-semibold uppercase tracking-wider">
                Explore Division{" "}
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
