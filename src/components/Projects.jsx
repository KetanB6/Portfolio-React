import ProjectDetails from "./ProjectDetails";
import TinyCut from "../assets/images/TinyCut.png";
import Padarth from "../assets/images/Padarth.png";
import MindCalc from "../assets/images/MindCalc.png";
import OneView from "../assets/images/OneView.png";
import LibraryApp from "../assets/images/LMS_APP.png";
import BankingApp from "../assets/images/BankingApp.png";
import HotelApp from "../assets/images/HMS_J.png";

const projects = [
  { id: "TinyCut", title: "TinyCut: Web based URL Shortner", img: TinyCut, github: "https://github.com/KetanB6/TinyCut", link: "https://tiny-cut.vercel.app/", description: "TinyCut is a simple URL shortener built with Spring Boot and React that converts long links into short, easy-to-share ones. The backend generates unique short codes and maps them to original URLs, while the frontend retrieves and redirects using those codes. It provided hands-on experience with REST APIs, API integration, and full-stack deployment." },
  { id: "ViewOne", title: "ViewOne: Share it once, then it gone", img: OneView, github: "https://github.com/KetanB6/OneView", link: "https://one-view.vercel.app/", description: "Built OneView, a web app where users can save a message, get a unique code, and view it once—after that, it’s deleted from the database. I developed the backend in Spring Boot (REST + JPA) while learning the Spring Framework, and set up the frontend in React (with some help from ChatGPT).✨ This kind of “view-once” message system can be useful in the real world for securely sharing sensitive information like temporary passwords, confidential notes, or private links." },
  { id: "padarth", title: "Padarth: Ingredient Info. Provider", img: Padarth, github: "https://github.com/KetanB6/Padarth", link: null, description: "Padarth is a web-based ingredient analysis tool that lets users scan, upload, or search ingredients to check their health safety. It captures or uploads images, extracts text, and processes it using Gemini AI to fetch ingredient details. The results are displayed via JSP for a smooth user experience. Built with HTML, CSS, JavaScript, Servlets, and JSP, the project strengthened skills in backend development and API integration." },
  { id: "mindCalc", title: "MindCalc: Mental Calculation", img: MindCalc, github: "https://github.com/KetanB6/MindCalc", link: "https://mindcalc.onrender.com", description: "MindCalc is a browser-based math game that challenges users to solve problems under time pressure. It features timed addition challenges, score tracking, and a clean, responsive UI. Built with Java Servlets, HTML, and CSS, it strengthened skills in session-based logic, backend handling, and frontend design." },
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
