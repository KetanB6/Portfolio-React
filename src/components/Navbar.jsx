import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
import CV from "../assets/CV.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const el = document.documentElement;
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <motion.nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            Ketan<span>.</span>
          </a>

          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mobile-resume-link">
              <a href={CV} download="Ketan_Bidave_CV.pdf">
                Download Resume
              </a>
            </li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={CV}
              download="Ketan_Bidave_CV.pdf"
              className="btn-secondary nav-cv-btn"
              style={{ padding: "0.5rem 1.1rem", fontSize: "0.82rem" }}
            >
              <HiArrowDownTray />
              <span>Resume</span>
            </a>

            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
            >
              <span style={menuOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
              <span style={menuOpen ? { opacity: 0 } : {}} />
              <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
