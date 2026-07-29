import "../styles/Dashboard.css";

function RecentCustomers() {
  const customers = [
    {
      id: 1,
      name: "John Mwangi",
      phone: "0712345678",
      package: "20 Mbps",
      status: "Active",
      payment: "Paid",
    },
    {
      id: 2,
      name: "Mary Wambui",
      phone: "0723456789",
      package: "10 Mbps",
      status: "Active",
      payment: "Paid",
    },
    {
      id: 3,
      name: "Kevin Otieno",
      phone: "0734567890",
      package: "30 Mbps",
      status: "Inactive",
      payment: "Pending",
    },
    {
      id: 4,
      name: "Faith Njeri",
      phone: "0745678901",
      package: "15 Mbps",
      status: "Active",
      payment: "Paid",
    },
  ];

  return (
    <div className="table-card">
      <h3>Recent Customers</h3>

      <table className="customers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Package</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.package}</td>
              <td>
                <span
                  className={
                    customer.status === "Active"
                      ? "badge active"
                      : "badge inactive"
                  }
                >
                  {customer.status}
                </span>
              </td>

              <td>{customer.payment}</td>

              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentCustomers;