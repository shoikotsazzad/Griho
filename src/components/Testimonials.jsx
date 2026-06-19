import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Finally a platform that treats flat buyers like adults. The grade report told me exactly what I was getting into. No surprises.',
    name: 'Sami R.',
    location: 'Mirpur, Dhaka',
    initials: 'SR',
  },
  {
    quote:
      "I was about to sell through a broker and lose lakhs. Griho's valuation was 18% higher than what the dalal quoted me.",
    name: 'Farida K.',
    location: 'Mohammadpur, Dhaka',
    initials: 'FK',
  },
  {
    quote:
      'The fractional model is the only realistic path to property ownership for someone earning under 50k a month in Dhaka.',
    name: 'Tanvir H.',
    location: 'Uttara, Dhaka',
    initials: 'TH',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            className="text-3xl font-bold text-[#0D1B2A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built for Dhaka's Next Generation of Homeowners.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map(({ quote, name, location, initials }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="bg-[#F7F4EF] rounded-2xl p-6 border-l-4 border-[#D4A853] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div
                className="text-6xl leading-none mb-3 text-[#D4A853]/30 font-serif select-none"
                aria-hidden
              >
                "
              </div>
              <p className="text-[#1F2937] text-sm leading-relaxed">{quote}</p>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-9 h-9 rounded-full bg-[#0D1B2A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0D1B2A] text-sm">{name}</p>
                  <p className="text-[#6B7280] text-xs">{location}</p>
                </div>
                <span className="ml-auto bg-[#0D1B2A]/10 text-[#0D1B2A] text-xs rounded-full px-3 py-1 font-medium">
                  Beta Participant
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
