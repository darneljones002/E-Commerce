// src/pages/Home.jsx
import React from "react";
//import { Link } from "react-router-dom";

export default function Home({ products, addToCart }) {
  return (
    <main className="bg-black text-white font-sans min-h-screen">
      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-r from-black via-gray-900 to-black">
        <h2 className="text-5xl font-bold mb-4">London Street Fashion</h2>
        <p className="text-gray-400 text-xl mb-8">Bold. Raw. Unapologetic.</p>
        <a
          href="#shop"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </section>

      {/* Products */}
      <section id="shop" className="py-20 px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Featured Collection</h3>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-400 mb-4">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-white text-black py-2 rounded hover:bg-gray-300 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
