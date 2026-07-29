import { useEffect, useState } from "react";
import "../styles/Customer.css";
function SettingsPage() {

  const [settings, setSettings] = useState({
    company: "",
    phone: "",
    email: "",
    location: "",
  });



  useEffect(() => {

    const saved =
      localStorage.getItem("settings");


    if (saved) {

      setSettings(
        JSON.parse(saved)
      );

    }

  }, []);




  function handleChange(e) {

    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });

  }




  function saveSettings(e) {

    e.preventDefault();


    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );


    alert("Settings saved successfully");

  }





  return (

    <div>

      <h1>
        System Settings
      </h1>


      <p>
        Manage your ISP company information.
      </p>



      <form
        className="customer-form"
        onSubmit={saveSettings}
      >


        <input
          type="text"
          name="company"
          placeholder="ISP Company Name"
          value={settings.company}
          onChange={handleChange}
        />



        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={settings.phone}
          onChange={handleChange}
        />



        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={settings.email}
          onChange={handleChange}
        />



        <input
          type="text"
          name="location"
          placeholder="Company Location"
          value={settings.location}
          onChange={handleChange}
        />



        <button type="submit">
          Save Settings
        </button>


      </form>


<div className="settings-info">
      

        <h2>
          Current ISP Information
        </h2>


        <p>
          <b>Name:</b> {settings.company}
        </p>


        <p>
          <b>Phone:</b> {settings.phone}
        </p>


        <p>
          <b>Email:</b> {settings.email}
        </p>


        <p>
          <b>Location:</b> {settings.location}
        </p>


      </div>


    </div>

  );

}


export default SettingsPage;