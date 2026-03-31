import { motion } from "framer-motion";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython, FaJava, FaGithub, FaDocker } from "react-icons/fa";
import { SiSpring, SiHibernate, SiMysql, SiPostman } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { icon: <FaJava />, name: "Java" },
  { icon: <SiSpring />, name: "Spring Boot" },
  { icon: <SiHibernate />, name: "Hibernate" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <FaPython />, name: "Python" },
  { icon: <TbBrandCpp />, name: "C/C++" },
  { icon: <IoLogoHtml5 />, name: "HTML5" },
  { icon: <IoLogoCss3 />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <IoLogoReact />, name: "React" },
  { icon: <RiTailwindCssFill />, name: "Tailwind" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
];

const Skills = () => (
  <section id="skills">
    <div className="container">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.p>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Tools I work <em>with</em>
      </motion.h2>

      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
            >
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
