import c from "../assets/images/C.png";
import cpp from "../assets/images/C++.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import react from "../assets/images/react.png";
import spring from "../assets/images/Spring.png";
import sql from "../assets/images/sql.png";
import Github from "../assets/images/github.png"
import { IoLogoReact } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


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
  { src: Github, alt: "GitHub" }
];

const Skills = () => (
  <div className="about card">
    <h2 className="sub contain">Technologies</h2>
    <div className="skill_container">
      {/* {skills.map((skill, idx) => (
        // <IoLogoReact />
        <img key={idx} src={skill.src} alt={skill.alt} className="logos"/>
      ))} */}
    
      <FaJava className="logos"/>
      <SiSpring className="logos"/>
      <FaPython className="logos"/>
      <TbBrandCpp className="logos"/>
      <GrMysql className="logos"/>
      <IoLogoHtml5 className="logos"/>
      <IoLogoCss3 className="logos"/>
      <FaJsSquare className="logos"/>
      <IoLogoReact className="logos"/>
      <RiTailwindCssFill className="logos"/>
      <FaGithub className="logos"/>
 
    </div>
  </div>
);

export default Skills;
