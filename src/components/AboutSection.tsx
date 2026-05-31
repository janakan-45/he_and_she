import { useEffect, useRef } from 'react';

function AboutCanvas({ idx }: { idx: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    c.width = c.offsetWidth || 400;
    c.height = c.offsetHeight || 500;
    const w = c.width, h = c.height;
    const bg = ctx.createLinearGradient(0, 0, w, h);
    if (idx === 0) {
      bg.addColorStop(0, '#1a1520');
      bg.addColorStop(1, '#0a0a0a');
    } else {
      bg.addColorStop(0, '#1a1020');
      bg.addColorStop(1, '#0d0d0d');
    }
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h * 0.55;
    const grd = ctx.createLinearGradient(cx - 60, cy - 120, cx + 60, cy + 200);
    grd.addColorStop(0, idx === 0 ? '#C9A84C' : '#E07B39');
    grd.addColorStop(1, idx === 0 ? '#9A7A30' : '#8B4513');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.moveTo(cx - 15, cy - 80);
    ctx.bezierCurveTo(cx - 40, cy - 40, cx - 55, cy + 20, cx - 60, cy + h * 0.35);
    ctx.lineTo(cx + 60, cy + h * 0.35);
    ctx.bezierCurveTo(cx + 55, cy + 20, cx + 40, cy - 40, cx + 15, cy - 80);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = idx === 0 ? '#C9A84C' : '#E07B39';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 110, 18, 36, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFDBB5';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 155, 20, 26, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = idx === 0 ? 'rgba(201,168,76,0.3)' : 'rgba(224,123,57,0.3)';
    ctx.lineWidth = 2;
    ctx.strokeRect(8, 8, w - 16, h - 16);
  }, [idx]);
  return <canvas ref={ref} style={{ width: '100%', height: '100%', display: 'block' }} />;
}

export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-bg-text">Fashion</div>
      <div className="about-grid">
        <div className="about-visual fade-in">
          <div className="about-stat-box">
            <div className="about-stat-num">10+</div>
            <div className="about-stat-label">Years of Style</div>
          </div>
          <div className="about-img-main">
            <AboutCanvas idx={0} />
          </div>
          <div className="about-img-accent">
            <AboutCanvas idx={1} />
          </div>
        </div>
        <div className="about-text fade-in fade-in-delay-2">
          <div className="section-label">Our Story</div>
          <h2 className="section-title">Crafting <em>Elegance</em> in Jaffna</h2>
          <p className="about-body">
            Nestled in the vibrant streets of Jaffna, He &amp; She Fashions has been the destination
            for those who seek clothing that tells a story. We blend the rich cultural tapestry of
            Sri Lanka with contemporary fashion sensibility.
          </p>
          <p className="about-body">
            From traditional sarees worn by generations to modern bridal couture, every garment in
            our store is curated with love, craftsmanship, and an eye for timeless elegance. Our
            friendly team is dedicated to helping you find the perfect outfit for every milestone.
          </p>
          <div className="about-values">
            {[
              { title: 'Quality First', desc: 'Premium fabrics sourced for every garment' },
              { title: 'Heritage Style', desc: 'Traditional Sri Lankan design at the core' },
              { title: 'Affordable', desc: 'Exceptional quality at remarkable prices' },
              { title: 'Custom Fit', desc: 'Tailoring service for the perfect look' },
            ].map((v, i) => (
              <div className="value-item" key={i}>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Visit Our Store
          </a>
        </div>
      </div>
    </section>
  );
}
