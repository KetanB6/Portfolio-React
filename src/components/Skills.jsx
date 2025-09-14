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
import { motion } from "framer-motion"


const Skills = () => (
  <div className="about card">
    <h2 className="sub contain">Technologies</h2>
    <div className="skill_container">
      <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: false}}>
        
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
        </motion.div>
  
      </div>
  </div>
);

export default Skills;
