import { useState } from "react";
import ProductsAdmin from "../ProductsAdmin";
import Orders from "../Orders";

function Admin() {
  const [tab, setTab] = useState("products");

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab("products")}
          className={`px-4 py-2 ${tab === "products" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Products
        </button>
        <button
          onClick={() => setTab("orders")}
          className={`px-4 py-2 ${tab === "orders" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          Orders
        </button>
      </div>

      {tab === "products" ? <ProductsAdmin /> : <Orders />}
    </section>
  );
}

export default Admin;
