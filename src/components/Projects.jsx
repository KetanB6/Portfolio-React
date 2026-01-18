import ApiDak from "../assets/images/API-DAK.webp";
import TinyCut from "../assets/images/TinyCut.webp";
import Padarth from "../assets/images/Padarth.webp";
import MindCalc from "../assets/images/MindCalc.webp";
import OneView from "../assets/images/OneView.webp";
import BankingApp from "../assets/images/BankingApp.webp";
import HotelApp from "../assets/images/HMS_J.webp";
import CCA from "../assets/images/CurrencyConverterApp.webp";

import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

const projects = [
  {
    id: "API-DAK",
    title: "API-DAK",
    subtitle: "Postman-like API testing tool",
    img: ApiDak,
    tech: ["React", "REST", "HTTP"],
    github: "https://github.com/KetanB6/API-DAK",
    link: "https://api-dak.vercel.app/",
    deployed: true,
    description:
      "A lightweight Postman-like tool that allows testing APIs directly from the browser using common HTTP methods."
  },
  {
    id: "TinyCut",
    title: "TinyCut",
    subtitle: "URL Shortener",
    img: TinyCut,
    tech: ["Spring Boot", "React", "REST"],
    github: "https://github.com/KetanB6/TinyCut",
    link: "https://tiny-cut.vercel.app/",
    deployed: true,
    description:
      "A full-stack URL shortener with Spring Boot backend and React frontend."
  },
  {
    id: "OneView",
    title: "OneView",
    subtitle: "View-once message app",
    img: OneView,
    tech: ["Spring Boot", "JPA", "React"],
    github: "https://github.com/KetanB6/OneView",
    link: "https://one-view.vercel.app/",
    deployed: true,
    description:
      "Save a message, view it once, then it gets permanently deleted."
  },
  {
    id: "CurrConv",
    title: "Currency Converter",
    subtitle: "Live exchange rate converter",
    img: CCA,
    tech: ["JSP", "Servlets", "API"],
    github: "https://github.com/KetanB6/CurrencyConverterApp",
    link: "https://currencyconverter-1p9l.onrender.com/CCA/",
    deployed: true,
    description:
      "Currency converter supporting 35+ currencies using live exchange rates."
  },
  {
    id: "MindCalc",
    title: "MindCalc",
    subtitle: "Mental math game",
    img: MindCalc,
    tech: ["Java", "Servlets", "HTML", "CSS"],
    github: "https://github.com/KetanB6/MindCalc",
    link: "https://mindcalc-ye1q.onrender.com/",
    deployed: true,
    description:
      "A timed mental math game focusing on speed and accuracy."
  },
  {
    id: "Padarth",
    title: "Padarth",
    subtitle: "Ingredient analyzer",
    img: Padarth,
    tech: ["JSP", "Servlets", "Gemini AI"],
    github: "https://github.com/KetanB6/Padarth",
    link: null,
    deployed: false,
    description:
      "Ingredient safety analyzer using OCR and AI processing."
  },
  {
    id: "BankingApp",
    title: "Banking System",
    subtitle: "JDBC console app",
    img: BankingApp,
    tech: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/KetanB6/Hotel-Reservation-System",
    link: null,
    deployed: false,
    description:
      "Console-based banking system with transactions and secure PIN handling."
  },
  {
    id: "HotelApp",
    title: "Hotel Management",
    subtitle: "JDBC CRUD system",
    img: HotelApp,
    tech: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/KetanB6/Bank-Management-System",
    link: null,
    deployed: false,
    description:
      "Hotel reservation system with room availability and booking logic."
  }
];

const Projects = ({ openProject }) => {
  return (
    <div className="about card">
      <h2 className="sub">Projects</h2>

      <div className="proj_container">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="project_card"
          >
            <img src={p.img} alt={p.title} className="proj_img" />

            <div className="proj_body">
              <h3>{p.title}</h3>
              <p className="subtitle">{p.subtitle}</p>

              <div className="tech_stack">
                {p.tech.map((t) => (
                  <span key={t} className="tech_chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="proj_actions">
                {p.deployed && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary"
                  >
                    Live <HiExternalLink />
                  </a>
                )}

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub <HiExternalLink />
                </a>


              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
