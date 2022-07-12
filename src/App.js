import './App.css';
import Navbar from "./Componnents/Navbar/Navbar";
import Intro from "./Componnents/Intro/Intro";
import Services from './Componnents/Services/Services';
import Experience from './Componnents/Experiences/Experiences';
import Works from './Componnents/Works/Works';
import Portfolio from './Componnents/Portfolio/Portfolio';
import Testimonial from './Componnents/Testimonials/Testimonial';
import Contact from './Componnents/Contact/Contact';
import Footer from './Componnents/Footer/Footer';
import {themeContext} from './Context'
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services id="service"/>
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
