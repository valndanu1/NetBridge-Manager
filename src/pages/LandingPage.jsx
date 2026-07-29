import { Link } from "react-router-dom";
import "../styles/Landing.css";

function LandingPage() {

  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <h1>
            🌐 NetBridge ISP Manager
          </h1>

          <h2>
            Manage Your Internet Services Smarter
          </h2>

          <p>
            A complete ISP management system for managing
            customers, packages, payments, network devices
            and business reports in one platform.
          </p>


          <Link to="/dashboard">
            <button className="start-btn">
              Get Started
            </button>
          </Link>

        </div>


      </section>



      {/* Features Section */}
      <section className="features">

        <h2>
          Our Features
        </h2>


        <div className="feature-grid">


          <div className="feature-card">
            <h3>👥 Customer Management</h3>
            <p>
              Add, edit, search and manage ISP customers easily.
            </p>
          </div>



          <div className="feature-card">
            <h3>📦 Package Management</h3>
            <p>
              Create internet packages and manage pricing.
            </p>
          </div>



          <div className="feature-card">
            <h3>💳 Payment Tracking</h3>
            <p>
              Monitor customer payments and payment status.
            </p>
          </div>



          <div className="feature-card">
            <h3>📡 Network Monitoring</h3>
            <p>
              Track routers, IP addresses and network devices.
            </p>
          </div>



          <div className="feature-card">
            <h3>📈 Reports & Analytics</h3>
            <p>
              View business performance and customer statistics.
            </p>
          </div>



          <div className="feature-card">
            <h3>⚙️ Easy Configuration</h3>
            <p>
              Manage ISP information and system settings.
            </p>
          </div>


        </div>


      </section>



      {/* Footer */}
      <footer className="landing-footer">

        <h3>
          NetBridge ISP Manager
        </h3>

        <p>
          Connecting businesses and customers through smart ISP solutions.
        </p>

        <p>
          © 2026 NetBridge. All rights reserved.
        </p>

      </footer>


    </div>
  );
}


export default LandingPage;