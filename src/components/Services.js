// src/pages/Services.js
import React from "react";
import "../styles/Services.css";


// const services = [
//   "Public Health Engineering (PHE)",
//   "Fire Fighting Services",
//   "Turnkey Contracts",
//   "Project Management",
//   "Maintenance Services",
//   "Premium Wet Service",
// ];

// edited
import { FaBurn, FaFireExtinguisher, FaHandshake, FaClipboardList, FaTools, FaBuilding,/*FaSun*/ } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaBurn />,
    title: "Public Health Engineering (PHE)",
    points: [
      "Water Filtration",
      "Hot & Cold Water Supply System",
      "Sanitation & Rain Water Systems",
      "Sewage Treatment Plants",
      "Irrigation System & Swimming Pool Drainage",
    ],
  },
  {
    id: 2,
    icon: <FaFireExtinguisher />,
    title: "Fire Fighting Systems",
    points: [
      "Fire Sprinkler Installation",
      "Fire Alarm Systems",
      "Fire Hydrant Pumps",
      "Hydrant Systems",
      "Safety Compliance Checks",
    ],
  },
  {
    id: 3,
    icon: <FaHandshake />,
    title: "Turnkey Contracts",
    points: [
      "Complete Project Management",
      "Material Selection & Procurement",
      "Quality Control & Testing",
      "Cost & Schedule Management",
      "Zero Waste Approach",
    ],
  },
  {
    id: 4,
    icon: <FaClipboardList />,
    title: "Project Management",
    points: [
      "Extensive Plan Review",
      "Pre-construction Meetings",
      "Daily Jobsite Supervision",
      "Troubleshooting & Problem Solving",
      "Trade Coordination/Scheduling",
    ],
  },
  {
    id: 5,
    icon: <FaTools />,
    title: "Maintenance Services",
    points: [
      "Annual Maintenance Contracts (AMC)",
      "Plumbing Maintenance",
      "Fire Fighting System Upkeep",
      "Emergency Repairs",
      "Regular Inspections",
    ],
  },
  {
    id: 6,
    icon: <FaBuilding />,
    title: "Premises We Serve",
    points: [
      "Villas & Residential Buildings",
      "Hotels & Hotel Apartments",
      "Factories & Industrial Units",
      "Hospitals & Commercial Offices",
      "Shopping Malls & Centers",
    ],
  },
//   {
//   id: 7,
//   icon: <FaSun />,
//   title: "Solar Installation",
//   points: [
//     "Rooftop Solar Systems",
//     "Solar Water Heaters",
//     "Solar Street Lighting",
//     "System Design & Integration"
//   ]
// },

];



const Services = () => {
  return (
    <section className="services">
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>
            Specialised in Public Health Engineering and Fire Fighting systems
            with a turnkey approach to project delivery.
          </p>
        </div>
      </div>

      {/* <div className="services-body">
        <div className="services-grid">
          {services.map((title) => (
            <article key={title} className="services-card">
              <div className="services-icon">📌</div>
              <h2>{title}</h2>
              <ul>
                <li>Design &amp; engineering</li>
                <li>Supply, installation &amp; testing</li>
                <li>Commissioning &amp; handover</li>
              </ul>
            </article>
          ))}
        </div>
      </div> */}
      {/* Eidited */}
        <div className="services-wrapper">
      <div className="services-header">
        <h2>What We Offer</h2>
        <p>
          With our broad range of capabilities, we provide a unique package of turnkey
          services that greatly reduces time involved in managing subcontractors and
          financial risk.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>

            <ul className="service-list">
              {service.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* BLUE STRIP */}
      <div className="advantage-section">
        <div className="advantage-box">
          <h4>Reduced Management Effort</h4>
          <p>Eliminate time invested in selecting and managing numerous subcontractors.</p>
        </div>

        <div className="advantage-box">
          <h4>Financial Certainty</h4>
          <p>Minimal risk of individual cost inflation with turnkey solutions.</p>
        </div>

        <div className="advantage-box">
          <h4>Quality Assurance</h4>
          <p>Ensure consistent quality output and effective management of quality control.</p>
        </div>
      </div>
    </div>
    

    </section>
  );
};

export default Services;
