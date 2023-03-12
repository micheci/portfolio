import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Css/ContactUs.css'


 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d7mczbr', 'template_3o6n1rl', form.current, 'kEM4XgnnNSbBbJqST')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='contactUs'>

    <h1>Contact Us</h1>
    
      <form className='formData' ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
   
    </div>
  );
};

export default ContactUs;