import { useState } from "react";
import "../styles/Customer.css";
function NetworkPage() {

  const [devices, setDevices] = useState([
    {
      id: 1,
      device: "Main Router",
      ip: "192.168.1.1",
      mac: "00:1A:2B:3C:4D:5E",
      status: "Online",
      bandwidth: "500 Mbps",
    },
    {
      id: 2,
      device: "Access Point",
      ip: "192.168.1.10",
      mac: "11:22:33:44:55:66",
      status: "Online",
      bandwidth: "200 Mbps",
    },
  ]);



  function removeDevice(id) {

    setDevices(
      devices.filter(
        (device) => device.id !== id
      )
    );

  }



  return (
    <div>

      <h1>
        Network Monitoring
      </h1>


      <p>
        Monitor routers, devices and network status.
      </p>



      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"20px",
          margin:"20px 0"
        }}
      >

        <div className="card">
          <h3>Total Devices</h3>
          <h2>{devices.length}</h2>
        </div>


        <div className="card">
          <h3>Online Devices</h3>
          <h2>
            {
              devices.filter(
                d => d.status === "Online"
              ).length
            }
          </h2>
        </div>


        <div className="card">
          <h3>Network Status</h3>
          <h2>
            Active
          </h2>
        </div>

      </div>



      <table className="customers-table">

        <thead>

          <tr>
            <th>Device</th>
            <th>IP Address</th>
            <th>MAC Address</th>
            <th>Status</th>
            <th>Bandwidth</th>
            <th>Action</th>
          </tr>

        </thead>



        <tbody>

          {devices.map((device)=>(

            <tr key={device.id}>

              <td>
                {device.device}
              </td>


              <td>
                {device.ip}
              </td>


              <td>
                {device.mac}
              </td>


              <td>

                <span
  className={
    device.status === "Online"
    ? "network-status online"
    : "network-status offline"
  }
></span>

              </td>


              <td>
                {device.bandwidth}
              </td>


              <td>

                <button
                  onClick={() => removeDevice(device.id)}
                >
                  🗑 Remove
                </button>

              </td>

            </tr>

          ))}


        </tbody>

      </table>


    </div>
  );
}


export default NetworkPage;