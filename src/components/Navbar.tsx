import { useState } from 'react';
import { useStore } from '../context/StoreContext';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlistCount, setCartOpen } = useStore();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav>
      {/* Business Logo */}
      <a href="#home" className="nav-logo-img" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
        <img src={logo} alt="He & She Fashions" />
      </a>

      <ul className="nav-links" style={menuOpen ? {
        display: 'flex', flexDirection: 'column', position: 'fixed',
        top: '60px', left: 0, right: 0, background: '#111', padding: '24px', gap: '20px', zIndex: 999
      } : {}}>
        <li><a href="#collections" onClick={e => { e.preventDefault(); scrollTo('collections'); }}>Collections</a></li>
        <li><a href="#showcase" onClick={e => { e.preventDefault(); scrollTo('showcase'); }}>Gallery</a></li>
        <li><a href="#products" onClick={e => { e.preventDefault(); scrollTo('products'); }}>Shop</a></li>
        <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
        <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
      </ul>

      <div className="nav-actions">
        {/* Wishlist icon */}
        <button className="nav-icon-btn" onClick={() => scrollTo('products')} title="Wishlist">
          <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlistCount > 0 ? 'var(--gold)' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
        </button>

        {/* Cart icon */}
        <button className="nav-icon-btn" onClick={() => setCartOpen(true)} title="Cart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cartCount > 0 && <span className="nav-badge nav-badge--gold">{cartCount}</span>}
        </button>

        <button className="nav-cta" onClick={() => scrollTo('contact')}>Book Appointment</button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
    </nav>
  );
}
