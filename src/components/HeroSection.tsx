import vid1 from '../assets/vid1.mp4';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-eyebrow fade-in">Jaffna's Premier Fashion House</div>
        <h1 className="hero-title fade-in fade-in-delay-1">
          Wear Your <em>Story</em>
        </h1>
        <p className="hero-subtitle fade-in fade-in-delay-2">
          Where tradition meets contemporary elegance. He &amp; She Fashions brings you curated
          collections for every occasion — blending Sri Lankan heritage with modern sophistication.
        </p>
        <div className="hero-actions fade-in fade-in-delay-3">
          <a
            href="#collections"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Explore Collections
          </a>
          <a
            href="#showcase"
            className="btn-ghost"
            onClick={e => { e.preventDefault(); document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            View Gallery
          </a>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual">
          <video
            src={vid1}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          />
        </div>
        <div className="hero-badges">
          <div className="badge fade-in fade-in-delay-2">
            <div className="badge-num">500+</div>
            <div className="badge-text">Styles</div>
          </div>
          <div className="badge fade-in fade-in-delay-3">
            <div className="badge-num">10+</div>
            <div className="badge-text">Yrs Experience</div>
          </div>
          <div className="badge fade-in fade-in-delay-4">
            <div className="badge-num">★4.9</div>
            <div className="badge-text">Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
