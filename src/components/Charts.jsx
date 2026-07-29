import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "../styles/Dashboard.css";

const revenueData = [
  { month: "Jan", revenue: 1800 },
  { month: "Feb", revenue: 2200 },
  { month: "Mar", revenue: 2800 },
  { month: "Apr", revenue: 3100 },
  { month: "May", revenue: 3600 },
  { month: "Jun", revenue: 4250 },
];

const customerData = [
  { name: "Active", value: 210 },
  { name: "Inactive", value: 40 },
];

const COLORS = ["#2e7d32", "#d32f2f"];

function Charts() {
  return (
    <div className="charts-container">
      <div className="chart-card">
        <h3>Monthly Revenue</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Customer Status</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={customerData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {customerData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;