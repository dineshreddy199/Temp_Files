// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="main-footer">
//       <p>© 2025 SN ENGINEERS — All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">

      {/* Top Section */}
      <div className="footer-content">

        {/* Column 1 – About */}
        <div className="footer-col">
          <h2 className="footer-logo">SN ENGINEERS</h2>
          <p className="footer-about">
            Specializing in Plumbing and Firefighting services since 2010.
          </p>
        </div>

        {/* Column 2 – Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Clients</li>
          </ul>
        </div>

        {/* Column 3 – Company */}
        <div className="footer-col">
          <h3 className="footer-title">Company</h3>
          <ul>
            <li>Mission</li>
            <li>Vision</li>
            <li>Work Force</li>
            <li>Equipments</li>
          </ul>
        </div>

        {/* Column 4 – Contact Info */}
        <div className="footer-col">
          <h3 className="footer-title">Contact Info</h3>
          <ul>
            <li>+91 9393392655</li>
            <li>snengineers777@gmail.com</li>
            <li>Hyderabad & Tirupathi</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2025 SN ENGINEERS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
