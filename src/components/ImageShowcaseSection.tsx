import { useState } from 'react';
import { useStore } from '../context/StoreContext';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';

// Each showcase item has up to 3 "views" — we reuse the available images creatively
const SHOWCASE_ITEMS = [
  {
    id: 101,
    name: 'Floral Silk Suit',
    sub: 'Code 2564 · 3 Colours',
    price: 'LKR 9,800',
    priceNum: 9800,
    primaryColor: '#C2185B',
    views: [
      { label: 'Rose', img: img1 },
      { label: 'Golden', img: img2 },
      { label: 'Lavender', img: img3 },
    ],
  },
  {
    id: 102,
    name: 'Banarasi Silk Saree',
    sub: 'Code 2678 · 2 Colours',
    price: 'LKR 14,500',
    priceNum: 14500,
    primaryColor: '#B71C1C',
    views: [
      { label: 'Crimson', img: img4 },
      { label: 'Beige Gold', img: img5 },
      { label: 'Detail View', img: img4 },
    ],
  },
  {
    id: 103,
    name: 'Anarkali Kurti',
    sub: 'Code 2592 · Pink & Teal',
    price: 'LKR 6,500',
    priceNum: 6500,
    primaryColor: '#E91E63',
    views: [
      { label: 'Front', img: img7 },
      { label: 'Style 2', img: img9 },
      { label: 'Casual', img: img10 },
    ],
  },
  {
    id: 104,
    name: 'Peacock Silk Saree',
    sub: 'Code 2654 · Teal',
    price: 'LKR 18,500',
    priceNum: 18500,
    primaryColor: '#00838F',
    views: [
      { label: 'Full View', img: img8 },
      { label: 'With Saree', img: img4 },
      { label: 'Colour 2', img: img5 },
    ],
  },
  {
    id: 105,
    name: 'Ombre Leaf Kurti',
    sub: 'Code 2557 · Blue Ombre',
    price: 'LKR 4,800',
    priceNum: 4800,
    primaryColor: '#1976D2',
    views: [
      { label: 'Front', img: img9 },
      { label: 'Pair Look', img: img7 },
      { label: 'Casual', img: img10 },
    ],
  },
];

export default function ImageShowcaseSection() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedView, setSelectedView] = useState(0);
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const current = SHOWCASE_ITEMS[selectedItem];
  const currentView = current.views[selectedView];
  const isWishlisted = wishlist.includes(current.id);

  const handleAddToCart = () => {
    addToCart({
      id: current.id,
      name: current.name,
      price: current.price,
      priceNum: current.priceNum,
      img: current.views[0].img,
      emoji: '👗',
      color: current.primaryColor,
    });
  };

  return (
    <section id="showcase">
      <div className="showcase-container">

        {/* ─── Left: Info ─── */}
        <div className="showcase-info fade-in">
          <div className="section-label">Our Gallery</div>
          <h2 className="section-title">Style <em>Showcase</em></h2>
          <p className="showcase-desc">
            Browse our curated lookbook — every outfit captured from multiple angles and colourways
            so you can see the full beauty before visiting our store. All styles are available in
            custom sizes and tailoring.
          </p>

          <div className="showcase-features">
            <div className="feature-item">
              <div className="feature-icon">📸</div>
              <div className="feature-text">
                <h4>Multiple Colourways</h4>
                <p>Switch between colour variants for each style</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🥻</div>
              <div className="feature-text">
                <h4>Sarees & Suits</h4>
                <p>Banarasi, silk, floral suits and designer kurtis</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✨</div>
              <div className="feature-text">
                <h4>Real Studio Shots</h4>
                <p>Authentic He & She Fashions product photography</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📐</div>
              <div className="feature-text">
                <h4>Custom Tailoring</h4>
                <p>All styles tailored to your exact measurements</p>
              </div>
            </div>
          </div>

          {/* Active item details */}
          <div className="showcase-active-info">
            <div className="showcase-active-name">{current.name}</div>
            <div className="showcase-active-sub">{current.sub}</div>
            <div className="showcase-active-price">{current.price}</div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ cursor: 'pointer' }} onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className={`showcase-wishlist-btn${isWishlisted ? ' wishlisted' : ''}`}
              onClick={() => toggleWishlist(current.id)}
            >
              {isWishlisted ? '♥ Wishlisted' : '♡ Wishlist'}
            </button>
          </div>
        </div>

        {/* ─── Right: Image Panel ─── */}
        <div className="showcase-panel fade-in fade-in-delay-2">

          {/* Panel Header */}
          <div className="showcase-panel-header">
            <span className="showcase-panel-title">{current.name}</span>
            <div className="view-tabs">
              {current.views.map((v, i) => (
                <button
                  key={i}
                  className={`view-tab${selectedView === i ? ' active' : ''}`}
                  onClick={() => setSelectedView(i)}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Image Stage */}
          <div className="showcase-image-stage">
            <img
              key={`${selectedItem}-${selectedView}`}
              src={currentView.img}
              alt={`${current.name} — ${currentView.label}`}
              className="showcase-main-image"
            />
            <div className="view-badge">{currentView.label}</div>

            {/* Quick action overlay */}
            <div className="showcase-overlay-actions">
              <button
                className={`showcase-overlay-btn${isWishlisted ? ' wishlisted' : ''}`}
                onClick={() => toggleWishlist(current.id)}
                title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {isWishlisted ? '♥' : '♡'}
              </button>
              <button
                className="showcase-overlay-btn"
                onClick={handleAddToCart}
                title="Add to cart"
              >
                🛍
              </button>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="showcase-thumb-strip">
            {SHOWCASE_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`showcase-thumb${selectedItem === i ? ' active' : ''}`}
                onClick={() => { setSelectedItem(i); setSelectedView(0); }}
                title={item.name}
              >
                <img src={item.views[0].img} alt={item.name} />
                <div className="thumb-color-dot" style={{ background: item.primaryColor }} />
              </div>
            ))}

            <div className="showcase-dress-info">
              <div className="showcase-select-label">SELECTED</div>
              <div className="showcase-dress-name">{current.name}</div>
              <div className="showcase-dress-color">
                <span className="thumb-color-dot-lg" style={{ background: current.primaryColor }} />
                {current.sub}
              </div>
              <div className="showcase-dress-price">{current.price}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
