import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Pages/Notfound.scss'

const Notfound = () => {
  return (
    <div className='notFound'>
      <div className="notFoundContent">
        <h3>Désoler cette page n'existe pas !</h3>
        <NavLink exact to="/">
          <span>Accueil</span>
        </NavLink>
      </div>

    </div>
  );
};

export default Notfound;
