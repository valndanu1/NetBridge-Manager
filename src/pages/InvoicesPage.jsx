import { useEffect, useState } from "react";

function InvoicesPage() {
  const [invoices, setInvoices] = useState(() => {
    const saved = localStorage.getItem("invoices");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    customer: "",
    package: "",
    amount: "",
    status: "Pending",
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function addInvoice(e) {
    e.preventDefault();

    if (!form.customer || !form.package || !form.amount) {
      alert("Please fill in all fields.");
      return;
    }

    const invoice = {
      id: Date.now(),
      invoiceNo: `INV-${Date.now().toString().slice(-5)}`,
      ...form,
      date: new Date().toLocaleDateString(),
    };

    setInvoices([invoice, ...invoices]);

    setForm({
      customer: "",
      package: "",
      amount: "",
      status: "Pending",
    });
  }

  function deleteInvoice(id) {
    if (window.confirm("Delete this invoice?")) {
      setInvoices(invoices.filter((invoice) => invoice.id !== id));
    }
  }

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>🧾 Invoice Management</h1>

      <form className="customer-form" onSubmit={addInvoice}>
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
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option>Pending</option>
          <option>Paid</option>
        </select>

        <button type="submit">
          Generate Invoice
        </button>
      </form>

      <br />

      <input
        type="text"
        placeholder="Search Customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <br />
      <br />

      <table className="customers-table">
        <thead>
          <tr>
            <th>Invoice No.</th>
            <th>Customer</th>
            <th>Package</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredInvoices.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No invoices found.
              </td>
            </tr>
          ) : (
            filteredInvoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.customer}</td>
                <td>{invoice.package}</td>
                <td>Ksh {Number(invoice.amount).toLocaleString()}</td>
                <td>{invoice.date}</td>
                <td>
                  <span
                    className={
                      invoice.status === "Paid"
                        ? "badge active"
                        : "badge inactive"
                    }
                  >
                    {invoice.status}
                  </span>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteInvoice(invoice.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InvoicesPage;