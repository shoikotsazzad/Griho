import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Eye, Users, Lightbulb, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const numbers = [
  { stat: '৳3.2T', label: 'Annual real estate transactions in Dhaka — almost entirely unregulated' },
  { stat: '73%', label: 'Buyers report discovering undisclosed issues after purchase' },
  { stat: '47 days', label: 'Average time a flat sits unsold because buyers don\'t trust the seller' },
  { stat: '৳0', label: 'Standard compensation a buyer receives when deceived by a broker' },
];

const values = [
  {
    Icon: Eye,
    num: '01',
    title: 'Transparency',
    desc: 'Every flat is graded on publicly disclosed criteria. No hidden scores. No broker-only information. What you see is exactly what you get.',
  },
  {
    Icon: Shield,
    num: '02',
    title: 'Trust',
    desc: 'We back every certified listing with a 1-month structural guarantee. If something was missed in our inspection, it\'s on us.',
  },
  {
    Icon: Users,
    num: '03',
    title: 'Access',
    desc: 'Property ownership shouldn\'t be reserved for the already wealthy. Our fractional model is designed for young Dhaka professionals earning under BDT 50,000/month.',
  },
  {
    Icon: Lightbulb,
    num: '04',
    title: 'Innovation',
    desc: 'The used flat market in Bangladesh hasn\'t changed in 40 years. We\'re rethinking inspection, valuation, legal facilitation, and co-ownership from the ground up.',
  },
];

const team = [
  {
    name: 'Shah Reza Ahmed',
    role: 'CEO & Co-Founder',
    initials: 'SR',
    bg: '#0D1B2A',
    bio: 'Former product lead at a Dhaka fintech. Watched his family lose ৳18 lakh in a title dispute in 2018 — built GRIHO so no family has to repeat that.',
  },
  {
    name: 'Nadia Islam',
    role: 'COO & Co-Founder',
    initials: 'NI',
    bg: '#D4A853',
    bio: '10 years in real estate law in Dhaka. Closed 300+ property deals. Left a senior partner position to fix the system she\'d spent a decade navigating around.',
  },
  {
    name: 'Tanvir Hossain',
    role: 'CTO & Co-Founder',
    initials: 'TH',
    bg: '#27AE60',
    bio: 'Built the inspection algorithm. Previously at a Japanese structural engineering firm. Passionate about applying systematic engineering standards to Bangladesh\'s built environment.',
  },
];

const roadmap = [
  {
    year: '2025',
    label: 'Phase 1 — Dhaka Launch',
    items: ['Mirpur, Mohammadpur, Uttara', 'First 50 certified listings', 'Inspector training program', 'Fractional pilot with 20 co-owners'],
    active: true,
  },
  {
    year: '2026',
    label: 'Phase 2 — Scale & Finance',
    items: ['Expand to Gulshan, Dhanmondi, Bashundhara', 'Chattogram pilot launch', 'GRIHO Finance — EMI for certified flats', '500+ certified listings'],
    active: false,
  },
  {
    year: '2027',
    label: 'Phase 3 — National',
    items: ['All 8 major Bangladeshi cities', 'GRIHO Score — universal flat rating', 'Secondary market for fractional shares', 'Renovation marketplace'],
    active: false,
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="pt-16">

      {/* ── Hero ── */}
      <section
        className="py-32 text-center relative overflow-hidden"
        style={{
          backgroundColor: '#0D1B2A',
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(212,168,83,0.03) 0px, rgba(212,168,83,0.03) 1px, transparent 0px, transparent 60px)',
        }}
      >
        {/* Glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A853]/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A853]">
              Our Story
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "We Were Tired of Getting Fooled Too."
            </h1>
            <p className="text-white/60 mt-6 text-xl max-w-2xl mx-auto leading-relaxed">
              GRIHO didn't start in a boardroom. It started in a Mirpur courtroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="bg-[#F7F4EF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              className="w-full lg:w-3/5"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <h2
                className="text-3xl font-bold text-[#0D1B2A] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Flat That Started Everything
              </h2>
              <div className="space-y-4 text-[#1F2937] leading-relaxed">
                <p>
                  In 2018, our co-founder Reza's parents bought a used flat in Mirpur. They worked with a dalal, paid what felt like a fair price, and moved in within two months. The process seemed easy.
                </p>
                <p>
                  Six months later, a lawyer's notice arrived. There was a title dispute — an heir from a previous owner's family had never signed off. The dalal had known. The documents had appeared clean because they were carefully obscured. What followed was three years of court cases, ৳18 lakh in legal fees, and a flat they couldn't sell, couldn't mortgage, and couldn't fully call their own.
                </p>
                <p>
                  This isn't rare. It's Tuesday in Bangladesh's used flat market.
                </p>
                <p>
                  Reza brought this to Nadia, a property lawyer who had seen this story play out hundreds of times from the other side. And to Tanvir, a structural engineer who'd watched buyers move into buildings that should have been condemned. The three of them made a decision: if the system won't protect buyers, they'd build a new system.
                </p>
                <p className="font-semibold text-[#0D1B2A]">
                  That's GRIHO. Not a listing site. A certification authority.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-2/5"
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, delay: 0.2 }}
            >
              <div
                className="rounded-2xl p-8 h-full flex flex-col justify-center"
                style={{ backgroundColor: '#0D1B2A' }}
              >
                <span
                  className="text-6xl text-[#D4A853]/30 font-serif leading-none select-none"
                  aria-hidden
                >
                  "
                </span>
                <p
                  className="text-white text-xl leading-relaxed mt-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  The dalal is not the villain. The absence of a system is the villain. We built the system.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4A853] flex items-center justify-center text-[#0D1B2A] font-bold text-sm shrink-0">
                    SR
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Shah Reza Ahmed</p>
                    <p className="text-white/50 text-xs">CEO & Co-Founder, GRIHO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Numbers ── */}
      <section className="bg-[#0D1B2A] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Problem in Numbers
            </h2>
            <p className="text-white/50 mt-3">These aren't estimates. These are the market as it exists today.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {numbers.map(({ stat, label }) => (
              <motion.div
                key={stat}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4A853]/40 transition-all duration-300"
              >
                <p
                  className="text-4xl font-bold text-[#D4A853]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat}
                </p>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A853]">Our Mission</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mt-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Make property ownership in Bangladesh as trustworthy as buying a certified used car.
            </h2>
            <p className="text-[#6B7280] mt-6 text-lg leading-relaxed">
              We believe every Bangladeshi deserves to buy or invest in a home without fear of being deceived. That future requires infrastructure — inspectors, legal partners, grading standards, and a platform that puts information in the buyer's hands. We're building it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-[#F7F4EF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-[#0D1B2A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {values.map(({ Icon, num, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div>
                    <span
                      className="text-5xl font-bold text-[#D4A853]/20 leading-none block"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {num}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} className="text-[#D4A853]" />
                      <h3 className="font-bold text-[#0D1B2A] text-lg">{title}</h3>
                    </div>
                    <p className="text-[#6B7280] leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-[#0D1B2A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Founding Team
            </h2>
            <p className="text-[#6B7280] mt-3">
              Built by people who've personally felt what a broken market costs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerGrid} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {team.map(({ name, role, initials, bg, bio }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="h-32 flex items-center justify-center"
                  style={{ backgroundColor: bg }}
                >
                  <span
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {initials}
                  </span>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-[#0D1B2A] text-lg">{name}</h3>
                  <p className="text-[#D4A853] text-sm font-medium mt-0.5">{role}</p>
                  <p className="text-[#6B7280] text-sm mt-3 leading-relaxed">{bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="bg-[#F7F4EF] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-[#0D1B2A]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where We're Going
            </h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {roadmap.map(({ year, label, items, active }, i) => (
              <motion.div
                key={year}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`flex-1 rounded-2xl p-6 border-2 transition-all duration-300 ${
                  active
                    ? 'bg-[#0D1B2A] border-[#D4A853]'
                    : 'bg-white border-gray-100 opacity-70'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-3xl font-bold ${active ? 'text-[#D4A853]' : 'text-[#0D1B2A]'}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {year}
                  </span>
                  {active && (
                    <span className="text-xs bg-[#D4A853] text-[#0D1B2A] font-bold px-2 py-0.5 rounded-full">
                      NOW
                    </span>
                  )}
                </div>
                <p className={`font-semibold text-sm mb-3 ${active ? 'text-white' : 'text-[#0D1B2A]'}`}>
                  {label}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`text-xs flex items-start gap-2 ${active ? 'text-white/70' : 'text-[#6B7280]'}`}
                    >
                      <span className="mt-0.5 shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#0D1B2A] py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Be Part of What We're Building.
            </h2>
            <p className="text-white/60 mt-4 leading-relaxed">
              Whether you're a buyer, a seller, or an investor — GRIHO is the platform built for you. Join the pre-launch waitlist and be first.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={() => navigate('/flats')}
                className="flex items-center gap-2 bg-[#D4A853] text-[#0D1B2A] font-bold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Browse Certified Flats <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate('/list')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300"
              >
                List Your Flat
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
