import React from "react";
import "./Footer.css";
import Wave from "../../img/wave2.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/fabiensuhas/" target="_blank" rel="noreferrer">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/FSuhas" target="_blank" rel="noreferrer">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <span>Made with ❤️ by myself</span>
      </div>
    </div>
  );
};

export default Footer;
