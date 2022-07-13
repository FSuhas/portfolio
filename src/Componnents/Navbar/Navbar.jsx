import React from 'react'
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Fabien Suhas</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>Services</Link>
            </li>
            {/* <li>
              <Link to="works" spy={true} smooth={true}>Experience</Link>
            </li> */}
            <li>
              <Link to="portfolio" spy={true} smooth={true}>Protfolio</Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>Testimonial</Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
