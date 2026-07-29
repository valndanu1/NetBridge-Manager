import "../styles/Customer.css";
function CustomerTable({ customers, onDelete, onEdit }) {
  return (
    <div className="table-card">

      <table className="customers-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Package</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>

          {customers.length === 0 ? (

            <tr>
              <td 
                colSpan="6" 
                style={{
                  textAlign: "center",
                  padding: "20px"
                }}
              >
                No customers found.
              </td>
            </tr>

          ) : (

            customers.map((customer) => (

              <tr key={customer.id}>

                <td>{customer.name}</td>

                <td>{customer.phone}</td>

                <td>{customer.package}</td>

                <td>
                  ${Number(customer.amount).toLocaleString("en-US")}
                </td>


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


                <td>

                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => onEdit && onEdit(customer)}
                  >
                    ✏️ Edit
                  </button>


                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => onDelete(customer.id)}
                  >
                    🗑 Delete
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

export default CustomerTable;