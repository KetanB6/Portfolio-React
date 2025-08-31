import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [visibleProject, setVisibleProject] = useState(null);

  const openProject = (id) => setVisibleProject(id);
  const closeProject = () => setVisibleProject(null);

  return (
    <div className="App">
      <div className="blur-overlay"></div>
      <Header />
      <About />
      <Skills />
      <Projects openProject={openProject} visibleProject={visibleProject} closeProject={closeProject} />
      <Contact />
    </div>
  );
}

export default App;
