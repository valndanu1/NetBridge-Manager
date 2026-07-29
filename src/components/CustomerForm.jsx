import { useState, useEffect } from "react";
import "../styles/Customer.css";
function CustomerForm({
  onAddCustomer,
  editingCustomer,
  onUpdateCustomer,
  onCancelEdit,
}) {

  const [packages, setPackages] = useState([]);


  const emptyForm = {
    name: "",
    phone: "",
    package: "",
    amount: "",
    status: "Active",
  };


  const [form, setForm] = useState(emptyForm);



  useEffect(() => {

    const savedPackages = localStorage.getItem("packages");

    if (savedPackages) {
      setPackages(JSON.parse(savedPackages));
    }

  }, []);



  useEffect(() => {

    if (editingCustomer) {
      setForm(editingCustomer);
    } else {
      setForm(emptyForm);
    }

  }, [editingCustomer]);




  function handleChange(e) {

    const { name, value } = e.target;


    setForm({
      ...form,
      [name]: value,
    });

  }




  function handlePackageChange(e) {

    const selectedPackage = packages.find(
      (pkg) => pkg.id === Number(e.target.value)
    );


    setForm({
      ...form,
      package: selectedPackage.speed,
      amount: selectedPackage.price,
    });

  }





  function handleSubmit(e) {

    e.preventDefault();


    if (!form.name || !form.phone || !form.package) {
      alert("Please fill all required fields");
      return;
    }



    if (editingCustomer) {

      onUpdateCustomer(form);

    } else {

      onAddCustomer({
        id: Date.now(),
        ...form,
      });

    }


    setForm(emptyForm);

  }





  return (

    <form 
      className="customer-form"
      onSubmit={handleSubmit}
    >


      <input
        type="text"
        name="name"
        placeholder="Customer Name"
        value={form.name}
        onChange={handleChange}
      />


      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />



      <select
        value=""
        onChange={handlePackageChange}
      >

        <option>
          Select Package
        </option>


        {packages.map((pkg)=>(

          <option
            key={pkg.id}
            value={pkg.id}
          >
            {pkg.name} - {pkg.speed} - Ksh {pkg.price}
          </option>

        ))}


      </select>



      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        readOnly
      />



      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >

        <option>
          Active
        </option>

        <option>
          Inactive
        </option>

      </select>



      <button type="submit">
        {editingCustomer 
          ? "Update Customer" 
          : "Add Customer"}
      </button>


      {editingCustomer && (

        <button
          type="button"
          onClick={onCancelEdit}
        >
          Cancel
        </button>

      )}


    </form>

  );

}


export default CustomerForm;