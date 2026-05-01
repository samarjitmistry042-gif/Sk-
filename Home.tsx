import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  HardHat,
  Building,
  Briefcase,
  Key,
  Coffee,
  Star,
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

const GALLERY_ITEMS = [
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    title: "Commercial Excellence",
    type: "Real Estate",
  },
  {
    img: "https://images.unsplash.com/photo-1542314831-c6a4d14d2371?q=80&w=600&auto=format&fit=crop",
    title: "AURA Resort",
    type: "Hospitality",
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=600&auto=format&fit=crop",
    title: "EcoPark Industrial",
    type: "Real Estate",
  },
  {
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    title: "AZZORA Retreat",
    type: "Hospitality",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
    title: "The Vertex Residency",
    type: "Real Estate",
  },
  {
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop",
    title: "AMEZMENT Hub",
    type: "Hospitality",
  },
];

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (marqueeRef.current) {
      const { scrollLeft } = marqueeRef.current;
      const itemWidth = 344; // 320px width + 24px gap
      const index = Math.round(scrollLeft / itemWidth);
      // Ensure index is within bounds of GALLERY_ITEMS
      const safeIndex = Math.max(0, Math.min(index, GALLERY_ITEMS.length - 1));
      setActiveIndex(safeIndex);
    }
  };

  const scrollToItem = (index: number) => {
    if (marqueeRef.current) {
      const itemWidth = 344;
      marqueeRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (marqueeRef.current?.offsetLeft || 0));
    setScrollLeftState(marqueeRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (marqueeRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // scroll speed multiplier
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft = scrollLeftState - walk;
    }
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center -mt-24 pt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2071&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-black/80 via-primary-black/60 to-primary-black z-10" />
        </div>

        <div className="container relative z-20 px-6 md:px-12 flex flex-col items-center text-center mt-[-80px]">
          <span className="text-primary-gold uppercase tracking-[0.3em] font-brand text-sm md:text-base font-bold mb-4">
            Real Estate & Premium Hospitality
          </span>
          <h1 className="text-5xl md:text-7xl font-brand font-bold text-white leading-tight mb-6 max-w-4xl">
            Building Infrastructure, <br className="hidden md:block" />
            <span className="text-primary-gold">Curating Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            From premier commercial real estate developments to world-class
            luxury stays at{" "}
            <span className="text-white font-medium">
              SK International Hotel & Resort
            </span>
            . We build the foundations where modern enterprises and leisure
            thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="px-8 py-4 bg-primary-gold text-primary-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Explore Properties
            </Link>
            <Link
              to="/company/sk-international-hotel-and-resort"
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Discover Resorts
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Gallery */}
      <section className="py-12 bg-primary-black border-b border-white/5 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-primary-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary-black to-transparent z-10 pointer-events-none" />

        <div
          className="flex w-full overflow-x-auto gap-6 px-12 md:px-0 md:justify-center no-scrollbar cursor-grab active:cursor-grabbing select-none"
          ref={marqueeRef}
          onScroll={handleScroll}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 relative w-80 h-56 overflow-hidden group border border-white/10 rounded-sm clip-diagonal"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/20 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                <span className="text-primary-gold text-xs font-bold uppercase tracking-widest mb-1">
                  {item.type}
                </span>
                <span className="text-white font-serif font-bold text-xl">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="mt-8 flex items-center justify-center gap-4 relative z-20">
          <div className="flex gap-2">
            {GALLERY_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToItem(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-primary-gold w-6"
                    : "bg-white/20 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Overview */}
      <section id="our-main-divisions" className="py-24 bg-primary-blue-dark">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
              Our Main Divisions
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Specialized Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANIES.map((company) => (
              <Link
                key={company.id}
                to={`/company/${company.id}`}
                className="group relative bg-primary-black border border-white/5 p-8 transition-all duration-300 hover:border-primary-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] block overflow-hidden"
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
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
                About the Parent Company
              </h2>
              <h3 className="text-3xl md:text-5xl font-brand font-bold mb-6 text-white leading-tight">
                Real Estate Construction
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Headquartered in Kolkata, West Bengal, Real Estate Construction
                is a premier conglomerate dedicated to shaping the commercial
                and industrial landscape of eastern India.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Under the visionary leadership of our founders, we have
                established four specialized divisions, each focusing on a core
                aspect of real estate and infrastructure development. From heavy
                construction to luxury residential suites, our commitment to
                quality remains unparalleled.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-4xl font-serif text-primary-gold mb-2">
                    15+
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-primary-gold mb-2">
                    50+
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Mega Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-blue-dark relative overflow-hidden clip-diagonal">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2016&auto=format&fit=crop"
                  alt="Construction Site in Kolkata"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary-gold p-8 max-w-xs hidden md:block clip-diagonal shadow-2xl">
                <p className="text-primary-black font-serif font-bold text-xl leading-snug">
                  "Building the future of Bengal's commercial infrastructure."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Highlight Section */}
      <section className="py-24 bg-primary-black border-y border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
              Premium Destinations
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Experience Luxury Stay with SK International Hotel & Resort
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Elevating hospitality beyond expectations. Discover our portfolio
              of magnificent stays tailored for discerning travelers seeking
              elegance and uncompromising comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "AURA",
                desc: "Seaside Sanctuary & Spa",
                img: "https://images.unsplash.com/photo-1542314831-c6a4d14d2371?q=80&w=2070&auto=format&fit=crop",
                link: "/hospitality/aura",
              },
              {
                name: "AZZORA",
                desc: "Majestic Alpine Retreat",
                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
                link: "/hospitality/azzora",
              },
              {
                name: "AMEZMENT",
                desc: "High-Energy Entertainment Hub",
                img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
                link: "/hospitality/amezment",
              },
            ].map((hotel, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden flex flex-col justify-end min-h-[450px] border border-white/10 hover:border-primary-gold/50 transition-all duration-500"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Subtle luxurious gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                </div>
                <div className="relative z-10 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Star className="w-3 h-3 text-primary-gold fill-primary-gold" />
                    <Star className="w-3 h-3 text-primary-gold fill-primary-gold" />
                    <Star className="w-3 h-3 text-primary-gold fill-primary-gold" />
                    <Star className="w-3 h-3 text-primary-gold fill-primary-gold" />
                    <Star className="w-3 h-3 text-primary-gold fill-primary-gold" />
                  </div>
                  <h4 className="text-3xl font-serif font-bold text-white mb-2 tracking-wide">
                    {hotel.name}
                  </h4>
                  <p className="text-primary-gold font-light tracking-widest text-xs uppercase mb-6">
                    {hotel.desc}
                  </p>
                  <Link
                    to={hotel.link}
                    className="inline-flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider hover:text-primary-gold transition-colors"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-primary-black">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
              Board of Directors
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Our Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-48 h-48 mb-6 overflow-hidden clip-diagonal bg-primary-blue relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                  alt="Nasir Sheikh - CEO"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-1">
                Nasir Sheikh
              </h4>
              <p className="text-primary-gold font-semibold uppercase tracking-wider text-sm mb-4">
                Chief Executive Officer
              </p>
              <p className="text-gray-400 font-light max-w-sm">
                Driving the strategic vision and monumental growth of Real
                Estate Construction across commercial and industrial sectors.
              </p>
            </div>

            {/* Director */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-48 h-48 mb-6 overflow-hidden clip-diagonal bg-primary-blue relative">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                  alt="Sarju Sheikh - Director"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="text-2xl font-serif font-bold text-white mb-1">
                Sarju Sheikh
              </h4>
              <p className="text-primary-gold font-semibold uppercase tracking-wider text-sm mb-4">
                Director
              </p>
              <p className="text-gray-400 font-light max-w-sm">
                Spearheading operational excellence and managing large-scale
                enterprise execution with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage / Timeline */}
      <section className="py-24 bg-primary-blue-dark border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
              Our Heritage
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
              15+ Years of Excellence
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-light">
              From our humble beginnings to becoming a leading conglomerate,
              track the milestones that define SK Group's legacy.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden md:block"></div>

            <div className="space-y-16 relative">
              {/* Timeline Item 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-5/12 text-center md:text-right mb-6 md:mb-0 pr-0 md:pr-8">
                  <h4 className="text-2xl font-serif font-bold text-primary-gold mb-2">
                    2009
                  </h4>
                  <h5 className="text-lg font-bold text-white mb-2">
                    Inception of SK Construction
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Nasir Sheikh founds the company with a small team, securing
                    the first public works contract in local civil engineering.
                  </p>
                </div>
                <div className="hidden md:flex w-10 h-10 bg-primary-black border-2 border-primary-gold rounded-full items-center justify-center z-10 shrink-0">
                  <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                </div>
                <div className="w-full md:w-5/12 pl-0 md:pl-8">
                  <div className="h-40 overflow-hidden relative border border-white/5 clip-diagonal group">
                    <img
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop"
                      alt="Early days"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full md:flex-row-reverse">
                <div className="w-full md:w-5/12 text-center md:text-left mb-6 md:mb-0 pl-0 md:pl-8">
                  <h4 className="text-2xl font-serif font-bold text-primary-gold mb-2">
                    2014
                  </h4>
                  <h5 className="text-lg font-bold text-white mb-2">
                    Launch of SK Real Estate
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Diversification into luxury residential projects, marking a
                    monumental shift from industrial to mixed-use development.
                  </p>
                </div>
                <div className="hidden md:flex w-10 h-10 bg-primary-black border-2 border-primary-gold rounded-full items-center justify-center z-10 shrink-0">
                  <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                </div>
                <div className="w-full md:w-5/12 pr-0 md:pr-8">
                  <div className="h-40 overflow-hidden relative border border-white/5 clip-diagonal group">
                    <img
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop"
                      alt="Real Estate"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-5/12 text-center md:text-right mb-6 md:mb-0 pr-0 md:pr-8">
                  <h4 className="text-2xl font-serif font-bold text-primary-gold mb-2">
                    2018
                  </h4>
                  <h5 className="text-lg font-bold text-white mb-2">
                    Formation of SK Industrial Plaza
                  </h5>
                  <p className="text-gray-400 text-sm">
                    A dedicated division created to pioneer IT parks, logistics
                    hubs, and robust corporate headquarters catering to
                    multinational clients.
                  </p>
                </div>
                <div className="hidden md:flex w-10 h-10 bg-primary-black border-2 border-primary-gold rounded-full items-center justify-center z-10 shrink-0">
                  <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                </div>
                <div className="w-full md:w-5/12 pl-0 md:pl-8">
                  <div className="h-40 overflow-hidden relative border border-white/5 clip-diagonal group">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                      alt="Industrial Plaza"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full md:flex-row-reverse">
                <div className="w-full md:w-5/12 text-center md:text-left mb-6 md:mb-0 pl-0 md:pl-8">
                  <h4 className="text-2xl font-serif font-bold text-primary-gold mb-2">
                    2026
                  </h4>
                  <h5 className="text-lg font-bold text-white mb-2">
                    Bengal's Largest Logistics Node
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Delivery of the multi-million dollar Haldia Logistics Node,
                    establishing SK Group as the definitive leader in enterprise
                    development.
                  </p>
                </div>
                <div className="hidden md:flex w-10 h-10 bg-primary-gold rounded-full items-center justify-center z-10 shrink-0">
                  <div className="w-4 h-4 bg-primary-black rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
                </div>
                <div className="w-full md:w-5/12 pr-0 md:pr-8">
                  <div className="h-40 overflow-hidden relative border border-primary-gold/30 clip-diagonal group">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=2070&auto=format&fit=crop"
                      alt="Today"
                      className="w-full h-full object-cover grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability / CSR */}
      <section className="py-24 bg-primary-black border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-video bg-primary-blue-dark relative overflow-hidden clip-diagonal">
                <img
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1927&auto=format&fit=crop"
                  alt="Sustainable Construction Practices"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-primary-black border border-white/10 p-6 hidden md:block">
                <p className="text-primary-gold font-serif font-bold text-3xl mb-1">
                  Zero
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">
                  Compromise on Safety
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
                Corporate Responsibility
              </h2>
              <h3 className="text-3xl md:text-5xl font-brand font-bold mb-6 text-white leading-tight">
                Building a Sustainable Future
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                As long-term stakeholders in West Bengal's development, we
                integrate environmentally conscious practices into every
                commercial and industrial project we undertake.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-primary-gold/20">
                    <div className="w-2 h-2 rounded-full bg-primary-gold"></div>
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">
                      Eco-Friendly Materials
                    </h5>
                    <p className="text-sm text-gray-500">
                      Sourcing sustainable and recycled building materials.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-primary-gold/20">
                    <div className="w-2 h-2 rounded-full bg-primary-gold"></div>
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">
                      Strict Safety Compliance
                    </h5>
                    <p className="text-sm text-gray-500">
                      Exceeding ISO standards for occupational health and worker
                      safety.
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                to="/about"
                className="text-primary-gold hover:text-white uppercase tracking-wider text-sm font-bold flex items-center gap-2 transition-colors"
              >
                Read our CSR Policy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience / Testimonials */}
      <section className="py-24 bg-primary-blue-dark border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
              Client Experience
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
              What Our Partners Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-black border border-white/5 p-8 relative group hover:border-primary-gold/30 transition-colors">
              <div className="text-primary-gold text-4xl font-serif absolute top-4 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                "
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic">
                "Working with SK Group on our new commercial plaza was a
                seamless experience. Their attention to structural integrity and
                timeline adherence is unmatched in Bengal."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-blue rounded-sm clip-diagonal overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                    alt="Client"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Amitab Roy</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    Retail Ventures
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-black border border-white/5 p-8 relative group hover:border-primary-gold/30 transition-colors">
              <div className="text-primary-gold text-4xl font-serif absolute top-4 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                "
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic">
                "The residential complex they developed for us sets a new
                standard for luxury. Every detail reflects their over 15 years
                of deep industry expertise."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-blue rounded-sm clip-diagonal overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                    alt="Client"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Priya Das</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    Das Holdings
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-black border border-white/5 p-8 relative group hover:border-primary-gold/30 transition-colors">
              <div className="text-primary-gold text-4xl font-serif absolute top-4 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                "
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic">
                "SK Enterprise handles our logistics facilities setup. Finding a
                partner who understands heavy industrial needs and execution has
                been a game changer."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-blue rounded-sm clip-diagonal overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                    alt="Client"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Vikram Singh</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">
                    Global Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-primary-blue-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Build or Explore?
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl font-light mb-10 max-w-2xl">
            Whether you are looking to partner on a groundbreaking commercial
            real estate project or seeking an unforgettable luxury stay, our
            team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-primary-gold text-primary-black font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/company/sk-international-hotel-and-resort"
              className="px-10 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
