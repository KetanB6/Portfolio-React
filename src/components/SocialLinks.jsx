import insta from "../assets/images/insta.png";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import profile from "../assets/images/profile.png";

const SocialLinks = () => {
  return (
    <div className="social">
      <a href="https://ketanb6.github.io/Portfolio/" target="_blank" rel="noreferrer"><img src={profile} height="36px" width="36px" title="Portfolio"/></a>
      <a href="https://www.linkedin.com/in/ketan-bidave-08397430a" target="_blank" rel="noreferrer"><img src={linkedin} height="37px" width="36px" title="Linkedin"/></a>
      <a href="https://www.instagram.com/ketanbidave_06/" target="_blank" rel="noreferrer"><img src={insta} height="37px" width="36px" title="Instagram"/></a>
      <a href="https://github.com/KetanB6" target="_blank" rel="noreferrer"><img src={github} height="37px" width="36px" title="GitHub"/></a>
    </div>
  );
};

export default SocialLinks;
