import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Coffee,
  Wifi,
  Car,
  Mountain,
  Utensils,
  Waves,
  ArrowRight,
  Check,
  CalendarDays,
} from "lucide-react";

export default function Azzora() {
  return (
    <div className="flex flex-col bg-primary-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-c6a4d14d2371?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-black/80 via-primary-black/60 to-primary-black z-10" />
        </div>

        <div className="container relative z-20 px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-black/50 backdrop-blur-sm border border-white/10 mb-8">
            <Star className="w-4 h-4 text-primary-gold fill-primary-gold" />
            <Star className="w-4 h-4 text-primary-gold fill-primary-gold" />
            <Star className="w-4 h-4 text-primary-gold fill-primary-gold" />
            <Star className="w-4 h-4 text-primary-gold fill-primary-gold" />
            <Star className="w-4 h-4 text-primary-gold fill-primary-gold" />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight">
            AZZORA
          </h1>
          <p className="text-xl md:text-2xl text-primary-gold font-serif italic mb-8">
            Hotel & Resort by SK International
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Elevate your senses. AZZORA defines the new standard of opulence
            with sweeping mountain vistas and curated cultural experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-primary-gold text-primary-black font-bold uppercase tracking-wider hover:bg-white hover:text-primary-black transition-colors">
              Reserve Your Stay
            </button>
            <a
              href="#overview"
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-colors"
            >
              Explore Property
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-24 bg-primary-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
                Welcome to AZZORA
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Majestic Mountain Retreat
              </h3>
              <p className="text-gray-400 leading-relaxed font-light mb-6">
                Situated amidst misty peaks and lush valleys, AZZORA offers a
                majestic escape defined by contemporary elegance and rich local
                heritage. The resort features 85 bespoke suites designed with
                sustainable luxury in mind, boasting panoramic views from every
                room.
              </p>
              <p className="text-gray-400 leading-relaxed font-light mb-8">
                Designed for those who appreciate the finer things, AZZORA hosts
                an exclusive art gallery, therapeutic hot springs, and an alpine
                culinary experience that celebrates seasonal, farm-to-table
                ingredients.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-blue-dark flex items-center justify-center text-primary-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Location</h4>
                    <p className="text-gray-500 text-xs">Highland Peaks</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-blue-dark flex items-center justify-center text-primary-gold">
                    <Mountain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Altitude</h4>
                    <p className="text-gray-500 text-xs">
                      6,500 ft above sea level
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="aspect-square relative overflow-hidden clip-diagonal group">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
                  alt="AZZORA Exterior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 aspect-square border border-primary-gold/30 -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 bg-primary-blue-dark border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
              World-Class Facilities
            </h2>
            <h3 className="text-4xl font-serif font-bold text-white">
              Curated Amenities
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Utensils,
                title: "Fine Dining",
                desc: "Exquisite culinary experiences with world-class chefs.",
              },
              {
                icon: Waves,
                title: "Spa Services",
                desc: "Rejuvenating therapies and holistic wellness treatments.",
              },
              {
                icon: Mountain,
                title: "Adventure Activities",
                desc: "Thrilling excursions and carefully guided tours.",
              },
              {
                icon: CalendarDays,
                title: "Event Venues",
                desc: "Versatile, opulent spaces for grand celebrations.",
              },
            ].map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="bg-primary-black border border-white/5 p-8 text-center hover:border-primary-gold/30 transition-colors group"
                >
                  <Icon className="w-8 h-8 text-primary-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-serif font-bold mb-2">
                    {amenity.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{amenity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-24 bg-primary-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
                Accommodations
              </h2>
              <h3 className="text-4xl font-serif font-bold text-white">
                Luxurious Rooms & Suites
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Room 1 */}
            <div className="bg-primary-blue-dark border border-white/5 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                  alt="Valley View Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-white mb-2">
                  Valley View Room
                </h4>
                <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                  55 sq.m • Mountain Views • Fireplace
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Starting from
                    </p>
                    <p className="text-primary-gold text-xl font-bold">
                      ₹12,000
                      <span className="text-sm font-normal text-gray-500">
                        {" "}
                        /night
                      </span>
                    </p>
                  </div>
                  <button className="text-white hover:text-primary-gold transition-colors flex items-center gap-1 text-sm font-bold uppercase tracking-wider">
                    Book <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Room 2 */}
            <div className="bg-primary-blue-dark border border-white/5 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop"
                  alt="Heritage Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-white mb-2">
                  Heritage Suite
                </h4>
                <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                  85 sq.m • Balcony • Living Area
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Starting from
                    </p>
                    <p className="text-primary-gold text-xl font-bold">
                      ₹28,000
                      <span className="text-sm font-normal text-gray-500">
                        {" "}
                        /night
                      </span>
                    </p>
                  </div>
                  <button className="text-white hover:text-primary-gold transition-colors flex items-center gap-1 text-sm font-bold uppercase tracking-wider">
                    Book <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Room 3 */}
            <div className="bg-primary-blue-dark border border-white/5 overflow-hidden group">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
                  alt="Grand Chalet"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif font-bold text-white mb-2">
                  The Grand Chalet
                </h4>
                <p className="text-gray-400 text-sm mb-6 pb-6 border-b border-white/10">
                  200 sq.m • 2 Bedrooms • Private Sauna
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      Starting from
                    </p>
                    <p className="text-primary-gold text-xl font-bold">
                      ₹65,000
                      <span className="text-sm font-normal text-gray-500">
                        {" "}
                        /night
                      </span>
                    </p>
                  </div>
                  <button className="text-white hover:text-primary-gold transition-colors flex items-center gap-1 text-sm font-bold uppercase tracking-wider">
                    Book <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
