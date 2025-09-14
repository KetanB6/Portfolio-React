import {motion} from "framer-motion"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className="socialLinksBox">
    <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: false}} className="social">
      <a href="https://x.com/Ketan_Bidave?t=iln77xM9m6YyjQ54VfgZzg&s=08" target="_blank" rel="noreferrer"><FaXTwitter className="social_i"/></a>
      <a href="https://www.linkedin.com/in/ketan-bidave-08397430a" target="_blank" rel="noreferrer"><FaLinkedin className="social_i"/></a>
      <a href="https://www.instagram.com/ketanbidave_06/" target="_blank" rel="noreferrer"><BiLogoInstagram className="social_i"/></a>
      <a href="https://github.com/KetanB6" target="_blank" rel="noreferrer"><AiFillGithub className="social_i"/></a>
    </motion.div>
    </div>
  );
};

export default SocialLinks;
