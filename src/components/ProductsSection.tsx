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

const products = [
  // ── Floral Silk Suits (img1/2/3) ─────────────────────────────
  {
    id: 1,
    name: 'Floral Silk Suit — Rose',
    cat: 'women', type: 'traditional', tag: 'New',
    price: 'LKR 9,800', priceNum: 9800, oldPrice: '',
    colors: ['#C2185B', '#F9A825', '#7B1FA2'],
    img: img1, primaryColor: '#C2185B',
  },
  {
    id: 2,
    name: 'Floral Silk Suit — Golden',
    cat: 'women', type: 'traditional', tag: 'Popular',
    price: 'LKR 9,800', priceNum: 9800, oldPrice: '',
    colors: ['#F9A825', '#C2185B', '#7B1FA2'],
    img: img2, primaryColor: '#F9A825',
  },
  {
    id: 3,
    name: 'Floral Silk Suit — Lavender',
    cat: 'women', type: 'traditional', tag: 'Popular',
    price: 'LKR 9,800', priceNum: 9800, oldPrice: '',
    colors: ['#7B1FA2', '#C2185B', '#F9A825'],
    img: img3, primaryColor: '#7B1FA2',
  },
  // ── Banarasi Sarees (img4/5) ────────────────────────────────
  {
    id: 4,
    name: 'Banarasi Saree — Crimson',
    cat: 'women', type: 'saree', tag: 'New',
    price: 'LKR 14,500', priceNum: 14500, oldPrice: 'LKR 17,000',
    colors: ['#B71C1C', '#C9A84C', '#880E4F'],
    img: img4, primaryColor: '#B71C1C',
  },
  {
    id: 5,
    name: 'Banarasi Saree — Beige Gold',
    cat: 'women', type: 'saree', tag: 'Popular',
    price: 'LKR 14,500', priceNum: 14500, oldPrice: '',
    colors: ['#C9A84C', '#8D6E63', '#B71C1C'],
    img: img5, primaryColor: '#C9A84C',
  },
  // ── Teal Silk Saree (img8) ───────────────────────────────────
  {
    id: 8,
    name: 'Peacock Silk Saree — Teal',
    cat: 'women', type: 'saree', tag: 'New',
    price: 'LKR 18,500', priceNum: 18500, oldPrice: '',
    colors: ['#00838F', '#C9A84C', '#B0BEC5'],
    img: img8, primaryColor: '#00838F',
  },
  // ── Kurtis (img7/9/10) ───────────────────────────────────────
  {
    id: 7,
    name: 'Anarkali Kurti — Pink & Teal',
    cat: 'women', type: 'kurti', tag: 'New',
    price: 'LKR 6,500', priceNum: 6500, oldPrice: 'LKR 8,000',
    colors: ['#E91E63', '#009688', '#C9A84C'],
    img: img7, primaryColor: '#E91E63',
  },
  {
    id: 9,
    name: 'Ombre Leaf Kurti — Blue',
    cat: 'women', type: 'kurti', tag: 'Popular',
    price: 'LKR 4,800', priceNum: 4800, oldPrice: '',
    colors: ['#1976D2', '#B3E5FC', '#FFFFFF'],
    img: img9, primaryColor: '#1976D2',
  },
  {
    id: 10,
    name: 'Casual Chikankari Top — Yellow',
    cat: 'women', type: 'casual', tag: '',
    price: 'LKR 3,200', priceNum: 3200, oldPrice: '',
    colors: ['#F9A825', '#FFFFFF', '#FF8F00'],
    img: img10, primaryColor: '#F9A825',
  },
];

const filters = ['all', 'saree', 'traditional', 'kurti', 'casual'];

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSwatches, setActiveSwatches] = useState<Record<number, number>>({});
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.type === activeFilter || p.cat === activeFilter);

  const handleAddToCart = (p: typeof products[0]) => {
    addToCart({
      id: p.id,
      name: p.name,
      price: p.price,
      priceNum: p.priceNum,
      img: p.img,
      emoji: '👗',
      color: p.colors[activeSwatches[p.id] ?? 0],
    });
    setAddedIds(prev => [...prev, p.id]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== p.id)), 2000);
  };

  return (
    <section id="products">
      <div className="products-header fade-in">
        <div>
          <div className="section-label">Shop</div>
          <h2 className="section-title">Latest <em>Arrivals</em></h2>
        </div>
        <div className="filter-tabs">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-tab${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filtered.map(p => {
          const isWishlisted = wishlist.includes(p.id);
          const justAdded = addedIds.includes(p.id);

          return (
            <div className="product-card" key={p.id}>
              <div className="product-img">
                <img src={p.img} alt={p.name} />

                {p.tag && (
                  <div className={`product-badge${p.tag === 'New' ? ' new' : ''}`}>{p.tag}</div>
                )}

                <div className="product-actions">
                  <button
                    className={`p-action${isWishlisted ? ' p-action--wishlisted' : ''}`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    onClick={() => toggleWishlist(p.id)}
                  >
                    {isWishlisted ? '♥' : '♡'}
                  </button>
                  <button
                    className="p-action"
                    title="Gallery View"
                    onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    🖼
                  </button>
                  <button
                    className="p-action"
                    title="Add to Cart"
                    onClick={() => handleAddToCart(p)}
                  >
                    🛍
                  </button>
                </div>
              </div>

              <div className="product-info">
                <div className="product-category">{p.type}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-price-row">
                  <div>
                    <span className="product-price">{p.price}</span>
                    {p.oldPrice && <span className="product-price-old">{p.oldPrice}</span>}
                  </div>
                  <div className="color-swatches">
                    {p.colors.map((c, i) => (
                      <div
                        key={i}
                        className={`swatch${(activeSwatches[p.id] ?? 0) === i ? ' active' : ''}`}
                        style={{ background: c, border: c === '#FFFFFF' ? '1px solid rgba(255,255,255,0.3)' : undefined }}
                        onClick={() => setActiveSwatches(prev => ({ ...prev, [p.id]: i }))}
                      />
                    ))}
                  </div>
                </div>
                <button
                  className={`add-to-cart${justAdded ? ' add-to-cart--added' : ''}`}
                  onClick={() => handleAddToCart(p)}
                >
                  {justAdded ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
