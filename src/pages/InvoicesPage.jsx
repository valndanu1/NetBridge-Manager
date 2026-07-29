import { useEffect, useState } from "react";

function InvoicesPage() {

  const [invoices, setInvoices] = useState(() => {
    const savedInvoices = localStorage.getItem("invoices");
    return savedInvoices ? JSON.parse(savedInvoices) : [];
  });


  const [form, setForm] = useState({
    customer: "",
    package: "",
    amount: "",
    status: "Pending",
  });


  const [search, setSearch] = useState("");


  useEffect(() => {
    localStorage.setItem(
      "invoices",
      JSON.stringify(invoices)
    );
  }, [invoices]);



  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  }



  function addInvoice(e) {

    e.preventDefault();


    if (
      !form.customer ||
      !form.package ||
      !form.amount
    ) {

      alert("Please fill all invoice details");
      return;

    }



    const newInvoice = {

      id: Date.now(),

      invoiceNo:
        `INV-${Date.now().toString().slice(-6)}`,

      customer: form.customer,

      package: form.package,

      amount: form.amount,

      status: form.status,

      date:
        new Date().toLocaleDateString(),

    };



    setInvoices([
      newInvoice,
      ...invoices
    ]);



    setForm({

      customer: "",
      package: "",
      amount: "",
      status: "Pending",

    });

  }




  function deleteInvoice(id) {

    const confirmDelete =
      window.confirm(
        "Delete this invoice?"
      );


    if(confirmDelete){

      setInvoices(
        invoices.filter(
          invoice =>
          invoice.id !== id
        )
      );

    }

  }





  function printInvoice(invoice) {


    const printWindow =
      window.open(
        "",
        "_blank"
      );


    printWindow.document.write(`

      <html>

      <head>

      <title>
      ${invoice.invoiceNo}
      </title>


      <style>

      body{
        font-family: Arial;
        padding:40px;
      }


      .invoice{

        max-width:600px;
        margin:auto;
        border:1px solid #ddd;
        padding:30px;

      }


      h1{

        text-align:center;

      }


      hr{

        margin:20px 0;

      }


      </style>


      </head>


      <body>


      <div class="invoice">


      <h1>
      🌐 NetBridge ISP
      </h1>


      <hr/>


      <h2>
      Invoice
      </h2>


      <p>
      <b>Invoice No:</b>
      ${invoice.invoiceNo}
      </p>


      <p>
      <b>Date:</b>
      ${invoice.date}
      </p>



      <p>
      <b>Customer:</b>
      ${invoice.customer}
      </p>



      <p>
      <b>Package:</b>
      ${invoice.package}
      </p>



      <p>
      <b>Amount:</b>
      Ksh ${Number(invoice.amount).toLocaleString()}
      </p>



      <p>
      <b>Status:</b>
      ${invoice.status}
      </p>


      <hr/>


      <p>
      Thank you for choosing NetBridge ISP.
      </p>


      </div>


      </body>

      </html>

    `);


    printWindow.document.close();


    printWindow.print();

  }





  const filteredInvoices =
    invoices.filter(invoice =>
      invoice.customer
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
    );





  return (

    <div>


      <h1>
      🧾 Invoice Management
      </h1>



      <form
        className="customer-form"
        onSubmit={addInvoice}
      >


        <input

          type="text"

          name="customer"

          placeholder="Customer Name"

          value={form.customer}

          onChange={handleChange}

        />



        <input

          type="text"

          name="package"

          placeholder="Internet Package"

          value={form.package}

          onChange={handleChange}

        />



        <input

          type="number"

          name="amount"

          placeholder="Amount (Ksh)"

          value={form.amount}

          onChange={handleChange}

        />



        <select

          name="status"

          value={form.status}

          onChange={handleChange}

        >

          <option>
          Pending
          </option>


          <option>
          Paid
          </option>


        </select>



        <button type="submit">

          Generate Invoice

        </button>



      </form>




      <br/>




      <input

        className="search-box"

        type="text"

        placeholder="Search customer..."

        value={search}

        onChange={
          e => setSearch(e.target.value)
        }

      />




      <br/><br/>





      <table className="customers-table">


      <thead>


      <tr>

      <th>
      Invoice No
      </th>


      <th>
      Customer
      </th>


      <th>
      Package
      </th>


      <th>
      Amount
      </th>


      <th>
      Date
      </th>


      <th>
      Status
      </th>


      <th>
      Action
      </th>


      </tr>


      </thead>





      <tbody>


      {
        filteredInvoices.length === 0 ?

        (

        <tr>

        <td colSpan="7">

        No invoices available

        </td>

        </tr>

        )


        :


        filteredInvoices.map(invoice => (


        <tr key={invoice.id}>


        <td>
        {invoice.invoiceNo}
        </td>


        <td>
        {invoice.customer}
        </td>


        <td>
        {invoice.package}
        </td>


        <td>
        Ksh {Number(invoice.amount).toLocaleString()}
        </td>


        <td>
        {invoice.date}
        </td>


        <td>
        {invoice.status}
        </td>


        <td>


        <button
        onClick={() =>
          printInvoice(invoice)
        }
        >

        🖨 Print

        </button>



        <button

        className="delete-btn"

        onClick={() =>
          deleteInvoice(invoice.id)
        }

        >

        🗑 Delete

        </button>



        </td>


        </tr>


        ))

      }


      </tbody>


      </table>



    </div>

  );

}


export default InvoicesPage;