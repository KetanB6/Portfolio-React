import ApiDak from "../assets/images/API-DAK.webp"
import TinyCut from "../assets/images/TinyCut.webp";
import Padarth from "../assets/images/Padarth.webp";
import MindCalc from "../assets/images/MindCalc.webp";
import OneView from "../assets/images/OneView.webp";
import BankingApp from "../assets/images/BankingApp.webp";
import HotelApp from "../assets/images/HMS_J.webp";
import CCA from "../assets/images/CurrencyConverterApp.webp";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion"

const projects = [
  { id: "API-DAK", deployed: true, title: "API-DAK: Simple API Taster", img: ApiDak, github: "https://github.com/KetanB6/API-DAK", link: "https://api-dak.vercel.app/", description: " API-DAK is a mini project and a lightweight Postman-like tool built with React that allows users to test APIs directly from the browser using GET, POST, PUT, DELETE, and PATCH methods. It provides an interactive and minimal interface to send requests, view responses, and understand RESTful communication while strengthening practical knowledge of frontend API handling." },
  { id: "TinyCut", deployed: true, title: "TinyCut: Web based URL Shortner", img: TinyCut, github: "https://github.com/KetanB6/TinyCut", link: "https://tiny-cut.vercel.app/", description: " is a simple URL shortener built with Spring Boot and React that converts long links into short, easy-to-share ones. The backend generates unique short codes and maps them to original URLs, while the frontend retrieves and redirects using those codes. It provided hands-on experience with REST APIs, API integration, and full-stack deployment." },
  { id: "OneView", deployed: true, title: "ViewOne: Share it once, then it gone", img: OneView, github: "https://github.com/KetanB6/OneView", link: "https://one-view.vercel.app/", description: " is a web app where users can save a message, get a unique code, and view it once—after that, it’s deleted from the database. I developed the backend in Spring Boot (REST + JPA) while learning the Spring Framework, and set up the frontend in React (with some help from ChatGPT).✨ This kind of “view-once” message system can be useful in the real world for securely sharing sensitive information like temporary passwords, confidential notes, or private links." },
  { id: "CurrencyConverter", deployed: true, title: "CurrConv: Currency Converter", img: CCA, github: "https://github.com/KetanB6/CurrencyConverterApp", link: "https://currencyconverter-1p9l.onrender.com/CCA/", description: " Here is a Currency Converter Web App A fast, intuitive currency conversion tool that lets users convert values between 35+ global currencies using live exchange rates. Here user selects currencies and inputs an amount then app fetches and latest exchange rate using a live API and Converted value and relevant flag icons are rendered dynamically using JSP " },
  { id: "Padarth", deployed: false, title: "Padarth: Ingredient Info. Provider", img: Padarth, github: "https://github.com/KetanB6/Padarth", link: null, description: " is a web-based ingredient analysis tool that lets users scan, upload, or search ingredients to check their health safety. It captures or uploads images, extracts text, and processes it using Gemini AI to fetch ingredient details. The results are displayed via JSP for a smooth user experience. Built with HTML, CSS, JavaScript, Servlets, and JSP, the project strengthened skills in backend development and API integration." },
  { id: "MindCalc", deployed: true, title: "MindCalc: Mental Calculation", img: MindCalc, github: "https://github.com/KetanB6/MindCalc", link: "https://mindcalc.onrender.com", description: " is a browser-based math game that challenges users to solve problems under time pressure. It features timed addition challenges, score tracking, and a clean, responsive UI. Built with Java Servlets, HTML, and CSS, it strengthened skills in session-based logic, backend handling, and frontend design." },
  { id: "Bank Management System", deployed: false, title: "Banking Application With JDBC", img: BankingApp, github: "https://github.com/KetanB6/Hotel-Reservation-System", link: "", description: ", My first Java project – Banking Management System using JDBC and MySQL. It’s a console-based application that supports user registration/login, account creation with secure PINs, deposits, withdrawals, transfers, balance checks, and PIN updates. I implemented transaction management for data integrity and used PreparedStatement to prevent SQL injection, which gave me strong hands-on experience with Java, JDBC, and database handling." },
  { id: "Hotel Resrvation System", deployed: false, title: "Hotel Management System With JDBC", img: HotelApp, github: "https://github.com/KetanB6/Bank-Management-System", link: "", description: "  in Java using JDBC and MySQL. This console-based project simulates real-world hotel operations with CRUD functionality, including room availability checks, guest reservations, booking updates, and handling departures. It was my first JDBC project, which gave me practical experience in database integration, query handling, and building interactive Java applications." }
];

const Projects = ({ openProject, visibleProject, closeProject }) => {
  return (
    <div className="about card">
      <h2 className="sub contain">Projects</h2><br />
      <div className="proj_container">
        {projects.map((p) => (
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1.8}} viewport={{once: true}} key={p.id}>
          <div className="pbox">            
              <img src={p.img} alt={p.title} className="proj" onClick={() => openProject(p.id)} loading="lazy" />
              <p style={{paddingLeft:"20px"}}><a href={p.link} className="link" target="_blank">{p.id}</a>{p.deployed && <HiExternalLink />} {p.description}<a href={p.github} className="link"> GitHub-Repo</a><HiExternalLink /></p>
          </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
