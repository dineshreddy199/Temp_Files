// src/pages/ContactUs.js
import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>
            Get in touch with us for any inquiries, project discussions or
            partnership opportunities.
          </p>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-info-row">
          <div className="contact-info-card">
            <h2>Phone</h2>
            <p>+91 9876543210</p>
            <p>+91 8000000000</p>
          </div>
          <div className="contact-info-card">
            <h2>Email</h2>
            <p>snengineers@example.com</p>
            <p>We reply within 24 hours.</p>
          </div>
          <div className="contact-info-card">
            <h2>Hyderabad Office</h2>
            <p>Some address line, Hyderabad, Telangana</p>
          </div>
          <div className="contact-info-card">
            <h2>Andhra Office</h2>
            <p>Some address line, Tirupati, Andhra Pradesh</p>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p className="contact-form-subtitle">
            Fill out the form below and our team will get back to you shortly.
          </p>
          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="contact-field">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label>Phone Number</label>
                <input type="text" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="contact-field">
                <label>Company / Organization</label>
                <input type="text" placeholder="Your company name" />
              </div>
            </div>

            <div className="contact-field">
              <label>Service of Interest</label>
              <select>
                <option>Select a service</option>
                <option>Public Health Engineering</option>
                <option>Fire Fighting Services</option>
                <option>Turnkey Contracts</option>
                <option>Maintenance Services</option>
              </select>
            </div>

            <div className="contact-field">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us about your project..." />
            </div>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
