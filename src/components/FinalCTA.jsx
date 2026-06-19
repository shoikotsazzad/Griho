import { motion } from 'framer-motion';
import { Shield, CheckCircle, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <section
      className="py-28 text-center"
      style={{
        backgroundColor: '#162537',
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(212,168,83,0.04) 0px, rgba(212,168,83,0.04) 1px, transparent 0px, transparent 50px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A853] mb-3">
            Join the Waitlist
          </p>
          <h2
            className="text-5xl font-bold text-white max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Certified Home Starts Here.
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            Be among the first to access Bangladesh's most transparent flat marketplace.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => navigate('/flats')}
              className="bg-[#D4A853] text-[#0D1B2A] font-bold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Find a Flat
            </button>
            <button
              onClick={() => navigate('/list')}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
            >
              List Your Flat
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { Icon: Shield, label: 'Certified Listings' },
              { Icon: CheckCircle, label: 'Legal Verified' },
              { Icon: Star, label: 'Graded & Inspected' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                <Icon size={16} className="text-[#D4A853]" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
