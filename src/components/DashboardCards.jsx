import "../styles/Dashboard.css";

function DashboardCards() {
  const customers = JSON.parse(localStorage.getItem("customers")) || [];

  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (c) => c.status === "Active"
  ).length;

  const inactiveCustomers = customers.filter(
    (c) => c.status === "Inactive"
  ).length;

  const revenue = customers.reduce(
    (sum, c) => sum + Number(c.amount || 0),
    0
  );

  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers,
      icon: "👥",
      color: "#1976d2",
    },
    {
      title: "Active Customers",
      value: activeCustomers,
      icon: "🟢",
      color: "#2e7d32",
    },
    {
      title: "Inactive Customers",
      value: inactiveCustomers,
      icon: "🔴",
      color: "#d32f2f",
    },
    {
      title: "Monthly Revenue",
      value: `$${revenue}`,
      icon: "💰",
      color: "#ff9800",
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{ borderLeft: `6px solid ${card.color}` }}
        >
          <div>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>

          <div className="card-icon">{card.icon}</div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;