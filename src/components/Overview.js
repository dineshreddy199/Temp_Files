import React from "react";
import "../styles/Overview.css";


const Overview = () => {
  return (
    <>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Building Trust Since 2010</h1>

          <p className="sub-text">
            SN ENGINEERS is a North-India based company that specializes in
            planning and designing services, committed to delivering excellence
            and consistent client satisfaction.
          </p>

          <div className="stats-row">
            <div className="stat-box">
              <h2>50+</h2>
              <p>Successful Projects</p>
            </div>
            <div className="stat-box">
              <h2>14+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="stat-box">
              <h2>200+</h2>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-section">
        <h2>Who We Are</h2>
        <p className="who-desc">
          From the very beginning, our ambition has been to build solutions that
          define excellence, lasting by value systems and adhering to
          uncompromising safety protocols and quality benchmarks.
        </p>

        <div className="features-row">
          <div className="feature-box">
            <h3>Our Philosophy</h3>
            <p>
              Client satisfaction and transparent work ethics form the core of
              our company.
            </p>
          </div>

          <div className="feature-box">
            <h3>Quality Focus</h3>
            <p>
              Delivering high-quality services with precision and accuracy.
            </p>
          </div>

          <div className="feature-box">
            <h3>Safety First</h3>
            <p>
              Committed to enforcing safe working standards and safety protocols.
            </p>
          </div>
        </div>
      </section>

      {/* MANAGEMENT */}
      <section>
        <div className="leadership-container">
      <div className="leadership-wrapper">

        <div className="leader-image-box">
          <img
            src="https://via.placeholder.com/350x400"
            alt="Leader"
            className="leader-image"
          />
        </div>

        <div className="leader-details">
          <h4 className="leader-tag">Management Leadership</h4>

          <h2 className="leader-name">Mr. Sanjay</h2>
          <p className="leader-position">Degree in Mechanical Engineering</p>

          <p className="leader-description">
            After graduation, Mr. Sanjay joined a well-reputed organization 
            rendering a variety of services to different clients like Hotels, 
            Malls, Hospitals, Academic and Hostel Blocks, and High Raised 
            Residential Towers. Under his leadership, the group has built up 
            a high-performance team of experienced, talented, and adaptable 
            personnel ready to work on turnkey projects at short notice 
            anywhere in India.
          </p>
        </div>

      </div>
    </div>
      </section>

      <section>
        <div className="overview-container">
      <div className="overview-content">

        <div className="section">
          <h2 className="title">Quality Policy Statement</h2>

          <p className="description">
            SN Engineers aim for the highest standard of building and services
            within the India PHE & FFS works and intend to retain their
            position as a leading contracting organization by continuing to
            provide client satisfaction.
          </p>

          <ul className="bullet-list">
            <li>To have a real understanding of clients and their business requirements.</li>
            <li>To win work not solely on price but through innovation and added value.</li>
            <li>To continually strive to improve our performance through analysis.</li>
          </ul>
        </div>

        <div className="section">
          <h2 className="title">Safety Commitment</h2>

          <p className="description">
            We give utmost priority to safety and health of all employees.
            Safety is not compromised for cost, schedule, or any component of
            work. We strive to achieve zero accidents.
          </p>

          <div className="safety-box">
            <h3>Our Safety Protocols Include:</h3>

            <div className="safety-grid">
              <ul>
                <li>Site-Specific Safety Plans</li>
                <li>Strict PPE Compliance</li>
                <li>Hazard Analysis (JSA)</li>
              </ul>

              <ul>
                <li>Daily Toolbox Meetings</li>
                <li>Regular Safety Training</li>
                <li>Emergency Procedures</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
      </section>

      {/* FOOTER */}
    </>
  );
};

export default Overview;
