import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zdsz4mg', 'template_kiw64bn', form.current, 'jrpUfywm6812cmxte')
      .then((result) => {
          console.log(result.text);
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touche</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{background: "#ABF1FF94"}}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
