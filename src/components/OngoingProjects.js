// // src/pages/OngoingProjects.js
// import React from "react";
// import "../styles/OngoingProjects.css";

// const ongoingStats = [
//   { label: "Active Projects", value: "8" },
//   { label: "Total Value", value: "₹15 Cr+" },
//   { label: "Avg. Progress", value: "45%" },
//   { label: "Workforce Deployed", value: "120+" },
// ];

// const ongoingProjects = [
//   { name: "Dukes Sai Villas", status: "Running Completion", progress: 90 },
//   { name: "GHR Callisto", status: "Just Started", progress: 15 },
//   { name: "Suchir India Pvt Ltd", status: "In Progress", progress: 35 },
//   { name: "Rainbow Childrens Medicare", status: "In Progress", progress: 40 },
//   { name: "SSL Convention Center", status: "In Progress", progress: 25 },
//   { name: "Pramukh Inspira", status: "Just Started", progress: 10 },
// ];

// const OngoingProjects = () => {
//   return (
//     <section className="ongoing">
//       <div className="ongoing-hero">
//         <div className="ongoing-hero-content">
//           <h1>Ongoing Projects</h1>
//           <p>
//             Executing major projects across regions with a focus on quality and
//             timely delivery.
//           </p>
//         </div>
//       </div>

//       <div className="ongoing-body">
//         <div className="ongoing-stats">
//           {ongoingStats.map((item) => (
//             <div key={item.label} className="ongoing-stat-card">
//               <span className="ongoing-stat-value">{item.value}</span>
//               <span className="ongoing-stat-label">{item.label}</span>
//             </div>
//           ))}
//         </div>

//         <h2 className="ongoing-section-title">Active Project List</h2>

//         <div className="ongoing-grid">
//           {ongoingProjects.map((p) => (
//             <article key={p.name} className="ongoing-card">
//               <div className="ongoing-card-image" />
//               <div className="ongoing-card-body">
//                 <div className="ongoing-card-header">
//                   <h3>{p.name}</h3>
//                   <span className="ongoing-status">{p.status}</span>
//                 </div>
//                 <div className="ongoing-progress-bar">
//                   <div
//                     className="ongoing-progress-fill"
//                     style={{ width: `${p.progress}%` }}
//                   />
//                 </div>
//                 <span className="ongoing-progress-label">
//                   Completion {p.progress}%
//                 </span>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OngoingProjects;


import React from "react";
import "../styles/OngoingProjects.css";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

// TOP METRICS
const ongoingStats = [
  { value: "8", label: "Active Projects" },
  { value: "₹15 Cr+", label: "Total Value" },
  { value: "45%", label: "Avg. Progress" },
  { value: "120+", label: "Workforce Deployed" },
];

// PROJECT CARDS
const ongoingProjects = [
  {
    title: "GHR TITANIA",
    location: "Hyd Kondapur",
    contractValue: "₹1,85,00,000",
    timeline: "2021–2024",
    status: "On Track",
    progress: 80,
    image: "/images/ongoing1.jpg",
  },
  {
    title: "THE VUE RESIDENCY",
    location: "Hyd Puppal Guda",
    contractValue: "₹1,25,00,000",
    timeline: "2022–2025",
    status: "On Track",
    progress: 60,
    image: "/images/ongoing2.jpg",
  },
  {
    title: "DUKES SAI VILLAS",
    location: "Hyd Gandipet",
    contractValue: "₹1,86,00,000",
    timeline: "2021–2024",
    status: "Nearing Completion",
    progress: 90,
    image: "/images/ongoing3.jpg",
  },
  {
    title: "GHR CALLISTO",
    location: "Hyd Kollur",
    contractValue: "₹3,05,00,000",
    timeline: "2024–2026",
    status: "Just Started",
    progress: 15,
    image: "/images/ongoing4.jpg",
  },
  {
    title: "SUCHIR INDIA PVT LTD",
    location: "Shamshabad",
    contractValue: "₹1,56,00,000",
    timeline: "2024–2026",
    status: "In Progress",
    progress: 25,
    image: "/images/ongoing5.jpg",
  },
  {
    title: "RAINBOW CHILDRENS MEDICARE",
    location: "Rajamundry",
    contractValue: "₹1,56,00,000",
    timeline: "2024–2025",
    status: "In Progress",
    progress: 40,
    image: "/images/ongoing6.jpg",
  },
  {
    title: "SLSL CONVENTION CENTER",
    location: "Hyderabad",
    contractValue: "₹75,00,000",
    timeline: "2024–2025",
    status: "In Progress",
    progress: 35,
    image: "/images/ongoing7.jpg",
  },
  {
    title: "PRIMARK INSPIRA",
    location: "Hyderabad",
    contractValue: "₹89,60,000",
    timeline: "2024–2026",
    status: "Just Started",
    progress: 10,
    image: "/images/ongoing8.jpg",
  },
];

// status → class
const getStatusClass = (status) => {
  switch (status) {
    case "Nearing Completion":
      return "status-badge nearing";
    case "On Track":
      return "status-badge track";
    case "In Progress":
      return "status-badge progress";
    case "Just Started":
      return "status-badge started";
    default:
      return "status-badge";
  }
};

const OngoingProjects = () => {
  return (
    <div className="ongoing-page">
      {/* HERO */}
      <section className="ongoing-hero">
        <div className="ongoing-hero-content">
          <div className="hero-clock">
            <FaClock />
          </div>
          <h1>Ongoing Projects</h1>
          <p>
            Executing 8 major projects across Hyderabad and surrounding regions
            with a focus on quality and timely delivery.
          </p>
        </div>
      </section>

      {/* TOP STATS */}
      <section className="ongoing-stats-section">
        <div className="ongoing-stats-grid">
          {ongoingStats.map((item, idx) => (
            <div key={idx} className="ongoing-stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <h3 className="ongoing-title">Active Projects List</h3>

      {/* PROJECT LIST */}
      <section className="ongoing-cards-grid">
        {ongoingProjects.map((p, idx) => (
          <article key={idx} className="ongoing-card">
            <div className="ongoing-img-wrap">
              <img src={p.image} alt={p.title} />
              <span className={getStatusClass(p.status)}>{p.status}</span>
            </div>

            <div className="ongoing-card-info">
              <h4 className="ongoing-card-title">{p.title}</h4>

              <div className="ongoing-location">
                <FaMapMarkerAlt className="loc-icon" />
                <span>{p.location}</span>
              </div>

              <div className="ongoing-meta">
                <div>
                  <span className="meta-label">Contract Value</span>
                  <span className="meta-value">{p.contractValue}</span>
                </div>
                <div>
                  <span className="meta-label">Timeline</span>
                  <span className="meta-value">{p.timeline}</span>
                </div>
              </div>

              <div className="ongoing-progress-text">
                <span className="meta-label">Completion</span>
                <span className="meta-value">{p.progress}%</span>
              </div>

              <div className="ongoing-progress-bar">
                <div
                  className="ongoing-progress-fill"
                  style={{ width: `${p.progress}%` }}
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default OngoingProjects;
