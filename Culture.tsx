import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Heart,
  Award,
  GraduationCap,
} from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety Above All",
    description:
      "We adhere to the strictest occupational health and safety standards. Zero compromise on the well-being of our workforce on site and in the office.",
  },
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description:
      "Our strength lies in our varied perspectives. We foster an inclusive environment where every voice is heard, regardless of background or role.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We invest in our people. From leadership workshops to technical certifications, we ensure your career trajectory goes upward.",
  },
  {
    icon: Heart,
    title: "Holistic Well-being",
    description:
      "Comprehensive health benefits, ergonomic workspaces, and flexible policies to ensure a healthy work-life balance for all employees.",
  },
];

const PERKS = [
  "Comprehensive Medical Insurance",
  "Annual Performance Bonuses",
  "On-site Safety Gear & Allowances",
  "Provident Fund & Retirement Plans",
  "Ongoing Technical Skill Training",
  "Paid Maternity & Paternity Leave",
  "Employee Wellness Programs",
  "Project Completion Rewards",
];

export default function Culture() {
  return (
    <div className="flex flex-col bg-primary-black min-h-screen pt-12 md:pt-24 pb-24">
      {/* Header */}
      <div className="relative py-24 border-b border-white/5 overflow-hidden bg-primary-blue-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 hidden md:block" />
        <div className="container relative mx-auto px-6 md:px-12 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Life at SK Group
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            We don't just build infrastructure; we build careers. Join a culture
            defined by excellence, uncompromising safety, and mutual respect.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
            Our DNA
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
            What We Stand For
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {VALUES.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="bg-primary-blue-dark border border-white/5 p-8 hover:border-primary-gold/30 transition-colors group"
              >
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-sm clip-diagonal mb-6 group-hover:bg-primary-gold/10 transition-colors">
                  <Icon className="w-7 h-7 text-primary-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="bg-primary-blue-dark border-y border-white/5 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
                Employee Benefits
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Rewarding Your Dedication
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                To build the best, we need the best. That's why we offer a
                progressive compensation and benefits package designed to
                support you and your family at every stage of life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERKS.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary-gold shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden clip-diagonal border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Testimonials */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary-gold uppercase tracking-widest font-semibold mb-4">
            Voices of SK Group
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Hear From Our Team
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary-blue-dark border border-white/5 p-8 relative">
            <div className="text-primary-gold text-4xl font-serif absolute top-4 right-6 opacity-20">
              "
            </div>
            <p className="text-gray-300 font-light leading-relaxed mb-8 italic">
              "Starting as a junior site engineer to now managing multi-million
              dollar projects, SK Group has given me the mentorship and trust to
              grow exponentially."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-black rounded-full overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Employee"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Rahul Desai</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Sr. Project Manager
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-blue-dark border border-white/5 p-8 relative">
            <div className="text-primary-gold text-4xl font-serif absolute top-4 right-6 opacity-20">
              "
            </div>
            <p className="text-gray-300 font-light leading-relaxed mb-8 italic">
              "The commitment to safety here isn't just on paper. It's a daily
              practice. As a safety officer, I have the full backing of
              leadership to enforce zero-tolerance policies."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-black rounded-full overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Employee"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Neha Agarwal</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Lead Safety Officer
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-blue-dark border border-white/5 p-8 relative">
            <div className="text-primary-gold text-4xl font-serif absolute top-4 right-6 opacity-20">
              "
            </div>
            <p className="text-gray-300 font-light leading-relaxed mb-8 italic">
              "Working in corporate finance within the construction industry is
              challenging, but the culture of transparency and collaboration
              makes SK Group feel like a family."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-black rounded-full overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
                  alt="Employee"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">Sunita Menon</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">
                  Financial Analyst
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-primary-gold p-12 text-center rounded-sm clip-diagonal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-black mb-4">
            Ready to Build Your Future?
          </h2>
          <p className="text-primary-black/80 mb-8 max-w-xl mx-auto font-medium">
            Explore our open positions across structural engineering, project
            management, corporate operations, and more.
          </p>
          <Link
            to="/career"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-black text-white font-bold hover:bg-white hover:text-primary-black transition-colors"
          >
            View Open Positions <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
