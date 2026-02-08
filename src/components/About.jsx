import { motion } from "framer-motion"

const About = () => (
  <div className="about card top">
    <h2 className="sub contain">Background</h2>
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <p >
        I am a Software Developer with a strong foundation in Java and hands-on 
        experience in Spring Boot, SQL, and the React ecosystem. My programming 
        journey began with C and C++, but I have since focused on mastering the 
        Java ecosystem—covering MVC, JPA, AOP, and REST API development for scalable
        applications. Beyond core backend development, I am continuously expanding
        my expertise in Docker, deployment practices, and cloud platforms to build
        production-ready solutions. I am currently deepening my knowledge of Spring
        Security and Microservices architecture to architect more complex, 
        distributed systems. With a solid command of OOP, Data Structures, and the
        Java Collections Framework, I strive to write efficient, maintainable, 
        and clean code. As a quick learner and collaborative problem-solver, I 
        am eager to contribute to impactful, real-world software projects that 
        create value at scale.

      </p>
    </motion.div>
  </div>
);

export default About;
