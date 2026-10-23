import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

// Image Imports
import Pustak from "../assets/pustak.webp";
import QuizKridaV2 from "../assets/QuizKridaV2.webp";
import QuizKrida from "../assets/QuizKrida.webp";
import ApiDak from "../assets/API-DAK.webp";
import TinyCut from "../assets/TinyCut.webp";
import Padarth from "../assets/Padarth.webp";
import MindCalc from "../assets/MindCalc.webp";
import OneView from "../assets/OneView.webp";
import BankingApp from "../assets/BankingApp.webp";
import CCA from "../assets/CurrencyConverterApp.webp";

const FEATURED_PROJECTS = [
  {
    id: "pustak",
    title: "Pustak — Online Book Rental Platform",
    description:
      "A complete book-renting platform with 3 separate dashboards for Users, Admins, and Delivery agents. Implemented Google OAuth2 for simple sign-in, Razorpay for subscription payments, and a 5-minute inventory hold feature to prevent two people from renting the same book at once.",
    img: Pustak,
    tech: ["Java", "Spring Boot", "PostgreSQL", "OAuth2", "JWT", "Razorpay"],
    github: "https://github.com/KetanB6/pustak-backend",
    link: "https://pustak-read-return.vercel.app/",
  },
  {
    id: "quizkrida-v2",
    title: "QuizKrida V2 — Online Campus Exam App",
    description:
      "An examination web application designed to handle student exam traffic smoothly. Uses Spring Boot caching to protect the MySQL database from heavy queries during live tests, with stateless JWT security and AI question generation.",
    img: QuizKridaV2,
    tech: ["Java", "Spring Boot", "MySQL", "Spring Cache", "JWT", "REST API"],
    github: "https://github.com/KetanB6/QuizKridaV2",
    link: "https://qk-assessments.vercel.app/",
  },
  {
    id: "oneview",
    title: "OneView — View-Once Secret Messages",
    description:
      "A privacy-focused web app for sending confidential notes. Once the recipient opens and reads the message, it is permanently and automatically deleted from the database.",
    img: OneView,
    tech: ["Spring Boot", "React", "MySQL", "REST API"],
    github: "https://github.com/KetanB6/OneView",
    link: "https://one-view.vercel.app/",
  },
  {
    id: "tinycut",
    title: "TinyCut — URL Shortener",
    description:
      "A full-stack link shortening application. Users can paste long links to generate clean, short URLs with fast redirection. Built with a responsive React frontend and a Spring Boot REST API.",
    img: TinyCut,
    tech: ["Spring Boot", "React", "MySQL", "REST API"],
    github: "https://github.com/KetanB6/TinyCut",
    link: "https://tiny-cut.vercel.app/",
  },
];

const MORE_PROJECTS = [
  {
    id: "quizkrida-v1",
    title: "QuizKrida V1",
    description: "Online quiz application with automated scoring and question management built using Spring Boot and Next.js.",
    img: QuizKrida,
    tech: ["Spring Boot", "MySQL", "JPA", "Next.js"],
    github: "https://github.com/KetanB6/Quiz-Krida",
    link: "https://quizkrida.vercel.app/",
  },
  {
    id: "currency-converter",
    title: "Live Currency Converter",
    description: "Real-time exchange rate converter supporting 35+ global currencies using third-party financial exchange APIs.",
    img: CCA,
    tech: ["Java", "JSP", "Servlets", "REST API"],
    github: "https://github.com/KetanB6/CurrencyConverterApp",
    link: "https://currencyconverter-1p9l.onrender.com/CCA/",
  },
  {
    id: "mindcalc",
    title: "MindCalc Math Game",
    description: "A fast-paced mental arithmetic web game that challenges players to solve calculations against a countdown timer.",
    img: MindCalc,
    tech: ["Java", "Servlets", "HTML", "CSS"],
    github: "https://github.com/KetanB6/MindCalc",
    link: "https://mindcalc-ye1q.onrender.com/",
  },
  {
    id: "padarth",
    title: "Padarth — Ingredient Safety Checker",
    description: "Uploads product food labels, extracts the ingredients list with OCR, and uses Gemini AI to detect potential harmful additives.",
    img: Padarth,
    tech: ["Java", "Servlets", "Gemini AI", "OCR"],
    github: "https://github.com/KetanB6/Padarth",
    link: null,
  },
  {
    id: "apidak",
    title: "API-DAK Endpoint Tester",
    description: "A simple and quick in-browser tool to test REST endpoints and view JSON responses without opening Postman.",
    img: ApiDak,
    tech: ["React", "JavaScript", "REST"],
    github: "https://github.com/KetanB6",
    link: null,
  },
  {
    id: "banking",
    title: "Console Banking System",
    description: "A core banking project created to learn JDBC and MySQL transactions, supporting account creation, deposits, and secure PIN validation.",
    img: BankingApp,
    tech: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/KetanB6/Bank-Management-System",
    link: null,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects">
      <div className="container">
        {/* Section Title */}
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Things I've <em>Built</em>
          </h2>
          <p className="section-desc">
            A collection of real full-stack web applications and backend systems I created
            to solve practical problems and practice good coding habits.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="project-cards-stack">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              className="featured-project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <div className="featured-card-grid">
                {/* Image */}
                <div className="featured-img-box">
                  <img src={proj.img} alt={proj.title} className="featured-img" loading="lazy" />
                </div>

                {/* Content */}
                <div className="featured-info-box">
                  <h3 className="featured-project-title">{proj.title}</h3>
                  <p className="featured-project-desc">{proj.description}</p>

                  <div className="project-tech-tags">
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="featured-links-row">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: "0.6rem 1.25rem", fontSize: "0.82rem" }}
                      >
                        <span>Live Demo</span>
                        <HiArrowUpRight />
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ padding: "0.6rem 1.25rem", fontSize: "0.82rem" }}
                      >
                        <FaGithub />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div style={{ marginTop: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--text-primary)" }}>
              More Projects
            </h3>
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-ghost"
              style={{ fontSize: "0.85rem" }}
            >
              {showAll ? "Show Less" : `View All (${MORE_PROJECTS.length})`}
            </button>
          </div>

          <div className="more-projects-grid">
            {(showAll ? MORE_PROJECTS : MORE_PROJECTS.slice(0, 3)).map((proj) => (
              <div key={proj.id} className="small-project-card">
                <div style={{ height: "160px", overflow: "hidden", background: "#050608", borderRadius: "8px", marginBottom: "1rem" }}>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                  {proj.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {proj.description}
                </p>

                <div className="project-tech-tags" style={{ marginBottom: "1.2rem" }}>
                  {proj.tech.map((t) => (
                    <span key={t} className="tech-badge" style={{ fontSize: "0.72rem" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "auto" }}>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ color: "var(--text-primary)", fontSize: "0.82rem" }}
                    >
                      <span>Live Demo</span>
                      <HiArrowUpRight />
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                      style={{ fontSize: "0.82rem" }}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;