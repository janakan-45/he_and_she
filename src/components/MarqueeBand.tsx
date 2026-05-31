export default function MarqueeBand() {
  const items = [
    'New Arrivals 2025', 'Traditional Sarees', "Men's Formals", 'Bridal Collection',
    'Casual Wear', 'Evening Gowns', 'Kids Fashion', 'Accessories',
  ];

  return (
    <div className="marquee-band">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}<span className="dot">◆</span></span>
        ))}
      </div>
    </div>
  );
}
