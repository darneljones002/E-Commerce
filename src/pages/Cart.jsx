import { Link } from "react-router-dom";

function Cart({ cart, updateCart }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <input
                type="number"
                value={item.quantity}
                onChange={e => updateCart(item.id, parseInt(e.target.value))}
                min="1"
                className="w-16 border p-1"
              />
            </div>
          ))}
          <div className="text-right font-semibold text-xl">Subtotal: ${subtotal.toFixed(2)}</div>
          <Link to="/checkout" className="bg-black text-white px-6 py-3 rounded inline-block mt-4">
            Checkout
          </Link>
        </>
      )}
    </section>
  );
}

export default Cart;
