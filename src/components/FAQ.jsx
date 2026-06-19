import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'How is the flat grade determined?',
    a: 'A team of engineers and legal experts inspects 8+ criteria including structural integrity, legal title clarity, utility condition, and location quality. Each factor is scored and combined into the A–D grade.',
  },
  {
    q: 'What does the 1-month structural guarantee cover?',
    a: 'It covers major structural defects discovered after purchase — things like foundation issues, beam cracks, or severe water damage that were not visible during inspection. Cosmetic issues are not covered.',
  },
  {
    q: 'How does fractional ownership work legally?',
    a: "Co-owners enter a legally registered co-ownership agreement drafted by Griho's partnered legal firms. Each owner's share is documented and registered.",
  },
  {
    q: 'Can I exit my fractional investment?',
    a: "Yes. You can sell your share peer-to-peer or list it back on Griho's platform for the next eligible investor.",
  },
  {
    q: 'How long does the inspection process take?',
    a: 'After your submission is approved, inspection is typically scheduled within 5–7 business days. The full grading report is delivered within 3 days of the site visit.',
  },
  {
    q: 'Is Griho available outside Dhaka?',
    a: 'Currently Griho is operating in Dhaka only — starting with Mirpur, Mohammadpur, and Uttara. Expansion to Chattogram is planned for Year 2.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#F7F4EF] py-24">
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
            Common Questions
          </h2>
          <p className="text-[#6B7280] mt-2">
            Everything you need to know before your first step.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl mb-3 overflow-hidden border transition-all duration-300 ${
                  isOpen ? 'border-l-4 border-[#D4A853]' : 'border border-gray-100'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50 transition-colors text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#0D1B2A] text-base pr-4">{faq.q}</span>
                  <Plus
                    size={20}
                    className="shrink-0 text-[#D4A853] transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="text-[#6B7280] text-sm leading-relaxed px-5 pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
