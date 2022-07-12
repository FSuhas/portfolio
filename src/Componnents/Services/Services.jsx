import React, { useContext } from 'react';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {

  const transition = {
    duration: 1,
    type: "spring",
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane>Lorem ipsum dolor sit amet consectetur adipisicineeaeazeaze azeazeaeazeazeaeg elit aeaeazeze e e ae. <br />
          Quam delectus ipsa quaerat.
        </spane>

        <a href={Resume} dowmload target="_blank" rel='noreferrer'>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
      </div>
      <div className="cards">

        {/* first card */}
        <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
        >
          <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {'Figma, Sketch, Photoshop, Adobe'}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, Ruby, React, Rails"}
          />
        </motion.div>

        {/* 3eme card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit aeaeazeze e e ae.'}
          />
        </motion.div>

        <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services
