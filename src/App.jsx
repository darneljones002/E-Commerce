import { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Oversized Hoodie",
    price: "$120",
    image: "/assets/products/placeholder.jpg",
  },
  {
    id: 2,
    name: "Graffiti Tee",
    price: "$60",
    image: "/assets/products/placeholder.jpg",
  },
  {
    id: 3,
    name: "Cargo Pants",
    price: "$95",
    image: "/assets/products/placeholder.jpg",
  },
  {
    id: 4,
    name: "Bucket Hat",
    price: "$45",
    image: "/assets/products/placeholder.jpg",
  }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <main className="bg-black text-white font-sans min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">London Street</h1>
        <div>Cart ({cart.length})</div>
      </header>

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
              className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
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

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-700">
        &copy; {new Date().getFullYear()} London Street. All rights reserved.
      </footer>
    </main>
  );
}
