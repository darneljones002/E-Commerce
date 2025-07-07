import { Link } from "react-router-dom";

function Cart({ cart, updateCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name} — ${item.price} x {item.quantity}</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateCart(item.id, Number(e.target.value))}
                  className="border w-16 text-center"
                />
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold mt-4">Total: ${total}</p>
          <Link to="/checkout" className="inline-block bg-black text-white px-6 py-3 rounded mt-4">Proceed to Checkout</Link>
        </>
      )}
    </section>
  );
}

export default Cart;
