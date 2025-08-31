import ScrollLink from "./ScrollLink";
import SocialLinks from "./SocialLinks";
import profilePic from "../assets/images/profilePic.jpg";
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
        <div className="about card home">
            <div className="header">
                <h1 className="logo">Portfolio</h1>
                <a href="/cv.pdf" download className="download-btn">
                    Download CV
                </a>
            </div>

            <hr />
            <img src={profilePic} className="profile_pic" />
            <div className="intro">
                <h2 id="iam">Hello, I'am</h2>
                <h1 id="main">{typedName}</h1>
                <h3 id="sub">Software Developer</h3>
            </div>
            <ScrollLink />
            <SocialLinks />
        </div>
    );
};

export default Header;
