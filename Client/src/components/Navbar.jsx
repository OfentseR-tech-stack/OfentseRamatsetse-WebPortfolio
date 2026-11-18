import { useState, useEffect } from "react";
import cvFile from '../assets/docs/CV Ofentse Ramatsetse.pdf';
import logo from "../assets/images/portrait/Text Animation@1-412x192 (2).png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home",      label: "Home" },
    { id: "about",     label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact",   label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div>
       <img src={logo} alt="Alexandra" className="logo__portrait" />

      </div>
      

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className="navbar__link" onClick={() => setMenuOpen(false)}>
              {link.label.toUpperCase()}
            </a>
          </li>
        ))}
        <li className="navbar__cv-mobile">
          <a href={cvFile} download="Mock_CV.pdf" className="btn btn--solid">
            Download CV
          </a>
        </li>
      </ul>

      <a href={cvFile} download="Mock_CV.pdf" className="btn btn--solid navbar__cv">
        Download CV
      </a>

      <button
        className="navbar__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;