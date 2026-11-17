import { useEffect, useRef, useState } from "react";
import portrait from '../assets/images/portrait/Realistic black suit 1-Picsart-BackgroundRemover.webp';
import { socials } from "./Socials";

function Home() {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const [showSpline, setShowSpline] = useState(false);

  // Fade the hero in
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add("home--visible"), 100);
    return () => clearTimeout(t);
  }, []);

  // Mount Spline only after the portrait has loaded (or after 2.5s as a fallback)
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setShowSpline(true);
      return;
    }
    const fallback = setTimeout(() => setShowSpline(true), 2500);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <section className="home" id="home" ref={heroRef}>
      <div className="logo-container">
        {showSpline && (
          <iframe
            src="https://my.spline.design/thebluemarble-s04RVbddgPRESuzvi4Cx0JiR/"
            className="home__spline-iframe"
            frameBorder="0"
            title="background"
          />
        )}
        <div className="logo__watermark-cover" />
      </div>

      {/* ── Dark overlay ── */}
      <div className="home__overlay" />

      {/* ── Main content ── */}
      <div className="home__inner">
        <div className="home__content">
          <p className="home__greeting">Hi, My Name Is</p>
          <h1 className="home__name">OFENTSE </h1><h1 className="home__name">RAMATSETSE</h1>
          <h2 className="home__title">AND I'M A <span className="btn-shine">WEB DEVELOPER</span></h2>
          <p className="home__tagline">
            Crafting Digital Excellence for a Future <br /> Beyond Imagination.
          </p>
          <a href="#about" className="btn btn--solid home__cta">
            More about me &nbsp;→
          </a>
        </div>

        <div className="landing__socials">
          {socials.map((s, i) => (
            <a
              href={s.href}
              className="contacts__social"
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="home__portrait-wrap">
          <img
            ref={imgRef}
            src={portrait}
            alt="Ofentse"
            className="home__portrait"
            loading="eager"
            decoding="async"
            onLoad={() => setShowSpline(true)}
          />
        </div>
      </div>

      {/* ── Scroll cta ── */}
      <div className="home__scroll-cta">
        <span className="home__welcome-text">WELCOME TO MY PORTFOLIO</span>
        <p className="home__scroll-label">SCROLL</p>
        <div className="home__chevron">
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
            <path d="M1 1L12 12L23 1" stroke="#4a94de" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Home;