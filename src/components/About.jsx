import { motion } from "framer-motion";

const highlights = [
  { icon: "☕", title: "Java Ecosystem", desc: "Spring Boot, JPA, MVC, AOP, REST APIs" },
  { icon: "🗄️", title: "Databases", desc: "MySQL, JDBC, JPA/Hibernate, SQL" },
  { icon: "⚛️", title: "Frontend", desc: "React, JavaScript, HTML, CSS, Tailwind" },
  { icon: "🚀", title: "DevOps", desc: "Docker, Git, GitHub, Deployment practices" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => (
  <section id="about">
    <div className="container">
      <div className="about-grid">
        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p className="section-label" variants={fadeUp} custom={0}>
            Who I Am
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp} custom={1}>
            Building systems that <em>scale</em>
          </motion.h2>

          <motion.div variants={fadeUp} custom={2}>
            <p>
              I'm a Software Developer with a strong foundation in Java and hands-on
              experience in Spring Boot, SQL, and the React ecosystem. My programming
              journey began with C and C++, but I've since focused on mastering the
              Java ecosystem — covering MVC, JPA, AOP, and REST API development for
              scalable applications.
            </p>
            <p>
              Beyond core backend development, I'm continuously expanding my expertise
              in Docker, deployment practices, and cloud platforms to build
              production-ready solutions. I'm currently deepening my knowledge of
              Spring Security and Microservices architecture.
            
              With a solid command of OOP, Data Structures, and the Java Collections
              Framework, I strive to write efficient, maintainable, and clean code that
              creates real value at scale.
            </p>
          </motion.div>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="highlight-card"
                variants={fadeUp}
                custom={i + 3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <div className="highlight-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
