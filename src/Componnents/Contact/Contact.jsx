import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const notify = () => toast.success('Thanks for Contacting me', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef()
  const [setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdsz4mg', 'template_kiw64bn', form.current, 'jrpUfywm6812cmxte')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="contact">

      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode?'white': ''}}>Get in touche</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{background: "#ABF1FF94"}} ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>

          <input type="submit" value="Send" className="button" onClick={notify}/>
              <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />

          <div className="blur c-blur1" style={{ background: "var(--purple)" }} ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
