import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) return alert("Please fill out all fields.");

    await addDoc(collection(db, "orders"), {
      ...form,
      items: cart,
      createdAt: new Date(),
    });

    clearCart();
    navigate("/success");
  };

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2"
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-2"
        />
        <textarea
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="border p-2"
        />
        <button type="submit" className="bg-black text-white px-4 py-2">Place Order</button>
      </form>
    </section>
  );
}

export default Checkout;
