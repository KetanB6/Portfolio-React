import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
import CV from "../assets/CV.pdf";

const FOCUS_AREAS = [
  {
    icon: <FaCode />,
    title: "Clean Backend APIs",
    desc: "Writing readable, modular REST endpoints in Spring Boot with proper error handling and clean data structures.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Database Modeling",
    desc: "Designing normalized MySQL tables, managing entity relationships in Hibernate, and testing query efficiency.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Eager to Learn",
    desc: "Always exploring new tools, reading documentation, and ready to quickly adapt to team workflows and tech stacks.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div style={{ marginBottom: "2.5rem" }}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Passionate About <em>Software & Problem Solving</em>
          </h2>
          <p className="section-desc">
            A quick glimpse into my background, what drives me, and the habits I practice every day.
          </p>
        </div>

        <div className="about-simple-grid">
          {/* Left: Honest Bio */}
          <motion.div
            className="about-bio-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p>
              Hi, I'm Ketan! I am a fresher Software Developer from Maharashtra, India. 
              My programming journey began with C and C++, which gave me a strong mental model 
              for Object-Oriented Programming (OOP), Data Structures, and problem-solving logic.
            </p>
            <p>
              Over time, I found my passion in backend development with the Java ecosystem. 
              I've built several full-stack applications with Spring Boot, Hibernate, and MySQL, 
              covering practical features like role-based authentication (RBAC), payment gateway 
              integration, caching, and clean RESTful API design.
            </p>
            <p>
              I take pride in writing code that is clean, easy to read, and well-structured. 
              I am actively seeking an entry-level software engineering role or internship 
              where I can learn alongside talented developers and build impactful software.
            </p>

            <div style={{ marginTop: "2rem" }}>
              <a
                href={CV}
                download="Ketan_Bidave_CV.pdf"
                className="btn-primary"
                style={{ display: "inline-flex", gap: "0.5rem" }}
              >
                <HiArrowDownTray />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Simple Focus Cards */}
          <div className="about-focus-cards">
            {FOCUS_AREAS.map((item, idx) => (
              <motion.div
                key={item.title}
                className="focus-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="focus-card-icon">{item.icon}</div>
                <div>
                  <h4 className="focus-card-title">{item.title}</h4>
                  <p className="focus-card-desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
