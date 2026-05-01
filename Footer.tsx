import { Link } from "react-router-dom";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import {
  COMPANIES,
  COMPANY_ADDRESS,
  COMPANY_EMAILS,
  COMPANY_PHONE,
} from "../../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-blue-dark border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-gold flex items-center justify-center rounded-sm clip-diagonal">
                <Building2 className="text-primary-black w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-brand font-bold text-2xl leading-tight text-white">
                  Real Estate Construction
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium commercial real estate and business infrastructure in West
              Bengal. Building excellence through innovation and trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold text-primary-gold">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link
                to="/company/sk-international-hotel-and-resort"
                className="hover:text-white transition-colors"
              >
                Hospitality
              </Link>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                to="/leadership"
                className="hover:text-white transition-colors"
              >
                Leadership
              </Link>
              <Link
                to="/culture"
                className="hover:text-white transition-colors"
              >
                Culture
              </Link>
              <Link
                to="/projects"
                className="hover:text-white transition-colors"
              >
                Projects Portfolio
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact & FAQ
              </Link>
              <Link to="/career" className="hover:text-white transition-colors">
                Career
              </Link>
              <Link to="/login" className="hover:text-white transition-colors">
                Portals Login
              </Link>
            </nav>
          </div>

          {/* Businesses */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold text-primary-gold">
              Our Main Divisions
            </h4>
            <nav className="flex flex-col gap-2 text-sm text-gray-400">
              {COMPANIES.map((company) => (
                <Link
                  key={company.id}
                  to={`/company/${company.id}`}
                  className="hover:text-white transition-colors"
                >
                  {company.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-lg font-semibold text-primary-gold">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href={`mailto:${COMPANY_EMAILS}`}
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-primary-gold mt-1" />
                <span>{COMPANY_EMAILS}</span>
              </a>
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s+/g, "")}`}
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-primary-gold mt-1" />
                <span>{COMPANY_PHONE}</span>
              </a>
              <a
                href="https://maps.app.goo.gl/randomPlace"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0 text-primary-gold mt-1" />
                <span>{COMPANY_ADDRESS}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Real Estate Construction. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
