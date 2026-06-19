import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const steps = [
  {
    num: 1,
    title: 'Invest Monthly',
    desc: 'Set your monthly deposit amount. As low as BDT 10,000/month.',
  },
  {
    num: 2,
    title: 'Cross the Threshold',
    desc: 'Once you reach BDT 6,00,000 in your account, you become eligible.',
  },
  {
    num: 3,
    title: 'Get Matched',
    desc: 'Griho matches you with 3 other eligible investors for a certified flat.',
  },
  {
    num: 4,
    title: 'Co-Own the Flat',
    desc: 'Each investor owns 25%. Rent it out. Build equity together.',
  },
];

const avatars = [
  { initials: 'SA', isYou: false },
  { initials: 'RH', isYou: false },
  { initials: 'TI', isYou: false },
  { initials: 'You', isYou: true },
];

export default function FractionalInvestment() {
  return (
    <section id="invest" className="bg-[#0D1B2A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A853] mb-2">
              Fractional Ownership
            </p>
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Can't Afford a Full Flat? Own a Share.
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Invest monthly. Cross the threshold. Get matched with co-owners. Own a certified flat together.
            </p>

            {/* Vertical steps with connecting line */}
            <div className="relative pl-10">
              <div className="absolute left-4 top-4 bottom-4 border-l-2 border-dashed border-[#D4A853]/30" />
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.num} className="relative flex gap-5 items-start">
                    <div className="absolute -left-10 w-8 h-8 rounded-full bg-[#D4A853] text-[#0D1B2A] font-bold flex items-center justify-center text-sm shrink-0 z-10">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{step.title}</p>
                      <p className="text-white/60 text-xs mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side — mockup cards */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Investment Progress Card */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-white font-semibold mb-3">Your Investment Account</p>
              <p
                className="text-3xl font-bold text-[#D4A853]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                BDT 4,20,000
              </p>
              <p className="text-white/50 text-sm mt-1">of BDT 6,00,000 threshold</p>
              <div className="bg-white/20 rounded-full h-3 mt-3 overflow-hidden">
                <div
                  className="bg-[#D4A853] h-full rounded-full animate-pulse"
                  style={{ width: '70%' }}
                />
              </div>
              <p className="text-white/60 text-xs mt-2">70% Complete — Est. 2 months to eligibility</p>
            </div>

            {/* Co-Ownership Offer Card */}
            <div className="bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <Home size={16} className="text-[#0D1B2A]" />
                <span className="font-semibold text-[#0D1B2A] text-sm">Co-Ownership Offer</span>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-[#0D1B2A]">2BHK — Uttara, Dhaka</p>
                  <p className="text-[#6B7280] text-sm">BDT 24,00,000 total</p>
                </div>
                <span className="bg-[#2980B9] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Grade B
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {avatars.map(({ initials, isYou }) => (
                    <div
                      key={initials}
                      className="w-8 h-8 rounded-full bg-[#0D1B2A] text-white text-xs font-bold flex items-center justify-center border-2 shrink-0"
                      style={{
                        borderColor: isYou ? '#D4A853' : '#fff',
                        backgroundColor: isYou ? '#D4A853' : '#0D1B2A',
                        color: isYou ? '#0D1B2A' : '#fff',
                      }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span className="text-[#6B7280] text-xs">Your Share: 25%</span>
              </div>

              <p className="text-xs font-semibold text-[#0D1B2A] mt-2">
                Your Share: <span className="text-[#D4A853]">BDT 6,00,000</span>
              </p>

              <div className="flex gap-2 mt-3">
                <button className="flex-1 bg-[#0D1B2A] text-white rounded-xl px-4 py-2 text-sm font-medium hover:scale-105 transition-transform">
                  Accept Offer
                </button>
                <button className="flex-1 border border-[#0D1B2A] text-[#0D1B2A] rounded-xl px-4 py-2 text-sm font-medium hover:bg-[#0D1B2A]/5 transition-colors">
                  View Details
                </button>
              </div>

              <p className="text-[#E74C3C] text-xs mt-2 font-medium">Offer expires in 47:32:10</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
