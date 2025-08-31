import c from "../assets/images/c.png";
import cpp from "../assets/images/c++.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import react from "../assets/images/react.png";
import spring from "../assets/images/spring.png";
import sql from "../assets/images/sql.png";

const skills = [
  { src: c, alt: "C" },
  { src: cpp, alt: "C++" },
  { src: py, alt: "Python" },
  { src: java, alt: "Java" },
  { src: spring, alt: "Spring"},
  { src: sql, alt: "SQL"},
  { src: react, alt: "React"},
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: js, alt: "JS" },
];

const Skills = () => (
  <div className="about card">
    <h2 className="sub contain">Technologies</h2>
    <div className="skill_container">
      {skills.map((skill, idx) => (
        <img key={idx} src={skill.src} alt={skill.alt} className="logos"/>
      ))}
    </div>
  </div>
);

export default Skills;
