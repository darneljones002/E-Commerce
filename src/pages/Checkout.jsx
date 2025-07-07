import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    clearCart();
    navigate("/success");
  };

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required className="w-full p-2 border" />
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} required className="w-full p-2 border" />
        <textarea name="address" placeholder="Address" onChange={handleChange} value={form.address} required className="w-full p-2 border" />
        <button type="submit" className="bg-black text-white px-6 py-3 rounded">Place Order</button>
      </form>
    </section>
  );
}

export default Checkout;
