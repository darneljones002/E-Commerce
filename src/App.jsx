import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

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

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router>
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-black text-white">
        <h1 className="text-2xl font-bold">London Street</h1>
        <Link to="/cart" className="hover:underline">
          Cart ({cart.length})
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <footer className="py-8 text-center border-t border-gray-700 bg-black text-white">
        &copy; {new Date().getFullYear()} London Street. All rights reserved.
      </footer>
    </Router>
  );
}
