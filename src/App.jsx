import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import PackagesPage from "./pages/PackagesPage";
import PaymentsPage from "./pages/PaymentsPage";
import NetworkPage from "./pages/NetworkPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";


function App() {

  const location = useLocation();

  const isLanding = location.pathname === "/";


  return (
    <>

      {!isLanding && <Sidebar />}

      {!isLanding && <Navbar />}



      <main
        style={{
          marginLeft: isLanding ? "0" : "260px",
          marginTop: isLanding ? "0" : "90px",
          padding: isLanding ? "0" : "25px",
          background: "#f4f7fc",
          minHeight: "100vh",
        }}
      >

        <Routes>

          <Route 
            path="/" 
            element={<LandingPage />} 
          />


          <Route 
            path="/dashboard" 
            element={<DashboardPage />} 
          />


          <Route 
            path="/customers" 
            element={<CustomersPage />} 
          />


          <Route 
            path="/packages" 
            element={<PackagesPage />} 
          />


          <Route 
            path="/payments" 
            element={<PaymentsPage />} 
          />


          <Route 
            path="/network" 
            element={<NetworkPage />} 
          />


          <Route 
            path="/reports" 
            element={<ReportsPage />} 
          />


          <Route 
            path="/settings" 
            element={<SettingsPage />} />

        </Routes>

      </main>

    </>
  );
}


export default App;