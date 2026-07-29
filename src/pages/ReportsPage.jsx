import { useEffect, useState } from "react";
import "../styles/Customer.css";
function ReportsPage() {

  const [report, setReport] = useState({
    customers: 0,
    active: 0,
    inactive: 0,
    revenue: 0,
    paid: 0,
    pending: 0,
    packages: {},
  });



  useEffect(() => {

    const customers =
      JSON.parse(localStorage.getItem("customers")) || [];


    const payments =
      JSON.parse(localStorage.getItem("payments")) || [];




    const active =
      customers.filter(
        (customer) => customer.status === "Active"
      ).length;



    const inactive =
      customers.filter(
        (customer) => customer.status === "Inactive"
      ).length;



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



    const packageCount = {};

    customers.forEach((customer)=>{

      if(packageCount[customer.package]){

        packageCount[customer.package]++;

      } else {

        packageCount[customer.package] = 1;

      }

    });



    setReport({

      customers: customers.length,
      active,
      inactive,
      revenue,
      paid: paidPayments.length,
      pending: pendingPayments.length,
      packages: packageCount,

    });


  }, []);




  return (

    <div>

      <h1>
        ISP Reports
      </h1>


      <p>
        View system performance and customer statistics.
      </p>



      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"20px",
          marginTop:"25px"
        }}
      >


        <Card
          title="Total Customers"
          value={report.customers}
        />


        <Card
          title="Active Customers"
          value={report.active}
        />


        <Card
          title="Inactive Customers"
          value={report.inactive}
        />


        <Card
          title="Revenue"
          value={`Ksh ${report.revenue}`}
        />


        <Card
          title="Paid Payments"
          value={report.paid}
        />


        <Card
          title="Pending Payments"
          value={report.pending}
        />


      </div>



      <h2 style={{marginTop:"30px"}}>
        Package Distribution
      </h2>



      <table className="customers-table">

        <thead>

          <tr>
            <th>Package</th>
            <th>Customers</th>
          </tr>

        </thead>


        <tbody>

          {Object.keys(report.packages).map((pkg)=>(

            <tr key={pkg}>

              <td>
                {pkg}
              </td>

              <td>
                {report.packages[pkg]}
              </td>

            </tr>

          ))}


        </tbody>


      </table>


    </div>

  );

}




function Card({title,value}) {

  return (

   <div className="report-card">

      <h3>
        {title}
      </h3>


      <h2>
        {value}
      </h2>


    </div>

  );

}


export default ReportsPage;