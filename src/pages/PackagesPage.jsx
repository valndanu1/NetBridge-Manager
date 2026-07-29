import { useEffect, useState } from "react";
import "../styles/Customer.css";
function PackagesPage() {

  const [packages, setPackages] = useState(() => {
    const saved = localStorage.getItem("packages");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Basic",
            speed: "10 Mbps",
            price: 1500,
          },
          {
            id: 2,
            name: "Standard",
            speed: "20 Mbps",
            price: 2000,
          },
          {
            id: 3,
            name: "Premium",
            speed: "30 Mbps",
            price: 3000,
          },
        ];
  });


  const [form, setForm] = useState({
    name: "",
    speed: "",
    price: "",
  });


  const [editingId, setEditingId] = useState(null);



  useEffect(() => {
    localStorage.setItem(
      "packages",
      JSON.stringify(packages)
    );
  }, [packages]);



  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }



  function handleSubmit(e) {
    e.preventDefault();


    if (!form.name || !form.speed || !form.price) {
      alert("Fill all fields");
      return;
    }


    if (editingId) {

      setPackages(
        packages.map((pkg) =>
          pkg.id === editingId
            ? {
                ...pkg,
                ...form,
                price: Number(form.price),
              }
            : pkg
        )
      );


      setEditingId(null);

    } else {

      setPackages([
        ...packages,
        {
          id: Date.now(),
          ...form,
          price: Number(form.price),
        },
      ]);

    }


    setForm({
      name: "",
      speed: "",
      price: "",
    });

  }



  function editPackage(pkg) {

    setForm({
      name: pkg.name,
      speed: pkg.speed,
      price: pkg.price,
    });

    setEditingId(pkg.id);

  }



  function deletePackage(id) {

    setPackages(
      packages.filter(
        (pkg) => pkg.id !== id
      )
    );

  }



  return (
    <div>

      <h1>
        Package Management
      </h1>


      <form
        onSubmit={handleSubmit}
        className="customer-form"
      >

        <input
          name="name"
          placeholder="Package Name"
          value={form.name}
          onChange={handleChange}
        />


        <input
          name="speed"
          placeholder="Speed (Mbps)"
          value={form.speed}
          onChange={handleChange}
        />


        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />


        <button type="submit">
          {editingId ? "Update Package" : "Add Package"}
        </button>

      </form>


      <br />


      <table className="customers-table">

        <thead>

          <tr>
            <th>Package</th>
            <th>Speed</th>
            <th>Price</th>
            <th>Action</th>
          </tr>

        </thead>


        <tbody>

          {packages.map((pkg)=>(

            <tr key={pkg.id}>

              <td>{pkg.name}</td>

              <td>{pkg.speed}</td>

              <td>
                Ksh {pkg.price}
              </td>


              <td>

                <button
  className="package-btn package-edit"
  onClick={() => editPackage(pkg)}
>
  ✏️ Edit
</button>


<button
  className="package-btn package-delete"
  onClick={() => deletePackage(pkg.id)}
>
  🗑 Delete
</button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}


export default PackagesPage;