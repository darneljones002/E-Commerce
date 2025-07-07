import { Link } from "react-router-dom";

function Header({ cart }) {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <Link to="/" className="text-2xl font-bold">LondonStreet</Link>
      <nav>
        <Link to="/cart" className="mr-4">Cart ({cartCount})</Link>
        <Link to="/login">Admin</Link>
      </nav>
    </header>
  );
}

export default Header;
