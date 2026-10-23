import { motion } from "framer-motion";
import { FaJava, FaPython, FaDocker, FaGithub, FaJsSquare } from "react-icons/fa";
import { SiSpring, SiHibernate, SiMysql, SiPostman } from "react-icons/si";
import { IoLogoReact, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const CORE_SKILLS = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpring /> },
  { name: "Hibernate", icon: <SiHibernate /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "HTML5", icon: <IoLogoHtml5 /> },
  { name: "CSS3", icon: <IoLogoCss3 /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const WORKING_KNOWLEDGE_SKILLS = [
  { name: "React", icon: <IoLogoReact /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "C / C++", icon: <TbBrandCpp /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Python", icon: <FaPython /> },
];

const Skills = () => (
  <section id="skills">
    <div className="container">
      {/* Title */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p className="section-label">Skills & Technologies</p>
        <h2 className="section-title">
          My Technical <em>Toolkit</em>
        </h2>
        <p className="section-desc">
          Technologies and tools I work with daily, split by my primary expertise and working familiarity.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {/* Tier 1: Core / Expert Skills */}
        <div className="skills-block-card">
          <div className="skills-block-header">
            <div>
              <h3 className="skills-block-title">Core & Proficient Skills</h3>
              <p className="skills-block-desc">
                Technologies I use heavily for backend development, database modeling, and web building.
              </p>
            </div>
            <span className="skills-count-pill">{CORE_SKILLS.length} Skills</span>
          </div>

          <div className="simple-skills-grid">
            {CORE_SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="simple-skill-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                whileHover={{ y: -3 }}
              >
                <span className="skill-icon-wrap">{skill.icon}</span>
                <span className="skill-title-text">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2: Sufficient Knowledge / Familiar With */}
        <div className="skills-block-card">
          <div className="skills-block-header">
            <div>
              <h3 className="skills-block-title">Working Knowledge</h3>
              <p className="skills-block-desc">
                Tools and frameworks I have hands-on project experience with and continue to explore.
              </p>
            </div>
            <span className="skills-count-pill" style={{ background: "rgba(59, 130, 246, 0.1)", color: "#60a5fa" }}>
              {WORKING_KNOWLEDGE_SKILLS.length} Skills
            </span>
          </div>

          <div className="simple-skills-grid">
            {WORKING_KNOWLEDGE_SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="simple-skill-item"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                whileHover={{ y: -3 }}
              >
                <span className="skill-icon-wrap" style={{ color: "#60a5fa" }}>{skill.icon}</span>
                <span className="skill-title-text">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
