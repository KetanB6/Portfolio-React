import SocialLinks from "./SocialLinks";
import ProfilePic from "../assets/images/ProfilePic.webp";
import CV from "../assets/files/CV.pdf";
import { FaJava } from "react-icons/fa";

import { useEffect, useState } from "react";

const Header = () => {
    const fullName = "Ketan Bidave";
    const [typedName, setTypedName] = useState("");
    const scrollWin = () => {
        let scrollTop;
        window.innerWidth <= 768? scrollTop=900: scrollTop=600
        window.scrollTo({top: scrollTop, behavior: "smooth" });        
    }

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedName(fullName.slice(0, index + 1));
            index++;
            if (index === fullName.length) clearInterval(interval);
        }, 300);
    }, []);


    return (
        <div className="home">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="header">
                <h1 className="logo">Portfolio</h1>
                <a href={CV} target="_blank" className="download-btn">
                    View CV
                </a>
            </div>
            </div>

            <hr />
            <div className="name_pic">
                <img src={ProfilePic} className="profile_pic" loading="lazy"/>
                <div className="intro">
                    <h2 id="iam">Hello, I'm</h2>
                    <h1 id="main">{typedName}</h1>
                    <span className="profession"><h2 id="sub">Java Developer<FaJava className="jlogo" /></h2></span>
                    
                    <span className="scrollToAbout" onClick={scrollWin}>Get to <font color="aqua">know</font> me better...</span>
                   
                </div>

            </div>
            <SocialLinks />

        </div>
    );
};

export default Header;
