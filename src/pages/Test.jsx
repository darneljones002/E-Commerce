import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home2 from './pages/Home2';
import Products from './pages/Products';
import './index.css';

function App() {
  return (
    <Router>
      <nav className="bg-black text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold text-platinum">Middleton Method</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-platinum transition">Home</Link>
          <Link to="/products" className="hover:text-platinum transition">Products</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
