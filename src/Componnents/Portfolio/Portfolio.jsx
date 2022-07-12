import React, { useContext } from "react";
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sildebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from "../../Context";

const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio">

      {/* header  */}

      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <strong>!Disclainer!</strong>
      <small>It is currently a fictitious project</small>

      {/* slider */}

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <a href="/" target={'_blank'} rel="noreferrer">
            <img src={Sildebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" target={'_blank'} rel="noreferrer">
            <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" target={'_blank'} rel="noreferrer">
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/" target={'_blank'} rel="noreferrer">
            <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Portfolio
