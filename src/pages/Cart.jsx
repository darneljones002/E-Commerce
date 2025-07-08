import { Link } from "react-router-dom";

function Cart({ cart, updateCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500 underline">Continue shopping</Link>.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">${item.price} x {item.quantity}</p>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateCart(item.id, parseInt(e.target.value) || 1)}
                  className="w-16 border p-1 text-center"
                />
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold mt-4">Total: ${total}</p>
          <Link to="/checkout" className="inline-block mt-4 bg-black text-white px-4 py-2">
            Proceed to Checkout
          </Link>
        </>
      )}
    </section>
  );
}

export default Cart;
