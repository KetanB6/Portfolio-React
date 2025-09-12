import ProjectDetails from "./ProjectDetails";
import TinyCut from "../assets/images/TinyCut.png";
import Padarth from "../assets/images/Padarth.png";
import MindCalc from "../assets/images/MindCalc.png";
import OneView from "../assets/images/OneView.png";
import LibraryApp from "../assets/images/LMS_APP.png";
import BankingApp from "../assets/images/BankingApp.png";
import HotelApp from "../assets/images/HMS_J.png";

const projects = [
  { id: "TinyCut", title: "TinyCut: Web based URL Shortner", img: TinyCut, github: "https://github.com/KetanB6/TinyCut", link: "https://tiny-cut.vercel.app/", description: "Solution to convert long URL into short URL..." },
  { id: "ViewOne", title: "ViewOne: Share it once, then it gone", img: OneView, github: "https://github.com/KetanB6/CurrencyConverterApp", link: "https://currencyconverterapp-vczn.onrender.com", description: "Currency Converter Web App..." },
  { id: "padarth", title: "Padarth: Ingredient Info. Provider", img: Padarth, github: "https://github.com/KetanB6/Padarth", link: null, description: "Padarth is a web-based ingredient analysis tool..." },
  { id: "mindCalc", title: "MindCalc: Mental Calculation", img: MindCalc, github: "https://github.com/KetanB6/MindCalc", link: "https://mindcalc.onrender.com", description: "MindCalc is a browser-based game..." },
  { id: "library", title: "Library Management System", img: LibraryApp, github: "https://github.com/KetanB6/LibraryWebApp", link: "https://librarywebapp-kwdf.onrender.com", description: "Library Management System Web App..." },
  { id: "banking", title: "Banking Application With JDBC", img: BankingApp, github: "", link: "", description: "Banking Management System in Java/JDBC..." },
  { id: "hms_j", title: "Hotel Management System With JDBC", img: HotelApp, github: "", link: "", description: "Console-based Hotel Reservation System..." }
];

const Projects = ({ openProject, visibleProject, closeProject }) => {
  return (
    <div className="about card">
      <h2 className="sub contain">Projects</h2><br />
      <div className="proj_container projects_container">
        {projects.map((p) => (
            <div className="pbox" key={p.id}>
                <div >
                    <img src={p.img} alt={p.title} className="proj" onClick={() => openProject(p.id)} />
                    <div>{p.title}</div>
                </div>    
          </div>
        ))}
      </div>

      {projects.map((p) => (
        <ProjectDetails key={p.id} project={p} isVisible={visibleProject === p.id} close={closeProject} />
      ))}
    </div>
  );
};

export default Projects;
