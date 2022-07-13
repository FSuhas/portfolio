import React, { useContext } from "react";
import "./Footer.css";
import Wave from "../../img/wave3.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
import { themeContext } from "../../Context";

const Footer = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/fabiensuhas/" target="_blank" rel="noreferrer">
            <Linkedin style={{ color: darkMode ? "white" : "" }} size={"3rem"} />
          </a>
          <a href="https://github.com/FSuhas" target="_blank" rel="noreferrer">
            <Gitub style={{ color: darkMode ? "white" : "" }} size={"3rem"} />
          </a>
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Made with ❤️ by myself</span>
      </div>
    </div>
  );
};

export default Footer;
