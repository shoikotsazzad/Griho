import { MapPin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const platformLinks = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Browse Flats', to: '/flats' },
  { label: 'List Your Flat', to: '/list' },
  { label: 'Grading System', to: '/#grading' },
];

const investorLinks = [
  { label: 'Fractional Ownership', to: '/#invest' },
  { label: 'How to Invest', to: '/#invest' },
  { label: 'Eligibility Calculator', to: '/flats' },
  { label: 'Co-Owner Portal', to: '/flats' },
];

const companyLinks = [
  { label: 'About Griho', to: '/about' },
  { label: 'Our Team', to: '/about' },
  { label: 'Careers', to: null },
  { label: 'Contact', to: null },
];

function FootingLink({ label, to }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!to) return;
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(to);
      }
    }
  };

  if (!to) {
    return (
      <span className="text-white/30 text-sm block mb-2 cursor-not-allowed select-none">
        {label}
      </span>
    );
  }

  return (
    <Link
      to={to}
      onClick={handleClick}
      className="relative text-white/60 text-sm block mb-2 hover:text-[#D4A853] transition-colors duration-200 group w-fit"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4A853] group-hover:w-full transition-all duration-300" />
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t-2 border-[#D4A853]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                GRIHO
              </span>
              <div className="w-8 h-0.5 bg-[#D4A853] mt-1" />
            </Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              Your Certified Home. Your Trusted Investment.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: LinkedInIcon, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="border border-white/20 p-2 rounded-full text-white/50 hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Platform */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Platform</p>
            {platformLinks.map((l) => <FootingLink key={l.label} label={l.label} to={l.to} />)}
          </div>

          {/* Col 3 — Investors */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Investors</p>
            {investorLinks.map((l) => <FootingLink key={l.label} label={l.label} to={l.to} />)}
          </div>

          {/* Col 4 — Company */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Company</p>
            {companyLinks.map((l) => <FootingLink key={l.label} label={l.label} to={l.to} />)}
            <div className="mt-4 flex items-center gap-1.5 text-white/40 text-xs">
              <MapPin size={12} />
              Dhaka, Bangladesh
            </div>
            <p className="text-white/40 text-xs mt-1">hello@griho.com.bd</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">© 2025 GRIHO. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-white/20 text-xs">Pre-Launch Platform — Confidential</p>
            <p className="text-white/30 text-xs">
              Built by <span className="text-[#D4A853]/60">@Shoikot Sazzad</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
