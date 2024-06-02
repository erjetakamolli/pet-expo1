import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactUs.scss';

library.add(faPhoneAlt, faEnvelope, faMapMarkerAlt);

const ContactUs = () => {
  return (
    <div id="contactus" className="contact-us">
      <div className="container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Get In Touch</p>
          <div className="info-item">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <p>PHONE<br />+123 456 789</p>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>EMAIL<br />pet.lovers@gmail.com</p>
          </div>
          <div className="info-item">
           <FontAwesomeIcon icon={faMapMarkerAlt} />   
            <p>LOCATION<br />Tirana, Albania</p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;