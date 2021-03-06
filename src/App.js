import './App.css';
import {themeContext} from './Context'
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from './Pages/Notfound';
import Home from './Pages/Home';
import Services from './Pages/Services'


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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// By Hissen
