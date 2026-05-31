import { useEffect } from 'react';
import './index.css';

import { StoreProvider } from './context/StoreContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import HeroSection from './components/HeroSection';
import MarqueeBand from './components/MarqueeBand';
import CollectionsSection from './components/CollectionsSection';
import ImageShowcaseSection from './components/ImageShowcaseSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function AppInner() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <CartDrawer />
      <HeroSection />
      <MarqueeBand />
      <CollectionsSection />
      <ImageShowcaseSection />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <StoreProvider>
      <AppInner />
    </StoreProvider>
  );
}

export default App;
