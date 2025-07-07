import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";

function Header({ cart }) {
  return (
    <header className="flex justify-between items-center p-4 border-b shadow-sm">
      <Link to="/" className="text-2xl font-bold">London Streetwear</Link>
      <MiniCart cart={cart} />
    </header>
  );
}

export default Header;
