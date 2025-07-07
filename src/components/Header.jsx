import { Link } from "react-router-dom";

function Header({ cart }) {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">London Street</Link>
      <nav>
        <Link to="/cart" className="ml-4">
          Cart ({itemCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
