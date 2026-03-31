import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

// Image Imports
import QuizKrida from "../assets/QuizKrida.webp";
import ApiDak from "../assets/API-DAK.webp";
import TinyCut from "../assets/TinyCut.webp";
import Padarth from "../assets/Padarth.webp";
import MindCalc from "../assets/MindCalc.webp";
import OneView from "../assets/OneView.webp";
import BankingApp from "../assets/BankingApp.webp";
import CCA from "../assets/CurrencyConverterApp.webp";

const projects = [
  {
    id: "QuizKrida",
    title: "QuizKrida",
    subtitle: "Enterprise-Grade Online Quiz System",
    img: QuizKrida,
    tech: ["Spring Boot", "MySQL", "JPA", "REST", "Next.js"],
    github: "https://github.com/KetanB6/Quiz-Krida",
    link: "https://quizkrida.vercel.app/",
    deployed: true,
    description: "Robust Spring Boot backend with high-performance REST API, dynamic AI-driven quiz generation, and integrity-focused security.",
  },
  {
    id: "OneView",
    title: "OneView",
    subtitle: "View-once secure message app",
    img: OneView,
    tech: ["Spring Boot", "JPA", "React"],
    github: "https://github.com/KetanB6/OneView",
    link: "https://one-view.vercel.app/",
    deployed: true,
    description: "Save a message, view it once — then it's permanently deleted. Full-stack privacy-first messaging.",
  },
  {
    id: "TinyCut",
    title: "TinyCut",
    subtitle: "Full-stack URL Shortener",
    img: TinyCut,
    tech: ["Spring Boot", "React", "REST"],
    github: "https://github.com/KetanB6/TinyCut",
    link: "https://tiny-cut.vercel.app/",
    deployed: true,
    description: "A full-stack URL shortener with Spring Boot backend and React frontend. Clean, minimal UI.",
  },
  {
    id: "CurrConv",
    title: "Currency Converter",
    subtitle: "Live exchange rate converter",
    img: CCA,
    tech: ["JSP", "Servlets", "External API"],
    github: "https://github.com/KetanB6/CurrencyConverterApp",
    link: "https://currencyconverter-1p9l.onrender.com/CCA/",
    deployed: true,
    description: "Currency converter supporting 35+ currencies using live exchange rates built with JSP/Servlets.",
  },
  {
    id: "MindCalc",
    title: "MindCalc",
    subtitle: "Mental math speed game",
    img: MindCalc,
    tech: ["Java", "Servlets", "HTML", "CSS"],
    github: "https://github.com/KetanB6/MindCalc",
    link: "https://mindcalc-ye1q.onrender.com/",
    deployed: true,
    description: "A timed mental math game focusing on speed and accuracy. Tracks your best streaks.",
  },
  {
    id: "Padarth",
    title: "Padarth",
    subtitle: "AI Ingredient Safety Analyzer",
    img: Padarth,
    tech: ["JSP", "Servlets", "Gemini AI"],
    github: "https://github.com/KetanB6/Padarth",
    link: null,
    deployed: false,
    description: "Ingredient safety analyzer using OCR and Gemini AI. Snap a product label and get a safety analysis.",
  },
  {
    id: "ApiDak",
    title: "API-DAK",
    subtitle: "API testing & exploration tool",
    img: ApiDak,
    tech: ["React", "REST", "JavaScript"],
    github: "https://github.com/KetanB6",
    link: null,
    deployed: false,
    description: "A lightweight API testing tool built to explore and debug REST endpoints quickly.",
  },
  {
    id: "BankingApp",
    title: "Banking System",
    subtitle: "Console banking application",
    img: BankingApp,
    tech: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/KetanB6/Bank-Management-System",
    link: null,
    deployed: false,
    description: "Console-based banking system with transactions and secure PIN handling built on JDBC.",
  },
];

const cardVar = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Changed to 3 so only the first row is visible initially
  const projectsPerPage = 3; 
  
  // FIX: Use lowercase 'projects' (the array), not 'Projects' (the component)
  const displayedProjects = showAll ? projects : projects.slice(0, projectsPerPage);

  return (
    <section id="projects" style={{ padding: "4rem 0" }}>
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">My Work</p>
            <h2 className="section-title">
              Things I've <em>built</em>
            </h2>
          </div>
          <a
            href="https://github.com/KetanB6"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FaGithub /> View All on GitHub
          </a>
        </div>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p, i) => (
              <motion.article
                key={p.id}
                className="project-card"
                custom={i}
                variants={cardVar}
                initial="hidden"
                whileInView="show"
                exit={{ opacity: 0, scale: 0.95 }}
                layout
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="project-img-wrap">
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <div className="project-img-overlay" />
                  {p.deployed && (
                    <span className="project-deployed-badge">Live</span>
                  )}
                </div>

                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-subtitle">{p.subtitle}</p>
                  <p className="project-description">{p.description}</p>

                  <div className="tech-chips">
                    {p.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {p.deployed && p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-proj-live"
                      >
                        Live Demo <HiExternalLink />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-proj-gh"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / Show Less Button Wrapper */}
        {projects.length > projectsPerPage && (
          <div className="load-more-container" style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem"
          }}>
            <button
              className="btn-primary"
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: "0.8rem 2.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              {showAll ? "Show Less" : "Load More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;