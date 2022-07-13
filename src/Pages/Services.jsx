import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/Pages/Services.scss'

const Services = () => {
  return (
    <div className='s-warpper'>
      <h1>🚧 On Working 🚧</h1>
      <p>Thank you for your interest, this section will be available soon</p>
      <p>(maj 13/07/22)</p>
      <NavLink exact to="/" className={'button n-button'}>
        <span>Accueil</span>
      </NavLink>
    </div>
  )
}

export default Services
