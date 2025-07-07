import { Link } from "react-router-dom";

function MiniCart({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Link to="/cart" className="text-lg">
      🛍️ {totalItems} | ${subtotal.toFixed(2)}
    </Link>
  );
}

export default MiniCart;
