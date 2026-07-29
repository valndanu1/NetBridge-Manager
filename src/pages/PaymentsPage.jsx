import { useEffect, useState } from "react";
import "../styles/Customer.css";
function PaymentsPage() {

  const [customers, setCustomers] = useState([]);

  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem("payments");

    return saved
      ? JSON.parse(saved)
      : [];
  });


  const [form, setForm] = useState({
    customer: "",
    package: "",
    amount: "",
    status: "Paid",
    date: "",
  });



  useEffect(() => {

    const savedCustomers = localStorage.getItem("customers");

    if (savedCustomers) {
      setCustomers(JSON.parse(savedCustomers));
    }

  }, []);




  useEffect(() => {

    localStorage.setItem(
      "payments",
      JSON.stringify(payments)
    );

  }, [payments]);





  function handleCustomerChange(e) {

    const customer = customers.find(
      (c) => c.id === Number(e.target.value)
    );


    setForm({
      ...form,
      customer: customer.name,
      package: customer.package,
      amount: customer.amount,
    });

  }





  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }




  function addPayment(e) {

    e.preventDefault();


    if (!form.customer || !form.date) {
      alert("Select customer and date");
      return;
    }


    setPayments([
      ...payments,
      {
        id: Date.now(),
        ...form,
      },
    ]);


    setForm({
      customer: "",
      package: "",
      amount: "",
      status: "Paid",
      date: "",
    });

  }




  return (

    <div>

      <h1>
        Payment Management
      </h1>



      <form
        className="customer-form"
        onSubmit={addPayment}
      >


        <select
          onChange={handleCustomerChange}
        >

          <option>
            Select Customer
          </option>


          {customers.map((customer)=>(

            <option
              key={customer.id}
              value={customer.id}
            >
              {customer.name}
            </option>

          ))}

        </select>



        <input
          type="text"
          placeholder="Package"
          value={form.package}
          readOnly
        />



        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          readOnly
        />



        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />



        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >

          <option>
            Paid
          </option>

          <option>
            Pending
          </option>

        </select>



        <button 
  type="submit"
  className="payment-btn"
>
  💳 Record Payment
</button>


      </form>




      <br />


      <table className="customers-table">

        <thead>

          <tr>
            <th>Customer</th>
            <th>Package</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

        </thead>



        <tbody>


          {payments.length === 0 ? (

            <tr>

              <td colSpan="5">
                No payments recorded
              </td>

            </tr>


          ) : (

            payments.map((payment)=>(

              <tr key={payment.id}>

                <td>
                  {payment.customer}
                </td>


                <td>
                  {payment.package}
                </td>


                <td>
                  Ksh {Number(payment.amount).toLocaleString("en-US")}
                </td>


                <td>
                  {payment.date}
                </td>


                <td>

                  <span
                    className={
                      payment.status === "Paid"
                      ? "badge active"
                      : "badge inactive"
                    }
                  >
                    {payment.status}
                  </span>

                </td>


              </tr>

            ))

          )}


        </tbody>

      </table>


    </div>

  );
}


export default PaymentsPage;