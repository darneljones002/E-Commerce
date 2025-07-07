// src/pages/CartPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);

  return (
    <main className="bg-black text-white min-h-screen px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/" className="text-blue-500 underline mt-4 inline-block">
            Continue shopping
          </Link>
        </>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-6">Total: ${total.toFixed(2)}</h3>
          <button
            onClick={() => alert("Thank you for your order! (placeholder checkout)")}
            className="bg-white text-black px-8 py-3 rounded hover:bg-gray-300 transition"
          >
            Checkout
          </button>
        </>
      )}
    </main>
  );
}
