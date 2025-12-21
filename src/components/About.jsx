import { motion } from "framer-motion"

const About = () => (
  <div className="about card top">
    <h2 className="sub contain">Background</h2>
    <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}}>
    <p >
      I am a software developer with a strong foundation in Java and hands-on
      experience in Spring Boot, Servlets/JSP, JDBC, SQL, HTML, CSS, and React.
      My programming journey began with C and C++, but I quickly discovered my
      passion for Java and have since focused on mastering its ecosystem—covering
      MVC, JPA, AOP, OAuth, JWT, and REST API development for scalable applications.
      Alongside backend development, I am steadily expanding my skills in deployment
      practices, Docker, and cloud platforms to build reliable and production-ready solutions.
      With a solid understanding of core concepts like object-oriented programming, 
      data structures (arrays, linked lists, stacks, queues, trees, recursion), and 
      problem-solving, I strive to write efficient, maintainable, and clean code.
      
      Known for being a quick learner, adaptable, and collaborative, 
      I am eager to continue growing while contributing to impactful,
      real-world software projects that create value at scale.
   
    </p> 
    </motion.div>
  </div>
);

export default About;
