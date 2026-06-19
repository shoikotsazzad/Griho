import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const benefits = [
  'Fair Market Valuation',
  'Transparent Grading Report',
  'Legal Documentation Support',
  'Optional Renovation Service',
  'Faster, Structured Sale Process',
];

export default function ForSellers() {
  const navigate = useNavigate();
  return (
    <section id="for-sellers" className="bg-[#F7F4EF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left — seller journey cards */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative flex flex-col gap-0">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 z-10 relative">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-[#0D1B2A]">Flat Submitted</p>
                    <p className="text-[#6B7280] text-xs mt-0.5">Bashundhara, Block C, Dhaka</p>
                    <p className="text-[#6B7280] text-xs">Submitted: 10 June 2025</p>
                  </div>
                  <span className="bg-gray-100 text-[#6B7280] text-xs px-3 py-1 rounded-full font-medium">
                    Pending Review
                  </span>
                </div>
              </div>

              {/* Connector arrow */}
              <div className="flex justify-center py-1 relative">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 border-l-2 border-dashed border-[#D4A853]/60" />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '8px solid #D4A853',
                      opacity: 0.6,
                    }}
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 z-10 relative">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-[#0D1B2A]">Grade Assigned: B</p>
                    <p className="text-[#6B7280] text-xs mt-0.5">Valuation: BDT 22,00,000</p>
                    <p className="text-[#6B7280] text-xs">Inspected: 17 June 2025</p>
                  </div>
                  <span className="bg-[#2980B9] text-white text-sm font-bold px-4 py-2 rounded-xl">
                    B
                  </span>
                </div>
              </div>

              {/* Connector arrow */}
              <div className="flex justify-center py-1">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 border-l-2 border-dashed border-[#D4A853]/60" />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '8px solid #D4A853',
                      opacity: 0.6,
                    }}
                  />
                </div>
              </div>

              {/* Card 3 — choice */}
              <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 z-10 relative">
                <p className="font-semibold text-[#0D1B2A] mb-3">Your Next Step</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="flex-1 border-2 border-[#0D1B2A] text-[#0D1B2A] rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#0D1B2A] hover:text-white transition-all duration-200">
                    List As-Is at BDT 22,00,000
                  </button>
                  <button className="flex-1 bg-[#D4A853] text-[#0D1B2A] rounded-xl px-4 py-2.5 text-sm font-bold hover:scale-105 transition-transform">
                    Revamp for Higher Grade →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — benefits */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A853] mb-2">
              For Flat Owners
            </p>
            <h2
              className="text-4xl font-bold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sell Smarter. Not Cheaper.
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Stop guessing your flat's worth. Let Griho inspect, grade, and market it — so you get the right price, not just a fast sale.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#27AE60] shrink-0" />
                  <span className="text-[#1F2937] font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate('/list')}
              className="bg-[#D4A853] text-[#0D1B2A] font-bold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Submit Your Flat for Free →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
