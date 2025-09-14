import { useState } from "react";
import { motion } from "framer-motion"
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [visibleProject, setVisibleProject] = useState(null);

  // const openProject = (id) => setVisibleProject(id);
  // const closeProject = () => setVisibleProject(null);

  return (
    <div className="App">
      <div className="blur-overlay"></div>
      <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} viewport={{once: false}}>
        <Header />
      </motion.div>

      <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: false}}>
        <About />
      </motion.div>

      <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: false}}>
        <Skills />
      </motion.div>

      <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: false}}>
        <Projects  />
      </motion.div>

      <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: false}}>
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
