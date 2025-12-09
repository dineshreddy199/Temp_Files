// src/pages/Equipments.js
import React from "react";
import "../styles/Equipments.css";

// const rows = [
//   "Drill Machines",
//   "PHE Cutting Machines",
//   "Grooving Machines",
//   "Welding Machines",
//   "Hydro Testing Pumps",
//   "Pipe Threading Machines",
//   "Core Cutting Machines",
//   "Grinders",
//   "Concrete Mixers",
//   "Scaffolding Sets",
// ];
// edited
const equipmentList = [
  { item: "Drill Machines", units: "25 NOS" },
  { item: "Arc Cutting Machines", units: "30 NOS" },
  { item: "Electric Grinders", units: "10 NOS" },
  { item: "Concrete Breaking Machine", units: "05 NOS" },
  { item: "Hydraulic Testing Pumps", units: "01 NOS" },
  { item: "Pipe Joint Coating Tools & Accessories", units: "15 SETs" },
  { item: "Pipe wrenches & Tongs with Chains", units: "07 NOS" },
  { item: "Hand Testing Pump", units: "10 NOS" },
  { item: "Pipe Threading Die Set (½ in to 2½ in)", units: "15 NOS" },
  { item: "Pipe Threading Die Set (3/8 in to 50 mm to 80 mm)", units: "05 NOS" },
  { item: "Pipe Threading Die Set (up to 65 mm & 80 mm)", units: "04 NOS" },
  { item: "Welding Machines", units: "12 NOS" },
  { item: "Gas Cutting Machines", units: "08 NOS" },
  { item: "Pipe Cutting Machines", units: "05 NOS" },
  { item: "Hose Pipe", units: "500 MTR" },
  { item: "Cable", units: "3,000 MTR" },
  { item: "Hammer", units: "50 NOS" },
  { item: "Chisel", units: "50 NOS" },
  { item: "Tool Set (6mm – 40 mm)", units: "02 NOS" },
  { item: "HDPE Joining Machine (Butt Fusion Type)", units: "01 NOS" },
];


const Equipments = () => {
  return (
    <section className="equip">
      <div className="equip-hero">
        <div className="equip-hero-content">
          <h1>Our Machinery &amp; Equipment</h1>
          <p>
            A comprehensive inventory of high‑quality tools and machinery to
            support our wide range of construction and engineering projects.
          </p>
        </div>
      </div>

      {/* <div className="equip-body">
        <div className="equip-table-card">
          <div className="equip-table-header">
            <span>Sr. No.</span>
            <span>Particulars</span>
            <span>Qty</span>
          </div>
          {rows.map((item, index) => (
            <div key={item} className="equip-row">
              <span>{index + 1}</span>
              <span>{item}</span>
              <span>—</span>
            </div>
          ))}
        </div>
      </div> */}
      {/* Edited */}
      <div className="equipment-page">
      <div className="equipment-header">
        <h2>Equipment Inventory</h2>
        <p>
          We maintain a robust stock of essential tools and specialised machinery to
          ensure uninterrupted project execution.
        </p>
      </div>

      <div className="equipment-table-container">
        <table className="equipment-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Particular</th>
              <th>Unit</th>
            </tr>
          </thead>

          <tbody>
            {equipmentList.map((eq, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{eq.item}</td>
                <td>{eq.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom three feature boxes */}
      <div className="equipment-features">
        <div className="feature-box">
          <h4>Regular Maintenance</h4>
          <p>Equipment is regularly serviced to ensure performance & longevity.</p>
        </div>

        <div className="feature-box">
          <h4>Quality Tools</h4>
          <p>We invest in high-quality brands to guarantee precision & safety.</p>
        </div>

        <div className="feature-box">
          <h4>Safety First</h4>
          <p>
            All equipment undergo strict safety checks before being deployed.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Equipments;
