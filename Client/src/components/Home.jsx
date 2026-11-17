import { useEffect, useRef } from "react";
import portrait from '../assets/images/portrait/Realistic black suit 1-Picsart-BackgroundRemover.png';
import { socials } from "./Socials";


function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add("home--visible"), 100);
  }, []);

  return (
    <section className="home" id="home" ref={heroRef}>
      <div className="logo-container">
        <iframe
        src="https://my.spline.design/thebluemarble-s04RVbddgPRESuzvi4Cx0JiR/"
        className="home__spline-iframe"
        frameBorder="0"
        title="background"
      />
       <div className="logo__watermark-cover" />
      </div>
      {/* ── Spline iframe background ── */}
      

      {/* ── Dark overlay ── */}
      <div className="home__overlay" />

      {/* ── Main content ── */}
      <div className="home__inner">
        <div className="home__content">
          <p className="home__greeting">Hi, My Name Is</p>
          <h1 className="home__name">OFENTSE </h1><h1 className="home__name">RAMATSETSE</h1>
          <h2 className="home__title" >AND I'M A <a className="btn-shine">WEB DEVELOPER</a></h2>
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
          <img src={portrait} alt="Ofentse" className="home__portrait" />
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