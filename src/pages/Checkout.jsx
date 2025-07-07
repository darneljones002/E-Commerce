import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const order = {
      ...form,
      items: cart,
      createdAt: serverTimestamp(),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    await addDoc(collection(db, "orders"), order);
    clearCart();
    setLoading(false);
    navigate("/success");
  };

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required className="w-full p-2 border" />
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} required className="w-full p-2 border" />
        <textarea name="address" placeholder="Address" onChange={handleChange} value={form.address} required className="w-full p-2 border" />
        <button type="submit" disabled={loading} className="bg-black text-white px-6 py-3 rounded">
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </section>
  );
}

export default Checkout;
