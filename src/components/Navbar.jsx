import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const el = document.documentElement;
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About",    href: "#about" },
    { label: "Skills",   href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact",  href: "#contact" },
  ];

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <motion.nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="nav-logo">KB<span>.</span></div>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span style={menuOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
        </button>
      </motion.nav>
    </>
  );
};

export default Navbar;
