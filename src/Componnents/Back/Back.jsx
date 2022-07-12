import React from 'react'
import './Back.css'
import { useState, useEffect } from 'react';
import Arrow from '../../img/arrow.png'


const Back = () => {

    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        // window height changed for the demo
        windowHeight > 650 ? setStickyClass('sticky-nav') : setStickyClass('');
      }
    };

    return (
      <a href="#top">
        <div className={`back`}>
          <img src={Arrow} alt="" className={`${stickyClass}`}/>
        </div>
      </a>
  )
}

export default Back
