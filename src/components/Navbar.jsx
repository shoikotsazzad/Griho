import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'For Sellers', to: '/#for-sellers' },
  { label: 'For Buyers', to: '/#grading' },
  { label: 'Invest', to: '/#invest' },
  { label: 'Flats', to: '/flats' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const handleNavClick = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.slice(2); // e.g. 'how-it-works'
      if (location.pathname === '/') {
        // Already on home — just scroll
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home with hash; Home.jsx useEffect will scroll
        navigate(to);
      }
      setMobileOpen(false);
    }
  };

  const isActive = (to) => {
    if (to.startsWith('/#')) return false;
    return location.pathname === to;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span
              className="text-2xl font-bold text-[#0D1B2A] leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              GRIHO
            </span>
            <div className="w-8 h-0.5 bg-[#D4A853] mt-0.5" />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`relative text-sm font-medium transition-colors duration-200 group ${
                  isActive(link.to)
                    ? 'text-[#D4A853]'
                    : 'text-[#1F2937] hover:text-[#D4A853]'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A853] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <button
              onClick={() => navigate('/flats')}
              className="bg-[#0D1B2A] text-[#D4A853] px-5 py-2 rounded-xl text-sm font-medium hover:bg-[#D4A853] hover:text-[#0D1B2A] transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#0D1B2A] p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0D1B2A] z-50 flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <span
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  GRIHO
                </span>
                <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="text-lg font-medium text-white/80 hover:text-[#D4A853] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => { navigate('/flats'); setMobileOpen(false); }}
                  className="mt-4 bg-[#D4A853] text-[#0D1B2A] px-6 py-3 rounded-xl font-bold text-center hover:opacity-90"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
