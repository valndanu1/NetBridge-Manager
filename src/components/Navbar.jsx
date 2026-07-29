import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {

  const [brownMode, setBrownMode] = useState(false);


  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "brown") {
      document.body.classList.add("brown-theme");
      setBrownMode(true);
    }

  }, []);



  function toggleTheme() {

    if (brownMode) {

      document.body.classList.remove("brown-theme");

      localStorage.setItem(
        "theme",
        "white"
      );

      setBrownMode(false);

    } else {

      document.body.classList.add("brown-theme");

      localStorage.setItem(
        "theme",
        "brown"
      );

      setBrownMode(true);

    }

  }



  return (

    <header className="navbar">

      <h2>
        NetBridge ISP Manager
      </h2>


      <div className="navbar-right">


        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {brownMode ? "🤎 Brown" : "⚪ White"}
        </button>



        <button className="notify-btn">
          🔔
        </button>



        <div className="user">

          <span>
            👤
          </span>

          <p>
            Admin
          </p>

        </div>


      </div>

    </header>

  );
}


export default Navbar;