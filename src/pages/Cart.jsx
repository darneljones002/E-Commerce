import { Link } from "react-router-dom";

function Cart({ cart, updateCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>${item.price}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="w-16 border mr-2"
                  onChange={(e) => updateCart(item.id, parseInt(e.target.value))}
                />
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>
          <Link to="/checkout" className="inline-block mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Proceed to Checkout
          </Link>
        </>
      )}
    </section>
  );
}

export default Cart;
