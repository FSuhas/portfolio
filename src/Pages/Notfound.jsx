import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Pages/Notfound.scss'
import Oups from '../img/quarte.png'

const Notfound = () => {
  return (
    <div className='notFound'>
      <div className="notFoundContent">
        <h3>Sorry, this page does not exist!</h3>
        <img src={Oups} alt="" />
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: "#C1F5FF", top: '17rem', left: '5rem', widht: '21rem', height: '11rem'}}></div>
        <NavLink exact to="/" className={'button n-button'}>
          <span>Home</span>
        </NavLink>
      </div>

    </div>
  );
};

export default Notfound;
