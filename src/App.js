import './App.css';
import Navbar from "./Componnents/Navbar/Navbar";
import Intro from "./Componnents/Intro/Intro";
import Services from './Componnents/Services/Services';
import Experiences from './Componnents/Experiences/Experiences';
import Works from './Componnents/Works/Works';
import Portfolio from './Componnents/Portfolio/Portfolio';
import Testimonial from './Componnents/Testimonials/Testimonial';
import Contact from './Componnents/Contact/Contact';
import Footer from './Componnents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experiences/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
