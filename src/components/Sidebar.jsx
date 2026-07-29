import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">🌐 NetBridge</h2>

      <ul>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>

        <li>
          <Link to="/dashboard">📊 Dashboard</Link>
        </li>

        <li>
          <Link to="/customers">👥 Customers</Link>
        </li>

        <li>
          <Link to="/packages">📦 Packages</Link>
        </li>

        <li>
          <Link to="/payments">💳 Payments</Link>
        </li>

        <li>
          <Link to="/network">📡 Network</Link>
        </li>

        <li>
          <Link to="/reports">📈 Reports</Link>
        </li>

        <li>
          <Link to="/settings">⚙️ Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;