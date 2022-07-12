import React, { useContext } from 'react';
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";

const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Fabien Suhas</span>
          <span>

            After 15 years in sales and marketing, I am proud and fresh out of training at   Wagon #batch-860-paris. <br />

            I want to consolidate my skills in Rails and train myself in the world of React Node Vu Typescripe by continuing to deepen my knowledge of Javascript. <br />

            I have a great attraction for the front, from my past experiences, I am very interested in UI/UX, ergonomics, design. <br />

            Motivated by this new universe, I learn and train myself with enthusiasm. <br />

          </span>

        </div>
        <button className="i-button button">Hire me</button>

        <div className="i-icons">
          <a href="https://github.com/FSuhas" target="_blank" rel="noreferrer">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/fabiensuhas/" target={'_blank'} rel="noreferrer">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/fabiensuhas/" target={'_blank'} rel="noreferrer">
            <img src={Instagram} alt="" />
          </a>
        </div>

      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />

        <div style={{top: '-4%', left: '68%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top: '18.3rem', left: '1.3rem'}}>
          <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: "#C1F5FF", top: '17rem', left: '21rem', widht: '21rem', height: '11rem'}}></div>
      </div>
    </div>
  )
}

export default Intro
