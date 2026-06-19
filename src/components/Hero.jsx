import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.15 } } },
  item: { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } },
};

const FLAT_IMG = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=650&q=80';

export default function Hero() {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);
  // navigate path updated to /flats

  return (
    <section className="min-h-screen bg-[#F7F4EF] flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 w-full py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-6">

        {/* Left side — 55% */}
        <motion.div
          className="w-full lg:w-[55%]"
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={stagger.item} className="flex items-center gap-2 mb-5">
            <div className="w-8 h-px bg-[#D4A853]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A853]">
              Bangladesh's First Certified Used Flat Platform
            </span>
          </motion.div>

          <motion.h1
            variants={stagger.item}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1B2A] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Buy a Flat You Can Actually Trust.
          </motion.h1>

          <motion.p variants={stagger.item} className="text-lg text-[#6B7280] mt-5 max-w-md leading-relaxed">
            Every listing inspected, graded, and certified. No dalals, no hidden issues, no surprises.
          </motion.p>

          <motion.div variants={stagger.item} className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigate('/flats')}
              className="bg-[#0D1B2A] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Browse Certified Flats
            </button>
            <button
              onClick={() => navigate('/list')}
              className="border-2 border-[#D4A853] text-[#0D1B2A] px-8 py-4 rounded-xl font-medium hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-all duration-300"
            >
              List Your Flat
            </button>
          </motion.div>

          <motion.div variants={stagger.item} className="flex flex-wrap gap-6 mt-6">
            {['Legal Verified', 'Structurally Inspected', 'Grade Certified'].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                <CheckCircle size={15} className="text-[#27AE60]" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side — 45% */}
        <div className="w-full lg:w-[45%] flex justify-center relative">
          <div className="absolute w-96 h-96 rounded-full bg-[#D4A853]/10 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Floating listing card */}
          <div className="animate-float bg-white rounded-2xl shadow-2xl overflow-hidden w-80">
            {/* Flat photo */}
            {!imgError ? (
              <img
                src={FLAT_IMG}
                alt="2BHK flat in Mirpur"
                className="w-full h-48 object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-[#0D1B2A] to-[#2C4A6E] flex items-center justify-center text-white/30 text-sm">
                Flat Photo
              </div>
            )}

            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-[#0D1B2A] text-sm">2BHK — Mirpur 10, Dhaka</p>
                  <p className="text-[#D4A853] font-bold text-lg mt-0.5">BDT 24,00,000</p>
                </div>
                {/* Grade badge */}
                <div className="flex flex-col items-center bg-[#27AE60] text-white px-4 py-2 rounded-xl shrink-0">
                  <span className="text-[10px] font-medium leading-none uppercase tracking-wide">Grade</span>
                  <span className="text-2xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    A
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="bg-[#0D1B2A] text-[#D4A853] text-xs px-3 py-1 rounded-full">
                  GRIHO Certified ✓
                </span>
              </div>
              <p className="text-xs text-[#6B7280] mt-1.5">Inspected: 12 June 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
