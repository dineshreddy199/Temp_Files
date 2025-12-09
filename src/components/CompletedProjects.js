// src/pages/CompletedProjects.js
import React from "react";
import "../styles/CompletedProjects.css";

// const completedStats = [
//   { label: "Total Completed", value: "500+" },
//   { label: "Total Value", value: "₹1500+ Cr" },
//   { label: "Client Satisfaction", value: "98%" },
//   { label: "On‑Time Delivery", value: "95%" },
// ];

// const completedProjects = [
//   { name: "Lanco Hills", location: "Hyderabad", type: "Residential" },
//   { name: "Amar Raja", location: "Tirupati", type: "Industrial" },
//   { name: "Vasudha Hospital", location: "Vizag City", type: "Healthcare" },
//   { name: "Rakshaka Hospital", location: "Hyderabad", type: "Healthcare" },
//   { name: "Amar Raja Growth Corridor", location: "Chittoor", type: "Infrastructure" },
//   { name: "Business Towers", location: "Hyderabad", type: "Commercial" },
// ];


//Edited
import { FaMapMarkerAlt } from "react-icons/fa";

const statsTop = [
  { value: "500+", label: "Total Completed" },
  { value: "₹1500+ Cr", label: "Total Value" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "95%", label: "On-Time Delivery" },
];

// PROJECTS DATA (Fully Dynamic)
const completedProjects = [
  {
    title: "Lanco Hills",
    location: "Hyderabad",
    value: "₹18,00,000",
    type: "Residential",
    year: "2010-2011",
    image: "/images/project1.jpg",
  },
  {
    title: "Mantri Celestia",
    location: "Hyderabad",
    value: "₹70,00,000",
    type: "Residential",
    year: "2010-2011",
    image: "/images/project2.jpg",
  },
  {
    title: "Indian Bulls",
    location: "Hyderabad",
    value: "₹25,00,000",
    type: "Residential",
    year: "2011-2012",
    image: "/images/project3.jpg",
  },
  {
    title: "Amar Raja",
    location: "Hyderabad",
    value: "₹36,25,000",
    type: "Residential",
    year: "2012-2015",
    image: "/images/project4.jpg",
  },
  {
    title: "IBIS Hotel",
    location: "Himayat Nagar",
    value: "₹12,18,000",
    type: "Commercial",
    year: "2015-2016",
    image: "/images/project5.jpg",
  },
  {
    title: "Babukhan Lake Front",
    location: "Hyderabad",
    value: "₹44,85,000",
    type: "Residential",
    year: "2012-2013",
    image: "/images/project6.jpg",
  },
  {
    title: "Gowra Fountainhead",
    location: "Hyderabad",
    value: "₹18,00,000",
    type: "Residential",
    year: "2011-2012",
    image: "/images/project7.jpg",
  },
  {
    title: "Amar Raja Infra Pvt Ltd",
    location: "Tirupati",
    value: "₹2,45,80,000",
    type: "Industrial",
    year: "2018-2019",
    image: "/images/project8.jpg",
  },
];

// Category summary section
const categoryStats = [
  { count: "180+", label: "Residential", icon: "🏠" },
  { count: "120+", label: "Commercial", icon: "🏢" },
  { count: "85+", label: "Industrial", icon: "🏭" },
  { count: "90+", label: "Infrastructure", icon: "🏗️" },
  { count: "25+", label: "Others", icon: "📍" },
];

const CompletedProjects = () => {
  return (
    <section className="completed">
      <div className="completed-hero">
        <div className="completed-hero-content">
          <h1>Major Completed Projects</h1>
          <p>
            A showcase of our commitment to excellence, delivered on time and
            within budget.
          </p>
        </div>
      </div>

      {/* <div className="completed-body">
        <div className="completed-stats">
          {completedStats.map((item) => (
            <div key={item.label} className="completed-stat-card">
              <span className="completed-stat-value">{item.value}</span>
              <span className="completed-stat-label">{item.label}</span>
            </div>
          ))}
        </div>

        <h2 className="completed-section-title">All Completed Projects</h2>

        <div className="completed-grid">
          {completedProjects.map((p) => (
            <article key={p.name} className="completed-card">
              <div className="completed-card-image" />
              <div className="completed-card-body">
                <h3>{p.name}</h3>
                <p className="completed-meta">
                  <span>{p.location}</span>
                  <span>{p.type}</span>
                </p>
                <span className="completed-tag">Successfully Completed</span>
              </div>
            </article>
          ))}
        </div>
      </div> */}

      {/* Edited */}
      <section>
        <div className="completed-projects-container">

      {/* TOP STATS */}
      <div className="stats-grid">
        {statsTop.map((item, index) => (
          <div className="stats-card" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <h3 className="section-title">All Completed Projects</h3>

      {/* PROJECTS GRID */}
      <div className="projects-grid">
        {completedProjects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image-box">
              <img src={project.image} alt={project.title} />
              <span className="project-year">{project.year}</span>
            </div>

            <div className="project-info">
              <h4>{project.title}</h4>

              <div className="project-meta">
                <FaMapMarkerAlt className="meta-icon" />
                <span>{project.location}</span>
              </div>

              <p className="meta-detail">
                <strong>Project Value:</strong> {project.value}
              </p>
              <p className="meta-detail">
                <strong>Type:</strong> {project.type}
              </p>

              <span className="success-tag">Successfully Completed</span>
            </div>

          </div>
        ))}
      </div>

      {/* CATEGORY STATS */}
      <h3 className="category-title">Projects by Category</h3>
      <div className="category-grid">
        {categoryStats.map((item, index) => (
          <div className="category-card" key={index}>
            <span className="category-icon">{item.icon}</span>
            <h4>{item.count}</h4>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
      </section>
    </section>
  );
};

export default CompletedProjects;
