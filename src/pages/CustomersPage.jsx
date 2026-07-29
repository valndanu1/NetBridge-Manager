import { useEffect, useState } from "react";
import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";

function CustomersPage() {

  const [customers, setCustomers] = useState(() => {
    const saved = localStorage.getItem("customers");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "John Mwangi",
            phone: "0712345678",
            package: "20 Mbps",
            amount: 25,
            status: "Active",
          },
          {
            id: 2,
            name: "Mary Wambui",
            phone: "0723456789",
            package: "10 Mbps",
            amount: 15,
            status: "Inactive",
          },
        ];
  });


  const [search, setSearch] = useState("");

  const [editingCustomer, setEditingCustomer] = useState(null);


  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);



  function addCustomer(customer) {
    setCustomers([
      ...customers,
      customer
    ]);
  }



  function deleteCustomer(id) {
    setCustomers(
      customers.filter(
        (customer) => customer.id !== id
      )
    );
  }



  function editCustomer(customer) {
    setEditingCustomer(customer);
  }



  function updateCustomer(updatedCustomer) {

    setCustomers(
      customers.map((customer) =>
        customer.id === updatedCustomer.id
          ? updatedCustomer
          : customer
      )
    );

    setEditingCustomer(null);
  }



  function cancelEdit() {
    setEditingCustomer(null);
  }



  const filteredCustomers = customers.filter((customer) =>
    customer.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );



  return (
    <div>

      <h1>
        Customer Management
      </h1>


      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          width:"300px",
          padding:"10px",
          margin:"20px 0"
        }}
      />


      <CustomerForm
        onAddCustomer={addCustomer}
        editingCustomer={editingCustomer}
        onUpdateCustomer={updateCustomer}
        onCancelEdit={cancelEdit}
      />



      <br />


      <CustomerTable
        customers={filteredCustomers}
        onDelete={deleteCustomer}
        onEdit={editCustomer}
      />


    </div>
  );
}


export default CustomersPage;