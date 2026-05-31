import img1 from '../assets/img1.jpg';
import img4 from '../assets/img4.jpg';
import img7 from '../assets/img7.jpg';
import img9 from '../assets/img9.jpg';

const cards = [
  {
    tag: 'Traditional',
    name: 'Heritage Suits',
    price: 'From LKR 9,800',
    img: img1,
  },
  {
    tag: 'Sarees',
    name: 'Banarasi Collection',
    price: 'From LKR 14,500',
    img: img4,
  },
  {
    tag: 'Kurtis',
    name: 'Anarkali & Kurti',
    price: 'From LKR 4,800',
    img: img7,
  },
  {
    tag: 'Casual',
    name: 'Everyday Chic',
    price: 'From LKR 3,200',
    img: img9,
  },
];

export default function CollectionsSection() {
  return (
    <section id="collections">
      <div className="collections-header fade-in">
        <div>
          <div className="section-label">Featured</div>
          <h2 className="section-title">Our <em>Collections</em></h2>
        </div>
        <a
          href="#products"
          className="btn-ghost"
          onClick={e => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          View All
        </a>
      </div>

      <div className="collections-grid">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`collection-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`}
          >
            <div className="card-visual">
              <img src={card.img} alt={card.name} className="card-bg" style={{ objectFit: 'cover' }} />
              <div className="card-overlay" />
              <div className="card-content">
                <div className="card-tag">{card.tag}</div>
                <div className="card-name">{card.name}</div>
                <div className="card-price">{card.price}</div>
                <a
                  href="#products"
                  className="card-cta"
                  onClick={e => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Explore →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
