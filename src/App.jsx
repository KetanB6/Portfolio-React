import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./index.css";

function App() {
  const [showTop, setShowTop] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const fx = useRef(-100), fy = useRef(-100);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const onMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
      fx.current += (e.clientX - fx.current) * 0.12;
      fy.current += (e.clientY - fy.current) * 0.12;
      setFollower({ x: fx.current, y: fy.current });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {window.innerWidth >= 768 && (
        <>
          <div className="cursor" style={{ left: cursor.x - 6, top: cursor.y - 6 }} />
          <div className="cursor-follower" style={{ left: follower.x - 18, top: follower.y - 18 }} />
        </>
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            aria-label="Back to top"
          >
            <HiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
