import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import ProfilePic from "../assets/image.png";

const Hero = () => {
  const socials = [
    { icon: <FaGithub />, href: "https://github.com/KetanB6", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ketan-bidave-08397430a", label: "LinkedIn" },
    { icon: <FaXTwitter />, href: "https://x.com/Ketan_Bidave", label: "Twitter" },
    { icon: <BiLogoInstagram />, href: "https://www.instagram.com/ketanbidave_06/", label: "Instagram" },
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="status-badge" style={{ marginBottom: "1.25rem" }}>
              <span className="status-dot" />
              <span>Open to Fresher / Entry-Level Developer Roles</span>
            </div>

            <h1 className="hero-name">
              Hi, I'm <span>Ketan Bidave</span>
            </h1>

            <h2 className="hero-headline">
              Java & Backend Developer
            </h2>

            <p className="hero-narrative">
              I am an aspiring Software Developer with hands-on experience building backend APIs
              using Java, Spring Boot, and MySQL, alongside modern frontends in React.
              I love writing clean, readable code and learning how to build scalable real-world applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <HiArrowDown />
              </a>
              <a href="#contact" className="btn-secondary">
                <MdOutlineMail size={16} />
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="hero-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            className="hero-photo-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <img
              src={ProfilePic}
              alt="Ketan Bidave"
              className="hero-avatar"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
