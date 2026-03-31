import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaJava, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi";
import ProfilePic from "../assets/ProfilePic.webp";
import CV from "../assets/CV.pdf";

const ROLES = ["Java Developer", "Spring Boot Dev", "Full Stack Builder", "Backend Engineer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let i = 0;
    let timeout;

    if (typing) {
      const interval = setInterval(() => {
        setDisplayRole(role.slice(0, i + 1));
        i++;
        if (i === role.length) {
          clearInterval(interval);
          timeout = setTimeout(() => setTyping(false), 2000);
        }
      }, 80);
      return () => { clearInterval(interval); clearTimeout(timeout); };
    } else {
      let j = role.length;
      const interval = setInterval(() => {
        setDisplayRole(role.slice(0, j - 1));
        j--;
        if (j === 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTyping(true);
        }
      }, 45);
      return () => clearInterval(interval);
    }
  }, [roleIndex, typing]);

  const socials = [
    { icon: <FaGithub />, href: "https://github.com/KetanB6", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ketan-bidave-08397430a", label: "LinkedIn" },
    { icon: <FaXTwitter />, href: "https://x.com/Ketan_Bidave", label: "Twitter" },
    { icon: <BiLogoInstagram />, href: "https://www.instagram.com/ketanbidave_06/", label: "Instagram" },
  ];

  const containerVar = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const itemVar = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          className="hero-inner"
          variants={containerVar}
          initial="hidden"
          animate="show"
        >
          {/* Left Content */}
          <div>
            {/* <motion.p className="hero-eyebrow" variants={itemVar}>
               
            </motion.p> */}

            <motion.h1 className="hero-title" variants={itemVar}>
              Hello, I'm
              <span className="name-cyan">Ketan Bidave</span>
            </motion.h1>

            <motion.div className="hero-subtitle" variants={itemVar}>
              <span className="role-badge">
                <FaJava />
                {displayRole}
                <span style={{ color: "var(--primary-glow)", animation: "scrollPulse 1s infinite" }}>|</span>
              </span>
            </motion.div>

            <motion.p className="hero-bio" variants={itemVar}>
              Software Developer with a strong foundation in Java and hands-on
              experience in Spring Boot, SQL, and the React ecosystem. I build
              scalable, production-ready applications — from robust REST APIs to
              full-stack web solutions.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVar}>
              <a href="#projects" className="btn-primary">
                View Projects <HiArrowDown />
              </a>
              <a href={CV} target="_blank" rel="noreferrer" className="btn-secondary">
                Download CV
              </a>
            </motion.div>

            <motion.div className="hero-socials" variants={itemVar}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-social-link"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-ring">
              <img src={ProfilePic} alt="Ketan Bidave" className="profile-img" />
            </div>

            {/* Floating stat chips */}
            {/* <motion.div
              className="hero-stat hero-stat-a"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="hero-stat-num">8+</div>
              <div className="hero-stat-label">Projects Built</div>
            </motion.div> */}

            {/* <motion.div
              className="hero-stat hero-stat-b"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <div className="hero-stat-num">11+</div>
              <div className="hero-stat-label">Technologies</div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
