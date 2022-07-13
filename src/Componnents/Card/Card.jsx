import React from 'react'
import './Card.css'
import { NavLink } from "react-router-dom";

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <NavLink exact to="/services" className='c-button' >
        LEARN MORE
      </NavLink>
    </div>
  )
}

export default Card
