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
    duration: 2,
    type: "spring",
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane>I create websites or web applications. <br />
        <br />
              Starting from your idea, I create a model with you, then a prototype, and finally the realization of your project.
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
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
        >
          <Card
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {'Figma, Wireframe, User Journey, Prototype'}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, Ruby, React, Rails, ..."}
          />
        </motion.div>

        {/* 3eme card */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
          }}
      >
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={'Intuitive and pleasant navigation for your future users'}
          />
        </motion.div>

        <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services
