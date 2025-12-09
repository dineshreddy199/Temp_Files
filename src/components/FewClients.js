// import React, { useState } from "react";
// import "../styles/FewClients.css";

// const categories = ["All", "Private", "Industrial"];

// const fewClientsData = [
//   {
//     name: "Lodha Group",
//     sector: "Real Estate",
//     category: "Private",
//     projects: 12,
//     logo: "/images/clients/lodha.png",
//     website: "https://www.lodhagroup.com",
//   },
//   {
//     name: "Reliance Industries",
//     sector: "Industrial",
//     category: "Industrial",
//     projects: 5,
//     logo: "/images/clients/reliance.png",
//     website: "https://www.ril.com",
//   },
//   {
//     name: "Phoenix Mills",
//     sector: "Retail",
//     category: "Private",
//     projects: 4,
//     logo: "/images/clients/phoenix.png",
//     website: "https://www.thephoenixmills.com",
//   },
//   {
//     name: "Godrej Properties",
//     sector: "Construction",
//     category: "Private",
//     projects: 7,
//     logo: "/images/clients/godrej.png",
//     website: "https://www.godrejproperties.com",
//   },
// ];

// const FewClients = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredClients =
//     activeCategory === "All"
//       ? fewClientsData
//       : fewClientsData.filter((c) => c.category === activeCategory);

//   const visibleList = filteredClients.concat(filteredClients);

//   return (
//     <div className="few-clients-wrapper">
//       <h2 className="few-clients-title">Few of Our Clients</h2>

//       {/* FILTER TABS */}
//       <div className="filter-tabs">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={`filter-btn ${
//               activeCategory === cat ? "active" : ""
//             }`}
//             onClick={() => setActiveCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* MARQUEE */}
//       <div className="marquee">
//         <div className="marquee-track">
//           {visibleList.map((client, index) => (
//             <a
//               key={index}
//               href={client.website}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="client-card"
//             >
//               <div className="client-logo">
//                 <img src={client.logo} alt={client.name} />
//               </div>
//               <p className="client-name">{client.name}</p>
//               <span className="client-sector">{client.sector}</span>
//               <span className="client-projects">
//                 {client.projects} Projects
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FewClients;



import React, { useState, useEffect } from "react";
import "../styles/FewClients.css";

const categories = ["All", "Private", "Industrial"];

const fewClientsData = [
  {
    name: "Lodha Group",
    sector: "Real Estate",
    category: "Private",
    projects: 12,
    logo: "/images/clients/lodha.png",
    website: "https://www.lodhagroup.com",
  },
  {
    name: "Reliance Industries",
    sector: "Industrial",
    category: "Industrial",
    projects: 5,
    logo: "/images/clients/reliance.png",
    website: "https://www.ril.com",
  },
  {
    name: "Phoenix Mills",
    sector: "Retail",
    category: "Private",
    projects: 4,
    logo: "/images/clients/phoenix.png",
    website: "https://www.thephoenixmills.com",
  },
  {
    name: "Godrej Properties",
    sector: "Construction",
    category: "Private",
    projects: 7,
    logo: "/images/clients/godrej.png",
    website: "https://www.godrejproperties.com",
  },
  {
    name: "TATA Steel",
    sector: "Industrial & Infrastructure",
    category: "Industrial",
    projects: 3,
    logo: "/images/clients/tata.png",
    website: "https://www.tatasteel.com",
  },
];

const FewClients = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isHovered, setIsHovered] = useState(false);

  const filteredClients =
    activeCategory === "All"
      ? fewClientsData
      : fewClientsData.filter((c) => c.category === activeCategory);

  const length = filteredClients.length;

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(1);
  }, [activeCategory]);

  // Autoplay logic: 1 card change every 1 second
  useEffect(() => {
    if (length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (direction === 1) {
          if (prev >= length - 1) {
            // reverse at end
            setDirection(-1);
            return length > 1 ? length - 2 : 0;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            // reverse at beginning
            setDirection(1);
            return length > 1 ? 1 : 0;
          }
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [direction, length, isHovered]);

  const handlePrev = () => {
    if (length <= 1) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  const handleNext = () => {
    if (length <= 1) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const getIndex = (offset) => {
    if (length === 0) return 0;
    return (currentIndex + offset + length) % length;
  };

  let visibleIndices = [];
  if (length === 1) {
    visibleIndices = [currentIndex];
  } else if (length === 2) {
    visibleIndices = [getIndex(-1), getIndex(0)];
  } else {
    visibleIndices = [getIndex(-1), getIndex(0), getIndex(1)];
  }

  const getPositionClass = (idx) => {
    if (length === 1 || idx === currentIndex) return "center-card";
    const leftIndex = getIndex(-1);
    if (idx === leftIndex) return "left-card";
    return "right-card";
  };

  if (length === 0) {
    return null;
  }

  return (
    <div className="few-clients-wrapper">
      <h2 className="few-clients-title">Few of Our Clients</h2>

      {/* FILTER TABS */}
      <div className="filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CAROUSEL */}
      <div
        className="clients-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        {length > 1 && (
          <button
            className="nav-arrow left-arrow"
            onClick={handlePrev}
            aria-label="Previous client"
          >
            <span>‹</span>
          </button>
        )}

        <div className="clients-carousel-track">
          {visibleIndices.map((idx) => {
            const client = filteredClients[idx];
            const positionClass = getPositionClass(idx);
            return (
              <a
                key={`${client.name}-${idx}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`client-card ${positionClass}`}
              >
                <div className="client-logo">
                  <img src={client.logo} alt={client.name} />
                </div>
                <p className="client-name">{client.name}</p>
                <span className="client-sector">{client.sector}</span>
                <span className="client-projects">
                  {client.projects} Projects
                </span>
              </a>
            );
          })}
        </div>

        {/* Right Arrow */}
        {length > 1 && (
          <button
            className="nav-arrow right-arrow"
            onClick={handleNext}
            aria-label="Next client"
          >
            <span>›</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default FewClients;
