import { useEffect, useRef, useState } from 'react';

const stats = [
  { display: '6-Step', label: 'Inspection Process', isNumber: false },
  { display: 'A to D', label: 'Grade Transparency', isNumber: false },
  { display: '1 Month', label: 'Structural Guarantee', isNumber: false },
  { display: '100%', label: 'Certified Listings Only', isNumber: false },
];

function StatItem({ display, label, isLast }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center py-4 ${
        !isLast ? 'lg:border-r border-[#D4A853]/20' : ''
      }`}
    >
      <span
        className={`text-4xl font-bold text-[#0D1B2A] transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {display}
      </span>
      <span
        className={`text-sm text-[#6B7280] uppercase tracking-wide mt-1 transition-all duration-700 delay-100 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#D4A853]/10 border-y border-[#D4A853]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-16">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
