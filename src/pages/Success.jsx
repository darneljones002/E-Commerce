import { Link } from "react-router-dom";

function Success() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p className="mb-6">Your London street fashion pieces are on the way.</p>
      <Link to="/" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
        Continue Shopping
      </Link>
    </section>
  );
}

export default Success;
