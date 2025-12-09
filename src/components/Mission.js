// src/pages/Mission.js
import React from "react";
import "../styles/Mission.css";
import { FaCheckCircle } from "react-icons/fa";

const goals = [ //eidited
  "Deliver high quality, cost effective works on schedule",
  "Enhance client satisfaction through continuous improvement",
  "Provide professional services that meet the client’s needs",
  "Deliver a high-quality product with minimal supervision",
  "Provide a timely, organized and efficient approach to the production process",
  "Execute all tasks in a safe and cost-effective manner",
  "Resolution of complex building design problems",
  "Environmental protection and sustainable practices",
];

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-hero">
        <div className="mission-hero-content">
          <h1>Our Mission</h1>
          <p>
            Guided by our vision, we deliver high‑quality, cost‑effective works
            on schedule and enhance our clients’ satisfaction.
          </p>
        </div>
      </div>

      <div className="mission-body">
        {/* <div className="mission-card">
          <h2>Mission Statement</h2>
          <p>
            We aim to provide reliable engineering services with strong focus on
            safety, quality and timely delivery across all our projects.
          </p>
        </div> */}

        {/* Eidited */}
        <section>
          <div className="mission-container">
      <div className="mission-wrapper">

        <div className="mission-left">
          <h3 className="mission-title">Mission Statement</h3>

          <blockquote className="mission-quote">
            "Guided by our vision we shall deliver high quality, cost effective 
            works on schedule and enhance our clients satisfaction through 
            continuous improvement of our business practices in terms of safety, 
            Quality services, deliver as well as environmental protection."
          </blockquote>

          <p className="mission-description">
            The goal of SN ENGINEERS is to provide quality craftsmanship and 
            other related services to private and government industries. We 
            emphasize professional services that meet client needs, minimal 
            supervision requirements, and organized efficient production 
            processes.
          </p>
        </div>

        <div className="mission-right">
          <img
            src="https://via.placeholder.com/480x450"
            alt="Mission"
            className="mission-image"
          />
        </div>

      </div>
    </div>

        </section>

        {/* <div className="mission-card">
          <h2>Operational Goals</h2>
          <div className="mission-grid">
            {[
              "Deliver high‑quality, cost‑effective work",
              "Ensure on‑time project completion",
              "Maintain strong client communication",
              "Adopt sustainable practices",
              "Provide safe working environments",
              "Build long‑term client relationships",
            ].map((item) => (
              <div key={item} className="mission-pill">
                {item}
              </div>
            ))}
          </div>
        </div> */}

        {/* Eidited */}
        <section>         
            <div className="goals-container">
              <h2 className="goals-title">Operational Goals</h2>

              <div className="goals-grid">
                {goals.map((item, index) => (
                  <div key={index} className="goal-card">
                    <FaCheckCircle className="goal-icon" />
                    <p className="goal-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>
      </div>
    </section>
  );
};

export default Mission;
