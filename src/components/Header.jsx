import SocialLinks from "./SocialLinks";
import ProfilePic from "../assets/images/ProfilePic.png";
import CV from "../assets/files/CV.pdf";

import { useEffect, useState } from "react";

const Header = () => {
    const fullName = "Ketan Bidave";
    const [typedName, setTypedName] = useState("");
    const scrollWin = () => window.scrollTo({ top: 650, behavior: "smooth" });

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
            <div className="header">
                <h1 className="logo">Portfolio</h1>
                <a href={CV} target="_blank" className="download-btn">
                    View CV
                </a>
            </div>

            <hr />
            <div className="name_pic">
                <img src={ProfilePic} className="profile_pic" />
                <div className="intro">
                    <h2 id="iam">Hello, I'm</h2>
                    <h1 id="main">{typedName}</h1>
                    <h2 id="sub">Java Developer</h2>
                    
                    <span className="scrollToAbout" onClick={scrollWin}>Get to <font color="aqua">know</font> me better...</span>
                   
                </div>

            </div>
            <SocialLinks />

        </div>
    );
};

export default Header;
