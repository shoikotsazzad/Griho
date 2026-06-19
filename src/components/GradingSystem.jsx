import { motion } from 'framer-motion';

const grades = [
  {
    letter: 'A',
    label: 'Excellent',
    impact: 'Full Market Valuation',
    color: '#27AE60',
    bgTint: '#27AE60',
    back: {
      bg: '#27AE60',
      title: 'Grade A Criteria',
      criteria: ['Structurally Sound', 'Legally Clear', 'Prime Location', 'Modern Utilities', 'No Encumbrance'],
    },
  },
  {
    letter: 'B',
    label: 'Good',
    impact: '-10% to -20%',
    color: '#2980B9',
    bgTint: '#2980B9',
    back: {
      bg: '#2980B9',
      title: 'Grade B Criteria',
      criteria: ['Minor Structural Issues', 'Clear Legal Title', 'Good Location', 'Adequate Utilities', 'Low Risk'],
    },
  },
  {
    letter: 'C',
    label: 'Fair',
    impact: '-25% to -40%',
    color: '#F39C12',
    bgTint: '#F39C12',
    back: {
      bg: '#F39C12',
      title: 'Grade C Criteria',
      criteria: ['Moderate Issues', 'Title Verifiable', 'Average Location', 'Utility Upgrades Needed', 'Medium Risk'],
    },
  },
  {
    letter: 'D',
    label: 'Poor',
    impact: '-45% to -60%',
    color: '#E74C3C',
    bgTint: '#E74C3C',
    back: {
      bg: '#E74C3C',
      title: 'Grade D Criteria',
      criteria: ['Major Structural Damage', 'Legal Complications', 'Poor Location', 'Utility Overhaul Needed', 'High Risk'],
    },
  },
];

export default function GradingSystem() {
  return (
    <section id="grading" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0D1B2A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every Flat Gets a Grade<span className="text-[#D4A853]">.</span>
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-xl mx-auto">
            Inspired by how cars are certified. Applied to Bangladesh's most unorganized asset class.
          </p>
        </motion.div>

        {/* Grade cards grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {grades.map(({ letter, label, impact, color, bgTint, back }) => (
            <div
              key={letter}
              className="relative h-72 cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 group"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg)')}
              >
                {/* Front face */}
                <div
                  className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center border-2 p-4"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    borderColor: color,
                    backgroundColor: `${bgTint}0D`,
                  }}
                >
                  <span
                    className="font-bold leading-none"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '5rem',
                      color,
                    }}
                  >
                    {letter}
                  </span>
                  <span className="text-lg font-semibold text-[#0D1B2A] mt-1">{label}</span>
                  <span
                    className="text-xs font-medium mt-1 px-3 py-1 rounded-full"
                    style={{ color, backgroundColor: `${bgTint}1A` }}
                  >
                    {impact}
                  </span>
                  <span className="text-xs text-[#6B7280] mt-4">hover to see criteria →</span>
                </div>

                {/* Back face */}
                <div
                  className="absolute inset-0 rounded-2xl p-5 flex flex-col justify-center text-white"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundColor: back.bg,
                  }}
                >
                  <h4 className="font-bold text-base mb-3">{back.title}</h4>
                  <ul className="space-y-2">
                    {back.criteria.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm">
                        <span className="text-white font-bold">✓</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Callout */}
        <motion.div
          className="bg-[#0D1B2A] text-white rounded-2xl p-5 mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="font-medium">
            Grade is always visible to buyers.{' '}
            <span className="text-[#D4A853]">No hidden surprises. No dalal games.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
