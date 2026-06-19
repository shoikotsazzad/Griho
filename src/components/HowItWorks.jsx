import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sellerSteps = [
  { num: 1, title: 'Submit Listing', desc: 'Upload photos, documents, and flat details via the app' },
  { num: 2, title: 'Initial Review', desc: "Griho's BD team screens your submission within 48 hours" },
  { num: 3, title: 'On-Site Inspection', desc: 'Our technical team visits and evaluates structure, legal, utility' },
  { num: 4, title: 'Grade Assigned', desc: 'Your flat receives an A–D grade with full valuation report' },
  { num: 5, title: 'List or Revamp', desc: "List as-is at graded price, or renovate with Griho's team for a higher grade" },
];

const buyerSteps = [
  { num: 1, title: 'Browse Certified Flats', desc: 'Filter by grade, location, size, and price' },
  { num: 2, title: 'View Full Grade Report', desc: 'See structural, legal, and utility scores in plain language' },
  { num: 3, title: 'Express Interest', desc: 'Griho connects you within 24 hours' },
  { num: 4, title: 'Legal Facilitation', desc: 'Our partnered legal firms handle documentation and title transfer' },
  { num: 5, title: 'Own Your Home', desc: 'Get your ownership documents uploaded to your profile' },
];

const tabVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const stepsVariants = {
  show: { transition: { staggerChildren: 0.12 } },
};

const stepItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('sellers');
  const steps = activeTab === 'sellers' ? sellerSteps : buyerSteps;

  return (
    <section id="how-it-works" className="bg-[#F7F4EF] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl font-bold text-[#0D1B2A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How GRIHO Works
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mt-6">
            {[
              { key: 'sellers', label: 'For Sellers' },
              { key: 'buyers', label: 'For Buyers & Investors' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === key
                    ? 'bg-[#0D1B2A] text-white'
                    : 'bg-white border border-[#0D1B2A] text-[#0D1B2A] hover:bg-[#0D1B2A]/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div
              className="flex flex-col lg:flex-row items-start lg:items-center gap-0 mt-10 relative"
              variants={stepsVariants}
              initial="hidden"
              animate="show"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={stepItem}
                  className="flex flex-row lg:flex-col items-start lg:items-center flex-1 gap-4 lg:gap-0 relative pb-8 lg:pb-0"
                >
                  {/* Connector line (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-5 left-1/2 w-full h-0 border-t-2 border-dashed border-[#D4A853]/50 z-0" />
                  )}
                  {/* Connector line (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute left-5 top-10 bottom-0 w-0 border-l-2 border-dashed border-[#D4A853]/50 z-0" />
                  )}

                  {/* Circle */}
                  <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#D4A853] text-[#0D1B2A] font-bold flex items-center justify-center text-sm">
                    {step.num}
                  </div>

                  {/* Text */}
                  <div className="lg:text-center lg:mt-3 lg:px-2">
                    <p className="font-semibold text-[#0D1B2A] text-sm">{step.title}</p>
                    <p className="text-[#6B7280] text-xs mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
