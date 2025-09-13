import insta from "../assets/images/insta.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import profile from "../assets/images/profile.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className="social">
      <a href="https://x.com/Ketan_Bidave?t=iln77xM9m6YyjQ54VfgZzg&s=08" target="_blank" rel="noreferrer"><FaXTwitter /></a>
      <a href="https://www.linkedin.com/in/ketan-bidave-08397430a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://www.instagram.com/ketanbidave_06/" target="_blank" rel="noreferrer"><BiLogoInstagram /></a>
      <a href="https://github.com/KetanB6" target="_blank" rel="noreferrer"><AiFillGithub /></a>
    </div>
  );
};

export default SocialLinks;
