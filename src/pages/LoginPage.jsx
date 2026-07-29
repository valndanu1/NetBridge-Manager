import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // Temporary demo credentials
    if (username === "admin" && password === "admin123") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🌐 NetBridge ISP Manager</h1>
        <p>Sign in to continue</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label style={{ display: "block", marginBottom: "15px" }}>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>

          {error && (
            <p style={{ color: "red", marginBottom: "15px" }}>
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;