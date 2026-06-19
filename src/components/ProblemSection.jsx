import { motion } from 'framer-motion';
import { AlertTriangle, ShieldOff, UserX, FileX, Lock, Wrench } from 'lucide-react';

const problems = [
  {
    Icon: AlertTriangle,
    color: '#E74C3C',
    title: 'No Standard Pricing',
    desc: 'Sellers price arbitrarily. Buyers have no benchmark.',
  },
  {
    Icon: ShieldOff,
    color: '#F39C12',
    title: 'No Structural Checks',
    desc: 'Hidden cracks, bad wiring, and weak foundations go undetected.',
  },
  {
    Icon: UserX,
    color: '#E74C3C',
    title: 'Unaccountable Brokers',
    desc: 'Dalals with no regulation, no liability, and no transparency.',
  },
  {
    Icon: FileX,
    color: '#F39C12',
    title: 'Hidden Legal Risks',
    desc: 'Title disputes and encumbrance issues discovered only after purchase.',
  },
  {
    Icon: Lock,
    color: '#E74C3C',
    title: 'Young Buyers Locked Out',
    desc: 'A flat in Dhaka costs BDT 50–100 lakh. Fresh graduates have no path in.',
  },
  {
    Icon: Wrench,
    color: '#F39C12',
    title: 'Renovation Is a Nightmare',
    desc: 'No trusted vendors. No quality control. Just chaos after purchase.',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProblemSection() {
  return (
    <section className="bg-[#0D1B2A] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Used Flat Market in Bangladesh is Broken.
          </h2>
          <p className="text-[#D4A853] mt-3 text-lg">
            Millions of flats. Zero structure. We're fixing that.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {problems.map(({ Icon, color, title, desc }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4A853]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <Icon size={28} style={{ color }} />
              <h3 className="text-white font-semibold text-lg mt-3">{title}</h3>
              <p className="text-white/60 text-sm mt-1 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
