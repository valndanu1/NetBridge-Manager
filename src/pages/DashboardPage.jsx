import { useEffect, useState } from "react";
import "../styles/Dashboard.css";


function DashboardPage() {

  const [stats, setStats] = useState({
    customers: 0,
    active: 0,
    inactive: 0,
    revenue: 0,
    paid: 0,
    pending: 0,
  });



  useEffect(() => {

    const customers =
      JSON.parse(localStorage.getItem("customers")) || [];


    const payments =
      JSON.parse(localStorage.getItem("payments")) || [];



    const activeCustomers =
      customers.filter(
        (customer) => customer.status === "Active"
      );



    const inactiveCustomers =
      customers.filter(
        (customer) => customer.status === "Inactive"
      );



    const paidPayments =
      payments.filter(
        (payment) => payment.status === "Paid"
      );



    const pendingPayments =
      payments.filter(
        (payment) => payment.status === "Pending"
      );



    const revenue =
      paidPayments.reduce(
        (total, payment) =>
          total + Number(payment.amount),
        0
      );



    setStats({

      customers: customers.length,

      active: activeCustomers.length,

      inactive: inactiveCustomers.length,

      revenue,

      paid: paidPayments.length,

      pending: pendingPayments.length,

    });


  }, []);




  return (

    <div>


      <h1>
        📊 ISP Dashboard
      </h1>


      <p className="dashboard-text">
        Welcome to NetBridge ISP Management System
      </p>



      <div className="dashboard-grid">


        <Card
          title="Total Customers"
          value={stats.customers}
        />



        <Card
          title="Active Customers"
          value={stats.active}
        />



        <Card
          title="Inactive Customers"
          value={stats.inactive}
        />



        <Card
          title="Total Revenue"
          value={`Ksh ${stats.revenue.toLocaleString()}`}
        />



        <Card
          title="Paid Payments"
          value={stats.paid}
        />



        <Card
          title="Pending Payments"
          value={stats.pending}
        />


      </div>


    </div>

  );

}




function Card({ title, value }) {


  return (

    <div className="dashboard-card">


      <h3>
        {title}
      </h3>



      <h2>
        {value}
      </h2>


    </div>

  );

}



export default DashboardPage;
