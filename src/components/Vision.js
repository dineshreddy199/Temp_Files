// src/pages/Vision.js
import React from "react";
import "../styles/Vision.css";
import { FaRibbon, FaGlobeAsia, FaLeaf } from "react-icons/fa";


const Vision = () => {
  return (
    <section className="vision">
      <div className="vision-hero">
        <div className="vision-hero-content">
          <h1>Our Vision</h1>
          <p>
            To become one of the leading and most reliable MEP contracting
            companies, delivering value through quality and innovation.
          </p>
        </div>
      </div>

      {/* <div className="vision-body">
        <div className="vision-layout">
          <div className="vision-image" />
          <div className="vision-panel">
            <h2>Vision Statement</h2>
            <p>
              We aspire to set benchmarks in public health engineering and fire
              fighting systems by consistently delivering technically sound and
              cost‑effective solutions.
            </p>
          </div>
        </div>

        <div className="vision-applications">
          <h2>Our Aspirations</h2>
          <div className="vision-grid">
            <div className="vision-card">
                <h2>Customer of Choice</h2>
                <p>To be the first preference for clients seeking reliable and high-quality MEP services.</p>
            </div>
            <div className="vision-card">
                <h2>National Presence</h2>
                <p>To expand our footprint across India, delivering excellence in every region we operate.</p>   
            </div>
            <div className="vision-card">
                <h2>Ethical Leadership</h2>
                <p>To lead with professional and ethical demeanor, setting standards for the industry.</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Eidited */}
      <section>
        <div className="vision-container">

      {/* IMAGE + TEXT SIDE BY SIDE */}
      <div className="vision-section">
        <img
          src="/images/vision-building.jpg"   /* replace with your actual image path */
          alt="Vision"
          className="vision-image"
        />

        <div className="vision-text-block">
          <h3 className="vision-title">Vision Statement</h3>

          <p className="vision-quote">
            "We strive to become one of the leading and most reliable MEP contracting companies in India,
            continuously conforming to our ever-growing professional and ethical demeanor as well as quality
            assurance standards to earn the privilege of being your Contractor of choice."
          </p>

          <p className="vision-description">
            Our vision is built on a foundation of trust, integrity, and professional excellence.
            We aim to set benchmarks in the industry not just through the scale of our projects, but
            through the quality of our relationships with clients and the enduring value we create.
          </p>
        </div>
      </div>

      {/* ASPIRATIONS SECTION */}
      <h3 className="aspiration-title">Our Aspirations</h3>

      <div className="aspiration-grid">

        <div className="aspiration-card">
          <FaRibbon className="aspiration-icon" />
          <h4>Contractor of Choice</h4>
          <p>
            To be the first preference for clients seeking reliable and high-quality MEP services.
          </p>
        </div>

        <div className="aspiration-card">
          <FaGlobeAsia className="aspiration-icon" />
          <h4>National Presence</h4>
          <p>
            To expand our footprint across India, delivering excellence in every region we operate.
          </p>
        </div>

        <div className="aspiration-card">
          <FaLeaf className="aspiration-icon" />
          <h4>Ethical Leadership</h4>
          <p>
            To lead with professional and ethical demeanor, setting standards for the industry.
          </p>
        </div>

      </div>
    </div>
      </section>
    </section>
  );
};

export default Vision;
