import ScrollLink from "./ScrollLink";
import SocialLinks from "./SocialLinks";
import ProfilePic from "../assets/images/ProfilePic.png";
import CV from "../assets/files/CV.pdf";

import { useEffect, useState } from "react";

const Header = () => {
    const fullName = "Ketan Bidave";
    const [typedName, setTypedName] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedName(fullName.slice(0, index + 1));
            index++;
            if (index === fullName.length) clearInterval(interval);
        }, 300);
    }, []);


    return (
        <div className="about card home mar">
            <div className="header">
                <h1 className="logo">Portfolio</h1>
                <a href={CV} target="_blank" className="download-btn">
                    View CV
                </a>
            </div>

            <hr />
            <img src={ProfilePic} className="profile_pic" />
            <div className="intro">
                <h2 id="iam">Hello, I'm</h2>
                <h1 id="main">{typedName}</h1>
                <h3 id="sub">Software Developer</h3>
            </div>
            <ScrollLink />
            <SocialLinks />

        </div>
    );
};

export default Header;
