import React from 'react'
import Intro from "../Componnents/Intro/Intro";
import Services from '../Componnents/Services/Services';
import Experience from '../Componnents/Experiences/Experiences';
import Works from '../Componnents/Works/Works';
import Portfolio from '../Componnents/Portfolio/Portfolio';
import Testimonial from '../Componnents/Testimonials/Testimonial';
import Contact from '../Componnents/Contact/Contact';
import Footer from '../Componnents/Footer/Footer';
import Navbar from '../Componnents/Navbar/Navbar';
import Back from '../Componnents/Back/Back';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Back />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
