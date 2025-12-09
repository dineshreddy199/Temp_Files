// // src/pages/Clients.js
// import React from "react";
// import "../styles/Clients.css";

// const metrics = [
//   { label: "Total Clients", value: "200+" },
//   { label: "Repeat Clients", value: "150+" },
//   { label: "Satisfaction Rate", value: "98%" },
//   { label: "Years Partnership", value: "15+" },
// ];

// const Clients = () => {
//   return (
//     <section className="clients">
//       <div className="clients-hero">
//         <div className="clients-hero-content">
//           <h1>Our Clients</h1>
//           <p>
//             Trusted by leading organizations across government, private and
//             industrial sectors.
//           </p>
//         </div>
//       </div>

//       <div className="clients-body">
//         <div className="clients-metrics">
//           {metrics.map((m) => (
//             <div key={m.label} className="clients-metric-card">
//               <span className="clients-metric-value">{m.value}</span>
//               <span className="clients-metric-label">{m.label}</span>
//             </div>
//           ))}
//         </div>

//         <div className="clients-section">
//           <h2>Government &amp; Public Sector</h2>
//           <div className="clients-chip-row">
//             <span className="clients-chip">Public Work Department (PWD)</span>
//             <span className="clients-chip">
//               Municipal Corporations &amp; Authorities
//             </span>
//             <span className="clients-chip">
//               National Highways Authority of India
//             </span>
//           </div>
//         </div>

//         <div className="clients-section">
//           <h2>Private Sector &amp; Real Estate</h2>
//           <div className="clients-chip-row">
//             <span className="clients-chip">Top Housing Developers</span>
//             <span className="clients-chip">Prestige Group</span>
//             <span className="clients-chip">Brigade Group</span>
//           </div>
//         </div>

//         <div className="clients-section">
//           <h2>Industrial &amp; Manufacturing</h2>
//           <div className="clients-chip-row">
//             <span className="clients-chip">Automotive Plants</span>
//             <span className="clients-chip">Food Processing Units</span>
//             <span className="clients-chip">Pharma &amp; Healthcare</span>
//           </div>
//         </div>

//         <div className="clients-testimonials">
//           <article className="clients-testimonial-card">
//             <p>
//               “SN ENGINEERS delivered exceptional quality on our recent project
//               with strict adherence to timelines and safety standards.”
//             </p>
//             <span className="clients-testimonial-name">
//               Municipal Corporation
//             </span>
//           </article>
//           <article className="clients-testimonial-card">
//             <p>
//               “Professional team with excellent project management and
//               communication. Highly recommended for complex MEP works.”
//             </p>
//             <span className="clients-testimonial-name">
//               Large Infra Developer
//             </span>
//           </article>
//           <article className="clients-testimonial-card">
//             <p>
//               “Their proactive approach and technical expertise ensured smooth
//               execution across multiple phases of our campus.”
//             </p>
//             <span className="clients-testimonial-name">
//               Industrial Client
//             </span>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;



import React from "react";
import "../styles/Clients.css";
import { FaBuilding, FaShieldAlt, FaStar, FaHandshake } from "react-icons/fa";
import { BsBuilding, BsShieldCheck } from "react-icons/bs";
import FewClients from "./FewClients";

// STATS DATA
const clientsStats = [
  { value: "200+", label: "Total Clients", icon: <FaBuilding /> },
  { value: "150+", label: "Repeat Clients", icon: <BsShieldCheck /> },
  { value: "98%", label: "Satisfaction Rate", icon: <FaStar /> },
  { value: "15+", label: "Years Partnership", icon: <FaHandshake /> },
];

// CLIENT CATEGORIES DATA
const clientCategories = [
  {
    title: "Government & Public Sector",
    icon: "🛡️",
    names: [
      "Public Works Department (PWD)",
      "Maharashtra State Road Development Corporation",
      "Municipal Corporation of Greater Mumbai",
      "Pune Municipal Corporation",
      "Nagpur Municipal Corporation",
      "Maharashtra Metro Rail Corporation",
      "MHADA",
      "National Highways Authority of India (NHAI)",
    ],
  },
  {
    title: "Private Sector & Real Estate",
    icon: "🏢",
    names: [
      "Tata Housing Development Company",
      "Godrej Properties Limited",
      "Mahindra Lifespace Developers",
      "Lodha Group",
      "K. Raheja Corp",
      "Oberoi Realty",
      "Prestige Group",
      "Brigade Group",
      "Phoenix Mills Limited",
      "Brookfield Properties",
    ],
  },
  {
    title: "Industrial & Manufacturing",
    icon: "🏭",
    names: [
      "Reliance Industries Limited",
      "Tata Steel",
      "JSW Steel",
      "Larsen & Toubro",
      "Thermax Limited",
      "Kirloskar Brothers",
      "Bharat Forge",
      "Forbes & Company",
    ],
  },
];

// TESTIMONIALS
const testimonials = [
  {
    feedback:
      `"SN ENGINEERS delivered exceptional quality on our smart city project. Attention to detail and timely delivery was commendable. Highly recommended!"`,
    client: "Municipal Corporation",
    type: "Smart City Infrastructure",
  },
  {
    feedback:
      `"Professional team with excellent project management capabilities. Delivered ahead of schedule."`,
    client: "Tata Housing",
    type: "Residential Complex",
  },
  {
    feedback:
      `"We worked with SN ENGINEERS on multiple industrial facilities. They are our preferred partner!"`,
    client: "Reliance Industries",
    type: "Industrial Project",
  },
];

// WHY CLIENTS CHOOSE US
const whyChooseUs = [
  {
    icon: <BsBuilding />,
    title: "Proven Track Record",
    desc: "500+ completed projects with quality delivery",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Assurance",
    desc: "Rigorously monitored executions",
  },
  {
    icon: <FaHandshake />,
    title: "Client Partnership",
    desc: "Transparent communication throughout",
  },
];



const Clients = () => {
  return (
    <div className="clients-container">
      {/* BANNER */}
      <section className="clients-hero">
        <div className="hero-inner">
          <FaBuilding className="hero-icon" />
          <h1>Our Clients</h1>
          <p>
            Trusted by leading organizations across government, private, and
            industrial sectors
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="clients-stats">
        {clientsStats.map((item, i) => (
          <div key={i} className="stat-box">
            <div className="stat-icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* CLIENT CATEGORIES */}
      <h2 className="section-heading">Our Esteemed Clients</h2>
      <section className="client-categories">
        {clientCategories.map((cat, i) => (
          <div key={i} className="category-wrapper">
            <h3 className="category-title">
              {cat.icon} {cat.title}
            </h3>
            <div className="category-grid">
              {cat.names.map((client, i2) => (
                <span key={i2} className="client-pill">
                  {client}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <h2 className="section-heading">Client Testimonials</h2>
      <section className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="feedback">{t.feedback}</p>
            <div className="client-footer">
              <strong>{t.client}</strong>
              <span>{t.type}</span>
            </div>
          </div>
        ))}
      </section>
        <FewClients/>
      {/* WHY CHOOSE US */}
      <h2 className="section-heading">Why Clients Choose Us</h2>
      <section className="choose-grid">
        {whyChooseUs.map((item, i) => (
          <div key={i} className="choose-card">
            <div className="choose-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Clients;
