const testimonials = [
  {
    text: 'I got my wedding saree from He & She Fashions and it was absolutely breathtaking. The quality, the colours, the attention to detail — I received so many compliments on my big day.',
    name: 'Priya Kumaran',
    loc: 'Jaffna, Sri Lanka',
    initial: 'P',
  },
  {
    text: 'As a tourist visiting Jaffna, I was amazed by the variety. Got beautiful outfits for the whole family. The staff were so helpful and prices were very reasonable. Will definitely visit again!',
    name: 'Amila Fernando',
    loc: 'Colombo, Sri Lanka',
    initial: 'A',
  },
  {
    text: "The men's formal collection is outstanding. I ordered a custom-fit suit for my sister's wedding and it arrived perfectly tailored. He & She Fashions is the real deal in Jaffna.",
    name: 'Rajesh Nair',
    loc: 'Jaffna, Sri Lanka',
    initial: 'R',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="testimonials-head fade-in">
        <div className="section-label" style={{ justifyContent: 'center' }}>Happy Customers</div>
        <h2 className="section-title">What They <em>Say</em></h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className={`testimonial-card fade-in${i > 0 ? ` fade-in-delay-${i}` : ''}`} key={i}>
            <span className="quote-mark">"</span>
            <div className="stars">★ ★ ★ ★ ★</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initial}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-loc">{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
