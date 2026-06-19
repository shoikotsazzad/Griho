import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bed, Bath, Maximize, Building2, CheckCircle, MapPin } from 'lucide-react';
import { flats, gradeColors } from '../data/flats';

const locations = ['All', ...Array.from(new Set(flats.map((f) => f.location.split(',')[1].trim())))];
const grades = ['All', 'A', 'B', 'C', 'D'];

function GradeBadge({ grade, large }) {
  const c = gradeColors[grade];
  if (!c) return null;
  return (
    <div
      className={`flex flex-col items-center text-white rounded-xl font-bold shrink-0 ${large ? 'px-5 py-3' : 'px-3 py-1.5'}`}
      style={{ backgroundColor: c.bg }}
    >
      {large && <span className="text-[10px] font-medium uppercase tracking-wide leading-none">Grade</span>}
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: large ? '2rem' : '1rem', lineHeight: 1.1 }}>
        {grade}
      </span>
    </div>
  );
}

function FlatCard({ flat, onClick }) {
  const [imgFail, setImgFail] = useState(false);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(flat)}
    >
      <div className="relative h-48 overflow-hidden">
        {!imgFail ? (
          <img
            src={flat.img}
            alt={flat.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgFail(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0D1B2A] to-[#2C4A6E] flex items-center justify-center text-white/30 text-sm">
            Flat Photo
          </div>
        )}
        {/* Grade overlay badge */}
        <div className="absolute top-3 right-3">
          <GradeBadge grade={flat.grade} />
        </div>
        {/* Certified stamp */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-[#0D1B2A]/90 backdrop-blur-sm text-[#D4A853] text-xs px-2.5 py-1 rounded-full font-medium">
            GRIHO Certified ✓
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-[#0D1B2A] text-sm leading-snug">{flat.title}</h3>
            <p className="text-[#6B7280] text-xs flex items-center gap-1 mt-0.5">
              <MapPin size={11} /> {flat.location}
            </p>
          </div>
        </div>

        <p className="text-[#D4A853] font-bold text-lg mt-2">{flat.priceDisplay}</p>

        <div className="flex gap-4 mt-3 text-xs text-[#6B7280]">
          <span className="flex items-center gap-1"><Bed size={12} /> {flat.bedrooms} Bed</span>
          <span className="flex items-center gap-1"><Bath size={12} /> {flat.bathrooms} Bath</span>
          <span className="flex items-center gap-1"><Maximize size={12} /> {flat.size}</span>
        </div>

        <button
          className="w-full mt-4 bg-[#0D1B2A] text-white rounded-xl py-2.5 text-sm font-medium hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-all duration-300"
          onClick={(e) => { e.stopPropagation(); onClick(flat); }}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

function FlatModal({ flat, onClose }) {
  const [imgFail, setImgFail] = useState(false);
  const [interested, setInterested] = useState(false);
  const c = gradeColors[flat.grade];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="bg-white rounded-t-3xl sm:rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl sm:rounded-t-2xl">
          {!imgFail ? (
            <img
              src={flat.img}
              alt={flat.title}
              className="w-full h-full object-cover"
              onError={() => setImgFail(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0D1B2A] to-[#2C4A6E] flex items-center justify-center text-white/30">
              Flat Photo
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-md"
          >
            <X size={18} className="text-[#0D1B2A]" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-[#0D1B2A]/90 backdrop-blur-sm text-[#D4A853] text-xs px-3 py-1.5 rounded-full font-medium">
              GRIHO Certified ✓ — Inspected {flat.inspected}
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2
                className="text-2xl font-bold text-[#0D1B2A]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {flat.title}
              </h2>
              <p className="text-[#6B7280] text-sm flex items-center gap-1 mt-1">
                <MapPin size={13} /> {flat.location}
              </p>
              <p className="text-[#D4A853] font-bold text-2xl mt-2">{flat.priceDisplay}</p>
            </div>
            <GradeBadge grade={flat.grade} large />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-3 mt-5 bg-[#F7F4EF] rounded-xl p-4">
            {[
              { Icon: Bed, label: 'Bedrooms', val: flat.bedrooms },
              { Icon: Bath, label: 'Bathrooms', val: flat.bathrooms },
              { Icon: Maximize, label: 'Size', val: flat.size },
              { Icon: Building2, label: 'Floor', val: flat.floor },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="text-center">
                <Icon size={16} className="mx-auto text-[#D4A853] mb-1" />
                <p className="font-bold text-[#0D1B2A] text-sm">{val}</p>
                <p className="text-[#6B7280] text-xs">{label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[#1F2937] text-sm leading-relaxed mt-5">{flat.description}</p>

          {/* Features */}
          <div className="mt-5">
            <p className="font-semibold text-[#0D1B2A] text-sm mb-2">Amenities & Features</p>
            <div className="flex flex-wrap gap-2">
              {flat.features.map((f) => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 bg-[#F7F4EF] text-[#0D1B2A] text-xs px-3 py-1.5 rounded-full"
                >
                  <CheckCircle size={11} className="text-[#27AE60]" /> {f}
                </span>
              ))}
            </div>
          </div>

          {/* Grade explanation */}
          <div
            className="mt-5 rounded-xl p-4 border"
            style={{ backgroundColor: `${c.bg}10`, borderColor: `${c.bg}40` }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: c.bg }}>
              Grade {flat.grade} — {c.label}
            </p>
            <p className="text-[#6B7280] text-xs mt-1 leading-relaxed">
              This flat has been inspected across 8+ structural, legal, utility, and location criteria by GRIHO's certified team. The grade reflects its overall condition and legal clarity.
            </p>
          </div>

          {/* CTA */}
          {!interested ? (
            <button
              onClick={() => setInterested(true)}
              className="w-full mt-5 bg-[#0D1B2A] text-white font-bold py-4 rounded-xl hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
            >
              Express Interest
            </button>
          ) : (
            <div className="w-full mt-5 bg-[#27AE60]/10 border border-[#27AE60]/30 rounded-xl py-4 px-5 text-center">
              <CheckCircle size={20} className="mx-auto text-[#27AE60] mb-1" />
              <p className="font-semibold text-[#27AE60] text-sm">Interest Registered!</p>
              <p className="text-[#6B7280] text-xs mt-1">A GRIHO advisor will contact you within 24 hours.</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function BrowseFlats() {
  const [gradeFilter, setGradeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedFlat, setSelectedFlat] = useState(null);

  const filtered = flats.filter((f) => {
    const matchGrade = gradeFilter === 'All' || f.grade === gradeFilter;
    const matchLoc = locationFilter === 'All' || f.location.includes(locationFilter);
    const matchSearch =
      !search ||
      f.title.toLowerCase().includes(search.toLowerCase()) ||
      f.location.toLowerCase().includes(search.toLowerCase());
    return matchGrade && matchLoc && matchSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-[#F7F4EF]">
      {/* Page header */}
      <div className="bg-[#0D1B2A] py-14">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A853] mb-2">
              GRIHO Certified
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Browse Certified Flats
            </h1>
            <p className="text-white/60 mt-3">
              Every listing below has been inspected, graded, and verified by GRIHO's team.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 items-center">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#D4A853] transition-colors flex-1 min-w-48"
          />

          {/* Grade filter */}
          <div className="flex gap-2 flex-wrap">
            {grades.map((g) => (
              <button
                key={g}
                onClick={() => setGradeFilter(g)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  gradeFilter === g
                    ? 'bg-[#0D1B2A] text-white shadow-sm'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                }`}
              >
                {g === 'All' ? 'All Grades' : `Grade ${g}`}
              </button>
            ))}
          </div>

          {/* Location filter */}
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#D4A853] bg-white cursor-pointer"
          >
            {locations.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Listings grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#6B7280] text-lg">No flats match your filters.</p>
            <button
              onClick={() => { setGradeFilter('All'); setLocationFilter('All'); setSearch(''); }}
              className="mt-4 text-[#D4A853] font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-[#6B7280] text-sm mb-6">
              Showing <span className="font-semibold text-[#0D1B2A]">{filtered.length}</span> certified listings
            </p>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filtered.map((flat) => (
                  <FlatCard key={flat.id} flat={flat} onClick={setSelectedFlat} />
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>

      {/* Flat detail modal */}
      <AnimatePresence>
        {selectedFlat && (
          <FlatModal flat={selectedFlat} onClose={() => setSelectedFlat(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
