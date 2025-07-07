import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const products = [
    { id: 1, name: "Camden Hoodie", price: 90, image: "/assets/products/placeholder.jpg", description: "Oversized hoodie with London street flair." },
    { id: 2, name: "Brixton Cargo", price: 75, image: "/assets/products/placeholder.jpg", description: "Loose-fit cargo pants for ultimate comfort." },
    { id: 3, name: "Soho Jacket", price: 120, image: "/assets/products/placeholder.jpg", description: "Bold cropped jacket, street-ready." },
    { id: 4, name: "Hackney Tee", price: 45, image: "/assets/products/placeholder.jpg", description: "Graphic tee inspired by Hackney vibes." },
    { id: 5, name: "Chelsea Denim", price: 85, image: "/assets/products/placeholder.jpg", description: "Distressed denim for urban explorers." },
    { id: 6, name: "Shoreditch Cap", price: 30, image: "/assets/products/placeholder.jpg", description: "Statement cap for city moves." },
    { id: 7, name: "Kensington Puffer", price: 150, image: "/assets/products/placeholder.jpg", description: "Puffer jacket, cozy and edgy." },
    { id: 8, name: "Oxford Crew", price: 65, image: "/assets/products/placeholder.jpg", description: "Classic crewneck with modern twist." },
    { id: 9, name: "Piccadilly Scarf", price: 35, image: "/assets/products/placeholder.jpg", description: "Soft scarf, cold-weather essential." },
    { id: 10, name: "Notting Hill Shorts", price: 55, image: "/assets/products/placeholder.jpg", description: "Loose-fit shorts for chill summer days." }
  ];

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCart = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)).filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/product/:id" element={<ProductPage products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
