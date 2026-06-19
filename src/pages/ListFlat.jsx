import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Upload, ChevronRight, ChevronLeft } from 'lucide-react';

const TOTAL_STEPS = 4;

const stepTitles = ['Basic Info', 'Photos', 'Documents', 'Review & Submit'];

function StepIndicator({ current }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {stepTitles.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  done
                    ? 'bg-[#27AE60] text-white'
                    : active
                    ? 'bg-[#0D1B2A] text-white ring-2 ring-[#D4A853] ring-offset-2'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {done ? <CheckCircle size={16} /> : i + 1}
              </div>
              <span
                className={`text-xs font-medium hidden sm:block ${
                  active ? 'text-[#0D1B2A]' : done ? 'text-[#27AE60]' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>
            {i < TOTAL_STEPS - 1 && (
              <div
                className={`w-16 sm:w-24 h-0.5 mx-2 mb-5 transition-colors duration-300 ${
                  done ? 'bg-[#27AE60]' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FieldLabel({ children }) {
  return <label className="block text-sm font-semibold text-[#0D1B2A] mb-1.5">{children}</label>;
}

function Input({ label, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#D4A853] transition-colors bg-white"
        {...props}
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#D4A853] transition-colors bg-white"
        {...props}
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function PhotoUploadBox({ label }) {
  return (
    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all duration-200 cursor-pointer group">
      <Upload size={24} className="text-gray-300 group-hover:text-[#D4A853] transition-colors" />
      <p className="text-xs font-medium text-gray-400 group-hover:text-[#D4A853] transition-colors">{label}</p>
      <p className="text-xs text-gray-300">JPG, PNG up to 10MB</p>
    </div>
  );
}

const docsList = [
  'Deed of Agreement (বায়না দলিল)',
  'Mutation Paper / Khajna (খাজনা)',
  'B.S. Khatian (বি.এস. খতিয়ান)',
  'City Survey C.S. Record',
  'RAJUK / Municipal Approval Plan',
  'Tax Clearance Certificate',
];

export default function ListFlat() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    address: '',
    area: '',
    type: '',
    size: '',
    floor: '',
    age: '',
    price: '',
  });

  const [docs, setDocs] = useState(
    Object.fromEntries(docsList.map((d) => [d, false]))
  );

  const update = (key, val) => setForm((p) => ({ ...p, [key]: val }));
  const toggleDoc = (key) => setDocs((p) => ({ ...p, [key]: !p[key] }));

  const next = () => {
    if (step < TOTAL_STEPS - 1) setStep((s) => s + 1);
  };
  const prev = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-[#F7F4EF] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-[#27AE60]" />
          </div>
          <h2
            className="text-3xl font-bold text-[#0D1B2A]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Submission Received!
          </h2>
          <p className="text-[#6B7280] mt-3 leading-relaxed">
            Your flat at <span className="font-medium text-[#0D1B2A]">{form.address || 'your listed address'}</span> has been submitted for review. Our team will contact you within 48 hours to schedule an on-site inspection.
          </p>
          <div className="mt-6 bg-[#F7F4EF] rounded-xl p-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A853] mb-2">Next Steps</p>
            {['Team reviews your submission (48h)', 'Inspection scheduled at your convenience', 'Grade report delivered within 3 days of visit'].map((s) => (
              <div key={s} className="flex items-start gap-2 mb-1.5">
                <span className="text-[#27AE60] mt-0.5 shrink-0">→</span>
                <p className="text-[#6B7280] text-xs">{s}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setForm({ address: '', area: '', type: '', size: '', floor: '', age: '', price: '' }); }}
            className="mt-6 w-full bg-[#0D1B2A] text-white font-medium py-3 rounded-xl hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-all duration-300"
          >
            Submit Another Flat
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-[#F7F4EF]">
      {/* Header */}
      <div className="bg-[#0D1B2A] py-14">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4A853] mb-2">
              For Flat Owners
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              List Your Flat
            </h1>
            <p className="text-white/60 mt-3">
              Submit your flat for inspection. We'll grade it and help you sell at the right price.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <StepIndicator current={step} />

          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={1}>
              {step === 0 && (
                <motion.div
                  key="step0"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">Basic Information</h2>
                  <div className="space-y-4">
                    <Input
                      label="Full Property Address"
                      placeholder="e.g. House 12, Road 7, Mirpur 10, Dhaka"
                      value={form.address}
                      onChange={(e) => update('address', e.target.value)}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Select
                        label="Flat Type"
                        options={['1BHK', '2BHK', '3BHK', '4BHK', '5BHK+']}
                        value={form.type}
                        onChange={(e) => update('type', e.target.value)}
                      />
                      <Select
                        label="Area / Location"
                        options={['Mirpur', 'Mohammadpur', 'Uttara', 'Gulshan', 'Banani', 'Dhanmondi', 'Bashundhara', 'Other Dhaka']}
                        value={form.area}
                        onChange={(e) => update('area', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <Input
                        label="Size (sqft)"
                        type="number"
                        placeholder="e.g. 1100"
                        value={form.size}
                        onChange={(e) => update('size', e.target.value)}
                      />
                      <Input
                        label="Floor Number"
                        type="number"
                        placeholder="e.g. 5"
                        value={form.floor}
                        onChange={(e) => update('floor', e.target.value)}
                      />
                      <Select
                        label="Building Age"
                        options={['Under 5 years', '5–10 years', '10–15 years', '15–20 years', '20+ years']}
                        value={form.age}
                        onChange={(e) => update('age', e.target.value)}
                      />
                    </div>
                    <Input
                      label="Your Asking Price (BDT)"
                      type="number"
                      placeholder="e.g. 4500000"
                      value={form.price}
                      onChange={(e) => update('price', e.target.value)}
                    />
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-[#0D1B2A] mb-2">Upload Photos</h2>
                  <p className="text-[#6B7280] text-sm mb-6">
                    Good photos help buyers understand the flat before inspection. Upload at least the living room and bedroom.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Living Room', 'Master Bedroom', 'Kitchen', 'Bathroom', 'Exterior / Building', 'Additional'].map((label) => (
                      <PhotoUploadBox key={label} label={label} />
                    ))}
                  </div>
                  <p className="text-xs text-[#6B7280] mt-4 bg-[#F7F4EF] rounded-xl p-3">
                    <span className="font-semibold text-[#0D1B2A]">Note:</span> Our inspector will take official photos during the site visit. These pre-submission photos are for our team's initial review only.
                  </p>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-[#0D1B2A] mb-2">Available Documents</h2>
                  <p className="text-[#6B7280] text-sm mb-6">
                    Check all documents you currently have. Don't worry if you're missing some — our legal team will guide you.
                  </p>
                  <div className="space-y-3">
                    {docsList.map((doc) => (
                      <label
                        key={doc}
                        className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#D4A853]/40 hover:bg-[#F7F4EF] transition-all duration-200 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={docs[doc]}
                          onChange={() => toggleDoc(doc)}
                          className="w-4 h-4 accent-[#D4A853] shrink-0"
                        />
                        <span className="text-sm text-[#1F2937]">{doc}</span>
                        {docs[doc] && <CheckCircle size={15} className="text-[#27AE60] ml-auto shrink-0" />}
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-[#0D1B2A] mb-6">Review Your Submission</h2>

                  <div className="bg-[#F7F4EF] rounded-xl p-5 space-y-3 mb-6">
                    {[
                      ['Address', form.address || '—'],
                      ['Flat Type', form.type || '—'],
                      ['Area', form.area || '—'],
                      ['Size', form.size ? `${form.size} sqft` : '—'],
                      ['Floor', form.floor || '—'],
                      ['Building Age', form.age || '—'],
                      ['Asking Price', form.price ? `BDT ${Number(form.price).toLocaleString('en-IN')}` : '—'],
                    ].map(([label, val]) => (
                      <div key={label} className="flex justify-between items-start gap-4">
                        <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{label}</span>
                        <span className="text-sm font-medium text-[#0D1B2A] text-right">{val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border border-[#D4A853]/30 bg-[#D4A853]/5 rounded-xl p-5 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-[#0D1B2A]">Inspection Fee</p>
                        <p className="text-[#6B7280] text-xs mt-0.5">One-time, non-refundable — paid after team review</p>
                      </div>
                      <span className="text-xl font-bold text-[#D4A853]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        BDT 5,000
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    By submitting, you agree to GRIHO's inspection terms. Our team will contact you within 48 hours to confirm your submission and schedule an on-site visit.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={prev}
              disabled={step === 0}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-[#6B7280] text-sm font-medium hover:border-[#0D1B2A] hover:text-[#0D1B2A] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} /> Back
            </button>

            {step < TOTAL_STEPS - 1 ? (
              <button
                onClick={next}
                className="flex items-center gap-2 bg-[#0D1B2A] text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-all duration-300"
              >
                Continue <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="flex items-center gap-2 bg-[#D4A853] text-[#0D1B2A] font-bold px-8 py-3 rounded-xl text-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Submit for Inspection <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
