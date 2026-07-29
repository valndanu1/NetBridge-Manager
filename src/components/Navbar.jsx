import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <header className="navbar">
      <h2>NetBridge ISP Manager</h2>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search customers..."
          className="search-box"
        />

        <button className="notify-btn">🔔</button>

        <div className="user">
          <span>👤</span>
          <p>Admin</p>
        </div>

        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;