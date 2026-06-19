import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import BrowseFlats from './pages/BrowseFlats';
import ListFlat from './pages/ListFlat';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Don't scroll to top when navigating to a hash anchor
    if (!hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flats" element={<BrowseFlats />} />
        <Route path="/list" element={<ListFlat />} />
      </Routes>
      <Footer />
    </>
  );
}
