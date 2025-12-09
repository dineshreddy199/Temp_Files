// src/pages/Workforce.js
import React from "react";
import "../styles/Workforce.css";

// Edited
import { FaUserTie, FaShieldAlt, FaUserCog, FaTools, FaUserFriends } from "react-icons/fa";

const teams = [
  {
    title: "PHE Team",
    subtitle: "Public Health Engineering Specialists",
    members: 91,
    roles: [
      { name: "Engineers", count: 8, icon: <FaUserTie /> },
      { name: "Safety", count: 2, icon: <FaShieldAlt /> },
      { name: "Supervisors", count: 6, icon: <FaUserCog /> },
      { name: "Plumbers", count: 35, icon: <FaTools /> },
      { name: "Helpers", count: 40, icon: <FaUserFriends /> },
    ],
  },
  {
    title: "Fire Fighting Team",
    subtitle: "Fire Safety System Installation Experts",
    members: 32,
    roles: [
      { name: "Welders", count: 10, icon: <FaTools /> },
      { name: "Fitters", count: 4, icon: <FaUserCog /> },
      { name: "Helpers", count: 15, icon: <FaUserFriends /> },
      { name: "Foreman", count: 3, icon: <FaUserTie /> },
    ],
  },
];

const workforceSummary = [
  { label: "Technical Leads (Eng + Sup + Foreman)", count: 17 },
  { label: "Skilled Technicians (Plumbers + Welders + Fitters)", count: 49 },
  { label: "Support Staff (Helpers)", count: 55 },
  { label: "Safety Officers", count: 2 },
];


const Workforce = () => {
  return (
    <section className="workforce">
      <div className="workforce-hero">
        <div className="workforce-hero-content">
          <h1>Our Work Force</h1>
          <p>
            A dedicated team of skilled professionals delivering excellence in
            plumbing and fire fighting systems.
          </p>
        </div>
      </div>

      {/* <div className="workforce-body">
        <div className="workforce-cards-row">
          <div className="workforce-team-card">
            <h2>PHE Team</h2>
            <p>Total Public Health Engineering technicians.</p>
            <ul>
              <li>Engineers</li>
              <li>Supervisors</li>
              <li>Foremen</li>
              <li>Helpers</li>
            </ul>
          </div>
          <div className="workforce-team-card">
            <h2>Fire Fighting Team</h2>
            <p>Dedicated fire fighting specialists and technicians.</p>
            <ul>
              <li>Supervisors</li>
              <li>Pipe Fitters</li>
              <li>Helpers</li>
            </ul>
          </div>
        </div>

        <div className="workforce-metrics">
          <div className="workforce-metric-card">
            <span className="metric-value">17</span>
            <span className="metric-label">Years in Service</span>
          </div>
          <div className="workforce-metric-card">
            <span className="metric-value">49</span>
            <span className="metric-label">Sites Successfully Handover</span>
          </div>
          <div className="workforce-metric-card">
            <span className="metric-value">55</span>
            <span className="metric-label">Support Staff</span>
          </div>
          <div className="workforce-metric-card">
            <span className="metric-value">24x7</span>
            <span className="metric-label">Safety &amp; Support</span>
          </div>
        </div>
      </div> */}
      <section>
        <div className="workforce-container">

      <div className="workforce-header">
        <h2>Team Composition</h2>
        <p>
          Our workforce is divided into specialized teams to ensure focused
          expertise and efficient project execution.
        </p>
      </div>

      <div className="team-grid">
        {teams.map((team, i) => (
          <div className="team-card" key={i}>
            <div className="team-title-box">
              <div>
                <h3>{team.title}</h3>
                <p>{team.subtitle}</p>
              </div>
              <div className="team-members">
                <span className="team-number">{team.members}</span>
                <span className="team-label">MEMBERS</span>
              </div>
            </div>

            <ul className="team-roles">
              {team.roles.map((role, i) => (
                <li key={i}>
                  <span className="role-icon">{role.icon}</span>
                  <span className="role-name">{role.name}</span>
                  <span className="role-count">{role.count}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="summary-grid">
        {workforceSummary.map((item, i) => (
          <div className="summary-card" key={i}>
            <h3>{item.count}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
      </section>
    </section>
  );
};

export default Workforce;
